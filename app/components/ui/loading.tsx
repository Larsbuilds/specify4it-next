import { motion } from "framer-motion"

export function SectionLoading() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-gray-500">Loading...</p>
      </motion.div>
    </div>
  )
} 