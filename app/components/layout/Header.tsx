"use client"

import React from 'react'
import { MainNav } from "@/components/layout/MainNav"
import { ModeToggle } from "@/components/theme/ModeToggle"
import { motion } from "framer-motion"

const headerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
}

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  )
}