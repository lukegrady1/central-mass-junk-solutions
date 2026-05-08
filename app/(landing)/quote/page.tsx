import type { Metadata } from 'next'
import Link from 'next/link'
import { Truck, Phone, Shield, Star, Leaf } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { MultiStepQuote } from '@/components/forms/MultiStepQuote'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Get an Instant Junk Removal Quote in 15 Minutes',
  description: `Tell us what you have, snap a few photos, and we'll text you a price within 15 minutes. Same-day pickup available across ${BUSINESS.region}.`,
  robots: { index: true, follow: false },
}

export default function QuotePage() {
  return (
    <div className="bg-bg-alt min-h-screen">
      <header className="bg-white border-b border-slate-200">
        <Container className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg text-primary-900">
            <span className="w-8 h-8 rounded-xl bg-primary-900 text-white flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </span>
            <span className="hidden sm:inline">{BUSINESS.shortName}</span>
          </Link>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-accent-600">
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
        </Container>
      </header>

      <Container className="py-10 md:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-900 tracking-tight">
              Get Your Junk Removal Quote in <span className="text-accent-500">15 Minutes</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Four quick questions. Then we text you a price. No call required.
            </p>

            <div className="mt-8">
              <MultiStepQuote />
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                <span className="font-display font-bold text-primary-900">Why folks call us</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We're a local crew based in Hubbardston. Real names, real faces, no national-chain runaround. Send a photo, get a price, we show up.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-success shrink-0" />
                  Locally owned & operated
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="w-4 h-4 text-success shrink-0" />
                  Donation & recycling first
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-success shrink-0" />
                  Same-day pickup available
                </li>
              </ul>
            </div>

            <div className="bg-primary-900 text-white rounded-2xl p-6">
              <p className="font-display font-bold text-lg">Prefer to talk?</p>
              <p className="text-sm text-slate-300 mt-1">A real human picks up.</p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-accent-500 font-bold hover:text-accent-100"
              >
                <Phone className="w-4 h-4" /> {BUSINESS.phone}
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  )
}
