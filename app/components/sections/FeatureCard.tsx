"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

const cardAnimation = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { y: -5, transition: { duration: 0.2 } }
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0.3
}: FeatureCardProps) {
  return (
    <motion.div 
      variants={cardAnimation}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay }}
      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-primary/5 transition-colors"
    >
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500">{description}</p>
      </div>
    </motion.div>
  )
} 