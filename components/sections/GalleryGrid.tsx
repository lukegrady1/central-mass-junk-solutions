'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Truck, Leaf } from 'lucide-react'
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider'
import { PlaceholderScene } from '@/components/shared/PlaceholderScene'
import { CATEGORIES, GALLERY, type GalleryCategory } from '@/content/gallery'
import { cn } from '@/lib/utils'

type Filter = GalleryCategory | 'all'

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>('all')

  const projects = useMemo(
    () => (filter === 'all' ? GALLERY : GALLERY.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((c) => {
          const active = filter === c.id
          return (
            <button
              key={c.id}
              onClick={() => setFilter(c.id as Filter)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all',
                active
                  ? 'bg-primary-900 text-white shadow-soft'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-900 hover:text-primary-900',
              )}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {projects.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lift transition-shadow"
            >
              <div className="aspect-[4/3]">
                <BeforeAfterSlider
                  before={<PlaceholderScene theme={p.theme} variant="before" />}
                  after={<PlaceholderScene theme={p.theme} variant="after" />}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs uppercase tracking-wider text-accent-600 font-bold truncate">{p.city}</p>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-bg-alt border border-slate-200 text-slate-500 font-semibold">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-1.5 font-display font-bold text-lg text-primary-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">{p.blurb}</p>
                {p.stats && (
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600">
                    {p.stats.volume && (
                      <li className="inline-flex items-center gap-1">
                        <Truck className="w-3 h-3 text-accent-600" />{p.stats.volume}
                      </li>
                    )}
                    {p.stats.turnaround && (
                      <li className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accent-600" />{p.stats.turnaround}
                      </li>
                    )}
                    {p.stats.tonnage && (
                      <li className="inline-flex items-center gap-1">
                        <Leaf className="w-3 h-3 text-success" />{p.stats.tonnage}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length === 0 && (
        <p className="text-center text-slate-500 py-12">No projects in this category yet.</p>
      )}
    </div>
  )
}
