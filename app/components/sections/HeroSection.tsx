"use client"

import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

const slideIn = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
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

const buttonHover = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
}

const cardAnimation = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { y: -5, transition: { duration: 0.2 } }
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
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Reach out for a demo!
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="text-lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-background border rounded-2xl p-8 shadow-lg">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Lightning Fast</h3>
                      <p className="text-sm text-gray-500">Optimized performance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Secure</h3>
                      <p className="text-sm text-gray-500">Enterprise-grade security</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Scalable</h3>
                      <p className="text-sm text-gray-500">Grows with your business</p>
                    </div>
                  </div>
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
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
              >
                Welcome to your Platform
              </motion.div>
              <motion.h1 
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                This is your new Website
              </motion.h1>
              <motion.p 
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400"
              >
                Reach out for a demo!
              </motion.p>
            </div>
            <motion.div 
              variants={slideIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.div variants={buttonHover} whileHover="hover" className="w-full sm:w-auto">
                <Button size="lg" className="text-base sm:text-lg w-full sm:w-auto">
                  Get Started
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-base sm:text-lg w-full sm:w-auto">
                  Learn More
                </Button>
              </motion.div>
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
                <motion.div 
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Lightning Fast</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Optimized performance</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Secure</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Enterprise-grade security</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Scalable</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Grows with your business</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 