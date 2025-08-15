"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_655-jOFieZ257KSpsBS1GyoS7QlGKWZYHW.webp",
    alt: "Mountain Falls Golf Course Community",
    caption: "Mountain Falls Golf Course Community",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_656%20%281%29-MfLZtVqgknMB5c4uMH2i6IRDX1LOnn.webp",
    alt: "Modern Golf Course Homes",
    caption: "Modern Golf Course Homes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_655%20%282%29-kWX7GxlYH6VJoluBbMfwZgkqa7JS0o.webp",
    alt: "Desert Mountain View Homes",
    caption: "Desert Mountain View Homes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_655%20%281%29-w6bT0vVqtDRlvSgMvjPhf6DmDlY3wt.webp",
    alt: "Luxury Interior Desert Views",
    caption: "Luxury Interior Desert Views",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_655%20%284%29-CGDIsTEL3MVB7yQWy7jg9hr2znmeET.webp",
    alt: "Community Recreation Center",
    caption: "Community Recreation Center",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_656-4zJ4LPOONOcjyCjqXdNuMRVyw4ZK9c.webp",
    alt: "Tennis and Pickleball Courts",
    caption: "Tennis and Pickleball Courts",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs%3Dw_984%2Ch_655%20%283%29-rwEKeTeSCTWVtIyYdiudg8d5FuF7vZ.webp",
    alt: "Luxury Pool Home Mountain Views",
    caption: "Luxury Pool Home Mountain Views",
  },
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
      }, 4000) // 4 second delay between images
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Featured Properties Gallery
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Explore our stunning collection of luxury homes and exceptional properties in Pahrump
          </p>
          <div
            className={`w-24 h-1 bg-accent mx-auto mt-6 transition-all duration-1000 delay-400 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Gallery Container */}
        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main Image Display */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              fill
              priority
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-serif font-semibold mb-2">{galleryImages[currentIndex].caption}</h3>
              <p className="text-white/80">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 gap-2 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex ? "ring-2 ring-accent scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" fill />
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
