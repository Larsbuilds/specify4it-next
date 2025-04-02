import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  animate?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function Section({
  id,
  animate = true,
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  const content = (
    <Component
      id={id}
      className={cn(
        "py-16 md:py-24 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
