import { cn } from '@/lib/utils'
import type { ReactNode, ElementType } from 'react'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: ElementType
}) {
  return (
    <Tag className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}
