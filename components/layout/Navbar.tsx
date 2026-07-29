"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex h-[76px] items-center justify-between px-4 md:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="XCDGOC home">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-amber-400/40 bg-white shadow-lg shadow-amber-500/10 transition group-hover:scale-105">
            <Image src="/images/logo.jpeg" alt="XCDGOC" width={44} height={44} className="h-full w-full object-contain" priority />
          </div>
          <div className="leading-none">
            <span className="block text-base font-black tracking-wide text-white">XCDGOC</span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-amber-400">DISPATCH SOLUTIONS</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="relative text-xs font-bold uppercase tracking-wide text-zinc-300 transition hover:text-amber-400 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full">{link.label}</Link>)}
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"><Phone className="w-3.5 h-3.5" /> Contact Us</Link>
        </nav>

        <button type="button" className="rounded-lg p-2 text-zinc-200 transition hover:bg-white/10 hover:text-amber-400 lg:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation menu">{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>

      {isMenuOpen && <div className="border-t border-white/10 bg-zinc-950 px-4 py-4 lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col gap-1">{links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-amber-400">{link.label}</Link>)}<Link href="#contact" onClick={closeMenu} className="mt-2 rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-bold text-zinc-950">Contact Us</Link></nav></div>}
    </header>
  );
}
