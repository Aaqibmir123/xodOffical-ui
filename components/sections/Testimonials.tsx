"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { sectionContentAPI, testimonialsAPI, type SectionContent, type Testimonial } from "@/lib/api";
import ScrollReveal from "@/components/ScrollReveal";

const initials = (name: string) => name.split(" ").filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
const defaultContent: SectionContent = { label: "Testimonials", heading: "What Our Clients Say", description: "Feedback from companies that trust our dispatch team." };

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [content, setContent] = useState<SectionContent>(defaultContent);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const [testimonialsResult, contentResult] = await Promise.all([testimonialsAPI.getAll(), sectionContentAPI.get("testimonials")]);
        if (testimonialsResult.success) setTestimonials(testimonialsResult.data);
        if (contentResult.success) setContent(contentResult.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    void fetchTestimonials();
  }, []);

  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="border-t border-zinc-200 bg-white py-16 text-zinc-900 md:py-20">
      <ScrollReveal className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{content.label}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 md:text-4xl">{content.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{content.description}</p>
        </div>

        <div className={`mx-auto mt-8 grid gap-5 ${testimonials.length === 1 ? "max-w-md grid-cols-1" : "max-w-6xl grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}`}>
          {testimonials.map((testimonial) => (
            <div key={testimonial._id}>
              <Card className="hover-lift rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-left shadow-sm hover:border-amber-300 hover:bg-white hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Rating</p><div className="flex gap-1 text-amber-400" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, ratingIndex) => <Star key={ratingIndex} className={`w-4 h-4 ${ratingIndex < testimonial.rating ? "fill-amber-400" : "text-zinc-200"}`} />)}</div></div><Quote className="w-6 h-6 text-amber-200" /></div>
                  <div className="my-4"><p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Client Review</p><p className="text-sm italic leading-relaxed text-zinc-700">&ldquo;{testimonial.description}&rdquo;</p></div>
                  <div className="flex items-center gap-3 border-t border-zinc-100 pt-4"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-800">{initials(testimonial.clientName)}</div><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Client Name</p><h4 className="mt-0.5 text-sm font-extrabold text-zinc-900">{testimonial.clientName}</h4></div></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
