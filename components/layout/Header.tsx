'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-200',
          scrolled ? 'bg-white shadow-soft' : 'bg-white/80 backdrop-blur-sm',
        )}
      >
        <Container className="h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label={`${BUSINESS.name} home`}>
            <Image
              src="/logo.png"
              alt={BUSINESS.name}
              width={1710}
              height={1546}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-700 hover:text-primary-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-accent-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <Button href="/quote" variant="primary" size="sm" className="hidden sm:inline-flex">
              Get Instant Quote
            </Button>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-primary-900"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-primary-900/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-lift flex flex-col">
            <div className="flex items-center justify-between h-20 px-6 border-b border-slate-200">
              <span className="font-display font-bold text-lg text-primary-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-primary-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1" aria-label="Mobile">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-primary-900 hover:text-accent-600 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t border-slate-200 space-y-3">
              <Button href="/quote" variant="primary" className="w-full">Get Instant Quote</Button>
              <Button href={BUSINESS.phoneHref} variant="outline" className="w-full">
                <Phone className="w-4 h-4" /> {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
