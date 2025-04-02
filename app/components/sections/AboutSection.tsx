"use server"

import { getTranslations } from 'next-intl/server'
import { AnimatedSection } from './AnimatedSection'
import { Card, CardContent } from "@/components/ui/card"

export async function AboutSection() {
  const t = await getTranslations('About')

  return (
    <AnimatedSection>
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{t('background.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400">{t('background.content')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{t('mission.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400">{t('mission.content')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{t('values.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400">{t('values.content')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}