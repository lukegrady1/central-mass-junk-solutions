import { Phone, Clock } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'

export function TopBar() {
  return (
    <div className="bg-primary-900 text-white text-sm">
      <Container className="h-10 flex items-center justify-between gap-4">
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 font-medium hover:text-accent-500 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Call {BUSINESS.phone} • Text for Quote</span>
          <span className="sm:hidden">Call {BUSINESS.phone}</span>
        </a>
        <div className="hidden md:inline-flex items-center gap-2 text-slate-300">
          <Clock className="w-3.5 h-3.5" />
          {BUSINESS.hours}
        </div>
      </Container>
    </div>
  )
}
