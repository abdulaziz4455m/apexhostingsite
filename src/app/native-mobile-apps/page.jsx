import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSideWidgets from "@/components/FloatingSideWidgets";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Smartphone, Bell, WifiOff, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Native Mobile Apps for Oracle APEX | iOS & Android | ApexHostPro",
  description: "Transform your Oracle APEX applications into installable iOS and Android native apps with offline SQLite sync, push notifications, biometric FaceID login, and camera barcode scanning.",
};

export default function NativeMobileAppsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header transparent={false} />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              MOBILE TRANSFORMATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Native Mobile Apps for Oracle APEX
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Take your Oracle APEX applications beyond browser tabs. Deliver native iOS and Android experiences with Apple App Store and Google Play distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#00208b]">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Biometrics & Hardware APIs</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly unlock APEX screens via Apple FaceID / TouchID, scan warehouse inventory with hardware camera barcode readers, and capture GPS geolocations in real time.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#ff3a18]">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Offline SQLite Synchronization</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Empower remote field inspectors and delivery drivers to record forms even with zero cellular signal. Local transactions automatically sync back to Oracle APEX when online.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Real-Time Native Push Alerts</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Send urgent order approvals, workflow escalations, and status changes directly to user lockscreens via Apple APNs and Google Firebase Cloud Messaging.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
      <FloatingSideWidgets />
    </div>
  );
}
