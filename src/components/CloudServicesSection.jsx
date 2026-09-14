"use client";

import { useState } from "react";
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Zap, 
  RefreshCw, 
  ShieldCheck 
} from "lucide-react";
import { cloudServices } from "@/data/siteData";

export default function CloudServicesSection({ onOpenScheduleModal }) {
  const [activePlatformId, setActivePlatformId] = useState("oci");

  const currentPlatform = cloudServices.platforms.find(p => p.id === activePlatformId) || cloudServices.platforms[0];

  return (
    <section id="cloud-services" className="relative py-24 bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Cloud className="w-3.5 h-3.5" />
            <span>About Cloud Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Managed Multi-Cloud Architecture & Migration
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {cloudServices.description}
          </p>
        </div>

        {/* Cloud Platforms Navigation Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 gap-2 max-w-xl w-full">
            {cloudServices.platforms.map((platform) => {
              const isSelected = platform.id === activePlatformId;
              return (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatformId(platform.id)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white shadow-lg shadow-red-600/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Cloud className={`w-4 h-4 ${isSelected ? "text-white" : "text-slate-400"}`} />
                  <span>{platform.name.split(" ")[0]} Cloud</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Platform Feature Card */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d1322] to-slate-950 border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Platform Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold font-mono">
                  {currentPlatform.badge}
                </span>
                <span className="text-slate-400 text-xs font-medium">Enterprise Cloud Management</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentPlatform.name}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentPlatform.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Key Migration & Architecture Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPlatform.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={currentPlatform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/25 transition-all"
                >
                  <span>Discover MaxAPEX Cloud Services</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenScheduleModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
                >
                  <span>Plan Free Cloud Migration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Architecture Diagram Graphic */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="font-bold text-white text-xs">Target Cloud Topology</span>
                  </div>
                  <span className="text-[11px] text-emerald-400">Zero Downtime</span>
                </div>

                {/* Architecture Steps */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Step 1: Ingestion & Assessment</div>
                      <div className="text-white font-semibold text-xs mt-0.5">On-Premises / Legacy APEX</div>
                    </div>
                    <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                  </div>

                  <div className="flex justify-center my-1 text-slate-500">↓ Encrypted TLS 1.3 Tunnel ↓</div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-red-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-red-400 uppercase font-bold">Step 2: Managed Modernization</div>
                      <div className="text-white font-semibold text-xs mt-0.5">MaxAPEX Cloud Infrastructure</div>
                    </div>
                    <Zap className="w-4 h-4 text-red-400" />
                  </div>

                  <div className="flex justify-center my-1 text-slate-500">↓ Synchronized Data Guard ↓</div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-emerald-400 uppercase font-bold">Step 3: Live Production</div>
                      <div className="text-white font-semibold text-xs mt-0.5">{currentPlatform.name} + APEX 26.1</div>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-white/10">
                  <span>SLA Guarantee: 99.99%</span>
                  <span className="text-cyan-400">Audited Security</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
