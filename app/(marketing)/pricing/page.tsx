import type { Metadata } from 'next'
import { CheckCircle2, AlertCircle, Phone, X, Check } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FAQ } from '@/components/sections/FAQ'
import { TRUCK_TIERS } from '@/components/sections/PricingPreview'
import { PRICING_FAQS } from '@/content/faqs'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pricing — Honest, Upfront Junk Removal Rates',
  description: 'Volume-based pricing with no hidden fees. See our truck-fill guide, what is included, and how we compare to national chains.',
}

const compareRows = [
  { label: 'Same-day pickup', us: true, them: false },
  { label: 'Upfront text quote (15 min)', us: true, them: false },
  { label: 'No fuel surcharge', us: true, them: false },
  { label: 'Local owner answers the phone', us: true, them: false },
  { label: 'Eco-friendly disposal first', us: true, them: false },
  { label: 'Donates usable items', us: true, them: false },
]

const adders = [
  '4+ flights of stairs (we still come, just need extra crew)',
  'Extreme weight (concrete, brick, dirt) over 1/2 truck',
  'Hazmat-adjacent items requiring special transfer',
  'Out-of-area trips beyond 30 minutes',
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Honest Pricing. No Hidden Fees."
        description="The price we text you is the price you pay. We base it on volume — how much of the truck you fill — never weight surprises."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/quote" variant="primary" size="lg">Get My Quote</Button>
          <Button href={BUSINESS.phoneHref} variant="outline" size="lg">
            <Phone className="w-5 h-5" /> Call {BUSINESS.phone}
          </Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading title="Truck-Fill Pricing Guide" description="Pay for what you fill. Most jobs land between 1/4 and full truck." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUCK_TIERS.map((t) => (
              <div key={t.fill} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
                <div className="relative h-40 rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent-500 to-accent-600" style={{ height: `${t.percent}%` }} />
                  <div className="absolute inset-0 flex items-end justify-center pb-2 font-display font-bold text-white text-3xl">
                    {t.fill}
                  </div>
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-primary-900">{t.label}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                <p className="mt-4 font-display text-3xl font-bold text-primary-900">${t.price}<span className="text-base font-medium text-slate-500"> starting</span></p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-alt">
        <Container>
          <SectionHeading
            eyebrow="The Honest Compare"
            title={<>Us vs. The Big Brand You've Heard On The Radio</>}
            description="Same trucks. Same labor. Different prices and response times."
          />
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-900 text-white text-left">
                    <th className="px-6 py-4 font-display font-semibold">Feature</th>
                    <th className="px-6 py-4 font-display font-semibold text-accent-500">{BUSINESS.shortName}</th>
                    <th className="px-6 py-4 font-display font-semibold text-slate-300">National Chain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareRows.map((r) => (
                    <tr key={r.label}>
                      <td className="px-6 py-4 font-medium text-slate-700">{r.label}</td>
                      <td className="px-6 py-4">
                        {r.us ? <Check className="w-5 h-5 text-success" /> : <X className="w-5 h-5 text-slate-300" />}
                      </td>
                      <td className="px-6 py-4">
                        {r.them ? <Check className="w-5 h-5 text-success" /> : <X className="w-5 h-5 text-slate-300" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-bg-alt rounded-2xl p-8 border border-slate-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold uppercase tracking-wide">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  What's Included
                </div>
                <h3 className="mt-4 font-display font-bold text-2xl text-primary-900">Always In Your Price</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {[
                    'Loading and lifting (we never ask you to help)',
                    'Sweep-up of the area',
                    'All disposal and recycling fees',
                    'Donation drop-off when applicable',
                    'Massachusetts state taxes',
                    'Truck and fuel — no surcharge',
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-bg-alt rounded-2xl p-8 border border-slate-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-semibold uppercase tracking-wide">
                  <AlertCircle className="w-3.5 h-3.5" />
                  What Adds to Cost
                </div>
                <h3 className="mt-4 font-display font-bold text-2xl text-primary-900">Honest About Surcharges</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {adders.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-slate-500">
                  We always tell you about surcharges before we start — never after.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FAQ items={PRICING_FAQS} eyebrow="Pricing FAQ" title="Pricing Questions, Answered" />
      <FinalCTA />
    </>
  )
}
