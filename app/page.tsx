"use client"

import { ErrorBoundary } from "@/components/ui/error-boundary"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <AboutSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <FeaturesSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <PricingSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <TestimonialsSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </main>
  )
} 