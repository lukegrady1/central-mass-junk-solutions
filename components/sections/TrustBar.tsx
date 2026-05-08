import { Clock, Shield, MapPin, Recycle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { BUSINESS } from '@/lib/constants'

export function TrustBar() {
  const stats = [
    { icon: Clock, label: 'Same-day & next-day pickup' },
    { icon: MapPin, label: `Based in ${BUSINESS.address.city}, MA` },
    { icon: Shield, label: 'Locally owned & operated' },
    { icon: Recycle, label: 'Donation & recycling first' },
  ]
  return (
    <div className="bg-white border-y border-slate-200">
      <Container className="py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-slate-700">
              <Icon className="w-4 h-4 text-accent-500 shrink-0" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
