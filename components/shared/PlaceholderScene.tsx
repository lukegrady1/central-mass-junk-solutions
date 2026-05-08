import { cn } from '@/lib/utils'

type Theme =
  | 'garage'
  | 'basement'
  | 'estate'
  | 'office'
  | 'yard'
  | 'hottub'

type Variant = 'before' | 'after'

const themes: Record<Theme, { label: string; emoji: string }> = {
  garage: { label: 'Garage', emoji: '🚗' },
  basement: { label: 'Basement', emoji: '🛋️' },
  estate: { label: 'Estate Cleanout', emoji: '🏚️' },
  office: { label: 'Office', emoji: '🏢' },
  yard: { label: 'Yard / Construction', emoji: '🌳' },
  hottub: { label: 'Hot Tub Removal', emoji: '♨️' },
}

const beforeShapes = ['📦', '🪑', '📺', '🛢️', '🪜', '📦', '🛏️', '🧱', '📦', '🛞', '📺', '📦']

export function PlaceholderScene({
  theme,
  variant,
  className,
}: {
  theme: Theme
  variant: Variant
  className?: string
}) {
  const t = themes[theme]
  const isBefore = variant === 'before'

  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden select-none',
        isBefore
          ? 'bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800'
          : 'bg-gradient-to-br from-sky-100 via-white to-emerald-50',
        className,
      )}
      aria-label={`${variant} ${t.label}`}
    >
      {/* Texture overlay */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 opacity-25',
          isBefore ? 'mix-blend-overlay' : 'mix-blend-multiply',
        )}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(0,0,0,0.4) 0px, transparent 60px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.3) 0px, transparent 80px)',
        }}
      />

      {isBefore ? (
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 p-3 opacity-90">
          {beforeShapes.map((s, i) => (
            <span
              key={i}
              className="text-3xl md:text-5xl flex items-end justify-center drop-shadow-lg"
              style={{
                transform: `rotate(${(i * 37) % 30 - 15}deg) translateY(${(i * 13) % 8}px)`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl md:text-9xl opacity-25">{t.emoji}</div>
        </div>
      )}

      {/* Floor / horizon line for after panel */}
      {!isBefore && (
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-emerald-100/60 to-transparent"
        />
      )}

      {/* Variant badge */}
      <div className="absolute top-3 left-3">
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg',
            isBefore ? 'bg-stone-900 text-stone-200' : 'bg-success text-white',
          )}
        >
          {variant}
        </span>
      </div>
      <div className="absolute bottom-3 left-3">
        <span
          className={cn(
            'inline-flex items-center px-3 py-1 rounded-md text-xs font-medium',
            isBefore ? 'bg-black/40 text-white' : 'bg-white/80 text-slate-700',
          )}
        >
          {t.label}
        </span>
      </div>
    </div>
  )
}
