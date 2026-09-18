import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | ApexHostPro",
  description: "Terms of Service for ApexHostPro Oracle APEX Cloud Hosting and associated services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              LEGAL AGREEMENTS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 font-semibold">
              Last Updated: September 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using ApexHostPro services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">2. Description of Service</h2>
              <p>
                ApexHostPro provides fully managed Oracle APEX cloud hosting, database administration, and related support services. We reserve the right to modify or discontinue services with reasonable notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">4. Limitation of Liability</h2>
              <p>
                ApexHostPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
