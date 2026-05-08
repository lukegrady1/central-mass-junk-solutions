'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const SERVICE_TYPES = [
  'Residential cleanout',
  'Commercial / office',
  'Furniture or single item',
  'Yard waste / construction debris',
  'Estate cleanout',
  'Specialty (hot tub, piano, shed)',
  'Not sure yet',
]

export function ContactForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: new FormData(e.currentTarget) })
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please call us instead.')
      setSubmitting(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all'

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
          <input id="name" name="name" required className={inputCls} placeholder="Sarah" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
          <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="(555) 123-4567" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
        <input id="email" name="email" type="email" className={inputCls} placeholder="you@email.com" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">Service Type</label>
        <select id="service" name="service" className={inputCls} defaultValue="">
          <option value="" disabled>Select a service…</option>
          {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about the job</label>
        <textarea id="message" name="message" required rows={5} className={inputCls} placeholder="Garage cleanout, mostly furniture and boxes…" />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        {submitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
