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
          
          {/* Brand & Summary Column */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo theme={isBlue ? "dark" : "light"} />
            
            <p className={`text-xs ${isBlue ? "text-slate-300" : "text-slate-500"} leading-relaxed font-normal max-w-sm`}>
              <strong>{siteMetadata.brandName}</strong> is Pakistan&apos;s leading Oracle APEX Cloud Hosting company providing high-performance, secure, and cost-effective hosting in Pakistani Rupees (PKR).
            </p>

            {/* Payment Methods Badge for Pakistan */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#ff3a18] block">
                Pakistani Payment Methods
              </span>
              <p className="text-[11px] text-slate-300">
                Raast Instant, 1Link, Bank Transfer (Meezan, HBL, Alfalah), JazzCash, EasyPaisa &amp; PayPak.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2 text-base">
              {[
                { name: "Facebook", icon: "f", url: siteMetadata.socials.facebook },
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

          {/* Hosting Solutions Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isBlue ? "text-white" : "text-slate-900"}`}>
              HOSTING TIERS
            </h4>
            <ul className={`space-y-2.5 text-xs ${isBlue ? "text-slate-300" : "text-slate-600"}`}>
              <li><Link href="/about-us" className="hover:text-[#ff3a18] transition-colors">About Us</Link></li>
              <li><Link href="/apex-hosting" className="hover:text-[#ff3a18] transition-colors">All APEX Hosting</Link></li>
              <li><Link href="/apex-shared-hosting" className="hover:text-[#ff3a18] transition-colors">Shared Hosting (from Rs. 3,900)</Link></li>
              <li><Link href="/apex-dedicated-hosting" className="hover:text-[#ff3a18] transition-colors">DedicatedDB (from Rs. 23,500)</Link></li>
              <li><Link href="/oracle-apex-clouddb" className="hover:text-[#ff3a18] transition-colors">CloudDB High Availability</Link></li>
              <li><Link href="/ApexHost-add-ons" className="hover:text-[#ff3a18] transition-colors">Hosting Add-ons</Link></li>
              <li><Link href="/pricing" className="hover:text-[#ff3a18] transition-colors">Pricing in PKR</Link></li>
            </ul>
          </div>

          {/* Cloud & Enterprise Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isBlue ? "text-white" : "text-slate-900"}`}>
              ENTERPRISE SERVICES
            </h4>
            <ul className={`space-y-2.5 text-xs ${isBlue ? "text-slate-300" : "text-slate-600"}`}>
              <li><Link href="/cloud-services" className="hover:text-[#ff3a18] transition-colors">Managed Cloud Services</Link></li>
              <li><Link href="/oci-services" className="hover:text-[#ff3a18] transition-colors">Oracle Cloud (OCI) Services</Link></li>
              <li><Link href="/database-migration" className="hover:text-[#ff3a18] transition-colors">Zero-Downtime Migration</Link></li>
              <li><Link href="/oracle-cloud-high-availability-services" className="hover:text-[#ff3a18] transition-colors">High Availability &amp; Disaster Recovery</Link></li>
              <li><Link href="/native-mobile-apps" className="hover:text-[#ff3a18] transition-colors">Native Mobile Apps (iOS / Android)</Link></li>
              <li><Link href="/case-study" className="hover:text-[#ff3a18] transition-colors">Client Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#ff3a18] transition-colors">Customer Testimonials</Link></li>
              <li><Link href="/oracle-apex-cloud-hosting-faqs" className="hover:text-[#ff3a18] transition-colors">Hosting FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Pakistan Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isBlue ? "text-white" : "text-slate-900"}`}>
              CONTACT (PAKISTAN)
            </h4>
            <div className={`space-y-2.5 text-xs ${isBlue ? "text-slate-300" : "text-slate-600"}`}>
              <a href="tel:03048106662" className="flex items-center gap-2 hover:text-[#ff3a18] transition-colors font-bold">
                <Phone className="w-3.5 h-3.5 text-[#ff3a18] shrink-0" />
                <span>0304-8106662</span>
              </a>

              <a href={`mailto:${siteMetadata.email}`} className="flex items-center gap-2 hover:text-[#ff3a18] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#ff3a18] shrink-0" />
                <span>{siteMetadata.email}</span>
              </a>

              <a href={siteMetadata.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-black">
                <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>WhatsApp: {siteMetadata.whatsapp}</span>
              </a>

              <div className="pt-2 space-y-2 text-[11px]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff3a18] shrink-0 mt-0.5" />
                  <span>Skin Laser Complex, 6th Road, Rawalpindi / Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={`mt-14 pt-6 border-t ${isBlue ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500"} flex flex-col sm:flex-row items-center justify-between text-[11px]`}>
          <div>
            © {new Date().getFullYear()} {siteMetadata.brandName} Pakistan. All rights reserved. Built for high-velocity Oracle APEX workloads.
          </div>
          <div className="flex gap-4 mt-2 sm:mt-0 font-medium">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/service-level-agreement" className="hover:underline">99.99% SLA</Link>
            <Link href="/partner-program" className="hover:underline">Partner Program</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
