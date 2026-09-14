"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteMetadata } from "@/data/siteData";

export default function Header({ transparent = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`w-full z-40 transition-all ${
      transparent 
        ? "bg-transparent text-white" 
        : "bg-white text-slate-900 border-b border-slate-100 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <BrandLogo theme={transparent ? "dark" : "light"} />

        {/* Center Desktop Navigation - Direct links only, ZERO dropdowns */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-black tracking-wider uppercase">
          <Link 
            href="/" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white" : "text-slate-800"
            }`}
          >
            Home
          </Link>

          <Link 
            href="/about-us" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            About Us
          </Link>

          <Link 
            href="/apex-hosting" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            APEX Hosting
          </Link>

          <Link 
            href="/cloud-services" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            Cloud Services
          </Link>

          <Link 
            href="/pricing" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            Pricing (PKR)
          </Link>

          <Link 
            href="/contact-us" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* WhatsApp Direct Connect */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteMetadata.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <span>WhatsApp (03048106662)</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-xl ${transparent ? "text-white" : "text-slate-800"}`}
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer - Simple, direct, no dropdowns */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white text-slate-800 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-black uppercase tracking-wider">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#ff3a18]">
              Home
            </Link>
            <Link href="/about-us" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#ff3a18]">
              About Us
            </Link>
            <Link href="/apex-hosting" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#ff3a18]">
              APEX Hosting
            </Link>
            <Link href="/cloud-services" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#ff3a18]">
              Cloud Services
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#ff3a18]">
              Pricing (PKR)
            </Link>
            <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#ff3a18]">
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href={siteMetadata.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-sm"
            >
              <span>WhatsApp (03048106662)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
