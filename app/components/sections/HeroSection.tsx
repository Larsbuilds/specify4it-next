"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeIn, scaleIn, slideIn, glowEffect, gradientShift } from "@/lib/animations"

export function HeroSection() {
  return (
    <section id="home" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                variants={slideIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
              >
                Welcome to Our Platform
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Transform Your Business with Our Solutions
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                We provide innovative solutions to help businesses grow and succeed in the digital age.
                Join thousands of satisfied customers who have transformed their operations.
              </motion.p>
            </div>
            <motion.div 
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 min-[400px]:flex-row"
            >
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <motion.div
              variants={glowEffect}
              whileHover="hover"
              initial="initial"
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-3xl"
            />
            <motion.div
              variants={gradientShift}
              whileHover="hover"
              initial="initial"
              className="relative bg-background border rounded-2xl p-8 shadow-lg"
            >
              <div className="grid gap-4">
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4"
                >
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
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4"
                >
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
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4"
                >
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 