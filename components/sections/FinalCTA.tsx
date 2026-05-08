import { Camera, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export function FinalCTA({
  title = 'Ready to Reclaim Your Space?',
  description = 'Same-day appointments fill up fast. Lock yours in now.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-500 via-accent-500 to-accent-600 text-white">
      <div aria-hidden className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-900/20 blur-3xl" />

      <Container className="relative py-16 md:py-20 text-center">
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/quote" variant="white" size="lg" icon={<Camera className="w-5 h-5" />}>
            Get Instant Quote
          </Button>
          <Button
            href={BUSINESS.phoneHref}
            size="lg"
            icon={<Phone className="w-5 h-5" />}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-600 shadow-none"
          >
            Call {BUSINESS.phone}
          </Button>
        </div>
      </Container>
    </section>
  )
}
