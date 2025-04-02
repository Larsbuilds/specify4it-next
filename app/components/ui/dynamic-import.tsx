"use client"

import { Suspense, lazy } from "react"
import { cn } from "@/lib/utils"

interface DynamicImportProps {
  importFn: () => Promise<any>
  fallback?: React.ReactNode
  className?: string
}

export function DynamicImport({
  importFn,
  fallback = (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
  className,
}: DynamicImportProps) {
  const Component = lazy(importFn)

  return (
    <Suspense
      fallback={
        <div className={cn("w-full", className)}>
          {fallback}
        </div>
      }
    >
      <Component />
    </Suspense>
  )
} 