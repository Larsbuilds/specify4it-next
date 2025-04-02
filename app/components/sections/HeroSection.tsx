"use client"

import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
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

function StaticHeroSection({ t }: { t: any }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {t("role")}
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {t("title")}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {t("subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" className="text-lg">
                {t("cta.primary")}
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                {t("cta.secondary")}
              </Button>
            </div>
          </div>
          <div className="grid gap-6 lg:gap-8">
            <div className="relative p-6 bg-background rounded-2xl shadow-lg">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg
                      className=" w-6 h-6 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("features.fast.title")}</h3>
                    <p className="text-sm text-gray-500">{t("features.fast.description")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg
                      className=" w-6 h-6 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("features.secure.title")}</h3>
                    <p className="text-sm text-gray-500">{t("features.secure.description")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg
                      className=" w-6 h-6 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("features.scalable.title")}</h3>
                    <p className="text-sm text-gray-500">{t("features.scalable.description")}</p>
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

function AnimatedHeroSection({ t }: { t: any }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative py-24 overflow-hidden"
    >
      <motion.div variants={fadeIn} className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <motion.div variants={fadeIn} className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <motion.div
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
              >
                {t("role")}
              </motion.div>
              <motion.h1 
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                {t("title")}
              </motion.h1>
              <motion.p 
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400"
              >
                {t("subtitle")}
              </motion.p>
            </div>
            <motion.div 
              variants={slideIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <motion.div variants={buttonHover} whileHover="hover" className="w-full sm:w-auto">
                <Button size="lg" className="text-base sm:text-lg w-full sm:w-auto">
                  {t("cta.primary")}
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-base sm:text-lg w-full sm:w-auto">
                  {t("cta.secondary")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="grid gap-6 lg:gap-8"
          >
            <motion.div
              variants={glowEffect}
              whileHover="hover"
              className="relative p-6 bg-background rounded-2xl shadow-lg"
            >
              <motion.div variants={gradientShift} className="grid gap-4">
                <motion.div 
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex items-center gap-4"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg
                      className=" w-6 h-6 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{t("features.fast.title")}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{t("features.fast.description")}</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg
                      className=" w-6 h-6 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{t("features.secure.title")}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{t("features.secure.description")}</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <svg
                      className=" w-6 h-6 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{t("features.scalable.title")}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{t("features.scalable.description")}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

import { getTranslations } from 'next-intl/server'
import { AnimatedSection } from './AnimatedSection'

export async function HeroSection() {
  const t = await getTranslations('Hero')

  const content = (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            {t('subtitle')}
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg">
              {t('cta.primary')}
            </button>
            <button className="border border-primary px-8 py-3 rounded-lg">
              {t('cta.secondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  return <AnimatedSection>{content}</AnimatedSection>
}