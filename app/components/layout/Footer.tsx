"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/lib/animations"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We are dedicated to providing the best solutions for our clients. Our team of experts
              works tirelessly to deliver exceptional results.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500 dark:text-gray-400">
                123 Business Street
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                City, State 12345
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                Phone: (123) 456-7890
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                Email: info@example.com
              </li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter for updates and news.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </motion.div>
        </div>
        <motion.div 
          variants={slideIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="mt-12 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 