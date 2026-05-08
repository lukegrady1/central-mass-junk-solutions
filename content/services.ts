import {
  Home, Building2, Sofa, TreePine, Trash2, Music,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  includes: string[]
  useCases: string[]
  emoji: string
}

export const SERVICES: Service[] = [
  {
    slug: 'residential',
    title: 'Residential Cleanouts',
    short: 'Garages, basements, attics — gone in a day.',
    description:
      'Clearing out years of clutter? We handle the heavy lifting. Garage, basement, attic, full estate — whatever is in the way, we make it disappear.',
    icon: Home,
    includes: [
      'Furniture and mattresses',
      'Old appliances',
      'Boxes, totes, holiday clutter',
      'Yard tools and grills',
      'Sweep-out included',
    ],
    useCases: ['Garage cleanouts', 'Basement & attic clearouts', 'Post-move debris', 'Downsizing', 'Estate cleanouts'],
    emoji: '🏠',
  },
  {
    slug: 'commercial',
    title: 'Commercial / Office',
    short: 'Office furniture, retail fixtures, restaurant equipment.',
    description:
      'Property managers, office admins, and contractors trust us for fast, after-hours-capable commercial cleanouts. We invoice and provide certificates of insurance.',
    icon: Building2,
    includes: [
      'Office furniture & cubicles',
      'Retail fixtures and shelving',
      'Restaurant equipment',
      'Construction debris',
      'COI provided on request',
    ],
    useCases: ['Office moves', 'Tenant turnovers', 'Store closeouts', 'Restaurant equipment haul', 'Job site cleanup'],
    emoji: '🏢',
  },
  {
    slug: 'furniture',
    title: 'Furniture & Appliances',
    short: 'Couches, fridges, treadmills — out today.',
    description:
      'Single-item or whole-house. We unhook appliances, navigate stairs, and recycle metals so you do not have to.',
    icon: Sofa,
    includes: [
      'Couches, sectionals, recliners',
      'Mattresses and box springs',
      'Refrigerators and freezers',
      'Washers, dryers, treadmills',
      'Stairs and tight spaces — no problem',
    ],
    useCases: ['Single-item pickup', 'New furniture delivery prep', 'Appliance swaps', 'Mattress disposal'],
    emoji: '🛋️',
  },
  {
    slug: 'yard-construction',
    title: 'Yard Waste & Construction Debris',
    short: 'Brush, fencing, drywall, shingles — hauled.',
    description:
      'From storm cleanup to remodel debris. We bring the muscle and the truck. No bagging required.',
    icon: TreePine,
    includes: [
      'Brush, branches, leaves',
      'Old fencing and decking',
      'Drywall, lumber, flooring',
      'Roofing shingles',
      'Concrete and brick (limited)',
    ],
    useCases: ['Post-storm cleanup', 'DIY remodel debris', 'Fence tear-out', 'Deck demo'],
    emoji: '🌳',
  },
  {
    slug: 'estate',
    title: 'Estate & Hoarder Cleanouts',
    short: 'Compassionate, discreet, end-to-end.',
    description:
      'Tough situations handled with respect. We coordinate with realtors, families, and case managers, and we sort donations as we go.',
    icon: Trash2,
    includes: [
      'Full-house clearouts',
      'Sorting valuables before disposal',
      'Coordination with realtors',
      'Donation drop-offs',
      'Discreet unmarked trucks on request',
    ],
    useCases: ['Estate cleanouts', 'Hoarding situations', 'Foreclosure trash-outs', 'Realtor turnovers'],
    emoji: '🏚️',
  },
  {
    slug: 'specialty',
    title: 'Specialty Items',
    short: 'Hot tubs, pianos, sheds, playsets.',
    description:
      'The stuff other haulers say no to. Our crew is trained to break down hot tubs, move uprights, and demo backyard sheds in a day.',
    icon: Music,
    includes: [
      'Hot tub demolition & removal',
      'Pianos (upright and grand)',
      'Sheds — disassembly included',
      'Playsets and swing sets',
      'Fuel tanks (drained)',
    ],
    useCases: ['Backyard hot tub removal', 'Piano disposal', 'Shed demo', 'Playset takedown'],
    emoji: '♨️',
  },
]
