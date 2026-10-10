import React from "react";
import { Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="footer-heading" className="pt-8 pb-12 px-6 max-w-5xl mx-auto w-full border-t border-[#ded8cc] scroll-mt-20">
      <div className="p-8 sm:p-10 rounded-3xl bg-[#16201b] text-white border border-[#2a3830] relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#a8d3bd] font-bold">Get In Touch</span>
          <h2 id="footer-heading" className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
            Let's uncover what your users aren't saying.
          </h2>
          <p className="text-[#d8e4dc] text-xs sm:text-sm leading-relaxed">
            Available for full-time UX research leadership, strategic consulting, or qualitative advisory.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/ranjeeta-adhikari-a425b3187/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn (opens in a new tab)"
              className="bg-[#a6482a] hover:bg-[#8f3a1e] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 shadow-md min-h-[44px] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" /> Connect on LinkedIn <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#343b35] gap-2 font-mono font-semibold">
        <p>© {new Date().getFullYear()} Ranjeeta Adhikari. All rights reserved.</p>
        <p>Toronto, Ontario • Anthropologist & UX Researcher</p>
      </div>
    </footer>
  );
}