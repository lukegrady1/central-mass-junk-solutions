import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-white hover:bg-accent-600 shadow-cta',
  secondary:
    'bg-primary-900 text-white hover:bg-primary-700',
  outline:
    'bg-white text-primary-900 border border-slate-200 hover:border-primary-900',
  ghost:
    'bg-transparent text-primary-900 hover:bg-slate-100',
  white:
    'bg-white text-primary-900 hover:bg-slate-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-4 text-base md:text-lg',
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

type ButtonProps = {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  className?: string
  children: ReactNode
} & Omit<ComponentProps<'button'>, 'children' | 'className'>

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    if (isExternal) {
      return <a href={href} className={classes}>{content}</a>
    }
    return <Link href={href} className={classes}>{content}</Link>
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
