"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Star, ChevronRight, Sparkles } from "lucide-react";
import { heroStats } from "@/data/siteData";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0); // 0: 3D Cards, 1: 3D Halftone Orb
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse parallax handler for 3D depth
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Auto-switch carousel slides every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative wave-bg-animated text-white pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden select-none"
    >
      {/* 3D Floating Ambient Light Orbs */}
      <div 
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)`
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#ff3a18]/15 rounded-full blur-[140px] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`
        }}
      />

      {/* Floating 3D Sparkles in the background */}
      <div className="absolute top-20 left-1/3 text-white/30 animate-sparkle pointer-events-none">
        ✦
      </div>
      <div className="absolute top-40 right-1/4 text-white/40 text-xl animate-sparkle delay-700 pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-20 left-1/4 text-[#ff451a]/50 text-2xl animate-sparkle delay-1000 pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[520px]">
          
          {/* Left Column: Headlines, CTAs, Trust Reviews */}
          <div className="lg:col-span-6 space-y-6">
            
            {activeSlide === 0 ? (
              /* Slide 1 Copy (Screenshot 2) */
              <div className="space-y-6 animate-in fade-in duration-500">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                  Build Your Next <br />
                  Business Application <br />
                  with <span className="text-[#ff451a] drop-shadow-[0_4px_24px_rgba(255,69,26,0.6)]">Oracle APEX 26.1</span>
                </h1>

                <p className="text-base sm:text-lg text-blue-100/90 max-w-xl font-normal leading-relaxed">
                  Create enterprise applications faster using the latest AI-powered Vibe Coding features. 
                  Develop, test, and deploy on ApexHostPro's secure and fully managed Oracle APEX platform.
                </p>

                {/* Pill CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/apex-hosting"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-100 shadow-2xl shadow-black/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
                  >
                    <span>START BUILDING TODAY</span>
                  </Link>
                </div>
              </div>
            ) : (
              /* Slide 2 Copy (Screenshot 1: Blogs / Knowledge Showcase) */
              <div className="space-y-6 animate-in fade-in duration-500">
                <span className="text-xs font-black tracking-widest text-[#ff451a] uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  BLOGS & ARCHITECTURE
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                  Blogs <span className="text-[#ff451a] drop-shadow-[0_4px_24px_rgba(255,69,26,0.6)]">ApexHostPro</span>
                </h1>

                <p className="text-base sm:text-lg text-blue-100/90 max-w-xl font-normal leading-relaxed">
                  Expert insights, deep-dive tutorials, APEX_PUBLIC_USER hardening guides, and news on Oracle APEX 26.1 and enterprise cloud solutions.
                </p>

                <div className="pt-2">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-100 shadow-2xl shadow-black/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
                  >
                    <span>EXPLORE ARTICLES</span>
                    <span>↓</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Carousel Indicators (• — •) as seen in Screenshot 2 */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveSlide(0)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 0 
                    ? "w-8 bg-white shadow-lg shadow-white/50" 
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label="Slide 1"
              />
              <button
                onClick={() => setActiveSlide(1)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 1 
                    ? "w-8 bg-[#ff451a] shadow-lg shadow-[#ff451a]/50" 
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label="Slide 2"
              />
            </div>

            {/* Google & Trustpilot Verified Review Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full text-slate-900 shadow-xl hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-black text-blue-600 text-sm shadow-sm border border-slate-100">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <span className="font-extrabold text-xs text-slate-900">{heroStats.googleRating}</span>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                    Google Reviews
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full text-slate-900 shadow-xl hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-[#00b67a] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  ★
                </div>
                <div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <span className="font-extrabold text-xs text-slate-900">{heroStats.trustpilotRating}</span>
                    <span className="text-[10px] font-mono">★★★★★</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                    Trustpilot • Excellent
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas / Floating Showcase */}
          <div className="lg:col-span-6 relative perspective-1200">
            
            {activeSlide === 0 ? (
              /* SLIDE 1: 3 Staggered 3D Floating Cards (Screenshot 2) */
              <div 
                className="relative w-full h-[520px] flex items-center justify-center transform-style-3d"
                style={{
                  transform: `rotateY(${mousePos.x * 16}deg) rotateX(${mousePos.y * -16}deg)`,
                  transition: "transform 0.15s ease-out"
                }}
              >
                
                {/* 3D CARD 1: ORACLE APEX HOSTING (Top Right) */}
                <div 
                  className="absolute top-2 right-2 sm:right-6 w-64 sm:w-72 rounded-[28px] bg-gradient-to-b from-[#0b1744]/95 via-[#081236]/95 to-[#040920]/95 p-5 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md animate-float-1 transform-style-3d group cursor-pointer hover:border-[#ff451a]/50 transition-colors"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-300">ORACLE APEX</span>
                    <h3 className="text-2xl font-black tracking-tight text-[#ff451a] drop-shadow-[0_2px_12px_rgba(255,69,26,0.5)]">
                      HOSTING
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Reliable, Secure, and Scalable APEX Hosting with 24/7 Support
                    </p>
                  </div>

                  {/* 3D Database Server Rack Graphic (SVG with glow) */}
                  <div className="mt-4 p-3 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <svg className="w-48 h-32" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Server Rack Body */}
                      <rect x="20" y="15" width="45" height="100" rx="6" fill="#0e1a46" stroke="#ff3a18" strokeWidth="2" />
                      <line x1="28" y1="35" x2="57" y2="35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <line x1="28" y1="55" x2="57" y2="55" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <line x1="28" y1="75" x2="57" y2="75" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="28" cy="95" r="3" fill="#10b981" />
                      <circle cx="38" cy="95" r="3" fill="#10b981" />
                      <circle cx="48" cy="95" r="3" fill="#ff451a" />

                      {/* 3D Cylindrical Glowing Database Stack */}
                      <g className="animate-pulse-glow">
                        {/* Cylinder 1 */}
                        <ellipse cx="130" cy="30" rx="42" ry="12" fill="#ff451a" />
                        <path d="M88 30V48C88 54.6 106.8 60 130 60C153.2 60 172 54.6 172 48V30" fill="#e02e0e" />
                        <ellipse cx="130" cy="48" rx="42" ry="12" fill="#ff451a" stroke="#ffffff" strokeWidth="1.5" />

                        {/* Cylinder 2 */}
                        <path d="M88 52V70C88 76.6 106.8 82 130 82C153.2 82 172 76.6 172 70V52" fill="#c02008" />
                        <ellipse cx="130" cy="70" rx="42" ry="12" fill="#ff451a" stroke="#ffffff" strokeWidth="1.5" />

                        {/* Cylinder 3 */}
                        <path d="M88 74V92C88 98.6 106.8 104 130 104C153.2 104 172 98.6 172 92V74" fill="#a01804" />
                        <ellipse cx="130" cy="92" rx="42" ry="12" fill="#ff451a" stroke="#ffffff" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* 3D CARD 2: Managed Cloud SERVICES (Floating Center Left, overlapping) */}
                <div 
                  className="absolute left-2 sm:left-4 top-28 w-60 sm:w-64 rounded-[28px] bg-gradient-to-b from-[#0a1848]/95 via-[#061034]/95 to-[#03081c]/95 p-5 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md animate-float-2 transform-style-3d group cursor-pointer hover:border-cyan-400/50 transition-colors z-20"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Managed Cloud</span>
                    <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                      <span>SERVICES</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    </h3>

                    {/* Logos */}
                    <div className="mt-2 flex items-center gap-2 text-[10px] font-mono font-bold text-cyan-300 bg-white/5 px-2 py-1 rounded-lg w-fit border border-white/10">
                      <span>aws</span>
                      <span>•</span>
                      <span>oci</span>
                      <span>•</span>
                      <span className="text-blue-400">Azure</span>
                    </div>
                  </div>

                  {/* 3D Gear and Cloud Hologram Graphic */}
                  <div className="mt-4 p-2 rounded-2xl bg-gradient-to-br from-[#ff3a18]/20 to-blue-900/30 border border-white/10 flex items-center justify-center relative h-28 overflow-hidden">
                    {/* Glowing orange cloud backdrop */}
                    <svg className="w-full h-full" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Cloud shape */}
                      <path 
                        d="M30 75C21 75 14 68 14 59C14 51 20 44 28 43C31 28 45 16 61 16C74 16 85 24 90 35C93 33 97 32 101 32C111 32 120 40 120 50C120 52 119 54 118 56C127 58 134 66 134 75H30Z" 
                        fill="#ff3a18" 
                        opacity="0.85" 
                      />
                      
                      {/* Rotating 3D Gear */}
                      <g className="animate-slow-spin origin-[85px_55px]">
                        <circle cx="85" cy="55" r="26" stroke="#ffffff" strokeWidth="4" strokeDasharray="6 4" fill="#0a1848" />
                        <circle cx="85" cy="55" r="14" fill="#ff451a" />
                        <circle cx="85" cy="55" r="7" fill="#ffffff" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* 3D CARD 3: ORACLE CLOUD INFRASTRUCTURE (Bottom Right) */}
                <div 
                  className="absolute bottom-4 right-4 sm:right-10 w-60 sm:w-64 rounded-[28px] bg-gradient-to-b from-[#0b1846]/95 via-[#071132]/95 to-[#03081c]/95 p-4 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md animate-float-3 transform-style-3d group cursor-pointer hover:border-[#ff451a]/50 transition-colors z-10"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <h4 className="text-xs font-black tracking-tight text-white leading-tight">
                    ORACLE CLOUD <br />
                    <span className="text-[#ff451a]">INFRASTRUCTURE</span>
                  </h4>

                  {/* 3D Multi-Layer Cloud Blades Graphic */}
                  <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                    <svg className="w-40 h-20" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Cloud Layers */}
                      <path d="M25 50C18 50 12 45 12 38C12 32 17 27 23 26C25 15 36 7 49 7C60 7 69 13 73 22C75 21 78 20 81 20C89 20 96 26 96 34H25Z" fill="#ff451a" opacity="0.9" />
                      {/* Server Blade 1 */}
                      <rect x="25" y="54" width="70" height="7" rx="2" fill="#00208b" stroke="#ffffff" strokeWidth="1" />
                      <circle cx="30" cy="57.5" r="1.5" fill="#10b981" />
                      {/* Server Blade 2 */}
                      <rect x="25" y="64" width="70" height="7" rx="2" fill="#00208b" stroke="#ffffff" strokeWidth="1" />
                      <circle cx="30" cy="67.5" r="1.5" fill="#10b981" />
                    </svg>
                  </div>
                </div>

              </div>
            ) : (
              /* SLIDE 2: Stunning 3D Halftone Dot Sphere / Mesh with Sparkles (Screenshot 1) */
              <div 
                className="relative w-full h-[520px] flex items-center justify-center transform-style-3d animate-in zoom-in-95 duration-500"
                style={{
                  transform: `rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg)`,
                  transition: "transform 0.2s ease-out"
                }}
              >
                {/* Glowing 3D Halftone Sphere Canvas Simulation */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                  
                  {/* Glowing Halftone Red Mesh SVG */}
                  <svg className="w-full h-full animate-float-1" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="sphereGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ff451a" stopOpacity="1" />
                        <stop offset="70%" stopColor="#e02e0e" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#901402" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Halftone Dot Matrix Pattern */}
                    {Array.from({ length: 14 }).map((_, row) => {
                      const rowRadius = Math.sin((row / 13) * Math.PI) * 160;
                      const cols = Math.max(4, Math.floor(rowRadius / 10));
                      return Array.from({ length: cols }).map((_, col) => {
                        const cx = 200 + ((col - cols / 2) * (rowRadius * 2 / cols));
                        const cy = 40 + row * 24;
                        const distFromCenter = Math.hypot(cx - 200, cy - 200);
                        const r = Math.max(1.5, (160 - distFromCenter) / 18);
                        return (
                          <circle
                            key={`${row}-${col}`}
                            cx={cx}
                            cy={cy}
                            r={r}
                            fill="#ff451a"
                            opacity={Math.max(0.2, (160 - distFromCenter) / 160)}
                          />
                        );
                      });
                    })}
                  </svg>

                  {/* 3D Brand Logo floating above Halftone Sphere */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center transform-style-3d pointer-events-none"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <div className="p-4 rounded-3xl bg-[#001048]/80 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#ff451a] flex items-center justify-center shadow-lg shadow-[#ff451a]/40">
                        <span className="font-black text-2xl text-white">A</span>
                      </div>
                      <div className="flex items-center tracking-tight">
                        <span className="font-black text-3xl text-white">apexhost</span>
                        <span className="font-extrabold text-3xl text-[#ff451a] ml-1">pro</span>
                      </div>
                    </div>
                  </div>

                  {/* Sparkling Cross Stars (from Screenshot 1) */}
                  <div className="absolute top-6 left-12 text-white text-3xl animate-sparkle drop-shadow-[0_0_12px_#ffffff]">
                    ✦
                  </div>
                  <div className="absolute top-20 left-20 text-[#ff451a] text-4xl animate-sparkle delay-500 drop-shadow-[0_0_16px_#ff451a]">
                    ✦
                  </div>
                  <div className="absolute bottom-16 right-14 text-white text-2xl animate-sparkle delay-1000">
                    ✦
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
