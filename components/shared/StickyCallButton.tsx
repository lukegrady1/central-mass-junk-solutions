import { Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export function StickyCallButton() {
  return (
    <a
      href={BUSINESS.phoneHref}
      className="fixed bottom-6 right-4 z-50 lg:hidden bg-accent-500 text-white px-5 py-4 rounded-full shadow-cta flex items-center gap-2 font-semibold hover:bg-accent-600 transition-colors"
      aria-label={`Call ${BUSINESS.phone}`}
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a>
  )
}
