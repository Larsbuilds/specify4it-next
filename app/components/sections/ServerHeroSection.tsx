import { getTranslations } from 'next-intl/server'
import { AnimatedSection } from './AnimatedSection'
import { Button } from "@/components/ui/button"

export default async function ServerHeroSection() {
  const t = await getTranslations('Hero')

  return (
    <AnimatedSection>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  {t('role')}
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {t('title')}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('subtitle')}
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="text-lg">
                  {t('cta.primary')}
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  {t('cta.secondary')}
                </Button>
              </div>
            </div>
            <div className="grid gap-6 lg:gap-8">
              <div className="relative p-6 bg-background rounded-2xl shadow-lg">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t('features.fast.title')}</h3>
                      <p className="text-sm text-gray-500">{t('features.fast.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t('features.scalable.title')}</h3>
                      <p className="text-sm text-gray-500">{t('features.scalable.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">{t('features.reliable.title')}</h3>
                      <p className="text-sm text-gray-500">{t('features.reliable.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
