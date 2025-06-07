"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2, Maximize2, Minimize2 } from "lucide-react"

export default function StoryboardPreview() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get URL from query params if available
    const params = new URLSearchParams(window.location.search)
    const urlParam = params.get("url")

    // Default URL if none provided
    setUrl(urlParam || "https://example.com/storyboard-preview")

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="min-h-screen bg-[#050510] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#0a0a25] border-b border-[#3a00b0]/30 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Storyboard Preview</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-[#3a00b0] text-[#00f0ff]">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>

          <Button variant="outline" size="sm" className="border-[#3a00b0] text-[#00f0ff]">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Main content with iframe */}
      <main className="flex-1 p-4 md:p-8">
        <div
          className={`w-full h-full bg-[#0a0a25] rounded-lg overflow-hidden border border-[#3a00b0]/30 ${
            isFullscreen ? "fixed inset-0 z-50 rounded-none" : "relative"
          }`}
        >
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a25]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-t-[#00f0ff] border-r-[#3a00b0] border-b-[#00f0ff] border-l-[#3a00b0] rounded-full animate-spin mb-4"></div>
                <p className="text-[#00f0ff]">Loading your storyboard...</p>
              </div>
            </div>
          ) : (
            <iframe src="https://61000140113c3ba7f3.gradio.live/" className="w-full h-full min-h-[80vh]" title="Storyboard Preview" allowFullScreen />
          )}
        </div>
      </main>
    </div>
  )
}
