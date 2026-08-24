import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudyDetail from "./pages/CaseStudyDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f7f5f0] text-[#1c1d1f] flex flex-col justify-between selection:bg-[#2d4a3e]/20 selection:text-[#1b382b]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work/:id" element={<CaseStudyDetail />} />
            {/* Alias route directly for /fintech */}
            <Route path="/fintech" element={<CaseStudyDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}