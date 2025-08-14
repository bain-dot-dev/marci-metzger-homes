"use client"

import { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, TrendingUp, Building, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const services = [
    {
      icon: Home,
      title: "Buy with Confidence",
      description: "Navigate the buying process with expert guidance and local market knowledge.",
      features: ["Market Analysis", "Negotiation Expertise", "Contractor Network", "Closing Support"],
      delay: "delay-200",
    },
    {
      icon: TrendingUp,
      title: "Sell for Top Dollar",
      description: "Maximize your property value with strategic marketing and proven sales techniques.",
      features: ["Professional Photography", "Digital Marketing", "Staging Consultation", "Price Optimization"],
      delay: "delay-400",
    },
    {
      icon: Building,
      title: "Investment Properties",
      description: "Build wealth through real estate with personalized investment strategies.",
      features: ["Portfolio Analysis", "ROI Calculations", "Market Trends", "Property Management"],
      delay: "delay-600",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Comprehensive Real Estate Services
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            From first-time buyers to seasoned investors, we provide tailored solutions for every real estate need.
          </p>
          <div
            className={`w-24 h-1 bg-accent mx-auto mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border-2 hover:border-accent/50 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } ${service.delay}`}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon with Animation */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4 text-center group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-center mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your real estate journey? Let's discuss your goals.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
