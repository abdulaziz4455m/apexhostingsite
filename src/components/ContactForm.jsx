"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { siteMetadata } from "@/data/siteData";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwlkgwbv");

  return (
    <div className="rounded-[40px] bg-[#001060] p-4 sm:p-8 lg:p-14 shadow-2xl relative">
      
      {/* 4-Point Red Star Sparkle on top center of inner white card (Matching Screenshot 2) */}
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 text-[#ff3a18] drop-shadow-[0_0_12px_rgba(255,58,24,0.7)] pointer-events-none">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 0L26.5 16.5L43 23L26.5 29.5L23 46L19.5 29.5L3 23L19.5 16.5L23 0Z" fill="#ff3a18" />
            <circle cx="17" cy="17" r="1.5" fill="#ff3a18" />
            <circle cx="29" cy="29" r="1.5" fill="#ff3a18" />
          </svg>
        </div>

        {/* Pure White Card (Matching Screenshot 2) */}
        <div className="rounded-[36px] bg-white p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let’s discuss something great with us
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We emphasize personalized customer support and we are available to assist with inquiries or support needs via contact form or email during business days. Our aim is to respond within 24 hours. Chat support is available Monday through Friday.
              </p>

              {/* Instant WhatsApp Quick Connect */}
              <div className="pt-4 space-y-2">
                <a
                  href={siteMetadata.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">
                      Direct WhatsApp Support
                    </span>
                    <span className="font-black text-sm text-slate-900 font-mono">
                      {siteMetadata.whatsapp}
                    </span>
                  </div>
                </a>

                <div className="text-xs text-slate-500 flex items-center gap-2 pt-1 pl-1">
                  <Phone className="w-3.5 h-3.5 text-[#ff3a18]" />
                  <span>Call: {siteMetadata.phone} • {siteMetadata.email}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Formspree (xwlkgwbv) Form */}
            <div className="lg:col-span-7">
              {state.succeeded ? (
                <div className="p-8 sm:p-10 rounded-[28px] bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thanks for joining!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received! Our Oracle APEX engineering team will review your requirements and respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <a
                      href={siteMetadata.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp: {siteMetadata.whatsapp}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00208b] transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00208b] transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="Subject"
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00208b] transition-colors"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Message (What can we help you with?) */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What can we help you with?"
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00208b] transition-colors resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Submit Button (Screenshot 2 style) */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="px-10 py-3.5 rounded-2xl bg-[#00084d] hover:bg-[#00147a] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      <span>{state.submitting ? "SUBMITTING..." : "SUBMIT"}</span>
                    </button>

                    <a
                      href={siteMetadata.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp: {siteMetadata.whatsapp}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
