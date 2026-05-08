'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Camera, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function InstantQuoteForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data })
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you')
    } catch (err) {
      setError('Something went wrong. Please call us instead.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Your name" name="name" required placeholder="Sarah" />
        <Field label="Phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
      </div>
      <Field label="ZIP code" name="zip" required placeholder="01453" inputMode="numeric" />
      <div>
        <label htmlFor="photo" className="block text-sm font-medium text-slate-700 mb-1.5">
          Photo of the junk <span className="text-slate-400 font-normal">(optional, gets you a faster quote)</span>
        </label>
        <label
          htmlFor="photo"
          className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-accent-500 hover:bg-accent-100/50 cursor-pointer transition-colors"
        >
          <Camera className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-500">Tap to upload a photo</span>
        </label>
        <input id="photo" name="photo" type="file" accept="image/*" className="sr-only" />
      </div>
      {!compact && (
        <Field label="Anything we should know?" name="notes" as="textarea" placeholder="Stairs, gate code, timing…" />
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
        {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5" />}
        {submitting ? 'Sending…' : 'Get My Quote'}
      </Button>
      <p className="text-xs text-slate-500 text-center">No spam. No callbacks at dinner. Just a price.</p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  as = 'input',
  inputMode,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  as?: 'input' | 'textarea'
  inputMode?: 'numeric' | 'tel' | 'email' | 'text'
}) {
  const baseClass = 'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all'
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea id={name} name={name} required={required} placeholder={placeholder} rows={3} className={baseClass} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} inputMode={inputMode} className={baseClass} />
      )}
    </div>
  )
}
