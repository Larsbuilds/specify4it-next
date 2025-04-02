import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string;
  content: string;
  image?: string;
  link?: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: { 
    y: -5,
    transition: { duration: 0.2 }
  }
}

export function Card({
  title,
  content,
  image,
  link,
  className
}: CardProps) {
  const card = (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-colors hover:bg-accent/5",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {image && (
          <div className="relative h-48 overflow-hidden rounded-md">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </motion.div>
  )

  if (link) {
    return (
      <Link href={link} className="block">
        {card}
      </Link>
    )
  }

  return card
}
