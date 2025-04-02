import { getTranslations } from 'next-intl/server'
import { AnimatedSection } from './AnimatedSection'

export default async function ServerHeroSection() {
  const t = await getTranslations('Hero')

  const content = (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            {t('subtitle')}
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg">
              {t('cta.primary')}
            </button>
            <button className="border border-primary px-8 py-3 rounded-lg">
              {t('cta.secondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  return <AnimatedSection>{content}</AnimatedSection>
}
