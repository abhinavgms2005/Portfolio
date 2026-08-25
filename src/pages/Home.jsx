import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Compass, Target, Users, Layers } from "lucide-react";
import { projects } from "../data/projects";

export default function Home() {
  const [time, setTime] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "She brings a rare blend of intellectual curiosity and deep empathy to her work. These qualities make her both a thoughtful researcher and a compassionate colleague.",
      author: "Dr. Anakha Ajith, Ph.D",
      role: "Anthropologist & Content Manager",
      tag: "Academic"
    },
    {
      quote: "Her ability to synthesize insights, communicate clearly, and understand both user frustration and institutional processes makes her incredibly well-suited for UX and service design.",
      author: "Rishabh Jung Rijal",
      role: "CIBC",
      tag: "Corporate"
    },
    {
      quote: "Ranjeeta brings a great combination of intellectual depth, dedication, and empathy. She approaches every problem with academic vigour and a deep respect for lived experiences.",
      author: "Prathyusha Subraveti",
      role: "UX Research & Data Analytics Professional",
      tag: "Design"
    },
    {
      quote: "She is academically well-trained and highly skilled in ethnographic research. I strongly recommend her for any position aligned with her qualifications.",
      author: "Prof. Siva Prasad Rambhatla",
      role: "Former Professor of Anthropology, University of Hyderabad",
      tag: "Academic"
    }
  ];

  const filteredTestimonials = selectedTag === "All" 
    ? testimonials 
    : testimonials.filter(t => t.tag === selectedTag);

  return (
    <div className="pt-28 sm:pt-32 pb-16 space-y-16">
      
      {/* 1. Hero Section */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Status Pill */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-white border border-[#ded8cc] text-[11px] sm:text-xs w-fit shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-[#4e5550] flex items-center gap-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#2d503e] inline shrink-0" /> Toronto, ON • {time || "02:38 PM"}
              </span>
            </div>
            <span className="hidden sm:inline text-[#ded8cc]">|</span>
            <span className="text-[#c2785c] font-medium">Open to Strategic Research Roles</span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#161a18] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight"
          >
            I decode the <span className="italic text-[#c2785c]">cultural</span> and <span className="italic text-[#c2785c]">emotional</span> realities that shape human systems.
          </motion.h1>

          <p className="text-sm sm:text-lg text-[#4e5550] font-light max-w-3xl leading-relaxed">
            I spent 10+ years living with communities, bringing an ethnographic lens to products, public policy, and digital services—uncovering insights that align user needs with organizational strategy.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
            {[
              { num: "10+", label: "Years Field Research", bg: "bg-[#2d503e] text-white" },
              { num: "PhD", label: "Cultural Anthropology", bg: "bg-[#8f754f] text-white" },
              { num: "360°", label: "Systemic Service Mapping", bg: "bg-[#455a4f] text-white" },
              { num: "Multi", label: "Cross-Sector Stakeholders", bg: "bg-[#715c3f] text-white" }
            ].map((stat, i) => (
              <div key={i} className={`p-3.5 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between min-h-[95px] sm:min-h-[110px]`}>
                <div className="text-xl sm:text-3xl font-serif italic mb-1">{stat.num}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider opacity-90 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Selected Case Studies */}
      <section id="work" className="pt-10 border-t border-[#e2ded4] px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">Selected Case Studies</span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#161a18] mt-0.5">Research in Practice</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5e635d] max-w-md">
            Click any study to view full methodology, stakeholder friction maps, and systemic outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {projects.map((study, idx) => (
            <Link
              key={study.id}
              to={`/work/${study.id}`}
              className="group p-5 sm:p-8 rounded-3xl bg-white border border-[#e3dfd5] hover:border-[#2d503e]/60 transition-all relative overflow-hidden block shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className={`text-[11px] sm:text-xs uppercase tracking-widest px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-mono font-medium border ${study.tagBg} ${study.tagText} ${study.tagBorder}`}>
                      {study.tag}
                    </span>
                    <span className="text-xs text-[#737a71] font-mono">{study.role}</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-serif text-[#161a18] group-hover:text-[#c2785c] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-[#4e5550] text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {study.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {study.methods.slice(0, 3).map((m, i) => (
                      <span key={i} className="text-[11px] sm:text-xs text-[#5e635d] bg-[#f4f1ea] px-2.5 sm:px-3 py-0.5 rounded-md border border-[#e2ded4]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between self-stretch pt-2 md:pt-0 border-t md:border-t-0 border-[#f0ece1]">
                  <span className="text-xs font-mono text-[#8c948b]">0{idx + 1}</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f4f1ea] border border-[#e2ded4] flex items-center justify-center group-hover:bg-[#2d503e] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Methodological Rigor */}
      <section className="pt-10 border-t border-[#e2ded4] px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">Methodological Rigor</span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#161a18] mt-0.5">How I Uncover Strategic Value</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <Compass className="w-5 h-5 text-[#2d503e]" />,
              title: "Ethnographic & Cultural Intelligence",
              desc: "Deep qualitative inquiries going past surface surveys to reveal the unspoken rules, cultural context, and systemic incentives driving human behavior."
            },
            {
              icon: <Target className="w-5 h-5 text-[#8f754f]" />,
              title: "Strategic Research Direction",
              desc: "Aligning user needs directly with organizational ROI. Defining what questions to ask, choosing right-sized methods, and synthesising messy data into executive action."
            },
            {
              icon: <Layers className="w-5 h-5 text-[#2b4c60]" />,
              title: "Complex Systems & Service Mapping",
              desc: "Connecting micro-level user friction with macro-level institutional architectures. Creating actionable service blueprints rather than superficial fixes."
            },
            {
              icon: <Users className="w-5 h-5 text-[#715c3f]" />,
              title: "Trust-Based Stakeholder Engagement",
              desc: "Building authentic, high-trust feedback loops with vulnerable or hard-to-reach communities and aligning cross-functional leadership."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-white border border-[#e3dfd5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-2.5 bg-[#f7f5f0] w-fit rounded-xl border border-[#e2ded4] mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-serif text-[#161a18] mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#5a615b] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Endorsements */}
      <section className="pt-10 border-t border-[#e2ded4] px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">Social Proof</span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#161a18] mt-0.5">What Collaborators Say</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Corporate", "Academic", "Design"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-3 py-1 rounded-full border transition-all ${
                  selectedTag === tag
                    ? "bg-[#2d503e] text-white border-[#2d503e]"
                    : "bg-white text-[#5e635d] border-[#ded8cc] hover:border-black/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTestimonials.map((t, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-3xl bg-white border border-[#e3dfd5] shadow-sm flex flex-col justify-between">
              <p className="text-[#2a2e2b] font-serif italic text-sm sm:text-lg leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="border-t border-[#e2ded4] pt-3">
                <div className="text-sm font-medium text-[#161a18]">{t.author}</div>
                <div className="text-xs text-[#737a71] mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}