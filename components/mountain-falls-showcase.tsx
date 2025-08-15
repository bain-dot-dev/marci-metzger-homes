"use client"

import { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GuitarIcon as Golf, TurtleIcon as Tennis, Waves, Dumbbell, Utensils, TreePine, ArrowRight } from "lucide-react"

export default function MountainFallsShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

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

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const amenities = [
    {
      icon: Golf,
      title: "18-Hole Championship Golf Course",
      description: "Play on a professionally designed course with stunning mountain views",
    },
    {
      icon: Tennis,
      title: "Tennis & Pickleball Courts",
      description: "State-of-the-art courts for year-round recreation and tournaments",
    },
    {
      icon: Waves,
      title: "Resort-Style Pools",
      description: "Multiple pools including lap pool, spa, and family recreation areas",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Fully equipped gym with modern equipment and group fitness classes",
    },
    {
      icon: Utensils,
      title: "Gourmet Restaurant & Bar",
      description: "Fine dining with panoramic views and signature cocktails",
    },
    {
      icon: TreePine,
      title: "Walking Trails & Parks",
      description: "Miles of scenic trails through natural desert landscapes",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Live the Mountain Falls Lifestyle
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Experience luxury living in Nevada&apos;s premier golf course community, where world-class amenities meet
            breathtaking natural beauty in the heart of Pahrump Valley.
          </p>
          <div
            className={`w-24 h-1 bg-accent mx-auto mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className={`group p-6 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <amenity.icon className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div
          className={`grid sm:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center text-primary">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-primary/90">Luxury Homes</div>
          </div>
          <div className="text-center text-primary">
            <div className="text-4xl font-bold text-accent mb-2">18</div>
            <div className="text-primary/90">Championship Holes</div>
          </div>
          <div className="text-center text-primary">
            <div className="text-4xl font-bold text-accent mb-2">365</div>
            <div className="text-primary/90">Days of Sunshine</div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-lg text-primary/90 mb-6">
            Ready to discover your dream home in Mountain Falls? Explore our exclusive listings today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
              Explore Mountain Falls Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-muted-foreground/30 text-primary hover:border-muted-foreground/20 hover:bg-white hover:text-primary/80 px-8 py-3 bg-transparent"
            >
              Schedule Community Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
