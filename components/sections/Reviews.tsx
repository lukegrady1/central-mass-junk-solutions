'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { StarRating } from '@/components/shared/StarRating'
import { Button } from '@/components/ui/Button'
import { TESTIMONIALS } from '@/content/faqs'
import { BUSINESS } from '@/lib/constants'

export function Reviews() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <Section className="bg-primary-900 text-white">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Neighbors Love Us"
          description={
            <>
              <span className="font-display text-3xl font-bold text-white">{BUSINESS.rating}</span>
              <span className="ml-2"><StarRating rating={5} className="inline-flex" /></span>
              <span className="ml-2">average from {BUSINESS.reviewCount}+ Google Reviews</span>
            </>
          }
          inverse
        />

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >
              <Quote className="w-10 h-10 text-accent-500 mb-4" />
              <StarRating rating={TESTIMONIALS[idx].rating} className="mb-5" />
              <p className="text-xl md:text-2xl leading-relaxed text-white">"{TESTIMONIALS[idx].quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center font-display font-bold text-white">
                  {TESTIMONIALS[idx].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{TESTIMONIALS[idx].name}</p>
                  <p className="text-sm text-slate-400">{TESTIMONIALS[idx].neighborhood} · {TESTIMONIALS[idx].date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-accent-500 w-8' : 'bg-white/30'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/reviews" variant="white" size="md">See All Reviews</Button>
        </div>
      </Container>
    </Section>
  )
}
