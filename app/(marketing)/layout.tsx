import React from 'react'
import { Header } from "@/components/layout/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern React Portfolio",
  description: "A modern portfolio built with Next.js and shadcn/ui",
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <Header />
      {children}
    </div>
  )
} 