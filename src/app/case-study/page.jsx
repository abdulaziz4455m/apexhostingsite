import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, TrendingUp } from "lucide-react";
import { caseStudiesList } from "@/data/sitemapData";

export const metadata = {
  title: "Client Case Studies & Customer Success Stories | ApexHostPro",
  description: "Read how global enterprises, healthcare networks, and startups scaled on ApexHostPro Oracle APEX hosting.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              PROVEN ENTERPRISE RESULTS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Case Studies & Success Stories
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Discover how leading healthcare researchers, logistics providers, and financial institutions accelerate mission-critical Oracle APEX deployments with ApexHostPro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesList.map((item) => (
              <div
                key={item.slug}
                className="rounded-[32px] p-7 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#00208b]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-[#00208b]" />
                      {item.industry}
                    </span>
                    <span className="text-[11px] font-bold text-[#ff3a18]">
                      {item.client}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-slate-900 group-hover:text-[#00208b] transition-colors leading-snug">
                    <Link href={`/case-study/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>

                  <div className="p-3.5 rounded-[18px] bg-blue-50/60 border border-blue-100 flex items-start gap-2 text-xs font-bold text-[#00208b]">
                    <TrendingUp className="w-4 h-4 shrink-0 text-[#ff3a18] mt-0.5" />
                    <span>{item.outcome}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={`/case-study/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-[#00208b] group-hover:translate-x-1 transition-transform"
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="rounded-[36px] bg-[#00208b] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Ready to build your success story?</h3>
              <p className="text-sm text-blue-200 max-w-lg">
                Speak directly with an Oracle APEX Cloud architect today. We provide zero-downtime migrations and guaranteed performance SLAs.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-full bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
              >
                Get Started Today
              </Link>
              <a
                href="https://wa.me/923048106662"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
