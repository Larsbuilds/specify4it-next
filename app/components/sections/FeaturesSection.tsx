"use client"

import { motion } from "framer-motion"
import { fadeIn, scaleIn } from "@/lib/animations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code2, 
  Layout, 
  Palette, 
  Zap, 
  Shield, 
  GitBranch,
  Cloud,
  Smartphone,
  Moon
} from "lucide-react"

const features = [
  {
    title: "Modern Design System",
    description: "Built with modern design principles and accessibility in mind.",
    icon: Palette,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Responsive Layout",
    description: "Looks great on any device, from mobile to desktop.",
    icon: Smartphone,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Dark Mode",
    description: "Built-in dark mode support with system preference detection.",
    icon: Moon,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Performance Optimized",
    description: "Lightning fast performance with modern optimization techniques.",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Enterprise Security",
    description: "Enterprise-grade security with best practices implemented.",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Version Control",
    description: "Built-in version control and deployment workflows.",
    icon: GitBranch,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Cloud Ready",
    description: "Ready for cloud deployment with scalable architecture.",
    icon: Cloud,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "Developer Experience",
    description: "Excellent developer experience with modern tooling.",
    icon: Code2,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Features that make development faster & easier
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Everything you need to build modern web applications
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 