import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "On-Prem Support | ApexHostPro",
  description: "Supports your own servers. Keep full control, full installation support, managed upgrades, patches, and proactive/reactive plans.",
};

export default function OnPremSupportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              MANAGED INFRASTRUCTURE SUPPORT
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Complete On-Premise Support
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Keep full data sovereignty and physical control over your existing internal hardware or private cloud, 
              while ApexHostPro's certified Oracle specialists manage installation, patching, tuning, and monitoring.
            </p>
          </div>

          <div className="rounded-[32px] p-8 sm:p-10 border border-slate-200 bg-white shadow-sm space-y-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Pricing Model</span>
                <div className="text-3xl font-black text-slate-900">Custom SLA Plans</div>
              </div>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 rounded-full bg-[#00208b] text-white font-black text-xs uppercase tracking-wider hover:bg-[#001768] shadow-md transition-all"
              >
                Schedule On-Prem Consultation
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
                On-Premise Support Capabilities:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Supports your own physical or virtual servers",
                  "Keep 100% control of data and network security",
                  "Full Oracle APEX & ORDS installation support",
                  "Managed version upgrades and critical security patches",
                  "Proactive or reactive SLA maintenance plans",
                  "SQL execution and database performance tuning",
                  "Automated disaster recovery and backup audits",
                  "Direct escalation channel to senior Oracle DBAs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/apex-hosting" className="red-underline-link">
              VIEW ALL HOSTING SOLUTIONS
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
