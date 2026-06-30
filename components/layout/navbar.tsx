"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white dark:bg-brand-navy-950 border-b border-border/40 shadow-sm md:transition-all md:duration-300 ${
        isScrolled
          ? "md:bg-background/85 md:backdrop-blur-md md:shadow-sm md:border-b md:border-border/40"
          : "md:bg-transparent md:border-transparent md:shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-primary dark:text-foreground">
              West Harbor<span className="text-accent font-extrabold font-sans"> Painting</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+13108701370"
              className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-foreground hover:text-accent transition-colors duration-200"
            >
              <Phone className="h-4 w-4 text-accent animate-pulse" />
              <span>(310) 870-1370</span>
            </a>
            <Button
              asChild
              className="bg-accent hover:bg-brand-orange-600 text-white font-semibold shadow-md shadow-brand-orange-500/10 hover:shadow-brand-orange-500/20 active:scale-95 transition-all duration-200 rounded-full px-6"
            >
              <Link href="#estimate">Get a Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 focus:outline-none md:hidden transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Full-Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white dark:bg-brand-navy-950 flex flex-col md:hidden animate-in fade-in duration-200">
          {/* Navigation Links and CTAs */}
          <div className="flex flex-col flex-grow justify-between p-8 overflow-y-auto bg-white dark:bg-brand-navy-950">
            <nav className="flex flex-col gap-6 text-center sm:text-left mt-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-brand-navy-950 dark:text-white hover:text-accent transition-colors duration-200 py-3 border-b border-border/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-6 mt-auto">
              <a
                href="tel:+13108701370"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 text-lg font-semibold text-primary dark:text-foreground py-4 rounded-xl border border-border hover:bg-muted transition-colors duration-200 bg-background/50"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span>(310) 870-1370</span>
              </a>
              <Button
                asChild
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent hover:bg-brand-orange-600 text-white font-semibold py-7 text-lg rounded-full shadow-lg shadow-brand-orange-500/10 active:scale-95 transition-all duration-200"
              >
                <Link href="#estimate">Get a Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
