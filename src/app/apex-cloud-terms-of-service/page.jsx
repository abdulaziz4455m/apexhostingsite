import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Terms of Service | ApexHostPro Cloud Hosting",
  description: "ApexHostPro Cloud Terms of Service, Acceptable Use Policy, billing terms, and resource quotas.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              LEGAL TERMS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 font-semibold">
              Effective Date: September 2026 | ApexHostPro Managed Services
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or utilizing ApexHostPro services, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a corporation, organization, or government body, you represent that you possess the authority to bind such entity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">2. Acceptable Use Policy</h2>
              <p>
                ApexHostPro hosting environments may be utilized exclusively for lawful enterprise, commercial, educational, or development purposes. The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Sending unsolicited bulk communications or spam via ORDS automated mailers.</li>
                <li>Conducting unauthorized penetration testing against shared database nodes without prior written SOC approval.</li>
                <li>Cryptocurrency mining or unauthorized distributed network resource consumption.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">3. Billing & Cancellations</h2>
              <p>
                Subscriptions are billed on a monthly, quarterly, semi-annual, or annual basis as selected during registration. You may cancel your subscription at any time via your account dashboard or by notifying customer support. All database snapshots are retained for 14 calendar days post-cancellation to facilitate data exports.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">4. Support & Maintenance</h2>
              <p>
                ApexHostPro provides continuous 24/7 technical monitoring. For inquiries regarding custom SLA amendments, enterprise contracts, or volume licensing, reach us on WhatsApp at <a href="https://wa.me/923048106662" className="text-[#00208b] font-bold underline">03048106662</a>.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
