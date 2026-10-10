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
    <main id="main-content" className="pt-28 sm:pt-32 pb-16 space-y-16">
      
      {/* 1. Hero Section */}
      <section aria-labelledby="hero-heading" className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col gap-5 sm:gap-6">
          
          {/* Status Pill */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-white border border-[#cfc8ba] text-[11px] sm:text-xs w-fit shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-700"></span>
              </span>
              <span className="text-[#343b35] flex items-center gap-1 font-mono font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#1b3b2b] inline shrink-0" aria-hidden="true" /> Toronto, ON • {time || "02:38 PM"}
              </span>
            </div>
            <span className="hidden sm:inline text-[#b0a99c]" aria-hidden="true">|</span>
            <span className="text-[#7c2810] font-bold">Open to Strategic Research Roles</span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#141715] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight"
          >
            I decode the <span className="italic text-[#7c2810] font-medium">cultural</span> and <span className="italic text-[#7c2810] font-medium">emotional</span> realities that shape human systems.
          </motion.h1>

          <p className="text-base sm:text-lg text-[#323933] font-normal max-w-3xl leading-relaxed">
            I spent 10+ years living with communities, bringing an ethnographic lens to products, public policy, and digital services—uncovering insights that align user needs with organizational strategy.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
            {[
              { num: "10+", label: "Years Field Research", bg: "bg-[#204030] text-white" },
              { num: "PhD(ABD)", label: "Cultural Anthropology", bg: "bg-[#6d5535] text-white" },
              { num: "360°", label: "Systemic Service Mapping", bg: "bg-[#2e473b] text-white" },
              { num: "Multi", label: "Cross-Sector Stakeholders", bg: "bg-[#54422b] text-white" }
            ].map((stat, i) => (
              <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between min-h-[95px] sm:min-h-[110px]`}>
                <div className="text-xl sm:text-3xl font-serif italic mb-1">{stat.num}</div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold opacity-95 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Selected Case Studies */}
      <section id="work" aria-labelledby="work-heading" className="pt-10 border-t border-[#ded8cc] px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">Selected Case Studies</span>
            <h2 id="work-heading" className="text-2xl sm:text-4xl font-serif text-[#141715] mt-0.5">Research in Practice</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#3b423a] max-w-md">
            Click any study to view full methodology, stakeholder friction maps, and systemic outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((study, idx) => (
            <Link
              key={study.id}
              to={`/work/${study.id}`}
              className="group p-5 sm:p-7 rounded-3xl bg-white border border-[#d8d2c4] hover:border-[#204030] focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none transition-all relative overflow-hidden block shadow-sm hover:shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left: Project Details */}
                <div className="md:col-span-7 space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className={`text-[11px] sm:text-xs uppercase tracking-widest px-3 py-1 rounded-full font-mono font-bold border ${study.tagBg} ${study.tagText} ${study.tagBorder}`}>
                      {study.tag}
                    </span>
                    <span className="text-xs text-[#343b35] font-mono font-semibold">{study.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#141715] group-hover:text-[#7c2810] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-[#323933] text-xs sm:text-sm leading-relaxed">
                    {study.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {study.methods?.slice(0, 3).map((m, i) => (
                      <span key={i} className="text-[11px] sm:text-xs text-[#1c221e] font-semibold bg-[#f2eee6] px-3 py-1 rounded-md border border-[#dcd6c8]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Image Preview */}
                <div className="md:col-span-5 flex flex-col gap-3">
                  <div className="rounded-2xl overflow-hidden border border-[#cfc8ba] bg-[#ece7dc] aspect-[16/10] relative shadow-inner">
                    {study.previewImage ? (
                      <img 
                        src={study.previewImage} 
                        alt={`Visual artifact for ${study.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#343b35]">
                        Preview coming soon
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs font-mono text-[#343b35] px-1">
                    <span className="font-bold">0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1 text-[#1b3b2b] font-bold group-hover:underline">
                      View Study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Methodological Rigor */}
      <section aria-labelledby="method-heading" className="pt-10 border-t border-[#ded8cc] px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">Methodological Rigor</span>
          <h2 id="method-heading" className="text-2xl sm:text-4xl font-serif text-[#141715] mt-0.5">How I Uncover Strategic Value</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <Compass className="w-5 h-5 text-[#204030]" aria-hidden="true" />,
              title: "Ethnographic & Cultural Intelligence",
              desc: (
                <>
                  <strong className="text-[#141715] font-semibold">Deep qualitative inquiries</strong> going past surface surveys to reveal the unspoken rules, cultural context, and systemic incentives driving human behavior.
                </>
              )
            },
            {
              icon: <Target className="w-5 h-5 text-[#6d5535]" aria-hidden="true" />,
              title: "Strategic Research Direction",
              desc: (
                <>
                  <strong className="text-[#141715] font-semibold">Aligning user needs directly with organizational ROI.</strong> Defining what questions to ask, choosing right-sized methods, and synthesising messy data into executive action.
                </>
              )
            },
            {
              icon: <Layers className="w-5 h-5 text-[#1d3c4e]" aria-hidden="true" />,
              title: "Complex Systems & Service Mapping",
              desc: (
                <>
                  <strong className="text-[#141715] font-semibold">Connecting micro-level user friction with macro-level institutional architectures.</strong> Creating actionable service blueprints rather than superficial fixes.
                </>
              )
            },
            {
              icon: <Users className="w-5 h-5 text-[#54422b]" aria-hidden="true" />,
              title: "Trust-Based Stakeholder Engagement",
              desc: (
                <>
                  <strong className="text-[#141715] font-semibold">Building authentic, high-trust feedback loops</strong> with vulnerable or hard-to-reach communities and aligning cross-functional leadership.
                </>
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-2.5 bg-[#f4f0e6] w-fit rounded-xl border border-[#dcd6c8] mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-serif text-[#141715] font-medium mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Endorsements */}
      <section aria-labelledby="testimonials-heading" className="pt-10 border-t border-[#ded8cc] px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">Social Proof</span>
            <h2 id="testimonials-heading" className="text-2xl sm:text-4xl font-serif text-[#141715] mt-0.5">What Collaborators Say</h2>
          </div>

          <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter recommendations by category">
            {["All", "Corporate", "Academic", "Design"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                aria-pressed={selectedTag === tag}
                className={`text-xs px-4 py-2.5 rounded-full border font-semibold transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none ${
                  selectedTag === tag
                    ? "bg-[#204030] text-white border-[#204030]"
                    : "bg-white text-[#1c221e] border-[#cfc8ba] hover:border-black"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTestimonials.map((t, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm flex flex-col justify-between">
              <p className="text-[#202422] font-serif italic text-base sm:text-lg leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="border-t border-[#ded8cc] pt-3">
                <div className="text-sm font-semibold text-[#141715]">{t.author}</div>
                <div className="text-xs text-[#343b35] font-semibold mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}