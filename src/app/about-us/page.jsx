"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star, Shield, Award, CheckCircle, FileText, Globe } from "lucide-react";

export default function AboutPage() {
  const testimonials = [
    {
      quote:
        "I have been an ApexHostPro customer since 2015. It is a very stable, reliable, and fast platform. The support is excellent and very timely. It is always updated to the latest versions. In ApexHostPro we have hosted all our systems and we are extremely satisfied, I highly recommend them.",
      name: "Adolfo Blanco",
      company: "BLEICO, C.A., Venezuela",
    },
    {
      quote:
        "ApexHostPro's DedicatedDB gave our enterprise the extreme processing power and security isolation we needed. Their team executed our migration in record time with zero downtime. Phenomenal service!",
      name: "GBI Solutions Team",
      company: "GBI Solutions, USA",
    },
    {
      quote:
        "Moving our healthcare clinical research databases to ApexHostPro was the best decision. HIPAA compliance, daily snapshots, and sub-10ms query execution across 14 international centers.",
      name: "Dr. Marcus Vance",
      company: "COR-LD Consortium, Germany",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

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
                  ABOUT US
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                  About ApexHostPro <br />
                  Cloud
                </h1>

                <p className="text-base sm:text-lg text-blue-100/90 max-w-lg leading-relaxed font-normal">
                  Empowering your applications with reliable, secure, and scalable cloud solutions.
                </p>

                <div className="pt-2">
                  <a
                    href="#iso-certificate"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-slate-900 font-extrabold text-xs tracking-wider uppercase hover:bg-slate-100 transition-all shadow-lg"
                  >
                    ISO 27001 CERTIFICATE
                  </a>
                </div>
              </div>

              {/* Right Column: Globe Graphic with 1000+ Customers (Screenshot 1) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
                  
                  {/* Four-point Sparkle Stars */}
                  {/* Top Left Sparkle */}
                  <div className="absolute -top-4 left-6 z-20 animate-pulse">
                    <svg className="w-10 h-10 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                  {/* Center Left Sparkle */}
                  <div className="absolute top-16 -left-2 z-20">
                    <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                  {/* Top Right Sparkle */}
                  <div className="absolute top-2 right-10 z-20">
                    <svg className="w-7 h-7 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>

                  {/* 3D Stylized Red Globe */}
                  <div className="w-full h-full rounded-full bg-[#ff3a18] relative overflow-hidden shadow-2xl flex items-center justify-center">
                    {/* Continental map silhouettes in white */}
                    <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 200 200" fill="white">
                      {/* Americas & Europe continent outlines */}
                      <path d="M30 60 C 45 45, 70 50, 75 70 C 80 85, 60 110, 50 130 C 40 145, 30 160, 45 175 C 35 180, 20 160, 25 130 C 15 100, 20 75, 30 60 Z" />
                      <path d="M110 40 C 130 30, 155 45, 170 60 C 180 80, 160 100, 150 120 C 140 140, 160 160, 140 175 C 125 160, 120 130, 125 100 C 105 85, 95 60, 110 40 Z" />
                      {/* Latitude & Longitude globe grid lines */}
                      <ellipse cx="100" cy="100" rx="98" ry="98" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
                      <ellipse cx="100" cy="100" rx="60" ry="98" fill="none" stroke="white" strokeWidth="1.5" opacity="0.25" />
                      <ellipse cx="100" cy="100" rx="98" ry="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.25" />
                      <line x1="2" y1="100" x2="198" y2="100" stroke="white" strokeWidth="1.5" opacity="0.3" />
                    </svg>

                    {/* Gradient spherical lighting highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/40 via-transparent to-white/30 pointer-events-none" />

                    {/* Bold Overlay Text inside Globe */}
                    <div className="relative z-10 text-center px-4">
                      <div className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                        Trusted by
                      </div>
                      <div className="text-5xl sm:text-6xl font-black text-white tracking-tighter leading-none my-1">
                        1000+
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                        Customers
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: ABOUT OUR STORY (SCREENSHOT 2) */}
        {/* ========================================================= */}
        <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading & ISO/Oracle Badges */}
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  About Our <br />
                  Story
                </h2>

                <div className="flex items-center gap-4 flex-wrap">
                  {/* ISO 27001 Badge */}
                  <div className="flex items-center gap-3 px-5 py-3 rounded-[18px] bg-[#001a75] text-white shadow-sm">
                    <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-blue-200">CERTIFIED</div>
                      <div className="text-xs font-black tracking-tight">ISO 27001: 2022</div>
                    </div>
                  </div>

                  {/* Oracle Partner Badge */}
                  <div className="px-5 py-3.5 rounded-[18px] bg-[#ff3a18] text-white shadow-sm leading-tight">
                    <div className="text-[10px] font-black uppercase tracking-wider text-red-100">AUTHORIZED</div>
                    <div className="text-xs font-black tracking-wider uppercase">ORACLE PARTNER</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Story Copy */}
              <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                <p>
                  Established in 2008, ApexHostPro (ISO 27001:2022) is an{" "}
                  <strong className="font-bold text-[#ff3a18]">
                    Oracle APEX Cloud Hosting
                  </strong>{" "}
                  Company providing diverse and customized hosting solutions for its clients. ApexHostPro&apos;s expertise, commitment, and subsequent benefits for its clients enabled the hosting company to quickly expand its operations. ApexHostPro distinguishes itself through its commitment to reliability, ensuring 99.99% uptime, and providing 24/7 support to its customers. Today, ApexHostPro has an incredible clientele of hundreds of highly satisfied and growing businesses across 85+ countries.
                </p>

                <p>
                  ApexHostPro is ever mindful of the financial implications of our hosting solutions. This deliberation and efficiency of ApexHostPro&apos;s principals lend themselves to the cost-effectiveness of the company&apos;s{" "}
                  <strong className="font-bold text-[#ff3a18]">
                    Oracle APEX Hosting
                  </strong>. The company&apos;s versatility makes it highly capable of providing a wide range of hosting services, from hosting small applications to large-scale applications with GBs of data.
                </p>

                <div className="pt-2">
                  <Link
                    href="/pricing"
                    className="red-underline-link text-xs font-black uppercase tracking-wider"
                  >
                    VIEW ALL SOLUTIONS
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: COMPANY PROFILE BANNER (SCREENSHOT 3) */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[40px] sm:rounded-[48px] bg-[#001768] text-white p-8 sm:p-14 overflow-hidden relative shadow-xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left text column */}
                <div className="lg:col-span-7 space-y-5">
                  <span className="text-xs font-black tracking-widest text-blue-300 uppercase">
                    OUR PROFILE
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    ApexHostPro Company <br />
                    Profile
                  </h2>

                  <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl font-normal">
                    Explore the ApexHostPro Company Profile to discover our services and expertise. We offer comprehensive solutions tailored to your needs, delivering exceptional customer support and ensuring your satisfaction.
                  </p>

                  <div className="pt-3">
                    <a
                      href="/pricing"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#001768] font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-md"
                    >
                      COMPANY PROFILE
                    </a>
                  </div>
                </div>

                {/* Right Folder Graphic Illustration */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Red Organic Shape Backdrop */}
                    <div className="absolute inset-0 bg-[#ff3a18] rounded-[36px] rotate-3 transform scale-95 shadow-lg" />

                    {/* Blue & White Folder Mockup */}
                    <div className="relative z-10 w-48 h-56 bg-white rounded-2xl shadow-2xl p-4 flex flex-col justify-between border border-slate-200">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <span className="text-[10px] font-black tracking-tight text-slate-900 uppercase">
                            Company Profile
                          </span>
                          <span className="text-[9px] font-bold text-[#ff3a18]">ApexHostPro</span>
                        </div>
                        <div className="h-2 w-28 bg-[#001768] rounded-full" />
                        <div className="h-1.5 w-36 bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-32 bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-24 bg-slate-200 rounded-full" />
                      </div>

                      {/* Folder Front Flap */}
                      <div className="h-14 bg-[#001768] rounded-xl flex items-center justify-center text-white text-[10px] font-bold tracking-wider uppercase">
                        ApexHostPro 2026
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: WHAT WE DO, EXPERTS, DATA CENTER (SCREENSHOT 4) */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Row 1: What We Do */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-14">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  What We Do
                </h2>
              </div>
              <div className="lg:col-span-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  ApexHostPro provides managed Oracle APEX hosting solutions — including Shared, DedicatedDB, and CloudDB hosting — along with multi-cloud services across OCI, AWS, and Azure. We also offer proprietary tools like ApexPrint and ApexProtect, backed by 24/7 support and 99.99% uptime.
                </p>
              </div>
            </div>

            {/* Row 2: About Our Experts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-14">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  About Our Experts
                </h2>
              </div>
              <div className="lg:col-span-8 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  ApexHostPro employs and maintains qualified, experienced, and committed application hosting professionals in the industry. Seasoned team leaders and project managers lead the enterprising experts at ApexHostPro, getting the best work out of our application hosting every day.
                </p>
              </div>
            </div>

            {/* Row 3: About Our Data Center */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  About Our Data Center
                </h2>
              </div>
              <div className="lg:col-span-8 text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                <p>
                  ApexHostPro hosts state-of-the-art data centers that act as the robust and reliable command and control base needed for premium hosting and related support services. Qualified and well-managed teams maintain the data center, enabling the hosting, and support talent at ApexHostPro to deliver their best work for the clients and their projects. We have{" "}
                  <strong className="text-[#ff3a18] font-bold">Shared servers</strong> in USA, UK, Germany, Australia, Saudi Arabia, and Brazil.
                </p>

                <p>
                  Our <strong className="text-[#ff3a18] font-bold">Dedicated Servers</strong> in USA, Germany, Singapore, Australia, Brazil, Saudi Arabia, UAE, UK, and South Africa.
                </p>

                <p>
                  Our <strong className="text-[#ff3a18] font-bold">CloudDB Servers</strong> in USA, Brazil, UK, Germany, Australia, Saudi Arabia, UAE, South Africa, and Singapore.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: CLIENTS & TESTIMONIAL CARD (SCREENSHOT 5) */}
        {/* ========================================================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            
            {/* Our Clients Header & Logos Bar */}
            <div className="space-y-6">
              <div className="text-xs font-black tracking-widest text-slate-900 uppercase">
                OUR <span className="font-bold">CLIENTS</span>
              </div>

              {/* Logos row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center pt-2">
                {[
                  { name: "ClivSolution", subtitle: "Consulting" },
                  { name: "Asoftpage", subtitle: "Software" },
                  { name: "Absolute", subtitle: "TECHNOLOGIES" },
                  { name: "Quipment", subtitle: "Your Smart Partner" },
                  { name: "Vehicentro", subtitle: "Fleet Systems" },
                  { name: "LM SYSTEMS", subtitle: "Enterprise" },
                ].map((cli, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-sm font-black text-slate-800 tracking-tight">
                      {cli.name}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {cli.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card (Screenshot 5) */}
            <div className="rounded-[40px] sm:rounded-[48px] bg-slate-50 border border-slate-200/80 p-8 sm:p-14 relative overflow-hidden">
              
              {/* Dotted decorative curved arrow in background */}
              <svg
                className="absolute right-12 top-10 w-72 h-44 text-slate-300 pointer-events-none hidden md:block"
                viewBox="0 0 200 120"
                fill="none"
              >
                <path
                  d="M 10 10 C 80 50, 150 20, 180 110"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <polygon points="180,110 174,102 186,104" fill="currentColor" />
              </svg>

              <div className="max-w-3xl space-y-6 relative z-10">
                {/* Red Quotation Mark */}
                <div className="text-[#ff3a18] text-6xl font-serif font-black leading-none -mb-3 select-none">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal italic">
                  &ldquo;{testimonials[currentTestimonialIndex].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-2">
                  <div className="text-sm font-extrabold text-slate-900">
                    {testimonials[currentTestimonialIndex].name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {testimonials[currentTestimonialIndex].company}
                  </div>
                </div>

                {/* Card Controls & Rating */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  {/* Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous Testimonial"
                      className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 hover:text-[#00208b] transition-colors shadow-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next Testimonial"
                      className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 hover:text-[#00208b] transition-colors shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Rating Stars & Clients Count */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[#ff3a18]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-[#00208b] tracking-wider uppercase">
                      1000+ Clients
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
