import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "APEX Shared Hosting | ApexHostPro",
  description: "Most cost-effective Oracle APEX hosting for SMEs and fast-paced development teams. Instant setup, APEX 26.1, SQL Developer access.",
};

export default function SharedHostingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              PLANS & SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Shared Hosting for Oracle APEX
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Ideal for SMEs, independent consultants, and agile development teams. 
              Our most cost-effective plan includes dedicated database schema isolation, Oracle APEX 26.1, and instant automated setup.
            </p>
          </div>

          <div className="rounded-[32px] p-8 sm:p-10 border border-slate-200 bg-white shadow-sm space-y-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Starting at</span>
                <div className="text-4xl font-black text-slate-900">$29 <span className="text-sm font-medium text-slate-500">/ month</span></div>
              </div>
              <Link
                href="/contact-us"
                className="px-8 py-3.5 rounded-full bg-[#00208b] text-white font-black text-xs uppercase tracking-wider hover:bg-[#001768] shadow-md transition-all"
              >
                Get Started with Shared Plan
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-900">
                What's Included in Shared Hosting:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Ideal for SMEs and rapid development",
                  "Most cost-effective hosting architecture",
                  "Direct SQL Developer & VS Code access",
                  "Latest Oracle APEX 26.1 with AI Vibe support",
                  "Instant 5-minute automated provisioning",
                  "Automated daily RMAN backups",
                  "Free Let's Encrypt SSL/TLS certificates",
                  "Sub-15 minute average ticket response SLA",
                  "Unmetered monthly bandwidth",
                  "Dedicated database schema isolation"
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
              COMPARE ALL APEX HOSTING TIERS
            </Link>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
