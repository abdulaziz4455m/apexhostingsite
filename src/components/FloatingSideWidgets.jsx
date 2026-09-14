"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, MessageCircle, X, MessageSquare, Phone } from "lucide-react";
import { siteMetadata } from "@/data/siteData";

export default function FloatingSideWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* Left Floating "SCHEDULE ONLINE MEETING" Pill */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <Link
          href="/contact-us"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#001460] hover:bg-[#00208b] text-white text-[11px] font-black uppercase tracking-wider rounded-r-xl shadow-xl transition-all border-y border-r border-white/20 hover:pl-5"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-white/80" />
          <span>Schedule Online Meeting</span>
        </Link>
      </div>

      {/* Bottom Left Language Badge */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-md border border-slate-200 text-slate-800 text-xs font-bold cursor-pointer hover:border-slate-300">
          <span>🇺🇸</span>
          <span>EN</span>
          <span className="text-[10px] text-slate-400">▲</span>
        </div>
      </div>

      {/* Bottom Right Floating Stack: WhatsApp + Online Chat Widget */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
        
        {/* Direct WhatsApp Floating Icon Button */}
        <a
          href={siteMetadata.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs font-black uppercase tracking-wider rounded-full shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
          title="Chat on WhatsApp (03048106662)"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Online Status Pill */}
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-xl shadow-red-500/30 transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Online</span>
          </button>
        ) : (
          <div className="w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-slate-800">
            <div className="p-4 bg-[#00208b] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="font-bold text-xs uppercase tracking-wider">ApexHostPro Support</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-4 space-y-3 text-xs bg-slate-50">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 leading-relaxed">
                Hello! Welcome to <strong>ApexHostPro</strong>. Need instant assistance or pricing for Oracle APEX hosting? Chat directly with us on WhatsApp or send a message.
              </div>
              <div className="text-[11px] text-slate-500">Average response time: &lt; 15 minutes</div>
            </div>

            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <a
                href={siteMetadata.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebd5a] flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: {siteMetadata.whatsapp}</span>
              </a>
              <Link
                href="/contact-us"
                className="px-4 py-2 rounded-xl bg-[#00208b] text-white text-xs font-bold hover:bg-[#001768]"
              >
                Form
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
