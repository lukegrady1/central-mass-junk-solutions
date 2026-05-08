import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-accent-100/30 pt-12 pb-16 md:pt-20 md:pb-24',
        className,
      )}
    >
      <div aria-hidden className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-accent-100/50 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-600 font-medium text-sm">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-4 font-display font-bold tracking-tight text-4xl md:text-6xl text-primary-900 leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
