// Master Clean Data Architecture for Dakshana Sri M
// "STUDENT → BUILDER → LEADER"

export const INITIAL_PORTFOLIO_DATA = {
  meta: {
    name: "DAKSHANA SRI M",
    role: "DATA SCIENCE × VENTURE BUILDING × LEADERSHIP × RESEARCH",
    headline: "STUDENT → BUILDER → LEADER",
    tagline: "I’m learning to turn curiosity into things worth building.",
    subtagline: "Exploring data, technology, businesses, people and the ideas that connect them.",
    location: "Coimbatore / Tamil Nadu, India",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    avatarAlt: "Dakshana Sri M Editorial Portrait",
    socials: {
      email: "dakshanasri.m@example.com",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/Dakshana-sri-m",
      kaggle: "https://kaggle.com/",
      leetcode: "https://leetcode.com/"
    }
  },

  statusStrip: {
    currentlyBuilding: "ProtoSem (20-Week Venture Sprint)",
    currentPhase: "Week 0 & Week 1 completed",
    interests: "Data Science × Business Operations × Applied ML",
    direction: "Research + Advanced Computing + Venture Scale"
  },

  liveStatus: {
    currently: "ProtoSem · Week 1 Completed",
    learning: "Data Science + Advanced Computing",
    building: "Ideas → Experiments → Prototypes",
    preparing: "PG Entrance + Research"
  },

  story: {
    title: "WHERE I COME FROM SHAPES WHAT I BUILD.",
    subtitle: "An editorial trajectory of curiosity, ground-level business exposure, and the deliberate evolution into a builder and leader.",
    chapters: [
      {
        id: "ch-student",
        stage: "STUDENT",
        title: "The Foundations of Curiosity",
        period: "Academic Foundations",
        content: "Beginning in computer applications and core computational methods. Rather than stopping at textbook exercises, my curiosity pushed towards understanding how raw data converts into real decisions, and how computation can model complex real-world dynamics.",
        takeaway: "Curiosity before tools; fundamentals before frameworks.",
        photo: ""
      },
      {
        id: "ch-datascience",
        stage: "DATA SCIENCE",
        title: "From Data Analysis to Systems Intelligence",
        period: "Analytical Immersion",
        content: "Deepening capabilities in Python, SQL, statistical modeling, machine learning, and packet-flow traffic classification. Discovering that data is not merely numbers on a dashboard, but the digital footprint of human intent and machine behavior.",
        takeaway: "Finding signal in noisy environments.",
        photo: ""
      },
      {
        id: "ch-business",
        stage: "BUSINESS EXPOSURE",
        title: "Roots in Enterprise & Ground-Truth Operations",
        period: "Ground-Level Business Exposure",
        content: "Witnessing real-world commercial enterprise, manufacturing by-products, and export mechanics firsthand. Learning that technical solutions mean nothing unless they survive the realities of cash flow, supply chains, compliance, and client trust.",
        takeaway: "Building with an instinct for viability and practical economics.",
        photo: ""
      },
      {
        id: "ch-builder",
        stage: "BUILDER",
        title: "ProtoSem & The Discipline of Shipping",
        period: "Active Venture Sprint",
        content: "Transitioning from theoretical assignments to disciplined rapid prototyping in ProtoSem: 20 weeks, 1 core idea, daily sprints from discovery to architectural validation and live demos. Building things that can be tested, critiqued, and iterated.",
        takeaway: "Execution is the only true validator.",
        photo: ""
      },
      {
        id: "ch-leader",
        stage: "LEADER",
        title: "Convening People, Catalyzing Movements",
        period: "Leadership & Ecosystem",
        content: "Directing flagship entrepreneurship initiatives at LEED (E-Summit, Shark Tank, Founder Podcast Series), acting as the bridge between cohort and faculty as Class Representative, and volunteering with Namadhu Pangu for social impact operations.",
        takeaway: "Leadership is about creating clarity and removing friction for others.",
        photo: ""
      },
      {
        id: "ch-next",
        stage: "WHAT'S NEXT?",
        title: "Venture Building & Postgraduate Research",
        period: "Near-Term Horizon",
        content: "Preparing for advanced postgraduate research and venture-scale engineering. Focusing on intersections between high-throughput data systems, intelligent automation, and sustainable industrial by-product monetization.",
        takeaway: "Continuously widening the scope of impact.",
        photo: ""
      }
    ],
    fatherMentorship: {
      title: "THE PEOPLE WHO SHAPED HOW I THINK",
      subtitle: "Someone who influenced the way I see business, responsibility and growth.",
      content: "Growing up around my father's business gave me an unfiltered masterclass in resilience, customer relationships, and operational reality. Long before I studied machine learning algorithms or venture ideation frameworks, I watched how a business navigates uncertainty, manages suppliers, and creates enduring value. That background is why I don't build software in a vacuum — I build with an instinct for practical economics, human trust, and long-term viability.",
      quote: "Understanding the problem at the ground level is worth a thousand assumptions.",
      photo: ""
    }
  },

  build: [
    {
      id: "b-01",
      category: "BUILDING",
      title: "Intelligent Network Traffic Type Classifier",
      why: "Traditional deep packet inspection is compute-heavy and breaks under encrypted flows; statistical flow features enable privacy-preserving, rapid threat categorization.",
      trying: "Training tree-based and neural classifiers on high-dimensional flow duration, packet length variance, and inter-arrival times.",
      status: "PROTOTYPE",
      next: "Packaging into an edge-deployable microservice with real-time PCAP streaming capabilities.",
      tag: "ML / Network Security",
      link: "#work",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "b-02",
      category: "BUILDING",
      title: "ProtoSem Sprint: 20-Week Prototype Engine",
      why: "Bridging the gap between academic theory and venture-ready technology requires daily execution discipline.",
      trying: "Progressing through a structured 20-week venture build: Completed Week 0 (Foundations) and Week 1 (Discovery & Needs Analysis).",
      status: "TESTING",
      next: "Refining product requirement documentation and technical architecture wireframes.",
      tag: "ProtoSem / Venture",
      link: "#protosem",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "b-04",
      category: "EXPLORING",
      title: "Cross-Border B2B Export Intelligence Playbook",
      why: "Small-to-mid manufacturing enterprises face high discovery barriers when attempting direct cross-border trade.",
      trying: "Synthesizing trade compliance, tariff structures, and logistics roadmaps for regional manufacturing exports.",
      status: "EXPLORING",
      next: "Validating tariff estimation checklists with export consultants.",
      tag: "Trade / Supply Chain",
      link: "#work",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
    }
  ],

  projects: [
    {
      id: "traffic-ml",
      title: "Network Traffic Type Categorization & Threat Anomaly Detection",
      badge: "RESEARCH & MACHINE LEARNING",
      summary: "Machine learning models analyzing network traffic flow statistics to accurately categorize traffic types and detect anomalous packets without decrypting payload content.",
      question: "Can network traffic types and emerging threat anomalies be accurately identified solely through statistical flow attributes (packet intervals, size distributions, burst ratios) without payload inspection?",
      problem: "Payload-based deep packet inspection (DPI) introduces massive computational latency and violates data privacy standards, especially as encryption protocols (TLS 1.3) obscure header payloads. Network defenders need fast, privacy-preserving classification.",
      approach: "Extracted directional flow metrics, inter-arrival time standard deviations, and protocol burst parameters. Preprocessed and normalized multi-class traffic distributions, benchmarked Random Forests, Gradient Boosted Trees, and neural classifiers against realistic network datasets.",
      tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Network Flow Analysis", "Matplotlib", "Seaborn"],
      result: "Demonstrated high multi-class precision in distinguishing streaming, bulk transfer, interactive, and anomalous packet sequences. The findings formed the basis of an international peer-reviewed paper presented at ICCSAM 2026.",
      learnings: "Feature engineering on temporal flow variance carries higher discriminatory signal than raw packet volume; handling class imbalance is critical for rare anomaly detection.",
      nextStep: "Exploring real-time lightweight inference pipelines deployable on resource-constrained gateway hardware.",
      links: {
        paper: "#proof",
        presentation: "#proof",
        github: "",
        demo: "",
        dataset: ""
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "export-expansion",
      title: "Family Enterprise Global Export Expansion Roadmap",
      badge: "BUSINESS STRATEGY & LOGISTICS",
      summary: "Strategic market analysis and cross-border supply chain assessment exploring scalable B2B export roadmaps for regional manufacturing operations.",
      question: "How can a regionally grounded manufacturing enterprise systematically transition to direct international B2B export markets while managing working capital risk?",
      problem: "Traditional manufacturing enterprises often rely on intermediaries who capture substantial margins, while direct export requires mastering complex trade compliance, incoterms, quality certifications, and maritime freight scheduling.",
      approach: "Conducted structured target market segmentation across Southeast Asia and Middle Eastern corridors. Mapped end-to-end export documentation workflows (Letter of Credit, Certificate of Origin, Phytosanitary / Quality clearances) and calculated landed cost models under varying shipping routes.",
      tools: ["Trade Analytics", "Supply Chain Modeling", "MS Excel Advanced Worksheets", "Financial Modeling", "Market Research"],
      result: "Synthesized a structured, repeatable market-entry evaluation framework and risk matrix for international buyer engagement.",
      learnings: "Export success is 30% product quality and 70% operational discipline in logistics coordination, customs compliance, and contract terms.",
      nextStep: "Developing standardized buyer evaluation scorecard templates for upcoming trade delegation inquiries.",
      links: {
        paper: "",
        presentation: "",
        github: "",
        demo: "",
        dataset: ""
      },
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  protosem: {
    title: "PROTOSEM",
    subtitle: "20 WEEKS · ONE JOURNEY · IDEAS → PROTOTYPES",
    overview: "An intensive full-time immersion into venture building, systems architecture, rapid experimentation, and hands-on prototype delivery. Dakshana has completed Week 0 and Week 1; future weeks represent the disciplined 20-week trajectory.",
    totalWeeks: 20,
    currentWeekIndex: 0,
    coreLessons: [
      {
        num: "01",
        title: "CONNECTION FIRST",
        desc: "Break silos early. Shared vulnerability and genuine interpersonal trust create the psychological safety required for radical experimentation."
      },
      {
        num: "02",
        title: "EMPATHY-DRIVEN PROBLEM IDENTIFICATION",
        desc: "Ground-truth lived experience always reveals higher-signal problem spaces than abstract armchair brainstorming."
      },
      {
        num: "03",
        title: "COGNITIVE SYNERGY",
        desc: "Diverse thinking and personality styles aren't obstacles to manage — they are distinct lenses that illuminate hidden solution angles."
      },
      {
        num: "04",
        title: "ITERATIVE ACTION OVER PERFECTION",
        desc: "Build, test, pivot, and rebuild. A rough physical or code prototype in minutes teaches more than weeks of theoretical debate."
      },
      {
        num: "05",
        title: "INTENTIONAL INNOVATION",
        desc: "Master tools like AI purposefully to accelerate genuine user value, rather than adopting technology for technology's sake."
      }
    ],
    weeks: [
      {
        weekNumber: 0,
        label: "W00",
        title: "Week 0: From Strangers to Innovators",
        status: "COMPLETED",
        theme: "Reflections on Week 0 at ProtoSem",
        introHeadline: "FROM STRANGERS TO INNOVATORS",
        introQuote: "Five days. Different disciplines. One room.",
        introText: "Students from different academic backgrounds initially entered with hesitation and ended the week as a deeply connected, collaborative team ready to build.",
        blog: {
          title: "From Strangers to Innovators: Reflections on Week 0 at ProtoSem",
          date: "August 2026",
          summary: "A comprehensive retrospective detailing the 5-day journey from individual uncertainty to high-velocity collaborative prototyping.",
          externalUrl: "",
          tags: ["ProtoSem", "Retrospective", "Venture Building"]
        },
        days: [
          {
            dayNumber: 1,
            title: "Day 01 — Breaking Barriers & Seeing Problems",
            theme: "CONNECT & OBSERVE",
            summary: "360° self-introductions, the Rock–Paper–Scissors networking challenge, and identifying real-world problems from lived experience.",
            takeaway: "Connection and keen observation are the starting points for meaningful problem-solving.",
            reflection: {
              whatHappened: "We engaged in structured interactive icebreakers, shifting from formal polite student introductions into raw, dynamic engagement.",
              whatINoticed: "Hesitation dissolved within 30 minutes once laughter and shared challenge took over.",
              whatIContributed: "Actively brought energy to the team circle and shared observations on campus operational friction.",
              whatSurprisedMe: "How quickly strangers unite when given an engaging common objective.",
              whatILearned: "Observation of real daily friction yields far better project hypotheses than abstract textbook ideas.",
              whatWouldIDoDifferently: "Take even more granular notes during initial peer problem pitches.",
              howChangedThinking: "Realized that great product founders start with acute observational curiosity about human behavior."
            },
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          },
          {
            dayNumber: 2,
            title: "Day 02 — Understanding Ourselves Through Stories",
            theme: "DISCOVER & REFLECT",
            summary: "16 Personalities framework, cognitive styles, Gen Z web stories and comics, presenting stories that resonated with participants.",
            takeaway: "Diversity includes different ways of perceiving, interpreting, and communicating about the world.",
            reflection: {
              whatHappened: "Mapped out cognitive archetypes and personality distributions across the cohort using whiteboard stickies and comic narratives.",
              whatINoticed: "Different personality types frame the exact same problem statement in radically different ways.",
              whatIContributed: "Shared insights on ENFJ strengths in group facilitation and empathetic synthesis.",
              whatSurprisedMe: "The depth of emotional resonance in simple comic storytelling.",
              whatILearned: "Recognizing peer cognitive styles prevents misunderstandings and accelerates task delegation.",
              whatWouldIDoDifferently: "Spend more time understanding opposite cognitive profiles (introverted analytical vs extraverted intuitive).",
              howChangedThinking: "High-performing teams are not homogeneous; they are deliberately balanced cognitive ecosystems."
            },
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
          },
          {
            dayNumber: 3,
            title: "Day 03 — Becoming a Team & Hands-On Prototyping",
            theme: "COLLABORATE & BUILD",
            summary: "Beta Teams formation, Among Us-inspired deduction challenge, active listening exercises, Spaghetti Tower Challenge, rapid pivots, negotiation, and iteration.",
            takeaway: "The group moved from separate individuals to a unified team that builds, tests, and iterates together under pressure.",
            reflection: {
              whatHappened: "Tackled intense hands-on prototyping constraints including the Spaghetti Tower challenge and collaborative deduction games.",
              whatINoticed: "Teams that over-planned without testing early collapsed at the deadline; teams that built immediately succeeded.",
              whatIContributed: "Acted as timer and rapid assembly coordinator during physical structural prototyping.",
              whatSurprisedMe: "How fragile initial assumptions are until subjected to gravity and physical testing.",
              whatILearned: "Early prototyping beats prolonged theoretical consensus.",
              whatWouldIDoDifferently: "Test weight load at 2-minute intervals instead of waiting for full structural completion.",
              howChangedThinking: "Prototyping is not about building the final product; it's about asking reality a physical question."
            },
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          },
          {
            dayNumber: 4,
            title: "Day 04 — Exploring AI & Purposeful Technology",
            theme: "EXPLORE & ELEVATE",
            summary: "Modern AI workflows, moving beyond generic prompting, using specialized tools for specific tasks, personalized AI frameworks, brainstorming, research, rapid prototyping, and critical thinking.",
            takeaway: "Technology should be selected intentionally to solve the right problem rather than for novelty.",
            reflection: {
              whatHappened: "Explored advanced multi-step AI workflows for deep research, schema validation, and rapid code scaffolding.",
              whatINoticed: "The quality of AI output is strictly a function of domain clarity and rigorous context formulation.",
              whatIContributed: "Demonstrated structured prompt pipelines for data extraction and literature categorization.",
              whatSurprisedMe: "How much time is saved when using specialized narrow AI agents rather than single monolithic prompts.",
              whatILearned: "AI is an amplifier of clear thought, not a substitute for critical domain analysis.",
              whatWouldIDoDifferently: "Build automated evaluation benchmarks for AI-generated code outputs.",
              howChangedThinking: "Viewed AI not as a novelty chatbot, but as an operational leverage tool for rapid hypothesis testing."
            },
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
          },
          {
            dayNumber: 5,
            title: "Day 05 — The Spark of Entrepreneurship",
            theme: "IGNITE & ENVISION",
            summary: "Youth Entrepreneurship Program (YEP) inauguration, entrepreneurial learning, customer-centric enterprise, societal impact, sustainable business practices, and long-term resilience.",
            takeaway: "True entrepreneurship connects technical excellence to customer empathy and lasting societal resilience.",
            reflection: {
              whatHappened: "Attended the formal YEP inauguration in the auditorium, engaging with seasoned founders and venture mentors.",
              whatINoticed: "Every successful entrepreneur highlighted customer trust and resilience over technical complexity.",
              whatIContributed: "Asked questions regarding early customer discovery in B2B industrial markets.",
              whatSurprisedMe: "How approachable and grounded high-growth founders are when discussing their initial failures.",
              whatILearned: "Venture scale is built one customer relationship at a time.",
              whatWouldIDoDifferently: "Connect with more guest speakers during the networking window.",
              howChangedThinking: "Understood that my technical data skills must serve real-world economic and community needs."
            },
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        weekNumber: 1,
        label: "W01",
        title: "Week 1: Needs Analysis & Deep Problem Formulation",
        status: "COMPLETED",
        theme: "User Research, Requirements & Data Pipeline Scoping",
        introHeadline: "SCOPING THE GROUND REALITY",
        introQuote: "Requirements are found in user workarounds, not user requests.",
        introText: "Transitioning into structured problem formulation, mapping manual workflow inefficiencies, and designing clean data ingestion boundaries.",
        blog: {
          title: "Sprint 01 Retrospective: Baseline Data Pipelines & User Needs",
          date: "August 2026",
          summary: "Documenting early user interviews and data transformation architecture.",
          externalUrl: "",
          tags: ["ProtoSem", "Data Engineering", "Needs Analysis"]
        },
        days: [
          {
            dayNumber: 1,
            title: "Day 01 — Discovery: User Persona & Workflow Mapping",
            theme: "DISCOVERY",
            summary: "Interviewed target users and mapped standard operational workflows. Identified critical data input anomalies and latency bottlenecks in existing manual procedures.",
            takeaway: "Users compensate for software flaws with manual spreadsheets; the hidden opportunity lies in those workarounds.",
            reflection: {
              whatHappened: "Mapped end-to-end data entry paths with regional operators.",
              whatINoticed: "Over 60% of data hygiene errors happened during manual sheet conversions.",
              whatIContributed: "Drafted workflow flowcharts highlighting duplicate input stages.",
              whatSurprisedMe: "How resilient users become with inefficient legacy tools.",
              whatILearned: "Never assume users will tell you their real problem; observe their screen directly.",
              whatWouldIDoDifferently: "Record screen capture sessions for frame-by-frame latency timing.",
              howChangedThinking: "Software value is measured by friction removed, not buttons added."
            },
            image: ""
          },
          {
            dayNumber: 2,
            title: "Day 02 — Architecture: System Schema & Ingestion",
            theme: "ARCHITECTURE",
            summary: "Designed the initial entity-relationship schema and high-level architectural diagram for data ingestion, filtering, and model inference services.",
            takeaway: "Designing schemas with clear boundary separation prevents spaghetti interdependencies.",
            reflection: {
              whatHappened: "Created ER diagrams and pipeline data flow specifications.",
              whatINoticed: "Early schema constraints save hundreds of hours of downstream refactoring.",
              whatIContributed: "Defined strict data validation types and error-handling fallback schemas.",
              whatSurprisedMe: "How quickly simple data pipelines accumulate edge cases.",
              whatILearned: "Clean data pipeline design is 80% of model reliability.",
              whatWouldIDoDifferently: "Write JSON Schema validators before writing data loader scripts.",
              howChangedThinking: "Architectural discipline upfront is the greatest speed multiplier."
            },
            image: ""
          },
          {
            dayNumber: 3,
            title: "Day 03 — Build: Data Parsing & Cleaning Pipeline",
            theme: "BUILD",
            summary: "Implemented robust data transformation modules in Python. Handled null values, categorical encodings, and temporal normalization.",
            takeaway: "Clean data pipeline code is the foundation of all predictive reliability.",
            reflection: {
              whatHappened: "Wrote modular data transformation scripts with Python & Pandas.",
              whatINoticed: "Vectorized operations ran 40x faster than iterative parsing.",
              whatIContributed: "Built reusable normalization wrappers for statistical flow fields.",
              whatSurprisedMe: "The presence of subtle zero-variance columns in raw sample data.",
              whatILearned: "Always inspect summary distribution statistics before feeding data into models.",
              whatWouldIDoDifferently: "Add automated unit tests for data transformation edge cases.",
              howChangedThinking: "Data cleaning is not a chore; it is feature engineering in disguise."
            },
            image: ""
          },
          {
            dayNumber: 4,
            title: "Day 04 — Validation: Baseline Metric Formulation",
            theme: "VALIDATION",
            summary: "Formulated benchmark evaluation metrics (Precision, Recall, F1, Latency per sample). Ran sanity tests on baseline models.",
            takeaway: "Always establish a naive baseline first before implementing complex models.",
            reflection: {
              whatHappened: "Benchmarked baseline rule-based and simple logistic classifiers.",
              whatINoticed: "High overall accuracy was deceiving due to severe class imbalance.",
              whatIContributed: "Introduced Macro-F1 and per-class precision metrics to prevent false confidence.",
              whatSurprisedMe: "How often high accuracy hides zero recall on rare critical anomalies.",
              whatILearned: "Metric choice dictates whether a model is useful in the real world.",
              whatWouldIDoDifferently: "Plot confusion matrices alongside standard scalar metrics.",
              howChangedThinking: "Honest metrics are the only protection against artificial progress."
            },
            image: ""
          },
          {
            dayNumber: 5,
            title: "Day 05 — Demo: Week 1 Sprint Review",
            theme: "DEMO",
            summary: "Presented Week 1 sprint outputs, architectural diagrams, and baseline pipeline results to ProtoSem mentors. Documented action items for Week 2.",
            takeaway: "Crisp communication during sprint demos builds trust and delivers actionable mentor feedback.",
            reflection: {
              whatHappened: "Delivered a 5-minute concise sprint review deck and live code walkthrough.",
              whatINoticed: "Mentors immediately honed in on the commercial viability of the data pipeline.",
              whatIContributed: "Articulated both technical milestones and unresolved edge case challenges.",
              whatSurprisedMe: "Mentors appreciated transparency about open flaws more than polished hype.",
              whatILearned: "Demoing what is broken is just as valuable as demoing what works.",
              whatWouldIDoDifferently: "Prepare interactive live notebook widgets for mentor queries.",
              howChangedThinking: "Sprint reviews are alignment checkpoints, not performance theater."
            },
            image: ""
          }
        ]
      }
    ]
  },

  proof: {
    certifications: [
      {
        id: "cert-deloitte",
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte, issued by Forage",
        issueDate: "March 28, 2026",
        verificationCode: "DoK5HySvEFfwT4QnW",
        userId: "69c60734448ed0424a2a5632",
        focus: "Data Analysis & Forensic Technology",
        description: "Completed practical simulation involving real-world forensic data investigations, anomaly pattern recognition, client-ready data communication, and analytical problem-solving.",
        credentialUrl: "https://www.theforage.com/simulations/deloitte/data-analytics",
        pdfUrl: "",
        image: ""
      },
      {
        id: "cert-simplilearn",
        title: "Introduction to MS Excel",
        issuer: "Simplilearn SkillUp, powered by Microsoft",
        issueDate: "July 5, 2026",
        verificationCode: "10432422",
        focus: "Data Preparation, Formulas, Analytical Worksheets",
        description: "Mastered fundamental to intermediate spreadsheet analytics, complex lookup formulas, dynamic pivot modeling, and automated summary reports for business operations.",
        credentialUrl: "https://www.simplilearn.com/skillup-certificate",
        pdfUrl: "",
        image: ""
      },
      {
        id: "cert-river-bootcamp",
        title: "Two-Day Entrepreneurship & Venture Building Bootcamp",
        issuer: "Kumaraguru Institutions & River Venture Studios, Singapore",
        issueDate: "February 9–10, 2026",
        signatories: "Dr. Viveka Kalidasan & Dr. D. Saravanan",
        focus: "Global Venture Ideation, Scalability & Market Validation",
        description: "Intensive venture design sprint covering venture capital evaluation criteria, customer discovery methodologies, unit economics validation, and cross-border commercialization strategies.",
        credentialUrl: "",
        pdfUrl: "",
        image: ""
      },
      {
        id: "cert-amypo",
        title: "Data Analytical Tool Certification",
        issuer: "Amypo",
        issueDate: "2026",
        focus: "Analytical Tools, Querying & Visual Analytics",
        description: "Hands-on certification in SQL querying, dataset transformation, analytical dashboarding, and multi-dimensional reporting.",
        credentialUrl: "",
        pdfUrl: "",
        image: ""
      }
    ],

    achievements: [
      {
        id: "achieve-merit-scholarship",
        title: "Mahatma Gandhi Merit Scholarship",
        awardingBody: "Kumaraguru Institutions / KCLAS",
        date: "March 26, 2026",
        period: "Academic Year 2025–2026",
        signatories: "Shri Shankar Vanavarayar & Dr. Deepesh",
        recognition: "Awarded for outstanding meritorious academic performance, exemplary character, and multi-faceted contribution to the institutional ecosystem during the academic year 2025–2026.",
        category: "Institutional Academic Excellence",
        image: ""
      }
    ],

    research: [
      {
        id: "research-iccsam-2026",
        title: "Network Traffic Type Categorization Using Machine Learning",
        conference: "3rd International Conference on Computational Sciences and Applied Mathematics (ICCSAM 2026)",
        organizers: "VET Institute of Arts and Science (VETIAS), Thindal, Erode in association with Asia Pacific University of Technology and Innovation (APU), Malaysia",
        date: "August 18, 2026",
        authors: "Dakshana Sri M",
        abstract: "Network traffic classification plays a pivotal role in automated Quality of Service (QoS) provisioning, intrusion detection, and adaptive bandwidth management. With the exponential adoption of transport layer encryption (TLS 1.3/QUIC), conventional deep packet inspection methods face severe limitations. This paper investigates machine learning classifiers trained on statistical flow-level behavioral signatures. Experimental evaluations demonstrate high classification accuracy across diverse traffic classes while maintaining minimal computational overhead suitable for real-time edge network monitoring.",
        presentationUrl: "",
        paperUrl: "",
        abstractUrl: "",
        status: "Presented & Peer-Reviewed"
      }
    ]
  },

  capabilities: {
    title: "CAPABILITY, NOT CHECKBOXES.",
    subtitle: "A dynamic capability landscape built through practical execution, real-world ventures, and continuous experimentation.",
    clusters: [
      {
        category: "COMPUTE",
        description: "Algorithmic thinking & programming foundations",
        skills: ["Python", "SQL", "Machine Learning", "Algorithmic Logic", "Data Structures"]
      },
      {
        category: "ANALYZE",
        description: "Statistical modeling & pattern discovery",
        skills: ["Statistics", "Data Analytics", "Network Traffic Analysis", "Forensic Technology", "Feature Engineering"]
      },
      {
        category: "VISUALIZE",
        description: "Translating data into actionable dashboards",
        skills: ["MS Excel", "Power BI", "Tableau", "BigQuery", "Exploratory Data Analysis"]
      },
      {
        category: "BUILD",
        description: "Product prototyping & rapid validation",
        skills: ["Rapid Prototyping", "Venture Building", "Experimentation", "System Architecture", "ProtoSem Sprints"]
      },
      {
        category: "LEAD",
        description: "Ecosystem orchestration & strategic initiatives",
        skills: ["Strategic Venture Incubation", "Event Logistics", "Pitch Deck Evaluation", "Live Moderation", "Podcasting & Media"]
      },
      {
        category: "CONNECT",
        description: "Human empathy & stakeholder coordination",
        skills: ["Conflict Resolution", "Faculty-Student Liaison", "Cross-Functional Coordination", "Social Empathy", "Cohort Management"]
      }
    ]
  },

  growth: {
    title: "MY PERSONAL GROWTH",
    subtitle: "FROM STUDENT → BUILDER → LEADER",
    chapters: [
      {
        chapterNumber: "01",
        label: "CHAPTER 01",
        title: "STUDENT",
        subtitle: "Learning. Exploring. Finding direction.",
        description: "Mastering the fundamentals of computer applications, mathematical logic, and data analysis. Moving beyond syllabus boundaries by questioning how computational models operate behind the scenes.",
        highlights: [
          "Rigorous academic focus recognized by the Mahatma Gandhi Merit Scholarship",
          "Deep immersion in Python, SQL, and data analytics tools",
          "Independent exploration of machine learning and network packet analysis"
        ]
      },
      {
        chapterNumber: "02",
        label: "CHAPTER 02",
        title: "BUILDER",
        subtitle: "Projects. ProtoSem. Research. Business ideas. Experiments.",
        description: "Translating theoretical understanding into tangible artifacts: presenting peer-reviewed research at international conferences, diving into 20 weeks of ProtoSem prototyping, and exploring circular economy business models.",
        highlights: [
          "Authored & presented international conference paper at ICCSAM 2026",
          "ProtoSem 20-week venture prototyping immersion (Week 0 & Week 1 completed)",
          "Formulated feasibility roadmaps for agricultural by-product upcycling & global B2B exports"
        ]
      },
      {
        chapterNumber: "03",
        label: "CHAPTER 03",
        title: "LEADER",
        subtitle: "Leadership. Events. People. Entrepreneurship. Community.",
        description: "Taking on institutional responsibilities: directing flagship venture events, facilitating cohort-faculty harmony, and driving social impact operations.",
        initiatives: [
          {
            role: "Director",
            organization: "LEED (Leadership & Entrepreneurship Development)",
            highlights: [
              "Spearheaded flagship E-Summit bringing together founders, investors, and aspiring student innovators",
              "Organized and executed collegiate Shark Tank pitch competitions",
              "Hosted and curated the Founder Podcast Series interviewing regional entrepreneurs"
            ],
            hasPodcastSoundwave: true
          },
          {
            role: "Class Representative",
            organization: "Student Body & Department Cohort",
            highlights: [
              "Official student-faculty liaison streamlining academic workflows and exam logistics",
              "Coordinated peer study groups and fostered inclusive cohort collaboration",
              "Resolved scheduling and administrative friction with empathy and diplomatic clarity"
            ]
          },
          {
            role: "Volunteer & Community Operator",
            organization: "Namadhu Pangu",
            highlights: [
              "Coordinated community outreach programs and social impact ground operations",
              "Facilitated volunteer engagement across rural empowerment and educational support drives"
            ]
          }
        ]
      }
    ]
  },

  personality: {
    type: "ENFJ",
    typeName: "PROTAGONIST",
    tagline: "The Collaborative Catalyst & Purpose-Driven Operator",
    scores: {
      extraverted: "54%",
      intuitive: "52%",
      feeling: "57%",
      judging: "51%",
      turbulent: "51%"
    },
    traits: [
      {
        label: "PEOPLE-FIRST",
        desc: "Empathetic communication, active listener, brings out the best in team members."
      },
      {
        label: "IDEA-DRIVEN",
        desc: "Excited by possibilities, seeks conceptual connections across disparate domains."
      },
      {
        label: "COLLABORATIVE",
        desc: "Believes the highest-performing teams operate on shared trust and radical clarity."
      },
      {
        label: "PURPOSE-ORIENTED",
        desc: "Builds technology and ventures anchored to real societal and commercial utility."
      },
      {
        label: "ALWAYS REFINING",
        desc: "Iterates with humble curiosity — treats feedback as essential engineering input."
      }
    ],
    image: ""
  },

  now: {
    title: "RIGHT NOW",
    subtitle: "A living snapshot of current focus areas, active learning, and near-term horizons.",
    items: [
      {
        badge: "ACTIVE IMMERSION",
        label: "BUILDING",
        detail: "ProtoSem (20-Week Prototype Engine) — Completed Week 0 & Week 1, entering deeper technical sprints."
      },
      {
        badge: "TECHNICAL DEPTH",
        label: "LEARNING",
        detail: "Data Science + Advanced Computing, statistical modeling, and high-throughput data pipelines."
      },
      {
        badge: "VENTURE EXPERIMENTS",
        label: "EXPLORING",
        detail: "Technology + Business + Venture Ideas, circular economy by-product utilization, and cross-border trade."
      },
      {
        badge: "ACADEMIC HORIZON",
        label: "PREPARING",
        detail: "PG Entrance + Research proposals in computational systems."
      },
      {
        badge: "STRATEGIC VISION",
        label: "THINKING ABOUT",
        detail: "The next chapter after graduation: turning curiosity and operational discipline into high-impact ventures."
      }
    ]
  },

  contact: {
    headline: "LET'S BUILD SOMETHING WORTH TALKING ABOUT.",
    subheadline: "Whether you're exploring research collaborations, discussing venture prototypes, or sharing a ground-level business problem — my door is open.",
    directEmail: "dakshanasri.m@example.com",
    availability: "Open to Research Opportunities, Prototyping Collaborations & Mentorship",
    city: "Coimbatore, Tamil Nadu, India"
  }
};
