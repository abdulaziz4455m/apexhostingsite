import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HostingPlans from "@/components/HostingPlans";
import MaxPrintSection from "@/components/MaxPrintSection";
import MaxProtectSection from "@/components/MaxProtectSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home",
  description: "Enterprise Oracle APEX Cloud Hosting in Pakistan. High performance, 99.99% uptime, and local PKR billing.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#ff3a18] selection:text-white">
      {/* Top Header over Hero */}
      <div className="bg-[#0022a8]">
        <Header transparent={true} />
      </div>

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section (Matching Screenshot 1) */}
        <Hero />

        {/* About & 4 Hosting Solutions (Matching Screenshot 2: Pure White) */}
        <HostingPlans />

        {/* Pixel-Perfect Oracle APEX Reporting Tool (Matching Screenshot 3) */}
        <MaxPrintSection />

        {/* Cyber Security & Cloud Services (Matching Screenshot 4: Pure White) */}
        <MaxProtectSection />

        {/* Features & Discussion Contact (Matching Screenshot 5) */}
        <FeaturesGrid />
      </main>

      {/* Clean Footer */}
      <Footer />

    </div>
  );
}
