import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    id: "design",
    title: "Design",
    description: "Beautiful and accessible components",
    content: [
      {
        title: "Modern Design System",
        description: "Built with modern design principles and accessibility in mind.",
      },
      {
        title: "Responsive Layout",
        description: "Looks great on any device, from mobile to desktop.",
      },
      {
        title: "Dark Mode",
        description: "Built-in dark mode support with system preference detection.",
      },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Developer-friendly tools and patterns",
    content: [
      {
        title: "TypeScript",
        description: "Full TypeScript support for type-safe development.",
      },
      {
        title: "Component Library",
        description: "Extensive collection of pre-built components.",
      },
      {
        title: "Hot Reload",
        description: "Fast development with instant feedback.",
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Simple and efficient deployment",
    content: [
      {
        title: "Build Optimization",
        description: "Optimized builds for production deployment.",
      },
      {
        title: "Static Export",
        description: "Export as static files for easy hosting.",
      },
      {
        title: "CI/CD Ready",
        description: "Ready for continuous integration and deployment.",
      },
    ],
  },
]

export function FeaturesSection() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-[980px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Features that make development
            <span className="block text-primary">faster & easier</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build modern web applications
          </p>
        </div>

        <Tabs defaultValue={features[0].id} className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id}>
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {feature.content.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
} 