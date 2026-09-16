"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  X, 
  HelpCircle, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Zap, 
  MessageSquare 
} from "lucide-react";
import { knowledgeBaseQA } from "@/data/siteData";

export default function MaxAIChatWidget({ onOpenScheduleModal }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am MaxAI, your Oracle APEX & Cloud Infrastructure Architect. How can I help you choose the best hosting plan, configure APEX 26.1, or secure your database today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const sampleQuestions = [
    "Which plan is right for my Oracle APEX project?",
    "Is Oracle APEX 26.1 ready with AI vibe coding?",
    "What makes MaxProtect different from standard firewalls?",
    "Can I connect SQL Developer and VS Code?",
    "How fast is ApexHost customer support?"
  ];

  const handleSend = (questionText) => {
    const query = questionText || inputValue;
    if (!query.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", text: query }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and response based on knowledgeBaseQA
    setTimeout(() => {
      let matchedAnswer = null;
      const lowerQ = query.toLowerCase();

      // Find closest match or generate smart answer
      for (const item of knowledgeBaseQA) {
        const itemQ = item.question.toLowerCase();
        if (
          lowerQ.includes("plan") && itemQ.includes("plan") ||
          lowerQ.includes("26.1") || lowerQ.includes("ai") || lowerQ.includes("vibe") && itemQ.includes("26.1") ||
          lowerQ.includes("protect") || lowerQ.includes("security") || lowerQ.includes("soc") && itemQ.includes("protect") ||
          lowerQ.includes("support") || lowerQ.includes("sla") || lowerQ.includes("response") && itemQ.includes("support") ||
          lowerQ.includes("sql") || lowerQ.includes("connect") || lowerQ.includes("ords") && itemQ.includes("sql")
        ) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        if (lowerQ.includes("maxprint") || lowerQ.includes("report") || lowerQ.includes("pdf")) {
          matchedAnswer = "MaxPrint is our native Oracle APEX reporting tool featuring a drag-and-drop template designer. It lets you generate pixel-perfect PDFs, Excel sheets, and Word documents in sub-second speeds without messy BI Publisher scripts!";
        } else if (lowerQ.includes("oci") || lowerQ.includes("migrate") || lowerQ.includes("cloud")) {
          matchedAnswer = "ApexHost specializes in seamless migration from On-Premises to Oracle Cloud Infrastructure (OCI), AWS, and Azure. We handle architecture sizing, Data Guard failover, and zero-downtime replication.";
        } else {
          matchedAnswer = "Thanks for asking! ApexHost provides managed Oracle APEX 26.1 hosting across Shared, DedicatedDB, and CloudDB tiers. Our team offers 24/7 support with under 15-minute response times. Would you like to schedule an online meeting with our lead architect?";
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", text: matchedAnswer }]);
      setIsTyping(false);
    }, 700);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section id="ask-maxai" className="relative py-24 bg-[#0a0f1d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>Interactive AI Architecture Assistant</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ask MaxAI
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our MaxAI is here to help you navigate our hosting, consulting, and support services 
            to find exactly what your project needs.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl overflow-hidden">
          
          {/* Chat Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-[#0d1526] to-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#090e18] rounded-[11px] flex items-center justify-center text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>MaxAI Assistant</span>
                  <span className="px-2 py-0.2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                    Online & Ready
                  </span>
                </div>
                <div className="text-xs text-slate-400">Trained on Oracle APEX 26.1, MaxProtect SOC & OCI Best Practices</div>
              </div>
            </div>

            <button
              onClick={onOpenScheduleModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 text-xs font-semibold hover:bg-cyan-900/40 transition-colors"
            >
              <span>Talk to Human DBA</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Chat Messages Feed */}
          <div className="p-5 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto bg-[#070a12]/90 font-sans text-xs sm:text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 items-start ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-xl p-4 rounded-2xl leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-tr-none font-medium shadow-md shadow-red-600/20"
                      : "bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none font-normal"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-slate-400 text-xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 p-3 rounded-2xl bg-slate-900 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-150"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-300"></span>
                  <span className="ml-2 text-slate-400 text-xs font-mono">MaxAI analyzing query...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Quick Click Prompts */}
          <div className="p-3 bg-slate-900/70 border-t border-white/5 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 text-[11px] font-bold shrink-0 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Suggested:</span>
              </span>
              <div className="flex gap-1.5 flex-nowrap overflow-x-auto pb-1">
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 text-[11px] font-medium whitespace-nowrap transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-slate-950 border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask MaxAI about hosting plans, HIPAA compliance, MaxPrint or APEX 26.1..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:pointer-events-none text-white font-bold transition-all shadow-md shadow-cyan-500/20 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
