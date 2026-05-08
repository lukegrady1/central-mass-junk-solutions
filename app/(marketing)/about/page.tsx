import type { Metadata } from 'next'
import { Heart, Truck, Award, Users, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Locally Owned in Hubbardston, MA',
  description: `${BUSINESS.name} is a locally owned junk removal crew based in Hubbardston, serving Central Massachusetts. If you have unwanted junk, we have the solution.`,
}

const values = [
  { icon: Heart, title: 'Treat your home like our mom\'s', body: 'Drop cloths, careful corners, and a real sweep-up. Always.' },
  { icon: Truck, title: 'Show up when we say we will', body: 'On-time arrival within a 2-hour window. We text en route.' },
  { icon: Award, title: 'Donate first, recycle second, dump last', body: 'Whenever something can find a second home, that\'s where it goes.' },
  { icon: Users, title: 'Local accountability', body: `Real names, real faces, a phone that goes straight to the owner.` },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>The Local Crew Behind <span className="text-accent-500">{BUSINESS.shortName}</span></>}
        description="Hubbardston-based, family-run, and growing. We started this because the national chains take three days, charge too much, and treat your home like a job site."
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
                If you have unwanted junk, we have the solution.
              </h2>
              <div className="mt-6 space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  We're {BUSINESS.name} — a young, local hauling crew based in Hubbardston, MA. We started this because junk removal in {BUSINESS.region} should not feel like calling a corporation. It should feel like calling a neighbor with a truck.
                </p>
                <p>
                  We answer the phone ourselves. We text quotes the same day. We show up on time, do the lifting, sweep behind us, and donate or recycle whatever can be saved before anything sees a landfill. Every job is one chance to earn a fan — and we work like it.
                </p>
                <p className="font-display font-semibold text-primary-900">
                  Same day. Upfront prices. We do the heavy lifting. That's the whole pitch.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={BUSINESS.phoneHref} variant="primary" icon={<Phone className="w-4 h-4" />}>
                  Call {BUSINESS.phone}
                </Button>
                <Button href="/contact" variant="outline" icon={<MapPin className="w-4 h-4" />}>
                  Find us on the map
                </Button>
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

      <FinalCTA title="Need a hand with a haul?" description="Same-day appointments fill up fast. Send a photo, get a price, lock in your window." />
    </>
  )
}
