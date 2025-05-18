"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-video max-w-2xl mx-auto"
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.2)]">
        <Image
          src="/placeholder.svg?height=720&width=1280"
          alt="AI transforming educational content into visual storyboards"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay elements to enhance the futuristic look */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a25]/40 to-transparent"></div>

        {/* Glowing elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#00f0ff]/20 filter blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#3a00b0]/20 filter blur-xl"></div>

        {/* Grid overlay for tech feel */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full border-[0.5px] border-[#00f0ff] border-opacity-30 grid grid-cols-6 grid-rows-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#00f0ff] border-opacity-20"></div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background: "linear-gradient(45deg, rgba(58,0,176,0.1) 0%, rgba(0,240,255,0.1) 100%)",
        }}
      ></div>
    </motion.div>
  )
}
