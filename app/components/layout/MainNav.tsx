"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTranslations } from 'next-intl'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { ClientLanguageSwitcher } from "../language-switcher/client-language-switcher"

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const linkVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

export function MainNav() {
  const pathname = usePathname()
  const t = useTranslations('Navigation')
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "#home",
      label: t('home'),
    },
    {
      href: "#features",
      label: t('features'),
    },
    {
      href: "#about",
      label: t('about'),
    },
    {
      href: "#testimonials",
      label: t('testimonials'),
    },
    {
      href: "#pricing",
      label: t('pricing'),
    },
  ] as const

  return (
    <motion.div 
      className="container flex h-14 items-center"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col space-y-4 mt-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="mr-4 hidden md:flex flex-1">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <motion.span 
            className="font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('brand')}
          </motion.span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <motion.div
              key={route.href}
              variants={linkVariants}
              whileHover="hover"
            >
              <Link
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-4">
        <ClientLanguageSwitcher />
      </div>
    </motion.div>
  )
}