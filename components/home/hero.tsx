"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32 flex items-center min-h-[85vh]">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-orange-500/5 blur-[120px] dark:bg-brand-orange-500/10" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-brand-navy-500/5 blur-[100px] dark:bg-brand-navy-500/10" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col space-y-8 lg:col-span-7 text-center sm:text-left">
            {/* Promo Badge */}
            <div className="inline-flex items-center self-center sm:self-start gap-2 rounded-full border border-brand-orange-200/50 bg-brand-orange-50/50 px-3.5 py-1.5 text-xs font-semibold text-brand-orange-600 dark:border-brand-orange-500/20 dark:bg-brand-orange-950/30 dark:text-brand-orange-400 backdrop-blur-sm animate-fade-in">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Licensed, Bonded & Fully Insured</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy-950 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1] font-sans">
              Professional Painting,{" "}
              <span className="block mt-2 bg-gradient-to-r from-brand-navy-900 to-brand-navy-700 dark:from-white dark:to-brand-navy-200 bg-clip-text text-transparent sm:inline">
                Crafted for Your Space
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Transforming residential and commercial properties in Los Angeles and Orange County. 
              Dedicated to master-level craftsmanship, pristine clean-up, and complete price transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button
                asChild
                className="bg-accent hover:bg-brand-orange-600 text-white font-semibold py-6 px-8 rounded-full shadow-lg shadow-brand-orange-500/10 hover:shadow-brand-orange-500/20 active:scale-95 transition-all duration-200 text-base"
              >
                <Link href="#estimate" className="flex items-center gap-2">
                  Request a Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border hover:bg-muted font-semibold py-6 px-8 rounded-full transition-all duration-200 text-base active:scale-95"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Micro-text */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-4 pt-4 border-t border-border/40">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange-500 text-brand-orange-500" />
                ))}
                <span className="ml-1 text-sm font-semibold text-foreground">4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-border/80 hidden sm:block" />
              <p className="text-sm text-muted-foreground font-medium">
                Over <span className="font-semibold text-foreground">1,200+</span> spaces transformed locally.
              </p>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="relative lg:col-span-5 w-full flex justify-center">
            {/* Ambient Background Glow for Image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange-500 to-brand-navy-800 opacity-20 blur-xl dark:opacity-30" />
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-[440px] overflow-hidden rounded-2xl border border-border/40 bg-card p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01] hover:rotate-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="/premium_painted_home.png"
                  alt="Modern painted home interior with elegant navy accent wall"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 40vw"
                />
              </div>
              
              {/* Floating Stat Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/70 dark:bg-black/75 p-4 shadow-xl backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange-500">Latest Project</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">Modern Accent Living Room</p>
                  <p className="text-[11px] text-muted-foreground">Pasadena, CA</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Finish Type</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">Ultra-Matte & Satin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
