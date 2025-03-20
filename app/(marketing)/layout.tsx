"use client"

import React from 'react'
import { MainNav } from "@/components/layout/MainNav"
import { ModeToggle } from "@/components/theme/ModeToggle"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <MainNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <ModeToggle />
          </div>
        </div>
      </header>
      {children}
    </div>
  )
} 