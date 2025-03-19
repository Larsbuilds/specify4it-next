import { MainNav } from "@/components/layout/MainNav"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { Footer } from "@/components/layout/Footer"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <MainNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
} 