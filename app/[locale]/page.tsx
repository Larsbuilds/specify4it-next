import ServerHeroSection from '../components/sections/ServerHeroSection'
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
      {/* Other sections will be added here */}
    </main>
  )
}