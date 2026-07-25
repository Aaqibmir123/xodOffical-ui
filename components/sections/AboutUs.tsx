import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Mockup Frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
          <img 
            src="/images/canada-truck.jpg" 
            alt="Canadian Flag and Semi Truck" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-amber-600 font-semibold tracking-widest text-sm uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-2">
            XCDGOC PVT LTD
          </h2>
          <p className="text-amber-600 font-medium text-lg italic mb-4">
            Extreme Canada Dispatch Group Of Companies
          </p>
          <h3 className="font-semibold text-zinc-800 mb-4">
            Complete Dispatch Solutions – Amazon & Non Amazon
          </h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
            We are Canada’s leading and most trusted dispatch service provider, proudly serving across Canada and USA for the last 08 years. Our expert team provides complete dispatch solutions for all types of loads, ensuring maximum miles, higher rates, and long-term success for our clients.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>Round the clock dispatch support</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>Professional & experienced team</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>Transparent communication</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>Best rates & dedicated service</span>
            </div>
          </div>

          <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3">
            LEARN MORE ABOUT US
          </Button>
        </div>
      </div>
    </section>
  );
}