import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-zinc-950 text-white py-14 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">Ready to grow your business?</p>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase">Let's Get Rolling!</h2>
          <p className="text-zinc-400 text-sm mt-1">Partner with Canada's most reliable dispatch service provider.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="tel:+15471234567" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-xs text-zinc-400 block uppercase">24/7 Dispatch Support</span>
              <span className="text-lg md:text-xl font-black text-white">+1 (547) 123-4567</span>
            </div>
          </a>

          <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-6">
            GET A FREE QUOTE <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}