import { Camera, Calendar, Truck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

const steps = [
  {
    num: '01',
    icon: Camera,
    title: 'Send a Photo',
    body: 'Text or upload a quick pic of your junk. We quote within 15 minutes — no estimator visit, no awkward driveway hangout.',
  },
  {
    num: '02',
    icon: Calendar,
    title: 'Book Your Window',
    body: 'Pick a 2-hour arrival window. Same-day spots go fast, but we keep slots open every day for emergencies.',
  },
  {
    num: '03',
    icon: Truck,
    title: 'We Haul It Away',
    body: 'We do the lifting, the loading, and the sweep-up. You point at what stays. Cardless payment after you approve the job.',
  },
]

export function HowItWorks() {
  return (
    <Section className="bg-bg-alt">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Junk Removal Made Stupid Simple"
          description="Three steps, no estimator visits, no waiting around for a quote."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, idx) => (
            <Reveal key={s.num} delay={idx * 0.1}>
              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-soft hover:shadow-lift transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-accent-600" />
                  </div>
                  <span className="font-display font-bold text-5xl text-slate-100 leading-none">{s.num}</span>
                </div>
                <h3 className="mt-6 font-display font-bold text-2xl text-primary-900">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
