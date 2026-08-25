import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] max-w-5xl">
      <div className="bg-[#ffffff]/90 backdrop-blur-xl border border-[#ded8cc] rounded-full px-3.5 py-2 sm:px-6 sm:py-3.5 flex items-center justify-between shadow-lg shadow-black/[0.04]">
        {/* Brand / Name */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <Link
            to="/"
            className="font-serif italic text-base sm:text-lg text-[#161a18] font-medium tracking-normal sm:tracking-wide whitespace-nowrap"
          >
            Ranjeeta Adhikari
          </Link>
          <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[#737a71] font-mono">
            / PhD UXR
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2.5 sm:gap-6 text-xs font-medium text-[#4e5550]">
          <a
            href="/#work"
            onClick={(e) => handleScrollTo(e, "work")}
            className="hover:text-[#c2785c] transition-colors cursor-pointer px-1 py-1"
          >
            Work
          </a>
          <Link
            to="/about"
            className="hover:text-[#c2785c] transition-colors px-1 py-1"
          >
            About
          </Link>
          <a
            href="/#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="bg-[#2d503e] hover:bg-[#244032] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full transition-all flex items-center gap-1 shadow-sm cursor-pointer whitespace-nowrap text-[11px] sm:text-xs font-medium"
          >
            Contact <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
}