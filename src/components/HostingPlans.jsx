"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { hostingSolutions } from "@/data/siteData";

export default function HostingPlans() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Matching Screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
              ABOUT APEXHOSTPRO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Secure, Cost-Effective <br />
              and Reliable
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5 lg:pt-5">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We take all the worry out of hosting your Oracle APEX applications online. 
              With our reliable APEX Hosting, your applications are always available to your users, 
              allowing you to focus on your business. Everything will be taken care of for you, 
              and our hosting servers are located around the globe.
            </p>

            <div>
              <Link href="/apex-hosting" className="red-underline-link">
                VIEW ALL SOLUTIONS
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid: Matching Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostingSolutions.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col justify-between rounded-[32px] p-7 bg-white border border-slate-200/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_-4px_rgba(0,32,139,0.08)] transition-all group"
            >
              <div>
                {/* Title with bottom divider line */}
                <div className="pb-4 border-b border-slate-200">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {solution.title}
                  </h3>
                </div>

                {/* Feature checklist with Red Checkmarks */}
                <div className="py-6 space-y-3.5">
                  {solution.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#ff3a18] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </div>
                      <span className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Red Underline Link */}
              <div className="pt-4 border-t border-slate-100">
                <Link href={solution.slug} className="red-underline-link">
                  VIEW MORE DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
