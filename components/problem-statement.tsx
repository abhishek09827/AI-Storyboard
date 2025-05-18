"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Palette, Cloud, Lock } from "lucide-react"

export default function ProblemStatement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      <motion.div variants={itemVariants} className="bg-[#0a0a25] rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a00b0] rounded-full filter blur-[80px] opacity-20"></div>
        <h3 className="text-2xl font-bold mb-6">Traditional Approach</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3a00b0]/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Time-Consuming</h4>
              <p className="text-gray-400">Hours spent manually creating visual materials for each lesson.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3a00b0]/20 flex items-center justify-center flex-shrink-0">
              <Palette className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Artistic Skills Required</h4>
              <p className="text-gray-400">Need design expertise to create professional-looking storyboards.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3a00b0]/20 flex items-center justify-center flex-shrink-0">
              <Cloud className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Cloud Dependency</h4>
              <p className="text-gray-400">Most tools require internet connection and send data to third parties.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3a00b0]/20 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Privacy Concerns</h4>
              <p className="text-gray-400">Sensitive educational content exposed to cloud services.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-[#0a0a25] to-[#0a0a35] rounded-xl p-8 relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00f0ff] rounded-full filter blur-[80px] opacity-10"></div>
        <h3 className="text-2xl font-bold mb-6">StoryboardAI Solution</h3>

        <div className="relative">
          <div className="border-l-2 border-[#3a00b0] pl-6 pb-6 relative">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00f0ff]"></div>
            <h4 className="font-semibold text-lg">One-Click Generation</h4>
            <p className="text-gray-400">Transform lesson plans into visual storyboards in seconds, not hours.</p>
          </div>

          <div className="border-l-2 border-[#3a00b0] pl-6 pb-6 relative">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00f0ff]"></div>
            <h4 className="font-semibold text-lg">No Design Skills Needed</h4>
            <p className="text-gray-400">AI handles all the visual design work while you focus on content.</p>
          </div>

          <div className="border-l-2 border-[#3a00b0] pl-6 pb-6 relative">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00f0ff]"></div>
            <h4 className="font-semibold text-lg">100% Offline Capability</h4>
            <p className="text-gray-400">Run entirely on your device with no internet connection required.</p>
          </div>

          <div className="pl-6 relative">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00f0ff]"></div>
            <h4 className="font-semibold text-lg">Complete Privacy</h4>
            <p className="text-gray-400">Your educational content never leaves your device, ensuring total security.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
