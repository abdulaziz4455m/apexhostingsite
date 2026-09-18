'use client';

import { MessageSquare, Phone } from 'lucide-react';
import { siteMetadata } from '@/data/siteData';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:hidden pb-safe">
      <div className="flex h-14">
        <a 
          href={`tel:${siteMetadata.phone.replace(/[^0-9+]/g, '')}`} 
          className="flex-1 flex items-center justify-center gap-2 text-slate-700 font-bold text-sm border-r border-slate-200 active:bg-slate-50 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#ff3a18]" />
          <span>Call Us</span>
        </a>
        <a 
          href={siteMetadata.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#128c7e] text-white font-bold text-sm active:bg-[#075e54] transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
