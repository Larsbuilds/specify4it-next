"use client"

import { type Variants } from "framer-motion"

// Base animation variants
const baseFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const baseScale = {
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  exit: { scale: 0.8 }
}

const baseSlide = {
  initial: { x: -20 },
  animate: { x: 0 },
  exit: { x: 20 }
}

// Combined animations
export const fadeIn: Variants = {
  ...baseFade,
  initial: { ...baseFade.initial, y: 20 },
  animate: { ...baseFade.animate, y: 0 },
  exit: { ...baseFade.exit, y: 20 }
}

export const scaleIn: Variants = {
  ...baseScale,
  initial: { ...baseScale.initial, opacity: 0 },
  animate: { ...baseScale.animate, opacity: 1 },
  exit: { ...baseScale.exit, opacity: 0 }
}

export const slideIn: Variants = {
  ...baseSlide,
  initial: { ...baseSlide.initial, opacity: 0 },
  animate: { ...baseSlide.animate, opacity: 1 },
  exit: { ...baseSlide.exit, opacity: 0 }
}

// Interactive animations
export const cardHover: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2 }
  }
}

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

export const navItemHover: Variants = {
  initial: { opacity: 0.7 },
  hover: { 
    opacity: 1,
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

// Section animations
export const sectionVariants: Variants = {
  ...fadeIn,
  animate: { 
    ...fadeIn.animate,
    transition: { duration: 0.5 }
  }
}

// Visual effects
export const glowEffect: Variants = {
  initial: { boxShadow: "0 0 0 0 rgba(var(--primary), 0.1)" },
  hover: {
    boxShadow: "0 0 20px 5px rgba(var(--primary), 0.2)",
    transition: { duration: 0.3 }
  }
}

export const borderGlow: Variants = {
  initial: { borderColor: "rgba(var(--primary), 0.1)" },
  hover: {
    borderColor: "rgba(var(--primary), 0.3)",
    transition: { duration: 0.3 }
  }
}

export const gradientShift: Variants = {
  initial: { backgroundPosition: "0% 50%" },
  hover: {
    backgroundPosition: "100% 50%",
    transition: { duration: 0.5 }
  }
}

// Utility function for staggered animations
export const createStaggeredVariants = (delay: number = 0.1): Variants => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { delay }
  }
}) 