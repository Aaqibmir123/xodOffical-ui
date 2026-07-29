"use client";

import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { aboutAPI } from "@/lib/api";
import ScrollReveal from "@/components/ScrollReveal";

interface AboutData {
  about_tagline: string;
  company_title: string;
  company_subtitle: string;
  main_heading: string;
  description: string;
  features_list: string[];
  section_image_url: string;
  section_image_alt: string;
}

const initialAboutData: AboutData = {
  about_tagline: "About Us",
  company_title: "XCDGOC PVT LTD",
  company_subtitle: "Extreme Canada Dispatch Group Of Companies",
  main_heading: "Complete Dispatch Solutions – Amazon & Non Amazon",
  description:
    "We are Canada's leading and most trusted dispatch service provider, proudly serving across Canada and USA for the last 08 years. Our expert team provides complete dispatch solutions for all types of loads, ensuring maximum miles, higher rates, and long-term success for our clients.",
  features_list: [
    "Round the clock dispatch support",
    "Professional & experienced team",
    "Transparent communication",
    "Best rates & dedicated service",
  ],
  section_image_url: "/images/canada-truck.jpg",
  section_image_alt: "Canadian Flag and Semi Truck",
};

export default function AboutUs() {
  const [aboutData, setAboutData] = useState<AboutData>(initialAboutData);
  const [loading, setLoading] = useState(true);

  // Fetch about data from API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const result = await aboutAPI.get();
        if (result.success) {
          setAboutData(result.data);
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-20 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-amber-50/40 to-white text-zinc-900">
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -right-28 bottom-12 h-72 w-72 rounded-full bg-zinc-200/50 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        <ScrollReveal direction="left" className="relative">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border-2 border-amber-400/40" />
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-2xl shadow-zinc-900/15">
            <img src={aboutData.section_image_url} alt={aboutData.section_image_alt} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-zinc-950/75 px-4 py-3 text-white backdrop-blur-md"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">Trusted Dispatch</p><p className="mt-1 text-sm font-semibold">Canada & USA Coverage</p></div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={140}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700"><ShieldCheck className="w-4 h-4" /> {aboutData.about_tagline}</div>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-zinc-950">{aboutData.company_title}</h2>
          <p className="mt-3 text-amber-700 font-semibold text-base md:text-lg">{aboutData.company_subtitle}</p>
          <div className="my-6 h-1 w-16 rounded-full bg-amber-500" />
          <h3 className="text-xl font-bold text-zinc-800 mb-3">{aboutData.main_heading}</h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-7">{aboutData.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {aboutData.features_list.map((feature, index) => (
              <ScrollReveal key={index} direction="right" delay={220 + index * 90} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/90 p-3 text-sm font-semibold text-zinc-800 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>{feature}</span>
              </ScrollReveal>
            ))}
          </div>

          <Button className="group bg-zinc-950 hover:bg-amber-500 text-white hover:text-zinc-950 font-bold px-6 py-3 shadow-lg transition-all">
            LEARN MORE ABOUT US <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
