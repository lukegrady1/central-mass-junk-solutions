import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('py-16 md:py-24 lg:py-28', className)}>
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  inverse = false,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  inverse?: boolean
}) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center mx-auto max-w-3xl')}>
      {eyebrow && (
        <div className={cn('inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium', inverse ? 'bg-white/10 text-white' : 'bg-accent-100 text-accent-600')}>
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          'mt-4 font-display font-bold tracking-tight text-3xl md:text-5xl',
          inverse ? 'text-white' : 'text-primary-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base md:text-lg leading-relaxed', inverse ? 'text-slate-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </div>
  )
}
