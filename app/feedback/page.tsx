"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BookOpen, Send, Star, ThumbsUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FeedbackPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedbackType, setFeedbackType] = useState("general")
  const [rating, setRating] = useState<number | null>(null)
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Validate form
      if (!name || !email || !message || !rating) {
        throw new Error("Please fill in all required fields")
      }

      // Submit to API route instead of directly to Supabase
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          feedback_type: feedbackType,
          rating,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit feedback")
      }

      // Show success state
      setIsSuccess(true)

      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (err: any) {
      console.error("Error submitting feedback:", err)
      setError(err.message || "Failed to submit feedback. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = () => {
    return (
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-2xl transition-colors ${rating && star <= rating ? "text-[#00f0ff]" : "text-gray-500"}`}
            aria-label={`Rate ${star} stars`}
          >
            <Star className={`w-8 h-8 ${rating && star <= rating ? "fill-[#00f0ff]" : ""}`} />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050510] text-white flex flex-col">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large nebula/galaxy effects */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#3a00b0] rounded-full filter blur-[120px] opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00f0ff] rounded-full filter blur-[150px] opacity-20"></div>

        {/* Distant stars - small dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
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

      {/* Header */}
      <header className="container mx-auto py-6 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#3a00b0] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#00f0ff]" />
          </div>
          <span className="text-xl font-bold">StoryboardAI</span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto py-8 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Share Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a00b0] to-[#00f0ff]">
                Feedback
              </span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Your feedback helps us improve StoryboardAI. Let us know about your experience, suggestions, or any issues
              you've encountered.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-[#0a0a25] rounded-xl p-8 shadow-lg border border-[#3a00b0]/30 text-center">
              <div className="w-16 h-16 bg-[#3a00b0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-[#00f0ff]" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-400 mb-4">
                Your feedback has been submitted successfully. We appreciate your input!
              </p>
              <p className="text-gray-400">Redirecting you to the home page...</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a25] rounded-xl p-6 md:p-8 shadow-lg border border-[#3a00b0]/30"
            >
              {error && (
                <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-900 text-red-300">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#0a0a35] border-[#3a00b0] focus:border-[#00f0ff]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#0a0a35] border-[#3a00b0] focus:border-[#00f0ff]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label className="block mb-3">Feedback Type</Label>
                <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" className="border-[#3a00b0]" />
                    <Label htmlFor="general">General Feedback</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feature" id="feature" className="border-[#3a00b0]" />
                    <Label htmlFor="feature">Feature Request</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bug" id="bug" className="border-[#3a00b0]" />
                    <Label htmlFor="bug">Bug Report</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="improvement" id="improvement" className="border-[#3a00b0]" />
                    <Label htmlFor="improvement">Improvement Suggestion</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-6">
                <Label className="block mb-3">
                  How would you rate your experience? <span className="text-red-400">*</span>
                </Label>
                {renderStars()}
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="block mb-2">
                  Your Feedback <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#0a0a35] border-[#3a00b0] focus:border-[#00f0ff] min-h-[150px]"
                  placeholder="Please share your thoughts, suggestions, or report any issues you've encountered..."
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Submit Feedback
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} StoryboardAI. All rights reserved.</p>
      </footer>
    </div>
  )
}
