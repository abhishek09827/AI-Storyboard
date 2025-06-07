"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Cpu, ImageIcon, Download } from "lucide-react"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-[#00f0ff]" />,
      title: "Upload Lesson Plan",
      description: "Upload your text-based lesson plan or curriculum document in various formats (PDF, DOCX, TXT).",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00f0ff]" />,
      title: "AI Identifies Key Scenes",
      description: "Our AI analyzes your content and identifies the key scenes and concepts that should be visualized.",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-[#00f0ff]" />,
      title: "Optional Image Generation",
      description: "Choose to generate images locally using built-in Stable Diffusion models for complete privacy.",
    },
    {
      icon: <Download className="w-8 h-8 text-[#00f0ff]" />,
      title: "Download or Preview",
      description: "Preview your storyboard instantly and download in various formats for presentation or printing.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Animated timeline line */}
      <div className="absolute left-[28px] top-8 bottom-8 w-1 bg-gradient-to-b from-[#3a00b0] to-[#00f0ff] hidden md:block"></div>

      <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="flex flex-col md:items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#0a0a25] flex items-center justify-center mb-4 z-10 border-2 border-[#3a00b0]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>

            {/* Animated pulse for timeline nodes */}
            <div className="absolute top-7 left-7 w-0 h-0 md:w-4 md:h-4 rounded-full bg-[#00f0ff] z-20 hidden md:block">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute inset-0 rounded-full bg-[#00f0ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Circuit-like connections between steps (only visible on larger screens) */}
      <div className="hidden lg:block">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M200,30 C250,30 250,100 300,100 C350,100 350,30 400,30 C450,30 450,100 500,100 C550,100 550,30 600,30"
            stroke="#00f0ff"
            strokeWidth="1"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            d="M200,50 C270,50 270,120 340,120 C410,120 410,50 480,50 C550,50 550,120 620,120"
            stroke="#3a00b0"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </motion.div>
  )
}
