"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { apexProtectData, cloudServicesData } from "@/data/siteData";

export default function MaxProtectSection() {
  const [activeCloudTab, setActiveCloudTab] = useState("oci");

  return (
    <section className="py-20 bg-white text-slate-900 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Top Half: ABOUT CYBER SECURITY (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
              ABOUT CYBER SECURITY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              ApexProtect – Managed <br />
              Linux Server Security
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              24/7 human-led SOC and proactive hardening for your critical Linux infrastructure. 
              Enterprise-grade defense for <strong className="text-slate-900 font-bold">$100 /server /month</strong>.
            </p>

            <div className="pt-2">
              <Link
                href={apexProtectData.link}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00146b] text-white font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-[#001050] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{apexProtectData.buttonText}</span>
              </Link>
            </div>
          </div>

          {/* Right Checklist Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] p-8 sm:p-10 bg-white border border-slate-200 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] space-y-4">
              {apexProtectData.features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Half: ABOUT CLOUD SERVICES (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-slate-100">
          
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
              ABOUT CLOUD SERVICES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Managed Cloud <br />
              Services
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {cloudServicesData.description}
            </p>

            <div className="pt-2">
              <Link
                href={cloudServicesData.link}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00146b] text-white font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-[#001050] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{cloudServicesData.buttonText}</span>
              </Link>
            </div>
          </div>

          {/* Right Tabbed Royal Blue Card (Matching Screenshot 4) */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-[#00125c] text-white overflow-hidden shadow-xl">
              
              {/* Tabs Header */}
              <div className="flex border-b border-white/10 text-xs font-black tracking-wider uppercase">
                {cloudServicesData.platforms.map((plat) => {
                  const isActive = activeCloudTab === plat.id;
                  return (
                    <button
                      key={plat.id}
                      onClick={() => setActiveCloudTab(plat.id)}
                      className={`flex-1 py-4 px-3 text-center transition-colors ${
                        isActive
                          ? "bg-[#001875] text-white border-b-2 border-[#ff3a18]"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {plat.title}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Body */}
              <div className="p-8 sm:p-10 space-y-4">
                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
                  {cloudServicesData.platforms.find(p => p.id === activeCloudTab)?.content}
                </p>

                <div className="pt-2">
                  <Link
                    href={activeCloudTab === "oci" ? "/oci-services" : "/cloud-services"}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff451a] hover:text-white transition-colors uppercase tracking-wider"
                  >
                    <span>View Cloud Architecture Details →</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
