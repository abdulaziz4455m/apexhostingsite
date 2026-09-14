"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ExternalLink, 
  Tag, 
  X, 
  Share2 
} from "lucide-react";
import { blogArticles } from "@/data/siteData";

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blogs" className="relative py-24 bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Knowledge & Insights</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Latest from the MaxAPEX Engineering Blog
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In-depth technical guides on Oracle APEX 26.1 security, AI agent deployment, ORDS configuration, and cloud architectures.
            </p>
          </div>

          <a
            href="https://www.maxapex.com/blogs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-red-500/30 transition-all p-6 group"
            >
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/5">
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <div className="mt-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
                    {article.category}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedBlog(article)}
                  className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Quick Summary
                </button>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 group-hover:text-red-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Quick Summary Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg p-6 rounded-2xl bg-[#0e1322] border border-white/20 shadow-2xl text-slate-200 space-y-4">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedBlog.date} • {selectedBlog.category}</span>
            </div>

            <h3 className="text-xl font-bold text-white leading-snug">
              {selectedBlog.title}
            </h3>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-300 leading-relaxed space-y-2">
              <div className="font-bold text-white uppercase text-[11px]">Key Takeaways:</div>
              <p>{selectedBlog.summary}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selectedBlog.tags.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400">
                  #{t}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800"
              >
                Close
              </button>
              <a
                href={selectedBlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 flex items-center gap-1.5"
              >
                <span>Read Full Guide on MaxAPEX</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
