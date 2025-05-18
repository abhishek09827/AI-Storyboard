"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function DemoPreview() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedLessonPlan, setSelectedLessonPlan] = useState("photosynthesis")
  const [displayedLessonPlan, setDisplayedLessonPlan] = useState("photosynthesis")
  const [previewLoading, setPreviewLoading] = useState(false)

  // Sample images for each lesson plan
  const lessonPlanImages = {
    photosynthesis: [
      { src: "/placeholder.svg?height=150&width=200", alt: "Sunlight reaching plant" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Chloroplast structure" },
      { src: "/placeholder.svg?height=150&width=200", alt: "CO2 absorption process" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Water absorption through roots" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Oxygen release" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Glucose production" },
    ],
    waterCycle: [
      { src: "/placeholder.svg?height=150&width=200", alt: "Evaporation from oceans" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Condensation in clouds" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Precipitation as rain" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Collection in water bodies" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Groundwater infiltration" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Transpiration from plants" },
    ],
    egypt: [
      { src: "/placeholder.svg?height=150&width=200", alt: "Nile River and agriculture" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Pyramid construction" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Hieroglyphic writing" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Pharaoh's role in society" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Mummification process" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Egyptian gods and religion" },
    ],
    coding: [
      { src: "/placeholder.svg?height=150&width=200", alt: "Variables and data types" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Conditional statements" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Loops and iteration" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Functions and parameters" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Arrays and data structures" },
      { src: "/placeholder.svg?height=150&width=200", alt: "Debugging process" },
    ],
  }

  const handleGenerateStoryboard = () => {
    setPreviewLoading(true)

    // Simulate processing time
    setTimeout(() => {
      setDisplayedLessonPlan(selectedLessonPlan)
      setPreviewLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="interactive" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="interactive">Interactive Demo</TabsTrigger>
          <TabsTrigger value="video">Video Walkthrough</TabsTrigger>
        </TabsList>

        <TabsContent value="interactive" className="mt-0">
          <div className="bg-[#0a0a25] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
                <p className="text-gray-400 mb-6">
                  See how StoryboardAI transforms a simple lesson plan into a visual storyboard. Interact with the demo
                  below to experience the transformation.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Sample Lesson Plan</label>
                    <select
                      className="w-full bg-[#0a0a35] border border-[#3a00b0] rounded-md p-2 text-white"
                      value={selectedLessonPlan}
                      onChange={(e) => setSelectedLessonPlan(e.target.value)}
                    >
                      <option value="photosynthesis">Introduction to Photosynthesis</option>
                      <option value="waterCycle">The Water Cycle</option>
                      <option value="egypt">Ancient Egyptian Civilization</option>
                      <option value="coding">Basic Coding Concepts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Storyboard Style</label>
                    <select className="w-full bg-[#0a0a35] border border-[#3a00b0] rounded-md p-2 text-white">
                      <option>Educational</option>
                      <option>Minimalist</option>
                      <option>Illustrated</option>
                      <option>Technical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Image Generation</label>
                    <div className="flex items-center">
                      <input type="checkbox" id="localGeneration" className="mr-2" />
                      <label htmlFor="localGeneration">Use local image generation</label>
                    </div>
                  </div>
                </div>

                <Link href="/storyboard-preview">
                  <Button
                    className="w-full bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity"
                    onClick={handleGenerateStoryboard}
                  >
                    {previewLoading ? "Generating..." : "Generate Storyboard"}
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-[#0a0a35] rounded-lg p-4 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Preview</h4>
                    <Link href="/storyboard-preview">
                      <Button variant="ghost" size="sm" className="text-[#00f0ff]">
                        <ArrowRight className="w-4 h-4 mr-1" /> Full Preview
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 h-[calc(100%-40px)] overflow-auto">
                    {previewLoading ? (
                      <div className="col-span-2 flex items-center justify-center h-full">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 border-4 border-t-[#00f0ff] border-r-[#3a00b0] border-b-[#00f0ff] border-l-[#3a00b0] rounded-full animate-spin mb-4"></div>
                          <p className="text-[#00f0ff]">Generating storyboard...</p>
                        </div>
                      </div>
                    ) : (
                      lessonPlanImages[displayedLessonPlan].map((image, index) => (
                        <div key={index} className="bg-[#0a0a25] rounded p-2 aspect-[4/3] flex flex-col">
                          <div className="bg-[#0a0a30] rounded flex-1 mb-2 overflow-hidden">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="h-3 bg-[#0a0a30] rounded w-full flex items-center px-1">
                            <div className="h-1.5 bg-[#3a00b0] rounded w-full"></div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Animated circuit paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    d="M0,50 C50,50 50,100 100,100 C150,100 150,50 200,50 C250,50 250,100 300,100"
                    stroke="#00f0ff"
                    strokeWidth="1"
                    fill="none"
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    d="M0,70 C70,70 70,120 140,120 C210,120 210,70 280,70"
                    stroke="#3a00b0"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="video" className="mt-0">
          <div className="bg-[#0a0a25] rounded-xl overflow-hidden">
            <div className="relative aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a35]">
                {!isPlaying ? (
                  <Button
                    onClick={() => setIsPlaying(true)}
                    className="bg-[#3a00b0] hover:bg-[#3a00b0]/80 transition-colors rounded-full w-16 h-16 flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </Button>
                ) : (
                  <div className="text-center">
                    <p className="text-lg font-medium mb-2">Video would play here</p>
                    <p className="text-sm text-gray-400">This is a placeholder for the demo video</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Complete Walkthrough</h3>
              <p className="text-gray-400">
                Watch our detailed walkthrough of StoryboardAI's features, from uploading your lesson plan to exporting
                the final storyboard.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
