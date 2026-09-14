import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Cloud, Layers, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Microsoft Azure Cloud Services for Oracle APEX | ApexHostPro",
  description: "Enterprise Microsoft Azure and Oracle Database@Azure solutions: seamless hybrid cloud connectivity, Power BI integration, and enterprise Azure AD single sign-on for APEX.",
};

export default function AzureCloudServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ENTERPRISE CLOUD INTEGRATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Microsoft Azure Cloud Services for Oracle
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Maximize your Microsoft investments. Connect Oracle Database@Azure, configure Entra ID (Azure AD) Single Sign-On, and build powerful enterprise APEX portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Oracle Database@Azure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Run native OCI database services directly inside Microsoft Azure data centers with sub-2ms network latency to Azure application tiers.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Microsoft Entra ID (Azure AD) SSO</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enable turnkey SAML 2.0 and OpenID Connect single sign-on for your APEX applications, enforcing corporate Multi-Factor Authentication (MFA) and conditional access policies.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Power BI & Azure Synapse Pipelines</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Extract, transform, and stream real-time Oracle database transactions directly into Azure Power BI workspaces and analytics data lakes using high-speed ORDS REST endpoints.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
