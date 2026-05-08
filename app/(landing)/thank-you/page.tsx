'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, MessageSquare, Calendar, Truck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

const timeline = [
  { icon: MessageSquare, title: 'Within 15 minutes', body: 'You\'ll get a text from us with your price and a calendar link.' },
  { icon: Calendar, title: 'Pick a window', body: 'Choose a same-day or next-day 2-hour arrival window.' },
  { icon: Truck, title: 'We show up', body: 'Crew texts when en route. Job done in under 2 hours, typically.' },
]

export default function ThankYouPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-accent-100/40 min-h-[80vh]">
      <Container className="py-16 md:py-24 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'backOut' }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success text-white"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 font-display font-bold text-4xl md:text-6xl text-primary-900 tracking-tight"
        >
          Got it. We're on it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          We'll text you a quote within 15 minutes during business hours. If you sent it overnight, look for a text first thing in the morning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-xl text-primary-900">What happens next</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {timeline.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-3 font-display font-semibold text-primary-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button href={BUSINESS.phoneHref} variant="primary" size="lg" icon={<Phone className="w-5 h-5" />}>
            Call Us Anyway
          </Button>
          <Button href="/" variant="outline" size="lg">Back to Home</Button>
        </motion.div>
      </Container>
    </div>
  )
}
