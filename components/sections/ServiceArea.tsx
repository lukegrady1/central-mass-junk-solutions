import { MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export function ServiceArea() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Service Area"
          title={<>Proudly Serving <span className="text-accent-500">{BUSINESS.region}</span></>}
          description="Based in Hubbardston, covering north-central Massachusetts and beyond. Most jobs land within a 30-minute drive."
        />

        <Reveal>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-soft">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps?q=Hubbardston,MA&z=10&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {BUSINESS.serviceCities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-bg-alt border border-slate-200 text-sm text-slate-700 hover:border-accent-500 hover:text-accent-600 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <p className="text-slate-600 mb-4">Don't see your town? Call us — we probably cover it.</p>
          <Button href={BUSINESS.phoneHref} variant="outline" size="md">
            Call {BUSINESS.phone}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
