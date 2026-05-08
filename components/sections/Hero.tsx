'use client'

import { motion } from 'framer-motion'
import { Camera, Phone, Shield, Leaf, Truck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { InstantQuoteForm } from '@/components/forms/InstantQuoteForm'
import { BUSINESS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-accent-100/40">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent-100/60 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary-500/10 blur-3xl" />

      <Container className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-600 font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              Same-Day Service Available
            </div>

            <h1 className="mt-6 font-display font-bold tracking-tight text-5xl md:text-7xl text-primary-900 leading-[1.05]">
              Junk Gone.
              <motion.span
                className="block text-accent-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              >
                Stress Gone.
              </motion.span>
            </h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {BUSINESS.region}'s most-trusted junk removal crew. Upfront pricing, same-day pickup, and we do all the heavy lifting — you don't lift a finger.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button href="/quote" variant="primary" size="lg" icon={<Camera className="w-5 h-5" />}>
                Get Instant Quote
              </Button>
              <Button href={BUSINESS.phoneHref} variant="outline" size="lg" icon={<Phone className="w-5 h-5" />}>
                Call {BUSINESS.phone}
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent-500" />
                Locally owned in Hubbardston
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                Always available — call or text
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-success" />
                Eco-friendly disposal
              </div>
            </motion.div>
          </motion.div>

          {/* Right — quote card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-2xl shadow-lift p-6 md:p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary-900">Get a Quote in 15 Minutes</h3>
                  <p className="text-sm text-slate-500">Snap a photo, we'll text you a price.</p>
                </div>
              </div>
              <InstantQuoteForm compact />
            </div>
          </motion.div>
        </div>

        {/* Truck badge — decorative */}
        <motion.div
          aria-hidden
          className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 items-center gap-3 px-5 py-3 rounded-full bg-white shadow-soft border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Truck className="w-5 h-5 text-accent-500" />
          <span className="text-sm font-medium text-slate-700">Same-day pickup • Hubbardston-based</span>
        </motion.div>
      </Container>
    </section>
  )
}
