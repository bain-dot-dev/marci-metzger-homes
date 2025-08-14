"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className={`text-xl font-serif font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Marci Metzger Homes
            </div>
            <div
              className={`hidden md:block text-sm ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              THE RIDGE REALTY GROUP
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-foreground hover:text-accent transition-colors duration-200 relative group ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-foreground hover:text-accent transition-colors duration-200 relative group ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-foreground hover:text-accent transition-colors duration-200 relative group ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("listings")}
              className={`text-foreground hover:text-accent transition-colors duration-200 relative group ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Listings
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`text-foreground hover:text-accent transition-colors duration-200 relative group ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-foreground hover:text-accent transition-colors duration-200 relative group ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>

          {/* Phone CTA */}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-200 hover:scale-105">
            <Phone className="w-4 h-4 mr-2" />
            (206) 919-6886
          </Button>
        </div>
      </div>
    </nav>
  );
}
