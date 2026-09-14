import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import { Shield, Printer, Globe, Database, HardDrive, Cpu, Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "APEX Add-ons & Extensions | ApexHostPro",
  description: "Supercharge your Oracle APEX applications with high-performance add-ons: ApexPrint, ApexProtect, custom SSL domains, Redis caching, and extra NVMe storage.",
};

export default function AddOnsPage() {
  const addons = [
    {
      name: "ApexPrint Engine",
      price: "$29/mo",
      icon: Printer,
      color: "text-[#00208b]",
      desc: "Pixel-perfect PDF, Excel, and Word report generation natively from Oracle APEX with customizable templates, digital signatures, and barcoding.",
      link: "/apexprint",
    },
    {
      name: "ApexProtect 24/7 SOC",
      price: "$99/mo",
      icon: Shield,
      color: "text-[#ff3a18]",
      desc: "Enterprise Security Operations Center monitoring, automated threat defense, live kernel vulnerability patching, and WAF protection.",
      link: "/apexprotect",
    },
    {
      name: "Vanity Custom SSL Domain",
      price: "$10/mo",
      icon: Globe,
      color: "text-blue-600",
      desc: "Map your own branded domain (e.g. app.yourcompany.com) with automated HTTP/2 Let's Encrypt SSL renewal and zero certificate expirations.",
      link: "/contact-us",
    },
    {
      name: "Redis REST Caching",
      price: "$35/mo",
      icon: Zap,
      color: "text-amber-500",
      desc: "Accelerate high-frequency ORDS REST endpoints with in-memory Redis caching, dropping API latencies from 120ms to under 5ms.",
      link: "/contact-us",
    },
    {
      name: "Extra NVMe High-Speed Storage",
      price: "$15 / 50GB",
      icon: HardDrive,
      color: "text-emerald-600",
      desc: "Expand your database tablespaces with ultra-fast enterprise NVMe block volumes delivering up to 35,000 IOPS on demand.",
      link: "/pricing",
    },
    {
      name: "Dedicated Static IPv4 Address",
      price: "$12/mo",
      icon: Cpu,
      color: "text-purple-600",
      desc: "Whitelisted static IP address dedicated solely to your database server for strict corporate firewall integration and VPN tunneling.",
      link: "/contact-us",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              POWERFUL CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              APEX Hosting Add-ons & Extensions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enhance security, expand capacity, and streamline enterprise workflows with our purpose-built Oracle APEX extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addons.map((add, idx) => {
              const Icon = add.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#00208b]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${add.color}`} />
                      </div>
                      <span className="text-sm font-black text-[#00208b]">{add.price}</span>
                    </div>

                    <h2 className="text-xl font-black text-slate-900 group-hover:text-[#00208b] transition-colors">
                      {add.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {add.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      href={add.link}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#00208b] group-hover:translate-x-1 transition-transform"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need Custom Add-on */}
          <div className="rounded-[36px] bg-slate-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-black">Need a custom add-on or architecture?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                Our DBAs can install custom PL/SQL packages, Python environments, Java modules, or configure custom third-party integrations.
              </p>
            </div>
            <a
              href="https://wa.me/923048106662"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-black uppercase tracking-wider whitespace-nowrap transition-colors shadow-lg"
            >
              Talk with an Engineer
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
