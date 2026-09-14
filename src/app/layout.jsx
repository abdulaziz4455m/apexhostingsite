import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ApexHostPro | Secure, Cost-Effective & Reliable Oracle APEX Cloud Hosting",
  description: "Build enterprise applications faster with Oracle APEX 26.1. Fully managed Oracle APEX hosting, ApexProtect Linux server security, ApexPrint reporting, and multi-cloud migration.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
