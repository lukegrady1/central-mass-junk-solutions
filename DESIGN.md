# DESIGN.md — Junk Removal Website

> **Project Type:** Multi-page marketing site for a local junk removal service
> **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons
> **Backend/CRM:** GoHighLevel (forms, calendar, SMS, missed-call text-back, review automation)
> **Hosting:** Vercel
> **Goal:** Convert local homeowners and property managers into booked jobs via phone calls and instant quote form submissions.

---

## 1. Brand Strategy & Positioning

### 1.1 Brand Voice
- **Tone:** Friendly, no-nonsense, trustworthy. Think "your strong neighbor with a truck" — not corporate.
- **Promise:** *Same-day pickup. Upfront pricing. We do the heavy lifting.*
- **Differentiators:**
  1. **Same-day / next-day service** (vs. 3-day waits from 1-800-GOT-JUNK)
  2. **Upfront text quotes** (send a photo, get a price in 15 minutes)
  3. **Locally owned** (real names, real faces, real reviews)
  4. **Eco-friendly disposal** (donation + recycling first, landfill last)

### 1.2 Target Audience
- **Primary:** Homeowners 35–65 with a garage, basement, or estate cleanout
- **Secondary:** Realtors prepping listings, property managers, contractors, hoarding cleanup families
- **Tertiary:** Commercial accounts (offices, retail, construction debris)

### 1.3 Conversion Hierarchy
1. **Phone call** (highest intent — track via CallRail or GHL number)
2. **"Get Instant Quote" form** (photo upload → GHL workflow → SMS reply with price)
3. **Online booking** (GHL calendar embed for selected pickup windows)
4. **Text us** (click-to-text on mobile, GHL Conversations on backend)

---

## 2. Visual Design System

### 2.1 Color Palette

```css
/* Primary — Bold, trustworthy, "truck" energy */
--color-primary-900: #0A2540;   /* Deep Navy — headings, dark sections */
--color-primary-700: #1B3A5C;   /* Navy — body text accents */
--color-primary-500: #2563EB;   /* Action Blue — links, secondary CTAs */

/* Accent — Urgency, CTAs, "GO" energy */
--color-accent-500: #F97316;    /* Hauler Orange — primary CTA buttons */
--color-accent-600: #EA580C;    /* Hover state */
--color-accent-100: #FFEDD5;    /* Soft accent backgrounds */

/* Neutrals */
--color-bg: #FFFFFF;
--color-bg-alt: #F8FAFC;        /* Slate-50 — section alternation */
--color-bg-dark: #0A2540;       /* Dark sections (hero overlay, footer) */
--color-text: #1E293B;          /* Slate-800 */
--color-text-muted: #64748B;    /* Slate-500 */
--color-border: #E2E8F0;        /* Slate-200 */

/* Semantic */
--color-success: #16A34A;       /* "Booked!" confirmations, eco messaging */
--color-warning: #F59E0B;
```

**Rule:** Orange is sacred — it appears ONLY on primary CTAs and 1–2 accent moments per page. Overusing it kills conversion.

### 2.2 Typography

```ts
// app/layout.tsx
import { Inter, Bricolage_Grotesque } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})
```

- **Display (headlines):** Bricolage Grotesque — modern, slightly chunky, friendly
- **Body:** Inter — clean, readable, system-feeling
- **Scale:**
  - H1: `text-5xl md:text-7xl font-bold tracking-tight` (display)
  - H2: `text-3xl md:text-5xl font-bold tracking-tight` (display)
  - H3: `text-2xl md:text-3xl font-semibold` (display)
  - Body: `text-base md:text-lg leading-relaxed` (body)
  - Small: `text-sm text-slate-500`

### 2.3 Spacing & Layout
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding:** `py-16 md:py-24 lg:py-32`
- **Grid gap:** `gap-6 md:gap-8`
- **Border radius:** `rounded-xl` for cards, `rounded-full` for pills/buttons, `rounded-2xl` for hero/feature blocks

### 2.4 Shadows & Elevation
```css
/* tailwind.config.ts extension */
boxShadow: {
  'soft': '0 4px 20px -4px rgba(10, 37, 64, 0.08)',
  'lift': '0 10px 40px -10px rgba(10, 37, 64, 0.15)',
  'cta': '0 8px 24px -6px rgba(249, 115, 22, 0.4)',
}
```

### 2.5 Iconography
- **Library:** `lucide-react`
- **Common icons:** `Truck`, `Phone`, `MessageSquare`, `Clock`, `Leaf`, `Star`, `CheckCircle2`, `MapPin`, `Calendar`, `Camera`, `DollarSign`, `Home`, `Building2`, `Trash2`

### 2.6 Imagery Guidelines
- **Hero:** Real photo of the team + branded truck on a residential driveway. NO stock photos of generic dumpsters.
- **Service cards:** Before/after pairs (garage, basement, yard).
- **About:** Owner + crew portraits, smiling, in branded shirts.
- **Treatment:** Subtle navy gradient overlay (`from-primary-900/60 to-transparent`) on hero/feature images for text legibility.

---

## 3. Site Architecture

```
/                              → Home
/services                      → Services overview
/services/residential          → Residential cleanouts
/services/commercial           → Commercial / construction
/services/specialty            → Hot tubs, pianos, sheds, etc.
/pricing                       → Pricing & truck size guide
/service-area                  → Cities/towns served (programmatic SEO opportunity)
/about                         → Owner story + crew
/reviews                       → Testimonials + Google Review embed
/gallery                       → Before/after photos
/blog                          → SEO content hub
/contact                       → Contact + form + map
/quote                         → Instant quote form (dedicated landing)
/thank-you                     → Post-submit confirmation (GHL trigger)
```

### 3.1 Programmatic SEO (Phase 2)
Build `/junk-removal-[city]` pages dynamically from a `cities.json` source. Each page templates:
- City-specific H1 (`Junk Removal in [City], [State]`)
- Local landmarks, ZIP codes, neighborhoods
- Embedded Google Map centered on city
- Localized testimonials if available

---

## 4. Page-by-Page Specifications

### 4.1 Home (`/`)

#### Section 1: Sticky Top Bar
- **Height:** `h-10`
- **Background:** `bg-primary-900 text-white`
- **Content (left):** `📞 Call (XXX) XXX-XXXX • Text for Quote`
- **Content (right):** `⏰ Open Today: 7 AM – 7 PM`
- **Mobile:** Phone number only, tap-to-call

#### Section 2: Header / Navigation
- **Height:** `h-20`
- **Background:** Transparent over hero, `bg-white shadow-soft` on scroll
- **Logo:** Left
- **Nav (desktop):** Services (dropdown), Pricing, Service Area, About, Reviews, Blog
- **CTA (right):**
  - `(XXX) XXX-XXXX` (text link, primary navy)
  - **"Get Instant Quote"** button (orange, `shadow-cta`)
- **Mobile:** Hamburger → slide-out drawer with all nav + sticky CTA at bottom

#### Section 3: Hero — THE STUNNING ONE 🎯

**Layout:** Asymmetric two-column on desktop, stacked on mobile.

**Left column (60%):**
```tsx
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
  {/* Eyebrow pill */}
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-600 font-medium text-sm">
    <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
    Same-Day Service Available
  </div>

  {/* Headline */}
  <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold tracking-tight text-primary-900">
    Junk Gone.
    <span className="block text-accent-500">Stress Gone.</span>
  </h1>

  {/* Subhead */}
  <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl">
    [City]'s most-trusted junk removal crew. Upfront pricing, same-day pickup,
    and we do all the heavy lifting — you don't lift a finger.
  </p>

  {/* Dual CTA */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4">
    <Button variant="primary" size="lg" icon={<Camera />}>
      Get Instant Quote
    </Button>
    <Button variant="outline" size="lg" icon={<Phone />}>
      Call (XXX) XXX-XXXX
    </Button>
  </div>

  {/* Trust strip */}
  <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
    <div className="flex items-center gap-2">
      <div className="flex">{/* 5 yellow stars */}</div>
      <span><strong>4.9</strong> · 200+ Google Reviews</span>
    </div>
    <div className="flex items-center gap-2">
      <Shield className="w-4 h-4 text-success" />
      Licensed & Insured
    </div>
    <div className="flex items-center gap-2">
      <Leaf className="w-4 h-4 text-success" />
      Eco-Friendly Disposal
    </div>
  </div>
</motion.div>
```

**Right column (40%):** "Get Instant Quote" embedded card
```tsx
<div className="bg-white rounded-2xl shadow-lift p-8 border border-slate-100">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
      <Camera className="w-5 h-5 text-accent-600" />
    </div>
    <div>
      <h3 className="font-bold text-lg">Get a Quote in 15 Minutes</h3>
      <p className="text-sm text-slate-500">Snap a photo, we'll text you a price.</p>
    </div>
  </div>

  {/* GHL form embed — Name, Phone, Photo upload, ZIP */}
  <Form fields={['name', 'phone', 'photo', 'zip']} ghlWebhook="..." />

  <p className="mt-3 text-xs text-slate-500 text-center">
    No spam. No callbacks at dinner. Just a price.
  </p>
</div>
```

**Background treatment:**
- Full-bleed photo of branded truck + crew on residential driveway
- Soft gradient overlay: `bg-gradient-to-br from-primary-900/40 via-primary-900/10 to-transparent`
- Subtle decorative element: animated SVG "junk pile to clean driveway" on lower-right corner (Framer Motion stagger reveal)

**Animation:**
- Headline: word-by-word stagger reveal (`staggerChildren: 0.1`)
- "Stress Gone." accent fades in 400ms after first line
- Trust strip: fade-up after 800ms
- Form card: slide-in from right after 200ms

#### Section 4: Trust Bar (Logos / Stats)
Thin strip below hero, `bg-white border-y border-slate-200`:
- "As Seen On:" Google • Yelp • HomeAdvisor • Nextdoor logos
- OR stat strip: `5,000+ Jobs Completed` • `Same-Day Pickup` • `100% Satisfaction Guarantee` • `[X] Years Local`

#### Section 5: How It Works (3 Steps)
**Background:** `bg-bg-alt`
**Heading:** "Junk Removal Made Stupid Simple"

Three cards horizontally:
1. **📸 Send a Photo** — Text us pics or upload online. We'll quote in 15 min.
2. **📅 Book Your Window** — Pick a 2-hour arrival window. Same-day available.
3. **💪 We Haul It Away** — We do all the lifting, sweeping, and disposal.

Each card: icon in circle, number badge, headline, 2-line description. Subtle hover lift animation.

#### Section 6: Services Grid
**Heading:** "What We Haul"
**Layout:** 6-card grid (3×2 on desktop, 2×3 on tablet, 1×6 on mobile)

Cards:
1. 🏠 Residential Cleanouts
2. 🏢 Commercial / Office
3. 🛋️ Furniture & Appliances
4. 🌳 Yard Waste & Construction Debris
5. 🏚️ Estate & Hoarder Cleanouts
6. ♨️ Specialty (Hot tubs, pianos, sheds)

Each card:
- Icon + image thumbnail
- Title + 1-line description
- "Learn More →" link to dedicated service page
- Hover: image zooms slightly, card lifts with `shadow-lift`

#### Section 7: Pricing Preview
**Heading:** "Upfront Pricing. No Surprises."
**Subhead:** "Our prices are based on volume — how much of the truck you fill."

Visual: 4-step truck-fill diagram (1/4 truck, 1/2 truck, 3/4 truck, Full truck) with starting prices.
- 1/4 Truck — `Starting at $149`
- 1/2 Truck — `Starting at $249`
- 3/4 Truck — `Starting at $349`
- Full Truck — `Starting at $449`

CTA: "See Full Pricing →" → `/pricing`

#### Section 8: Service Area Map
**Heading:** "Proudly Serving [Region]"
- Embedded Google Map with service radius highlighted (use Mapbox or Google Maps API)
- Pill cloud of cities served below: `Leominster • Fitchburg • Worcester • Gardner • ...`
- CTA: "Don't see your town? Call us — we probably cover it."

#### Section 9: Reviews / Social Proof
**Background:** `bg-primary-900 text-white`
**Heading:** "Neighbors Love Us"

- Large `4.9 ★ ★ ★ ★ ★` average from `200+` Google Reviews
- 3-card testimonial carousel (Framer Motion drag or auto-slide)
- Each testimonial: 5 stars, quote (max 60 words), name, neighborhood, date
- "See All Reviews →" link to `/reviews`

#### Section 10: Eco Promise
**Layout:** 50/50 split. Image of donation drop-off + recycling on left, copy on right.
**Heading:** "Less Landfill. More Donations."
Body copy: We donate usable items to [local charity], recycle metals and electronics, and only landfill what truly can't be reused. ~70% of every load gets a second life.

Stats row: `70% Diverted from Landfill` • `12 Tons Donated in 2025` • `Partnered with [Local Charity]`

#### Section 11: FAQ
**Heading:** "Quick Answers"
Accordion (Framer Motion height animation), 6–8 questions:
- How fast can you come out?
- What can't you take?
- Do I need to be home?
- How is pricing calculated?
- Do you take hot tubs / pianos / mattresses?
- Are you licensed and insured?
- Do you do commercial / construction jobs?
- What's your service area?

#### Section 12: Final CTA Banner
**Background:** Full-width orange gradient (`from-accent-500 to-accent-600`), white text
**Heading:** "Ready to Reclaim Your Space?"
**Subhead:** Same-day appointments fill up fast. Lock yours in now.
**Buttons:** "Get Instant Quote" (white) + "Call (XXX) XXX-XXXX" (outline white)

#### Section 13: Footer
**Background:** `bg-primary-900 text-white`
4 columns:
1. **Brand** — Logo, tagline, license number, social icons
2. **Services** — Links to all service pages
3. **Service Area** — Top 8 cities + "View All →"
4. **Contact** — Phone, address, hours, "Get Quote" button

Bottom strip: `© 2026 [Business Name]. All rights reserved.` • Privacy • Terms • Sitemap

---

### 4.2 Services Overview (`/services`)
- Hero: "Full-Service Junk Removal for Every Job"
- 6 service category cards (same as home, but expanded with bullet lists)
- Each card links to dedicated service page
- "What We Don't Take" callout (hazmat, chemicals, etc.) — builds trust by being upfront
- Final CTA banner

### 4.3 Individual Service Pages (e.g., `/services/residential`)
Template structure:
1. **Hero** — Service-specific photo, headline, "Get Quote" CTA
2. **What's Included** — Checklist of items handled
3. **Common Use Cases** — Garage, basement, attic, post-move, downsizing, etc.
4. **Process** — Same 3-step (or service-specific variation)
5. **Pricing** — "Most [residential] jobs run $X–$Y depending on volume."
6. **Photo Gallery** — Before/after grid
7. **Testimonials** — Filtered to service type
8. **Service-specific FAQ**
9. **CTA Banner**

### 4.4 Pricing (`/pricing`)
- Hero: "Honest Pricing. No Hidden Fees."
- Volume-based pricing visual (truck-fill diagram, larger version)
- Comparison table: Us vs. Big Brand competitors (price, response time, included labor)
- "What's Included" checklist (loading, sweeping, disposal fees, taxes)
- "What Adds to Cost" callout (stairs, hazmat, weight overages)
- Pricing FAQ
- CTA Banner

### 4.5 Service Area (`/service-area`)
- Hero: "Serving All of [Region]"
- Interactive map (Mapbox) with city pins
- Alphabetical city list with link to programmatic city pages
- "Outside our area? Call us — we'll refer a trusted partner."
- CTA Banner

### 4.6 About (`/about`)
- Hero: Owner photo + "Meet [Owner Name]"
- Founder story (300–500 words, conversational)
- Crew portraits (cards with name + fun fact)
- "Why We Started" + "Our Promise" sections
- Community involvement (charities, sponsorships)
- Behind-the-scenes photos
- CTA Banner

### 4.7 Reviews (`/reviews`)
- Hero: Big `4.9 ★ ★ ★ ★ ★` + review count
- Google Reviews embed (use SociableKIT, Trustmary, or GHL widget)
- Filter by service type
- "Leave a Review" button → links to Google review URL
- CTA Banner

### 4.8 Gallery (`/gallery`)
- Masonry grid of before/after photos (use `react-photo-album` or custom)
- Filter pills: All • Residential • Commercial • Yard • Specialty
- Lightbox on click (use `yet-another-react-lightbox`)
- CTA Banner

### 4.9 Blog (`/blog`)
- Hero: "The Junk Removal Blog"
- Category pills + featured article
- 3-column grid of post cards
- Pagination
- Sidebar: Recent posts + CTA card

### 4.10 Contact (`/contact`)
- Hero: "Get In Touch"
- 2-column: Form (left) + Contact info + map (right)
- Form fields: Name, Phone, Email, Service Type (dropdown), Message
- Office hours, address, phone, email
- Embedded Google Map
- CTA Banner

### 4.11 Quote (`/quote`)
**Dedicated conversion landing page — minimal nav, single goal.**
- Stripped header (logo + phone only)
- Hero: "Get Your Junk Removal Quote in 15 Minutes"
- Multi-step form (better conversion than single long form):
  1. **What needs to go?** (select multiple: furniture, appliances, yard waste, etc.)
  2. **How much?** (1/4 truck, 1/2, 3/4, full — with visual)
  3. **Upload photos** (3-photo max, helps accuracy)
  4. **Your info** (name, phone, ZIP)
- Progress bar
- Trust signals on side (reviews, license, insurance)
- On submit: GHL workflow → SMS auto-reply with ETA → owner notification → calendar booking link

### 4.12 Thank You (`/thank-you`)
- Confetti animation on load (`canvas-confetti`)
- "Got it! We'll text you a quote within 15 minutes."
- What to expect next (3-step timeline)
- Follow on social CTA
- Back to home button
- **Trigger:** GHL webhook fires here for analytics + lead nurture

---

## 5. Component Library

```
/components
  /ui
    Button.tsx              # variants: primary, secondary, outline, ghost
    Input.tsx
    Select.tsx
    Textarea.tsx
    Card.tsx
    Badge.tsx
    Accordion.tsx           # Framer Motion height animation
    Modal.tsx
    Toast.tsx
  /layout
    Header.tsx              # Sticky, scroll-aware
    Footer.tsx
    TopBar.tsx
    MobileNav.tsx           # Slide-out drawer
    Container.tsx
  /sections
    Hero.tsx
    HowItWorks.tsx
    ServicesGrid.tsx
    PricingPreview.tsx
    ServiceArea.tsx
    Reviews.tsx
    EcoPromise.tsx
    FAQ.tsx
    FinalCTA.tsx
  /forms
    InstantQuoteForm.tsx    # GHL webhook integration
    MultiStepQuote.tsx      # /quote page form
    ContactForm.tsx
  /shared
    StarRating.tsx
    TestimonialCard.tsx
    ServiceCard.tsx
    PhotoGallery.tsx
    BeforeAfterSlider.tsx   # Drag handle for before/after
    StickyCallButton.tsx    # Mobile-only floating button
```

### 5.1 Sticky Mobile Call Button
On mobile screens, a floating button bottom-right always visible:
```tsx
<a
  href="tel:+1XXXXXXXXXX"
  className="fixed bottom-6 right-6 z-50 lg:hidden bg-accent-500 text-white px-6 py-4 rounded-full shadow-cta flex items-center gap-2 font-semibold"
>
  <Phone className="w-5 h-5" />
  Call Now
</a>
```

---

## 6. Animations & Micro-interactions

| Element | Animation |
|---------|-----------|
| Hero headline | Word-by-word stagger fade-up |
| Hero accent line | 400ms delayed fade-up with color reveal |
| Section reveals | `whileInView` fade-up, 30px translate, 0.6s ease-out |
| Service cards | Hover: `scale(1.02)`, `shadow-lift`, image zoom 1.05 |
| Buttons | Hover: `scale(1.03)`, brightness +5%, transition 150ms |
| Accordion | `height: auto` with Framer Motion + chevron rotate |
| Testimonial carousel | Auto-slide every 6s, pause on hover, drag-enabled mobile |
| Form success | Confetti + checkmark icon scale-in |
| Page transitions | Subtle fade between routes (`AnimatePresence`) |

**Reduced motion:** All animations respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()`.

---

## 7. GoHighLevel Integration

### 7.1 Forms
- **Instant Quote (Hero + /quote):** GHL form embed OR custom form POSTing to GHL webhook
- **Contact:** GHL native form embed
- **Map fields to GHL custom fields:** `service_type`, `volume_estimate`, `photos[]`, `zip_code`

### 7.2 Workflows
1. **New Lead → Instant SMS reply:** "Hey [Name], thanks for the quote request! I'll review your photos and text you a price within 15 min. — [Owner]"
2. **No-response 1hr:** Owner SMS notification "New lead unreviewed: [Name] [Phone]"
3. **Quote sent → Booking link:** Auto-send GHL calendar link
4. **Job complete → Review request:** SMS + email asking for Google review (delay 2hr post-completion)
5. **Missed call text-back:** "Sorry we missed you! Text us a photo of your junk and we'll send a quote in 15 min."

### 7.3 Tracking
- **CallRail or GHL phone number** for call tracking, dynamic number insertion
- **Google Tag Manager** + **GA4** for form submissions, phone clicks, scroll depth
- **Meta Pixel** for retargeting (if running paid ads later)
- **Conversion events:** `quote_form_submit`, `phone_click`, `book_call`, `thank_you_view`

---

## 8. SEO & Performance

### 8.1 Technical SEO
- **Metadata:** Per-page `<title>`, `<meta description>`, OG tags, Twitter cards via Next.js Metadata API
- **Schema markup:** `LocalBusiness`, `Service`, `Review`, `FAQPage`, `BreadcrumbList`
- **Sitemap:** Auto-generated via `next-sitemap`
- **Robots.txt:** Allow all, point to sitemap
- **Canonical URLs:** Set per page

### 8.2 Local SEO
- **NAP consistency:** Name, Address, Phone identical across site footer, GBP, citations
- **GBP optimization:** Match site service categories
- **City pages (Phase 2):** Programmatic generation for top 30 cities in service area

### 8.3 Performance Targets
- **Lighthouse:** 95+ Performance, 100 SEO, 100 Accessibility, 100 Best Practices
- **LCP:** < 2.0s (hero image priority loaded with `next/image priority`)
- **CLS:** < 0.05
- **INP:** < 200ms

### 8.4 Image Optimization
- All images via `next/image` with proper `sizes` attribute
- WebP/AVIF auto-served via Vercel
- Hero image: priority + preload hint
- Below-fold: lazy load default

---

## 9. Accessibility

- WCAG 2.1 AA minimum
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- All interactive elements keyboard-navigable
- Focus-visible rings on all focusable elements (`focus-visible:ring-2 ring-accent-500 ring-offset-2`)
- All images have descriptive `alt` text
- Form inputs have associated `<label>`
- Color contrast: minimum 4.5:1 for body, 3:1 for large text
- `aria-label` on icon-only buttons
- Skip-to-content link for screen readers

---

## 10. Project Structure

```
junk-removal-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── services/
│   │   ├── page.tsx
│   │   ├── residential/page.tsx
│   │   ├── commercial/page.tsx
│   │   └── specialty/page.tsx
│   ├── pricing/page.tsx
│   ├── service-area/page.tsx
│   ├── about/page.tsx
│   ├── reviews/page.tsx
│   ├── gallery/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── quote/page.tsx
│   ├── thank-you/page.tsx
│   ├── api/
│   │   └── lead/route.ts           # GHL webhook proxy
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── shared/
├── lib/
│   ├── ghl.ts                      # GHL API helpers
│   ├── analytics.ts                # GA4 + Meta events
│   ├── utils.ts                    # cn() etc.
│   └── constants.ts                # phone, address, hours
├── content/
│   ├── services.ts                 # Service data
│   ├── cities.ts                   # Service area
│   ├── faqs.ts
│   └── testimonials.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon/
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

---

## 11. Phase Roadmap

### Phase 1 — MVP Launch (Week 1–2)
- Home, Services overview, Pricing, About, Contact, Quote, Thank You
- GHL form integration
- Basic SEO + analytics
- Mobile-responsive
- Deploy to Vercel + connect domain

### Phase 2 — SEO Expansion (Week 3–4)
- Individual service pages
- Service Area page + 10–15 city pages (programmatic)
- Blog scaffolding + 5 cornerstone articles
- Schema markup
- Google Business Profile sync

### Phase 3 — Conversion Optimization (Month 2+)
- A/B test hero headlines (e.g., Vercel Edge Config)
- Add live chat (GHL Conversations widget)
- Heatmap install (Hotjar / Microsoft Clarity)
- Add review carousel auto-pulled from Google API
- Programmatic city expansion to 50+ pages

---

## 12. Copy Guidelines

### 12.1 Voice Rules
- ✅ "We do all the lifting" → ❌ "Our team will assist with item removal"
- ✅ "Same-day. No B.S." → ❌ "Rapid response service available"
- ✅ "Snap a pic, get a price" → ❌ "Submit photos for our pricing analysis"

### 12.2 Power Words to Use
Same-day · Upfront · No surprise fees · Heavy lifting · Local · Insured · Hauled away · Gone · Done · Fast · Honest

### 12.3 Words to Avoid
Solutions · Synergy · Premier · World-class · Cutting-edge · Industry-leading · State-of-the-art

### 12.4 Headline Bank (for testing)
- Junk Gone. Stress Gone.
- We Haul. You Relax.
- Same-Day Junk Removal in [City]
- Your Junk. Our Truck. Today.
- The Easiest Junk Removal You'll Ever Book.

---

## 13. Launch Checklist

- [ ] All forms submitting to GHL successfully
- [ ] GHL workflows tested end-to-end (SMS, email, calendar)
- [ ] Phone number verified and ringing correctly
- [ ] Google Business Profile linked + matching NAP
- [ ] GA4 + GTM installed, events firing
- [ ] Meta Pixel (if applicable) installed
- [ ] All images optimized (WebP, proper alt tags)
- [ ] Sitemap submitted to Google Search Console
- [ ] Schema markup validated (Rich Results Test)
- [ ] Mobile-responsive on iOS Safari, Android Chrome
- [ ] Lighthouse 95+ on all key pages
- [ ] SSL active, HTTPS enforced
- [ ] 404 page styled
- [ ] Privacy policy + terms pages live
- [ ] Test booking flow on real device
- [ ] Test missed-call text-back
- [ ] Owner trained on GHL inbox + calendar

---

## 14. Open Questions for Client

1. **Business name + tagline confirmation?**
2. **Phone number** — using GHL number or porting existing?
3. **Service area ZIP codes** (full list)?
4. **Owner story / about copy** — interview needed?
5. **Existing photos available** or need photo shoot?
6. **Existing Google Reviews** to import?
7. **Logo files** (vector preferred)?
8. **Truck wrap photos** for hero?
9. **Pricing tiers** — confirm exact numbers
10. **Domain name** + DNS access for Vercel?

---

**Last updated:** May 8, 2026
**Owner:** Grady Digital
**Handoff target:** Claude Code for implementation