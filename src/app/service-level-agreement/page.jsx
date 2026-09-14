import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Shield, Clock, Award, CheckCircle } from "lucide-react";

export const metadata = {
  title: "99.99% Service Level Agreement (SLA) | ApexHostPro",
  description: "ApexHostPro Service Level Agreement (SLA) guaranteeing 99.99% network and database uptime, 15-minute response times, and credit compensation schedule.",
};

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              RELIABILITY GUARANTEE
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Service Level Agreement (SLA)
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              At ApexHostPro, we guarantee our customers an industry-leading 99.99% network and database infrastructure availability.
            </p>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#00208b]">99.99%</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Uptime Guarantee</div>
            </div>
            <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-[#ff3a18]">&lt; 15 Mins</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Critical Response Time</div>
            </div>
            <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-black text-emerald-600">24/7/365</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Oracle DBA On-Duty</div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">1. Coverage and Scope</h2>
              <p>
                This SLA applies to all active ApexHostPro customers utilizing Shared Hosting, DedicatedDB, and CloudDB managed services. It covers network connectivity, hypervisor hardware availability, Oracle REST Data Services (ORDS) uptime, and physical datacenter power infrastructure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">2. Service Credit Schedule</h2>
              <p>
                If monthly uptime falls below our 99.99% threshold (excluding scheduled maintenance announced at least 48 hours in advance), customers are eligible for the following billing credits:
              </p>
              
              <div className="overflow-x-auto rounded-[20px] border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <tr>
                      <th className="p-4">Monthly Uptime Percentage</th>
                      <th className="p-4">Service Credit Granted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4">99.50% – 99.98%</td>
                      <td className="p-4 font-bold text-[#00208b]">10% of Monthly Fee</td>
                    </tr>
                    <tr>
                      <td className="p-4">99.00% – 99.49%</td>
                      <td className="p-4 font-bold text-[#00208b]">25% of Monthly Fee</td>
                    </tr>
                    <tr>
                      <td className="p-4">Below 99.00%</td>
                      <td className="p-4 font-bold text-[#ff3a18]">50% of Monthly Fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">3. Incident Reporting & Claims</h2>
              <p>
                To claim an SLA credit, submit a ticket to our 24/7 support desk or contact your designated DBA via WhatsApp at <a href="https://wa.me/923048106662" className="text-[#00208b] font-bold underline">03048106662</a> within thirty (30) days of the verified outage.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
