import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'
import type { FAQ as FAQItem } from '@/content/faqs'

export function FAQ({ items, eyebrow = 'FAQ', title = 'Quick Answers' }: { items: FAQItem[]; eyebrow?: string; title?: string }) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description="If you have a question we haven't answered, just text or call." />
        <div className="max-w-3xl mx-auto">
          <Accordion items={items.map((i) => ({ q: i.q, a: i.a }))} />
        </div>
      </Container>
    </Section>
  )
}
