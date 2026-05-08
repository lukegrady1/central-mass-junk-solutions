import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SERVICES } from '@/content/services'

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What We Haul"
          title="From One Couch to a Whole House"
          description="If it fits in our truck, it's gone today. Here are the jobs we run every week."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.slug} delay={(idx % 3) * 0.08}>
              <Link
                href={`/services#${s.slug}`}
                className="group relative h-full block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all"
              >
                <div className="relative h-44 bg-gradient-to-br from-primary-900 to-primary-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-90 transition-transform duration-500 group-hover:scale-110">
                    {s.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary-900">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-slate-600 leading-relaxed">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
