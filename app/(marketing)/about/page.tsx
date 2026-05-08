import type { Metadata } from 'next'
import { Heart, Truck, Award, Users } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Locally Owned, Honest, Fast',
  description: `Meet the family behind ${BUSINESS.name}. Locally owned junk removal serving Central Massachusetts since 2014.`,
}

const crew = [
  { name: 'Mike Grady', role: 'Owner / Driver', fact: 'Worcester native. Has personally hauled a piano up three flights.' },
  { name: 'Tony Reyes', role: 'Crew Lead', fact: 'Knows every Habitat ReStore drop-off hour by heart.' },
  { name: 'Dani Park', role: 'Quote Specialist', fact: 'Will text you a price before your coffee gets cold.' },
  { name: 'Jay Walsh', role: 'Crew Member', fact: 'Volunteers Saturdays at the local food bank.' },
]

const values = [
  { icon: Heart, title: 'Treat your home like our mom\'s', body: 'Drop cloths, careful corners, and a real sweep-up. Always.' },
  { icon: Truck, title: 'Show up when we say we will', body: 'On-time arrival within a 2-hour window. We text en route.' },
  { icon: Award, title: 'Donate first, recycle second, dump last', body: 'About 70% of every load gets a second life.' },
  { icon: Users, title: 'Real local jobs', body: `We hire from ${BUSINESS.region}, pay fair wages, and pay on time.` },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Meet the Family Behind <span className="text-accent-500">{BUSINESS.shortName}</span></>}
        description={`Locally owned and operated since 2014. We're the crew your neighbors call when they need junk gone — fast, honest, and without the corporate runaround.`}
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent-500 via-accent-600 to-primary-900 flex items-center justify-center">
                <Truck className="w-32 h-32 text-white/80" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-900 tracking-tight">
                We started this because junk removal felt broken.
              </h2>
              <div className="mt-6 space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  In 2014, Mike Grady was helping his uncle clean out a basement after a flood. The "national brand" he called wanted $800, couldn't come for three days, and showed up an hour late charging extra for stairs. Mike rented a U-Haul that afternoon and did the job himself for a sixth of the price.
                </p>
                <p>
                  A week later, three neighbors had asked for help. A month later, he bought a truck. Twelve years later, we run two trucks across {BUSINESS.region}, donate truckloads of furniture every month, and answer the phone the same way we did on day one — like a neighbor.
                </p>
                <p className="font-display font-semibold text-primary-900">
                  Same-day. Upfront prices. We do the heavy lifting. That's the whole pitch.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-alt">
        <Container>
          <SectionHeading title="What We Stand For" description="Four rules we won't break." />
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-xl text-primary-900">{v.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="The Crew" description="Real names, real faces, real reviews." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crew.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.05}>
                <div className="text-center">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center font-display font-bold text-white text-5xl">
                    {p.name.charAt(0)}
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg text-primary-900">{p.name}</h3>
                  <p className="text-sm text-accent-600 font-medium">{p.role}</p>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.fact}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA title="Want to Work With Us?" description="Job openings, partnership inquiries, or charity drives — we'd love to hear from you." />
    </>
  )
}
