import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Quote, 
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
  Check
} from "lucide-react";
import { projects } from "../data/projects";

// Helper to render markdown **bold** tokens as styled <strong> elements
const renderFormattedText = (text) => {
  if (typeof text !== "string") return text;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#141715]">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

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
        <h2 className="text-3xl font-serif text-[#141715]">Case Study Not Found</h2>
        <Link 
          to="/" 
          className="mt-6 inline-block text-[#8a2b18] font-mono text-sm underline font-semibold focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none"
        >
          ← Return to Selected Work
        </Link>
      </div>
    );
  }

  return (
    <main id="main-content" className="bg-[#f7f5f0] text-[#1c1d1f] font-sans antialiased selection:bg-[#204030]/20 selection:text-[#142319]">
      
      {/* Editorial Header Banner */}
      <div className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#ded8cc]">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3d443c] hover:text-black font-semibold transition-colors mb-6 focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none rounded px-1 py-1"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Selected Work
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs uppercase tracking-widest px-3.5 py-1 rounded-full font-mono font-semibold border ${study.tagBg} ${study.tagText} ${study.tagBorder}`}>
            {study.tag}
          </span>
          <span className="text-xs text-[#3d443c] font-mono font-medium">{study.timeline}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#141715] font-normal leading-[1.1] mb-5 tracking-tight">
          {study.title}
        </h1>

        <p className="text-base sm:text-xl font-serif italic text-[#2c332d] leading-relaxed max-w-3xl">
          {study.subtitle}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#ded8cc] text-xs sm:text-sm">
          <div>
            <span className="text-xs font-mono uppercase text-[#454c45] font-bold flex items-center gap-1.5 mb-0.5">
              <Briefcase className="w-3.5 h-3.5 text-[#1b3b2b]" aria-hidden="true" /> Role
            </span>
            <strong className="text-[#141715] font-semibold">{study.role}</strong>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#454c45] font-bold flex items-center gap-1.5 mb-0.5">
              <Calendar className="w-3.5 h-3.5 text-[#1b3b2b]" aria-hidden="true" /> Timeline
            </span>
            <span className="text-[#141715] font-medium">{study.timeline}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#454c45] font-bold flex items-center gap-1.5 mb-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#1b3b2b]" aria-hidden="true" /> Location
            </span>
            <span className="text-[#141715] font-medium">{study.location}</span>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#454c45] font-bold flex items-center gap-1.5 mb-0.5">
              <Target className="w-3.5 h-3.5 text-[#1b3b2b]" aria-hidden="true" /> Impact Domain
            </span>
            <span className="text-[#141715] font-medium">{study.domain}</span>
          </div>
        </div>
      </div>

      {/* Main Content Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Context & Premise Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#ece7dc] border border-[#cfc8ba] space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" aria-hidden="true" /> The Context & Problem Statement
          </span>
          <p className="text-sm sm:text-base text-[#1b1f1c] leading-relaxed">
            {renderFormattedText(study.context)}
          </p>
          {study.scale && (
            <p className="text-xs font-mono text-[#454c45] font-semibold pt-1">
              Fieldwork Scope: {study.scale}
            </p>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CASE STUDY: FINTECH & MORTGAGE OPERATIONS                                 */}
        {/* ========================================================================= */}
        {study.id === "fintech" && (
          <>
            <section aria-labelledby="fintech-reality-heading" className="space-y-4">
              <span id="fintech-reality-heading" className="text-xs font-mono uppercase tracking-widest text-[#1d3c4e] font-bold">
                Operational Reality by the Numbers
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.stats?.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between`}>
                    <div className="text-2xl sm:text-3xl font-serif italic mb-1">{stat.val}</div>
                    <div className="text-xs font-semibold opacity-95 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {study.narrative && (
              <section aria-labelledby="fintech-narrative-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1d3c4e] font-bold">
                    Lived Operational Experience
                  </span>
                  <h2 id="fintech-narrative-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Behind the Green Screen
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.narrative.map((item, idx) => (
                    <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3">
                      <h3 className="text-lg sm:text-xl font-serif text-[#141715]">
                        {item.heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                        {renderFormattedText(item.body)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5 Systemic Gaps with Crimson Friction Strokes */}
            {study.keyFindings && (
              <section aria-labelledby="fintech-findings-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8a2b18] font-bold">
                    Core Ethnographic Insights
                  </span>
                  <h2 id="fintech-findings-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    5 Systemic Gaps Discovered
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.keyFindings.map((finding, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 sm:p-7 rounded-3xl bg-white border border-[#d66d56]/50 hover:border-[#8a2b18] shadow-sm space-y-3 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#8a2b18] font-bold">
                          Finding {finding.num}
                        </span>
                        <span className="text-xs font-mono px-3 py-1 bg-[#f4f0e6] rounded-full text-[#383f36] font-medium border border-[#ded8cc]">
                          Operational Insight
                        </span>
                      </div>
                      <h3 className="text-lg font-serif text-[#141715] font-medium">
                        {finding.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                        {renderFormattedText(finding.desc)}
                      </p>
                      <div className="pt-2 border-t border-[#f0ded4] flex items-start gap-2 text-xs text-[#1b3b2b]">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#8a2b18]" aria-hidden="true" />
                        <span><strong>Design Opportunity:</strong> {finding.opportunity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Artifact 1.0 */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-journey-map.png" 
                  alt="Operational Burden Map depicting disconnected core banking platforms and manual workarounds" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-journey-map.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Artifact 1.0 — Operational Burden Map: Visualizing how disconnected terminal platforms force manual context switching and human error compensation.
              </figcaption>
            </figure>

            {study.cognitiveLoad && (
              <section aria-labelledby="cognitive-heading" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6d5535] font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#1b3b2b]" aria-hidden="true" /> Cognitive Load Analysis
                </span>
                <h3 id="cognitive-heading" className="text-xl sm:text-2xl font-serif text-[#141715]">
                  {study.cognitiveLoad.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                  {renderFormattedText(study.cognitiveLoad.desc)}
                </p>
              </section>
            )}

            {/* Artifact 2.0 */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-cognitive-matrix.png" 
                  alt="Recognition versus recall cognitive load comparison matrix between green screen terminals and modern web software" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-cognitive-matrix.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Artifact 2.0 — Recognition vs. Recall: Demonstrating how terminal memorization drains officer decision bandwidth.
              </figcaption>
            </figure>

            {/* Artifact 3.0 */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-service-blueprint.png" 
                  alt="Service blueprint highlighting invisible manual checkpoints performed by servicing officers" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-service-blueprint.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Artifact 3.0 — Service Blueprint: Contrasting customer milestone blindness with internal manual triage steps.
              </figcaption>
            </figure>

            {study.conceptClearServe && (
              <section aria-labelledby="concept-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Concept Exploration
                  </span>
                  <h2 id="concept-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    {study.conceptClearServe.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#383f36] mt-1">
                    {study.conceptClearServe.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.conceptClearServe.layers.map((layer, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="w-8 h-8 rounded-xl bg-[#e2eaf0] text-[#102430] flex items-center justify-center font-mono text-xs font-bold mb-3">
                          0{idx + 1}
                        </div>
                        <h3 className="text-base font-serif text-[#141715] mb-1.5">{layer.name}</h3>
                        <p className="text-xs text-[#383f36] leading-relaxed">{renderFormattedText(layer.desc)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Artifact 4.0 */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-white shadow-sm p-3 sm:p-6">
                <img 
                  src="/images/fintech-ui-screens.png" 
                  alt="Interface concepts for ClearServe self-serve customer portal and officer tracking dashboard" 
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://ranjeetaadhikari.ca/images/fintech-ui-screens.png"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Artifact 4.0 — ClearServe Mobile Portal & Live Milestone Tracking: Shifting routine entries to automated self-serve.
              </figcaption>
            </figure>

            {/* Reflection: Dark High-Contrast Pattern */}
            {study.reflection && (
              <blockquote className="p-8 sm:p-10 rounded-3xl bg-[#16201b] text-white space-y-4 shadow-xl border border-[#2a3830]">
                <Quote className="w-8 h-8 text-[#d18667]" aria-hidden="true" />
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-[#f4f7f4]">
                  "{study.reflection}"
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#a8d3bd] font-bold pt-2 border-t border-[#2a3830]">
                  — Ranjeeta Adhikari, Operational Ethnography Reflection
                </footer>
              </blockquote>
            )}
          </>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY: ORGANIC FARMING CO-DESIGN                                     */}
        {/* ========================================================================= */}
        {study.id === "organic-farming" && (
          <>
            <section aria-labelledby="farming-impact-heading" className="space-y-4">
              <span id="farming-impact-heading" className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                Impact Delivered
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.stats?.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between`}>
                    <div className="text-2xl sm:text-3xl font-serif italic mb-1">{stat.val}</div>
                    <div className="text-xs font-semibold opacity-95 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <figure className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-2xl overflow-hidden border border-[#cfc8ba] aspect-[4/3] bg-[#ece7dc]">
                  <img 
                    src="/images/sikkim-greenhouse-solo.jpg" 
                    alt="Solo farmer conducting pruning inspection in a protected greenhouse" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#cfc8ba] aspect-[4/3] bg-[#ece7dc]">
                  <img 
                    src="/images/sikkim-greenhouse-pair.jpg" 
                    alt="Two Himalayan farmers collaborating on greenhouse trellis maintenance" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Visual Artifact 1.0 — High-yield protected polyhouse cultivation: solo pruning inspection (left) and collaborative trellis maintenance (right).
              </figcaption>
            </figure>

            {study.strategicInsights && (
              <section aria-labelledby="insights-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Strategic UX Insights
                  </span>
                  <h2 id="insights-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Problem Reframings That Drove Design Decisions
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.strategicInsights.map((insight, idx) => (
                    <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#6d5535] font-bold">
                          Insight 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono px-3 py-1 bg-[#f4f0e6] rounded-full text-[#383f36] font-medium border border-[#ded8cc]">
                          Field Reality
                        </span>
                      </div>
                      <h3 className="text-lg font-serif text-[#141715]">
                        {insight.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                        {renderFormattedText(insight.reality)}
                      </p>
                      <div className="pt-2 border-t border-[#ded8cc] flex items-start gap-2 text-xs text-[#1b3b2b]">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#8a2b18]" aria-hidden="true" />
                        <span><strong>Design Shift:</strong> {insight.shift}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <figure className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-2xl overflow-hidden border border-[#cfc8ba] aspect-[4/3] bg-[#ece7dc]">
                  <img 
                    src="/images/sikkim-banana-grove.jpg" 
                    alt="Traditional agroforestry and companion planting in a Sikkim banana grove" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#cfc8ba] aspect-[4/3] bg-[#ece7dc]">
                  <img 
                    src="/images/sikkim-field-inquiry.jpg" 
                    alt="Contextual participatory inquiry conducted during crop harvest" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Visual Artifact 2.0 — Traditional companion planting in banana groves (left) and in-situ participatory inquiry during harvesting (right).
              </figcaption>
            </figure>

            {study.solutions && (
              <section aria-labelledby="solutions-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Interventions in Practice
                  </span>
                  <h2 id="solutions-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Solutions Delivered
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.solutions.map((sol, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-2xl mb-2" aria-hidden="true">{sol.icon}</div>
                        <h3 className="text-base sm:text-lg font-serif text-[#141715] mb-1.5">{sol.title}</h3>
                        <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">{sol.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study.failedPrototypes && (
              <section aria-labelledby="prototypes-heading" className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Strategic Iteration
                  </span>
                  <h2 id="prototypes-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    {study.failedPrototypes.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#383f36]">
                    Five prototypes that failed in the field, root cause analysis, and responsive pivots.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-[#cfc8ba] bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#182a20] text-white font-mono text-xs uppercase tracking-wider">
                      <tr>
                        {study.failedPrototypes.headers.map((h, i) => (
                          <th key={i} className="p-3.5 sm:p-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece7dc] text-[#1c1d1f]">
                      {study.failedPrototypes.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#fbf9f5] transition-colors">
                          <td className="p-3.5 sm:p-4 font-semibold text-[#141715]">{row.prototype}</td>
                          <td className="p-3.5 sm:p-4 text-[#8a2b18] font-medium">{row.why}</td>
                          <td className="p-3.5 sm:p-4 text-[#1b3b2b] font-semibold">{row.pivot}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {study.quotes && (
              <section aria-labelledby="quotes-heading" className="space-y-4">
                <span id="quotes-heading" className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                  Voices from the Field
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.quotes.map((q, idx) => (
                    <blockquote key={idx} className="p-6 rounded-3xl bg-[#e3eae1] border border-[#b8ccb5] text-[#16291e] space-y-2.5 shadow-sm flex flex-col justify-between">
                      <p className="text-base sm:text-lg font-serif italic leading-snug">
                        "{q.text}"
                      </p>
                      <footer className="text-xs font-mono uppercase tracking-wider text-[#1b3b2b] font-bold pt-2 border-t border-[#b8ccb5]/70">
                        — {q.speaker}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            {study.reflection && (
              <blockquote className="p-8 sm:p-10 rounded-3xl bg-[#16201b] text-white space-y-4 shadow-xl border border-[#2a3830]">
                <Quote className="w-8 h-8 text-[#d18667]" aria-hidden="true" />
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-[#f4f7f4]">
                  "{study.reflection}"
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#a8d3bd] font-bold pt-2 border-t border-[#2a3830]">
                  — Ranjeeta Adhikari, Principal Research Reflection
                </footer>
              </blockquote>
            )}
          </>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY: INDIA-BHUTAN (FULL UNABRIDGED)                                */}
        {/* ========================================================================= */}
        {study.id === "india-bhutan" && (
          <>
            {/* Visual Artifact 1: Temple & Field Site */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden border border-[#cfc8ba] bg-[#ece7dc]">
                <img 
                  src="/images/bhutan-temple.jpg" 
                  alt="Chunabhatti village Buddhist temple along the India-Bhutan border" 
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"; }}
                />
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-[#383f36] leading-relaxed">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6d5535] font-bold block">
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
              <section aria-labelledby="drukpa-users-heading" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#1b3b2b]" aria-hidden="true" /> Meet the Users: The Drukpa Community
                </span>
                <h3 id="drukpa-users-heading" className="sr-only">Community Context</h3>
                <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                  {renderFormattedText(study.meetTheUsers)}
                </p>
              </section>
            )}

            {/* Visual Artifact 2: Prayer Flags */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-[#ece7dc] shadow-sm">
                <img 
                  src="/images/sikkim-prayer-flags.jpg" 
                  alt="Himalayan wind-horse prayer flags along a high mountain pass" 
                  className="w-full h-auto max-h-[440px] object-cover object-center"
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Visual Artifact 1.0 — Wind-horse prayer flags along the mountain ridge: ritual markers of belonging that transcend sovereign borders.
              </figcaption>
            </figure>

            {/* Stats Scope Grid */}
            <section aria-labelledby="scope-heading" className="space-y-4">
              <span id="scope-heading" className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                Fieldwork Scope & Outcomes
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {study.stats?.map((stat, i) => (
                  <div key={i} className={`p-4 sm:p-5 rounded-2xl ${stat.bg} shadow-sm flex flex-col justify-between`}>
                    <div className="text-2xl sm:text-3xl font-serif italic mb-1">{stat.val}</div>
                    <div className="text-xs font-semibold opacity-95 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Achievements Grid */}
            {study.achievements && (
              <section aria-labelledby="achieve-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Key Achievements
                  </span>
                  <h2 id="achieve-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Translating Lived Practice into UX Outcomes
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {study.achievements.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-2">
                      <div className="text-2xl mb-1" aria-hidden="true">{item.icon}</div>
                      <h3 className="text-base font-serif font-medium text-[#141715]">{item.title}</h3>
                      <p className="text-xs text-[#383f36] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Demonstrated Skills */}
            {study.skillsDemonstrated && (
              <section aria-labelledby="skills-heading" className="p-6 sm:p-8 rounded-3xl bg-[#ece7dc]/80 border border-[#cfc8ba] space-y-4">
                <span id="skills-heading" className="text-xs font-mono uppercase tracking-widest text-[#6d5535] font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#1b3b2b]" aria-hidden="true" /> Demonstrated Research Skills
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {study.skillsDemonstrated.map((skill, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-[#d8d2c4] space-y-1">
                      <h4 className="text-xs font-mono uppercase font-bold text-[#1b3b2b]">{skill.title}</h4>
                      <p className="text-xs text-[#383f36] leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tripartite Framework (Overlapping Systems) */}
            <section aria-labelledby="systems-arch-heading" className="p-6 sm:p-10 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-6">
              <div className="max-w-2xl space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1b3b2b] font-bold flex items-center gap-1.5">
                  <GitMerge className="w-4 h-4 text-[#1b3b2b]" aria-hidden="true" /> Systems Architecture
                </span>
                <h3 id="systems-arch-heading" className="text-2xl sm:text-3xl font-serif text-[#141715]">Overlapping Systems of Identity</h3>
                <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                  The Drukpa community continuously navigates three overlapping systems: bureaucratic schemes (government portals), spiritual/cultural relations (forest spirits, sacred geographies), and informal kinship (cross-border barter, elders). The intersection points highlight design opportunities for inclusion through cross-system understanding.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-5 rounded-2xl bg-[#e3eae1] border border-[#b8ccb5] space-y-2">
                  <div className="w-7 h-7 rounded-full bg-[#1b3b2b] text-white flex items-center justify-center font-mono text-xs font-bold" aria-hidden="true">01</div>
                  <h4 className="text-base font-serif text-[#152e22]">Cultural & Spiritual</h4>
                  <p className="text-xs text-[#204030] leading-relaxed">Sacred geographies, customary rituals, and forest spirits.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#faeae4] border border-[#eec2b5] space-y-2">
                  <div className="w-7 h-7 rounded-full bg-[#8a2b18] text-white flex items-center justify-center font-mono text-xs font-bold" aria-hidden="true">02</div>
                  <h4 className="text-base font-serif text-[#782c16]">Bureaucratic & State</h4>
                  <p className="text-xs text-[#782c16] leading-relaxed">Fixed form fields, biometric registries, and rigid citizenship definitions.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#f4f0e6] border border-[#dcd6c8] space-y-2">
                  <div className="w-7 h-7 rounded-full bg-[#6d5535] text-white flex items-center justify-center font-mono text-xs font-bold" aria-hidden="true">03</div>
                  <h4 className="text-base font-serif text-[#4e3c23]">Lived & Economic</h4>
                  <p className="text-xs text-[#4e3c23] leading-relaxed">Informal trail barter, seasonal migration, and cross-border clinics.</p>
                </div>
              </div>
            </section>

            {/* Listen -> Decode -> Co-Create Methodology */}
            {study.approach && (
              <section aria-labelledby="research-plan-heading" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8a2b18] font-bold">
                    The Research Plan
                  </span>
                  <h2 id="research-plan-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Listening Beyond Data: Listen → Decode → Co-Create
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.approach.map((step, idx) => (
                    <div key={idx} className="space-y-2 p-5 bg-[#fdfbf9] rounded-2xl border border-[#ebdcd4]">
                      <h3 className="text-base font-serif font-semibold text-[#141715]">{step.phase}</h3>
                      <p className="text-xs text-[#383f36] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Personas: Deki + 4 Community Archetypes */}
            <section aria-labelledby="personas-heading" className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                  Ethnographic Personas
                </span>
                <h2 id="personas-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                  Inclusive UX Anchored in Real Stories
                </h2>
                <p className="text-xs sm:text-sm text-[#383f36] mt-1">
                  Drawn from immersive fieldwork in Chunabhatti village, reflecting lived complexity across bureaucratic, spiritual, and ecological systems.
                </p>
              </div>

              {/* Deki Lead Dossier */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#ece7dc] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#e1eae0] text-[#1b3b2b] flex items-center justify-center shrink-0">
                        <User className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-serif text-[#141715]">Deki — The Forest Mother</h3>
                          <span className="text-xs font-mono px-3 py-0.5 bg-[#e1eae0] text-[#1d3d2c] font-semibold rounded-full border border-[#b5ceb2]">
                            Primary Archetype
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#6d5535] font-semibold mt-0.5">Age 38 • Caregiver, Forest Dweller • Chunabhatti</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#383f36]">
                    <div className="p-3.5 bg-[#fbf9f5] rounded-xl border border-[#ece7dc]">
                      <strong className="text-[#141715] block mb-0.5">Primary Goal:</strong>
                      Access shame-free healthcare for her family.
                    </div>
                    <div className="p-3.5 bg-[#fbf9f5] rounded-xl border border-[#ece7dc]">
                      <strong className="text-[#141715] block mb-0.5">Key Barrier:</strong>
                      Language gap and fear of cultural ridicule in state hospitals.
                    </div>
                    <div className="p-3.5 bg-[#fbf9f5] rounded-xl border border-[#ece7dc]">
                      <strong className="text-[#141715] block mb-0.5">Observed Behavior:</strong>
                      Consults shamans; secretly crosses into Bhutan for trusted care.
                    </div>
                    <div className="p-3.5 bg-[#e3eae1] rounded-xl border border-[#b8ccb5] text-[#152e22]">
                      <strong className="text-[#1b3b2b] block mb-0.5">UX Insight:</strong>
                      Embed trusted intermediaries (shamans, kin) into help and intake flows.
                    </div>
                  </div>

                  <blockquote className="p-3.5 bg-[#f7f5f0] rounded-2xl border-l-4 border-[#1b3b2b] text-xs sm:text-sm font-serif italic text-[#1b3b2b]">
                    "There’s no one who understands us at the clinic. But the monk knew what to do."
                  </blockquote>
                </div>

                {/* Deki Journey Blueprint */}
                <div className="pt-4 border-t border-[#ece7dc] space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6d5535] font-bold block">
                    Journey Friction Blueprint: Healthcare Seeking Flow
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#fdfbf9] border border-[#ebdcd4] space-y-1.5">
                      <span className="text-xs font-mono text-[#8a2b18] font-bold block">01. Daughter Sick</span>
                      <p className="text-xs text-[#383f36]"><strong>Emotion:</strong> Anxiety + Helplessness</p>
                      <p className="text-xs text-[#383f36]"><strong>Barrier:</strong> No clinic nearby, fear of ridicule</p>
                      <p className="text-xs text-[#141715]"><strong>Behavior:</strong> Prays, consults shamans</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fdfbf9] border border-[#ebdcd4] space-y-1.5">
                      <span className="text-xs font-mono text-[#8a2b18] font-bold block">02. Seeking Help</span>
                      <p className="text-xs text-[#383f36]"><strong>Emotion:</strong> Stress & Urgency</p>
                      <p className="text-xs text-[#383f36]"><strong>Barrier:</strong> Long mountain walks, rigid forms</p>
                      <p className="text-xs text-[#141715]"><strong>Behavior:</strong> Calls cousins in Bhutan</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#fae6ea] border border-[#eeb8c3] space-y-1.5">
                      <span className="text-xs font-mono text-[#5c1325] font-bold block">03. At Hospital</span>
                      <p className="text-xs text-[#5c1325]"><strong>Emotion:</strong> Embarrassment</p>
                      <p className="text-xs text-[#383f36]"><strong>Barrier:</strong> Language barrier, cultural shame</p>
                      <p className="text-xs text-[#141715]"><strong>Behavior:</strong> Leaves without treatment</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#e3eae1] border border-[#b8ccb5] space-y-1.5">
                      <span className="text-xs font-mono text-[#1b3b2b] font-bold block">04. Bhutan Route</span>
                      <p className="text-xs text-[#1b3b2b]"><strong>Emotion:</strong> Relief + Worry</p>
                      <p className="text-xs text-[#383f36]"><strong>Barrier:</strong> Checkpoint crossing risks</p>
                      <p className="text-xs text-[#141715]"><strong>Behavior:</strong> Secretly travels for care</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Community Personas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#f4f0e6] text-[#6d5535] flex items-center justify-center shrink-0">
                        <Shield className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-[#141715]">Nado — The Cultural Steward</h3>
                        <span className="text-xs font-mono text-[#454c45] font-medium">Age 45 • Ritual leader, forest protector</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#383f36] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Safeguard ancestral traditions and sacred forests.</p>
                      <p><strong>Barrier:</strong> Regarded as a squatter due to lack of formal state land titles.</p>
                      <p className="text-[#1b3b2b] font-semibold pt-0.5"><strong>UX Insight:</strong> Recognize spiritual land stewardship within environmental policy.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#141715]">
                    "The state sees trees as timber. To our people, they are guardians of our ancestors."
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#faeae4] text-[#8a2b18] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-[#141715]">Pem Doma — The Culturally Split Teen</h3>
                        <span className="text-xs font-mono text-[#454c45] font-medium">Age 16 • Student, seasonal worker</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#383f36] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Balance education with family harvest duties.</p>
                      <p><strong>Barrier:</strong> Forced binary choice between school attendance and seasonal family income.</p>
                      <p className="text-[#1b3b2b] font-semibold pt-0.5"><strong>UX Insight:</strong> Design flexible learning tools matching seasonal migration rhythms.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#141715]">
                    "When harvest comes, I have to leave class. The digital system marks me dropped out."
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#e3eae1] text-[#1b3b2b] flex items-center justify-center shrink-0">
                        <Store className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-[#141715]">Karma Sherpa — The Cross-Border Entrepreneur</h3>
                        <span className="text-xs font-mono text-[#454c45] font-medium">Age 28 • Informal trader, mobile vendor</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#383f36] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Grow trade routes without checkpoint legal risk.</p>
                      <p><strong>Barrier:</strong> Absence of formal vendor recognition or cross-border trade IDs.</p>
                      <p className="text-[#1b3b2b] font-semibold pt-0.5"><strong>UX Insight:</strong> Build mobile-first interfaces supporting semi-legal traders.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#141715]">
                    "We keep the market alive on both sides, yet on paper we do not exist."
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#fae6ea] text-[#5c1325] flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-[#141715]">Tshering Om — The Borderland Caregiver</h3>
                        <span className="text-xs font-mono text-[#454c45] font-medium">Age 30 • Farmer and mother</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#383f36] space-y-1.5 leading-relaxed">
                      <p><strong>Goal:</strong> Keep children healthy, registered, and culturally rooted.</p>
                      <p><strong>Barrier:</strong> Legal ambiguity with dual health records and conflicting name spellings.</p>
                      <p className="text-[#1b3b2b] font-semibold pt-0.5"><strong>UX Insight:</strong> Support hybrid citizenship declarations and fuzzy document matching.</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-[#ece7dc] text-xs font-serif italic text-[#141715]">
                    "My children belong to this mountain, not to one side of the fence."
                  </div>
                </div>
              </div>
            </section>

            {/* Turning Point Hero */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-[#ece7dc] shadow-sm">
                <img 
                  src="/images/bhutan-elder-gho.jpg" 
                  alt="Portrait of village elder Nado dressed in traditional Drukpa gho attire" 
                  className="w-full h-auto object-cover object-center"
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                The Turning Point: Shifting focus from surface form usability to designing for dignity, emotional safety, and cultural recognition.
              </figcaption>
            </figure>

            {/* 5 Strategic UX Insights */}
            {study.uxInsights && (
              <section aria-labelledby="border-insights-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Insights & Design Opportunities
                  </span>
                  <h2 id="border-insights-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Translating Lived Friction into Action
                  </h2>
                </div>

                <div className="space-y-4">
                  {study.uxInsights.map((insight, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-serif text-[#141715]">{insight.title}</h3>
                        <span className="text-xs font-mono px-3 py-1 bg-[#f4f0e6] rounded-full text-[#383f36] font-medium border border-[#ded8cc]">
                          Insight 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#383f36]">
                        <strong className="text-[#8a2b18]">Friction:</strong> {insight.problem}
                      </p>
                      <div className="pt-2 border-t border-[#ded8cc] flex items-start gap-2 text-xs text-[#1b3b2b]">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#1b3b2b]" aria-hidden="true" />
                        <span><strong>Solution:</strong> {insight.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Framework: Designing from the Margins */}
            {study.designPrinciples && (
              <section aria-labelledby="margins-framework-heading" className="p-6 sm:p-8 rounded-3xl bg-[#faeae4] border border-[#eec2b5] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8a2b18] font-bold">
                    Core Design Framework
                  </span>
                  <h3 id="margins-framework-heading" className="text-2xl font-serif text-[#141715] mt-0.5">
                    Designing From the Margins
                  </h3>
                  <p className="text-xs sm:text-sm text-[#782c16] mt-1 italic font-medium">
                    "If I don’t see myself in your design, I won’t trust your system." — Tshering Om, Drukpa villager
                  </p>
                </div>

                <div className="space-y-3">
                  {study.designPrinciples.map((principle, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3.5 bg-white/90 rounded-2xl border border-[#eec2b5]">
                      <CheckCircle2 className="w-5 h-5 text-[#8a2b18] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-sm font-serif text-[#141715] block">{principle.title}</strong>
                        <p className="text-xs text-[#383f36] leading-relaxed">{principle.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study.reflection && (
              <blockquote className="p-8 sm:p-10 rounded-3xl bg-[#16201b] text-white space-y-4 shadow-xl border border-[#2a3830]">
                <Quote className="w-8 h-8 text-[#d18667]" aria-hidden="true" />
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-[#f4f7f4]">
                  "{study.reflection}"
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#a8d3bd] font-bold pt-2 border-t border-[#2a3830]">
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
            <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-[#ece7dc] shadow-sm">
              <img 
                src="/images/panchayat-women-meeting.jpg" 
                alt="First-time elected women leaders seated together at rural council in Machnoor village" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"; }}
              />
            </div>

            {/* The Challenge Breakdown */}
            {study.theChallenge && (
              <section aria-labelledby="challenge-heading" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#5c1325] font-bold">
                    Structural Context
                  </span>
                  <h2 id="challenge-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    The Challenge
                  </h2>
                  <p className="text-xs sm:text-sm text-[#383f36] mt-1">
                    India’s Panchayati Raj system reserves one-third of rural council seats for women — a milestone in policy. But for many first-time women leaders, the role came without support:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {study.theChallenge.map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3.5 bg-[#fae6ea] rounded-2xl border border-[#eeb8c3]">
                      <span className="text-[#5c1325] font-bold text-sm" aria-hidden="true">•</span>
                      <p className="text-xs text-[#2b2b2b] leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Listening Between the Lines: 3 Systemic Barriers */}
            {study.systemicBarriers && (
              <section aria-labelledby="barriers-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#5c1325] font-bold">
                    Listening Between the Lines
                  </span>
                  <h2 id="barriers-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Three Systemic Barriers
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.systemicBarriers.map((card, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d66d56]/50 shadow-sm space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-wider text-[#5c1325] font-bold">Barrier 0{card.num}</span>
                          <span className="text-xs font-mono px-2.5 py-0.5 bg-[#fae6ea] text-[#5c1325] rounded-full font-semibold">Systemic Gap</span>
                        </div>
                        <h3 className="text-lg font-serif text-[#141715]">{card.title}</h3>
                        <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Approach & Methods Grid */}
            <section aria-labelledby="methods-heading" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                  Fieldwork Engagement
                </span>
                <h2 id="methods-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                  My Approach & Methods
                </h2>
              </div>

              {study.approachSteps && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.approachSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3.5 bg-[#fbf9f5] rounded-2xl border border-[#ece7dc]">
                      <span className="text-[#6d5535] font-mono text-xs font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                      <p className="text-xs text-[#383f36] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Methods Included */}
              {study.methodsDetails && (
                <div className="pt-4 border-t border-[#ece7dc] space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6d5535] font-bold block">
                    Methods Included
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {study.methodsDetails.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#e3eae1] border border-[#b8ccb5] space-y-1">
                        <h3 className="text-xs font-mono uppercase font-bold text-[#1b3b2b]">{m.title}</h3>
                        <p className="text-xs text-[#383f36] leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Field Image 2: Polling Station */}
            <figure className="space-y-2">
              <div className="rounded-3xl overflow-hidden border border-[#cfc8ba] bg-[#ece7dc] shadow-sm">
                <img 
                  src="/images/panchayat-polling-station.jpg" 
                  alt="Rural women voters and local candidates waiting at community council polling center" 
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"; }}
                />
              </div>
              <figcaption className="text-xs font-mono text-[#454c45] font-medium">
                Artifact — Community polling stations and rural assembly halls during Panchayat elections.
              </figcaption>
            </figure>

            {/* Co-Created Usability Tools */}
            {study.toolsCreated && (
              <section aria-labelledby="tools-heading" className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold">
                    Confidence-Building Tools
                  </span>
                  <h2 id="tools-heading" className="text-2xl sm:text-3xl font-serif text-[#141715] mt-0.5">
                    Co-Created Usability Tools
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {study.toolsCreated.map((tool, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-3xl mb-2" aria-hidden="true">{tool.icon}</div>
                        <h3 className="text-base sm:text-lg font-serif text-[#141715] mb-1">{tool.title}</h3>
                        <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pilot Outcomes */}
            {study.pilotOutcomes && (
              <section aria-labelledby="outcomes-heading" className="p-6 sm:p-8 rounded-3xl bg-[#e3eae1] border border-[#b8ccb5] shadow-sm space-y-4">
                <span id="outcomes-heading" className="text-xs font-mono uppercase tracking-widest text-[#1b3b2b] font-bold block">
                  Pilot Impact in Machnoor
                </span>
                <div className="space-y-2.5">
                  {study.pilotOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#142319]">
                      <Check className="w-4 h-4 text-[#1b3b2b] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Learned */}
            {study.whatILearned && (
              <blockquote className="p-8 sm:p-10 rounded-3xl bg-white border border-[#d8d2c4] text-[#1c1d1f] space-y-3 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6d5535] font-bold flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#1b3b2b]" aria-hidden="true" /> What I Learned
                </span>
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-[#2c332d]">
                  "{study.whatILearned}"
                </p>
              </blockquote>
            )}

            {/* Why It Matters for Design (Transferable UX Competencies) */}
            {study.whyItMattersForDesign && (
              <section aria-labelledby="why-it-matters-heading" className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d2c4] shadow-sm space-y-4">
                <span id="why-it-matters-heading" className="text-xs font-mono uppercase tracking-widest text-[#5c1325] font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#5c1325]" aria-hidden="true" /> Why It Matters for Design
                </span>
                <p className="text-xs sm:text-sm text-[#383f36] leading-relaxed">
                  {study.whyItMatters}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {study.whyItMattersForDesign.map((skill, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#fae6ea] border border-[#eeb8c3] flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#5c1325] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-[#591b29] leading-relaxed font-semibold">{skill}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study.reflection && (
              <blockquote className="p-8 sm:p-10 rounded-3xl bg-[#16201b] text-white space-y-4 shadow-xl border border-[#2a3830]">
                <Quote className="w-8 h-8 text-[#d18667]" aria-hidden="true" />
                <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-[#f4f7f4]">
                  "{study.reflection}"
                </p>
                <footer className="text-xs font-mono uppercase tracking-widest text-[#a8d3bd] font-bold pt-2 border-t border-[#2a3830]">
                  — Ranjeeta Adhikari, Lead UX Researcher & Ethnographer
                </footer>
              </blockquote>
            )}
          </>
        )}

        {/* 3-Column Cross-Linking Footer */}
        <section aria-labelledby="related-heading" className="pt-10 border-t border-[#ded8cc] space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="related-heading" className="text-xl sm:text-2xl font-serif text-[#141715]">
              Check out more research case studies
            </h2>
            <Link 
              to="/#work" 
              className="text-xs font-mono uppercase tracking-wider bg-black hover:bg-neutral-800 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none font-semibold"
            >
              All Projects <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.id !== currentId)
              .map((other) => (
                <Link
                  key={other.id}
                  to={`/work/${other.id}`}
                  className="group block rounded-3xl overflow-hidden bg-white border border-[#d8d2c4] shadow-sm hover:shadow-md transition-all p-5 space-y-2 focus-visible:ring-2 focus-visible:ring-[#204030] focus-visible:outline-none"
                >
                  <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full font-mono font-semibold border inline-block ${other.tagBg} ${other.tagText} ${other.tagBorder}`}>
                    {other.tag.split("·")[0].trim()}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif text-[#141715] group-hover:text-[#8a2b18] transition-colors leading-snug">
                    {other.title}
                  </h3>
                </Link>
              ))}
          </div>
        </section>

      </article>
    </main>
  );
}