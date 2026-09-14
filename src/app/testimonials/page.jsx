import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Star, Building2, Quote, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Client Testimonials & Customer Reviews | ApexHostPro",
  description: "Read verified reviews and testimonials from enterprise clients, developers, and IT directors who rely on ApexHostPro Oracle APEX cloud hosting.",
};

export default function TestimonialsPage() {
  const reviews = [
    {
      quote:
        "I have been an ApexHostPro customer since 2015. It is a very stable, reliable, and fast platform. The support is excellent and very timely. It is always updated to the latest versions. In ApexHostPro we have hosted all our systems and we are extremely satisfied, I highly recommend them.",
      author: "Adolfo Blanco",
      role: "CTO, BLEICO, C.A.",
      country: "Venezuela",
      plan: "DedicatedDB Tier",
    },
    {
      quote:
        "When our medical consortium needed a HIPAA-compliant Oracle APEX environment to consolidate data across 14 global clinical centers, ApexHostPro delivered beyond expectations. Sub-10ms query execution and 99.99% uptime!",
      author: "Dr. Marcus Vance",
      role: "Lead Systems Architect, COR-LD",
      country: "Germany",
      plan: "CloudDB Dual-VM",
    },
    {
      quote:
        "ApexHostPro's 24/7 DBA support is unmatched. Whenever we have complex ORDS tuning questions or need an urgent backup restore in the middle of the night, their team responds in under 10 minutes on WhatsApp.",
      author: "Tariq Al-Mansoor",
      role: "Head of Digital Transformation, Hadif IT",
      country: "Saudi Arabia",
      plan: "DedicatedDB Tier",
    },
    {
      quote:
        "We scaled our logistics SaaS from 50 to over 10,000 daily active users on ApexHostPro's hosting without a single second of unexpected downtime. Best price-to-performance ratio in the Oracle ecosystem.",
      author: "David Chen",
      role: "Founder, OneiFreight Logistics",
      country: "United States",
      plan: "High-Performance Shared",
    },
    {
      quote:
        "Migrating from our aging on-premise hardware to ApexHostPro saved our business over $80,000 annually in licensing and hardware overhead. Their migration engineers completed the entire transition over a weekend.",
      author: "Elena Rostova",
      role: "VP of Engineering, GBI Solutions",
      country: "United Kingdom",
      plan: "CloudDB Cluster",
    },
    {
      quote:
        "The new APEX 26.1 Vibe Coding and Vector Search environments were ready for us on day one. ApexHostPro is always two steps ahead of the curve.",
      author: "Carlos Mendez",
      role: "Senior APEX Consultant, Sotful Inc.",
      country: "Spain",
      plan: "Enterprise Dedicated",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Trusted by 1000+ Customers in 85+ Countries
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Read authentic feedback from CTOs, enterprise DBAs, and startup founders running production Oracle APEX applications on our cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#00208b]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#ff3a18]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      {rev.country}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic font-normal">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-slate-900">{rev.author}</div>
                    <div className="text-xs text-slate-500">{rev.role}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[10px] font-bold text-[#00208b]">
                    {rev.plan}
                  </span>
                </div>
              </div>
            ))}
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
