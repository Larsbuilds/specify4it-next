import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  Clock, 
  Activity, 
  Globe, 
  Smartphone, 
  Monitor,
  Zap,
  AlertCircle
} from "lucide-react"
import { AnimatedSection } from './AnimatedSection'

// This is mock data for demo purposes
// In production, this would come from Vercel Analytics API
const analyticsData = {
  pageViews: 1234,
  uniqueVisitors: 789,
  averageSessionDuration: "2m 30s",
  bounceRate: "45%",
  devices: {
    desktop: 45,
    mobile: 35,
    tablet: 20,
  },
  performance: {
    score: 98,
    issues: 2,
  }
}

export async function AnalyticsDashboard() {
  const t = await getTranslations('Analytics')

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <CardTitle>{t('stats.visitors.title')}</CardTitle>
                </div>
                <CardDescription>{t('stats.visitors.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.uniqueVisitors}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <CardTitle>{t('stats.duration.title')}</CardTitle>
                </div>
                <CardDescription>{t('stats.duration.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.averageSessionDuration}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <CardTitle>{t('stats.bounce.title')}</CardTitle>
                </div>
                <CardDescription>{t('stats.bounce.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.bounceRate}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <CardTitle>{t('stats.pages.title')}</CardTitle>
                </div>
                <CardDescription>{t('stats.pages.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.pageViews}</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-primary" />
                  <CardTitle>{t('devices.title')}</CardTitle>
                </div>
                <CardDescription>{t('devices.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      <span>{t('devices.desktop')}</span>
                    </div>
                    <span>{analyticsData.devices.desktop}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span>{t('devices.mobile')}</span>
                    </div>
                    <span>{analyticsData.devices.mobile}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span>{t('devices.tablet')}</span>
                    </div>
                    <span>{analyticsData.devices.tablet}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <CardTitle>{t('performance.title')}</CardTitle>
                </div>
                <CardDescription>{t('performance.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span>{t('performance.score')}</span>
                    </div>
                    <span>{analyticsData.performance.score}/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>{t('performance.issues')}</span>
                    </div>
                    <span>{analyticsData.performance.issues}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}