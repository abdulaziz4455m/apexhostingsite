import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { siteMetadata } from "@/data/siteData";

export const metadata = {
  title: "Contact Us & WhatsApp | ApexHostPro",
  description: "Get in touch with ApexHostPro Oracle APEX team. Chat on WhatsApp 03048106662 or submit your inquiry.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Schedule Online Meeting or Contact Us
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Speak directly with an Oracle APEX Infrastructure Specialist. Chat via WhatsApp or send us an inquiry below.
            </p>
          </div>

          {/* Contact Direct Channels Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={siteMetadata.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-[28px] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">WhatsApp Direct</span>
                <span className="text-base font-black text-slate-900">{siteMetadata.whatsapp}</span>
              </div>
            </a>

            <a
              href="tel:+17186184560"
              className="p-6 rounded-[28px] bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00208b] text-white flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">US Phone Line</span>
                <span className="text-base font-black text-slate-900">{siteMetadata.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${siteMetadata.email}`}
              className="p-6 rounded-[28px] bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ff3a18] text-white flex items-center justify-center shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Sales Email</span>
                <span className="text-sm font-black text-slate-900">{siteMetadata.email}</span>
              </div>
            </a>
          </div>

          {/* Formspree Form Integration */}
          <div>
            <ContactForm />
          </div>

          {/* Offices Grid */}
          <div className="rounded-[32px] p-8 bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Global Datacenter Operations & Headquarters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
              {siteMetadata.locations.map((loc, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#ff3a18]" />
                    <span>{loc.title}</span>
                  </div>
                  <p className="text-slate-600 pl-5">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
