"use client";

import { Phone, Mail, Clock, User, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#111111] text-zinc-300 text-xs md:text-sm py-2 px-4 md:px-12 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
        {/* Desktop View */}
        <div className="hidden lg:flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>24/7 DISPATCH SUPPORT</span>
          </div>
          <a href="mailto:info@xcdgoc.com" className="flex items-center gap-2 hover:text-amber-400 transition">
            <Mail className="w-4 h-4 text-amber-500" />
            <span>xcdgoc@gmail.com</span>
          </a>
          <a href="tel:+15471234567" className="flex items-center gap-2 hover:text-amber-400 transition">
            <Phone className="w-4 h-4 text-amber-500" />
            <span>+1 (547) 123-4567</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="#client-login" className="flex items-center gap-1 hover:text-amber-400 transition">
            <User className="w-4 h-4 text-amber-500" />
            <span>Client Login</span>
          </Link>
          <Link 
            href="#free-quote" 
            className="bg-amber-500 text-black font-semibold px-4 py-1.5 rounded text-xs flex items-center gap-1 hover:bg-amber-400 transition"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-zinc-800 mt-2">
          <div className="flex flex-col px-4 md:px-12 py-3 gap-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>24/7 DISPATCH SUPPORT</span>
            </div>
            <a href="mailto:info@xcdgoc.com" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>info@xcdgoc.com</span>
            </a>
            <a href="tel:+15471234567" className="flex items-center gap-2 hover:text-amber-400 transition">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+1 (547) 123-4567</span>
            </a>
            <Link href="#client-login" className="flex items-center gap-1 hover:text-amber-400 transition">
              <User className="w-4 h-4 text-amber-500" />
              <span>Client Login</span>
            </Link>
            <Link 
              href="#free-quote" 
              className="bg-amber-500 text-black font-semibold px-4 py-1.5 rounded text-xs flex items-center gap-1 hover:bg-amber-400 transition w-fit"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}