"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import ContactForm from "@/components/ContactForm";
import { 
  Check, 
  ChevronDown, 
  MessageSquare,
  Ban
} from "lucide-react";
import { 
  pricingPlans, 
  comparisonMatrix, 
  enterprisePlans, 
  dedicatedFaqs, 
  siteMetadata 
} from "@/data/siteData";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("shared"); // 'shared' | 'dedicated' | 'cloud'
  const [billingPeriod, setBillingPeriod] = useState("1month"); // '1month' | '6month'
  const [openAccordions, setOpenAccordions] = useState({ "Top features": true });
  const [openFaq, setOpenFaq] = useState(0);

  const toggleAccordion = (cat) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const getDiscountedPrice = (basePrice) => {
    if (billingPeriod === "6month") {
      return Math.round(basePrice * 0.95);
    }
    return basePrice;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#ff3a18] selection:text-white">
      {/* Top Header */}
      <div className="bg-[#0022a8]">
        <Header transparent={true} />
      </div>

      <main className="flex-1">
        
        {/* ========================================================
            1. HERO SECTION (Matching Pricing Screenshot 1)
           ======================================================== */}
        <section className="relative wave-bg-animated text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden select-none">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#ff3a18]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Copy */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-black tracking-widest text-[#ff451a] uppercase bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  PRICING
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                  Plans & Pricing
                </h1>

                <p className="text-base sm:text-lg text-blue-100/90 max-w-xl font-normal leading-relaxed">
                  We offers reliable Oracle APEX Hosting with Secure, Scalability, and 24/7 Support.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href="#plans"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-slate-100 shadow-xl transition-all"
                  >
                    <span>EXPLORE ALL TIERS</span>
                  </a>

                  <a
                    href={siteMetadata.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp: {siteMetadata.whatsapp}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Halftone Sphere with 3 Glowing Mockup Cards (Screenshot 1) */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                  
                  {/* Glowing 3D Halftone Red Mesh Sphere */}
                  <svg className="w-full h-full animate-float-1" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            opacity={Math.max(0.25, (160 - distFromCenter) / 160)}
                          />
                        );
                      });
                    })}
                  </svg>

                  {/* 3 Staggered White Pricing Mockups Over Sphere */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 pointer-events-none">
                    {/* Left Card Mockup */}
                    <div className="w-24 sm:w-28 h-40 sm:h-48 rounded-2xl bg-white shadow-2xl p-2.5 border border-slate-200 flex flex-col justify-between -rotate-3 animate-float-2">
                      <div className="h-4 w-12 rounded bg-slate-200 mb-2"></div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-full rounded bg-slate-100"></div>
                        <div className="h-2 w-4/5 rounded bg-slate-100"></div>
                        <div className="h-2 w-3/5 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-5 w-full rounded-lg border border-[#ff451a] flex items-center justify-center">
                        <span className="text-[8px] font-bold text-[#ff451a]">ORDER</span>
                      </div>
                    </div>

                    {/* Center Popular Card Mockup (Elevated) */}
                    <div className="w-28 sm:w-32 h-48 sm:h-56 rounded-2xl bg-white shadow-2xl p-3 border-2 border-[#ff451a] flex flex-col justify-between z-10 animate-float-1">
                      <div>
                        <div className="h-5 w-16 rounded bg-[#00147a] mb-2 flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white uppercase">POPULAR</span>
                        </div>
                        <div className="h-4 w-14 rounded bg-slate-200"></div>
                      </div>
                      <div className="space-y-2 flex-1 pt-2">
                        <div className="h-2 w-full rounded bg-slate-100"></div>
                        <div className="h-2 w-5/6 rounded bg-slate-100"></div>
                        <div className="h-2 w-4/6 rounded bg-slate-100"></div>
                        <div className="h-2 w-3/6 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-6 w-full rounded-lg bg-[#ff451a] flex items-center justify-center shadow-md shadow-[#ff451a]/40">
                        <span className="text-[9px] font-bold text-white uppercase">ORDER NOW</span>
                      </div>
                    </div>

                    {/* Right Card Mockup */}
                    <div className="w-24 sm:w-28 h-40 sm:h-48 rounded-2xl bg-white shadow-2xl p-2.5 border border-slate-200 flex flex-col justify-between rotate-3 animate-float-3">
                      <div className="h-4 w-12 rounded bg-slate-200 mb-2"></div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-full rounded bg-slate-100"></div>
                        <div className="h-2 w-4/5 rounded bg-slate-100"></div>
                        <div className="h-2 w-3/5 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-5 w-full rounded-lg border border-[#ff451a] flex items-center justify-center">
                        <span className="text-[8px] font-bold text-[#ff451a]">ORDER</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            2. "Get Started with the Perfect Plan" (Screenshots 2, 3, 4)
           ======================================================== */}
        <section id="plans" className="py-20 lg:py-28 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Get Started with the Perfect Plan
              </h2>
            </div>

            {/* Filter Bar: Tabs on Left, Dropdown on Right (Screenshots 2, 3, 4) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
              
              {/* Tab Switcher (Shared / Dedicated / Cloud) */}
              <div className="inline-flex p-1.5 rounded-full bg-[#f1f3f7] text-xs font-bold shadow-inner">
                {[
                  { id: "shared", label: "Shared" },
                  { id: "dedicated", label: "Dedicated" },
                  { id: "cloud", label: "Cloud" }
                ].map((t) => {
                  const isActive = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`px-7 py-2.5 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-[#ff3a18] text-white shadow-md shadow-[#ff3a18]/30 font-extrabold"
                          : "text-slate-600 hover:text-slate-900 font-bold"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              {/* Billing Term Dropdown */}
              <div className="relative">
                <select
                  value={billingPeriod}
                  onChange={(e) => setBillingPeriod(e.target.value)}
                  className="appearance-none pl-5 pr-10 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm focus:outline-none focus:border-[#00208b] cursor-pointer"
                >
                  <option value="1month">1 month plan</option>
                  <option value="6month">6 month plan ~ 5% Discount</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>

            {/* 4 Cards Grid (Screenshots 2, 3, 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans[activeTab].map((plan) => {
                const finalPrice = getDiscountedPrice(plan.price);
                return (
                  <div
                    key={plan.id}
                    className="flex flex-col justify-between rounded-[32px] p-7 bg-white border border-slate-200/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_-4px_rgba(0,32,139,0.08)] transition-all group"
                  >
                    <div>
                      {/* Plan Title */}
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {plan.name}
                      </h3>

                      {/* Price Header */}
                      <div className="mt-2 mb-4 pb-4 border-b border-slate-100 flex items-baseline gap-1">
                        <span className="text-3xl font-black text-slate-900 tracking-tight">
                          ${finalPrice}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          /month
                        </span>
                      </div>

                      {/* Feature Bullet List with Circular Red Checkmarks / Slash Icons (Screenshot 2) */}
                      <div className="space-y-3 py-2">
                        {plan.features.map((f, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            {f.included ? (
                              <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                              </div>
                            ) : (
                              <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                <span className="text-white text-[9px] font-black leading-none">✕</span>
                              </div>
                            )}
                            <span className="leading-snug font-medium text-[13px]">{f.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ORDER NOW Deep Navy Pill Button (Screenshot 2, 3, 4) */}
                    <div className="pt-6 border-t border-slate-100">
                      <a
                        href={siteMetadata.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-2xl bg-[#00084d] hover:bg-[#001768] text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all group-hover:scale-[1.02]"
                      >
                        <span>ORDER NOW</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================
            3. "Compare Our Plans" (Matching Screenshot 5 & 6)
           ======================================================== */}
        <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header with 3 Comparison Cards on Right (Screenshot 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-slate-200">
              
              <div className="lg:col-span-5 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                  Compare Our Plans
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-normal">
                  See at a glance what each plan costs and what you get for your money.
                </p>
              </div>

              {/* 3 Top Cards (Shared, DedicatedDB Popular in red border, CloudDB) */}
              <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
                {/* Shared Card */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Shared</h4>
                    <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">$14<span className="text-[10px] text-slate-500 font-normal">/mo</span></div>
                  </div>
                  <a
                    href="#plans"
                    onClick={() => setActiveTab("shared")}
                    className="mt-4 py-2 px-2 rounded-xl bg-[#00084d] text-white text-[11px] font-black uppercase tracking-wider hover:bg-[#001768]"
                  >
                    GET STARTED
                  </a>
                </div>

                {/* DedicatedDB POPULAR Card (Red Outline) */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-white border-2 border-[#ff3a18] shadow-lg shadow-red-500/10 text-center flex flex-col justify-between relative">
                  <div>
                    <div className="flex items-center justify-center gap-1">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">DedicatedDB</h4>
                      <span className="px-1.5 py-0.2 rounded bg-[#ff3a18] text-white text-[9px] font-black uppercase">POPULAR</span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">Custom</div>
                  </div>
                  <a
                    href={siteMetadata.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 py-2 px-2 rounded-xl bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-[11px] font-black uppercase tracking-wider"
                  >
                    CONTACT US
                  </a>
                </div>

                {/* CloudDB Card */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">CloudDB</h4>
                    <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">Custom</div>
                  </div>
                  <a
                    href={siteMetadata.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 py-2 px-2 rounded-xl bg-[#00084d] text-white text-[11px] font-black uppercase tracking-wider hover:bg-[#001768]"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>

            </div>

            {/* Accordion Categories Table (Screenshot 5 & 6) */}
            <div className="space-y-4">
              {comparisonMatrix.map((cat, cIdx) => {
                const isOpen = openAccordions[cat.category];
                return (
                  <div key={cIdx} className="border-b border-slate-200 pb-4">
                    {/* Category Header Row */}
                    <button
                      onClick={() => toggleAccordion(cat.category)}
                      className="w-full flex items-center justify-between py-3 text-left font-black text-base sm:text-lg text-slate-900 hover:text-[#00208b] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span>{cat.category}</span>
                      </div>
                      <span className="text-xl font-black text-slate-800">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Category Table Rows */}
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
            4. Enterprise Hosting Plans (Screenshot 7)
           ======================================================== */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                Enterprise Hosting Plans
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Tailored Oracle, AWS, and Azure cloud solutions — pricing customized to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterprisePlans.map((ep) => (
                <div
                  key={ep.id}
                  className="rounded-[32px] p-7 bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00208b] bg-[#00208b]/10 px-2.5 py-1 rounded-full w-fit block">
                      {ep.badge}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">
                      {ep.title}
                    </h3>
                    <p className="text-xs text-[#ff3a18] font-bold">
                      {ep.subtitle}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {ep.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#ff3a18] shrink-0 mt-0.5 stroke-[3]" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={siteMetadata.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-[#00084d] hover:bg-[#001768] text-white text-xs font-black uppercase tracking-wider text-center block transition-colors"
                    >
                      CONTACT US
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
            6. DedicatedDB FAQs (Matching User Text)
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
                Looking to learn more about Oracle APEX DedicatedDB Hosting for your business? Browse our FAQs:
              </p>
            </div>

            <div className="space-y-4">
              {dedicatedFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between hover:text-[#00208b] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 ml-4 font-mono text-sm">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-4">
              <a
                href={siteMetadata.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="red-underline-link"
              >
                HAVE MORE QUESTIONS? CHAT ON WHATSAPP: {siteMetadata.whatsapp}
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
