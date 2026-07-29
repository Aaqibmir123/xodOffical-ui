"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { partnersAPI, sectionContentAPI, type Partner, type SectionContent } from "@/lib/api";
import ScrollReveal from "@/components/ScrollReveal";

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [content, setContent] = useState<SectionContent>({ label: "Our Partners", heading: "Companies We Work With", description: "Trusted partnerships built around reliable service and long-term growth." });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const [partnersResult, contentResult] = await Promise.all([partnersAPI.getAll(), sectionContentAPI.get("partners")]);
        if (partnersResult.success) setPartners(partnersResult.data);
        if (contentResult.success) setContent(contentResult.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    void fetchPartners();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    scrollContainerRef.current?.scrollBy({ left: direction === "right" ? 300 : -300, behavior: "smooth" });
  };

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

        <div className="relative mx-auto mt-8 max-w-6xl px-4 md:px-14">
          {partners.length > 1 && <button onClick={() => handleScroll("left")} aria-label="Previous partners" className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-amber-500 hover:bg-amber-500 hover:text-zinc-950"><ChevronLeft className="w-5 h-5" /></button>}
          <div ref={scrollContainerRef} className={`flex gap-5 overflow-x-auto scroll-smooth no-scrollbar py-3 px-1 snap-x snap-mandatory ${partners.length === 1 ? "justify-center" : ""}`} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {partners.map((partner) => (
              <article key={partner._id} className="group w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-zinc-900/10">
                <div className="relative h-40 overflow-hidden border-b border-zinc-100 bg-zinc-100">
                  <img src={partner.image} alt={`${partner.name} logo`} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/25 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="h-1 w-10 rounded-full bg-amber-500" />
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Partner Name</p>
                  <h3 className="mt-1 text-lg font-extrabold text-zinc-900">{partner.name}</h3>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Company Description</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
          {partners.length > 1 && <button onClick={() => handleScroll("right")} aria-label="Next partners" className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-amber-500 hover:bg-amber-500 hover:text-zinc-950"><ChevronRight className="w-5 h-5" /></button>}
        </div>
      </ScrollReveal>
    </section>
  );
}
