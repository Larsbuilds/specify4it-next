"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import { DynamicImport } from "@/components/ui/dynamic-import"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1, ease: "easeOut" } }
}

const slideIn = {
  hidden: { y: 5, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.1, ease: "easeOut" } }
}

const scaleIn = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

const glowEffect = {
  initial: { opacity: 0.3, scale: 0.95 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const gradientShift = {
  initial: { backgroundPosition: "0% 0%" },
  hover: { backgroundPosition: "100% 100%", transition: { duration: 0.5 } }
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted or prefers reduced motion, render static version
  if (!mounted || prefersReducedMotion) {
    return (
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  Welcome to your Platform
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  This is your new Website
                </h1>
                <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">
                  Reach out for a demo!
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <DynamicImport
                  importFn={() => import("./AnimatedButton")}
                  className="w-full sm:w-auto"
                />
                <DynamicImport
                  importFn={() => import("./AnimatedButton")}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-background border rounded-2xl p-8 shadow-lg">
                <div className="grid gap-4">
                  <DynamicImport
                    importFn={() => import("./FeatureCard")}
                    className="h-12"
                  />
                  <DynamicImport
                    importFn={() => import("./FeatureCard")}
                    className="h-12"
                  />
                  <DynamicImport
                    importFn={() => import("./FeatureCard")}
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Animated version with optimized transitions
  return (
    <section id="home" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.02 }}
                className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
              >
                Welcome to your Platform
              </motion.div>
              <motion.h1 
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.02 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{ willChange: 'transform' }}
              >
                This is your new Website
              </motion.h1>
              <motion.p 
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.02 }}
                className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400"
                style={{ 
                  willChange: 'transform',
                  contentVisibility: 'auto',
                  containIntrinsicSize: '0 500px'
                }}
              >
                Reach out for a demo!
              </motion.p>
            </div>
            <motion.div 
              variants={slideIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <DynamicImport
                importFn={() => import("./AnimatedButton")}
                className="w-full sm:w-auto"
              />
              <DynamicImport
                importFn={() => import("./AnimatedButton")}
                className="w-full sm:w-auto"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <motion.div
              variants={glowEffect}
              whileHover="hover"
              initial="initial"
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-2xl blur-3xl"
            />
            <motion.div
              variants={gradientShift}
              whileHover="hover"
              initial="initial"
              className="relative bg-background border rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg bg-gradient-to-br from-background via-background/95 to-background/90"
            >
              <div className="grid gap-3 sm:gap-4">
                <DynamicImport
                  importFn={() => import("./FeatureCard")}
                  className="h-12"
                />
                <DynamicImport
                  importFn={() => import("./FeatureCard")}
                  className="h-12"
                />
                <DynamicImport
                  importFn={() => import("./FeatureCard")}
                  className="h-12"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 