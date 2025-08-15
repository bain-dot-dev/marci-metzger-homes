"use client"

import { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      property: "Mountain Falls Golf Course Home",
      rating: 5,
      text: "Marci made our dream of owning a home on the golf course a reality. Her knowledge of the Mountain Falls community and attention to detail throughout the entire process was exceptional. We couldn't be happier with our new home!",
      location: "Mountain Falls",
    },
    {
      id: 2,
      name: "Robert Chen",
      property: "Investment Portfolio - 3 Properties",
      rating: 5,
      text: "Working with Marci on building my investment portfolio has been incredibly rewarding. Her market insights and negotiation skills helped me acquire three properties below market value. The ROI has exceeded my expectations.",
      location: "Desert Winds Estates",
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      property: "First-Time Home Purchase",
      rating: 5,
      text: "As a first-time buyer, I was nervous about the process. Marci guided me through every step with patience and expertise. They found me the perfect starter home within my budget and timeline. Highly recommend!",
      location: "Pahrump Valley",
    },
    {
      id: 4,
      name: "David & Patricia Williams",
      property: "Luxury Custom Home Sale",
      rating: 5,
      text: "Selling our custom home was emotional, but Marci handled everything with professionalism and care. Her marketing strategy brought multiple offers above asking price. The entire transaction was smooth and stress-free.",
      location: "Mountain Falls Premier",
    },
    {
      id: 5,
      name: "Thomas Anderson",
      property: "Retirement Home Purchase",
      rating: 5,
      text: "Moving to Pahrump for retirement, we needed someone who understood our needs. Marci's 28+ years of experience showed in every interaction. She found us the perfect home with mountain views and helped us settle into the community.",
      location: "Desert Oasis",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience
            working with us.
          </p>
          <div
            className={`w-24 h-1 bg-accent mx-auto mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Card className="p-14 md:p-16 bg-gradient-to-br from-background to-secondary/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-accent transform rotate-180" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-border pt-6">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground mb-1">{testimonials[currentIndex].property}</p>
                <p className="text-sm text-accent font-medium">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-accent scale-125" : "bg-border hover:bg-accent/50"
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
