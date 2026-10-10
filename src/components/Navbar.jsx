import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <nav
        aria-label="Main Navigation"
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-[#f7f5f0]/90 backdrop-blur-md border-[#cfc8ba] shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-[#ded8cc]"
        }`}
      >
        {/* Brand / Name */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none rounded-lg p-1"
        >
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#141715] group-hover:text-[#7c2810] transition-colors">
            Ranjeeta Adhikari
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#454c45] font-semibold border-l border-[#cfc8ba] pl-2 hidden sm:inline">
            PhD(ABD) UXR
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#2d332e]">
          <Link
            to="/#work"
            className="hover:text-[#7c2810] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none rounded"
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#7c2810] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none rounded ${
              location.pathname === "/about" ? "text-[#7c2810] font-bold" : ""
            }`}
          >
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/ranjeeta-adhikari-a425b3187/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16201b] hover:bg-[#25362e] text-white px-4 py-2 rounded-full text-xs font-semibold transition-all min-h-[36px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
          >
            Connect ↗
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#141715] hover:text-[#7c2810] focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-4 rounded-3xl bg-white border border-[#cfc8ba] shadow-lg flex flex-col gap-3 text-sm font-medium text-[#141715]">
          <Link
            to="/#work"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-[#f2eee6]"
          >
            Work
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-xl hover:bg-[#f2eee6]"
          >
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/ranjeeta-adhikari-a425b3187/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16201b] text-white px-4 py-3 rounded-2xl text-center font-semibold mt-1"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      )}
    </header>
  );
}