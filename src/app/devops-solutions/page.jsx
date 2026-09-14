import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { GitBranch, Terminal, Workflow, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "DevOps Solutions & CI/CD for Oracle APEX | ApexHostPro",
  description: "Modern CI/CD automation for Oracle APEX: Liquibase version control, APEXLang declarative pipelines, GitHub Actions integration, and zero-touch staging-to-prod deployments.",
};

export default function DevOpsSolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              AUTOMATION & CONTINUOUS DELIVERY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              DevOps Solutions for Oracle APEX
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Bring modern software engineering rigor to Oracle APEX. Implement automated Git branching, declarative schema migrations with Liquibase, and continuous integration pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Git & Liquibase Versioning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track every schema change, trigger update, and APEX component export in Git. Liquibase automatically manages forward and rollback migrations across DEV, QA, and PROD.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">GitHub Actions & GitLab CI</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trigger automated unit tests with utPLSQL, code quality scanning, and zero-touch remote application deployment whenever a pull request is merged into main.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">APEXLang & IaC Automation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Define Oracle Cloud infrastructure declaratively using Terraform and Ansible scripts. Spin up ephemeral staging test databases in under 3 minutes automatically.
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
