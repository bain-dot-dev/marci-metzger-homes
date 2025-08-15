"use client"

import { useEffect, useState } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-primary flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold mb-2">Marci Metzger Homes</h1>
          <p className="text-accent">Loading your luxury experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-accent transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>

        {/* Loading Spinner */}
        <div className="loading-spinner mx-auto mt-8" />
      </div>
    </div>
  )
}
