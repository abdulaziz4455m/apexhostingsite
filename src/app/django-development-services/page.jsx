import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Code, Database, Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Django Development & Oracle Database Services | ApexHostPro",
  description: "Enterprise Python Django development powered by high-concurrency Oracle Databases: custom REST APIs, ORM tuning with python-oracledb, and scalable web platforms.",
};

export default function DjangoServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              FULL-STACK PYTHON & ORACLE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Django Development Services Powered by Oracle
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Combine the velocity and elegance of Python Django with the bulletproof transactional integrity and scalability of Oracle Database Enterprise Edition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Custom Django Web Platforms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We build scalable customer portals, API backends, and analytics applications utilizing modern Django 5.x, Django REST Framework, and asynchronous Celery task queues.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">High-Speed python-oracledb ORM</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect Django models directly to Oracle Database using thin or thick driver modes with tuned connection pooling, batch insert operations, and JSON Relational Duality views.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Unified APEX & Django Ecosystems</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Let your back-office employees use rapid Oracle APEX internal dashboards while external consumer users interact with a high-polish, custom-branded Python Django storefront.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
