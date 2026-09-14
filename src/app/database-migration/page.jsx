import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight, Database, RefreshCw, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Zero-Downtime Oracle Database Migration Services | ApexHostPro",
  description: "Migrate your on-premise Oracle databases and APEX apps to high-performance cloud hosting with zero downtime, automated validation, and free expert DBA migration assistance.",
};

export default function DatabaseMigrationPage() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Architecture Assessment",
      desc: "Our senior Oracle DBAs analyze your existing schemas, database version, tablespaces, PL/SQL packages, and APEX dependencies to design a seamless cutover roadmap."
    },
    {
      step: "02",
      title: "Zero-Downtime Replication",
      desc: "Using Oracle Data Pump, GoldenGate, or continuous archivelog shipping, we replicate your live data to an isolated ApexHostPro staging node while your users stay active."
    },
    {
      step: "03",
      title: "Data Integrity & Performance Benchmarking",
      desc: "We perform automated row-count checksums, index rebuilding, and query latency validation to confirm that applications execute at least 2x to 5x faster."
    },
    {
      step: "04",
      title: "Instant Cutover & 24/7 Monitoring",
      desc: "DNS switchover is completed within seconds during your chosen maintenance window with zero transaction loss, followed by 30 days of complimentary performance tuning."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              SEAMLESS TRANSITION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Zero-Downtime Oracle Database Migration
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Escape legacy hardware bottlenecks and expensive licensing fees. Migrate your Oracle databases and APEX applications to ApexHostPro managed cloud with zero data loss.
            </p>
          </div>

          {/* Key Migration Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Zero Business Interruption</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your end-users and customers continue transacting on your existing systems until the final sub-minute cutover occurs.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">100% Data Integrity Guarantee</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bit-for-bit checksum validation across every table, LOB column, trigger, and database package before switching production traffic.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">100% Free Migration Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All migration labor, staging infrastructure, and DBA hours are completely complimentary when subscribing to any annual hosting tier.
              </p>
            </div>
          </div>

          {/* 4-Step Migration Roadmap */}
          <div className="rounded-[40px] border border-slate-200 bg-white p-8 sm:p-12 space-y-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
              Our Battle-Tested 4-Step Migration Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, i) => (
                <div key={i} className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-3xl font-black text-[#ff3a18]">{st.step}</div>
                  <h4 className="text-base font-black text-slate-900">{st.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
