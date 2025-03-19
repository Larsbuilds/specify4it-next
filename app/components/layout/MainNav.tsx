"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navItemHover } from "@/lib/animations"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <motion.div
        variants={navItemHover}
        whileHover="hover"
        initial="initial"
      >
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          )}
        >
          Home
        </Link>
      </motion.div>
      <motion.div
        variants={navItemHover}
        whileHover="hover"
        initial="initial"
      >
        <Link
          href="/#about"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/#about" ? "text-primary" : "text-muted-foreground"
          )}
        >
          About
        </Link>
      </motion.div>
      <motion.div
        variants={navItemHover}
        whileHover="hover"
        initial="initial"
      >
        <Link
          href="/#features"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/#features" ? "text-primary" : "text-muted-foreground"
          )}
        >
          Features
        </Link>
      </motion.div>
      <motion.div
        variants={navItemHover}
        whileHover="hover"
        initial="initial"
      >
        <Link
          href="/#pricing"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/#pricing" ? "text-primary" : "text-muted-foreground"
          )}
        >
          Pricing
        </Link>
      </motion.div>
      <motion.div
        variants={navItemHover}
        whileHover="hover"
        initial="initial"
      >
        <Link
          href="/#contact"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === "/#contact" ? "text-primary" : "text-muted-foreground"
          )}
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  )
} 