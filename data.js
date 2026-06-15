/* =========================================================================
   data.js — single source of truth for all site content.
   Edit content here; app.js renders it. No build step required.
   ========================================================================= */
const siteData = {
  name: "Dhana Karthikeya Ventrapragada",
  location: "Berkeley, CA",
  availability: "Open to Summer 2027 internships",
  contact: {
    email: "vdkarthikeya@berkeley.edu",
    github: "https://github.com/vdkarthikeya",
    githubLabel: "github / vdkarthikeya",
    linkedin: "#",
    linkedinLabel: "linkedin / vdkarthikeya"
  },

  // Home intro paragraph (replaces the old "Quiet work on..." lede).
  intro:
    "I'm an undergraduate at UC Berkeley studying Data Science and Applied Mathematics, graduating December 2027. I build applied machine learning systems — currently as an engineering intern at Guang Labs, a data science intern at IDX Exchange, and as course staff for CS 61A. Alongside the applied work, I'm actively exploring opportunities in machine learning research.",

  about: {
    bio: [
      "I'm a Data Science and Applied Mathematics student at UC Berkeley, graduating December 2027. I transferred from De Anza College, where I earned an Associate's degree in Mathematics and Computer Science.",
      "My work centers on building applied machine learning systems — across video understanding, real-estate valuation, and NLP — with concrete tools, datasets, and metrics rather than buzzwords. I care more about the honest version of a result than the flattering one. Alongside the applied work, I'm actively exploring opportunities in machine learning research."
    ],
    education: [
      {
        school: "University of California, Berkeley",
        degree: "B.A. in Data Science & Applied Mathematics",
        detail: "College of Computing, Data Science, and Society",
        gpa: "GPA 3.82 / 4.00",
        dates: "Expected Dec 2027"
      },
      {
        school: "De Anza College",
        degree: "Associate's Degree in Mathematics & Computer Science",
        detail: "Cupertino, CA",
        gpa: "GPA 3.92 / 4.00",
        dates: "2023 — 2025"
      }
    ],
    coursework: "CS 61A · CS 61B · Data C8 · Data C100 (Principles & Techniques) · Data C140 (Probability). Planned: CS 189 (Machine Learning) · Data C101 (Data Engineering)."
  },

  // featured: true => shown on the home page (capped at 3 in app.js)
  experiences: [
    {
      featured: true,
      company: "Guang Labs",
      role: "Engineering Intern",
      location: "Remote",
      dates: "May 2026 — Present",
      bullets: [
        "Build AI-powered video workflows for gameplay upload, processing, and highlight generation.",
        "Develop a Gemini-based media-classification workflow with Pydantic schemas, configurable parameters, and prompt-loading utilities.",
        "Work across image, short-video, and sampled long-video classification spanning multiple content domains."
      ]
    },
    {
      featured: true,
      company: "IDX Exchange",
      role: "Data Science Intern",
      location: "Remote",
      dates: "Jun 2026 — Present",
      bullets: [
        "Build end-to-end ML pipelines on large-scale MLS sold-property data for California home-price prediction.",
        "Iterate on XGBoost valuation models with cross-validation and feature-importance analysis, evaluated on MdAPE, RMSE, MAE, and R\u00b2.",
        "Own ingestion, cleaning, feature engineering, and leakage prevention; document data-quality-to-performance links."
      ]
    },
    {
      featured: true,
      company: "UC Berkeley — CS 61A",
      role: "Undergraduate Course Staff",
      location: "Berkeley, CA",
      dates: "Jun 2026 — Aug 2026",
      bullets: [
        "Support grading workflows across Gradescope, autograders, regrades, and extensions (grading focus area).",
        "Teach two weekly exam-prep sections (groups of 5\u20136) and hold office hours for Python, Scheme, SQL, and recursion.",
        "Help students debug by connecting implementation errors to core CS concepts."
      ]
    },
    {
      featured: false,
      company: "UC Berkeley — Fung Fellowship",
      role: "Incoming Fellow, Health + Innovation Track",
      location: "Berkeley, CA",
      dates: "Fall 2026",
      bullets: [
        "Selected for Berkeley's Fung Fellowship Health + Innovation track.",
        "Will build digital public-health tools with community partners using human-centered design."
      ]
    },
    {
      featured: false,
      company: "Boundary.0",
      role: "Secretary",
      location: "Cupertino, CA",
      dates: "Apr 2024 — Jun 2025",
      bullets: [
        "Managed internal operations, documentation, and compliance for a student org serving international students.",
        "Led communication and support for a 120+ member community."
      ]
    },
    {
      featured: false,
      company: "Mentors at De Anza",
      role: "Mentor",
      location: "Cupertino, CA",
      dates: "Sep 2024 — Apr 2025",
      bullets: [
        "Mentored students on course planning, transfer-credit policies, and academic pathways.",
        "Shared study strategies and encouraged internships, networking, and balanced involvement."
      ]
    },
    {
      featured: false,
      company: "De Anza Student Government",
      role: "Programs Committee Intern",
      location: "Cupertino, CA",
      dates: "Feb 2024 — Feb 2025",
      bullets: [
        "Planned and executed campus events including Club Day, Resource Fair, Spring Carnival, and Homecoming.",
        "Coordinated logistics, vendor communication, and event marketing."
      ]
    },
    {
      featured: false,
      company: "Indian Students Association, De Anza",
      role: "Events Coordinator",
      location: "Cupertino, CA",
      dates: "Oct 2023 — Feb 2025",
      bullets: [
        "Led planning and execution for major cultural events, including Diwali 2024.",
        "Oversaw logistics, budgeting, volunteer management, and sponsorship outreach."
      ]
    },
    {
      featured: false,
      company: "Kirsch Center, De Anza",
      role: "Lab Technician Assistant",
      location: "Cupertino, CA",
      dates: "Dec 2023 — Mar 2024",
      bullets: [
        "Supported restoration of sustainability spaces and native-plant maintenance.",
        "Led educational tours and communicated environmental practices."
      ]
    }
  ],

  projects: [
    {
      featured: true,
      title: "Movie Genre Classification",
      tag: "NLP \u00b7 Embeddings",
      stack: "Multi-Label NLP \u00b7 Python, PyTorch, SentenceTransformers",
      dates: "Jan — May 2026",
      repo: "https://github.com/vdkarthikeya/movie-genre-classification-nlp",
      bullets: [
        "Multi-label genre prediction on 42K+ MovieLens/TMDB films; parsed nested IMDb metadata and engineered log budget/revenue and temporal features.",
        "Embedded title + tagline + overview with MiniLM, MPNet, and e5-large-v2; benchmarked Logistic Regression, XGBoost, and LightGBM.",
        "Rare-genre cutoffs and threshold tuning lifted Macro F1 from 0.48 to 0.66 (Micro F1 0.68); Logistic Regression beat tree models while training far faster."
      ]
    },
    {
      featured: true,
      title: "Housing Price & Assessment Bias",
      tag: "Regression \u00b7 Bias",
      stack: "pandas, NumPy, scikit-learn",
      dates: "Mar — Apr 2026",
      repo: null,
      bullets: [
        "Linear-regression pipeline on 200K+ Cook County Assessor records with log-sqft, polynomial age/geo terms, and latitude\u00d7longitude interactions.",
        "Filtered non-arm's-length $1 sales to mirror real assessment practice; reached RMSE 0.562 via 4-fold cross-validation.",
        "Quantified over- and under-estimation across price bands and connected it to documented assessment inequities."
      ]
    },
    {
      featured: true,
      title: "Email Spam / Ham Classifier",
      tag: "Classification",
      stack: "scikit-learn, pandas, NumPy",
      dates: "Apr — May 2026",
      repo: null,
      bullets: [
        "Engineered 50+ features from raw emails: regex link/punctuation/dollar counts, HTML/subject indicators, log-scaled length, and a curated bag-of-words.",
        "Trained an L1-regularized Logistic Regression tuned with GridSearchCV and validated with 10-fold cross-validation.",
        "Achieved 92.1% test accuracy on a held-out leaderboard set."
      ]
    },
    {
      featured: false,
      title: "California Housing Regression",
      tag: "Regression",
      stack: "Python, scikit-learn",
      dates: "2025",
      repo: "https://github.com/vdkarthikeya/california-housing-regression",
      bullets: [
        "Regression models on the California Housing dataset using demographic, geographic, and economic features.",
        "Compared Linear Regression and k-Nearest-Neighbors, analyzing interpretability, feature scaling, and performance tradeoffs."
      ]
    },
    {
      featured: false,
      title: "Scheme Interpreter",
      tag: "Interpreters",
      stack: "Python",
      dates: "2025",
      repo: null,
      bullets: [
        "Implemented core components of a Scheme interpreter: expression evaluation, environments, special forms, procedures, and recursion.",
        "Built understanding of how programming languages are represented, parsed, evaluated, and extended."
      ]
    },
    {
      featured: false,
      title: "NGordnet",
      tag: "Java \u00b7 Data Structures",
      stack: "Java",
      dates: "2025",
      repo: null,
      bullets: [
        "Java word-relationship explorer using maps, sets, and graph traversal over WordNet-style relationships.",
        "Integrated historical word-frequency data to analyze language trends over time."
      ]
    },
    {
      featured: false,
      title: "Build Your Own World",
      tag: "Java \u00b7 Systems",
      stack: "Java",
      dates: "2025",
      repo: null,
      bullets: [
        "Procedurally generated 2D tile world in Java with deterministic, seed-based generation.",
        "Built interactive movement and save/load persistence for world and player state."
      ]
    }
  ],

  skills: [
    { group: "Languages", items: ["Python", "Java", "C++", "SQL", "Scheme"] },
    { group: "Libraries", items: ["pandas", "NumPy", "Matplotlib", "seaborn", "scikit-learn", "XGBoost", "LightGBM", "SentenceTransformers"] },
    { group: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ", "Jupyter", "Google Colab", "MATLAB"] },
    { group: "Currently learning", items: ["PyTorch", "TensorFlow", "deep learning", "computer vision", "ML systems"] }
  ]
};
