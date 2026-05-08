import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — Call, Text, or Send a Photo',
  description: `Get in touch with ${BUSINESS.name}. Same-day quotes, fast call-back, and friendly humans on the other end.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="The Fastest Way to a Quote: Text Us a Photo"
        description="Or call. Or fill out the form. We're easy to reach and we answer fast."
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-900">Send Us a Message</h2>
              <p className="mt-2 text-slate-600">We typically respond within 15 minutes during business hours.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-bg-alt rounded-2xl p-6 border border-slate-200">
                <h3 className="font-display font-bold text-lg text-primary-900">Reach Us</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-slate-700 hover:text-accent-600">
                      <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center"><Phone className="w-4 h-4 text-accent-500" /></span>
                      <span>
                        <span className="block text-xs text-slate-500">Call or text</span>
                        <span className="font-semibold">{BUSINESS.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-slate-700 hover:text-accent-600">
                      <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center"><Mail className="w-4 h-4 text-accent-500" /></span>
                      <span>
                        <span className="block text-xs text-slate-500">Email</span>
                        <span className="font-semibold">{BUSINESS.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center"><MapPin className="w-4 h-4 text-accent-500" /></span>
                    <span>
                      <span className="block text-xs text-slate-500">Based in</span>
                      <span className="font-semibold">{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center"><Clock className="w-4 h-4 text-accent-500" /></span>
                    <span>
                      <span className="block text-xs text-slate-500">Hours</span>
                      <span className="font-semibold">{BUSINESS.hours}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Service area"
                  src="https://www.google.com/maps?q=Hubbardston,MA&z=11&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
