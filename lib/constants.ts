export const BUSINESS = {
  name: 'Central Mass Junk Solutions',
  shortName: 'Central Mass Junk',
  tagline: 'If you have unwanted junk, we have the solution.',
  phone: '(978) 696-7510',
  phoneHref: 'tel:+19786967510',
  smsHref: 'sms:+19786967510',
  email: 'centralmassjunksolutions@gmail.com',
  address: {
    city: 'Hubbardston',
    state: 'MA',
    zip: '01452',
  },
  hours: 'Always open — call or text 24/7',
  region: 'Central Massachusetts',
  // Hubbardston-centric — adjust as the service radius is confirmed
  serviceCities: [
    'Hubbardston', 'Gardner', 'Westminster', 'Templeton', 'Phillipston',
    'Princeton', 'Barre', 'Rutland', 'Holden', 'Sterling',
    'Ashburnham', 'Winchendon', 'Petersham', 'Athol', 'Royalston',
    'Leominster', 'Fitchburg', 'Lunenburg', 'Lancaster', 'Clinton',
  ],
  // Real numbers from the public Facebook page (319 followers, 2 reviews as of writing)
  followers: 319,
  reviewCount: 2,
  socialUrls: {
    facebook: 'https://www.facebook.com/p/Central-Mass-junk-solutions-61573042354546/',
    instagram: 'https://www.instagram.com/central.mass.junk.solutions',
  },
  // VERIFY before launch — placeholder until license info is provided
  licenseNumber: 'License # pending',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const
