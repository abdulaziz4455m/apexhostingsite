import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Sparkles, Bot, BrainCircuit, Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI Consultancy Solutions & Oracle 23ai AI Vector Search | ApexHostPro",
  description: "Enterprise AI consultancy for Oracle APEX: Generative AI, Retrieval-Augmented Generation (RAG), OML4Py predictive models, and autonomous AI agents in APEX 26.1.",
};

export default function AIConsultancyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              NEXT-GEN INTELLIGENCE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              AI Consultancy & Solutions for Oracle APEX
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Transform your business applications with the combined power of Oracle Database 23ai AI Vector Search, in-database LLMs, and autonomous agents in APEX 26.1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Autonomous AI Agents</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deploy conversational AI agents embedded directly inside Oracle APEX that understand user intent, query complex relational schemas, and execute business actions securely.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Enterprise RAG & 23ai Vectors</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Implement Retrieval-Augmented Generation (RAG) using Oracle Database 23ai native vector embeddings. Ask questions in natural language and receive grounded answers sourced directly from your company PDFs and databases.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">OML4Py Machine Learning</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Train predictive time-series models, fraud detection algorithms, and customer churn classifiers using Oracle Machine Learning for Python (OML4Py) directly on high-performance compute instances.
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
