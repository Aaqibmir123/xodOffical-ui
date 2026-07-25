"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const basePartners = [
  "Royal Brothers",
  "Shivam",
  "Agam",
  "True Soul",
  "Altona",
  "Hft",
  "Ziphal",
];

// Array ko triple kar rahe hain seamless circular loop ke liye
const partners = [...basePartners, ...basePartners, ...basePartners];

export default function Partners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initial Middle Position Setup
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      // Pehle hi middle set par position kar dete hain
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  // Seamless Infinite Circular Scroll Logic
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 244; // Card width + Gap
    const singleSetWidth = container.scrollWidth / 3;

    if (direction === "right") {
      // Agar end Set tak pohanchne lage hain, toh silently middle set par reset kar do
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = container.scrollLeft - singleSetWidth;
        container.style.scrollBehavior = "smooth";
      }
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else {
      // Agar Start set par pohanch gaye hain, toh silently middle set par reset kar do
      if (container.scrollLeft <= singleSetWidth / 2) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = container.scrollLeft + singleSetWidth;
        container.style.scrollBehavior = "smooth";
      }
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  // Optional: Auto-Play Effect (har 3 seconds mein circle ghoomega)
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partners" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        {/* Section Headers */}
        <p className="text-amber-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-2">
          Our Partners
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-12 text-zinc-900 tracking-tight">
          Trusted By Leading Companies
        </h2>

        {/* Carousel Container */}
        <div className="relative group max-w-6xl mx-auto px-4 md:px-10">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-zinc-300 shadow-md flex items-center justify-center text-zinc-700 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[200px] md:w-[220px] h-28 rounded-xl border border-zinc-200/80 bg-zinc-50/70 hover:bg-white hover:border-amber-500/60 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-6 group/card cursor-pointer"
              >
                <span className="font-extrabold text-base md:text-lg text-zinc-500 group-hover/card:text-zinc-900 tracking-wide uppercase text-center transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-zinc-300 shadow-md flex items-center justify-center text-zinc-700 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}