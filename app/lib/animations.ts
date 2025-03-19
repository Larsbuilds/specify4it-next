"use client"

import { type Variants } from "framer-motion"

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

export const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

export const cardHover = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2 }
  }
}

export const buttonHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

export const navItemHover = {
  initial: { opacity: 0.7 },
  hover: { 
    opacity: 1,
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

export const sectionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0, y: 20 }
}

export const glowEffect = {
  initial: { boxShadow: "0 0 0 0 rgba(var(--primary), 0.1)" },
  hover: {
    boxShadow: "0 0 20px 5px rgba(var(--primary), 0.2)",
    transition: { duration: 0.3 }
  }
}

export const borderGlow = {
  initial: { borderColor: "rgba(var(--primary), 0.1)" },
  hover: {
    borderColor: "rgba(var(--primary), 0.3)",
    transition: { duration: 0.3 }
  }
}

export const gradientShift = {
  initial: { backgroundPosition: "0% 50%" },
  hover: {
    backgroundPosition: "100% 50%",
    transition: { duration: 0.5 }
  }
} 