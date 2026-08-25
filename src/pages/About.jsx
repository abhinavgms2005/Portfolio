import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Quote, 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Target, 
  Layers, 
  Users, 
  BookOpen, 
  Award,
  ArrowRight
} from "lucide-react";
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
      desc: "Deep qualitative inquiries going past surface answers to uncover the unspoken social rules, mental models, and environmental realities driving human decisions."
    },
    {
      num: "02",
      title: "Strategic Research Leadership",
      desc: "Aligning exploratory field research directly with business goals—framing high-impact problem statements and converting ambiguous feedback into executive roadmaps."
    },
    {
      num: "03",
      title: "Complex Systems & Service Mapping",
      desc: "Connecting micro-level user friction with macro-level operational pipelines. Designing end-to-end service blueprints that account for human workarounds."
    },
    {
      num: "04",
      title: "Trust-Based Stakeholder Alignment",
      desc: "Fostering psychological safety with marginalized or vulnerable communities while uniting cross-functional engineering, product, and policy leaders."
    }
  ];

  const publications = [
    {
      tag: "UX & ANTHROPOLOGY",
      tagColor: "bg-[#8f754f] text-white",
      title: "Why Systems Fail Quietly: The Hidden Cost of Human Workarounds",
      desc: "An essay examining how frontline employees compensate for broken digital architectures."
    },
    {
      tag: "SERVICE DESIGN",
      tagColor: "bg-[#2d503e] text-white",
      title: "Designing for the Margins: How Edge Cases Redefine Platforms",
      desc: "Why designing for excluded users inherently creates more resilient platforms for everyone."
    },
    {
      tag: "METHODOLOGY",
      tagColor: "bg-[#c2785c] text-white",
      title: "Beyond the Interview Script: The Ethnographic Art of Listening to Silence",
      desc: "Qualitative research protocols for navigating cultural taboos and institutional fear."
    },
    {
      tag: "GOVERNANCE",
      tagColor: "bg-[#2b4c60] text-white",
      title: "Digital Identity at the Borderland: Where Sovereign Codes Break Down",
      desc: "Field reflections on biometric registration enclaves along Himalayan borders."
    },
    {
      tag: "AGRITECH UX",
      tagColor: "bg-[#715c3f] text-white",
      title: "Ritual Calendars as Design Systems: Bridging Moon Cycles and Agronomy",
      desc: "Lessons in designing agricultural interfaces for indigenous smallholder cultivators."
    },
    {
      tag: "ETHICS & CARE",
      tagColor: "bg-[#5e635d] text-white",
      title: "Honor the Human, Understand the System: A Manifesto for Radical UX Empathy",
      desc: "Principles for ethical qualitative stewardship in commercial technology teams."
    }
  ];

  return (
    <div className="bg-[#f7f5f0] text-[#1c1d1f] font-sans antialiased selection:bg-[#2d4a3e]/20 selection:text-[#1b382b] pt-24 sm:pt-28 pb-16 space-y-20">
      
      {/* 1. Header Hero */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#c2785c] font-semibold block">
          Background & Anthropological Lens
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#161a18] font-normal leading-[1.1] tracking-tight max-w-4xl">
          I research like an anthropologist and deliver like a UX strategist.
        </h1>
        <p className="text-base sm:text-xl font-serif italic text-[#3c443e] leading-relaxed max-w-3xl">
          Bridging the critical gap between deep human qualitative truth and systemic digital products, public policy, and enterprise workflows.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#e2ded4] text-xs sm:text-sm text-[#4e5550]">
          <p>
            I spent 10+ years living with communities, bringing an ethnographic lens to products, public policy, and digital services—uncovering insights that align user needs with organizational strategy.
          </p>
          <p>
            Now based in Toronto, I bring an integrated qualitative lens to technology teams, public policy groups, and service design agencies—designing and researching for the messy middle where people actually live.
          </p>
        </div>
      </section>

      {/* 2. Visual Case Study Previews (Alternating Layout matching Framer) */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b border-[#e2ded4] pb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
            Featured Research Work
          </span>
          <span className="text-xs font-mono text-[#737a71]">4 Active Studies</span>
        </div>

        {/* Study 1: India-Bhutan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#c2785c] font-semibold">
              Borderland Governance & Digital Identity UX
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] leading-tight">
              When the System Can’t See You: How Do You Prove You Exist?
            </h2>
            <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
              An ethnographic UX case study exploring cultural identity, emotional friction, and inclusive service design at the India–Bhutan border.
            </p>
            <Link 
              to="/work/india-bhutan"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#2d503e] font-bold hover:text-black transition-colors pt-2"
            >
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm aspect-[16/10]">
            <img 
              src="/images/sikkim-prayer-flags.jpg" 
              alt="Himalayan prayer flags overlooking mountain crossing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Study 2: Organic Farming */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm aspect-[16/10] order-2 md:order-1">
            <img 
              src="/images/sikkim-field-inquiry.jpg" 
              alt="In-situ contextual inquiry in Sikkim" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 order-1 md:order-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2d503e] font-semibold">
              Agricultural Systems, Public Policy & Livelihoods
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] leading-tight">
              Organic Farming in Sikkim: Systems, Trust, and Co-Design
            </h2>
            <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
              A 2-year longitudinal ethnographic and participatory co-design initiative bridging the gap between top-down state policy and generational farmer realities.
            </p>
            <Link 
              to="/work/organic-farming"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#2d503e] font-bold hover:text-black transition-colors pt-2"
            >
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Study 3: FinTech Mortgage Operations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2b4c60] font-semibold">
              Enterprise UX & Core Banking Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] leading-tight">
              Designing Trust Behind the Scenes: Mortgage Operations
            </h2>
            <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
              An embedded operational ethnography uncovering how legacy green-screen systems force extraordinary employee vigilance to produce ordinary customer outcomes.
            </p>
            <Link 
              to="/work/fintech"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#2d503e] font-bold hover:text-black transition-colors pt-2"
            >
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-white shadow-sm p-4 aspect-[16/10] flex items-center justify-center">
            <img 
              src="/images/fintech-journey-map.png" 
              alt="Mortgage Operations Journey Map" 
              className="w-full h-auto object-contain rounded-xl"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-journey-map.png"; }}
            />
          </div>
        </div>

        {/* Study 4: Women in Panchayat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm aspect-[16/10] order-2 md:order-1">
            <img 
              src="/images/panchayat-women-meeting.jpg" 
              alt="Women leaders meeting in Telangana" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"; }}
            />
          </div>
          <div className="space-y-3 order-1 md:order-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9e3a53] font-semibold">
              Gender & Public Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] leading-tight">
              Reserved. Elected. Silenced?
            </h2>
            <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
              Designing with first-time women leaders in India’s Panchayati Raj to move governance systems from symbolic tokenism to active, lived leadership.
            </p>
            <Link 
              to="/work/women-panchayat"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#2d503e] font-bold hover:text-black transition-colors pt-2"
            >
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Biography & Profile Card */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#ece7dc]/70 border border-[#ded7c8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#4e5550] leading-relaxed">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8f754f] font-semibold block">
              Background & Story
            </span>
            <h2 className="text-xl sm:text-3xl font-serif text-[#161a18] leading-snug">
              Ten years of immersion in complex field sites taught me that when systems fail, they don't fail dramatically—they fail quietly.
            </h2>
            <p>
              With a Ph.D. in Cultural Anthropology and extensive experience in user research, I look beyond clicks, form completion rates, and surface survey answers. I examine how lived routines, mental fatigue, unwritten tribal knowledge, and emotional defense mechanisms influence the way people interact with software and institutions.
            </p>
            <p>
              Whether working with remote Himalayan communities navigating ambiguous state borders or mortgage processing officers keeping legacy core banking systems afloat, my goal remains consistent: transform invisible human friction into clear, resilient, and human-centered design strategy.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-white shadow-sm max-w-sm">
              <img 
                src="/images/ranjeeta-profile.jpg" 
                alt="Ranjeeta Adhikari" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Core Pillars (Immerse -> Translate -> Co-Design) */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
            Core Philosophy
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#161a18] mt-0.5">
            How I Approach Research
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#8f754f] block mb-2">{p.num}</span>
                <h3 className="text-lg font-serif text-[#161a18]">{p.title}</h3>
                <h4 className="text-xs font-mono text-[#2d503e] mb-2">{p.subtitle}</h4>
                <p className="text-xs text-[#4e5550] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Dark Quote Banner */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d2621] text-white space-y-4 shadow-xl">
          <Quote className="w-10 h-10 text-[#d18667] opacity-80" />
          <p className="text-xl sm:text-3xl font-serif italic leading-relaxed text-[#f4f7f4] max-w-3xl">
            "The best technology doesn’t ask users to adapt to its logic; it adapts to theirs. Good design is responsive and relational—it listens before it prescribes."
          </p>
          <div className="pt-2 border-t border-[#34443b] flex items-center justify-between text-xs font-mono text-[#a3b3aa]">
            <span>— Ranjeeta Adhikari, Ph.D.</span>
            <span>Anthropologist & UX Researcher</span>
          </div>
        </div>
      </section>

      {/* 6. Publications & Thought Leadership Grid */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
            Publications & Thought Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#161a18] mt-0.5">
            Writings & Field Notes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publications.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${item.tagColor} inline-block`}>
                  {item.tag}
                </span>
                <h3 className="text-base font-serif text-[#161a18] leading-snug">{item.title}</h3>
                <p className="text-xs text-[#5a615b] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. What I Bring to Product Teams */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#161a18] mt-0.5">
            What I Bring to Product Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophy.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-2">
              <span className="text-xs font-mono font-bold text-[#c2785c]">0{idx + 1}</span>
              <h3 className="text-base sm:text-lg font-serif text-[#161a18]">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="p-8 rounded-3xl bg-[#1d2621] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif">Let's uncover what your users aren't saying.</h3>
            <p className="text-xs sm:text-sm text-[#a3b3aa]">
              Available for full-time UX research leadership, strategic consulting, or qualitative advisory.
            </p>
          </div>
          <a
            href="mailto:ranjadhishar@gmail.com?subject=Strategic%20Research%20Inquiry"
            className="bg-[#d18667] hover:bg-[#d18667]/90 text-white px-5 py-2.5 rounded-full text-xs uppercase font-mono tracking-wider font-semibold whitespace-nowrap transition-all shadow-md flex items-center gap-1.5"
          >
            Start a Conversation <Sparkles className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
}