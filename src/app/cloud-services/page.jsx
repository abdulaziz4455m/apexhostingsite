import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { Cloud, Check, ArrowRight } from "lucide-react";
import { cloudServicesData } from "@/data/siteData";

export const metadata = {
  title: "Managed Cloud Services | ApexHostPro",
  description: "Affordable Managed Cloud Services across Oracle Cloud Infrastructure, AWS, and Azure. Seamless migration and modern cloud architecture.",
};

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ABOUT CLOUD SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Managed Cloud Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {cloudServicesData.description}
            </p>
          </div>

          {/* 3 Cloud Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudServicesData.platforms.map((plat) => (
              <div
                key={plat.id}
                className="rounded-[32px] p-8 border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00208b]/10 text-[#00208b] flex items-center justify-center">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {plat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {plat.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={plat.id === "oci" ? "/oci-services" : "/contact-us"}
                    className="red-underline-link"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Migration Banner */}
          <div className="rounded-[36px] bg-[#00147a] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Migrate to Cloud with Zero Disruption
            </h2>
            <p className="text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Our specialized Oracle certified engineers handle everything: database schema export, network routing, 
              Data Guard replication, and cutover testing.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-slate-100 shadow-md transition-all"
              >
                Request Free Migration Assessment
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
