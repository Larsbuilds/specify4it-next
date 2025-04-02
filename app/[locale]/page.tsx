import ServerHeroSection from '../components/sections/ServerHeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { PricingSection } from '../components/sections/PricingSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { AnalyticsDashboard } from '../components/sections/AnalyticsDashboard'
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <main className="flex min-h-screen flex-col">
      <ServerHeroSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <AnalyticsDashboard />
    </main>
  )
}