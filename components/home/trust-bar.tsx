"use client";

import React from "react";
import { ShieldCheck, Star, Award, Home } from "lucide-react";

const TRUST_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full liability coverage and worker's comp for complete peace of mind.",
  },
  {
    icon: Star,
    title: "5-Star Rating",
    description: "Consistently rated 5-stars on Google & Yelp by hundreds of local clients.",
  },
  {
    icon: Home,
    title: "Family Owned & Local",
    description: "Proudly serving Los Angeles & Orange County communities since 2012.",
  },
  {
    icon: Award,
    title: "2-Year Warranty",
    description: "We back our paint preparation and premium finishes with a full guarantee.",
  },
];

export default function TrustBar() {
  return (
    <section className="relative bg-muted/30 border-y border-border/40 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-start p-6 rounded-2xl bg-background/50 border border-border/30 hover:border-brand-orange-500/20 hover:bg-background transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy-500/5 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy-50/80 dark:bg-brand-navy-950/50 text-primary group-hover:bg-brand-orange-500 group-hover:text-white transition-all duration-300 mb-5">
                  <Icon className="h-6 w-6 text-brand-navy-600 dark:text-brand-navy-300 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-navy-950 dark:text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle bottom border glow */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-brand-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
