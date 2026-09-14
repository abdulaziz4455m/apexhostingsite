"use client";

import Link from "next/link";
import { Move, MousePointer, Layers, Check } from "lucide-react";
import { apexPrintData } from "@/data/siteData";

export default function MaxPrintSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Royal Blue Banner Container (Matching Screenshot 3) */}
        <div className="rounded-[36px] bg-[#00147a] text-white p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {apexPrintData.title}
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal max-w-lg">
                {apexPrintData.description}
              </p>

              <div className="pt-2">
                <Link
                  href={apexPrintData.link}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-100 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>{apexPrintData.buttonText}</span>
                </Link>
              </div>
            </div>

            {/* Right Graphic: Window Frame with Drag & Drop Diagram (Matching Screenshot 3) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white/5 border border-white/20 p-2 sm:p-3 shadow-2xl backdrop-blur-sm">
                
                {/* Window Header with Red Bar */}
                <div className="rounded-xl bg-[#ff3a18] text-white px-5 py-2.5 flex items-center justify-between shadow-md">
                  <span className="font-bold text-xs sm:text-sm tracking-wide">
                    ApexPrint Reporting Tool
                  </span>
                  <div className="flex items-center gap-2 text-white/90 text-xs font-mono">
                    <span>_</span>
                    <span>▢</span>
                    <span>✕</span>
                  </div>
                </div>

                {/* Designer Canvas Simulation */}
                <div className="p-6 sm:p-8 bg-[#0b1b64]/80 rounded-b-xl min-h-[220px] flex items-center justify-center relative">
                  
                  {/* Dotted Canvas Area */}
                  <div className="w-full h-44 rounded-xl border-2 border-dashed border-white/20 p-4 flex items-center justify-between relative">
                    
                    {/* Left Palette Blocks */}
                    <div className="space-y-2 w-24">
                      <div className="h-7 rounded-lg bg-white/20"></div>
                      <div className="h-7 rounded-lg bg-white/20"></div>
                      <div className="h-7 rounded-lg bg-white/20"></div>
                    </div>

                    {/* Active Dragged Red Widget */}
                    <div className="absolute left-1/3 top-6 px-5 py-3 rounded-lg bg-[#ff3a18] text-white shadow-xl flex items-center gap-2 animate-bounce">
                      <span className="text-[11px] font-bold uppercase tracking-wider">Drag Widget</span>
                      <MousePointer className="w-4 h-4 fill-white" />
                    </div>

                    {/* Right Resize / Move Crosshair */}
                    <div className="w-16 h-16 flex items-center justify-center text-white/70">
                      <Move className="w-10 h-10 stroke-[2.5]" />
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
