export const projects = [
  {
    id: "fintech",
    tag: "Fintech & Product",
    tagBg: "bg-[#e8edf2]",
    tagText: "text-[#2b4c60]",
    tagBorder: "border-[#c4d4e0]",
    title: "Demystifying Financial Friction: Mental Models in Digital Banking",
    subtitle: "Bridging the gap between automated banking systems and human financial anxiety through qualitative research and service design.",
    role: "Lead UX Researcher & Service Strategist",
    timeline: "2023 – 2024",
    location: "Toronto, ON",
    domain: "Digital Banking & Wealth Management",
    previewImage: "/images/fintech-journey.jpg",
    context: "Financial literacy is rarely just a mathematical hurdle; it is an emotional and systemic barrier. When complex banking workflows fail to match users' intuitive mental models, customers experience acute anxiety, leading to abandoned applications and high customer support strain.",
    methods: [
      "Contextual Inquiries & Shadowing",
      "Mental Model Mapping",
      "Card Sorting & Information Architecture",
      "Usability Testing & Service Blueprinting"
    ],
    stats: [
      { val: "28+", label: "In-Depth Customer Interviews", bg: "bg-[#2b4c60] text-white" },
      { val: "3", label: "Behavioral Persona Archetypes", bg: "bg-[#8f754f] text-white" },
      { val: "42%", label: "Reduction in Onboarding Drop-Off", bg: "bg-[#2d503e] text-white" },
      { val: "End-to-End", label: "Service Blueprint Delivered", bg: "bg-[#715c3f] text-white" }
    ],
    challenges: [
      {
        num: "01",
        tag: "Cognitive Load",
        title: "The Jargon & Ambiguity Wall",
        desc: "Users abandoned loan pre-approval flows not because of interest rates, but due to ambiguous status messaging that triggered fear of hard credit score penalties."
      },
      {
        num: "02",
        tag: "Emotional Disconnect",
        title: "Invisible Budgeting Workarounds",
        desc: "Standard automated budgeting tools failed because users maintain mental event buckets rather than rigid numerical ledger categories."
      }
    ],
    quote: {
      text: "I don't need a robot telling me I spent too much on groceries; I need to know if I can pay rent when my direct deposit is delayed.",
      speaker: "Study Participant, Self-Employed User"
    },
    comparisonTable: {
      title: "Bank Feature Assumptions vs. User Mental Models",
      headers: ["Dimension", "System Design Assumption", "User Mental Reality", "Product Impact"],
      rows: [
        {
          dim: "Transaction Pending",
          vision: "Greyed-out pending status is intuitive",
          reality: "Users assume money was double-debited",
          impact: "Spike in frantic customer support calls"
        },
        {
          dim: "Credit Health Check",
          vision: "Click to see current score estimate",
          reality: "Fear that checking will damage credit profile",
          impact: "Drop-off on self-serve pre-qualification"
        },
        {
          dim: "Auto-Save Rules",
          vision: "Fixed percentage transfers on payday",
          reality: "Irregular income creates panic over overdraft fees",
          impact: "Users disable automation and hoard cash"
        }
      ]
    },
    interventions: [
      {
        title: "Plain-Language Status Transparency",
        desc: "Redesigned transaction state touchpoints to explicitly clarify pending holds and soft vs. hard credit verification in real time."
      },
      {
        title: "Adaptive Mental-Accounting Buckets",
        desc: "Restructured digital savings jars around goal-oriented life events rather than rigid monthly accounting categories."
      },
      {
        title: "Proactive Overdraft Buffer Warnings",
        desc: "Replaced punitive post-charge alerts with contextual micro-prompts that predict cashflow pinches 48 hours in advance."
      }
    ]
  },
  {
    id: "organic-farming",
    tag: "Agriculture & Policy",
    tagBg: "bg-[#e3eae1]",
    tagText: "text-[#2d503e]",
    tagBorder: "border-[#cbd8c7]",
    title: "Organic Farming in Sikkim’s System: At What Cultural & Economic Cost?",
    subtitle: "A longitudinal ethnographic study examining the gap between the state mandate for organic farming and generational farmer realities.",
    role: "Lead Ethnographer & Strategic Researcher",
    timeline: "2018 – 2024",
    location: "Sikkim, India",
    domain: "Agricultural Systems, Public Policy & Livelihoods",
    previewImage: "/images/sikkim-greenhouse-solo.jpg",
    context: "In 2016, Sikkim became the world's first fully organic state. However, the policy transition was mandated top-down without accounting for generational agricultural routines, pest ecology, market logistics, or household economics.",
    methods: [
      "In-situ Contextual Inquiries",
      "Longitudinal Participant Observation",
      "Semi-Structured In-Depth Interviews",
      "Policy & Supply Chain Ecosystem Mapping"
    ],
    challenges: [
      {
        num: "01",
        tag: "Systemic Yield Crisis",
        title: "The Productivity Collapse",
        desc: "Transitioning without bridge subsidies or bio-input infrastructure caused steep initial yield drops, pushing smallholders into debt."
      },
      {
        num: "02",
        tag: "Certification Friction",
        title: "The Administrative Burden",
        desc: "Complex paperwork and third-party inspection audits prioritized large estates, while illiterate rural cultivators were excluded from certified premium pricing."
      }
    ],
    quote: {
      text: "The government gave us the organic tag, but the pests did not read the notification.",
      speaker: "Pemba Lepcha, Elder Cultivator, West Sikkim"
    },
    comparisonTable: {
      title: "Mandate Vision vs. Field Reality",
      headers: ["Dimension", "Policy Vision", "Lived Reality", "Systemic Impact"],
      rows: [
        {
          dim: "Pest Management",
          vision: "Rapid shift to bio-pesticides",
          reality: "Severe crop damage with no bio-substitutes",
          impact: "Immediate household revenue loss"
        },
        {
          dim: "Market Linkage",
          vision: "Direct premium exports globally",
          reality: "Middlemen control pricing; perishable transit bottlenecks",
          impact: "Farmers absorb full logistical loss"
        },
        {
          dim: "Labor Demands",
          vision: "Sustainable community farming",
          reality: "Manual weeding triples domestic work for women",
          impact: "Compounded gendered labor strain"
        }
      ]
    },
    interventions: [
      {
        title: "Localized Knowledge Blueprints",
        desc: "Shift from centralized chemical bans to regionally tailored soil management protocols co-designed with elder farmers."
      },
      {
        title: "Transparent Cold-Chain Support",
        desc: "Implement cooperative logistics nodes to eliminate predatory intermediary markups and protect fragile organic harvests."
      },
      {
        title: "Decentralized Organic Certification",
        desc: "Replace exclusionary paperwork with community peer-group verification networks recognized by state procurement."
      }
    ]
  },
  {
    id: "india-bhutan",
    tag: "Identity & Governance",
    tagBg: "bg-[#fdf2ee]",
    tagText: "text-[#c2785c]",
    tagBorder: "border-[#f2d0c4]",
    title: "When the System Can’t See You: How Do You Prove You Exist?",
    subtitle: "Navigating identity, state borders, and inclusive UX design alongside a marginalized Himalayan border community in Chunabhatti.",
    role: "Lead Strategic Ethnographer",
    timeline: "2021 – 2024",
    location: "Chunabhatti, India–Bhutan Border",
    domain: "Borderland Governance & Digital Identity UX",
    previewImage: "/images/bhutan-temple.jpg",
    context: "Chunabhatti is a remote enclave on the India–Bhutan border. While state registries treat crossing as a binary administrative event, for the Drukpa community, daily life, healthcare, and trade depend on fluid cross-border kinship.",
    methods: [
      "Cross-Border Journey Mapping",
      "Longitudinal Ethnography",
      "Participatory Community Workshops",
      "Multi-Stakeholder Blueprinting"
    ],
    stats: [
      { val: "100+", label: "Field Inquiries Conducted", bg: "bg-[#2d503e] text-white" },
      { val: "5", label: "Core Persona Archetypes", bg: "bg-[#8f754f] text-white" },
      { val: "360°", label: "Cross-Border Journey Maps", bg: "bg-[#455a4f] text-white" },
      { val: "4-Tier", label: "Governance Framework", bg: "bg-[#715c3f] text-white" }
    ]
  }
];