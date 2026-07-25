"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#141414] text-white shadow-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.jpeg" 
            alt="XCDGOC Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="text-amber-400 border-b-2 border-amber-400 pb-1">HOME</Link>
          <Link href="#about" className="hover:text-amber-400 transition">ABOUT US</Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-amber-400 py-2">
            SERVICES
          </div>
          <Link href="#load-boards" className="hover:text-amber-400 transition">LOAD BOARDS</Link>
          <Link href="#testimonials" className="hover:text-amber-400 transition">TESTIMONIALS</Link>
          <Link href="#gallery" className="hover:text-amber-400 transition">GALLERY</Link>
          <Link href="#partners" className="hover:text-amber-400 transition">PARTNERS</Link>
          <Link href="#contact" className="hover:text-amber-400 transition">CONTACT US</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-zinc-800">
          <nav className="flex flex-col px-4 md:px-12 py-4 gap-4 font-medium text-sm">
            <Link href="/" className="text-amber-400 border-b-2 border-amber-400 pb-1 w-fit">HOME</Link>
            <Link href="#about" className="hover:text-amber-400 transition py-2">ABOUT US</Link>
            <Link href="#load-boards" className="hover:text-amber-400 transition py-2">LOAD BOARDS</Link>
            <Link href="#testimonials" className="hover:text-amber-400 transition py-2">TESTIMONIALS</Link>
            <Link href="#gallery" className="hover:text-amber-400 transition py-2">GALLERY</Link>
            <Link href="#partners" className="hover:text-amber-400 transition py-2">PARTNERS</Link>
            <Link href="#contact" className="hover:text-amber-400 transition py-2">CONTACT US</Link>
          </nav>
        </div>
      )}
    </header>
  );
}