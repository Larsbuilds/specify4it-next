'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageSwitcher } from "@/components/language-switcher/LanguageSwitcher"
import { NextIntlClientProvider } from "next-intl"

export function ClientLayout({
  children,
  locale,
  messages
}: {
  children: React.ReactNode
  locale: string
  messages: any
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <LanguageSwitcher />
        </div>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
