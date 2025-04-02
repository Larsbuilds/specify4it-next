import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code2, 
  Layout, 
  Palette, 
  Zap, 
  Shield, 
  GitBranch,
  Cloud,
  Smartphone,
  Moon
} from "lucide-react"
import { AnimatedSection } from './AnimatedSection'

const features = [
  {
    title: "features.items.design.title",
    description: "features.items.design.description",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "features.items.responsive.title",
    description: "features.items.responsive.description",
    icon: Smartphone,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "features.items.performance.title",
    description: "features.items.performance.description",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "features.items.security.title",
    description: "features.items.security.description",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "features.items.code.title",
    description: "features.items.code.description",
    icon: Code2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "features.items.git.title",
    description: "features.items.git.description",
    icon: GitBranch,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "features.items.cloud.title",
    description: "features.items.cloud.description",
    icon: Cloud,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    title: "features.items.theme.title",
    description: "features.items.theme.description",
    icon: Moon,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
]

export async function FeaturesSection() {
  const t = await getTranslations('Features')

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
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center ${feature.bgColor}`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="mt-4">{t(feature.title)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{t(feature.description)}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}