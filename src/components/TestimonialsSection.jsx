"use client";

import { Star, ExternalLink, Quote, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#090d16] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Dual Ratings */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Client Endorsements & Proof</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Trusted by APEX Developers in 85+ Countries
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From global financial institutions and logistics enterprises to independent APEX consulting teams, 
              discover how ApexHost powers mission-critical Oracle applications.
            </p>
          </div>

          {/* Trust Score Badges */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {/* Google Reviews Badge */}
            <a
              href="https://maps.app.goo.gl/GRtqumuG3XjWKErd7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-slate-900 text-lg shadow-inner">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="ml-1 font-bold text-white text-xs">4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>Google Verified Reviews</span>
                  <ExternalLink className="w-3 h-3 group-hover:text-cyan-400 opacity-60" />
                </div>
              </div>
            </a>

            {/* Trustpilot Badge */}
            <a
              href="https://www.trustpilot.com/review/ApexHost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00b67a] flex items-center justify-center text-white font-bold text-lg shadow-inner">
                ★
              </div>
              <div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <span className="font-bold text-white text-xs">4.7 / 5.0</span>
                  <span className="text-slate-400 text-xs font-normal">• Excellent</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>Trustpilot Certified</span>
                  <ExternalLink className="w-3 h-3 group-hover:text-cyan-400 opacity-60" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-white/5 hover:border-white/15 transition-all relative"
            >
              <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />

              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/5">
                  {t.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Testimonials Link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.ApexHost.com/testimonials/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Read all client stories on ApexHost.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
