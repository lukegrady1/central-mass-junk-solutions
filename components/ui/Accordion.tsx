'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export type AccordionItem = { q: string; a: ReactNode }

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-lg md:text-xl text-primary-900">{item.q}</span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
