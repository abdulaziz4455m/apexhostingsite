import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ShieldCheck, Lock, Globe } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | GDPR & HIPAA Compliance | ApexHostPro",
  description: "ApexHostPro Privacy Policy, data governance standards, GDPR compliance, and encryption safeguards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              DATA PRIVACY & GOVERNANCE
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-semibold">
              Last Updated: September 2026 | Effective for all ApexHostPro Global Services
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">1. Commitment to Data Protection</h2>
              <p>
                ApexHostPro (&ldquo;ApexHostPro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring the security of all client data stored or processed on our Oracle APEX cloud infrastructure. We adhere strictly to global regulatory frameworks, including ISO 27001:2022, the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and HIPAA standards for healthcare workloads.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">2. Information We Collect</h2>
              <p>
                We collect information necessary to provision and maintain your managed hosting services:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Account Details:</strong> Full name, professional email address, company name, billing address, and WhatsApp phone number.</li>
                <li><strong>Technical Data:</strong> IP addresses, browser types, SSH public keys, server access logs, and ORDS endpoint metrics.</li>
                <li><strong>Payment Information:</strong> Processed via encrypted PCI-DSS Level 1 payment gateways; ApexHostPro never stores unencrypted credit card numbers.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">3. Customer Database Data Ownership</h2>
              <p>
                <strong>You retain 100% ownership of all database tables, schemas, APEX application definitions, and records.</strong> ApexHostPro DBAs access client instances solely upon explicit client request or strictly for routine maintenance and automated snapshot backup integrity checks. We do not sell, rent, or monetize your database contents under any circumstances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">4. Infrastructure Security & Encryption</h2>
              <p>
                All customer data is encrypted in transit using TLS 1.3 cryptographic protocols and encrypted at rest utilizing AES-256 block storage encryption with Oracle Transparent Data Encryption (TDE) where applicable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-black text-slate-900">5. Contact Our Data Protection Officer</h2>
              <p>
                For GDPR data deletion requests, audit logs, or compliance queries, please reach out to our security team via WhatsApp at <a href="https://wa.me/923048106662" className="text-[#00208b] font-bold underline">03048106662</a> or submit an inquiry through our contact form.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
