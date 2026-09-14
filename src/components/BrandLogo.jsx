"use client";

import Link from "next/link";

export default function BrandLogo({ theme = "light", size = "default", className = "" }) {
  const isDark = theme === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Sleek Geometric Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          className={size === "lg" ? "w-9 h-9" : "w-8 h-8"}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="10" fill={isDark ? "#ffffff" : "#00208b"} />
          <path
            d="M12 28L20 12L28 28"
            stroke={isDark ? "#00208b" : "#ffffff"}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 22H25"
            stroke={isDark ? "#00208b" : "#ffffff"}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="20" cy="12" r="3" fill="#ff3a18" />
          <path
            d="M23 19L29 28"
            stroke="#ff3a18"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex items-center tracking-tight">
        <span
          className={`font-black tracking-tight text-xl ${
            isDark ? "text-white" : "text-[#00208b]"
          }`}
        >
          apexhost
        </span>
        <span className="font-extrabold text-xl text-[#ff3a18] ml-0.5">
          pro
        </span>
      </div>
    </Link>
  );
}
