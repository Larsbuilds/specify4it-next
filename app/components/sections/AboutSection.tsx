"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/lib/animations"

export function AboutSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.h2 
                variants={slideIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
              >
                About Our Company
              </motion.h2>
              <motion.p 
                variants={slideIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
                className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400"
              >
                We are dedicated to providing the best solutions for our clients. Our team of experts
                works tirelessly to deliver exceptional results.
              </motion.p>
            </div>
            <motion.div 
              variants={slideIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
          <div className="grid gap-4 sm:gap-6">
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    To provide innovative solutions that help businesses grow and succeed.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                      <span className="text-sm sm:text-base">Quality Service</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                      <span className="text-sm sm:text-base">Customer Satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                      <span className="text-sm sm:text-base">Innovation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    To be the leading provider of innovative solutions in our industry.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                      <span className="text-sm sm:text-base">Global Reach</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                      <span className="text-sm sm:text-base">Industry Leadership</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                      <span className="text-sm sm:text-base">Sustainable Growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 