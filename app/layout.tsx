import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: "Modern React Portfolio",
  description: "A modern portfolio built with Next.js and shadcn/ui",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  other: {
    'next-head-count': '0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <div className="relative min-h-screen bg-background font-sans antialiased">
            <Header />
            <div id="app-content">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 