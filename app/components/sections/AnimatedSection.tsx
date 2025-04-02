'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
