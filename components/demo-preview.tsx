"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"
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
          <div className="bg-[#0a0a25] rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3a00b0] rounded-full filter blur-[120px] opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00f0ff] rounded-full filter blur-[120px] opacity-10"></div>

              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full border-[0.5px] border-[#00f0ff] border-opacity-30 grid grid-cols-6 grid-rows-4">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-[#00f0ff] border-opacity-20"></div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center relative z-10">
              Photosynthesis Storyboard Generation
              <span className="block text-sm font-normal text-gray-400 mt-2">
                Watch how a lesson plan transforms into a visual storyboard
              </span>
            </h3>

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Process flowchart */}
              <div className="relative">
                {/* Central timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3a00b0] to-[#00f0ff] transform -translate-x-1/2"></div>

                {/* Animated particles flowing down the timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-[#00f0ff]"
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: `${i * 20}%`,
                        opacity: 0.7,
                        animation: `flowDown 3s infinite ${i * 0.5}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Step 1: Lesson Plan */}
                <div className="flex flex-col md:flex-row items-center mb-16 relative">
                  <div className="md:w-5/12 md:pr-8 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h4 className="text-xl font-bold mb-2 text-[#00f0ff]">Lesson Plan Input</h4>
                    <p className="text-gray-400">
                      Teacher uploads "Introduction to Photosynthesis" lesson plan with key concepts and learning
                      objectives
                    </p>
                  </div>

                  <div className="md:w-2/12 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-[#0a0a35] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="text-[#00f0ff] font-bold">1</div>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 order-3">
                    <div className="bg-[#0a0a35] p-3 rounded-lg border border-[#3a00b0]/50">
                      <div className="text-xs text-gray-400 mb-1">Lesson Plan Excerpt:</div>
                      <div className="text-sm">
                        <p className="mb-1">
                          <span className="text-[#00f0ff]">Topic:</span> Introduction to Photosynthesis
                        </p>
                        <p className="mb-1">
                          <span className="text-[#00f0ff]">Objective:</span> Students will understand how plants convert
                          sunlight into energy
                        </p>
                        <p>
                          <span className="text-[#00f0ff]">Key Concepts:</span> Light absorption, chloroplasts, CO₂
                          intake, glucose production
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: AI Analysis */}
                <div className="flex flex-col md:flex-row items-center mb-16 relative">
                  <div className="md:w-5/12 md:pr-8 order-3 md:order-1">
                    <div className="bg-[#0a0a35] p-3 rounded-lg border border-[#3a00b0]/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-400">AI Analysis Results:</div>
                        <div className="text-xs text-[#00f0ff] animate-pulse">Processing...</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-[#00f0ff] rounded-full mr-2"></div>
                          <p>Identified 6 key visual scenes</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-[#00f0ff] rounded-full mr-2"></div>
                          <p>Extracted scientific terminology</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-[#00f0ff] rounded-full mr-2"></div>
                          <p>Determined appropriate visual style</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/12 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-[#0a0a35] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="text-[#00f0ff] font-bold">2</div>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 mb-6 md:mb-0 order-2 md:order-3">
                    <h4 className="text-xl font-bold mb-2 text-[#00f0ff]">AI Content Analysis</h4>
                    <p className="text-gray-400">
                      AI processes the lesson plan, identifying key concepts that need visualization and determining the
                      optimal sequence
                    </p>
                  </div>
                </div>

                {/* Step 3: Storyboard Generation */}
                <div className="flex flex-col md:flex-row items-center mb-16 relative">
                  <div className="md:w-5/12 md:pr-8 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h4 className="text-xl font-bold mb-2 text-[#00f0ff]">Storyboard Creation</h4>
                    <p className="text-gray-400">
                      AI generates a complete storyboard with visual representations of each key concept in the
                      photosynthesis process
                    </p>
                  </div>

                  <div className="md:w-2/12 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-[#0a0a35] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="text-[#00f0ff] font-bold">3</div>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 order-3">
                    <div className="bg-[#0a0a35] p-3 rounded-lg border border-[#3a00b0]/50">
                      <div className="text-xs text-gray-400 mb-2">Generated Storyboard:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {lessonPlanImages.photosynthesis.slice(0, 6).map((image, index) => (
                          <div key={index} className="aspect-[4/3] bg-[#0a0a25] rounded overflow-hidden p-1">
                            <div className="w-full h-full relative">
                              <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded"
                              />
                              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#0a0a30]">
                                <div className="h-full bg-[#3a00b0] rounded w-full"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Final Output */}
                <div className="flex flex-col md:flex-row items-center relative">
                  <div className="md:w-5/12 md:pr-8 order-3 md:order-1">
                    <div className="bg-[#0a0a35] p-3 rounded-lg border border-[#3a00b0]/50">
                      <div className="text-xs text-gray-400 mb-2">Available Output Formats:</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#0a0a25] p-2 rounded border border-[#3a00b0]/30 text-center">
                          <div className="text-[#00f0ff] text-sm font-medium">Interactive</div>
                          <div className="text-xs text-gray-400">Web-based view</div>
                        </div>
                        <div className="bg-[#0a0a25] p-2 rounded border border-[#3a00b0]/30 text-center">
                          <div className="text-[#00f0ff] text-sm font-medium">PDF</div>
                          <div className="text-xs text-gray-400">Print-ready</div>
                        </div>
                        <div className="bg-[#0a0a25] p-2 rounded border border-[#3a00b0]/30 text-center">
                          <div className="text-[#00f0ff] text-sm font-medium">Images</div>
                          <div className="text-xs text-gray-400">Individual files</div>
                        </div>
                        <div className="bg-[#0a0a25] p-2 rounded border border-[#3a00b0]/30 text-center">
                          <div className="text-[#00f0ff] text-sm font-medium">Presentation</div>
                          <div className="text-xs text-gray-400">Slide format</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/12 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-[#0a0a35] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="text-[#00f0ff] font-bold">4</div>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 mb-6 md:mb-0 order-2 md:order-3">
                    <h4 className="text-xl font-bold mb-2 text-[#00f0ff]">Ready for Use</h4>
                    <p className="text-gray-400">
                      The completed storyboard is ready for download in multiple formats or can be viewed directly in
                      the browser
                    </p>
                  </div>
                </div>
              </div>

              {/* Try it button */}
              <div className="mt-12 text-center">
                <Link href="/storyboard-preview">
                  <Button className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity">
                    Try With Your Own Lesson Plan
                  </Button>
                </Link>
              </div>
            </div>

            {/* Add keyframes for the flow animation */}
            <style jsx>{`
              @keyframes flowDown {
                0% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(-20px);
                }
                50% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(300px);
                }
              }
            `}</style>
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
