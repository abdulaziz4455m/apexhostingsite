"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteMetadata } from "@/data/siteData";

export default function Footer({ theme = "blue" }) {
  const isBlue = theme === "blue";

  return (
    <footer className={`${
      isBlue 
        ? "bg-[#000858] text-white rounded-t-[40px]" 
        : "bg-slate-50 text-slate-600 border-t border-slate-200"
    } text-xs pt-16 pb-14 mt-12 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Summary Column (Screenshot 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo theme={isBlue ? "dark" : "light"} />
            
            <p className={`text-xs ${isBlue ? "text-slate-300" : "text-slate-500"} leading-relaxed font-normal max-w-sm`}>
              Established in 2008, <strong>{siteMetadata.brandName}</strong> is an Oracle APEX hosting company providing diverse and customized hosting solutions for its clients worldwide.
            </p>

            {/* Social Icons (Screenshot 4) */}
            <div className="flex gap-3 pt-2 text-base">
              {[
                { name: "Facebook", icon: "f", url: siteMetadata.socials.facebook },
                { name: "Instagram", icon: "📷", url: siteMetadata.socials.instagram },
                { name: "X-twitter", icon: "𝕏", url: siteMetadata.socials.twitter },
                { name: "LinkedIn", icon: "in", url: siteMetadata.socials.linkedin },
                { name: "YouTube", icon: "▶", url: siteMetadata.socials.youtube }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 ${
                    isBlue 
                      ? "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
                      : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  <span>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Column (Screenshot 4) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isBlue ? "text-white" : "text-slate-900"}`}>
              USEFUL LINKS
            </h4>
            <ul className={`space-y-2.5 text-xs ${isBlue ? "text-slate-300" : "text-slate-600"}`}>
              <li><Link href="/about-us" className="hover:text-[#ff3a18] transition-colors">About Us</Link></li>
              <li><Link href="/apex-shared-hosting" className="hover:text-[#ff3a18] transition-colors">APEX Shared Hosting</Link></li>
              <li><Link href="/apex-dedicated-hosting" className="hover:text-[#ff3a18] transition-colors">APEX DedicatedDB Hosting</Link></li>
              <li><Link href="/oracle-apex-clouddb" className="hover:text-[#ff3a18] transition-colors">APEX CloudDB Hosting</Link></li>
              <li><Link href="/complete-onpremise-support" className="hover:text-[#ff3a18] transition-colors">APEX On-Prem Support</Link></li>
              <li><Link href="/pricing" className="hover:text-[#ff3a18] transition-colors">MaxAPEX Add-ons</Link></li>
              <li><Link href="/" className="hover:text-[#ff3a18] transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Support Column (Screenshot 4) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isBlue ? "text-white" : "text-slate-900"}`}>
              SUPPORT
            </h4>
            <ul className={`space-y-2.5 text-xs ${isBlue ? "text-slate-300" : "text-slate-600"}`}>
              <li><Link href="/contact-us" className="hover:text-[#ff3a18] transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-[#ff3a18] transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing#faqs" className="hover:text-[#ff3a18] transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/" className="hover:text-[#ff3a18] transition-colors">Service Level Agreement</Link></li>
              <li><Link href="/" className="hover:text-[#ff3a18] transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-[#ff3a18] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-[#ff3a18] transition-colors">Partner Program</Link></li>
            </ul>
          </div>

          {/* Contact Us Column (Screenshot 4) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isBlue ? "text-white" : "text-slate-900"}`}>
              CONTACT US
            </h4>
            <div className={`space-y-2.5 text-xs ${isBlue ? "text-slate-300" : "text-slate-600"}`}>
              <a href="tel:+17186184560" className="flex items-center gap-2 hover:text-[#ff3a18] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#ff3a18] shrink-0" />
                <span>+1 718 618 4560</span>
              </a>

              <a href={`mailto:${siteMetadata.email}`} className="flex items-center gap-2 hover:text-[#ff3a18] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#ff3a18] shrink-0" />
                <span>{siteMetadata.email}</span>
              </a>

              <a href={siteMetadata.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold">
                <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>WhatsApp: {siteMetadata.whatsapp}</span>
              </a>

              <div className="pt-2 space-y-2 text-[11px]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff3a18] shrink-0 mt-0.5" />
                  <span>22450 Franz Road, Katy, TX, 77449 USA</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff3a18] shrink-0 mt-0.5" />
                  <span>101, Dominion Business Center – 1, Jinnah Ave, Bahria Town, Karachi</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={`mt-14 pt-6 border-t ${isBlue ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"} flex flex-col sm:flex-row items-center justify-between text-[11px]`}>
          <div>
            © {new Date().getFullYear()} {siteMetadata.brandName}. All rights reserved. Oracle and APEX are trademarks of Oracle Corporation.
          </div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/" className="hover:underline">Privacy Policy</Link>
            <Link href="/" className="hover:underline">Terms of Service</Link>
            <Link href="/" className="hover:underline">SLA</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
