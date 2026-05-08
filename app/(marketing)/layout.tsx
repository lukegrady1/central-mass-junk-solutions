import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCallButton } from '@/components/shared/StickyCallButton'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
      <StickyCallButton />
    </>
  )
}
