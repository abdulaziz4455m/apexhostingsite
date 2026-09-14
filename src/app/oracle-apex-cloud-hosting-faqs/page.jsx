"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { Plus, Minus, Search, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      q: "What is Oracle APEX Cloud Hosting?",
      a: "Oracle APEX Cloud Hosting is a fully managed cloud service engineered specifically to run Oracle Application Express (APEX) applications. ApexHostPro provisions the underlying Linux OS, enterprise Oracle Database (19c or 23ai), Oracle REST Data Services (ORDS), and automated daily backups so developers can focus solely on building and deploying applications."
    },
    {
      q: "Which versions of Oracle APEX and Database are supported?",
      a: "ApexHostPro supports all modern Oracle APEX releases, including the latest Oracle APEX 26.1 (with Vibe Coding and APEXLang AI features), APEX 24.2, 24.1, and legacy 21.x / 20.x editions. We support both Oracle Database 19c Enterprise Edition and Oracle Database 23ai (with AI Vector Search)."
    },
    {
      q: "What is the difference between Shared Hosting, DedicatedDB, and CloudDB?",
      a: "Shared Hosting places your APEX workspace inside a secured, resource-governed multi-tenant Oracle database starting at just $14/month—ideal for development, MVPs, and internal tools. DedicatedDB provisions an entire virtual or bare-metal server dedicated solely to your company with root OS access and dedicated CPU/RAM. CloudDB offers managed multi-VM high-availability clustering with automatic Data Guard failover."
    },
    {
      q: "Can I use my custom domain name with SSL certificates?",
      a: "Yes! All DedicatedDB, CloudDB, and upgraded Shared Hosting plans support vanity custom domains (e.g. app.yourcompany.com). We provide automated HTTP/2 Let's Encrypt SSL certificates that automatically renew every 60 days with zero downtime."
    },
    {
      q: "Can I connect using Oracle SQL Developer, VS Code, or DBeaver?",
      a: "Yes. All DedicatedDB and CloudDB packages include direct encrypted SQL*Net listener access (port 1521/2484) with TCPS SSL. You can connect your favorite desktop IDEs such as Oracle SQL Developer, Visual Studio Code (Oracle Developer Tools extension), DBeaver, or DataGrip directly."
    },
    {
      q: "How do automated backups and disaster recovery work?",
      a: "ApexHostPro performs automated full database snapshots every 24 hours with continuous archivelog shipping. Backups are replicated offsite to geographically distinct S3-compatible cloud object storage. In the event of catastrophic failure or accidental user data deletion, our DBAs can perform point-in-time recovery (PITR) to any minute in the last 14 days."
    },
    {
      q: "How does migration from on-premise or other hosts work?",
      a: "We provide 100% free, zero-downtime migration assistance. Our certified Oracle DBAs utilize Oracle Data Pump, schema exports, or live database replication to transfer your tables, packages, sequences, and APEX applications seamlessly without disrupting your business."
    },
    {
      q: "Are ORDS REST APIs and OAuth2 authentication supported?",
      a: "Yes. Oracle REST Data Services (ORDS) is fully configured out-of-the-box. You can develop RESTful web services, expose database tables via AutoREST, and secure endpoints using OAuth2 client credentials or basic auth."
    },
    {
      q: "Is there any long-term contract lock-in?",
      a: "No! All plans are billed on a flexible month-to-month basis with no setup fees. You can upgrade, downgrade, or cancel at any time. We also offer discounted annual and biennial billing options if you prefer upfront cost savings."
    }
  ];

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              GOT QUESTIONS?
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Oracle APEX Cloud Hosting FAQs
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Find instant answers to common questions about our managed Oracle APEX hosting, performance, database migrations, and support.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-[#00208b] focus:bg-white shadow-sm transition-all"
            />
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[24px] border transition-all ${
                    isOpen
                      ? "border-[#00208b] bg-slate-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-black text-slate-900 text-base sm:text-lg"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <Minus className="w-4 h-4 text-[#ff3a18]" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions banner */}
          <div className="rounded-[36px] bg-[#001768] text-white p-8 sm:p-12 text-center space-y-6">
            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl font-black">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-blue-200">
                Our Oracle Cloud architects are online right now. Chat with us directly on WhatsApp or submit a consultation request.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923048106662"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
              >
                Chat on WhatsApp (03048106662)
              </a>
              <Link
                href="/contact-us"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition-colors"
              >
                Submit a Ticket
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
