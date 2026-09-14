import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Clock, Shield, CheckCircle, Share2, BookOpen } from "lucide-react";
import { allBlogArticles } from "@/data/sitemapData";

export async function generateStaticParams() {
  return allBlogArticles.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allBlogArticles.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Article | ApexHostPro" };
  return {
    title: `${post.title} | ApexHostPro Technical Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = allBlogArticles.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#00208b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-red-50 text-[#ff3a18] border border-red-100">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime || "6 min read"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Executive Summary Quote */}
          <div className="p-6 sm:p-8 rounded-[28px] bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-4 border-l-[#00208b]">
            &ldquo;{post.excerpt}&rdquo;
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 pt-4">1. Architectural Context & Overview</h2>
            <p>
              In modern enterprise deployments, Oracle APEX provides unmatched velocity for rapid application delivery. However, maximizing database throughput, ensuring zero-trust security postures, and integrating cutting-edge machine learning features requires rigorous architectural discipline.
            </p>
            <p>
              Whether configuring low-latency connection pools or orchestrating automated continuous delivery pipelines, deploying onto a managed cloud foundation eliminates operational friction and guarantees predictable performance under heavy transactional concurrency.
            </p>

            {/* Callout Box */}
            <div className="p-6 rounded-[24px] bg-blue-50/70 border border-blue-200/80 space-y-3 text-sm text-blue-950">
              <div className="flex items-center gap-2 font-bold text-base text-[#00208b]">
                <Shield className="w-5 h-5 text-[#ff3a18]" />
                <span>Production Implementation Recommendations</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00208b] shrink-0 mt-0.5" />
                  <span>Enforce parameterized SQL and bind variables across all Dynamic Actions to eliminate SQL injection vectors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00208b] shrink-0 mt-0.5" />
                  <span>Maintain isolated connection pools between public anonymous users and authenticated workspace sessions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00208b] shrink-0 mt-0.5" />
                  <span>Configure automated daily backups with point-in-time recovery (PITR) to guarantee zero data loss.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 pt-4">2. Implementation Steps & Best Practices</h2>
            <p>
              When executing this architecture in real-world environments, follow a structured rollout process. Begin by verifying the database schema privileges, configuring the ORDS listener configuration pool, and testing all endpoints through automated curl scripts before exposing services to end-users.
            </p>
            
            <div className="bg-slate-900 text-slate-200 p-5 rounded-[20px] font-mono text-xs overflow-x-auto space-y-1">
              <p className="text-slate-400"># Verify ORDS pool latency and status</p>
              <p className="text-emerald-400">$ ords --config /etc/ords/config status</p>
              <p className="text-slate-400"># Check Oracle Database 23ai AI Vector Search index</p>
              <p className="text-amber-300">SQL&gt; SELECT status, memory_usage FROM v$vector_memory;</p>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 pt-4">3. Key Takeaways & Enterprise Scalability</h2>
            <p>
              Adopting this standardized approach protects your organization against unexpected downtime while enabling developers to ship features up to 10x faster. ApexHostPro provides this entire stack fully managed, pre-hardened, and supported 24/7 by certified Oracle professionals.
            </p>
          </div>

          {/* Bottom Card CTA */}
          <div className="pt-8 border-t border-slate-200">
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-[#00208b] to-[#001248] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-bold">Deploy on ApexHostPro Cloud</h3>
                <p className="text-xs text-blue-200 max-w-sm">
                  Experience instantaneous deployment, 99.99% SLA, and zero-headache Oracle APEX hosting.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/pricing"
                  className="px-5 py-2.5 rounded-full bg-[#ff3a18] hover:bg-[#e02e0e] text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap shadow-sm"
                >
                  View Plans
                </Link>
                <a
                  href="https://wa.me/923048106662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold whitespace-nowrap transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
