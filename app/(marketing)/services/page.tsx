import type { Metadata } from 'next'
import { CheckCircle2, XCircle } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/content/services'

export const metadata: Metadata = {
  title: 'Services — Junk Removal, Demolition, Cleanouts',
  description: 'Residential cleanouts, commercial debris, hot tubs, sheds, estate cleanouts, and more. Licensed and insured across Central Mass.',
}

const wontTake = [
  'Hazardous waste (paint, solvents, chemicals)',
  'Asbestos or lead paint',
  'Live ammunition or fireworks',
  'Medical / biological waste',
  'Liquid fuels or full propane tanks',
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-Service Junk Removal for Every Job"
        description="From a single couch to an entire estate. Whatever needs to go, we have the truck, the crew, and the muscle to make it happen — same day."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/quote" variant="primary" size="lg">Get Instant Quote</Button>
          <Button href="/pricing" variant="outline" size="lg">See Pricing</Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="space-y-16 md:space-y-24">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.slug}>
                <article id={s.slug} className="grid lg:grid-cols-12 gap-8 lg:gap-12 scroll-mt-24">
                  <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 aspect-[4/3] flex items-center justify-center text-9xl">
                      <span className="opacity-90">{s.emoji}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 text-accent-600 text-xs font-semibold uppercase tracking-wide">
                      <s.icon className="w-3.5 h-3.5" />
                      {s.title}
                    </div>
                    <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-primary-900 tracking-tight">
                      {s.short}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">{s.description}</p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {s.includes.map((line) => (
                        <div key={line} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.useCases.map((u) => (
                        <span key={u} className="px-3 py-1 rounded-full bg-bg-alt border border-slate-200 text-xs text-slate-600">
                          {u}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex gap-3">
                      <Button href="/quote" variant="primary" size="md">Quote This Job</Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-alt">
        <Container>
          <SectionHeading
            eyebrow="Be Aware"
            title="What We Don't Take"
            description="A short, honest list. If your stuff is on it, we'll point you to a partner who can help."
          />
          <Reveal>
            <ul className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
              {wontTake.map((item) => (
                <li key={item} className="flex items-start gap-3 px-6 py-4 text-slate-700">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
