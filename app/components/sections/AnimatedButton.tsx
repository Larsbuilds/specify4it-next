"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  variant?: "default" | "outline"
  children: React.ReactNode
  className?: string
}

const buttonHover = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
}

export default function AnimatedButton({
  variant = "default",
  children,
  className
}: AnimatedButtonProps) {
  return (
    <motion.div
      variants={buttonHover}
      whileHover="hover"
      className={className}
    >
      <Button
        size="lg"
        variant={variant}
        className="text-base sm:text-lg w-full sm:w-auto"
      >
        {children}
      </Button>
    </motion.div>
  )
} 