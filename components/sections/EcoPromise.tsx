import { Leaf, Recycle, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export function EcoPromise() {
  return (
    <Section className="bg-bg-alt">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-success/20 via-success/10 to-success/5 aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm">
                  <div className="bg-white rounded-2xl p-5 shadow-soft text-center">
                    <Heart className="w-8 h-8 text-success mx-auto" />
                    <p className="mt-2 font-display text-2xl font-bold text-primary-900">12T</p>
                    <p className="text-xs text-slate-500">Donated 2025</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-soft text-center">
                    <Recycle className="w-8 h-8 text-success mx-auto" />
                    <p className="mt-2 font-display text-2xl font-bold text-primary-900">70%</p>
                    <p className="text-xs text-slate-500">Diverted</p>
                  </div>
                  <div className="col-span-2 bg-white rounded-2xl p-5 shadow-soft text-center">
                    <Leaf className="w-8 h-8 text-success mx-auto" />
                    <p className="mt-2 font-display text-base font-bold text-primary-900">
                      Local charity partners
                    </p>
                    <p className="text-xs text-slate-500">Habitat ReStore · Salvation Army · Big Brothers</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 text-success font-medium text-sm">
              <Leaf className="w-3.5 h-3.5" />
              Eco Promise
            </div>
            <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl text-primary-900 tracking-tight">
              Less Landfill. <span className="text-success">More Donations.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We donate usable items to local charities, recycle metals and electronics, and only landfill what truly can't be reused. Roughly 70% of every load we haul gets a second life.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                'Furniture & appliances → Habitat for Humanity ReStore',
                'Metals & electronics → certified recyclers',
                'Mattresses → state-certified mattress recycling',
                'Yard waste → composted, never landfilled',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-success mt-1 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
