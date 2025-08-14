"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Loader2,
  MessageCircle,
  Star,
} from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-secondary/20">
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
            Get In Touch
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Ready to start your real estate journey? Contact us today for a
            personalized consultation and discover how we can help you achieve
            your goals.
          </p>
          <div
            className={`w-24 h-1 bg-accent mx-auto mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className={`p-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your real estate needs..."
                  rows={5}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 transition-all duration-200 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Office Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            {/* WhatsApp Contact */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/14259412560"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium text-base">
                  Message us on WhatsApp
                </span>
              </a>
            </div>

            {/* Contact Info */}
            <Card className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Office Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Address
                    </h4>
                    <p className="text-muted-foreground">
                      3190 HW-160, Suite F
                      <br />
                      Pahrump, NV 89048
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone
                    </h4>
                    <p className="text-muted-foreground">(206) 919-6886</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-muted-foreground">
                      marci@theridgerealtygroup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Office Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Daily 8:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* work on the interactive map */}

            {/* Map Placeholder */}
            <Card className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Find Us
              </h3>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">3190 HW-160, Suite F, Pahrump, NV</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/MarciHomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/marciandlauren_nvrealtors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marci-metzger-30642496/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                  aria-label="Review us on Yelp"
                >
                  <Star className="w-5 h-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
