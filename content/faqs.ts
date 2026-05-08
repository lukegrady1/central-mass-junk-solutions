export type FAQ = { q: string; a: string }

export const HOME_FAQS: FAQ[] = [
  {
    q: 'How fast can you come out?',
    a: 'Most days we can be at your door the same day. If you book before noon, we can usually get there before dinner. Otherwise, next-day windows are almost always open.',
  },
  {
    q: 'What can\'t you take?',
    a: 'We can\'t haul hazardous waste — paint, motor oil, gasoline, propane tanks, asbestos, or medical waste. Pretty much everything else is fair game. If you\'re unsure, send us a photo and we\'ll tell you straight.',
  },
  {
    q: 'Do I need to be home?',
    a: 'Not always. If everything is in a garage, driveway, or curbside, we can text you a before-and-after photo when we\'re done. We\'ll always confirm with you first.',
  },
  {
    q: 'How is pricing calculated?',
    a: 'Volume — how much of the truck you fill. We quote upfront from your photos so you know the price before we lift a finger. No weight surprises, no hidden disposal fees.',
  },
  {
    q: 'Do you take hot tubs, pianos, or mattresses?',
    a: 'Yes to all three. Hot tubs and pianos take a bit of pre-planning so we can bring the right crew. Mattresses are routine — we recycle them whenever we can.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Fully licensed in Massachusetts and carrying $1M general liability. We\'re happy to send a Certificate of Insurance to property managers or HOAs.',
  },
  {
    q: 'Do you do commercial or construction jobs?',
    a: 'Absolutely. Office cleanouts, retail closeouts, post-renovation debris — we run after-hours when needed and invoice net-15.',
  },
  {
    q: 'What\'s your service area?',
    a: 'All of Central Mass — Leominster, Fitchburg, Worcester, Gardner, and most surrounding towns. If you\'re close, just call. We almost always cover it.',
  },
]

export const PRICING_FAQS: FAQ[] = [
  {
    q: 'Why is pricing based on volume?',
    a: 'Because it is the fairest model. We charge you for the space your stuff takes up in the truck, not the time we spend driving or weight we carry.',
  },
  {
    q: 'Are taxes and disposal fees included?',
    a: 'Yes. The price you see is the price you pay. No transfer-station surcharges, no fuel fees.',
  },
  {
    q: 'When do I pay?',
    a: 'After the job. We accept card, cash, check, Venmo, and Zelle. Commercial accounts can be invoiced.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Every quote is free. Send a photo and we will text you a price within 15 minutes during business hours.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    neighborhood: 'Leominster',
    date: 'Apr 2026',
    rating: 5,
    quote: 'Texted them a photo of my garage at 9am. Truck was here by 1pm. They cleared 20 years of junk in under two hours and swept the floor. Unreal.',
  },
  {
    name: 'Mike D.',
    neighborhood: 'Fitchburg',
    date: 'Mar 2026',
    rating: 5,
    quote: 'Quoted me less than half what 1-800-GOT-JUNK wanted. Showed up on time, polite crew, and they donated my old couch instead of dumping it.',
  },
  {
    name: 'Lauren P.',
    neighborhood: 'Worcester',
    date: 'Mar 2026',
    rating: 5,
    quote: 'I manage three rental properties and they are now my only call. Reliable, insured, and they hand me a receipt every time.',
  },
  {
    name: 'Tom R.',
    neighborhood: 'Gardner',
    date: 'Feb 2026',
    rating: 5,
    quote: 'They took out a hot tub no one else would touch. Disassembled it on the spot. Driveway looked better than when they got here.',
  },
] as const
