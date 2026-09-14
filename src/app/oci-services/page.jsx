import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Oracle Cloud Infrastructure (OCI) Services | ApexHostPro",
  description: "Specialized OCI migration, architecture sizing, Autonomous Database, and Exadata tuning from certified Oracle specialists.",
};

export default function OCIServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ORACLE CLOUD INFRASTRUCTURE
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Oracle Cloud (OCI) Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our Oracle Cloud Infrastructure services facilitate seamless migration from On-Premises systems and other Cloud platforms to Oracle Cloud Infrastructure. We specialize in designing, implementing, and managing cloud solutions tailored to your business needs.
            </p>
          </div>

          <div className="rounded-[32px] p-8 sm:p-10 border border-slate-200 bg-white shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              OCI Migration & Managed Competencies:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Zero-downtime cross-cloud database migration",
                "Autonomous Database (ATP / ADW) optimization",
                "Oracle Exadata cloud shape configuration",
                "Custom compute shape sizing (AMD & Ampere A1)",
                "Data Guard standby replication across regions",
                "OCI FastConnect dedicated private routing",
                "Managed patch management and hardening",
                "Continuous 24/7 DBA monitoring and SLA guarantees"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
              <Link href="/cloud-services" className="red-underline-link">
                BACK TO CLOUD SERVICES
              </Link>

              <Link
                href="/contact-us"
                className="px-6 py-3 rounded-full bg-[#00208b] text-white text-xs font-black uppercase tracking-wider hover:bg-[#001768]"
              >
                Consult OCI Architect
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
