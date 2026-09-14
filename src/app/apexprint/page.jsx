import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import { Move, Check } from "lucide-react";
import { apexPrintData } from "@/data/siteData";

export const metadata = {
  title: "ApexPrint – Oracle APEX Reporting Tool | ApexHostPro",
  description: "Pixel-perfect Oracle APEX reporting. Drag-and-drop designer with native APEX plugin to generate professional PDF, Excel, and Word reports effortlessly.",
};

export default function ApexPrintPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ORACLE APEX REPORTING PLUGIN
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {apexPrintData.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {apexPrintData.description}
            </p>
          </div>

          <div className="rounded-[32px] p-8 sm:p-10 border border-slate-200 bg-white shadow-sm space-y-8">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Why Developers Choose ApexPrint:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Intuitive visual drag-and-drop template designer",
                "Native Oracle APEX plugin with 1-click installation",
                "Generate pixel-perfect PDF, XLSX, DOCX, and HTML",
                "Built-in dynamic QR codes and Code-128 barcodes",
                "High-performance sub-second rendering engine",
                "Zero messy BI Publisher or Apache FOP configuration",
                "Direct SQL query and page item data binding",
                "Batch reporting and automated scheduled delivery"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
              <Link href="/" className="red-underline-link">
                RETURN TO HOME
              </Link>

              <Link
                href="/contact-us"
                className="px-8 py-3.5 rounded-full bg-[#00147a] text-white font-black text-xs uppercase tracking-wider hover:bg-[#00208b] shadow-md transition-all"
              >
                Request ApexPrint Demo
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
