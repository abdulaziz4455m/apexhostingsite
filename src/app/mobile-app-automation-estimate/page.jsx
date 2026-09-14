"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Calculator, Check, Smartphone, Shield, Zap, Sparkles } from "lucide-react";

export default function MobileAppEstimatePage() {
  const [platform, setPlatform] = useState("both"); // ios, android, both
  const [screenCount, setScreenCount] = useState("10-20");
  const [needsOffline, setNeedsOffline] = useState(true);
  const [needsPush, setNeedsPush] = useState(true);
  const [needsBiometrics, setNeedsBiometrics] = useState(true);
  const [hostingTier, setHostingTier] = useState("dedicated");

  // Calculate estimated investment range
  const calculateEstimate = () => {
    let base = 2500;
    if (platform === "both") base += 1200;
    if (screenCount === "20-40") base += 1800;
    if (screenCount === "40+") base += 3500;
    if (needsOffline) base += 800;
    if (needsPush) base += 400;
    if (needsBiometrics) base += 300;
    
    return {
      min: base,
      max: Math.round(base * 1.35),
      timelineWeeks: screenCount === "40+" ? "6 - 8 Weeks" : "3 - 5 Weeks",
    };
  };

  const est = calculateEstimate();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              INSTANT PROJECT CALCULATOR
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Mobile App & APEX Automation Estimator
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Get an instant cost and timeline estimate for building your native iOS/Android mobile apps or automating your Oracle APEX application infrastructure.
            </p>
          </div>

          {/* Interactive Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Options Selector */}
            <div className="lg:col-span-7 rounded-[32px] border border-slate-200 bg-white p-7 sm:p-9 shadow-sm space-y-7">
              
              {/* Target Platforms */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  1. Target Platforms
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "both", label: "iOS & Android" },
                    { id: "ios", label: "iOS Only" },
                    { id: "android", label: "Android Only" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id)}
                      className={`py-3 px-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                        platform === p.id
                          ? "border-[#00208b] bg-blue-50/60 text-[#00208b]"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Screens / Workflows */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  2. Number of APEX Screens & Workflows
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "1-10", label: "1 - 10 Screens" },
                    { id: "10-20", label: "10 - 25 Screens" },
                    { id: "40+", label: "25+ Complex" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setScreenCount(s.id)}
                      className={`py-3 px-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                        screenCount === s.id
                          ? "border-[#00208b] bg-blue-50/60 text-[#00208b]"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Native Capabilities Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  3. Mobile Native Capabilities
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                    <input
                      type="checkbox"
                      checked={needsOffline}
                      onChange={(e) => setNeedsOffline(e.target.checked)}
                      className="w-4 h-4 rounded text-[#00208b] focus:ring-0"
                    />
                    <div className="text-xs font-bold text-slate-800">
                      Offline Mode & Local SQLite Caching
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                    <input
                      type="checkbox"
                      checked={needsPush}
                      onChange={(e) => setNeedsPush(e.target.checked)}
                      className="w-4 h-4 rounded text-[#00208b] focus:ring-0"
                    />
                    <div className="text-xs font-bold text-slate-800">
                      Automated Push Notifications (APNs / FCM)
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100">
                    <input
                      type="checkbox"
                      checked={needsBiometrics}
                      onChange={(e) => setNeedsBiometrics(e.target.checked)}
                      className="w-4 h-4 rounded text-[#00208b] focus:ring-0"
                    />
                    <div className="text-xs font-bold text-slate-800">
                      Biometrics (FaceID / Fingerprint) & Camera Barcode Scanner
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Live Estimate Card */}
            <div className="lg:col-span-5 rounded-[32px] bg-[#001768] text-white p-8 space-y-6 shadow-xl sticky top-24">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ff3a18]">
                <Calculator className="w-4 h-4" />
                <span>Estimated Investment</span>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ${est.min.toLocaleString()} – ${est.max.toLocaleString()}
                </div>
                <div className="text-xs text-blue-200">
                  Fixed-scope turnkey delivery with source code transfer
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 space-y-2 text-xs text-blue-100">
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <strong className="text-white font-bold">{est.timelineWeeks}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Deployment:</span>
                  <strong className="text-white font-bold">App Store & Play Store</strong>
                </div>
                <div className="flex justify-between">
                  <span>DBA Optimization:</span>
                  <strong className="text-emerald-400 font-bold">Included Free</strong>
                </div>
              </div>

              <a
                href="https://wa.me/923048106662?text=Hello%20ApexHostPro,%20I%20would%20like%20a%20detailed%20mobile%20app%20estimate."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 rounded-full bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
              >
                Discuss on WhatsApp (03048106662)
              </a>
            </div>

          </div>

          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
