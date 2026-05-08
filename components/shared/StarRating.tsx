import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  rating = 5,
  size = 'md',
  className,
}: {
  rating?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizes = { sm: 'w-3.5 h-3.5', md: 'w-5 h-5', lg: 'w-6 h-6' }
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(sizes[size], i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300')}
        />
      ))}
    </div>
  )
}
