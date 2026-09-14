import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Cloud, Server, Database, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "AWS Cloud Services for Oracle APEX & Databases | ApexHostPro",
  description: "Managed Amazon Web Services (AWS) solutions tailored for Oracle APEX workloads: Amazon RDS for Oracle, EC2 ORDS listeners, AWS Direct Connect, and cost optimization.",
};

export default function AWSCloudServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              MULTI-CLOUD EXPERTISE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              AWS Cloud Services for Oracle APEX
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Bridge the best of Amazon Web Services with the high-velocity development power of Oracle APEX. Fully managed, monitored, and optimized 24/7 by ApexHostPro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Amazon RDS for Oracle</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly provision, manage, and scale Oracle Database 19c and 21c on AWS RDS with automated Multi-AZ replication, point-in-time backups, and automated storage auto-scaling.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">EC2 & ECS ORDS Cluster</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Run containerized Oracle REST Data Services (ORDS) behind AWS Application Load Balancers (ALB) with auto-scaling to handle sudden surges in APEX web traffic effortlessly.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">AWS Direct Connect & Transit Gateway</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Establish dedicated, ultra-low latency private network lines between your on-premises data centers and AWS VPCs with enterprise encryption and 99.99% availability SLAs.
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
