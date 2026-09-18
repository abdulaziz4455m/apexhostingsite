import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting ApexHostPro.',
  robots: { index: false, follow: true } // Don't index thank you pages
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#ff3a18] selection:text-white">
      <div className="bg-[#0022a8]">
        <Header transparent={false} />
      </div>

      <main className="flex-1 flex items-center justify-center py-20 px-4 bg-slate-50">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-[#e0ffe4] text-[#12b947] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Thank You!</h1>
          <p className="text-lg text-slate-600">
            We have received your message and will get back to you shortly.
          </p>
          <div className="pt-8 border-t border-slate-100">
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-[#ff3a18] text-white font-semibold rounded hover:bg-[#e02e0e] transition-colors w-full"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
