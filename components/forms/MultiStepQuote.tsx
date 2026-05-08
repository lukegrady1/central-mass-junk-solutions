'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Camera, Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const ITEM_OPTIONS = [
  { id: 'furniture', label: 'Furniture', emoji: '🛋️' },
  { id: 'appliances', label: 'Appliances', emoji: '🧊' },
  { id: 'mattresses', label: 'Mattresses', emoji: '🛏️' },
  { id: 'electronics', label: 'Electronics', emoji: '📺' },
  { id: 'yard', label: 'Yard waste', emoji: '🌳' },
  { id: 'construction', label: 'Construction debris', emoji: '🧱' },
  { id: 'estate', label: 'Whole estate', emoji: '🏚️' },
  { id: 'specialty', label: 'Hot tub / piano', emoji: '♨️' },
  { id: 'other', label: 'Other / not sure', emoji: '❓' },
]

const VOLUME_OPTIONS = [
  { id: 'quarter', label: '1/4 truck', desc: 'A few items', from: 149, percent: 25 },
  { id: 'half', label: '1/2 truck', desc: 'A bedroom worth', from: 249, percent: 50 },
  { id: 'three-quarter', label: '3/4 truck', desc: 'Full garage', from: 349, percent: 75 },
  { id: 'full', label: 'Full truck', desc: '~14 cubic yards', from: 449, percent: 100 },
  { id: 'unsure', label: 'Not sure', desc: "We'll figure it out", from: 0, percent: 60 },
]

const TOTAL_STEPS = 4

export function MultiStepQuote() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [items, setItems] = useState<string[]>([])
  const [volume, setVolume] = useState<string>('')
  const [photos, setPhotos] = useState<File[]>([])
  const [info, setInfo] = useState({ name: '', phone: '', zip: '', notes: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canNext = (() => {
    if (step === 0) return items.length > 0
    if (step === 1) return !!volume
    if (step === 2) return true
    if (step === 3) return info.name && info.phone && info.zip
    return true
  })()

  function toggleItem(id: string) {
    setItems((curr) => curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id])
  }

  function onPhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files ?? []).slice(0, 3)
    setPhotos(list)
  }

  async function onSubmit() {
    setError(null)
    setSubmitting(true)
    const data = new FormData()
    data.set('items', items.join(','))
    data.set('volume', volume)
    data.set('name', info.name)
    data.set('phone', info.phone)
    data.set('zip', info.zip)
    data.set('notes', info.notes)
    photos.forEach((p) => data.append('photos', p))
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data })
      if (!res.ok) throw new Error()
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please call us instead.')
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
      {/* Progress */}
      <div className="px-6 md:px-8 pt-6">
        <div className="flex items-center justify-between mb-2 text-xs font-medium text-slate-500">
          <span>Step {step + 1} of {TOTAL_STEPS}</span>
          <span>{Math.round(((step + 1) / TOTAL_STEPS) * 100)}% complete</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-500 rounded-full"
            initial={false}
            animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-900">What needs to go?</h2>
                <p className="mt-2 text-slate-500">Pick all that apply.</p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {ITEM_OPTIONS.map((opt) => {
                    const active = items.includes(opt.id)
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleItem(opt.id)}
                        className={cn(
                          'p-4 rounded-2xl border-2 text-left transition-all',
                          active
                            ? 'border-accent-500 bg-accent-100/50'
                            : 'border-slate-200 hover:border-slate-300',
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-3xl">{opt.emoji}</span>
                          {active && <Check className="w-5 h-5 text-accent-600" />}
                        </div>
                        <p className="mt-2 font-semibold text-primary-900 text-sm">{opt.label}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-900">How much stuff?</h2>
                <p className="mt-2 text-slate-500">Rough estimate is fine — we'll confirm from your photos.</p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {VOLUME_OPTIONS.map((v) => {
                    const active = volume === v.id
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVolume(v.id)}
                        className={cn(
                          'p-4 rounded-2xl border-2 transition-all text-left',
                          active ? 'border-accent-500 bg-accent-100/50' : 'border-slate-200 hover:border-slate-300',
                        )}
                      >
                        <div className="relative h-20 rounded-xl bg-slate-100 overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 bg-accent-500" style={{ height: `${v.percent}%` }} />
                        </div>
                        <p className="mt-3 font-semibold text-primary-900 text-sm">{v.label}</p>
                        <p className="text-xs text-slate-500">{v.desc}</p>
                        {v.from > 0 && <p className="mt-1 text-xs font-semibold text-accent-600">From ${v.from}</p>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-900">Got photos?</h2>
                <p className="mt-2 text-slate-500">Up to 3 pictures. Helps us nail the price the first time.</p>
                <label htmlFor="photos" className="mt-6 block">
                  <div className="flex flex-col items-center justify-center gap-3 px-6 py-12 rounded-2xl border-2 border-dashed border-slate-200 hover:border-accent-500 hover:bg-accent-100/30 cursor-pointer transition-colors">
                    <div className="w-14 h-14 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center">
                      <Camera className="w-7 h-7" />
                    </div>
                    <p className="font-semibold text-primary-900">Tap to add photos</p>
                    <p className="text-xs text-slate-500">JPG, PNG, HEIC up to 10 MB each</p>
                  </div>
                </label>
                <input id="photos" type="file" accept="image/*" multiple onChange={onPhotos} className="sr-only" />
                {photos.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {photos.map((p) => (
                      <li key={p.name} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-success" />
                        {p.name}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 text-sm text-slate-500">
                  No photos handy? That's fine — skip ahead. We'll ask for them by text.
                </p>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-900">Where do we text the price?</h2>
                <p className="mt-2 text-slate-500">Promise — no spam, no callbacks at dinner.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Input label="Your name" value={info.name} onChange={(v) => setInfo({ ...info, name: v })} placeholder="Sarah" />
                  <Input label="Phone" type="tel" value={info.phone} onChange={(v) => setInfo({ ...info, phone: v })} placeholder="(555) 123-4567" />
                  <Input label="ZIP code" value={info.zip} onChange={(v) => setInfo({ ...info, zip: v })} placeholder="01453" />
                  <Input label="Notes (optional)" value={info.notes} onChange={(v) => setInfo({ ...info, notes: v })} placeholder="Stairs, gate code…" />
                </div>
                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={cn(step === 0 && 'invisible')}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          {step < TOTAL_STEPS - 1 ? (
            <Button type="button" variant="primary" onClick={() => setStep((s) => s + 1)} disabled={!canNext}>
              Continue <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button type="button" variant="primary" onClick={onSubmit} disabled={!canNext || submitting}>
              {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
              {submitting ? 'Sending…' : 'Get My Quote'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function Input({
  label, value, onChange, type = 'text', placeholder,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
      />
    </div>
  )
}
