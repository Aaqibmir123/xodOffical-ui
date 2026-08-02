"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Clock, Globe, Award, ArrowRight, PhoneCall } from "lucide-react";

const heroImages = [
  "/images/truck-hero.jpg",
  "/images/canada-truck.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-4.jpg",
];

const metrics = [
  { icon: Award, value: "08+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Dispatch Support" },
  { icon: Globe, value: "CA & US", label: "Nationwide Coverage" },
  { icon: ShieldCheck, value: "100%", label: "Satisfaction Guaranteed" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-slate-950 text-white min-h-[90vh] flex items-center overflow-hidden py-16 md:py-20">
      {/* Background Carousel Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-30 scale-105" : "opacity-0 scale-100"
            } transition-transform duration-[7000ms]`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Gradient overlays for gradient tone & dark contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-semibold mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Reliable Freight Partner
          </div>

          {/* MAIN HEADING (H1) */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4 text-white">
            Canada's Leading & Largest <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Dispatch Service Provider
            </span>
          </h1>

          {/* SUBHEADING (H2) - Chhota Size */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide text-slate-200 mb-6 border-l-4 border-amber-500 pl-3">
            Complete Dispatch Solutions
          </h2>

          {/* Subtitle Details with Flags */}
          <p className="text-base md:text-lg font-medium text-slate-300 mb-4 flex items-center gap-3">
            <span>Amazon & Non-Amazon Fleets</span>
            <span className="flex gap-1.5 text-base bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
              🇨🇦 🇺🇸
            </span>
          </p>

          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
            Proudly serving across Canada & <span className="text-white font-semibold">USA</span> with premium dispatch solutions for owner operators & fleet companies since last <span className="text-amber-400 font-bold">08 years</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:"
              className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Contact Us
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2 mb-10" aria-label="Hero carousel slides">
            {heroImages.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "w-8 bg-amber-500" : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Modern Glassmorphic Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl">
            {metrics.map((metric, i) => {
              const IconComponent = metric.icon;
              return (
                <div key={i} className="flex items-center gap-3.5 p-1">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg text-white leading-none mb-1">{metric.value}</h4>
                    <p className="text-xs text-slate-400 font-medium leading-tight">{metric.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}