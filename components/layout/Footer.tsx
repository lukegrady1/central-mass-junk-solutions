import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SERVICES } from '@/content/services'

export function Footer() {
  const topCities = BUSINESS.serviceCities.slice(0, 8)
  return (
    <footer className="bg-primary-900 text-slate-300">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center" aria-label={`${BUSINESS.name} home`}>
              <Image
                src="/logo.png"
                alt={BUSINESS.name}
                width={1710}
                height={1546}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-3 font-display font-bold text-lg text-white">{BUSINESS.name}</p>
            <p className="mt-4 text-slate-400 max-w-sm leading-relaxed">
              {BUSINESS.tagline} Locally owned, fully insured, eco-friendly disposal first.
            </p>
            <p className="mt-4 text-xs text-slate-500">License: {BUSINESS.licenseNumber}</p>
            <div className="mt-6 flex gap-3">
              <a href={BUSINESS.socialUrls.facebook} aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={BUSINESS.socialUrls.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-display font-semibold text-white">Service Area</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {topCities.map((c) => (
                <li key={c}>{c}, MA</li>
              ))}
            </ul>
            <Link href="/service-area" className="mt-3 inline-block text-sm text-accent-500 hover:text-accent-100 font-medium">
              View All →
            </Link>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-sm">
          <a href={BUSINESS.phoneHref} className="flex items-center gap-3 hover:text-white">
            <Phone className="w-4 h-4 text-accent-500" />
            {BUSINESS.phone}
          </a>
          <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-white">
            <Mail className="w-4 h-4 text-accent-500" />
            {BUSINESS.email}
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-accent-500" />
            {BUSINESS.address.city}, {BUSINESS.address.state}
          </div>
          <div className="flex items-center gap-3 sm:col-span-3">
            <Clock className="w-4 h-4 text-accent-500" />
            Mon–Sat 7 AM – 7 PM • Sun by appointment
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6 text-xs">
        <Container className="flex flex-col sm:flex-row gap-3 justify-between text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
