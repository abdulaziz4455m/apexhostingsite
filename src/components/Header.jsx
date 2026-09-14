"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteMetadata } from "@/data/siteData";

export default function Header({ transparent = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hostingOpen, setHostingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className={`w-full z-40 transition-all ${
      transparent 
        ? "bg-transparent text-white" 
        : "bg-white text-slate-900 border-b border-slate-100 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <BrandLogo theme={transparent ? "dark" : "light"} />

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-bold tracking-wider uppercase">
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

          {/* Hosting Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setHostingOpen(true)}
            onMouseLeave={() => setHostingOpen(false)}
          >
            <Link
              href="/apex-hosting"
              className={`flex items-center gap-1 transition-colors hover:text-[#ff3a18] ${
                transparent ? "text-white/90" : "text-slate-700"
              }`}
            >
              <span>APEX Hosting</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hostingOpen ? "rotate-180" : ""}`} />
            </Link>

            {hostingOpen && (
              <div className="absolute top-full left-0 w-64 p-2 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 normal-case tracking-normal z-50 animate-in fade-in duration-150">
                <Link href="/apex-shared-hosting" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Shared Hosting
                </Link>
                <Link href="/apex-dedicated-hosting" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  DedicatedDB Hosting
                </Link>
                <Link href="/oracle-apex-clouddb" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  CloudDB Hosting
                </Link>
                <Link href="/complete-onpremise-support" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  On-Premise Support
                </Link>
                <Link href="/maxapex-add-ons" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Hosting Add-ons & Extensions
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/cloud-services" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            Cloud
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors hover:text-[#ff3a18] uppercase ${
                transparent ? "text-white/90" : "text-slate-700"
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 p-2 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 normal-case tracking-normal z-50 animate-in fade-in duration-150">
                <Link href="/oci-services" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Oracle Cloud (OCI) Services
                </Link>
                <Link href="/aws-cloud-services" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  AWS Cloud Services
                </Link>
                <Link href="/azure-cloud-services" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Azure Cloud Services
                </Link>
                <Link href="/database-migration" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Zero-Downtime Database Migration
                </Link>
                <Link href="/oracle-cloud-high-availability-services" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  High Availability & Disaster Recovery
                </Link>
                <Link href="/ai-consultancy-solutions" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  AI Consultancy & 23ai Vectors
                </Link>
                <Link href="/devops-solutions" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  DevOps & CI/CD Pipelines
                </Link>
                <Link href="/native-mobile-apps" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  Native Mobile Apps (iOS & Android)
                </Link>
                <Link href="/apexprotect" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  ApexProtect 24/7 Managed SOC
                </Link>
                <Link href="/apexprint" className="block px-4 py-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold">
                  ApexPrint PDF & Office Reporting
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/pricing" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            Pricing
          </Link>

          <Link 
            href="/blogs" 
            className={`transition-colors hover:text-[#ff3a18] ${
              transparent ? "text-white/90" : "text-slate-700"
            }`}
          >
            Blogs
          </Link>
        </nav>

        {/* WhatsApp Quick Connect (Clients Area removed) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteMetadata.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
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

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white text-slate-800 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-bold">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              Home
            </Link>
            <Link href="/about-us" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              About Us
            </Link>
            <Link href="/apex-hosting" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              APEX Hosting
            </Link>
            <Link href="/cloud-services" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              Cloud Services
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              Pricing
            </Link>
            <Link href="/blogs" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              Blogs
            </Link>
            <Link href="/case-study" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              Case Studies
            </Link>
            <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#00208b]">
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href={siteMetadata.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
