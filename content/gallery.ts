export type GalleryCategory =
  | 'residential'
  | 'commercial'
  | 'estate'
  | 'yard'
  | 'specialty'

export type GalleryProject = {
  slug: string
  title: string
  city: string
  category: GalleryCategory
  theme: 'garage' | 'basement' | 'estate' | 'office' | 'yard' | 'hottub'
  blurb: string
  stats?: { volume?: string; turnaround?: string; tonnage?: string }
  featured?: boolean
}

export const CATEGORIES: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'estate', label: 'Estate' },
  { id: 'yard', label: 'Yard & Demo' },
  { id: 'specialty', label: 'Specialty' },
]

export const GALLERY: GalleryProject[] = [
  {
    slug: 'hubbardston-estate',
    title: 'Full Estate Cleanout',
    city: 'Hubbardston, MA',
    category: 'estate',
    theme: 'estate',
    blurb: 'A full-house cleanout posted to our Facebook in our most-shared before/after to date. Sorted donations, hauled the rest, and left the home ready for listing.',
    stats: { volume: '4 truckloads', turnaround: '2 days' },
    featured: true,
  },
  {
    slug: 'gardner-garage',
    title: 'Two-Car Garage Cleanout',
    city: 'Gardner, MA',
    category: 'residential',
    theme: 'garage',
    blurb: 'Years of accumulated tools, totes, and old furniture cleared in an afternoon. Floor swept clean and ready for the new homeowner walk-through.',
    stats: { volume: '3/4 truck', turnaround: 'Same-day' },
    featured: true,
  },
  {
    slug: 'westminster-basement',
    title: 'Flooded Basement Recovery',
    city: 'Westminster, MA',
    category: 'residential',
    theme: 'basement',
    blurb: 'Post-flood cleanout — saturated furniture, ruined drywall, and a busted treadmill. Hauled, recycled, and the family was back to dry ground by 5 PM.',
    stats: { volume: 'Full truck', turnaround: 'Next-day' },
    featured: true,
  },
  {
    slug: 'gardner-hottub',
    title: 'Backyard Hot Tub Demo',
    city: 'Gardner, MA',
    category: 'specialty',
    theme: 'hottub',
    blurb: 'Drained, disassembled, and hauled a six-person hot tub plus surrounding deck. Reseeded grass left behind. No crane required.',
    stats: { volume: '1/2 truck', turnaround: 'Same-day' },
  },
  {
    slug: 'gardner-office',
    title: 'Office Suite Closeout',
    city: 'Gardner, MA',
    category: 'commercial',
    theme: 'office',
    blurb: 'After-hours cleanout for a downsizing law office: 20 cubicles, file cabinets, and IT equipment. Certificate of insurance provided to the property manager.',
    stats: { volume: '2 truckloads', turnaround: 'Overnight' },
  },
  {
    slug: 'sterling-yard',
    title: 'Storm Damage Yard Cleanup',
    city: 'Sterling, MA',
    category: 'yard',
    theme: 'yard',
    blurb: 'After a microburst dropped two large pines and a section of fence, we cleared the yard, chipped the brush, and hauled the debris in a single visit.',
    stats: { volume: '3/4 truck', turnaround: 'Same-day' },
  },
  {
    slug: 'lunenburg-shed',
    title: 'Shed Demo & Removal',
    city: 'Lunenburg, MA',
    category: 'specialty',
    theme: 'yard',
    blurb: 'A leaning 10x12 shed taken down to bare slab. Lumber sorted for recycling, metal roof recycled, contents donated.',
    stats: { volume: '1/2 truck', turnaround: 'Same-day' },
  },
  {
    slug: 'princeton-attic',
    title: 'Attic Clearout',
    city: 'Princeton, MA',
    category: 'residential',
    theme: 'basement',
    blurb: 'Christmas decorations going back to the 1980s, old boxes of tax returns, and a vintage exercise bike. Sorted, donated, and recycled.',
    stats: { volume: '1/4 truck', turnaround: 'Same-day' },
  },
]

export function featured() {
  return GALLERY.filter((p) => p.featured)
}
