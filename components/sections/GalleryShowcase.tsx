import Link from 'next/link'
import { ArrowRight, Clock, Truck, Leaf } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider'
import { PlaceholderScene } from '@/components/shared/PlaceholderScene'
import { Button } from '@/components/ui/Button'
import { featured } from '@/content/gallery'

export function GalleryShowcase() {
  const projects = featured()
  const hero = projects[0]

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="See the Difference. Slide to Compare."
          description="Drag the handle on any photo to peek at what we walked into vs. what we left behind."
        />

        {hero && (
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lift border border-slate-200">
                  <BeforeAfterSlider
                    before={<PlaceholderScene theme={hero.theme} variant="before" />}
                    after={<PlaceholderScene theme={hero.theme} variant="after" />}
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-wider text-accent-600 font-bold">{hero.city}</p>
                <h3 className="mt-2 font-display font-bold text-3xl md:text-4xl text-primary-900 tracking-tight">
                  {hero.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed text-lg">{hero.blurb}</p>
                {hero.stats && (
                  <ul className="mt-6 grid grid-cols-3 gap-3">
                    {hero.stats.volume && (
                      <li className="bg-bg-alt rounded-xl p-3 border border-slate-200 text-center">
                        <Truck className="w-4 h-4 text-accent-600 mx-auto" />
                        <p className="mt-1 text-xs text-slate-500">Volume</p>
                        <p className="font-display font-bold text-primary-900 text-sm">{hero.stats.volume}</p>
                      </li>
                    )}
                    {hero.stats.turnaround && (
                      <li className="bg-bg-alt rounded-xl p-3 border border-slate-200 text-center">
                        <Clock className="w-4 h-4 text-accent-600 mx-auto" />
                        <p className="mt-1 text-xs text-slate-500">Turnaround</p>
                        <p className="font-display font-bold text-primary-900 text-sm">{hero.stats.turnaround}</p>
                      </li>
                    )}
                    {hero.stats.tonnage && (
                      <li className="bg-bg-alt rounded-xl p-3 border border-slate-200 text-center">
                        <Leaf className="w-4 h-4 text-success mx-auto" />
                        <p className="mt-1 text-xs text-slate-500">Hauled</p>
                        <p className="font-display font-bold text-primary-900 text-sm">{hero.stats.tonnage}</p>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {/* Secondary projects */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.slice(1).map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.1}>
              <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lift transition-all">
                <div className="aspect-[4/3]">
                  <BeforeAfterSlider
                    before={<PlaceholderScene theme={p.theme} variant="before" />}
                    after={<PlaceholderScene theme={p.theme} variant="after" />}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-accent-600 font-bold">{p.city}</p>
                  <h4 className="mt-1 font-display font-bold text-lg text-primary-900">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{p.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/gallery" variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
            See the Full Gallery
          </Button>
        </div>
      </Container>
    </Section>
  )
}
