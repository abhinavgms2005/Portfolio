import React from "react";
import { Link } from "react-router-dom";
import { Quote, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function About() {
  const pillars = [
    {
      num: "01",
      title: "Immerse",
      subtitle: "Listen before you design",
      desc: "True insight starts by stepping into people's worlds—absorbing the unspoken routines, physical workarounds, and cultural contexts that surveys miss."
    },
    {
      num: "02",
      title: "Translate",
      subtitle: "Turn emotion into interface",
      desc: "Emotional cues like hesitation, shame, and silence aren't noise—they are critical signals that shape intuitive service flows."
    },
    {
      num: "03",
      title: "Co-Design",
      subtitle: "Build with, never just for",
      desc: "Collaborative prototyping with frontline users and cross-functional teams ensures systems are grounded in lived reality, driving lasting adoption."
    }
  ];

  const philosophy = [
    {
      num: "01",
      title: "Ethnographic & Cultural Intelligence",
      desc: (
        <>
          <strong className="text-[#141715] font-semibold">Deep qualitative inquiries</strong> going past surface answers to uncover the unspoken social rules, mental models, and environmental realities driving human decisions.
        </>
      )
    },
    {
      num: "02",
      title: "Strategic Research Leadership",
      desc: (
        <>
          <strong className="text-[#141715] font-semibold">Aligning exploratory field research directly with business goals</strong>—framing high-impact problem statements and converting ambiguous feedback into executive roadmaps.
        </>
      )
    },
    {
      num: "03",
      title: "Complex Systems & Service Mapping",
      desc: (
        <>
          <strong className="text-[#141715] font-semibold">Connecting micro-level user friction with macro-level operational pipelines.</strong> Designing end-to-end service blueprints that account for human workarounds.
        </>
      )
    },
    {
      num: "04",
      title: "Trust-Based Stakeholder Alignment",
      desc: (
        <>
          <strong className="text-[#141715] font-semibold">Fostering psychological safety</strong> with marginalized or vulnerable communities while uniting cross-functional engineering, product, and policy leaders.
        </>
      )
    }
  ];

  return (
    <main id="main-content" className="bg-[#f7f5f0] text-[#1c1d1f] font-sans antialiased pt-24 sm:pt-28 pb-16 space-y-20">
      
      {/* 1. Header Hero */}
      <section aria-labelledby="about-heading" className="px-4 sm:px-6 max-w-5xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#7c2810] font-bold block">
          Background & Anthropological Lens
        </span>
        <h1 id="about-heading" className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#141715] font-normal leading-[1.1] tracking-tight max-w-4xl">
          I research like an anthropologist and deliver like a UX strategist.
        </h1>
        <p className="text-base sm:text-xl font-serif italic text-[#2c332d] leading-relaxed max-w-3xl">
          Bridging the critical gap between deep human qualitative truth and systemic digital products, public policy, and enterprise workflows.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#ded8cc] text-xs sm:text-sm text-[#383f36]">
          <p>
            I spent 10+ years living with communities, bringing an ethnographic lens to products, public policy, and digital services—uncovering insights that align user needs with organizational strategy.
          </p>
          <p>
            Now based in Toronto, I bring an integrated qualitative lens to technology teams, public policy groups, and service design agencies—designing and researching for the messy middle where people actually live.
          </p>
        </div>
      </section>

      {/* 2. Biography & Profile Card */}
      <section aria-labelledby="story-heading" className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#ece7dc]/80 border border-[#cfc8ba] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#383f36] leading-relaxed">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6d5535] font-bold block">
              Background & Story
            </span>
            <h2 id="story-heading" className="text-xl sm:text-3xl font-serif text-[#141715] leading-snug">
              Ten years of immersion in complex field sites taught me that when systems fail, they don't fail dramatically—they fail quietly.
            </h2>
            <p>
              With a PhD(ABD) in Cultural Anthropology and extensive experience in user research, I look beyond clicks, form completion rates, and surface survey answers. I examine how lived routines, mental fatigue, unwritten tribal knowledge, and emotional defense mechanisms influence the way people interact with software and institutions.
            </p>
            <p>
              Whether working with remote Himalayan communities navigating ambiguous state borders or mortgage processing officers keeping legacy core banking systems afloat, my goal remains consistent: transform invisible human friction into clear, resilient, and human-centered design strategy.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-white shadow-sm max-w-sm aspect-[4/5] w-full">
              <img 
                src="/images/ranjeeta-portrait.jpg" 
                alt="Portrait of Ranjeeta Adhikari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Pillars */}
      <section aria-labelledby="philosophy-heading" className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
            Core Philosophy
          </span>
          <h2 id="philosophy-heading" className="text-2xl sm:text-4xl font-serif text-[#141715] mt-0.5">
            How I Approach Research
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#6d5535] block mb-2">{p.num}</span>
                <h3 className="text-lg font-serif text-[#141715]">{p.title}</h3>
                <h4 className="text-xs font-mono text-[#1b3b2b] font-semibold mb-2">{p.subtitle}</h4>
                <p className="text-xs text-[#383f36] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Dark Quote Banner */}
      <section aria-label="Researcher philosophy quote" className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16201b] text-white space-y-4 shadow-xl border border-[#2a3830]">
          <Quote className="w-10 h-10 text-[#d18667] opacity-90" aria-hidden="true" />
          <p className="text-xl sm:text-3xl font-serif italic leading-relaxed text-[#f4f7f4] max-w-3xl">
            "The best technology doesn’t ask users to adapt to its logic; it adapts to theirs. Good design is responsive and relational—it listens before it prescribes."
          </p>
          <div className="pt-2 border-t border-[#34443b] flex items-center justify-between text-xs font-mono text-[#c2d2c8]">
            <span>— Ranjeeta Adhikari, PhD(ABD)</span>
            <span>Anthropologist & UX Researcher</span>
          </div>
        </div>
      </section>

      {/* 5. What I Bring to Product Teams */}
      <section aria-labelledby="capabilities-heading" className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
            Capabilities
          </span>
          <h2 id="capabilities-heading" className="text-2xl sm:text-4xl font-serif text-[#141715] mt-0.5">
            What I Bring to Product Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophy.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-2">
              <span className="text-xs font-mono font-bold text-[#7c2810]">0{idx + 1}</span>
              <h3 className="text-base sm:text-lg font-serif text-[#141715]">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom Clean Work Directory */}
      <section aria-labelledby="more-work-heading" className="pt-12 border-t border-[#ded8cc] px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold block mb-1">
              Case Studies
            </span>
            <h2 id="more-work-heading" className="text-2xl sm:text-4xl font-serif text-[#141715]">
              More work
            </h2>
          </div>
          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#1b3b2b] hover:text-[#7c2810] border border-[#cfc8ba] bg-white px-3.5 py-2 rounded-full shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none min-h-[44px]"
          >
            All work <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {projects.map((study) => (
            <Link
              key={study.id}
              to={`/work/${study.id}`}
              className="group border-t border-[#ded8cc] pt-4 space-y-2 flex flex-col justify-between hover:border-[#1b3b2b] transition-colors focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none rounded-sm"
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6d5535] font-bold block">
                  Case Study
                </span>
                <h3 className="text-sm sm:text-base font-serif font-medium text-[#141715] group-hover:text-[#7c2810] transition-colors leading-snug">
                  {study.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#454c45] group-hover:text-[#1b3b2b] transition-colors flex items-center gap-1 pt-1 font-medium">
                {study.tag.split("·")[0].trim()} <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}