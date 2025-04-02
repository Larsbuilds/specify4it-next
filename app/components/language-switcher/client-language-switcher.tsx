'use client'

import { LanguageSwitcher } from "./LanguageSwitcher"
import { useEffect, useState } from "react"

export function ClientLanguageSwitcher() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <LanguageSwitcher />
    </div>
  )
}
