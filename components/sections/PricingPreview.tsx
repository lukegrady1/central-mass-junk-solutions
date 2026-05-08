import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export const TRUCK_TIERS = [
  { fill: '1/4', percent: 25, price: 149, label: 'Quarter Truck', desc: 'A few items: dresser, mattress, small appliance.' },
  { fill: '1/2', percent: 50, price: 249, label: 'Half Truck', desc: 'A garage corner or a bedroom worth.' },
  { fill: '3/4', percent: 75, price: 349, label: 'Three-Quarter Truck', desc: 'A full garage or basement section.' },
  { fill: 'Full', percent: 100, price: 449, label: 'Full Truck', desc: '~14 cubic yards. Most cleanouts fit here.' },
]

export function PricingPreview() {
  return (
    <Section className="bg-bg-alt">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Upfront Pricing. No Surprises."
          description="Our prices are based on volume — how much of the truck you fill. No weight surprises, no hidden disposal fees."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUCK_TIERS.map((t, idx) => (
            <Reveal key={t.fill} delay={idx * 0.06}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lift hover:-translate-y-1 transition-all h-full">
                {/* Truck-fill bar */}
                <div className="relative h-32 rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent-500 to-accent-600"
                    style={{ height: `${t.percent}%` }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-2 font-display font-bold text-white text-3xl">
                    {t.fill}
                  </div>
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-primary-900">{t.label}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                <p className="mt-4 font-display text-3xl font-bold text-primary-900">
                  ${t.price}
                  <span className="text-base font-medium text-slate-500"> starting</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {['Loading included', 'Sweep-up included', 'Disposal fees included', 'No fuel charge'].map((i) => (
              <li key={i} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 font-semibold text-accent-600 hover:text-accent-500">
            See full pricing & truck size guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
