import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { GalleryGrid } from '@/components/sections/GalleryGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Before & After Gallery — Real Junk Removal Jobs',
  description: 'Drag to compare. Real cleanout projects from Central Massachusetts — garages, basements, estates, and specialty hauls.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Before & After"
        title="Real Jobs. Real Crews. Real Results."
        description="Every photo here is a real customer cleanout. Drag the slider on any project to see what we walked into vs. what we left behind."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/quote" variant="primary" size="lg">Quote My Job</Button>
          <Button href="/services" variant="outline" size="lg">See Services</Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <GalleryGrid />
        </Container>
      </Section>

      <FinalCTA title="Could Be Your Driveway Next." description="Same-day appointments fill up fast. Get your quote in 15 minutes." />
    </>
  )
}
