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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <div className="bg-[#ffffff]/85 backdrop-blur-xl border border-[#ded8cc] rounded-full px-6 py-3.5 flex items-center justify-between shadow-lg shadow-black/[0.03]">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-serif italic text-lg text-[#161a18] font-medium tracking-wide">
            Ranjeeta Adhikari
          </Link>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#737a71] font-mono">
            / PhD UXR
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-[#4e5550]">
          <a
            href="/#work"
            onClick={(e) => handleScrollTo(e, "work")}
            className="hover:text-[#c2785c] transition-colors cursor-pointer"
          >
            Work
          </a>
          <Link to="/about" className="hover:text-[#c2785c] transition-colors">
            About
          </Link>
          <a
            href="/#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="bg-[#2d503e] hover:bg-[#244032] text-white px-4 py-1.5 rounded-full transition-all flex items-center gap-1 shadow-sm cursor-pointer"
          >
            Contact <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
}