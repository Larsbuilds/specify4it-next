import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.1),transparent_50%)]" />
      
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Modern Web Development
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground sm:text-xl">
              Build beautiful, responsive websites with our modern tech stack.
              Featuring React, Tailwind CSS, and shadcn components.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right column - Interactive cards */}
          <div className="relative">
            <div className="grid gap-4 md:grid-cols-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="cursor-pointer transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl">🎨</div>
                      <h3 className="mt-4 font-semibold">Beautiful Design</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Modern, clean interfaces that look great on any device
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Design Features</h4>
                    <p className="text-sm text-muted-foreground">
                      Responsive layouts, smooth animations, and carefully crafted
                      components for the perfect user experience.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="cursor-pointer transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl">⚡️</div>
                      <h3 className="mt-4 font-semibold">Lightning Fast</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Optimized performance for the best user experience
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Performance Features</h4>
                    <p className="text-sm text-muted-foreground">
                      Built with Vite and React for blazing-fast load times and
                      smooth interactions.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="cursor-pointer transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl">🛠</div>
                      <h3 className="mt-4 font-semibold">Customizable</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Easily adapt components to match your brand
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Customization Options</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailwind CSS and shadcn make it easy to customize every
                      aspect of your design.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="cursor-pointer transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl">🔒</div>
                      <h3 className="mt-4 font-semibold">Type-Safe</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Built with TypeScript for better development
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">TypeScript Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      Catch errors early and improve code quality with full
                      TypeScript support.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 