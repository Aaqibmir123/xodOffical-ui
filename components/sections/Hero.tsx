import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Globe, Award, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-zinc-950 text-white min-h-[85vh] flex items-center overflow-hidden py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/images/truck-hero.jpg" 
          alt="Semi truck on highway" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Canada's Leading & Largest Dispatch Service Provider
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-none mb-4">
            Complete Dispatch <br />
            <span className="text-amber-500">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 flex items-center gap-3">
            <span>Amazon & Non Amazon</span>
            <span className="flex gap-1 text-lg">🇨🇦 🇺🇸</span>
          </p>
          <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-xl">
            Proudly serving across Canada & <span className="text-white font-semibold">USA</span> with premium dispatch solutions for owner operators & fleet companies since last 08 years.
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 border-y border-zinc-800 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">08+</h4>
                <p className="text-xs text-zinc-400">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">24/7</h4>
                <p className="text-xs text-zinc-400">Round the Clock</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Canada & USA</h4>
                <p className="text-xs text-zinc-400">Nationwide Services</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">100%</h4>
                <p className="text-xs text-zinc-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-6 text-base">
              GET A FREE QUOTE <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-6 text-base">
              OUR SERVICES
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}