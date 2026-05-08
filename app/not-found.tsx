import Link from 'next/link'
import { Truck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { BUSINESS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center bg-gradient-to-br from-slate-50 to-accent-100/30">
      <Container className="py-20 text-center">
        <div className="inline-flex w-16 h-16 rounded-2xl bg-primary-900 text-white items-center justify-center">
          <Truck className="w-8 h-8" />
        </div>
        <h1 className="mt-8 font-display font-bold text-5xl md:text-7xl text-primary-900 tracking-tight">404</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
          That page was hauled away. Let's get you back.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">Back to Home</Button>
          <Button href={BUSINESS.phoneHref} variant="outline">Call {BUSINESS.phone}</Button>
        </div>
      </Container>
    </div>
  )
}
