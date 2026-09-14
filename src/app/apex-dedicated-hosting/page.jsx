import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "DedicatedDB Hosting | ApexHostPro",
  description: "For high-performance needs. Exclusive Virtual Machine, complete root access, Oracle APEX 26.1, and HIPAA-compliant architecture.",
};

export default function DedicatedHostingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              HIGH-PERFORMANCE TIER
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              DedicatedDB Hosting
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Designed for mission-critical applications demanding exclusive computing power, complete root OS-level privileges, 
              and enterprise compliance guarantees.
            </p>
          </div>

          <div className="rounded-[32px] p-8 sm:p-10 border border-slate-200 bg-white shadow-sm space-y-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Starting at</span>
                <div className="text-4xl font-black text-slate-900">$149 <span className="text-sm font-medium text-slate-500">/ month</span></div>
              </div>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 rounded-full bg-[#00208b] text-white font-black text-xs uppercase tracking-wider hover:bg-[#001768] shadow-md transition-all"
              >
                Deploy Dedicated Server
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
                DedicatedDB Features & Capabilities:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Exclusive Virtual Machine (zero shared resources)",
                  "Complete root & OS level SSH access",
                  "Latest Oracle APEX 26.1 pre-installed",
                  "HIPAA-compliant hosting ready architecture",
                  "Full SQL Developer & SYSDBA administrative access",
                  "Dedicated IP address included",
                  "NVMe SSD high-IOPS storage",
                  "Custom SSL certificate and vanity domain mapping",
                  "24/7/365 priority DBA support (< 10 min SLA)",
                  "Automated daily snapshot and offsite backups"
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
              BACK TO HOSTING SOLUTIONS
            </Link>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
