import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Compass, Award, GraduationCap, Sparkles, Heart, Coffee, Trees, BookOpen, Camera, Mic } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-12 px-6 max-w-5xl mx-auto space-y-12">
      
      {/* Back Link */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5e635d] hover:text-black transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Selected Work
      </Link>

      {/* Hero Header */}
      <div className="space-y-3 border-b border-[#e2ded4] pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#c2785c] font-semibold block">
          Background & Anthropological Lens
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#161a18] font-normal leading-tight">
          Hi, I’m Ranjeeta.
        </h1>
        <p className="text-lg sm:text-xl font-serif italic text-[#3c443e] leading-relaxed max-w-3xl">
          The quiet observer decoding the cultural friction and informal workarounds that shape human systems.
        </p>
      </div>

      {/* Video & Bio Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Video Container */}
        <div className="md:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#1d2621] shadow-md aspect-[4/3] flex items-center justify-center relative">
            <video 
              controls 
              poster="/images/ranjeeta-portrait.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/ranjeeta-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-xs font-mono text-[#737a71] mt-2 text-center">
            A 60-second introduction to my research perspective.
          </p>
        </div>

        {/* Right Column: Narrative Story */}
        <div className="md:col-span-6 space-y-4 text-[#4e5550] text-sm sm:text-base leading-relaxed font-light">
          <p>
            I was a researcher long before I carried the official title—observing communities in Himalayan borderlands, navigating multiple languages, and questioning who institutional systems were actually built for.
          </p>
          <blockquote className="p-4 rounded-2xl bg-[#e8eee6] border border-[#cbd8c7] text-[#1b382b] font-serif italic text-sm sm:text-base leading-snug">
            "Anthropology gave that curiosity a rigorous scientific name. UX research gave it product direction. Motherhood grounded it in practical reality."
          </blockquote>
          <p>
            Now based in Toronto, I bring an integrated qualitative lens to technology teams, public policy groups, and service design agencies—designing and researching for the messy middle where people actually live.
          </p>
        </div>

      </div>

      {/* Core Philosophy Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1d2621] text-white border border-[#2a3830] shadow-lg space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#a7c5b4] font-semibold">
          Guiding Philosophy
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#e3eae1]">
          Honor the human. Understand the system. Design with care.
        </h2>
        <p className="text-xs sm:text-sm text-[#cbd9d1] leading-relaxed max-w-3xl pt-1">
          I am not drawn to technology for its novelty, but for its role as a cultural artifact shaping human connection. Good design is responsive and relational—it listens before it prescribes.
        </p>
      </div>

      {/* Methodological Pillars Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-5 rounded-2xl bg-white border border-[#ded8cc] shadow-sm space-y-2.5">
          <GraduationCap className="w-5 h-5 text-[#2d503e]" />
          <h3 className="text-base font-serif text-[#161a18]">PhD Academic Rigor</h3>
          <p className="text-xs text-[#5e635d] leading-relaxed">
            Trained in longitudinal fieldwork, multi-sited ethnography, and inductive qualitative synthesis at top research institutions.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#ded8cc] shadow-sm space-y-2.5">
          <Compass className="w-5 h-5 text-[#8f754f]" />
          <h3 className="text-base font-serif text-[#161a18]">Systems & Service UX</h3>
          <p className="text-xs text-[#5e635d] leading-relaxed">
            Translating messy human narratives into actionable service blueprints, user journey maps, and executive product roadmaps.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#ded8cc] shadow-sm space-y-2.5">
          <Award className="w-5 h-5 text-[#c2785c]" />
          <h3 className="text-base font-serif text-[#161a18]">Radical Empathy</h3>
          <p className="text-xs text-[#5e635d] leading-relaxed">
            Building authentic, high-trust relationships with marginalized, vulnerable, and non-digital populations.
          </p>
        </div>
      </div>

      {/* Beyond the Work (Personal Vignettes) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
            Beyond the Research
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#161a18] mt-0.5">
            What Keeps Me Grounded & Curious
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-[#ece7dc] space-y-1.5">
            <Camera className="w-4 h-4 text-[#8f754f]" />
            <h4 className="text-sm font-serif text-[#161a18]">Visual Ethnography</h4>
            <p className="text-xs text-[#5e635d] leading-relaxed">Documenting street corners and informal civic spaces through photography.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-[#ece7dc] space-y-1.5">
            <Trees className="w-4 h-4 text-[#2d503e]" />
            <h4 className="text-sm font-serif text-[#161a18]">Forest Walks & Wandering</h4>
            <p className="text-xs text-[#5e635d] leading-relaxed">Long, quiet rambles to decompress, reset perspective, and observe natural systems.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#fbf9f5] border border-[#ece7dc] space-y-1.5">
            <Coffee className="w-4 h-4 text-[#c2785c]" />
            <h4 className="text-sm font-serif text-[#161a18]">Tea, Baking & Cooking</h4>
            <p className="text-xs text-[#5e635d] leading-relaxed">Hosting unhurried meals with family, exploring heritage recipes and community conversations.</p>
          </div>
        </div>
      </div>

    </div>
  );
}