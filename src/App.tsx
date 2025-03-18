import { MainNav } from "@/components/layout/MainNav"
import { HeroSection } from "@/components/sections/HeroSection"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default App
