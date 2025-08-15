"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Mail,
  Star,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Marci Metzger Homes
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Your trusted real estate partners in Pahrump, Nevada. With nearly
              30 years of experience, we&apos;re committed to helping you
              achieve your real estate dreams.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/MarciHomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/marciandlauren_nvrealtors/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/marci-metzger-30642496/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors duration-200"
                aria-label="Review us on Yelp"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#listings"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">
              Get the latest market insights and property updates.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Marci Metzger Homes - The Ridge Realty Group. All rights
            reserved.
          </p>
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="mt-4 md:mt-0 border-white/20 text-white hover:bg-accent hover:border-accent bg-transparent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
