"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { 
  Check, 
  ChevronDown, 
  Layers, 
  Server, 
  Cloud, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck,
  Zap,
  PhoneCall,
  CreditCard
} from "lucide-react";
import { pricingPlans, comparisonMatrix, enterprisePlans, dedicatedFaqs, siteMetadata } from "@/data/siteData";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("shared"); // 'shared', 'dedicated', 'cloud'
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly', 'semi-annual', 'annual', 'biennial'
  const [openAccordions, setOpenAccordions] = useState({
    "Top features": true,
    "Performance & Architecture": true,
    "Control & Access": false,
    "Data & Security": false
  });

  const toggleAccordion = (cat) => {
    setOpenAccordions(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  // Discount percentage based on billing cycle
  const getDiscountedPrice = (plan) => {
    const raw = plan.numericPrice || parseInt(String(plan.price).replace(/,/g, ""), 10);
    let final = raw;
    if (billingCycle === "semi-annual") final = Math.round(raw * 0.95);
    if (billingCycle === "annual") final = Math.round(raw * 0.90);
    if (billingCycle === "biennial") final = Math.round(raw * 0.85);
    return final.toLocaleString("en-PK");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1">
        {/* ========================================================
            1. Pricing Hero Section (Pakistan PKR Edition)
           ======================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001768] via-[#001f85] to-[#000a3d] text-white py-20 lg:py-28">
          
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff3a18]/20 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & WhatsApp CTA */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-black uppercase tracking-wider border border-white/15">
                  <span>🇵🇰 PAKISTAN&apos;S #1 APEX HOSTING</span>
                  <span>•</span>
                  <span>PKR BILLING</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                  Transparent <br />
                  Plans &amp; Pricing <br />
                  <span className="text-[#ff3a18]">(in PKR)</span>
                </h1>

                <p className="text-base sm:text-lg text-blue-100/90 max-w-xl font-normal leading-relaxed">
                  High-speed Oracle APEX 26.1 hosting in Pakistan. Pay easily in PKR via Raast, Bank Transfer, JazzCash, or EasyPaisa with 24/7 DBA support on WhatsApp.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href="#plans"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-100 shadow-xl transition-all"
                  >
                    <span>VIEW PKR PLANS</span>
                  </a>

                  <a
                    href={siteMetadata.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all"
                  >
                    <span>WhatsApp: 0304-8106662</span>
                  </a>
                </div>

                {/* Local Payment Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-2 text-[11px] text-blue-200">
                  <span className="font-bold text-white">Accepted in Pakistan:</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-medium">Raast</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-medium">1Link</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-medium">Meezan / HBL</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-medium">JazzCash / EasyPaisa</span>
                </div>
              </div>

              {/* Right Column: 3D Halftone Sphere with Staggered Pricing Cards */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                  
                  {/* Glowing 3D Halftone Sphere */}
                  <svg className="w-full h-full animate-float-1" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {Array.from({ length: 14 }).map((_, row) => {
                      const rowRadius = Math.sin((row / 13) * Math.PI) * 160;
                      const cols = Math.max(4, Math.floor(rowRadius / 10));
                      return Array.from({ length: cols }).map((_, col) => {
                        const cx = 200 + ((col - cols / 2) * (rowRadius * 2 / cols));
                        const cy = 60 + (row * 21);
                        const r = Math.max(1.8, Math.sin((col / cols) * Math.PI) * 4);
                        const isRed = (row + col) % 3 === 0;
                        return (
                          <circle
                            key={`${row}-${col}`}
                            cx={cx}
                            cy={cy}
                            r={r}
                            fill={isRed ? "#ff3a18" : "#ffffff"}
                            opacity={0.35 + (row / 28)}
                          />
                        );
                      });
                    })}
                  </svg>

                  {/* 3 Staggered Pricing Mockups Over Sphere */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 pointer-events-none">
                    {/* Left Card */}
                    <div className="w-24 sm:w-28 h-40 sm:h-48 rounded-2xl bg-white shadow-2xl p-2.5 border border-slate-200 flex flex-col justify-between -rotate-3">
                      <div>
                        <div className="text-[10px] font-black text-slate-800">SHARED</div>
                        <div className="text-[12px] font-black text-[#00208b]">Rs. 3.9k</div>
                      </div>
                      <div className="space-y-1.5 flex-1 pt-2">
                        <div className="h-1.5 w-full rounded bg-slate-100"></div>
                        <div className="h-1.5 w-4/5 rounded bg-slate-100"></div>
                        <div className="h-1.5 w-3/5 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-5 w-full rounded-lg bg-[#00208b] flex items-center justify-center">
                        <span className="text-[8px] font-black text-white">SELECT</span>
                      </div>
                    </div>

                    {/* Center Popular Card */}
                    <div className="w-28 sm:w-32 h-48 sm:h-56 rounded-2xl bg-white shadow-2xl p-3 border-2 border-[#ff3a18] flex flex-col justify-between z-10">
                      <div>
                        <div className="h-4 w-14 rounded bg-[#ff3a18] mb-1.5 flex items-center justify-center">
                          <span className="text-[7px] font-black text-white uppercase">POPULAR</span>
                        </div>
                        <div className="text-[10px] font-black text-slate-900">DEDICATED</div>
                        <div className="text-[14px] font-black text-[#ff3a18]">Rs. 23.5k</div>
                      </div>
                      <div className="space-y-1.5 flex-1 pt-2">
                        <div className="h-1.5 w-full rounded bg-slate-100"></div>
                        <div className="h-1.5 w-5/6 rounded bg-slate-100"></div>
                        <div className="h-1.5 w-4/6 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-6 w-full rounded-lg bg-[#ff3a18] flex items-center justify-center shadow-md">
                        <span className="text-[9px] font-black text-white uppercase">ORDER NOW</span>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="w-24 sm:w-28 h-40 sm:h-48 rounded-2xl bg-white shadow-2xl p-2.5 border border-slate-200 flex flex-col justify-between rotate-3">
                      <div>
                        <div className="text-[10px] font-black text-slate-800">CLOUD DB</div>
                        <div className="text-[12px] font-black text-[#00208b]">Rs. 97k</div>
                      </div>
                      <div className="space-y-1.5 flex-1 pt-2">
                        <div className="h-1.5 w-full rounded bg-slate-100"></div>
                        <div className="h-1.5 w-4/5 rounded bg-slate-100"></div>
                        <div className="h-1.5 w-3/5 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-5 w-full rounded-lg bg-[#00208b] flex items-center justify-center">
                        <span className="text-[8px] font-black text-white">SELECT</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            2. "Get Started with the Perfect Plan" (Tabs & PKR Cards)
           ======================================================== */}
        <section id="plans" className="py-20 lg:py-28 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
                AFFORDABLE &amp; SCALABLE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Get Started with the Perfect Plan
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Choose between budget-friendly Shared Hosting, Dedicated VM performance, or multi-VM High Availability CloudDB in Pakistani Rupees.
              </p>
            </div>

            {/* Controls Bar: Category Tabs on Left, Billing Dropdown on Right */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
              
              {/* Category Pills (Shared, DedicatedDB, CloudDB) */}
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-100 border border-slate-200/80 w-full sm:w-auto overflow-x-auto">
                {[
                  { id: "shared", label: "Shared APEX" },
                  { id: "dedicated", label: "DedicatedDB (VM)" },
                  { id: "cloud", label: "CloudDB (High Availability)" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-[#00208b] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Billing Cycle Dropdown */}
              <div className="relative w-full sm:w-64">
                <select
                  value={billingCycle}
                  onChange={(e) => setBillingCycle(e.target.value)}
                  className="w-full appearance-none pl-4 pr-10 py-3 rounded-full border border-slate-300 bg-white text-xs font-black text-slate-800 focus:outline-none focus:border-[#00208b] shadow-sm cursor-pointer"
                >
                  <option value="monthly">Monthly Billing</option>
                  <option value="semi-annual">6 Months (Save 5%)</option>
                  <option value="annual">1 Year (Save 10%)</option>
                  <option value="biennial">2 Years (Save 15%)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>

            {/* PKR Pricing Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans[activeTab].map((plan) => {
                const finalPrice = getDiscountedPrice(plan);
                return (
                  <div
                    key={plan.id}
                    className="flex flex-col justify-between rounded-[32px] p-7 bg-white border border-slate-200/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_-4px_rgba(0,32,139,0.08)] transition-all group"
                  >
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {plan.name}
                      </h3>

                      {/* Price Header in PKR (Rs.) */}
                      <div className="mt-2 mb-4 pb-4 border-b border-slate-100 flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          Rs. {finalPrice}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          /month
                        </span>
                      </div>

                      {/* Feature Bullet List with Circular Red Checkmarks */}
                      <div className="space-y-3 py-2">
                        {plan.features.map((f, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            {f.included ? (
                              <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                              </div>
                            ) : (
                              <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-slate-400 text-[9px] font-black leading-none">✕</span>
                              </div>
                            )}
                            <span className="leading-snug font-medium text-[13px]">{f.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Now WhatsApp & Payment Button */}
                    <div className="pt-6 border-t border-slate-100">
                      <a
                        href={`https://wa.me/923048106662?text=Hello%20ApexHostPro,%20I%20want%20to%20order%20the%20${encodeURIComponent(plan.name)}%20plan%20for%20Rs.%20${encodeURIComponent(finalPrice)}/month.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-2xl bg-[#00084d] hover:bg-[#001768] text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all group-hover:scale-[1.02]"
                      >
                        <span>ORDER VIA WHATSAPP</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pakistan Payment Guarantee Callout */}
            <div className="p-6 rounded-[28px] bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-800">
                <CreditCard className="w-6 h-6 text-[#ff3a18] shrink-0" />
                <div className="text-xs sm:text-sm font-bold">
                  <span className="text-[#00208b]">Local Pakistani Invoicing:</span> Official invoices with NTN issued for corporate tax deduction. Instant activation via Raast / Bank transfer.
                </div>
              </div>
              <a
                href={siteMetadata.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-sm"
              >
                Instant Invoice Request
              </a>
            </div>

          </div>
        </section>


        {/* ========================================================
            3. "Compare Our Plans" (In PKR)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-slate-200">
              <div className="lg:col-span-5 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                  Compare Our Plans
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-normal">
                  Transparent breakdown of all technical resources, database access, and support SLAs.
                </p>
              </div>

              {/* 3 Top Cards in PKR */}
              <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
                {/* Shared Card */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Shared</h4>
                    <div className="text-base sm:text-lg font-black text-slate-900 mt-1">Rs. 3,900<span className="text-[10px] text-slate-500 font-normal">/mo</span></div>
                  </div>
                  <a
                    href="#plans"
                    onClick={() => setActiveTab("shared")}
                    className="mt-4 py-2 px-2 rounded-xl bg-[#00084d] text-white text-[11px] font-black uppercase tracking-wider hover:bg-[#001768]"
                  >
                    SELECT
                  </a>
                </div>

                {/* DedicatedDB POPULAR Card */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-white border-2 border-[#ff3a18] shadow-lg shadow-red-500/10 text-center flex flex-col justify-between relative">
                  <div>
                    <div className="flex items-center justify-center gap-1">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">DedicatedDB</h4>
                      <span className="px-1.5 py-0.2 rounded bg-[#ff3a18] text-white text-[9px] font-black uppercase">POPULAR</span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#ff3a18] mt-1">Rs. 23,500<span className="text-[10px] text-slate-500 font-normal">/mo</span></div>
                  </div>
                  <a
                    href="#plans"
                    onClick={() => setActiveTab("dedicated")}
                    className="mt-4 py-2 px-2 rounded-xl bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-[11px] font-black uppercase tracking-wider"
                  >
                    SELECT
                  </a>
                </div>

                {/* CloudDB Card */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">CloudDB</h4>
                    <div className="text-base sm:text-lg font-black text-slate-900 mt-1">Rs. 97,000<span className="text-[10px] text-slate-500 font-normal">/mo</span></div>
                  </div>
                  <a
                    href="#plans"
                    onClick={() => setActiveTab("cloud")}
                    className="mt-4 py-2 px-2 rounded-xl bg-[#00084d] text-white text-[11px] font-black uppercase tracking-wider hover:bg-[#001768]"
                  >
                    SELECT
                  </a>
                </div>
              </div>
            </div>

            {/* Accordion Categories Table */}
            <div className="space-y-4">
              {comparisonMatrix.map((cat, cIdx) => {
                const isOpen = openAccordions[cat.category];
                return (
                  <div key={cIdx} className="border-b border-slate-200 pb-4">
                    <button
                      onClick={() => toggleAccordion(cat.category)}
                      className="w-full flex items-center justify-between py-3 text-left font-black text-base sm:text-lg text-slate-900 hover:text-[#00208b] transition-colors"
                    >
                      <span>{cat.category}</span>
                      <span className="text-xl font-black text-slate-800">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-2 divide-y divide-slate-100 text-xs sm:text-sm">
                        {cat.rows.map((row, rIdx) => (
                          <div key={rIdx} className="grid grid-cols-12 py-3 items-center">
                            <div className="col-span-5 font-bold text-slate-800 text-xs sm:text-sm">
                              {row.feature}
                            </div>
                            
                            <div className="col-span-2 text-center text-slate-700">
                              {typeof row.shared === "boolean" ? (
                                row.shared ? <span className="text-[#ff3a18] font-bold text-base">✓</span> : <span className="text-slate-300">✕</span>
                              ) : (
                                <span className="font-medium text-xs text-slate-600">{row.shared}</span>
                              )}
                            </div>

                            <div className="col-span-2 text-center text-slate-700">
                              {typeof row.dedicated === "boolean" ? (
                                row.dedicated ? <span className="text-[#ff3a18] font-bold text-base">✓</span> : <span className="text-slate-300">✕</span>
                              ) : (
                                <span className="font-medium text-xs text-slate-600">{row.dedicated}</span>
                              )}
                            </div>

                            <div className="col-span-3 text-center text-slate-700">
                              {typeof row.cloud === "boolean" ? (
                                row.cloud ? <span className="text-[#ff3a18] font-bold text-base">✓</span> : <span className="text-slate-300">✕</span>
                              ) : (
                                <span className="font-medium text-xs text-slate-600">{row.cloud}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================
            4. Enterprise Hosting Plans (PKR)
           ======================================================== */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
                ENTERPRISE SCALE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Enterprise Hosting Solutions in Pakistan
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Tailored for Pakistani banks, textile conglomerates, healthcare hospitals, and high-concurrency ERP platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {enterprisePlans.map((ep, idx) => (
                <div
                  key={idx}
                  className={`rounded-[32px] p-8 sm:p-10 bg-white border flex flex-col justify-between space-y-6 shadow-sm transition-all ${
                    ep.highlight
                      ? "border-2 border-[#00208b] shadow-xl relative"
                      : "border-slate-200 hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00208b] bg-[#00208b]/10 px-3 py-1 rounded-full w-fit block">
                      {ep.badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {ep.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {ep.tagline}
                    </p>

                    <div className="text-3xl font-black text-[#ff3a18] pt-2">
                      Rs. {ep.price} <span className="text-xs text-slate-500 font-normal">/month</span>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {ep.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#ff3a18] shrink-0 mt-0.5 stroke-[3]" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={`https://wa.me/923048106662?text=Hello%20ApexHostPro,%20I%20am%20interested%20in%20the%20${encodeURIComponent(ep.name)}%20enterprise%20plan.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-center block transition-all shadow-md ${
                        ep.highlight
                          ? "bg-[#00208b] hover:bg-[#001768] text-white"
                          : "bg-[#00084d] hover:bg-[#001768] text-white"
                      }`}
                    >
                      CONTACT DBA ARCHITECT
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================
            5. Formspree Form Integration ("xwlkgwbv") with WhatsApp
           ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>


        {/* ========================================================
            6. DedicatedDB FAQs in Pakistan
           ======================================================== */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Everything you need to know about Oracle APEX hosting, Pakistani payment methods, latency, and migrations:
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {dedicatedFaqs.map((faq, fIdx) => (
                <div key={fIdx} className="py-6 space-y-2">
                  <h4 className="text-base sm:text-lg font-black text-slate-900">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
