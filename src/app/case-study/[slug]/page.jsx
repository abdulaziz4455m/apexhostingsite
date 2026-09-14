import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Shield, Building2, TrendingUp, Check, Award } from "lucide-react";
import { caseStudiesList } from "@/data/sitemapData";

export async function generateStaticParams() {
  const params = [];
  caseStudiesList.forEach((cs) => {
    params.push({ slug: cs.slug });
    if (cs.altSlug) {
      params.push({ slug: cs.altSlug });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudiesList.find((c) => c.slug === slug || c.altSlug === slug);
  if (!study) return { title: "Case Study | ApexHostPro" };
  return {
    title: `${study.title} | Case Study | ApexHostPro`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = caseStudiesList.find((c) => c.slug === slug || c.altSlug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#00208b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          {/* Hero Details */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                {study.industry}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#ff3a18]">
                {study.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {study.title}
            </h1>

            {/* Key Outcome Highlight */}
            <div className="p-4 sm:p-5 rounded-[24px] bg-blue-50 border border-blue-200 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#ff3a18] shrink-0" />
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Key Business Outcome</span>
                <span className="text-base sm:text-lg font-black text-[#00208b]">{study.outcome}</span>
              </div>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[28px] border border-slate-200 bg-slate-50/50 space-y-3">
              <h3 className="text-sm font-black text-[#ff3a18] uppercase tracking-wider">The Challenge</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {study.challenge}
              </p>
            </div>

            <div className="p-7 rounded-[28px] border border-blue-200 bg-blue-50/30 space-y-3">
              <h3 className="text-sm font-black text-[#00208b] uppercase tracking-wider">The ApexHostPro Solution</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Measurable Results */}
          <div className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Measurable Results & Infrastructure Impact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-[20px] bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details */}
          <div className="p-8 rounded-[32px] bg-slate-900 text-white space-y-4">
            <div className="flex items-center gap-2 text-[#ff3a18] text-xs font-black uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Technology Stack & Architecture</span>
            </div>
            <h3 className="text-xl font-bold">Enterprise Cloud Architecture Details</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This deployment utilizes high-availability NVMe block volumes, redundant Oracle REST Data Services (ORDS) connection pooling, automated Oracle Data Guard failover, and continuous monitoring through the ApexProtect Security Operations Center.
            </p>
          </div>

          {/* Contact Section */}
          <div className="pt-8">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
