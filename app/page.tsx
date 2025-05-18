import { Button } from "@/components/ui/button"
import { BookOpen, Cpu, Download, Globe, Lightbulb, Lock, Palette, School, Users } from "lucide-react"
import Link from "next/link"
import HeroAnimation from "@/components/hero-animation"
import ProblemStatement from "@/components/problem-statement"
import HowItWorks from "@/components/how-it-works"
import BenefitCard from "@/components/benefit-card"
import PersonaCard from "@/components/persona-card"
import DemoPreview from "@/components/demo-preview"

export default function Home() {
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
          <Link href="#download" className="text-gray-300 hover:text-white transition-colors">
            Download
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
          </Link>
          <Button className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity">
            Get Started
          </Button>
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
              <Button
                variant="outline"
                className="border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 text-lg py-6 px-8"
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative z-10">
            <HeroAnimation />
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
          <HowItWorks />
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
              <Button className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity text-lg py-6 px-8">
                Download Now
              </Button>
              <Button
                variant="outline"
                className="border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 text-lg py-6 px-8"
              >
                View Documentation
              </Button>
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
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
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
