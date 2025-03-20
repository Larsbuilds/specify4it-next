import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modern React Portfolio",
  description: "A modern portfolio built with Next.js and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background font-sans antialiased">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 