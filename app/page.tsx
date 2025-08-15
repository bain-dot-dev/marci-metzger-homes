import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PropertyGallery from "@/components/property-gallery";
import MountainFallsShowcase from "@/components/mountain-falls-showcase";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import PageLoader from "@/components/page-loader";
import PhotoGallery from "@/components/photo-gallery";

export default function Home() {
  return (
    <>
      <PageLoader />

      <CustomCursor />

      <main className="min-h-screen animate-page-load overflow-hidden">
        <Navigation />

        {/* Enhanced Hero Section with Parallax */}
        <HeroSection />

        {/* About Section with Animated Statistics */}
        <AboutSection />

        {/* Photo Gallery below About Section */}
        <PhotoGallery />

        {/* Services Section with Interactive Cards */}
        <ServicesSection />

        {/* Property Gallery with Hover Effects */}
        <PropertyGallery />

        {/* Mountain Falls Community Showcase */}
        <MountainFallsShowcase />

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* Contact Section with Form */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
