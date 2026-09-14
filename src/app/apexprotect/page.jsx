import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { Check, ShieldAlert } from "lucide-react";
import { apexProtectData } from "@/data/siteData";

export const metadata = {
  title: "ApexProtect – Managed Linux Server Security | ApexHostPro",
  description: "24/7 human-led SOC and proactive hardening for your critical Linux infrastructure. Enterprise-grade defense for $100 /server /month.",
};

export default function ApexProtectPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ABOUT CYBER SECURITY
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              ApexProtect – Managed Linux Server Security
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              24/7 human-led SOC and proactive hardening for your critical Linux infrastructure. 
              Enterprise-grade defense for <strong className="text-slate-900 font-bold">$100 /server /month</strong>.
            </p>
          </div>

          <div className="rounded-[32px] p-8 sm:p-10 border border-slate-200 bg-white shadow-sm space-y-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Flat Enterprise Pricing</span>
                <div className="text-4xl font-black text-slate-900">$100 <span className="text-sm font-medium text-slate-500">/ server / month</span></div>
              </div>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 rounded-full bg-[#00146b] text-white font-black text-xs uppercase tracking-wider hover:bg-[#001050] shadow-md transition-all"
              >
                Enroll Servers in ApexProtect
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
                Included Security Capabilities:
              </h2>
              <div className="space-y-3">
                {apexProtectData.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Multi-cloud badges */}
          <div className="p-6 rounded-[28px] bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Universal Platform Support
            </h3>
            <p className="text-xs text-slate-600">
              We deploy endpoint defense and SOC monitoring across On-Premises, Oracle Cloud (OCI), Amazon AWS, Microsoft Azure, Google Cloud (GCP), and Alibaba Cloud.
            </p>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
