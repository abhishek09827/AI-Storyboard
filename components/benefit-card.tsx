"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0a25] rounded-xl p-6 hover:bg-[#0a0a30] transition-colors group relative overflow-hidden"
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ padding: "1px" }}
      >
        <div className="absolute inset-0 bg-[#0a0a25] rounded-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#0a0a30] flex items-center justify-center mb-4 group-hover:bg-[#0a0a40] transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Background glow effect */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#3a00b0] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
    </motion.div>
  )
}
