"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface PersonaCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function PersonaCard({ icon, title, description }: PersonaCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0a25] rounded-xl p-6 text-center flex flex-col items-center hover:transform hover:translate-y-[-5px] transition-transform"
    >
      <div className="w-20 h-20 rounded-full bg-[#0a0a30] flex items-center justify-center mb-4 relative">
        {icon}

        {/* Animated ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute inset-[-3px] rounded-full border-2 border-dashed border-[#3a00b0]/30"
        ></motion.div>
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
