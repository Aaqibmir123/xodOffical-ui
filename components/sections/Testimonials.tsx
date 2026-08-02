"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { sectionContentAPI, testimonialsAPI, type SectionContent, type Testimonial } from "@/lib/api";
import ScrollReveal from "@/components/ScrollReveal";

const initials = (name: string) =>
  name.split(" ").filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();

const defaultContent: SectionContent = {
  label: "Testimonials",
  heading: "What Our Clients Say",
  description: "Feedback from companies that trust our dispatch team.",
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [content, setContent] = useState<SectionContent>(defaultContent);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const [testimonialsResult, contentResult] = await Promise.all([
          testimonialsAPI.getAll(),
          sectionContentAPI.get("testimonials"),
        ]);
        if (testimonialsResult.success) setTestimonials(testimonialsResult.data);
        if (contentResult.success) setContent(contentResult.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    void fetchTestimonials();
  }, []);

  // Handlers for next/prev
  const handleNext = useCallback(() => {
    if (!testimonials.length) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    if (!testimonials.length) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Autoplay Timer (Every 10 Seconds / 10000 ms)
  useEffect(() => {
    if (!testimonials.length || isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [testimonials.length, isHovered, handleNext]);

  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="border-t border-zinc-200 bg-white py-16 text-zinc-900 md:py-20">
      <ScrollReveal className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">{content.label}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 md:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{content.description}</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative mx-auto mt-10 max-w-2xl px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card View Window */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className="w-full flex-shrink-0 px-2">
                  <Card className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-left shadow-sm transition-all duration-300 hover:border-amber-300 hover:bg-white hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                            Rating
                          </p>
                          <div
                            className="flex gap-1 text-amber-400"
                            aria-label={`${testimonial.rating} out of 5 stars`}
                          >
                            {Array.from({ length: 5 }, (_, ratingIndex) => (
                              <Star
                                key={ratingIndex}
                                className={`h-4 w-4 ${
                                  ratingIndex < testimonial.rating
                                    ? "fill-amber-400"
                                    : "text-zinc-200"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-amber-200" />
                      </div>

                      <div className="my-4">
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                          Client Review
                        </p>
                        <p className="text-sm italic leading-relaxed text-zinc-700">
                          &ldquo;{testimonial.description}&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-800">
                          {initials(testimonial.clientName)}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                            Client Name
                          </p>
                          <h4 className="mt-0.5 text-sm font-extrabold text-zinc-900">
                            {testimonial.clientName}
                          </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next Buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-md transition-transform hover:scale-110 hover:bg-zinc-50 md:-left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-md transition-transform hover:scale-110 hover:bg-zinc-50 md:-right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Navigation Indicators (Dots) */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-8 bg-amber-600" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}