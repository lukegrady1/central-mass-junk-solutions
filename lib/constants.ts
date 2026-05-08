export const BUSINESS = {
  name: 'Central Mass Junk Solutions',
  shortName: 'Central Mass Junk',
  tagline: 'Same-day junk removal across Central Massachusetts.',
  phone: '(XXX) XXX-XXXX',
  phoneHref: 'tel:+1XXXXXXXXXX',
  email: 'hello@centralmassjunk.com',
  address: {
    street: '123 Main Street',
    city: 'Leominster',
    state: 'MA',
    zip: '01453',
  },
  hours: 'Open Today: 7 AM – 7 PM',
  region: 'Central Massachusetts',
  serviceCities: [
    'Leominster', 'Fitchburg', 'Worcester', 'Gardner', 'Lunenburg',
    'Sterling', 'Lancaster', 'Clinton', 'Westminster', 'Ashburnham',
    'Townsend', 'Princeton', 'Holden', 'West Boylston', 'Boylston',
    'Shirley', 'Harvard', 'Bolton', 'Berlin', 'Hubbardston',
  ],
  rating: 4.9,
  reviewCount: 200,
  yearsLocal: 12,
  jobsCompleted: '5,000+',
  socialUrls: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    google: 'https://google.com',
  },
  licenseNumber: 'MA-HIC #XXXXXX',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
] as const
