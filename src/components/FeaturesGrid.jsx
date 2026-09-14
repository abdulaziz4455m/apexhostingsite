"use client";

import { 
  Sliders, 
  Globe2, 
  HardDrive, 
  TrendingUp, 
  Database, 
  Settings,
  Sparkles
} from "lucide-react";
import { coreFeatures } from "@/data/siteData";
import ContactForm from "./ContactForm";

export default function FeaturesGrid() {
  const getFeatureIcon = (idx) => {
    switch(idx) {
      case 0: return <Sliders className="w-5 h-5 text-[#ff3a18]" />;
      case 1: return <Globe2 className="w-5 h-5 text-[#ff3a18]" />;
      case 2: return <HardDrive className="w-5 h-5 text-[#ff3a18]" />;
      case 3: return <TrendingUp className="w-5 h-5 text-[#ff3a18]" />;
      case 4: return <Database className="w-5 h-5 text-[#ff3a18]" />;
      case 5: return <Settings className="w-5 h-5 text-[#ff3a18]" />;
      default: return <Database className="w-5 h-5 text-[#ff3a18]" />;
    }
  };

  return (
    <section className="py-16 bg-white space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Deep Royal Blue Features Section (Matching Screenshot 5) */}
        <div className="rounded-[36px] bg-[#00147a] text-white p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] font-black tracking-widest text-slate-300 uppercase">
              OUR FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Discover our amazing features that make getting into your customers hassle-free now!
            </h2>
          </div>

          {/* 6 Rounded Outlined Pill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                  {getFeatureIcon(idx)}
                </div>

                <span className="text-sm font-bold text-white tracking-wide">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Card integrated with Formspree (xwlkgwbv) and WhatsApp 03048106662 */}
        <div id="contact">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
