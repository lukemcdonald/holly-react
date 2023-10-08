import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Landing template for startups"
        content="Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
