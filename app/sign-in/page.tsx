"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Eye, EyeOff, Lock, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Hardcoded credentials
  const validEmail = "test@gmail.com"
  const validPassword = "1234"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === validEmail && password === validPassword) {
      // Successful login
      router.push("/")
    } else {
      // Failed login
      setError("Invalid email or password. Please try again.")
    }

    setIsLoading(false)
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
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-[#0a0a25] rounded-xl p-8 shadow-lg border border-[#3a00b0]/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a00b0] rounded-full filter blur-[80px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00f0ff] rounded-full filter blur-[80px] opacity-10"></div>

            <div className="relative z-10">
              <h1 className="text-2xl font-bold mb-2">Sign In</h1>
              <p className="text-gray-400 mb-6">Welcome back! Please enter your details.</p>

              {error && (
                <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-900 text-red-300">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-[#0a0a35] border-[#3a00b0] focus:border-[#00f0ff] focus:ring-[#00f0ff]/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm text-[#00f0ff] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 bg-[#0a0a35] border-[#3a00b0] focus:border-[#00f0ff] focus:ring-[#00f0ff]/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3a00b0] to-[#00f0ff] hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <Link href="#" className="text-[#00f0ff] hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#3a00b0]/30">
                <p className="text-xs text-gray-500 text-center">
                  For demo purposes, use:
                  <br />
                  Email: <span className="text-[#00f0ff]">test@gmail.com</span>
                  <br />
                  Password: <span className="text-[#00f0ff]">1234</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} StoryboardAI. All rights reserved.</p>
      </footer>
    </div>
  )
}
