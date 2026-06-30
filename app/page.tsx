import React from "react";
import Hero from "@/components/home/hero";
import TrustBar from "@/components/home/trust-bar";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar Section */}
      <TrustBar />

      {/* Placeholder Sections for Sibling Links (Sprint 2+) */}
      <div className="bg-background">
        {/* Services Section Placeholder */}
        <section id="services" className="py-20 border-b border-border/20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy-950 dark:text-white">Our Services</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Professional residential, commercial, interior, and exterior painting solutions designed to last. Full service details coming in Sprint 2.
            </p>
          </div>
        </section>

        {/* Gallery Section Placeholder */}
        <section id="gallery" className="py-20 border-b border-border/20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy-950 dark:text-white">Before & After Gallery</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              See the transformative power of our precise painting craftsmanship. High-resolution project portfolios coming in Sprint 2.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section Placeholder */}
        <section id="why-choose-us" className="py-20 border-b border-border/20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy-950 dark:text-white">Why Choose West Harbor Painting</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Cleanliness, preparation, premium paints, and fully insured operations. Learn about our process in Sprint 2.
            </p>
          </div>
        </section>

        {/* FAQ Section Placeholder */}
        <section id="faq" className="py-20 border-b border-border/20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy-950 dark:text-white">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find answers to common painting questions regarding scheduling, paint types, and preparation. Full FAQ coming in Sprint 2.
            </p>
          </div>
        </section>

        {/* Contact/Estimate Section Placeholder */}
        <section id="contact" className="py-20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy-950 dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have questions or ready to schedule your estimate? Contact form integration coming in Sprint 2.
            </p>
          </div>
        </section>

        {/* Estimate Form Anchor Section */}
        <section id="estimate" className="py-20 bg-muted/20 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy-950 dark:text-white">Request a Free Estimate</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive lead-generation estimate wizard is scheduled for Sprint 3. Call us at (310) 870-1370 for immediate scheduling.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
