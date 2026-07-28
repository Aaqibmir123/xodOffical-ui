"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { aboutAPI } from "@/lib/api";

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
    <section id="about" className="py-20 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Mockup Frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
          <img
            src={aboutData.section_image_url}
            alt={aboutData.section_image_alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-amber-600 font-semibold tracking-widest text-sm uppercase mb-2">
            {aboutData.about_tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-2">
            {aboutData.company_title}
          </h2>
          <p className="text-amber-600 font-medium text-lg italic mb-4">
            {aboutData.company_subtitle}
          </p>
          <h3 className="font-semibold text-zinc-800 mb-4">
            {aboutData.main_heading}
          </h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
            {aboutData.description}
          </p>

          <div className="space-y-3 mb-8">
            {aboutData.features_list.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3">
            LEARN MORE ABOUT US
          </Button>
        </div>
      </div>
    </section>
  );
}