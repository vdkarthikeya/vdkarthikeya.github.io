/* ============================================================
   Dhana Karthikeya Ventrapragada — Portfolio
   script.js
   ------------------------------------------------------------
   HOW TO EDIT THIS SITE:
   Almost everything you might want to change lives in the
   `siteData` object directly below. Edit the text, add or remove
   items from the arrays, and the page updates automatically.
   No build step required — just save and refresh.
   ============================================================ */

const siteData = {

  /* ---------- Personal links (used across hero, contact, footer) ---------- */
  links: {
    email:    "vdkarthikeya@berkeley.edu",
    github:   "https://github.com/vdkarthikeya",
    linkedin: "https://linkedin.com/in/vdkarthikeya",
    resume:   "resume.pdf"   // <-- place your resume file (resume.pdf) in this folder
  },

  /* ---------- Hero ---------- */
  hero: {
    eyebrow:     "Summer 2027 · ML Engineering Intern",
    name:        "Dhana Karthikeya Ventrapragada",
    headline:    "UC Berkeley Data Science + Applied Mathematics student building applied ML systems.",
    positioning: "Seeking Summer 2027 Machine Learning Engineering internships. Current work spans AI-powered video workflows, real estate valuation models, NLP classification, and data systems.",
    research:    "Research-oriented and currently exploring AI/ML research opportunities, especially AI in education.",
    interests:   "Broader interests include reinforcement learning, multimodal AI, and human-centered ML systems."
  },

  /* ---------- At-a-glance / proof strip ----------
     A string is a neutral fact pill; { v, accent:true } is highlighted. */
  glance: [
    "UC Berkeley",
    "Data Science + Applied Mathematics",
    "GPA 3.82 / 4.00",
    "Expected Dec 2027",
    "Engineering Intern · Guang Labs",
    "Data Science Intern · IDX Exchange",
    "CS 61A Course Staff",
    { v: "Target · Summer 2027 ML Engineering Intern", accent: true },
    { v: "Exploring AI/ML research opportunities", accent: true }
  ],

  /* ---------- Experience ----------
     home: ranking on the homepage (1,2,3...). Omit to keep off homepage.
     homeBullets: 2 concise bullets for the homepage card.
     bullets: full detail shown on the "All Experience" page. */
  experience: [
    {
      home: 1,
      role: "Engineering Intern",
      org: "Guang Labs",
      dates: "May 2026 – Present",
      loc: "Remote",
      homeBullets: [
        "Built backend AI infrastructure for an automated gaming-highlight detection platform.",
        "Developed a Gemini-based media classification workflow across six content domains."
      ],
      bullets: [
        "Built backend AI infrastructure for Guang Labs' automated gaming-highlight detection platform, supporting video ingestion, media classification, and highlight-generation workflows.",
        "Developed a Gemini-based media classification workflow using Pydantic schemas, configurable parameters, prompt files, and prompt-loading utilities to classify images, short videos, and sampled long-video clips across 6 content domains.",
        "Collaborated with engineering and product teammates to understand creator workflows, streamer needs, and the end-to-end production pipeline behind AI-powered short-form content generation."
      ]
    },
    {
      home: 2,
      role: "Data Science Intern",
      org: "IDX Exchange",
      dates: "Jun 2026 – Present",
      loc: "Remote",
      homeBullets: [
        "Built ML pipelines on large-scale MLS data to predict California home prices.",
        "Iterated on XGBoost valuation models evaluated with MdAPE, RMSE, MAE, and R²."
      ],
      bullets: [
        "Built end-to-end machine learning pipelines on large-scale MLS sold-property data to predict California home prices, spanning ingestion, cleaning, feature engineering, leakage prevention, and regression modeling.",
        "Iterated on XGBoost valuation models with cross-validation, feature-importance analysis, and evaluation metrics including MdAPE, RMSE, MAE, and R\u00B2.",
        "Translated modeling results into structured documentation for applied real estate analytics, connecting data quality, feature design, and predictive performance."
      ]
    },
    {
      home: 3,
      role: "Undergraduate Course Staff — CS 61A",
      org: "UC Berkeley",
      dates: "Jun 2026 – Aug 2026",
      loc: "Berkeley, CA",
      homeBullets: [
        "Support grading operations, regrades, extension requests, and Gradescope/autograder workflows.",
        "Teach weekly exam prep sections, hold office hours, and assist labs/discussions."
      ],
      bullets: [
        "Support CS 61A grading workflows, including Gradescope/autograder assignments, regrade requests, extension requests, and student support.",
        "Teach two weekly exam prep sections for groups of 5\u20136 students.",
        "Hold office hours and help students with Python, Scheme, SQL, recursion, environments, abstraction, and debugging.",
        "Assist TAs in lab and discussion sections."
      ]
    },
    {
      role: "Incoming Fung Fellow — Health + Innovation Track",
      org: "UC Berkeley",
      dates: "Fall 2026",
      loc: "Berkeley, CA",
      bullets: [
        "Selected for UC Berkeley's Fung Fellowship Health + Innovation track, an interdisciplinary program focused on technology-driven solutions for public health challenges.",
        "Collaborating with students, community partners, and public-health stakeholders to design digital tools grounded in human-centered and equity-centered innovation.",
        "Developing experience at the intersection of product design, public health, user research, and socially responsible technology."
      ]
    },
    {
      role: "Secretary",
      org: "Boundary.0",
      dates: "Apr 2024 – Jun 2025",
      loc: "Cupertino, CA",
      bullets: [
        "Managed internal operations, documentation, and compliance processes to keep a student organization serving international students running smoothly.",
        "Supported student\u2013company engagement by helping coordinate outreach, enrollment, and opportunity-matching initiatives.",
        "Led communication and community support for a 120+ member Discord server, responding to student concerns and strengthening engagement.",
        "Represented Boundary.0 through outreach and marketing events to expand student participation and industry connections."
      ]
    },
    {
      role: "Mentor",
      org: "Mentors at De Anza",
      dates: "Sep 2024 – Apr 2025",
      loc: "Cupertino, CA",
      bullets: [
        "Mentored De Anza students on course planning, professor selection, transfer-credit policies, and academic pathways toward four-year universities.",
        "Shared study strategies, tutoring resources, and exam-preparation approaches to help mentees build stronger academic habits.",
        "Encouraged career exploration through internships, networking, student organizations, and balanced extracurricular involvement.",
        "Supported students holistically as they managed coursework, stress, transfer uncertainty, and personal growth."
      ]
    },
    {
      role: "Intern — Programs Committee",
      org: "De Anza Student Government",
      dates: "Feb 2024 – Feb 2025",
      loc: "Cupertino, CA",
      bullets: [
        "Served on the Programs Committee, helping plan and execute campus-wide events including Club Day, Resource Fair, Spring Carnival, and Homecoming.",
        "Coordinated logistics, vendor communication, event marketing, and student engagement to support strong turnout and smooth execution.",
        "Helped design inclusive campus experiences that strengthened community bonds and made student resources more visible.",
        "Contributed across planning, day-of execution, collaboration, and post-event improvement."
      ]
    },
    {
      role: "Events Coordinator",
      org: "Indian Students Association, De Anza College",
      dates: "Oct 2023 – Feb 2025",
      loc: "Cupertino, CA",
      bullets: [
        "Led planning and execution for major cultural events, including Diwali 2024, overseeing logistics, venue coordination, budgeting, volunteer management, and operations.",
        "Created spaces for international students to connect, celebrate traditions, and feel a sense of belonging away from home.",
        "Contributed personally to hospitality by preparing Indian dishes for events, helping create an authentic and welcoming cultural experience.",
        "Coordinated volunteers, sponsorship outreach, and funding support to deliver large-scale cultural programming for the De Anza community."
      ]
    },
    {
      role: "Kirsch Center Lab Technician Assistant",
      org: "De Anza College",
      dates: "Dec 2023 – Mar 2024",
      loc: "Cupertino, CA",
      bullets: [
        "Supported restoration of the Kirsch Center's sustainability spaces by maintaining native plant species, removing invasive plants, and improving environmental upkeep.",
        "Helped maintain proper waste-management practices and contributed to green initiatives across the center.",
        "Led educational tours for students and visitors, communicating sustainability practices and environmental awareness.",
        "Contributed to the center's role as a hub for hands-on environmental education at De Anza."
      ]
    }
  ],

  /* ---------- Projects ----------
     home: ranking on the homepage Featured Work grid (1,2,3). Omit to keep off homepage.
     metrics: short pills shown at the top of the card.
     homeBullets: <=2 short bullets (<~18 words) for the homepage card.
     bullets: full detail shown on the "All Projects" page.
     `tags` also build the filter buttons automatically.
     Set `link` to a public repo URL, or leave "" to hide the link. */
  projects: [
    {
      home: 1,
      title: "Movie Genre Classification — Multi-Label NLP",
      desc: "Multi-label genre prediction on MovieLens/TMDB films using metadata and text embeddings.",
      metrics: ["42K+ films", "Macro F1 0.48 → 0.66", "Micro F1 0.68"],
      homeBullets: [
        "Combined structured metadata with MiniLM/MPNet/e5-large-v2 embeddings for multi-label prediction.",
        "Benchmarked Logistic Regression, XGBoost, and LightGBM with threshold tuning for class imbalance."
      ],
      bullets: [
        "Built a multi-label genre prediction system on 42K+ MovieLens/TMDB films, combining structured metadata with semantic text representations from titles, taglines, and overviews.",
        "Parsed nested IMDb metadata, engineered log budget/revenue and temporal features, and generated embeddings using MiniLM, MPNet, and e5-large-v2.",
        "Benchmarked Logistic Regression, XGBoost, and LightGBM, using rare-genre cutoffs and threshold tuning to address class imbalance.",
        "Improved Macro F1 from 0.48 to 0.66 and achieved Micro F1 of 0.68 — Logistic Regression outperformed tree models while training significantly faster."
      ],
      tags: ["NLP", "Machine Learning", "Classification", "Python"],
      link: "https://github.com/vdkarthikeya/movie-genre-classification-nlp"
    },
    {
      home: 2,
      title: "Housing Price Prediction & Assessment Bias Analysis",
      desc: "Regression pipeline on Cook County Assessor data with assessment-bias analysis.",
      metrics: ["200K+ records", "Test RMSE 0.562", "4-fold CV"],
      homeBullets: [
        "Built a linear regression pipeline with engineered geographic and interaction features.",
        "Quantified over- and under-estimation across price bands to surface assessment bias."
      ],
      bullets: [
        "Built a linear regression pipeline on 200K+ Cook County Assessor records, engineering log-transformed square footage, polynomial age/geographic terms, latitude\u2013longitude interactions, and one-hot road/garage features.",
        "Filtered non-arm's-length $1 sales to better align the modeling setup with real assessment practice.",
        "Achieved test RMSE of 0.562 using 4-fold cross-validation.",
        "Quantified over- and under-estimation across price bands, connecting model behavior to documented inequities in property tax assessment."
      ],
      tags: ["Regression", "Data Science", "Machine Learning", "Python"],
      link: ""
    },
    {
      home: 3,
      title: "Email Spam / Ham Classifier",
      desc: "Spam/ham email classifier built on engineered text, structure, and metadata features.",
      metrics: ["92.1% accuracy", "50+ features", "10-fold CV"],
      homeBullets: [
        "Engineered 50+ text, structure, and metadata features from raw emails.",
        "Trained an L1-regularized Logistic Regression tuned with GridSearchCV."
      ],
      bullets: [
        "Engineered 50+ features from raw emails — regex counts for links, punctuation and dollar signs, HTML indicators, subject indicators, log-scaled length, and curated spam/ham word features.",
        "Trained an L1-regularized Logistic Regression model tuned with GridSearchCV and validated using 10-fold cross-validation.",
        "Achieved 92.1% test accuracy on a held-out leaderboard set, emphasizing careful feature design, regularization, and model validation."
      ],
      tags: ["Classification", "NLP", "Data Science", "Python"],
      link: ""
    },
    {
      title: "California Housing Regression",
      desc: "Regression models for California housing price prediction comparing linear and kNN approaches.",
      metrics: [],
      bullets: [
        "Developed regression models on the California Housing dataset to predict housing values using demographic, geographic, and economic features.",
        "Compared Linear Regression and kNN regression, analyzing tradeoffs between interpretability, feature scaling, and predictive performance.",
        "Used the project to strengthen foundations in supervised learning, regression evaluation, and end-to-end ML experimentation."
      ],
      tags: ["Regression", "Machine Learning", "Data Science", "Python"],
      link: "https://github.com/vdkarthikeya/california-housing-regression"
    },
    {
      title: "Scheme Interpreter",
      desc: "An interpreter for a subset of Scheme covering evaluation, environments, and recursion.",
      metrics: [],
      bullets: [
        "Implemented core components of a Scheme interpreter, including expression evaluation, environments, special forms, procedures, and recursive evaluation.",
        "Developed a deeper understanding of how programming languages are represented, parsed, evaluated, and extended.",
        "Strengthened foundations in abstraction, recursion, functional programming, and interpreter design."
      ],
      tags: ["Interpreters", "Software Engineering", "Python"],
      link: ""
    },
    {
      title: "NGordnet",
      desc: "A Java tool for exploring word relationships over time using graphs and historical frequency data.",
      metrics: [],
      bullets: [
        "Built a Java word-relationship explorer using data structures, graph traversal, and WordNet-style semantic relationships.",
        "Integrated historical word-frequency data to analyze language trends and relationships across time.",
        "Strengthened understanding of maps, sets, graphs, parsing, modular design, and testing in a larger Java codebase."
      ],
      tags: ["Java", "Data Structures", "Software Engineering"],
      link: ""
    },
    {
      title: "Build Your Own World",
      desc: "A tile-based procedural world generator with deterministic seeds and save/load persistence.",
      metrics: [],
      bullets: [
        "Designed and implemented a procedurally generated 2D world using Java, data structures, random seeds, and modular world-building logic.",
        "Built interactive player movement and exploration while maintaining deterministic generation from seeds.",
        "Implemented persistence features such as saving/loading player state, world state, room information, and random seeds.",
        "Strengthened experience with large-project architecture, object-oriented design, debugging, and iterative development."
      ],
      tags: ["Java", "Data Structures", "Software Engineering"],
      link: ""
    }
  ],

  /* ---------- Technical Toolkit (grouped, honest about depth) ---------- */
  toolkit: [
    {
      group: "Used in projects & internships",
      items: ["Python", "Java", "SQL", "Git/GitHub", "pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "SentenceTransformers", "Jupyter"]
    },
    {
      group: "ML & data foundations",
      items: ["Regression", "Classification", "Feature engineering", "Cross-validation", "Evaluation metrics", "Probability", "Data structures", "Algorithms"]
    },
    {
      group: "Currently learning",
      learning: true,
      items: ["PyTorch", "Deep learning", "Reinforcement learning", "Multimodal AI", "Computer vision", "Vector search", "ML systems"]
    }
  ],

  /* ---------- Current Direction (3 grounded cards) ---------- */
  direction: [
    {
      title: "Applied ML Systems",
      body: "Building and evaluating ML workflows that connect data, models, and product use cases."
    },
    {
      title: "AI in Education · Research Exploration",
      body: "Currently exploring research opportunities around AI systems that support learning and education."
    },
    {
      title: "Long-Term ML Interests",
      body: "Interested in reinforcement learning, multimodal AI, and human-centered ML, while building stronger foundations first."
    }
  ],

  /* ---------- Contact ---------- */
  contact: {
    lead: "Open to Summer 2027 internships in machine learning, AI, and applied ML. The fastest way to reach me is email."
  },

  /* ---------- About page ---------- */
  about: {
    intro: [
      "I'm a Data Science and Applied Mathematics student at UC Berkeley, in the College of Computing, Data Science, and Society, graduating December 2027. Before Berkeley I earned an Associate's Degree in Mathematics and Computer Science at De Anza College.",
      "Most of my work sits where strong fundamentals meet real systems \u2014 machine learning, probability, data engineering, and the modeling decisions that make them hold up in practice. Right now that means applied ML internships, NLP and regression projects with concrete metrics, and teaching CS 61A."
    ],
    researchHeading: "Research direction",
    research: [
      "I'm research-oriented and currently exploring research opportunities in AI for education \u2014 how ML systems can support how people learn. This is an active exploration, not a finished research record.",
      "Reinforcement learning, multimodal AI, and human-centered ML are longer-term interests rather than current research areas. I'd rather build genuinely strong foundations than narrow too early."
    ],
    pathHeading: "The path here",
    path: [
      "The path to Berkeley was not something I had a clear roadmap for. Coming from where I lived, pursuing undergraduate studies in the U.S. meant figuring out unfamiliar systems one step at a time. It was a risk, but one I was willing to take because I wanted the chance to study what I loved and see how far I could go.",
      "I'm deeply grateful to my dad for believing in me, giving me the freedom to make decisions, and supporting me when it mattered most. De Anza became the place where I built my foundation in the U.S., and Berkeley has been everything I hoped for and harder than I expected. It has humbled me, challenged me, and made me stronger \u2014 and the people I've met here continue to inspire me every day."
    ]
  },

  /* ---------- Education (shown on the About page) ---------- */
  education: [
    {
      school: "UC Berkeley",
      date: "Expected Dec 2027",
      degree: "B.A. in Data Science and Applied Mathematics",
      sub: "College of Computing, Data Science, and Society",
      location: "Berkeley, CA",
      gpa: "GPA 3.82 / 4.00",
      coursesLink: { href: "#all-courses", text: "View courses" }
    },
    {
      school: "De Anza College",
      date: "Sep 2023 \u2013 Jun 2025",
      degree: "Associate's Degree in Mathematics and Computer Science",
      sub: "",
      location: "Cupertino, CA",
      gpa: "GPA 3.92 / 4.00"
    }
  ],

  /* ---------- Courses (grouped by term) ---------- */
  courses: [
    {
      term: "Fall 2025",
      rows: [
        { code: "CS 61A",  title: "The Structure and Interpretation of Computer Programs", status: "A-" },
        { code: "Data C8", title: "Foundations of Data Science", status: "A" },
        { code: "Math 98", title: "Supervised Group Study", status: "P", planned: true }
      ]
    },
    {
      term: "Spring 2026",
      rows: [
        { code: "CS 61B",   title: "Data Structures", status: "A-" },
        { code: "CS 194",   title: "Special Topics", status: "P", planned: true },
        { code: "Data C100", title: "Principles & Techniques of Data Science", status: "A-" },
        { code: "Data C140", title: "Probability for Data Science", status: "A" },
        { code: "Data 198",  title: "Directed Group Studies for Advanced Undergraduates", status: "P", planned: true },
        { code: "INDENG 198", title: "Directed Group Studies for Advanced Undergraduates", status: "P", planned: true }
      ]
    },
    {
      term: "Upcoming / In Progress",
      rows: [
        { code: "CYPLAN 101", title: "Introduction to Urban Data Analytics", status: "In progress", planned: true },
        { code: "DATA 197",   title: "Field Studies in Data Science", status: "In progress", planned: true },
        { code: "UGBA 137",   title: "Special Topics in Finance", status: "In progress", planned: true },
        { code: "CS 189",     title: "Introduction to Machine Learning", status: "Planned", planned: true },
        { code: "Data C101",  title: "Data Engineering", status: "Planned", planned: true }
      ]
    }
  ]
};


/* ============================================================
   RENDERING — you usually won't need to edit below this line.
   ============================================================ */

const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

// Inline icons
const icons = {
  github:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5a10.5 10.5 0 00-3.32 20.46c.52.1.71-.23.71-.5v-1.95c-2.9.63-3.52-1.24-3.52-1.24-.48-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.07 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.41-2.07 1.08-2.8-.11-.27-.47-1.33.1-2.78 0 0 .88-.28 2.88 1.07a9.9 9.9 0 015.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.51.1 2.78.67.73 1.07 1.66 1.07 2.8 0 4.01-2.45 4.9-4.78 5.16.38.32.71.95.71 1.92v2.85c0 .28.19.61.72.5A10.5 10.5 0 0012 1.5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z"/></svg>',
  email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  resume:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>',
  work:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h12"/></svg>',
  ext:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  chevron:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
};

/* ---------- Hero ---------- */
function renderHero() {
  const h = siteData.hero;
  $("#heroEyebrow").textContent = h.eyebrow;
  $("#heroName").textContent = h.name;
  $("#heroHeadline").textContent = h.headline;
  $("#heroPositioning").textContent = h.positioning;
  $("#heroResearch").textContent = h.research;
  $("#heroInterests").textContent = h.interests;

  const L = siteData.links;
  const wrap = $("#heroButtons");

  // Text buttons
  const primary = el("a", "btn btn-primary");
  primary.href = "#work";
  primary.innerHTML = icons.work + "<span>View Work</span>";
  wrap.appendChild(primary);

  const resume = el("a", "btn");
  resume.href = L.resume;
  resume.setAttribute("download", "");
  resume.innerHTML = icons.resume + "<span>Resume</span>";
  wrap.appendChild(resume);

  // Icon-only buttons
  const iconLinks = [
    { label: "GitHub",   href: L.github,            icon: icons.github,   ext: true },
    { label: "LinkedIn", href: L.linkedin,          icon: icons.linkedin, ext: true },
    { label: "Email",    href: "mailto:" + L.email, icon: icons.email,    ext: false }
  ];
  iconLinks.forEach((b) => {
    const a = el("a", "icon-link");
    a.href = b.href;
    a.setAttribute("aria-label", b.label);
    a.title = b.label;
    a.innerHTML = b.icon;
    if (b.ext) { a.target = "_blank"; a.rel = "noopener"; }
    wrap.appendChild(a);
  });
}

/* ---------- At-a-glance / proof strip ---------- */
function renderGlance() {
  const wrap = $("#glanceGrid");
  siteData.glance.forEach((item) => {
    const isObj = typeof item === "object";
    const label = isObj ? item.v : item;
    const pill = el("span", "glance-pill" + (isObj && item.accent ? " accent" : ""), label);
    wrap.appendChild(pill);
  });
}

/* ---------- Experience ---------- */
function buildExperienceCard(x, mode) {
  const card = el("article", "exp-card");
  const list = (mode === "home" && x.homeBullets) ? x.homeBullets : x.bullets;
  let html =
    '<div class="exp-top">' +
      '<div><h3 class="exp-role">' + x.role + "</h3>" +
      '<p class="exp-org">' + x.org + ' <span class="exp-loc">· ' + x.loc + "</span></p></div>" +
      '<span class="date-chip">' + x.dates + "</span>" +
    "</div>" +
    '<ul class="bullets">';
  list.forEach((b) => (html += "<li>" + b + "</li>"));
  html += "</ul>";
  card.innerHTML = html;
  return card;
}

function renderExperience() {
  const visible = siteData.experience.filter((x) => x.visible !== false);

  const homeWrap = $("#experienceList");
  visible
    .filter((x) => x.home)
    .sort((a, b) => a.home - b.home)
    .forEach((x) => homeWrap.appendChild(buildExperienceCard(x, "home")));

  const fullWrap = $("#allExperienceList");
  visible.forEach((x) => fullWrap.appendChild(buildExperienceCard(x, "full")));
}

/* ---------- Projects ---------- */
function buildProjectCard(p, mode) {
  const card = el("article", "project-card");
  card.dataset.tags = p.tags.join("|");
  let html = "";
  if (p.metrics && p.metrics.length) {
    html += '<div class="metric-row">';
    p.metrics.forEach((m) => (html += '<span class="metric">' + m + "</span>"));
    html += "</div>";
  }
  html += '<h3 class="project-title">' + p.title + "</h3>";
  html += '<p class="project-desc">' + p.desc + "</p>";

  const list = (mode === "home" && p.homeBullets) ? p.homeBullets : p.bullets;
  html += '<ul class="bullets">';
  list.forEach((b) => (html += "<li>" + b + "</li>"));
  html += "</ul>";

  html += '<div class="project-foot"><div class="tag-row">';
  p.tags.forEach((t) => (html += '<span class="tag">' + t + "</span>"));
  html += "</div>";
  if (p.link) {
    html += '<a class="repo-link" href="' + p.link + '" target="_blank" rel="noopener">Repository ' + icons.ext + "</a>";
  }
  html += "</div>";
  card.innerHTML = html;
  return card;
}

function renderProjects() {
  const homeGrid = $("#featuredGrid");
  siteData.projects
    .filter((p) => p.home)
    .sort((a, b) => a.home - b.home)
    .forEach((p) => homeGrid.appendChild(buildProjectCard(p, "home")));

  const fullGrid = $("#allProjectsGrid");
  siteData.projects.forEach((p) => fullGrid.appendChild(buildProjectCard(p, "full")));

  // Build topic filters from tags
  const tagSet = [];
  siteData.projects.forEach((p) => p.tags.forEach((t) => { if (!tagSet.includes(t)) tagSet.push(t); }));
  tagSet.sort();

  const filters = $("#projectFilters");
  const allBtn = el("button", "filter-btn active", "All");
  allBtn.dataset.filter = "all";
  allBtn.setAttribute("aria-pressed", "true");
  filters.appendChild(allBtn);
  tagSet.forEach((t) => {
    const b = el("button", "filter-btn", t);
    b.dataset.filter = t;
    b.setAttribute("aria-pressed", "false");
    filters.appendChild(b);
  });

  const cards = Array.from(fullGrid.querySelectorAll(".project-card"));
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filters.querySelectorAll(".filter-btn").forEach((b) => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const f = btn.dataset.filter;
    cards.forEach((c) => {
      const match = f === "all" || c.dataset.tags.split("|").includes(f);
      c.classList.toggle("hide", !match);
    });
  });
}

/* ---------- Technical Toolkit ---------- */
function renderToolkit() {
  const wrap = $("#toolkitGrid");
  siteData.toolkit.forEach((g) => {
    const col = el("div", "toolkit-col" + (g.learning ? " learning" : ""));
    let chips = "";
    g.items.forEach((s) => (chips += '<span class="chip">' + s + "</span>"));
    col.innerHTML =
      '<span class="toolkit-label">' + g.group + "</span>" +
      '<div class="chip-row">' + chips + "</div>";
    wrap.appendChild(col);
  });
}

/* ---------- Current Direction ---------- */
function renderDirection() {
  const wrap = $("#directionGrid");
  siteData.direction.forEach((d) => {
    const card = el("article", "direction-card");
    card.innerHTML = '<h3 class="direction-title">' + d.title + "</h3>" +
      '<p class="direction-body">' + d.body + "</p>";
    wrap.appendChild(card);
  });
}

/* ---------- Contact ---------- */
function renderContact() {
  $("#contactLead").textContent = siteData.contact.lead;
  const L = siteData.links;

  const emailEl = $("#contactEmail");
  emailEl.href = "mailto:" + L.email;
  emailEl.textContent = L.email;

  const wrap = $("#contactLinks");
  const iconLinks = [
    { label: "Email " + L.email, href: "mailto:" + L.email, icon: icons.email, ext: false },
    { label: "GitHub",           href: L.github,            icon: icons.github, ext: true },
    { label: "LinkedIn",         href: L.linkedin,          icon: icons.linkedin, ext: true }
  ];
  iconLinks.forEach((b) => {
    const a = el("a", "icon-link");
    a.href = b.href;
    a.setAttribute("aria-label", b.label);
    a.title = b.label;
    a.innerHTML = b.icon;
    if (b.ext) { a.target = "_blank"; a.rel = "noopener"; }
    wrap.appendChild(a);
  });
  const resume = el("a", "btn btn-primary");
  resume.href = L.resume;
  resume.setAttribute("download", "");
  resume.innerHTML = icons.resume + "<span>Resume</span>";
  wrap.appendChild(resume);
}

/* ---------- Footer ---------- */
function renderFooter() {
  $("#footerYear").textContent = new Date().getFullYear();
  const L = siteData.links;

  const email = $("#footerEmail");
  email.href = "mailto:" + L.email;
  email.textContent = L.email;

  const wrap = $("#footerLinks");
  const iconLinks = [
    { label: "GitHub",   href: L.github,   icon: icons.github,   ext: true },
    { label: "LinkedIn", href: L.linkedin, icon: icons.linkedin, ext: true }
  ];
  iconLinks.forEach((b) => {
    const a = el("a", "icon-link sm");
    a.href = b.href;
    a.setAttribute("aria-label", b.label);
    a.title = b.label;
    a.innerHTML = b.icon;
    a.target = "_blank";
    a.rel = "noopener";
    wrap.appendChild(a);
  });
  const resume = el("a", "btn btn-sm");
  resume.href = L.resume;
  resume.setAttribute("download", "");
  resume.innerHTML = "<span>Resume</span>";
  wrap.appendChild(resume);
}

/* ---------- About page ---------- */
function renderAbout() {
  const a = siteData.about;
  const intro = $("#aboutIntro");
  a.intro.forEach((p) => intro.appendChild(el("p", null, p)));

  $("#aboutResearchHeading").textContent = a.researchHeading;
  const research = $("#aboutResearch");
  a.research.forEach((p) => research.appendChild(el("p", null, p)));

  $("#aboutPathHeading").textContent = a.pathHeading;
  const path = $("#aboutPath");
  a.path.forEach((p) => path.appendChild(el("p", null, p)));

  // Education cards
  const eduWrap = $("#aboutEducation");
  siteData.education.forEach((e) => {
    const card = el("div", "edu-card");
    let html = '<div class="edu-top"><h3 class="edu-school">' + e.school + "</h3>";
    if (e.date) html += '<span class="date-chip">' + e.date + "</span>";
    html += "</div>";
    if (e.degree) html += '<p class="edu-degree">' + e.degree + "</p>";
    if (e.sub) html += '<p class="edu-sub">' + e.sub + "</p>";
    if (e.location) html += '<p class="edu-loc">' + e.location + "</p>";
    if (e.gpa) html += '<span class="edu-gpa">' + e.gpa + "</span>";
    if (e.coursesLink) {
      html += '<a class="edu-courses-link" href="' + e.coursesLink.href + '">' +
        e.coursesLink.text + ' <span aria-hidden="true">→</span></a>';
    }
    card.innerHTML = html;
    eduWrap.appendChild(card);
  });
}

/* ---------- Courses accordion ---------- */
function renderCourses() {
  const acc = $("#coursesAccordion");
  const isLetterGraded = (r) => !r.planned && r.status !== "P";
  const terms = siteData.courses
    .map((t) => ({ term: t.term, rows: t.rows.filter(isLetterGraded) }))
    .filter((t) => t.rows.length > 0);

  terms.forEach((term, idx) => {
    const item = el("div", "acc-item" + (idx === 0 ? " open" : ""));
    const trigger = el("button", "acc-trigger");
    trigger.setAttribute("aria-expanded", idx === 0 ? "true" : "false");
    trigger.innerHTML = "<span>" + term.term + "</span>" +
      '<span class="acc-count">' + term.rows.length + " courses</span>" +
      '<span class="acc-chevron">' + icons.chevron + "</span>";

    const panel = el("div", "acc-panel");
    let rows = "";
    term.rows.forEach((r) => {
      rows += "<tr>" +
        '<td class="code">' + r.code + "</td>" +
        "<td>" + r.title + "</td>" +
        '<td><span class="status">' + r.status + "</span></td>" +
        "</tr>";
    });
    panel.innerHTML = '<div class="acc-wrap"><table class="acc-table">' +
      "<thead><tr><th>Course</th><th>Title</th><th>Grade</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table></div>";

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0";
    });

    item.appendChild(trigger);
    item.appendChild(panel);
    acc.appendChild(item);
    if (idx === 0) requestAnimationFrame(() => { panel.style.maxHeight = panel.scrollHeight + "px"; });
  });

  window.addEventListener("resize", () => {
    acc.querySelectorAll(".acc-item.open .acc-panel").forEach((p) => { p.style.maxHeight = p.scrollHeight + "px"; });
  });
}

/* ---------- Interactions: nav, theme, reveal, profile fallback ---------- */
function initInteractions() {
  const root = document.documentElement;
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Mobile menu
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );

  // Header border on scroll
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Profile photo fallback
  const img = $("#profileImg");
  const fallback = $("#photoFallback");
  if (img) {
    const showFallback = () => { img.classList.add("is-hidden"); fallback.setAttribute("aria-hidden", "false"); };
    if (img.complete && img.naturalWidth === 0) showFallback();
    img.addEventListener("error", showFallback);
    img.addEventListener("load", () => {
      if (img.naturalWidth > 0) { img.classList.remove("is-hidden"); fallback.setAttribute("aria-hidden", "true"); }
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in-view"));
  }

  // Active nav link via section observation (hash links to on-page sections only)
  const navAnchors = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
  const sections = navAnchors
    .map((a) => { try { return document.querySelector(a.getAttribute("href")); } catch (e) { return null; } })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !document.querySelector("#view-home").hidden) {
            navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }
}

/* ---------- View router (curated home + sub-pages) ---------- */
function initRouter() {
  const views = {
    home: $("#view-home"),
    projects: $("#view-projects"),
    experience: $("#view-experience"),
    courses: $("#view-courses"),
    about: $("#view-about")
  };
  const routeMap = {
    "all-projects": "projects",
    "all-experience": "experience",
    "all-courses": "courses",
    "about": "about"
  };
  const navLinks = $("#navLinks");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealAll(container) {
    container.querySelectorAll(".reveal").forEach((r) => r.classList.add("in-view"));
  }
  function refreshCourses() {
    $("#coursesAccordion")
      .querySelectorAll(".acc-item.open .acc-panel")
      .forEach((p) => { p.style.maxHeight = p.scrollHeight + "px"; });
  }
  function setActiveNav(hash) {
    navLinks.querySelectorAll("a").forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + hash));
  }

  function route() {
    const hash = (location.hash || "").replace(/^#/, "");
    const view = routeMap[hash] || "home";

    Object.keys(views).forEach((k) => { if (views[k]) views[k].hidden = (k !== view); });

    if (view !== "home") {
      revealAll(views[view]);
      if (view === "courses") requestAnimationFrame(refreshCourses);
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      setActiveNav(routeMap[hash] === "about" ? "about" : "");
    } else if (hash && hash !== "top") {
      const target = document.getElementById(hash);
      if (target) requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" }));
    } else {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    }
  }

  // Brand / name click always returns to the main home view and resets state.
  const brand = $("#brandHome");
  if (brand) {
    brand.addEventListener("click", (e) => {
      e.preventDefault();
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      navLinks.classList.remove("open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
      // reset project filter to "All"
      const allBtn = $('#projectFilters .filter-btn[data-filter="all"]');
      if (allBtn) allBtn.click();
      route();
    });
  }

  window.addEventListener("hashchange", route);
  route();
}

/* ---------- Boot ---------- */
let __booted = false;
document.addEventListener("DOMContentLoaded", () => {
  if (__booted) return;
  __booted = true;
  renderHero();
  renderGlance();
  renderExperience();
  renderProjects();
  renderToolkit();
  renderDirection();
  renderContact();
  renderAbout();
  renderCourses();
  renderFooter();
  initInteractions();
  initRouter();
});
