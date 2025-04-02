import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { AnimatedSection } from './AnimatedSection'

export async function PricingSection() {
  const t = await getTranslations('Pricing')

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
          <div className="grid gap-6 lg:grid-cols-2 items-start">
            {/* Hobby Plan */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>{t('hobby.name')}</CardTitle>
                <CardDescription>{t('hobby.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">{t('hobby.price')}</div>
                <ul className="space-y-2">
                  {t.rich('hobby.features', {
                    li: (children) => (
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{children}</span>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  {t('hobby.cta')}
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="relative overflow-hidden border-primary">
              <CardHeader>
                <CardTitle>{t('pro.name')}</CardTitle>
                <CardDescription>{t('pro.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">
                  {t('pro.price')}
                  <span className="text-sm font-normal text-muted-foreground">
                    {t('pro.period')}
                  </span>
                </div>
                <ul className="space-y-2">
                  {t.rich('pro.features', {
                    li: (children) => (
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{children}</span>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {t('pro.cta')}
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>{t('enterprise.name')}</CardTitle>
                <CardDescription>{t('enterprise.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">{t('enterprise.price')}</div>
                <ul className="space-y-2">
                  {t.rich('enterprise.features', {
                    li: (children) => (
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{children}</span>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  {t('enterprise.cta')}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}