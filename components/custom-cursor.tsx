"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringAccent, setIsHoveringAccent] = useState(false) // Added state for accent color hover detection
  const [isVisible, setIsVisible] = useState(false)

  // Store position history for trail effect
  const positionHistory = useRef<{ x: number; y: number }[]>([])
  const maxTrailLength = 12

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let animationId: number

    const updatePosition = (e: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }

      animationId = requestAnimationFrame(() => {
        if (cursor) {
          // Update main cursor position
          cursor.style.left = `${e.clientX - 12}px`
          cursor.style.top = `${e.clientY - 12}px`

          // Add current position to history
          positionHistory.current.unshift({ x: e.clientX, y: e.clientY })

          // Keep only the positions we need for the trail
          if (positionHistory.current.length > maxTrailLength * 3) {
            positionHistory.current = positionHistory.current.slice(0, maxTrailLength * 3)
          }

          // Update trail positions with delay
          trailRefs.current.forEach((trailEl, index) => {
            if (trailEl && positionHistory.current.length > (index + 1) * 3) {
              const pos = positionHistory.current[(index + 1) * 3]
              const size = Math.max(8, 20 - index * 1)
              trailEl.style.left = `${pos.x - size / 2}px`
              trailEl.style.top = `${pos.y - size / 2}px`
            }
          })

          if (!isVisible) {
            setIsVisible(true)
          }
        }
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleAccentMouseEnter = () => {
      setIsHovering(true)
      setIsHoveringAccent(true)
    }
    const handleAccentMouseLeave = () => {
      setIsHovering(false)
      setIsHoveringAccent(false)
    }
    const handleMouseOut = () => setIsVisible(false)

    // Add event listeners
    document.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseout", handleMouseOut)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    const accentElements = document.querySelectorAll(`
      [class*="text-accent"], 
      [class*="bg-accent"], 
      [class*="border-accent"], 
      [class*="accent"], 
      .text-amber-400, 
      .text-amber-500, 
      .bg-amber-400, 
      .bg-amber-500, 
      .border-amber-400, 
      .border-amber-500,
      [class*="text-yellow"],
      [class*="bg-yellow"],
      [class*="border-yellow"]
    `)

    accentElements.forEach((el) => {
      el.addEventListener("mouseenter", handleAccentMouseEnter)
      el.addEventListener("mouseleave", handleAccentMouseLeave)
    })

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseout", handleMouseOut)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      accentElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleAccentMouseEnter)
        el.removeEventListener("mouseleave", handleAccentMouseLeave)
      })
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] hidden lg:block transition-opacity duration-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: isHoveringAccent ? "scale(2)" : isHovering ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.15s ease-out, opacity 0.1s ease-out",
        }}
      >
        {/* Outer ring */}
        <div
          className={`w-6 h-6 border-2 rounded-full transition-all duration-150 ${
            isHoveringAccent
              ? "border-amber-300 bg-amber-400/40 shadow-xl shadow-amber-400/50"
              : isHovering
                ? "border-accent bg-accent/20 shadow-lg shadow-accent/25"
                : "border-accent/60 bg-transparent"
          }`}
        />

        {/* Inner dot */}
        <div
          className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full transition-all duration-150 ${
            isHoveringAccent
              ? "bg-amber-300 scale-200 shadow-lg shadow-amber-300/50"
              : isHovering
                ? "bg-accent scale-150"
                : "bg-accent/80 scale-100"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {Array.from({ length: maxTrailLength }).map((_, index) => {
        const opacity = Math.max(0.08, 0.4 - index * 0.03)
        const size = Math.max(8, 20 - index * 1)
        const glowIntensity = isHoveringAccent ? Math.max(0.1, 0.6 - index * 0.04) : Math.max(0.05, 0.3 - index * 0.025)

        return (
          <div
            key={index}
            ref={(el) => {
              trailRefs.current[index] = el
            }}
            className={`fixed pointer-events-none z-[${9998 - index}] hidden lg:block transition-opacity duration-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              opacity: opacity,
              transform: isHoveringAccent
                ? `scale(${1.6 - index * 0.1})`
                : isHovering
                  ? `scale(${1.3 - index * 0.08})`
                  : "scale(1)",
              transition: `transform ${0.25 + index * 0.03}s ease-out, opacity 0.1s ease-out`,
            }}
          >
            <div
              className={`border-2 rounded-full shadow-lg ${
                isHoveringAccent ? "border-amber-300/60 bg-amber-400/25" : "border-accent/40 bg-accent/15"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: isHoveringAccent
                  ? `0 0 ${glowIntensity * 20}px rgba(251, 191, 36, ${glowIntensity})`
                  : `0 0 ${glowIntensity * 15}px rgba(var(--accent-rgb, 217 119 6), ${glowIntensity})`,
              }}
            />
          </div>
        )
      })}
    </>
  )
}
