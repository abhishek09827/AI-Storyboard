"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Cpu, Download, Globe, Lightbulb, Lock, Palette, School, Users, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import ProblemStatement from "@/components/problem-statement"
import BenefitCard from "@/components/benefit-card"
import PersonaCard from "@/components/persona-card"
import DemoPreview from "@/components/demo-preview"

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  // Check if user is signed in (this would typically use a more robust auth check)
  useEffect(() => {
    // Mock authentication check - in a real app, this would check cookies, local storage, or an auth provider
    const checkAuth = () => {
      const hasSession = localStorage.getItem("userSession")
      setIsSignedIn(!!hasSession)
    }

    checkAuth()
  }, [])

  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#3a00b0] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#00f0ff]" />
          </div>
          <span className="text-xl font-bold">StoryboardAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#demo" className="text-gray-300 hover:text-white transition-colors">
            Demo
          </Link>
          <Link href="/feedback" className="text-gray-300 hover:text-white transition-colors">
            Feedback
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-[#3a00b0]/30 flex items-center justify-center border border-[#3a00b0]">
                <User className="w-5 h-5 text-[#00f0ff]" />
              </div>
              <span className="text-sm hidden sm:inline">My Account</span>
            </div>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large nebula/galaxy effects */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#3a00b0] rounded-full filter blur-[120px] opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00f0ff] rounded-full filter blur-[150px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-[#9000ff] rounded-full filter blur-[100px] opacity-10 animate-float"></div>

          {/* Distant stars - small dots */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Brighter stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[3px] h-[3px] bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.5,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 1}s`,
                }}
              />
            ))}
          </div>

          {/* Subtle grid lines for tech feel */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full border-[0.5px] border-[#00f0ff] border-opacity-30 grid grid-cols-6 grid-rows-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#00f0ff] border-opacity-20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Lesson Plans into Visual Storyboards
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">
                —With One Click
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              An AI-powered, offline-ready storyboard generator designed for educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/storyboard-preview">
                <Button className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity text-lg py-6 px-8">
                  Generate a Storyboard
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 text-lg py-6 px-8"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative w-full aspect-video max-w-2xl mx-auto overflow-hidden rounded-lg shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <Image
                src="/images/futuristic-concept.png"
                alt="Futuristic AI-generated storyboard concept"
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/70 to-transparent"></div>
              <div className="absolute inset-0 border border-[#3a00b0]/30 rounded-lg"></div>

              {/* Tech overlay elements */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00f0ff] animate-pulse"></div>
                <div className="text-xs text-[#00f0ff] font-mono">AI ENHANCED</div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 w-full bg-[#0a0a25] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-300 font-mono">
                  <span>STORYBOARD GENERATION</span>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="features" className="py-20 bg-[#080820]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">
              Reimagine
            </span>{" "}
            How You Create Visual Learning Materials
          </h2>
          <ProblemStatement />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">Works</span>
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Animated connecting lines */}
            <div
              className="absolute left-1/2 top-12 bottom-12 w-1 bg-gradient-to-b from-[#3a00b0] to-[#00f0ff] hidden md:block"
              style={{ transform: "translateX(-50%)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#3a00b0] to-[#00f0ff] animate-pulse opacity-50"></div>
            </div>

            {/* Horizontal connecting lines for desktop */}
            <div className="hidden md:block">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`absolute top-[${index * 25 + 12}%] ${index % 2 === 0 ? "right-1/2" : "left-1/2"} w-[15%] h-0.5`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? "l" : "r"} from-transparent to-[#00f0ff] animate-pulse`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Flowchart steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1">
                    <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Upload Lesson Plan</h3>
                    <p className="text-gray-400 relative z-10 md:pr-6">
                      Upload your text-based lesson plan or curriculum document in various formats (PDF, DOCX, TXT).
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center order-2">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#0a0a25] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                        <div className="w-16 h-16 rounded-full bg-[#0a0a35] flex items-center justify-center">
                          <div className="text-[#00f0ff] text-2xl font-bold">1</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#3a00b0] animate-spin-slow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#0a0a25] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                        <div className="w-16 h-16 rounded-full bg-[#0a0a35] flex items-center justify-center">
                          <div className="text-[#00f0ff] text-2xl font-bold">2</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#3a00b0] animate-spin-slow"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3 text-white relative z-10">AI Identifies Key Scenes</h3>
                    <p className="text-gray-400 relative z-10 md:pl-6">
                      Our AI analyzes your content and identifies the key scenes and concepts that should be visualized.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right order-1">
                    <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Optional Image Generation</h3>
                    <p className="text-gray-400 relative z-10 md:pr-6">
                      Choose to generate images locally using built-in Stable Diffusion models for complete privacy.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center order-2">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#0a0a25] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                        <div className="w-16 h-16 rounded-full bg-[#0a0a35] flex items-center justify-center">
                          <div className="text-[#00f0ff] text-2xl font-bold">3</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#3a00b0] animate-spin-slow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#0a0a25] border-2 border-[#3a00b0] flex items-center justify-center z-10 relative">
                        <div className="w-16 h-16 rounded-full bg-[#0a0a35] flex items-center justify-center">
                          <div className="text-[#00f0ff] text-2xl font-bold">4</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#00f0ff] opacity-20 animate-ping"></div>
                      <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#3a00b0] animate-spin-slow"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Download or Preview</h3>
                    <p className="text-gray-400 relative z-10 md:pl-6">
                      Preview your storyboard instantly and download in various formats for presentation or printing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data flow animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#00f0ff]"
                  style={{
                    left: "50%",
                    top: `${Math.random() * 100}%`,
                    opacity: 0.7,
                    transform: "translateX(-50%)",
                    animation: `flowDown 4s infinite ${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Add keyframes for the flow animation */}
          <style jsx>{`
            @keyframes flowDown {
              0% {
                opacity: 0;
                transform: translate(-50%, -20px);
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                transform: translate(-50%, 100vh);
              }
            }
            
            @keyframes spin-slow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            
            .animate-spin-slow {
              animation: spin-slow 15s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#080820]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">Benefits</span>{" "}
            That Make a Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Cpu className="w-10 h-10 text-[#00f0ff]" />}
              title="Curriculum-aware Output"
              description="AI understands educational contexts and generates relevant visual narratives."
            />
            <BenefitCard
              icon={<Lock className="w-10 h-10 text-[#00f0ff]" />}
              title="Fully Offline and Secure"
              description="Run everything locally with no data leaving your device, perfect for sensitive educational content."
            />
            <BenefitCard
              icon={<Palette className="w-10 h-10 text-[#00f0ff]" />}
              title="No Design Skills Needed"
              description="Transform text into professional storyboards regardless of your artistic abilities."
            />
            <BenefitCard
              icon={<Globe className="w-10 h-10 text-[#00f0ff]" />}
              title="Multilingual Support"
              description="Create storyboards in multiple languages to support diverse learning environments."
            />
            <BenefitCard
              icon={<Download className="w-10 h-10 text-[#00f0ff]" />}
              title="Flexible Export Options"
              description="Export as interactive scrollable views or print-ready PDFs for any teaching scenario."
            />
            <BenefitCard
              icon={<Lightbulb className="w-10 h-10 text-[#00f0ff]" />}
              title="Customizable Templates"
              description="Choose from various storyboard layouts to match your teaching style and content needs."
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Who It's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">For</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <PersonaCard
              icon={<School className="w-12 h-12 text-[#00f0ff]" />}
              title="Educators"
              description="Teachers who want to create engaging visual materials without spending hours on design."
            />
            <PersonaCard
              icon={<Globe className="w-12 h-12 text-[#00f0ff]" />}
              title="NGOs"
              description="Organizations creating educational materials for diverse communities and environments."
            />
            <PersonaCard
              icon={<Users className="w-12 h-12 text-[#00f0ff]" />}
              title="Training Institutes"
              description="Professional development centers looking to enhance their instructional materials."
            />
            <PersonaCard
              icon={<Lightbulb className="w-12 h-12 text-[#00f0ff]" />}
              title="EdTech Innovators"
              description="Developers and entrepreneurs building the next generation of educational tools."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-[#080820]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            See It In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">Action</span>
          </h2>

          <DemoPreview />
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Transform Your Lesson Plans?</h2>
            <p className="text-xl text-gray-300">
              Download StoryboardAI today and start creating engaging visual storyboards in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/storyboard-preview">
                <Button className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity text-lg py-6 px-8">
                  Generate a Storyboard
                </Button>
              </Link>
              <Link href="https://github.com/storyboardai/documentation" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 text-lg py-6 px-8"
                >
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030308] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#3a00b0] flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-[#00f0ff]" />
                </div>
                <span className="text-lg font-bold">StoryboardAI</span>
              </div>
              <p className="text-gray-400">
                AI-powered storyboard generation for educators and instructional designers.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    GitHub Repo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-gray-400 hover:text-white transition-colors">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} StoryboardAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
