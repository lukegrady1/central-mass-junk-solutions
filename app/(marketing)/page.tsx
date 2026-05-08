import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { Reviews } from '@/components/sections/Reviews'
import { EcoPromise } from '@/components/sections/EcoPromise'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { HOME_FAQS } from '@/content/faqs'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ServicesGrid />
      <PricingPreview />
      <ServiceArea />
      <Reviews />
      <EcoPromise />
      <FAQ items={HOME_FAQS} />
      <FinalCTA />
    </>
  )
}
