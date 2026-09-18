import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieBanner from '@/components/CookieBanner';
import StickyMobileCTA from '@/components/StickyMobileCTA';
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
  metadataBase: new URL('https://apexhostpro.com'), // Replace with actual domain
  title: {
    default: "ApexHostPro | Pakistan's #1 Oracle APEX Cloud Hosting",
    template: "%s | ApexHostPro"
  },
  description: "Enterprise Oracle APEX Cloud Hosting in Pakistan. High performance, 99.99% uptime, 24/7 DBA support, and local PKR billing with Raast and Bank Transfer.",
  keywords: ["Oracle APEX Hosting", "Cloud Database", "Pakistan Web Hosting", "Oracle Cloud Infrastructure", "DBA Support"],
  openGraph: {
    title: "ApexHostPro | Enterprise Oracle APEX Cloud Hosting",
    description: "Enterprise Oracle APEX Cloud Hosting in Pakistan.",
    url: 'https://apexhostpro.com',
    siteName: 'ApexHostPro',
    images: [
      {
        url: '/icon_512.png', // Using the large icon as a fallback OG image
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ApexHostPro | Enterprise Oracle APEX Cloud Hosting",
    description: "Enterprise Oracle APEX Cloud Hosting in Pakistan.",
    images: ['/icon_512.png'],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon_180.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans pb-14 lg:pb-0">
        {children}
        <CookieBanner />
        <StickyMobileCTA />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
