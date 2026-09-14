"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import { Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";
import { allBlogArticles } from "@/data/sitemapData";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(allBlogArticles.map((a) => a.category)))];

  const filteredPosts = allBlogArticles.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-black tracking-widest text-[#ff3a18] uppercase">
              ORACLE APEX ENGINEERING & CLOUD INSIGHTS
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Technical Blogs & Architectural Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical guides written by certified Oracle DBAs covering APEX 26.1 AI features, ORDS configuration, high availability, and database security.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, topic or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-[#00208b] focus:bg-white transition-all shadow-sm"
              />
            </div>

            {/* Total Count Badge */}
            <div className="text-xs font-bold text-slate-500 self-center sm:self-auto">
              Showing <span className="text-[#00208b]">{filteredPosts.length}</span> of {allBlogArticles.length} articles
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.slice(0, 10).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#00208b] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[28px] p-6 border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#00208b]/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#ff3a18]">
                      {post.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime || "5 min"}
                    </span>
                  </div>

                  <h2 className="text-lg font-black text-slate-900 group-hover:text-[#00208b] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blogs/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xs font-bold text-[#00208b] group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 p-8 rounded-[32px] bg-slate-50 border border-slate-200">
              <p className="text-slate-500 text-sm">No articles found matching &quot;{searchTerm}&quot;.</p>
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                className="mt-4 px-5 py-2 rounded-full bg-[#00208b] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
