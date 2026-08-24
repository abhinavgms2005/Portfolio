import React, { useState } from "react";
import { Mail, Linkedin, Copy, Check } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "ranjadhishar@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="pt-8 pb-12 px-6 max-w-5xl mx-auto w-full border-t border-[#e2ded4] scroll-mt-20">
      <div className="p-8 sm:p-10 rounded-3xl bg-[#1d2621] text-white border border-[#2a3830] relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a7c5b4] font-semibold">Get In Touch</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
            Let's uncover what your users aren't saying.
          </h2>
          <p className="text-[#cbd9d1] text-xs sm:text-sm leading-relaxed">
            Available for full-time UX research leadership, strategic consulting, or qualitative advisory.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${emailAddress}?subject=Strategic%20UX%20Research%20Inquiry`}
              className="bg-[#d18667] hover:bg-[#d18667]/90 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-md"
            >
              <Mail className="w-4 h-4" /> Start a Conversation
            </a>

            <button
              onClick={handleCopy}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/15 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" /> Copied {emailAddress}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-300" /> Copy Email
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/ranjeeta-adhikari-a425b3187/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737a71] gap-2 font-mono">
        <p>© {new Date().getFullYear()} Ranjeeta Adhikari. All rights reserved.</p>
        <p>Toronto, Ontario • Anthropologist & UX Researcher</p>
      </div>
    </footer>
  );
}