"use client"

import React from 'react'
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { motion, AnimatePresence } from "framer-motion"

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function ClientWrapper() {
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.main
          className="flex-1"
          variants={mainVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={sectionVariants}>
            <HeroSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <FeaturesSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <AboutSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <TestimonialsSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <PricingSection />
          </motion.div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}