'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 z-50 flex flex-col sm:flex-row justify-between items-center shadow-lg border-t border-slate-700">
      <div className="text-sm mb-4 sm:mb-0 max-w-4xl">
        We use cookies to improve your experience, analyze traffic, and serve tailored content. By continuing to use this site, you agree to our use of cookies.
      </div>
      <div className="flex gap-4 shrink-0">
        <a href="/privacy-policy" className="text-sm text-slate-300 hover:text-white underline py-2">Privacy Policy</a>
        <button
          onClick={handleAccept}
          className="bg-[#ff3a18] hover:bg-[#e02e0e] text-white px-6 py-2 rounded-md font-semibold transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
