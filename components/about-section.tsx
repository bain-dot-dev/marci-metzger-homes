"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, Award, DollarSign, Clock } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    years: 0,
    sales: 0,
    clients: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      experience: 28,
      years: 4,
      sales: 28.5,
      clients: 90,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        experience: Math.floor(targets.experience * progress),
        years: Math.floor(targets.years * progress),
        sales: Math.floor(targets.sales * progress * 10) / 10,
        clients: Math.floor(targets.clients * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Your Trusted Real Estate Partners Since 1995
          </h2>
          <div
            className={`w-24 h-1 bg-accent mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Professional Photo */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src="/headshot/marci-metzger.webp"
                alt="Marci Metzger - Professional Headshot"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">28+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-6">
              Meet Marci Metzger
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With nearly three decades of real estate expertise, Marci
                Metzger brings unparalleled knowledge and dedication to every
                transaction. Originally a successful broker in Seattle, Marci
                discovered the beauty and opportunity of Pahrump, Nevada, and
                has since become the area's most trusted residential specialist.
              </p>
              <p>
                Marci combines extensive experience with cutting-edge marketing
                strategies and fresh perspectives on the ever-evolving real
                estate market. She has built a reputation for excellence,
                integrity, and results that speak for themselves through
                personalized service and professional expertise.
              </p>
              <p>
                Whether you're buying your first home, selling a cherished
                property, or building an investment portfolio, Marci provides
                the personalized attention and professional expertise you
                deserve with nearly three decades of proven success.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-accent">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Licensed Since 1995</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Pahrump's #1 REALTOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            className={`p-6 text-center hover:shadow-lg transition-all duration-500 delay-700 hover:-translate-y-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center mb-4">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {counters.experience}+
            </div>
            <div className="text-muted-foreground font-medium">
              Years Experience
            </div>
          </Card>

          <Card
            className={`p-6 text-center hover:shadow-lg transition-all duration-500 delay-800 hover:-translate-y-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {counters.years}
            </div>
            <div className="text-muted-foreground font-medium">
              Years #1 in Pahrump
            </div>
          </Card>

          <Card
            className={`p-6 text-center hover:shadow-lg transition-all duration-500 delay-900 hover:-translate-y-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center mb-4">
              <DollarSign className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              ${counters.sales}M
            </div>
            <div className="text-muted-foreground font-medium">
              2021 Sales Volume
            </div>
          </Card>

          <Card
            className={`p-6 text-center hover:shadow-lg transition-all duration-500 delay-1000 hover:-translate-y-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              {counters.clients}+
            </div>
            <div className="text-muted-foreground font-medium">
              Happy Clients
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
