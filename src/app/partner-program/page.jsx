import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Users, TrendingUp, DollarSign, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Partner & Agency Affiliate Program | ApexHostPro",
  description: "Join the ApexHostPro Partner Program. Earn recurring commissions, deliver high-performance Oracle APEX hosting to your clients, and access priority co-marketing.",
};

export default function PartnerProgramPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              GROW WITH APEXHOSTPRO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Partner with the Global Leader in Oracle APEX Cloud
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are an independent Oracle APEX consulting agency, a SaaS software vendor, or an IT systems integrator, our Partner Program empowers you to scale faster and earn substantial recurring revenue.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">20% Recurring Commission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Earn generous lifetime recurring commissions on every referred client instance, including Shared, DedicatedDB, and multi-cloud environments.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Dedicated DBA Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Get direct Slack and WhatsApp channels with our senior Oracle DBAs for priority troubleshooting, performance tuning, and architectural reviews.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Co-Marketing & Leads</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Feature your firm on our global partner directory, collaborate on joint case studies, and receive warm development inquiries from our customer base.
              </p>
            </div>
          </div>

          {/* Program Tiers */}
          <div className="rounded-[40px] border border-slate-200 p-8 sm:p-12 bg-white shadow-sm space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center">
              Partner Program Levels
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  tier: "Referral Partner",
                  clients: "1 - 5 Clients",
                  perk: "15% recurring commission + standard support",
                },
                {
                  tier: "Agency Certified",
                  clients: "6 - 20 Clients",
                  perk: "20% recurring commission + free staging server + WhatsApp DBA support",
                },
                {
                  tier: "Enterprise Strategic",
                  clients: "20+ Clients",
                  perk: "25% recurring commission + white-label client portal + custom SLA guarantees",
                },
              ].map((lvl, idx) => (
                <div key={idx} className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#ff3a18]">{lvl.tier}</span>
                  <div className="text-xl font-black text-slate-900">{lvl.clients}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{lvl.perk}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
