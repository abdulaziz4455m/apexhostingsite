import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ShieldAlert, Server, Activity, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export const metadata = {
  title: "Oracle Cloud High Availability & Disaster Recovery Services | ApexHostPro",
  description: "Enterprise Oracle Cloud High Availability (HA) solutions: Active Data Guard, Real Application Clusters (RAC), multi-region disaster recovery, and 99.999% maximum availability.",
};

export default function HighAvailabilityPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              MAXIMUM AVAILABILITY ARCHITECTURE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Oracle Cloud High Availability & Disaster Recovery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Eliminate costly business outages. Architect active-active clustering, real-time synchronous standby replication, and automated multi-region disaster recovery.
            </p>
          </div>

          {/* Core HA Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Active Data Guard</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maintain an open read-only standby database that offloads reporting and APEX read workloads while syncing real-time transactions with 0-second data loss (RPO 0).
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Oracle RAC Clustering</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Harness Oracle Real Application Clusters across multi-node compute instances with transparent application failover (TAF) if any server undergoes hardware maintenance.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Multi-Region Failover</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deploy cross-continental hot standby sites across North America and Europe with automated DNS health-checks that reroute web traffic within 30 seconds of an outage.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
