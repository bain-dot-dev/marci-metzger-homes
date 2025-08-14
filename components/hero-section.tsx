"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Trigger animations on mount
    setIsVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('/hero/hero.webp')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70"></div>
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Animated Headline with Text Reveal */}
        <div className="overflow-hidden mb-6">
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Pahrump's #1
            <br />
            <span className="text-accent">Residential REALTOR</span>
          </h1>
        </div>

        {/* Subheading with Staggered Animation */}
        <div className="overflow-hidden mb-12">
          <p
            className={`text-lg sm:text-xl md:text-2xl mb-2 font-light leading-relaxed transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            Nearly 30 Years of Excellence
          </p>
          <p
            className={`text-base sm:text-lg md:text-xl text-accent font-semibold transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            $28.5M in Sales • 90+ Happy Clients
          </p>
        </div>

        {/* Floating CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-accent/25 group relative overflow-hidden"
            onClick={() => scrollToSection("listings")}
          >
            <span className="relative z-10">View Listings</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 group relative overflow-hidden"
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10">Get Home Value</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Licensed Since 1995</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>4 Years #1 in Pahrump</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Available 7 Days/Week</span>
          </div>
        </div>

        <div
          className={`mt-12 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.4s" }}
        >
          <p className="text-sm text-white/60 mb-6 font-light tracking-wider">
            TRUSTED PARTNERSHIPS
          </p>
          <div className="flex flex-wrap justify-evenly items-center gap-8 md:gap-24">
            {/* Equal Housing Opportunity */}
            <div className="animate-float-slow opacity-80 hover:opacity-100 transition-opacity duration-300">
              <img
                src="/trusted-partners/equal-housing-opportunity.png"
                alt="Equal Housing Opportunity"
                className="h-12 md:h-24 w-auto filter brightness-0 invert"
              />
            </div>

            {/* Pahrump Valley Chamber of Commerce */}
            <div
              className="animate-float-slow opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <img
                src="/trusted-partners/pahrump-valley-chamber-of-commerce.png"
                alt="Pahrump Valley Chamber of Commerce"
                className="h-16 md:h-32 w-auto"
              />
            </div>

            {/* The Ridge Realty Group */}
            <div
              className="animate-float-slow opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: "1s" }}
            >
              <img
                src="/trusted-partners/the-ridge-realty-group.png"
                alt="The Ridge Realty Group"
                className="h-12 md:h-24 w-auto"
              />
            </div>

            {/* Realtor Logo */}
            <div
              className="animate-float-slow opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: "1.5s" }}
            >
              <img
                src="/trusted-partners/realtor.png"
                alt="Realtor"
                className="h-14 md:h-28 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: "1.4s" }}
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-sm font-light tracking-wider">
            SCROLL TO EXPLORE
          </span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative overflow-hidden group-hover:border-accent transition-colors duration-300">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce-slow group-hover:bg-accent transition-colors duration-300"></div>
          </div>
          <ChevronDown className="w-4 h-4 animate-bounce-slow group-hover:text-accent transition-colors duration-300" />
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse hidden lg:block"></div>
      <div
        className="absolute top-1/3 right-16 w-3 h-3 bg-white/20 rounded-full animate-pulse hidden lg:block"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-20 w-1 h-1 bg-accent/40 rounded-full animate-pulse hidden lg:block"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
