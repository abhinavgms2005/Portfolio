export const projects = [
  {
    id: "fintech",
    tag: "Enterprise UX · FinTech",
    tagBg: "bg-[#e8edf2]",
    tagText: "text-[#2b4c60]",
    tagBorder: "border-[#c4d4e0]",
    title: "Designing Trust Behind the Scenes: Operational Ethnography in Mortgage Operations",
    subtitle: "An embedded operational ethnography uncovering how legacy green-screen systems force extraordinary employee vigilance to produce ordinary customer outcomes.",
    role: "Mortgage Processing Officer & Embedded Ethnographer",
    timeline: "6 Months Embedded",
    location: "Toronto, ON",
    domain: "Mortgage Servicing & Core Banking Systems",
    previewImage: "/images/fintech-journey.jpg",
    context: "The system assumed every entry was perfect. Human work is not perfect. Nobody designed for that gap. Mortgage property tax servicing is customer-facing in outcome but operationally invisible in execution.",
    methods: [
      "Embedded Operational Ethnography",
      "Longitudinal Observation",
      "Processing Pattern Analysis",
      "Reflective Field Notes",
      "Cognitive Load Mapping",
      "Service Blueprinting"
    ],
    stats: [
      { val: "~70", label: "Manual Tax Bills Entered / Day", bg: "bg-[#2b4c60] text-white" },
      { val: "3", label: "Disconnected Legacy Systems", bg: "bg-[#8f754f] text-white" },
      { val: "0", label: "Batch Options & Post-Close Audit Trail", bg: "bg-[#2d503e] text-white" },
      { val: "35 hrs", label: "Monthly Time Return / Officer (ClearServe)", bg: "bg-[#715c3f] text-white" }
    ],
    narrative: [
      {
        heading: "Here is what the job actually was",
        body: "Every day I sat down and paid property tax bills. One at a time. One per client, one per municipality, entered manually into a legacy system. Get one digit wrong—a transposition, a tired finger hitting the wrong key—and the payment goes out wrong straight to the tax office with no way to stop it. There was no duplicate check. No anomaly alert. No 'are you sure?' before submission. Just you, the keyboard, and the hope that your attention held after the fortieth entry of the day."
      },
      {
        heading: "The thing that kept me up at night",
        body: "Prepayment and arrears processing was a different kind of pressure. Every figure had to match before closing, or it went straight to accounting for hours of escalation and investigation. The only protection was a screenshot taken before closing. If I forgot even once and an anomaly surfaced later, there was no audit trail. Just me trying to reconstruct an irreversible transaction from memory while accounting waited."
      },
      {
        heading: "The missing integration layer",
        body: "I was not just processing mortgage cases. I was the safety net the system never built. Three disconnected platforms required constant manual context switching. Workflow logic existed only in tribal memory. When an error surfaced, it gave a cryptic code with the unspoken rule: find someone who has seen this before. The colleague was the error recovery system—until they left."
      }
    ],
    keyFindings: [
      {
        num: "01",
        title: "Knowledge lived in people, not systems",
        desc: "No documentation, no onboarding guide, and no in-system help. Everything was learned by shadowing and held in individual memory. When experienced staff leave, institutional knowledge leaves with them.",
        opportunity: "In-system guidance, searchable workflow documentation, and embedded onboarding."
      },
      {
        num: "02",
        title: "The system designed fatigue into the work",
        desc: "70 identical manual entries a day with zero batch shortcuts. Mechanical work under relentless time pressure invites high error rates without any automated guardrails.",
        opportunity: "Batch processing, auto-population from verified records, and anomaly detection."
      },
      {
        num: "03",
        title: "One forgotten screenshot caused hours of damage",
        desc: "No system audit trail existed after closing. Recovery depended entirely on manual pre-close screenshots, forcing stressful transaction reconstruction from memory.",
        opportunity: "System-maintained audit logs, pre-close confirmation screens, and post-close view-only records."
      },
      {
        num: "04",
        title: "Errors communicated zero useful context",
        desc: "Cryptic codes stated that a failure occurred, but never what went wrong or how to resolve it. Troubleshooting relied entirely on finding senior colleagues.",
        opportunity: "Human-readable error design with contextual step-by-step guidance."
      },
      {
        num: "05",
        title: "Customers were blind to operational reality",
        desc: "Customers experienced an invisible process. Seamless when it worked, but causing severe panic and uncertainty when delays or errors occurred without status touchpoints.",
        opportunity: "Proactive milestone tracking: Bill received → Verified → Scheduled → Sent → Confirmed."
      }
    ],
    cognitiveLoad: {
      headline: "Forced Recall vs. Recognition & Judgment",
      desc: "Good design supports recognition, visible steps, and feedback. This system forced pure memory recall: command paths, workflow sequences, and exception handling simultaneously under time pressure. Mental energy was wasted on memorization rather than strategic problem solving."
    },
    conceptClearServe: {
      title: "ClearServe: Speculative Service Redesign",
      desc: "A three-layer speculative service architecture translating operational insights into a resilient future state:",
      layers: [
        {
          name: "Layer 01 — Self-Serve Customer Portal",
          desc: "Mobile-first portal for customers to upload tax bills, schedule payments, track history, and verify receipts without phone calls."
        },
        {
          name: "Layer 02 — Live Status Tracker",
          desc: "End-to-end visibility for customers who prefer bank handling: Bill received → Verified → Scheduled → Sent → Confirmed."
        },
        {
          name: "Layer 03 — Operations Oversight Layer",
          desc: "Automates routine entries, shifting staff time from mechanical repetition to complex exceptions, quality assurance, and judgment."
        }
      ]
    },
    reflection: "Systems do not fail dramatically. They fail quietly through the thousand small compensations that employees build around them—the screenshot habit, the personal checklist, the informal double-checks. Trust is not built only through successful outcomes; it is built through clarity, resilience, and confidence in systems people cannot see."
  },
  {
    id: "organic-farming",
    tag: "Agriculture & Co-Design",
    tagBg: "bg-[#e3eae1]",
    tagText: "text-[#2d503e]",
    tagBorder: "border-[#cbd8c7]",
    title: "Organic Farming in Sikkim: Systems, Trust, and Co-Design",
    subtitle: "A 2-year ethnographic and participatory co-design initiative bridging the gap between top-down state policy and generational Himalayan farmer realities.",
    role: "Principal Researcher & Co-Design Lead (Solo IC)",
    timeline: "2021 – 2023",
    location: "Sikkim, India",
    domain: "Public Policy, Service Design & Inclusive UX",
    previewImage: "/images/sikkim-greenhouse-solo.jpg",
    scale: "250+ participants across 5 remote villages (farmers, women's groups, youth, officials)",
    context: "Government organic farming schemes were failing despite significant investment. After visiting 4 different offices to build a single goat shed with zero follow-up, farmers abandoned the programs. Ritual calendars were dismissed as 'unscientific.' Women could name every pest but couldn't decode an SMS. Youth saw farming as boring. The real barrier wasn't farming—it was fragmented, culturally-misaligned systems that ignored how people actually live.",
    methods: [
      "In-situ Contextual Inquiries",
      "Longitudinal Participant Observation",
      "Participatory Co-Design Workshops",
      "Service Blueprinting & Systems Mapping",
      "Multilingual Offline Prototyping"
    ],
    stats: [
      { val: "+60%", label: "Scheme Comprehension via One-Window", bg: "bg-[#2d503e] text-white" },
      { val: "3×", label: "Crop Value via QR Storytelling", bg: "bg-[#8f754f] text-white" },
      { val: "75%", label: "Spoilage Cut via Women-Led Cold Hubs", bg: "bg-[#455a4f] text-white" },
      { val: "2×", label: "Youth Engagement via Trailbooks", bg: "bg-[#715c3f] text-white" }
    ],
    strategicInsights: [
      {
        num: "01",
        title: "Offline ≠ Disconnected",
        reality: "Farmers weren't digitally disengaged—systems just never arrived in their world.",
        shift: "Built trust-first, offline-first tools with visual symbols, not complex digital forms."
      },
      {
        num: "02",
        title: "Ritual Is a Design System",
        reality: "Farmers plant by moonlight and ancestral rhythm, not apps or spreadsheets.",
        shift: "Calendars must speak to spiritual cycles and lunar rhythms, not corporate efficiency metrics."
      },
      {
        num: "03",
        title: "Literacy Isn't Competence",
        reality: "Women could name every pest in the field but couldn't decode an official SMS from the department.",
        shift: "Designed icon-based, voice-first interfaces requiring zero text literacy."
      },
      {
        num: "04",
        title: "Youth Reject Boredom, Not Farming",
        reality: "Farming was perceived by teens as an unrewarding manual chore rather than a skilled identity.",
        shift: "Reframed agriculture through illustrated heritage trailbooks, intergenerational storytelling, and pride."
      },
      {
        num: "05",
        title: "Fragmentation Is the Real Barrier",
        reality: "Multiple overlapping departments with zero inter-agency coordination forced farmers to give up.",
        shift: "Unified fragmented services into a 'One Window' dashboard (+60% comprehension)."
      }
    ],
    solutions: [
      {
        icon: "📅",
        title: "Festival-Aligned Crop Calendars",
        desc: "Print and digital tools distributed during communal rituals (Nwagi), honoring monsoon timing, moonlight planting, and ancestral rhythms."
      },
      {
        icon: "📊",
        title: "Offline-First Dashboard",
        desc: "Icon-based, Lepcha/Nepali multilingual tablet interface for field officers. Zero connectivity required, replacing 4-office bureaucratic runs."
      },
      {
        icon: "📱",
        title: "SMS + Photo Escalation",
        desc: "Direct feature-phone support connecting farmers to agricultural specialists via basic photo uploads and SMS."
      },
      {
        icon: "📦",
        title: "QR Storytelling Labels",
        desc: "'From Phurba's Field' consumer traceability connecting urban buyers directly to cultivators, yielding a 3× pricing premium."
      },
      {
        icon: "❄️",
        title: "Women-Led Cold Storage Hubs",
        desc: "Self-help group designed grid-free storage using local materials and vermicompost hubs, slashing post-harvest spoilage by 75%."
      },
      {
        icon: "📖",
        title: "Youth Heritage Trailbooks",
        desc: "Illustrated farming stories for school curriculums that turned grandparents into cultural heroes and doubled youth engagement."
      }
    ],
    failedPrototypes: {
      title: "Strategic Iteration: What Didn't Work",
      headers: ["Failed Prototype", "Why It Failed", "Pivot Strategy"],
      rows: [
        {
          prototype: "Chemical Deterrent Kits in Metal Cans",
          why: "Rust-prone and rapidly failed in heavy Himalayan monsoons.",
          pivot: "Shifted to fire-smoke & banana fiber local resilient materials."
        },
        {
          prototype: "Paper Office Calendars",
          why: "Distributed via government offices; misplaced and forgotten.",
          pivot: "Distributed during village festivals (communal ritual framing)."
        },
        {
          prototype: "Youth Smartphone Podcasts",
          why: "Low connectivity and zero mobile screen engagement.",
          pivot: "Shifted to illustrated physical trailbooks for schools."
        },
        {
          prototype: "Symbol Cards for SHG Events",
          why: "Lacked long-term memorability and utility.",
          pivot: "Added intergenerational games and physical storytelling."
        },
        {
          prototype: "Standard Grid Refrigeration",
          why: "Frequent mountain blackouts and poor insulation.",
          pivot: "Localized vermicompost hubs using grid-free passive insulation."
        }
      ]
    },
    quotes: [
      { text: "If I stop farming, I lose who I am.", speaker: "Buddhi Raj Gurung, Ritual Farmer, Hee Gyathang" },
      { text: "My grandson asked about Nwagi after reading the trailbook.", speaker: "Buddhi Raj Gurung, on youth engagement" },
      { text: "They told us it was good science. Now we use it to dry clothes.", speaker: "Champa Singh Gurung, on solar dryers (the turning point toward co-design)" }
    ],
    reflection: "Design is never neutral. When systems fail to recognize layered identities, people face invisibility. Inclusive design begins with inclusive research—meeting people where they are, on their terms. The methods change between Himalayan villages and enterprise fintech, but the commitment to dignity, systems thinking, and co-designing remains constant."
  },
  {
    id: "india-bhutan",
    tag: "Identity & Governance",
    tagBg: "bg-[#fdf2ee]",
    tagText: "text-[#c2785c]",
    tagBorder: "border-[#f2d0c4]",
    title: "How Can We Build Systems That Respect Complex Identities?",
    subtitle: "An ethnographic UX case study exploring cultural identity, emotional friction, and inclusive service design at the India–Bhutan border.",
    role: "Lead UX Researcher & Ethnographer (Solo)",
    timeline: "3 Months (2021 – 2024)",
    location: "Chunabhatti Village, India–Bhutan Border",
    domain: "Borderland Governance & Inclusive Service UX",
    previewImage: "/images/bhutan-temple.jpg",
    context: "In the borderland village of Chunabhatti, government systems failed to serve Drukpa families—not because of a lack of data, but because their hybrid identities didn't fit the form. Culturally Bhutanese but legally Indian, they vote in Indian elections, pray in Bhutanese temples, and speak Dzongkha at home while navigating public systems that demand fixed names, languages, and addresses. This disconnect turns basic services from healthcare to social support into emotionally taxing and exclusionary experiences.",
    methods: [
      "Immersive Fieldwork & Shadowing",
      "60+ In-Depth User Interviews",
      "Emotional Journey Mapping",
      "Participatory Co-Design Workshops",
      "Systems & Ritual Mapping"
    ],
    stats: [
      { val: "60+", label: "Multilingual Field Inquiries", bg: "bg-[#2d503e] text-white" },
      { val: "6", label: "Key Barriers Identified", bg: "bg-[#8f754f] text-white" },
      { val: "5", label: "Validated Design Interventions", bg: "bg-[#455a4f] text-white" },
      { val: "+60%", label: "Scheme Clarity & NGO Pilots", bg: "bg-[#715c3f] text-white" }
    ],
    meetTheUsers: "The Drukpas are indigenous to Bhutan, with ancestral lands extending into present-day India due to colonial border shifts. Now living along the India–Bhutan border, they carry hybrid identities: culturally Bhutanese, legally Indian, shaped by rituals, kinship, and oral traditions. While records and usability data showed low uptake, they couldn't explain the deeper reasons behind service abandonment. Through immersive UX research, we uncovered emotional friction, cultural mismatch, and systemic blind spots that led to real-world exclusion.",
    achievements: [
      { icon: "🧭", title: "Uncovered Hidden Barriers", desc: "Led 60+ multilingual interviews revealing shame, document fear, and service mismatch." },
      { icon: "💥", title: "Mapped Emotional Friction", desc: "Identified emotional triggers (shame, identity mismatch, oral vs. written logic)." },
      { icon: "🌿", title: "Honored Cultural Logic in Design", desc: "Developed frameworks based on kinship, ritual time, and oral knowledge." },
      { icon: "👣", title: "Mapped Identity Journeys", desc: "Built life journeys showing hybrid identities and invisible exclusion." },
      { icon: "🤝", title: "Designed With, Not For", desc: "Co-facilitated workshops with elders, women, and oral-tradition users." }
    ],
    skillsDemonstrated: [
      { title: "Ethnographic Interviewing", desc: "Conducted culturally sensitive interviews in low-literacy borderland contexts." },
      { title: "Systems & Journey Mapping", desc: "Visualized informal identity flows, ritual-based friction, and trust pathways." },
      { title: "Insight Synthesis", desc: "Converted qualitative data into service design principles and trust-based personas." },
      { title: "Participatory Co-Design", desc: "Used sketching, story prompts, and role-play in cross-border community settings." },
      { title: "Narrative UX", desc: "Used user stories to shift design focus from forms to feelings of recognition." }
    ],
    approach: [
      {
        phase: "🔍 Listen",
        desc: "We began without surveys or formal interviews. Instead, we sat with farmers, joined their rituals, and absorbed unspoken rhythms of trust, silence, and seasonal wisdom."
      },
      {
        phase: "🧠 Decode",
        desc: "Instead of reducing insights to forms or KPIs, we mapped lived friction through behavior, emotion, and story. Spreadsheets weren’t going to help here; what revealed the real frictions were pauses, side glances, and the emotional weight behind quiet refusals."
      },
      {
        phase: "🤝 Co-Create",
        desc: "Only after months of immersion did co-design begin. Prototypes weren’t dropped in—they were shaped in kitchens, monasteries, and village paths. Every tool emerged with the community, not just for them."
      }
    ],
    uxInsights: [
      {
        title: "Emotional Friction → Service Abandonment",
        problem: "Fear of shame and exclusion kept users away from formal services.",
        solution: "Build emotionally intelligent UX with safe language and visual storytelling."
      },
      {
        title: "Ritual Timelines vs Bureaucratic Timelines",
        problem: "Government processes ignored cultural calendars and rituals.",
        solution: "Align service touchpoints with local community timelines."
      },
      {
        title: "Trust is Embedded, Not Institutional",
        problem: "Users trusted local actors like monks and forest guards more than officials.",
        solution: "Integrate trusted community figures into service delivery."
      },
      {
        title: "The Forest is Kin, Not a Resource",
        problem: "Top-down conservation excluded ritual and ancestral ties to nature.",
        solution: "Reflect cultural logic in eco-platform design."
      },
      {
        title: "Workarounds Are Blueprints",
        problem: "Informal solutions were treated as errors or non-compliance.",
        solution: "Design for flexibility, proxy users, and cross-border realities."
      }
    ],
    designPrinciples: [
      {
        title: "Personas are not static summaries—they’re lived systems.",
        desc: "Designing for hybrid identities means designing for movement, emotion, and layered belonging."
      },
      {
        title: "Workarounds aren't bad behavior—they’re survival.",
        desc: "Proxy users, informal paths, and cultural rituals aren’t obstacles. They’re real user journeys."
      },
      {
        title: "Designing from the margins lifts everyone.",
        desc: "Solutions built for excluded users often lead to more flexible, empathetic design for all."
      }
    ],
    reflection: "At first, nothing fit. Formal interviews felt artificial. Surveys fell flat. People spoke through stories, gestures, silences—not answers. So I had to unlearn. I stopped trying to extract data and started listening to life. I sat quietly in rituals, joined long conversations without notebooks, and let the village rhythm guide me. Slowly, trust arrived. I learned that shame and avoidance don’t show up in spreadsheets—but they shape everything. I learned that the deepest truths aren’t spoken, they’re felt. And I learned the hardest part: translating messy, contradictory human experience into something design teams and policymakers can actually act on. Inclusive design doesn’t begin in tools. It begins in presence. In story. In trust. It means slowing down, listening fully, and designing not for 'users'—but for people: layered, emotional, shaped by culture."
  },
  {
    id: "women-panchayat",
    tag: "Gender & Public Governance",
    tagBg: "bg-[#fdf2f4]",
    tagText: "text-[#9e3a53]",
    tagBorder: "border-[#f5ccd5]",
    title: "Reserved. Elected. Silenced?",
    subtitle: "Designing with First-Time Women Leaders in India’s Panchayati Raj",
    role: "UX Researcher · Field Lead · Co-Designer",
    timeline: "30 Days Fieldwork + 1 Week Synthesis",
    location: "Machnoor Village, Telangana, India",
    domain: "Governance Usability & Emotional Safety",
    previewImage: "/images/panchayat-women-meeting.jpg",
    context: "How can governance systems move from tokenism to lived leadership? This question drove my ethnographic UX study with first-time elected women representatives in the Panchayati Raj system. In Machnoor, women held seats in local councils but often remained silent in meetings, navigating patriarchal norms, procedural complexity, and limited training. Representation existed on paper, but participation lagged in practice.",
    methods: [
      "Immersive Ethnography & Shadowing",
      "Interviews & Shadowing",
      "Service Journey Mapping",
      "Participatory Co-Design Workshops"
    ],
    stats: [
      { val: "100%", label: "Spoke in Council Meetings During Trial", bg: "bg-[#9e3a53] text-white" },
      { val: "3", label: "Co-Created Confidence Tools", bg: "bg-[#8f754f] text-white" },
      { val: "2", label: "Additional Villages Adopted by NGO", bg: "bg-[#2d503e] text-white" },
      { val: "0", label: "Dependence on Male Intermediaries", bg: "bg-[#715c3f] text-white" }
    ],
    theChallenge: [
      "Meetings dominated by men, sidelining women’s voices",
      "Procedures & forms only in official language, unfamiliar to many",
      "No onboarding or training for navigating council work",
      "Social norms discouraging women from speaking in public"
    ],
    systemicBarriers: [
      {
        num: "01",
        title: "Information Gaps",
        desc: "Women lacked clear guidance or onboarding on council duties, agenda structures, or legislative powers."
      },
      {
        num: "02",
        title: "Language Barriers",
        desc: "All official procedures, bylaws, and proposal forms existed exclusively in complex bureaucratic scripts without local dialect support."
      },
      {
        num: "03",
        title: "Confidence Deficit",
        desc: "Deep-rooted social norms made public speaking and decision-making in male-dominated halls feel socially unsafe or unfamiliar."
      }
    ],
    approachSteps: [
      "Lived alongside women leaders during their early months in office.",
      "Mapped meeting dynamics to understand how and when women’s voices were excluded.",
      "Co-created tools with elected women, council members, and local NGOs.",
      "Developed role-play and scenario-based training tailored to village governance issues."
    ],
    methodsDetails: [
      {
        title: "Immersive Ethnography",
        desc: "Participating in daily life, attending council sessions, and shadowing leaders."
      },
      {
        title: "Interviews & Shadowing",
        desc: "Speaking with elected women, male council members, clerks, and NGO trainers."
      },
      {
        title: "Service Mapping",
        desc: "Documenting the official vs. actual journey of raising an issue in council."
      },
      {
        title: "Participatory Co-Design",
        desc: "Creating tools in workshops that women could test immediately in real meetings."
      }
    ],
    toolsCreated: [
      {
        icon: "📋",
        title: "Panchayat Starter Kit",
        desc: "Step-by-step guide in local language with visual cues for agenda items."
      },
      {
        icon: "🗂️",
        title: "Meeting Practice Cards",
        desc: "Role-play prompts to prepare for common council debates and procedures."
      },
      {
        icon: "📊",
        title: "Issue Tracker Board",
        desc: "A simple, visible tool to follow issues from initial proposal to resolution."
      }
    ],
    pilotOutcomes: [
      "Helped 100% of participants speak at least once in council meetings during the trial",
      "Reduced dependency on male intermediaries for submitting proposals",
      "Adopted by a local NGO for rollout in two more villages"
    ],
    whatILearned: "Confidence is a practice, not a policy. Systems must give tools and safe spaces for new voices to become lasting ones.",
    whyItMatters: "This project showed how UX can transform reserved seats into active participation. By working within women’s lived realities, I designed tools that were visual, local, and usable in real time — not abstract policy documents.",
    whyItMattersForDesign: [
      "Conduct deep ethnographic research in gender-sensitive contexts",
      "Translate lived experience into actionable design interventions",
      "Create tools that shift power dynamics in public governance"
    ],
    reflection: "Confidence is a practice, not a policy. Systems must provide tangible tools and emotionally safe spaces for newly included voices to become lasting leaders. UX research can transform legal quotas into active, dignified participation."
  }
];