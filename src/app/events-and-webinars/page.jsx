import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Calendar, Video, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Events & Technical Webinars | ApexHostPro",
  description: "Join upcoming live webinars and watch on-demand technical deep dives on Oracle APEX 26.1, AI agents, 23ai AI Vector Search, and high-availability database architecture.",
};

export default function EventsWebinarsPage() {
  const webinars = [
    {
      title: "Building Autonomous AI Agents in Oracle APEX 26.1",
      date: "September 24, 2026",
      time: "2:00 PM EST / 7:00 PM GMT",
      status: "Upcoming Live Webinar",
      speaker: "Farhan Siddiqui — Lead Oracle Cloud Architect",
      desc: "Live step-by-step walkthrough connecting Oracle 23ai vector embeddings with APEX 26.1 native Vibe Coding assistants to automate internal company customer service.",
    },
    {
      title: "Zero-Downtime Migration from On-Premise to CloudDB",
      date: "August 18, 2026",
      time: "On-Demand Recording",
      status: "Recorded Session",
      speaker: "Adnan Malik — Principal DBA",
      desc: "Learn how to replicate multi-terabyte databases to high-performance managed cloud nodes with zero data loss and sub-minute cutover.",
    },
    {
      title: "Hardening ORDS: Security Best Practices for APEX_PUBLIC_USER",
      date: "July 12, 2026",
      time: "On-Demand Recording",
      status: "Recorded Session",
      speaker: "SOC Team — ApexProtect Engineers",
      desc: "A hands-on security workshop exploring connection pooling, secret rotation, WAF rule customization, and blocking SQL injection vectors.",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              KNOWLEDGE SHARING & COMMUNITY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Events & Technical Webinars
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Learn directly from certified Oracle DBAs and cloud engineers. Register for upcoming live sessions or watch our technical masterclasses on demand.
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((web, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#00208b]/40 transition-all space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
                  <span className={`px-3 py-1 rounded-full ${
                    web.status.includes("Upcoming")
                      ? "bg-red-50 text-[#ff3a18] border border-red-100"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {web.status}
                  </span>
                  <div className="flex items-center gap-3 text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {web.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {web.time}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  {web.title}
                </h2>

                <p className="text-xs font-bold text-[#00208b]">
                  {web.speaker}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {web.desc}
                </p>

                <div className="pt-2">
                  <a
                    href="https://meet.brevo.com/maxapex-cloud/maxapex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#ff3a18] hover:text-[#e02e0e] uppercase tracking-wider"
                  >
                    <span>Register / Watch Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
