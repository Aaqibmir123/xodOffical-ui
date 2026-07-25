import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "XCDGOC PVT LTD has been a game changer for our business. Their 24/7 support and load management is unmatched.",
    name: "Jaspreet Singh",
    role: "Owner Operator",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote: "Professional team, great communication and consistent loads. Highly recommended dispatch service.",
    name: "Gurpreet Kaur",
    role: "Fleet Owner",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote: "Been working with them for years. They truly care about your business growth.",
    name: "Harmanpreet Gill",
    role: "Owner Operator",
    avatar: "/images/avatar-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <p className="text-amber-600 font-semibold tracking-widest text-sm uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-12">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <Card key={index} className="bg-white border border-zinc-200 shadow-sm p-6 text-left flex flex-col justify-between">
              <CardContent className="p-0">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-700 text-sm italic mb-6 leading-relaxed">"{item.quote}"</p>
              </CardContent>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-zinc-500">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}