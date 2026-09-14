import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import HostingPlans from "@/components/HostingPlans";
import Link from "next/link";
import { Check, Server, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "Oracle APEX Hosting Solutions | ApexHostPro",
  description: "Explore our fully managed Oracle APEX 26.1 hosting plans: Shared, DedicatedDB, CloudDB, and On-Premise Support.",
};

export default function ApexHostingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1">
        {/* Page Top Banner */}
        <div className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ORACLE APEX 26.1 HOSTING
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Enterprise APEX Cloud Hosting
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Choose the exact architecture suited for your workload: from cost-effective SME shared tiers to fully isolated HIPAA-compliant dual-VM clusters.
            </p>
          </div>
        </div>

        {/* 4 Cards from Component */}
        <HostingPlans />

        {/* Technical Architecture Highlights */}
        <div className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Included with Every ApexHostPro Plan
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Built and maintained by senior certified Oracle DBAs and Linux kernel specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-[28px] bg-white border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#00208b]/10 text-[#00208b] flex items-center justify-center font-bold">
                  ⚡
                </div>
                <h3 className="font-extrabold text-base text-slate-900">Oracle APEX 26.1 + ORDS</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Always up to date with the newest release, featuring AI Vibe coding engines, vector search, and tuned JVM connection pools.
                </p>
              </div>

              <div className="p-6 rounded-[28px] bg-white border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#ff3a18]/10 text-[#ff3a18] flex items-center justify-center font-bold">
                  🔒
                </div>
                <h3 className="font-extrabold text-base text-slate-900">SQL Developer & REST Access</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct secure SSL/TLS port access for Oracle SQL Developer, VS Code Developer Tools, and custom ORDS RESTful endpoints.
                </p>
              </div>

              <div className="p-6 rounded-[28px] bg-white border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  🛡️
                </div>
                <h3 className="font-extrabold text-base text-slate-900">Sub-15m Technical Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  24/7/365 ticket response from real Oracle DBAs who resolve issues on average in less than 15 minutes worldwide.
                </p>
              </div>
            </div>

            <div className="text-center pt-10">
              <Link href="/contact-us" className="red-underline-link">
                HAVE CUSTOM REQUIREMENTS? TALK TO OUR ARCHITECTS
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
