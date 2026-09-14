"use client";

import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({ theme = "light", size = "default", className = "" }) {
  const isDark = theme === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-2 group select-none ${className}`}>
      <img
        src="/logo.png"
        alt="ApexHostPro Logo"
        className={`${
          size === "lg" ? "h-12" : "h-9 sm:h-10"
        } w-auto object-contain transition-transform group-hover:scale-105 duration-200`}
      />
    </Link>
  );
}
