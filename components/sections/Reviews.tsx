import { Facebook, Instagram, Star, Users, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export function Reviews() {
  return (
    <Section className="bg-primary-900 text-white">
      <Container>
        <SectionHeading
          eyebrow="Social Proof"
          title="New Crew. Growing Fast."
          description="We're a young, local operation. Follow our before/afters on social — and if we've helped you out, a quick review goes a long way."
          inverse
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Reveal>
            <a
              href={BUSINESS.socialUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center">
                <Facebook className="w-7 h-7 text-white" />
              </div>
              <p className="mt-4 font-display font-bold text-3xl">{BUSINESS.followers}+</p>
              <p className="text-sm text-slate-300">followers on Facebook</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all">
                Follow us <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={BUSINESS.socialUrls.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <p className="mt-4 font-display font-bold text-3xl">@central.mass.junk</p>
              <p className="text-sm text-slate-300">before / after reels</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all">
                See the work <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={BUSINESS.socialUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col items-center text-center bg-accent-500 text-white border border-accent-500 rounded-2xl p-7 hover:bg-accent-600 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Star className="w-7 h-7 text-white fill-white" />
              </div>
              <p className="mt-4 font-display font-bold text-2xl">Be Review #3</p>
              <p className="text-sm text-white/90">Help future neighbors find us</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all">
                Leave a review <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-300 mb-4 inline-flex items-center gap-2">
            <Users className="w-4 h-4 text-accent-500" />
            We're new to the public-facing side, but we work hard. Every job tries to earn a fan.
          </p>
        </div>
      </Container>
    </Section>
  )
}
