"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f0f0f] text-zinc-400 text-sm border-t border-zinc-800 pt-16 pb-8">
      <ScrollReveal className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Col 1: Brand Info */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image 
              src="/images/logo.jpeg" 
              alt="XCDGOC Logo" 
              width={140} 
              height={45} 
              className="h-11 w-auto"
            />
          </Link>
          <p className="text-xs text-zinc-400 leading-relaxed mb-6">
            Canada's leading dispatch service provider offering complete dispatch solutions for Amazon & Non Amazon loads.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-amber-400 transition">About Us</Link></li>
            <li><Link href="#services" className="hover:text-amber-400 transition">Services</Link></li>
            <li><Link href="#load-boards" className="hover:text-amber-400 transition">Load Boards</Link></li>
            <li><Link href="#testimonials" className="hover:text-amber-400 transition">Testimonials</Link></li>
            <li><Link href="#gallery" className="hover:text-amber-400 transition">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-amber-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: Our Services */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Our Services</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="hover:text-amber-400 transition cursor-pointer">Amazon Relay Load Board</span></li>
            <li><span className="hover:text-amber-400 transition cursor-pointer">Load Link Dispatch</span></li>
            <li><span className="hover:text-amber-400 transition cursor-pointer">Bison Transport Dispatch</span></li>
            <li><span className="hover:text-amber-400 transition cursor-pointer">Walmart Dispatch</span></li>
            <li><span className="hover:text-amber-400 transition cursor-pointer">Non Amazon Dispatch</span></li>
            <li><span className="hover:text-amber-400 transition cursor-pointer">Complete Dispatch Solutions</span></li>
          </ul>
        </div>

        {/* Col 4: Contact Info & Badge */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Contact Info</h4>
          <ul className="space-y-3 text-xs mb-6">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>100 Consilium Pl, Suite 200 Scarborough, ON M1H 3E3, Canada</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>+91 (750) 121-6555</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>xcdgoc@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>24/7 Round the Clock</span>
            </li>
          </ul>

          <div className="border border-amber-500/40 rounded-xl p-3 bg-amber-500/5 flex items-center gap-3">
            <div className="text-amber-400 font-black text-2xl">08+</div>
            <div className="text-[10px] uppercase text-zinc-300 font-semibold tracking-wider">
              Years of Excellence & Trusted Service Provider
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-500">
        © 2026 XCDGOC PVT LTD - Extreme Canada Dispatch Group Of Companies. All Rights Reserved.
      </div>
    </footer>
  );
}
