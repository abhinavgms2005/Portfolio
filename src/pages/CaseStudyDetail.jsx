import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Quote, 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Target, 
  ArrowRight,
  User,
  Shield,
  GraduationCap,
  Store,
  Heart,
  Lightbulb,
  Cpu,
  CheckCircle2,
  GitMerge,
  Award,
  Layers,
  Check
} from "lucide-react";
import { projects } from "../data/projects";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const currentId = id || "fintech";
  const study = projects.find((p) => p.id === currentId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentId]);

  if (!study) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center bg-[#f7f5f0] min-h-screen">
        <h2 className="text-3xl font-serif text-[#161a18]">Case Study Not Found</h2>
        <Link to="/" className="mt-6 inline-block text-[#c2785c] font-mono text-sm underline">
          ← Return to Selected Work
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f5f0] text-[#1c1d1f] font-sans antialiased selection:bg-[#2d4a3e]/20 selection:text-[#1b382b]">
      
      {/* Editorial Header Banner */}
      <div className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#e2ded4]">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5e635d] hover:text-black transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Selected Work
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs uppercase tracking-widest px-3.5 py-1 rounded-full font-mono font-medium border ${study.tagBg} ${study.tagText} ${study.tagBorder}`}>
            {study.tag}
          </span>
          <span className="text-xs text-[#6e746d] font-mono">{study.timeline}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#161a18] font-normal leading-[1.1] mb-5 tracking-tight">
          {study.title}
        </h1>

        <p className="text-base sm:text-xl font-serif italic text-[#3c443e] leading-relaxed max-w-3xl">
          {study.subtitle}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#e2ded4] text-xs sm:text-sm">
          <div>
            <span className="text-xs font-mono uppercase text-[#737a71] flex items-center gap-1.5 mb-0.5">
              <Briefcase className="w-3.5 h-3.5" /> Role
            </span>
            <strong className="text-[#1a1f1b] font-medium">{study.role}</strong>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#737a71] flex items-center gap-1.5 mb-0.5">
              <Calendar className="w-3.5 h-3.5" /> Timeline
            </span>
            <span className="text-[#1a1f1b]">{study.timeline}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#737a71] flex items-center gap-1.5 mb-0.5">
              <MapPin className="w-3.5 h-3.5" /> Location
            </span>
            <span className="text-[#1a1f1b]">{study.location}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#737a71] flex items-center gap-1.5 mb-0.5">
              <Target className="w-3.5 h-3.5" /> Impact Domain
            </span>
            <span className="text-[#1a1f1b]">{study.domain}</span>
          </div>
        </div>
      </div>

      {/* Main Content Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Context & Premise Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#ece7dc] border border-[#ded7c8] space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> The Context & Problem Statement
          </span>
          <p className="text-sm sm:text-base text-[#2a2e2b] leading-relaxed">
            {study.context}
          </p>
          {study.scale && (
            <p className="text-xs font-mono text-[#737a71] pt-1">
              Fieldwork Scope: {study.scale}
            </p>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY: ORGANIC FARMING CO-DESIGN                                     */}
        {/* ========================================================================= */}
        {study.id === "organic-farming" && (
          <>
            <section className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                Impact Delivered
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.stats?.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between`}>
                    <div className="text-2xl sm:text-3xl font-serif italic mb-1">{stat.val}</div>
                    <div className="text-xs opacity-90 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-2xl overflow-hidden border border-[#ded8cc] aspect-[4/3] bg-[#ece7dc]">
                  <img src="/images/sikkim-greenhouse-solo.jpg" alt="Solo cultivator in greenhouse" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#ded8cc] aspect-[4/3] bg-[#ece7dc]">
                  <img src="/images/sikkim-greenhouse-pair.jpg" alt="Two farmers in greenhouse" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-xs font-mono text-[#737a71]">
                Visual Artifact 1.0 — High-yield protected polyhouse cultivation: solo pruning inspection (left) and collaborative trellis maintenance (right).
              </p>
            </div>

            {study.strategicInsights && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Strategic UX Insights
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Problem Reframings That Drove Design Decisions
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.strategicInsights.map((insight, idx) => (
                    <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#8f754f] font-semibold">
                          Insight 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 bg-[#f4f1ea] rounded-full text-[#5e635d]">
                          Field Reality
                        </span>
                      </div>
                      <h3 className="text-lg font-serif text-[#161a18]">
                        {insight.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                        {insight.reality}
                      </p>
                      <div className="pt-2 border-t border-[#f0ece1] flex items-start gap-2 text-xs text-[#2d503e]">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#c2785c]" />
                        <span><strong>Design Shift:</strong> {insight.shift}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-2xl overflow-hidden border border-[#ded8cc] aspect-[4/3] bg-[#ece7dc]">
                  <img src="/images/sikkim-banana-grove.jpg" alt="Companion planting in banana grove" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#ded8cc] aspect-[4/3] bg-[#ece7dc]">
                  <img src="/images/sikkim-field-inquiry.jpg" alt="In-situ contextual inquiry" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-xs font-mono text-[#737a71]">
                Visual Artifact 2.0 — Traditional companion planting in banana groves (left) and in-situ participatory inquiry during harvesting (right).
              </p>
            </div>

            {study.solutions && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Interventions in Practice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Solutions Delivered
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.solutions.map((sol, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-2xl mb-2">{sol.icon}</div>
                        <h4 className="text-base sm:text-lg font-serif text-[#161a18] mb-1.5">{sol.title}</h4>
                        <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">{sol.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study.failedPrototypes && (
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Strategic Iteration
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    {study.failedPrototypes.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5a615b]">
                    Five prototypes that failed in the field, root cause analysis, and responsive pivots.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-[#ded8cc] bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#24332b] text-white font-mono text-xs uppercase tracking-wider">
                      <tr>
                        {study.failedPrototypes.headers.map((h, i) => (
                          <th key={i} className="p-3.5 sm:p-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece7dc] text-[#333734]">
                      {study.failedPrototypes.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#fbf9f5] transition-colors">
                          <td className="p-3.5 sm:p-4 font-semibold text-[#181a19]">{row.prototype}</td>
                          <td className="p-3.5 sm:p-4 text-[#914d3a]">{row.why}</td>
                          <td className="p-3.5 sm:p-4 text-[#2d503e] font-medium">{row.pivot}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {study.quotes && (
              <section className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                  Voices from the Field
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.quotes.map((q, idx) => (
                    <blockquote key={idx} className="p-6 rounded-3xl bg-[#e8eee6] border border-[#cbd8c7] text-[#24332b] space-y-2.5 shadow-sm flex flex-col justify-between">
                      <p className="text-base sm:text-lg font-serif italic leading-snug">
                        "{q.text}"
                      </p>
                      <footer className="text-xs font-mono uppercase tracking-wider text-[#2d503e] font-semibold pt-2 border-t border-[#cbd8c7]/50">
                        — {q.speaker}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            {study.reflection && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] text-[#2a2e2b] space-y-3 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8f754f] font-semibold flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> Principal Research Reflection
                </span>
                <p className="text-sm sm:text-base font-serif italic leading-relaxed text-[#3c443e]">
                  "{study.reflection}"
                </p>
              </div>
            )}
          </>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY: FINTECH & MORTGAGE OPERATIONS                                 */}
        {/* ========================================================================= */}
        {study.id === "fintech" && (
          <>
            <section className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2b4c60] font-semibold">
                Operational Reality by the Numbers
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.stats?.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between`}>
                    <div className="text-2xl sm:text-3xl font-serif italic mb-1">{stat.val}</div>
                    <div className="text-xs opacity-90 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {study.narrative && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2b4c60] font-semibold">
                    Lived Operational Experience
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Behind the Green Screen
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.narrative.map((item, idx) => (
                    <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3">
                      <h3 className="text-lg sm:text-xl font-serif text-[#161a18]">
                        {item.heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study.keyFindings && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Core Ethnographic Insights
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    5 Systemic Gaps Discovered
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.keyFindings.map((finding, idx) => (
                    <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#e3dfd5] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#2b4c60] font-semibold">
                          Finding {finding.num}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 bg-[#f4f1ea] rounded-full text-[#5e635d]">
                          Operational Insight
                        </span>
                      </div>
                      <h3 className="text-lg font-serif text-[#1b1f1c] font-normal">
                        {finding.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                        {finding.desc}
                      </p>
                      <div className="pt-2 border-t border-[#f0ece1] flex items-start gap-2 text-xs text-[#2d503e]">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#c2785c]" />
                        <span><strong>Design Opportunity:</strong> {finding.opportunity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-journey-map.png" 
                  alt="Operational Burden Map" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-journey-map.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#737a71]">
                Artifact 1.0 — Operational Burden Map: Disconnected platforms and human middleware dependencies.
              </figcaption>
            </figure>

            {study.cognitiveLoad && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8f754f] font-semibold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> Cognitive Load Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#161a18]">
                  {study.cognitiveLoad.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                  {study.cognitiveLoad.desc}
                </p>
              </section>
            )}

            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-cognitive-matrix.png" 
                  alt="Recognition vs Recall Matrix" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-cognitive-matrix.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#737a71]">
                Artifact 2.0 — Recognition vs. Recall: Green-screen terminal memory load vs. human-centered UI.
              </figcaption>
            </figure>

            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-service-blueprint.png" 
                  alt="Service Blueprint: The True Gap" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-service-blueprint.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#737a71]">
                Artifact 3.0 — Service Blueprint: Customer visibility vs. back-office human compensation layer.
              </figcaption>
            </figure>

            {study.conceptClearServe && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Concept Exploration
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    {study.conceptClearServe.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5a615b] mt-1">
                    {study.conceptClearServe.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.conceptClearServe.layers.map((layer, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="w-8 h-8 rounded-xl bg-[#e8edf2] text-[#2b4c60] flex items-center justify-center font-mono text-xs font-bold mb-3">
                          0{idx + 1}
                        </div>
                        <h4 className="text-base font-serif text-[#161a18] mb-1.5">{layer.name}</h4>
                        <p className="text-xs text-[#4e5550] leading-relaxed">{layer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-ui-screens.png" 
                  alt="ClearServe UI Concept Screens" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-ui-screens.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#737a71]">
                Artifact 4.0 — ClearServe Mobile Portal & Live Milestone Tracking.
              </figcaption>
            </figure>

            {study.reflection && (
              <blockquote className="p-6 sm:p-8 rounded-3xl bg-[#e8eee6] border border-[#cbd8c7] text-[#24332b] space-y-3 shadow-sm">
                <Quote className="w-8 h-8 text-[#2d503e]/40" />
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed">
                  "{study.reflection}"
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                  — Ranjeeta Adhikari, Operational Ethnography Reflection
                </footer>
              </blockquote>
            )}
          </>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY: INDIA-BHUTAN (FULL UNABRIDGED FRAMER RESTORATION)             */}
        {/* ========================================================================= */}
        {study.id === "india-bhutan" && (
          <>
            {/* Visual Artifact 1: Temple & Field Site */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc]">
                <img 
                  src="/images/bhutan-temple.jpg" 
                  alt="Chunabhatti village border temple" 
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"; }}
                />
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8f754f] font-semibold block">
                  Field Site: Chunabhatti Village (India–Bhutan Border)
                </span>
                <p>
                  Chunabhatti is a unique Himalayan enclave situated right along the India–Bhutan border. Here, geopolitical boundaries bisect centuries of shared religious, kinship, and ecological practices.
                </p>
                <p>
                  While state registries treat border crossing as a rigid administrative event, for the Drukpa community, daily life, healthcare, and trade depend on fluid cross-border kinship and ancestral mountain trails.
                </p>
              </div>
            </div>

            {/* Meet the Users */}
            {study.meetTheUsers && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Meet the Users: The Drukpa Community
                </span>
                <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                  {study.meetTheUsers}
                </p>
              </section>
            )}

            {/* Visual Artifact 2: Prayer Flags */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm">
                <img 
                  src="/images/sikkim-prayer-flags.jpg" 
                  alt="Himalayan prayer flags overlooking mountain crossing" 
                  className="w-full h-auto max-h-[440px] object-cover object-center"
                />
              </div>
              <figcaption className="text-xs font-mono text-[#737a71]">
                Visual Artifact 1.0 — Wind-horse prayer flags along the mountain ridge: ritual markers of belonging that transcend sovereign borders.
              </figcaption>
            </figure>

            {/* Stats Scope Grid */}
            <section className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                Fieldwork Scope & Outcomes
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.stats?.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between`}>
                    <div className="text-2xl sm:text-3xl font-serif italic mb-1">{stat.val}</div>
                    <div className="text-xs opacity-90 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Achievements Grid */}
            {study.achievements && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Key Achievements
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Translating Lived Practice into UX Outcomes
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {study.achievements.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-2">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <h4 className="text-base font-serif font-medium text-[#161a18]">{item.title}</h4>
                      <p className="text-xs text-[#5e635d] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Demonstrated Skills */}
            {study.skillsDemonstrated && (
              <section className="p-6 sm:p-8 rounded-3xl bg-[#ece7dc]/60 border border-[#ded7c8] space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8f754f] font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Demonstrated Research Skills
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {study.skillsDemonstrated.map((skill, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-[#ded8cc] space-y-1">
                      <h5 className="text-xs font-mono uppercase font-bold text-[#2d503e]">{skill.title}</h5>
                      <p className="text-xs text-[#5e635d] leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tripartite Framework (Overlapping Systems) */}
            <section className="p-6 sm:p-10 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-6">
              <div className="max-w-2xl space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2d503e] font-semibold flex items-center gap-1.5">
                  <GitMerge className="w-4 h-4" /> Systems Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#161a18]">Overlapping Systems of Identity</h3>
                <p className="text-xs sm:text-sm text-[#5a615b] leading-relaxed">
                  The Drukpa community continuously navigates three overlapping systems: bureaucratic schemes (government portals), spiritual/cultural relations (forest spirits, sacred geographies), and informal kinship (cross-border barter, elders). The intersection points highlight design opportunities for inclusion through cross-system understanding.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-5 rounded-2xl bg-[#eef3ed] border border-[#cbd8c7] space-y-2">
                  <div className="w-7 h-7 rounded-full bg-[#2d503e] text-white flex items-center justify-center font-mono text-xs font-bold">01</div>
                  <h4 className="text-base font-serif text-[#1b382b]">Cultural & Spiritual</h4>
                  <p className="text-xs text-[#3a5245] leading-relaxed">Sacred geographies, customary rituals, and forest spirits.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#fdf5f2] border border-[#f0ded4] space-y-2">
                  <div className="w-7 h-7 rounded-full bg-[#c2785c] text-white flex items-center justify-center font-mono text-xs font-bold">02</div>
                  <h4 className="text-base font-serif text-[#8f3f24]">Bureaucratic & State</h4>
                  <p className="text-xs text-[#713e2f] leading-relaxed">Fixed form fields, biometric registries, and rigid citizenship definitions.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8f5ee] border border-[#ded7c8] space-y-2">
                  <div className="w-7 h-7 rounded-full bg-[#8f754f] text-white flex items-center justify-center font-mono text-xs font-bold">03</div>
                  <h4 className="text-base font-serif text-[#5e4b2d]">Lived & Economic</h4>
                  <p className="text-xs text-[#52442d] leading-relaxed">Informal trail barter, seasonal migration, and cross-border clinics.</p>
                </div>
              </div>
            </section>

            {/* Listen -> Decode -> Co-Create Methodology */}
            {study.approach && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#c2785c] font-semibold">
                    The Research Plan
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Listening Beyond Data: Listen → Decode → Co-Create
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.approach.map((step, idx) => (
                    <div key={idx} className="space-y-2 p-5 bg-[#fdfaf7] rounded-2xl border border-[#f0ded4]">
                      <h4 className="text-base font-serif font-medium text-[#161a18]">{step.phase}</h4>
                      <p className="text-xs text-[#5a615b] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Personas: Deki + 4 Community Archetypes */}
            <section className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                  Ethnographic Personas
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                  Inclusive UX Anchored in Real Stories
                </h2>
                <p className="text-xs sm:text-sm text-[#5a615b] mt-1">
                  Drawn from immersive fieldwork in Chunabhatti village, reflecting lived complexity across bureaucratic, spiritual, and ecological systems.
                </p>
              </div>

              {/* Deki Lead Dossier */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#ece7dc] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#e3eae1] text-[#2d503e] flex items-center justify-center shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-serif text-[#161a18]">Deki — The Forest Mother</h3>
                          <span className="text-xs font-mono px-2.5 py-0.5 bg-[#e3eae1] text-[#2d503e] rounded-full border border-[#cbd8c7]">
                            Primary Archetype
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#8f754f] mt-0.5">Age 38 • Caregiver, Forest Dweller • Chunabhatti</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4e5550]">
                    <div className="p-3.5 bg-[#fbf9f5] rounded-xl border border-[#ece7dc]">
                      <strong className="text-[#161a18] block mb-0.5">Primary Goal:</strong>
                      Access shame-free healthcare for her family.
                    </div>
                    <div className="p-3.5 bg-[#fbf9f5] rounded-xl border border-[#ece7dc]">
                      <strong className="text-[#161a18] block mb-0.5">Key Barrier:</strong>
                      Language gap and fear of cultural ridicule in state hospitals.
                    </div>
                    <div className="p-3.5 bg-[#fbf9f5] rounded-xl border border-[#ece7dc]">
                      <strong className="text-[#161a18] block mb-0.5">Observed Behavior:</strong>
                      Consults shamans; secretly crosses into Bhutan for trusted care.
                    </div>
                    <div className="p-3.5 bg-[#e8eee6] rounded-xl border border-[#cbd8c7] text-[#24332b]">
                      <strong className="text-[#2d503e] block mb-0.5">UX Insight:</strong>
                      Embed trusted intermediaries (shamans, kin) into help and intake flows.
                    </div>
                  </div>

                  <blockquote className="p-3.5 bg-[#f7f5f0] rounded-2xl border-l-4 border-[#2d503e] text-xs sm:text-sm font-serif italic text-[#2d503e]">
                    "There’s no one who understands us at the clinic. But the monk knew what to do."
                  </blockquote>
                </div>

                {/* Deki Journey Blueprint */}
                <div className="pt-4 border-t border-[#ece7dc] space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8f754f] font-semibold block">
                    Journey Friction Blueprint: Healthcare Seeking Flow
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#fdfaf7] border border-[#f0ded4] space-y-1.5">
                      <span className="text-xs font-mono text-[#914d3a] font-bold block">01. Daughter Sick</span>
                      <p className="text-xs text-[#5e635d]"><strong>Emotion:</strong> Anxiety + Helplessness</p>
                      <p className="text-xs text-[#5e635d]"><strong>Barrier:</strong> No clinic nearby, fear of ridicule</p>
                      <p className="text-xs text-[#161a18]"><strong>Behavior:</strong> Prays, consults shamans</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fdfaf7] border border-[#f0ded4] space-y-1.5">
                      <span className="text-xs font-mono text-[#914d3a] font-bold block">02. Seeking Help</span>
                      <p className="text-xs text-[#5e635d]"><strong>Emotion:</strong> Stress & Urgency</p>
                      <p className="text-xs text-[#5e635d]"><strong>Barrier:</strong> Long mountain walks, rigid forms</p>
                      <p className="text-xs text-[#161a18]"><strong>Behavior:</strong> Calls cousins in Bhutan</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fcf5f5] border border-[#ebd2d2] space-y-1.5">
                      <span className="text-xs font-mono text-[#a83232] font-bold block">03. At Hospital</span>
                      <p className="text-xs text-[#a83232]"><strong>Emotion:</strong> Embarrassment</p>
                      <p className="text-xs text-[#5e635d]"><strong>Barrier:</strong> Language barrier, cultural shame</p>
                      <p className="text-xs text-[#161a18]"><strong>Behavior:</strong> Leaves without treatment</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#f4f7f4] border border-[#cde0cd] space-y-1.5">
                      <span className="text-xs font-mono text-[#2d503e] font-bold block">04. Bhutan Route</span>
                      <p className="text-xs text-[#2d503e]"><strong>Emotion:</strong> Relief + Worry</p>
                      <p className="text-xs text-[#5e635d]"><strong>Barrier:</strong> Checkpoint crossing risks</p>
                      <p className="text-xs text-[#161a18]"><strong>Behavior:</strong> Secretly travels for care</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Community Personas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#f4ece1] text-[#8f754f] flex items-center justify-center shrink-0">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif text-[#161a18]">Nado — The Cultural Steward</h4>
                        <span className="text-xs font-mono text-[#737a71]">Age 45 • Ritual leader, forest protector</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#4e5550] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Safeguard ancestral traditions and sacred forests.</p>
                      <p><strong>Barrier:</strong> Regarded as a squatter due to lack of formal state land titles.</p>
                      <p className="text-[#2d503e] pt-0.5"><strong>UX Insight:</strong> Recognize spiritual land stewardship within environmental policy.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#161a18]">
                    "The state sees trees as timber. To our people, they are guardians of our ancestors."
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#fdf2ee] text-[#c2785c] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif text-[#161a18]">Pem Doma — The Culturally Split Teen</h4>
                        <span className="text-xs font-mono text-[#737a71]">Age 16 • Student, seasonal worker</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#4e5550] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Balance education with family harvest duties.</p>
                      <p><strong>Barrier:</strong> Forced binary choice between school attendance and seasonal family income.</p>
                      <p className="text-[#2d503e] pt-0.5"><strong>UX Insight:</strong> Design flexible learning tools matching seasonal migration rhythms.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#161a18]">
                    "When harvest comes, I have to leave class. The digital system marks me dropped out."
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#eef3ed] text-[#2d503e] flex items-center justify-center shrink-0">
                        <Store className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif text-[#161a18]">Karma Sherpa — The Cross-Border Entrepreneur</h4>
                        <span className="text-xs font-mono text-[#737a71]">Age 28 • Informal trader, mobile vendor</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#4e5550] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Grow trade routes without checkpoint legal risk.</p>
                      <p><strong>Barrier:</strong> Absence of formal vendor recognition or cross-border trade IDs.</p>
                      <p className="text-[#2d503e] pt-0.5"><strong>UX Insight:</strong> Build mobile-first interfaces supporting semi-legal traders.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#161a18]">
                    "We keep the market alive on both sides, yet on paper we do not exist."
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#f7edf0] text-[#a84d6b] flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif text-[#161a18]">Tshering Om — The Borderland Caregiver</h4>
                        <span className="text-xs font-mono text-[#737a71]">Age 30 • Farmer and mother</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#4e5550] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Keep children healthy, registered, and culturally rooted.</p>
                      <p><strong>Barrier:</strong> Legal ambiguity with dual health records and conflicting name spellings.</p>
                      <p className="text-[#2d503e] pt-0.5"><strong>UX Insight:</strong> Support hybrid citizenship declarations and fuzzy document matching.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#161a18]">
                    "My children belong to this mountain, not to one side of the fence."
                  </div>
                </div>
              </div>
            </section>

            {/* Turning Point Hero: Clean Image Asset (No overlapping HTML text) */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm">
                <img 
                  src="/images/bhutan-elder-gho.jpg" 
                  alt="Nado, Drukpa Elder: We are Indian by paper, but Bhutanese in heart. Your office forms don't know our heart." 
                  className="w-full h-auto object-cover object-center"
                />
              </div>
              <figcaption className="text-xs font-mono text-[#737a71]">
                The Turning Point: Shifting focus from surface form usability to designing for dignity, emotional safety, and cultural recognition.
              </figcaption>
            </figure>

            {/* 5 Strategic UX Insights */}
            {study.uxInsights && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Insights & Design Opportunities
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Translating Lived Friction into Action
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.uxInsights.map((insight, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-[#161a18]">{insight.title}</h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 bg-[#f4f1ea] rounded-full text-[#5e635d]">
                          Insight 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4e5550]">
                        <strong className="text-[#8f3f24]">Friction:</strong> {insight.problem}
                      </p>
                      <div className="pt-2 border-t border-[#f0ece1] flex items-start gap-2 text-xs text-[#2d503e]">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#2d503e]" />
                        <span><strong>Solution:</strong> {insight.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Framework: Designing from the Margins */}
            {study.designPrinciples && (
              <section className="p-6 sm:p-8 rounded-3xl bg-[#fdf5f2] border border-[#f2d0c4] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#c2785c] font-semibold">
                    Core Design Framework
                  </span>
                  <h3 className="text-2xl font-serif text-[#161a18] mt-0.5">
                    Designing From the Margins
                  </h3>
                  <p className="text-xs sm:text-sm text-[#713e2f] mt-1 italic">
                    "If I don’t see myself in your design, I won’t trust your system." — Tshering Om, Drukpa villager
                  </p>
                </div>

                <div className="space-y-3">
                  {study.designPrinciples.map((principle, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3.5 bg-white/80 rounded-2xl border border-[#f0ded4]">
                      <CheckCircle2 className="w-5 h-5 text-[#c2785c] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm font-serif text-[#161a18] block">{principle.title}</strong>
                        <p className="text-xs text-[#713e2f] leading-relaxed">{principle.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Personal Reflection: What I Felt and Learned */}
            {study.reflection && (
              <blockquote className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] text-[#24332b] space-y-4 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8f754f] font-semibold flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> What I Felt and Learned Along the Way
                </span>
                <p className="text-sm sm:text-base font-serif leading-relaxed text-[#3c443e]">
                  "{study.reflection}"
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#c2785c] font-semibold pt-4 border-t border-[#ece7dc]">
                  — Ranjeeta Adhikari | Lead UX Researcher & Ethnographer
                </footer>
              </blockquote>
            )}
          </>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY: WOMEN IN PANCHAYATI RAJ (TELANGANA)                           */}
        {/* ========================================================================= */}
        {study.id === "women-panchayat" && (
          <>
            {/* Field Image 1: Meeting in Machnoor Village */}
            <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm">
              <img 
                src="/images/panchayat-women-meeting.jpg" 
                alt="Designing for Women's Voice in Machnoor Village, Telangana" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"; }}
              />
            </div>

            {/* The Challenge Breakdown */}
            {study.theChallenge && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9e3a53] font-semibold">
                    Structural Context
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    The Challenge
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5a615b] mt-1">
                    India’s Panchayati Raj system reserves one-third of rural council seats for women — a milestone in policy. But for many first-time women leaders, the role came without support:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {study.theChallenge.map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3.5 bg-[#fdf2f4]/60 rounded-2xl border border-[#f5ccd5]/60">
                      <span className="text-[#9e3a53] font-bold text-sm">•</span>
                      <p className="text-xs text-[#4e5550] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs font-mono italic text-[#737a71] pt-1">
                  The result? Symbolic representation without real influence, eroding confidence and limiting impact.
                </p>
              </section>
            )}

            {/* Listening Between the Lines: 3 Systemic Barriers */}
            {study.systemicBarriers && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9e3a53] font-semibold">
                    Listening Between the Lines
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Three Systemic Barriers
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.systemicBarriers.map((card, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-wider text-[#9e3a53] font-semibold">Barrier 0{card.num}</span>
                          <span className="text-xs font-mono px-2.5 py-0.5 bg-[#fdf2f4] text-[#9e3a53] rounded-full">Systemic Gap</span>
                        </div>
                        <h3 className="text-lg font-serif text-[#161a18]">{card.title}</h3>
                        <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Approach & Methods Grid */}
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                  Fieldwork Engagement
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                  My Approach & Methods
                </h2>
              </div>

              {study.approachSteps && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.approachSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3.5 bg-[#fbf9f5] rounded-2xl border border-[#ece7dc]">
                      <span className="text-[#8f754f] font-mono text-xs font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                      <p className="text-xs text-[#4e5550] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              )}

              {study.methodsDetails && (
                <div className="pt-4 border-t border-[#ece7dc] space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8f754f] font-semibold block">
                    Methods Included
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {study.methodsDetails.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#f4f7f4] border border-[#cde0cd] space-y-1">
                        <h4 className="text-xs font-mono uppercase font-bold text-[#2d503e]">{m.title}</h4>
                        <p className="text-xs text-[#4e5550] leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Field Image 2: Polling Station */}
            <div className="rounded-3xl overflow-hidden border border-[#ded8cc] bg-[#ece7dc] shadow-sm">
              <img 
                src="/images/panchayat-polling-station.jpg" 
                alt="Women leaders at rural polling station in India" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"; }}
              />
            </div>

            {/* Co-Created Usability Tools */}
            {study.toolsCreated && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold">
                    Confidence-Building Tools
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#161a18] mt-0.5">
                    Co-Created Usability Tools
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.toolsCreated.map((tool, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#ded8cc] shadow-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-3xl mb-2">{tool.icon}</div>
                        <h4 className="text-base sm:text-lg font-serif text-[#161a18] mb-1">{tool.title}</h4>
                        <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pilot Outcomes */}
            {study.pilotOutcomes && (
              <section className="p-6 sm:p-8 rounded-3xl bg-[#e8eee6] border border-[#cbd8c7] shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#2d503e] font-semibold block">
                  Pilot Impact in Machnoor
                </span>
                <div className="space-y-2.5">
                  {study.pilotOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#24332b]">
                      <Check className="w-4 h-4 text-[#2d503e] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Learned */}
            {study.whatILearned && (
              <blockquote className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] text-[#161a18] space-y-3 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8f754f] font-semibold flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> What I Learned
                </span>
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-[#3c443e]">
                  "{study.whatILearned}"
                </p>
              </blockquote>
            )}

            {/* Why It Matters for Design (Transferable UX Competencies) */}
            {study.whyItMattersForDesign && (
              <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ded8cc] shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9e3a53] font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Why It Matters for Design
                </span>
                <p className="text-xs sm:text-sm text-[#4e5550] leading-relaxed">
                  {study.whyItMatters}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {study.whyItMattersForDesign.map((skill, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#fdf2f4]/60 border border-[#f5ccd5] flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#9e3a53] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#591b29] leading-relaxed font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* ========================================================================= */}
        {/* CROSS-LINKING FOOTER                                                      */}
        {/* ========================================================================= */}
        <section className="pt-10 border-t border-[#e2ded4] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif text-[#161a18]">
              Check out more research case studies.
            </h2>
            <Link 
              to="/" 
              className="text-xs font-mono uppercase tracking-wider bg-black hover:bg-neutral-800 text-white px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
            >
              All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.id !== currentId)
              .map((other) => (
                <Link
                  key={other.id}
                  to={`/work/${other.id}`}
                  className="group block rounded-3xl overflow-hidden bg-white border border-[#ded8cc] shadow-sm hover:shadow-md transition-all p-5 space-y-2"
                >
                  <span className={`text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full font-mono font-medium border inline-block ${other.tagBg} ${other.tagText} ${other.tagBorder}`}>
                    {other.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-[#161a18] group-hover:text-[#c2785c] transition-colors leading-snug">
                    {other.title}
                  </h3>
                </Link>
              ))}
          </div>
        </section>

        {/* Request Full Deck CTA */}
        <div className="p-8 rounded-3xl bg-[#1d2621] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif">Interested in the Full Case Study Deck?</h3>
            <p className="text-xs sm:text-sm text-[#a3b3aa]">
              Detailed service blueprints, participant frameworks, and product roadmaps are available upon request.
            </p>
          </div>
          <a
            href="mailto:ranjadhishar@gmail.com?subject=Fieldwork%20Deck%20Inquiry"
            className="bg-[#d18667] hover:bg-[#d18667]/90 text-white px-5 py-2.5 rounded-full text-xs uppercase font-mono tracking-wider font-semibold whitespace-nowrap transition-all shadow-md flex items-center gap-1.5"
          >
            Request Full Deck <Sparkles className="w-3.5 h-3.5" />
          </a>
        </div>

      </article>
    </div>
  );
}