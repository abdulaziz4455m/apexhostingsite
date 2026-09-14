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
  title: "ApexHostPro | Pakistan's #1 Oracle APEX Cloud Hosting",
  description: "Enterprise Oracle APEX Cloud Hosting in Pakistan. High performance, 99.99% uptime, 24/7 DBA support, and local PKR billing with Raast and Bank Transfer.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
