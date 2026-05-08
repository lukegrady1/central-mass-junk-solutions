import { CheckCircle2, Clock, Shield, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { BUSINESS } from '@/lib/constants'

export function TrustBar() {
  const stats = [
    { icon: CheckCircle2, label: `${BUSINESS.jobsCompleted} jobs completed` },
    { icon: Clock, label: 'Same-day pickup available' },
    { icon: Shield, label: '100% satisfaction guarantee' },
    { icon: MapPin, label: `${BUSINESS.yearsLocal} years serving ${BUSINESS.region}` },
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
