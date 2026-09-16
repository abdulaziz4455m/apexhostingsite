"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Server, Cloud, Shield, CheckCircle2 } from "lucide-react";

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: HERO SECTION (SCREENSHOT 1) */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001768] via-[#001f85] to-[#000a3d] text-white py-20 lg:py-28">
          {/* Subtle curved wave background glow */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[120px] rounded-full" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00208b]/40 blur-[100px] rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black tracking-[0.25em] text-blue-200 uppercase">
                  CLOUD SERVICES
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                  Managed Cloud <br />
                  Services &amp; <br />
                  Solutions
                </h1>

                <p className="text-base sm:text-lg text-blue-100/90 max-w-lg leading-relaxed font-normal">
                  Explore Scalable Solutions tailored to Develop broad capabilities and ensure Affordability, designed to Enhance your Business Growth.
                </p>

                <div className="pt-2">
                  <a
                    href="#our-services"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-slate-900 font-extrabold text-xs tracking-wider uppercase hover:bg-slate-100 transition-all shadow-lg"
                  >
                    OUR SERVICES
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Server Rack with Halftone & Sparkles (Screenshot 1) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
                  
                  {/* Halftone Orange/Red Dots Circle Backdrop */}
                  <div className="absolute w-72 h-72 rounded-full overflow-hidden opacity-85 flex items-center justify-center">
                    <svg className="w-full h-full text-[#ff3a18]" viewBox="0 0 100 100" fill="currentColor">
                      <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                        <circle cx="4" cy="4" r="2.5" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#dotPattern)" />
                    </svg>
                  </div>

                  {/* Stylized White Letter K Structure */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-white/95 filter drop-shadow-2xl">
                      <path
                        d="M 40 20 L 70 20 L 70 180 L 40 180 Z M 70 100 L 140 20 L 175 20 L 95 105 L 180 180 L 140 180 L 70 115 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* 3D Realistic Enterprise Server Rack in the Center */}
                  <div className="relative z-10 w-44 h-72 sm:w-48 sm:h-80 bg-slate-950 rounded-2xl border-2 border-slate-700 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
                    {/* Server rack handles and top vent */}
                    <div className="h-4 bg-slate-900 rounded-lg flex items-center justify-between px-2 border-b border-slate-800">
                      <div className="w-2 h-1 bg-emerald-500 rounded-full animate-ping" />
                      <div className="w-2 h-1 bg-blue-500 rounded-full" />
                      <div className="w-2 h-1 bg-amber-500 rounded-full" />
                    </div>

                    {/* Server units (Blades) */}
                    <div className="space-y-1.5 flex-1 py-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="h-9 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 p-1.5 flex items-center justify-between shadow-inner"
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <div className="w-6 h-1 bg-slate-700 rounded-full" />
                          </div>
                          {/* Vent perforations */}
                          <div className="flex gap-0.5 opacity-40">
                            {[...Array(12)].map((_, j) => (
                              <div key={j} className="w-0.5 h-4 bg-slate-300 rounded-full" />
                            ))}
                          </div>
                          <div className="text-[7px] font-mono text-slate-400">U{i + 1}</div>
                        </div>
                      ))}
                    </div>

                    {/* Cloud steam overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 pointer-events-none rounded-2xl" />
                  </div>

                  {/* 4-Point Red & White Sparkle Stars */}
                  <div className="absolute top-12 right-6 z-20 animate-pulse">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-16 right-10 z-20">
                    <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                  <div className="absolute top-24 -left-2 z-20">
                    <svg className="w-7 h-7 text-[#ff3a18]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: ABOUT CLOUD SERVICES (SCREENSHOT 2) */}
        {/* ========================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
                  ABOUT <span className="font-bold text-[#ff3a18]">CLOUD SERVICES</span>
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Cloud Services That Drive Scalability and Propel Growth
                </h2>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                <p>
                  Leverage affordable managed cloud services to drive business growth and scalability. At ApexHostPro, our customized cloud solutions optimize performance, reduce costs, and provide unmatched scalability. Whether you are building an enterprise multi-cloud architecture or seeking reliable hosting, our experts deliver end-to-end support across Oracle Cloud Infrastructure, AWS, and Azure.
                </p>

                <div className="pt-2">
                  <a
                    href="https://meet.brevo.com/ApexHost-cloud/ApexHost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="red-underline-link text-xs font-black uppercase tracking-wider"
                  >
                    SCHEDULE YOUR CONSULTATION TODAY
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: MAXIMIZE GROWTH BLUE BANNER (SCREENSHOT 2) */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-20 bg-[#001768] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Maximize Growth with <br />
                  Cloud Services.
                </h2>
              </div>

              <div className="lg:col-span-7 text-blue-100/90 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Our Affordable Managed Cloud Services offer end-to-end solutions across Oracle Cloud Infrastructure, AWS, and Azure. We empower businesses to achieve seamless integration, scalability, and performance optimization. Whether you&apos;re leveraging Oracle&apos;s robust infrastructure, AWS&apos;s global reach, or Azure&apos;s intelligent services, our expertise ensures your cloud strategy is tailored, efficient, and aligned with your unique business goals.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: FIND THE RIGHT CLOUD SOLUTION (SCREENSHOTS 3, 4, 5) */}
        {/* ========================================================= */}
        <section id="our-services" className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
                OUR <span className="font-bold text-[#ff3a18]">SERVICES</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Find the Right Cloud Solution for Your Business
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Unlock the potential of our Affordable Managed Cloud Services and Solutions; Develop broad capabilities, Scalability, and Performance across Oracle Cloud Infrastructure, AWS, and Azure with tailored Multi-Cloud Solutions.
              </p>
            </div>

            {/* Alternating Cloud Solutions */}
            <div className="space-y-12">
              
              {/* Card 1: Oracle Cloud (OCI) */}
              <div className="rounded-[40px] border border-slate-200 bg-white p-8 sm:p-14 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-7 space-y-5">
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      Oracle Cloud (OCI)
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Our Oracle Cloud Infrastructure services facilitate seamless migration from On-Premises systems and other Cloud platforms to Oracle Cloud Infrastructure. We specialize in designing, implementing, and managing cloud solutions tailored to your business needs. Enhance productivity, adaptability, and security with our comprehensive OCI expertise, ensuring a smooth transition and optimized performance in the cloud.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/oci-services"
                        className="red-underline-link text-xs font-black uppercase tracking-wider"
                      >
                        VIEW ALL SOLUTIONS
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="p-8 rounded-[32px] bg-red-50/70 border border-red-100 flex flex-col items-center justify-center text-center max-w-sm w-full">
                      <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#ff3a18] uppercase">
                        ORACLE
                      </div>
                      <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#ff3a18] uppercase -mt-1">
                        CLOUD
                      </div>
                      <div className="text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-700 uppercase mt-2">
                        Infrastructure
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 2: Azure Cloud */}
              <div className="rounded-[40px] border border-slate-200 bg-white p-8 sm:p-14 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-7 space-y-5">
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      Azure Cloud
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Empower your business with Azure cloud implementation services. By leveraging Azure&apos;s extensive infrastructure, we help you achieve seamless cloud integration, modernize your applications, and ensure your secure cloud architecture meets your long-term strategic goals.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/azure-cloud-services"
                        className="red-underline-link text-xs font-black uppercase tracking-wider"
                      >
                        VIEW ALL SOLUTIONS
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="p-8 rounded-[32px] bg-blue-50/70 border border-blue-100 flex items-center justify-center max-w-sm w-full">
                      {/* Stylized Azure A symbol */}
                      <svg className="w-32 h-32" viewBox="0 0 96 96" fill="none">
                        <path d="M48 10L14 74H36L48 48L60 74H82L48 10Z" fill="#0078D4" />
                        <path d="M48 48L32 82H68L56 58" fill="#50E6FF" opacity="0.8" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 3: AWS Cloud */}
              <div className="rounded-[40px] border border-slate-200 bg-white p-8 sm:p-14 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-7 space-y-5">
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      AWS Cloud
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Harness the global power of Amazon Web Services with our AWS managed cloud solutions. From optimizing your current cloud infrastructure to deploying secure, scalable environments, we ensure robust performance and cost efficiency in a competitive digital landscape.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/aws-cloud-services"
                        className="red-underline-link text-xs font-black uppercase tracking-wider"
                      >
                        VIEW ALL SOLUTIONS
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="p-8 rounded-[32px] bg-amber-50/70 border border-amber-100 flex flex-col items-center justify-center text-center max-w-sm w-full">
                      <div className="text-5xl font-black text-slate-900 tracking-tight">
                        aws
                      </div>
                      {/* Amazon curved smile arrow */}
                      <svg className="w-32 h-6 text-[#ff9900]" viewBox="0 0 100 20" fill="none">
                        <path d="M10 5 C 40 22, 65 22, 90 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        <polygon points="92,5 82,2 86,10" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
