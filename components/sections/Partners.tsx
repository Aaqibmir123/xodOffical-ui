"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { partnersAPI, sectionContentAPI, type Partner, type SectionContent } from "@/lib/api";
import ScrollReveal from "@/components/ScrollReveal";

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [content, setContent] = useState<SectionContent>({
    label: "Our Partners",
    heading: "Companies We Work With",
    description: "Trusted partnerships built around reliable service and long-term growth.",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Fetch partners data
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const [partnersResult, contentResult] = await Promise.all([
          partnersAPI.getAll(),
          sectionContentAPI.get("partners"),
        ]);
        if (partnersResult.success) setPartners(partnersResult.data);
        if (contentResult.success) setContent(contentResult.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    void fetchPartners();
  }, []);

  // Responsive items count check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Append clone items to create a seamless infinite scroll effect
  const extendedPartners = [
    ...partners,
    ...partners.slice(0, itemsPerView),
  ];

  const handleNext = useCallback(() => {
    if (!partners.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [partners.length]);

  const handlePrev = useCallback(() => {
    if (!partners.length) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  }, [partners.length]);

  // Jump smoothly back to position 0 when clone items are hit
  const handleTransitionEnd = () => {
    if (currentIndex >= partners.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Optional auto-slide interval
  useEffect(() => {
    if (!partners.length || isHovered || partners.length <= itemsPerView) return;

    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [partners.length, isHovered, handleNext, itemsPerView]);

  if (!partners.length) return null;

  return (
    <section id="partners" className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 py-16 md:py-20">
      <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-amber-100/70 blur-3xl" />
      <ScrollReveal className="relative mx-auto max-w-7xl px-4 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{content.label}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 md:text-4xl">{content.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{content.description}</p>
        </div>

        <div 
          className="relative mx-auto mt-8 max-w-6xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Button */}
          {partners.length > itemsPerView && (
            <button
              onClick={handlePrev}
              aria-label="Previous partners"
              className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-amber-500 hover:bg-amber-500 hover:text-zinc-950 md:-left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Carousel Viewport Window */}
          <div className="overflow-hidden py-3">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {extendedPartners.map((partner, idx) => (
                <div
                  key={`${partner._id}-${idx}`}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <article className="group h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-zinc-900/10">
                    <div className="relative h-40 overflow-hidden border-b border-zinc-100 bg-zinc-100">
                      <img
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/25 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="h-1 w-10 rounded-full bg-amber-500" />
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Partner Name</p>
                      <h3 className="mt-1 text-lg font-extrabold text-zinc-900">{partner.name}</h3>
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                        Company Description
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{partner.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {partners.length > itemsPerView && (
            <button
              onClick={handleNext}
              aria-label="Next partners"
              className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-amber-500 hover:bg-amber-500 hover:text-zinc-950 md:-right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}