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

  /* ---------- Personal links (used in hero + contact) ---------- */
  links: {
    email:    "vdkarthikeya@berkeley.edu",
    github:   "https://github.com/vdkarthikeya",
    linkedin: "https://linkedin.com/in/vdkarthikeya",
    resume:   "resume.pdf"   // <-- place your resume file (resume.pdf) in this folder
  },

  /* ---------- Hero ---------- */
  hero: {
    eyebrow:     "Portfolio",
    name:        "Dhana Karthikeya Ventrapragada",
    headline:    "Data Science & Applied Mathematics @ UC Berkeley",
    subheadline: "Exploring machine learning, reinforcement learning, multimodal AI, and data-driven systems through projects, coursework, and applied, research-oriented learning.",
    // Optional supporting line shown below the subheadline. Set to "" to hide it.
    identity:    "I'm building strong foundations across ML, probability, data systems, and AI while staying open to the directions my work, curiosity, and experiences take me."
  },

  /* ---------- About (each string is its own paragraph) ---------- */
  about: [
    "I'm a <strong>Data Science and Applied Mathematics</strong> student at UC Berkeley, drawn to the parts of the field where strong fundamentals meet real systems \u2014 machine learning, probability, data engineering, and the modeling decisions that make them work in practice.",
    "Right now my curiosity points toward <strong>reinforcement learning</strong> and <strong>multimodal AI</strong>, though I'm wary of narrowing too early. I'd rather build genuinely strong foundations and let the direction sharpen as I learn, build useful things, and work alongside people who push me."
  ],

  /* ---------- Education ---------- */
  education: [
    {
      school: "UC Berkeley",
      date: "Expected Dec 2027",
      degree: "B.A. in Data Science and Applied Mathematics",
      sub: "College of Computing, Data Science, and Society",
      location: "Berkeley, CA",
      gpa: "GPA 3.82 / 4.00",
      // Optional: shows a link to the Courses page inside this card.
      coursesLink: { href: "#all-courses", text: "View Courses" }
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

  /* ---------- Experience (most recent first) ---------- */
  experience: [
    {
      home: 1,
      role: "Engineering Intern",
      org: "Guang Labs",
      dates: "May 2026 – August 2026",
      loc: "Remote",
      bullets: [
        "Built and evaluated data science models for an AI-powered gaming platform that detects, clips, and edits high-impact gameplay moments into shareable short-form content.",
        "Partnered directly with engineering leadership to translate model behavior, product needs, and streamer workflows into iterative improvements for highlight-detection features.",
        "Gained startup experience working across applied ML, product experimentation, and creator-focused AI tools in gaming and media."
      ]
    },
    {
      home: 2,
      role: "Data Science Intern",
      org: "IDX Exchange",
      dates: "June 2026 – August 2026",
      loc: "Remote",
      bullets: [
        "Built end-to-end machine learning pipelines on large-scale MLS sold-property data to predict California home prices, spanning ingestion, cleaning, feature engineering, leakage prevention, and regression modeling.",
        "Iterated on XGBoost valuation models with cross-validation, feature-importance analysis, and evaluation metrics including MdAPE, RMSE, MAE, and R\u00B2.",
        "Translated modeling results into structured documentation for applied real estate analytics, connecting data quality, feature design, and predictive performance."
      ]
    },
    {
      // HIDDEN for now. Set visible back to true (or remove this line) to show it again.
      visible: false,
      role: "Undergraduate Course Staff — CS 61A",
      org: "UC Berkeley",
      dates: "Jun 2026 – Aug 2026",
      loc: "Berkeley, CA",
      bullets: [
        "Supported students in CS 61A, Berkeley's foundational computer science course covering Python, Scheme, SQL, recursion, abstraction, interpreters, and functional programming.",
        "Held office hours, graded assignments and exams, and helped students debug both code and conceptual misunderstandings.",
        "Strengthened my ability to explain technical ideas clearly, mentor peers, and communicate computer science fundamentals with patience and precision."
      ]
    },
    {
      home: 3,
      role: "Fung Fellow — Health + Innovation Track",
      org: "UC Berkeley",
      dates: "August 2026 – December 2026",
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
        "Supported student–company engagement by helping coordinate outreach, enrollment, and opportunity-matching initiatives.",
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
     `tags` are also used to build the filter buttons automatically.
     Set `link` to a public repo URL, or leave it as "" to hide the link
     (use this for course work with code-sharing restrictions). */
  projects: [
    {
      title: "Movie Genre Classification — Multi-Label NLP",
      home: 1,
      desc: "A multi-label movie genre prediction system built on MovieLens/TMDB data, combining metadata parsing, text embeddings, and supervised learning.",
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
      title: "California Housing Regression",
      desc: "Regression models for California housing price prediction, comparing linear regression and k-nearest neighbors approaches.",
      bullets: [
        "Developed regression models on the California Housing dataset to predict housing values using demographic, geographic, and economic features.",
        "Compared Linear Regression and kNN regression, analyzing tradeoffs between interpretability, feature scaling, and predictive performance.",
        "Used the project to strengthen foundations in supervised learning, regression evaluation, and end-to-end ML experimentation."
      ],
      tags: ["Regression", "Machine Learning", "Data Science", "Python"],
      link: "https://github.com/vdkarthikeya/california-housing-regression"
    },
    {
      title: "Email Spam / Ham Classifier",
      home: 3,
      desc: "A spam/ham email classifier built from engineered text, structure, and metadata features extracted from raw emails.",
      bullets: [
        "Engineered 50+ features from raw emails — regex counts for links, punctuation and dollar signs, HTML indicators, subject indicators, log-scaled length, and curated spam/ham word features.",
        "Trained an L1-regularized Logistic Regression model tuned with GridSearchCV and validated using 10-fold cross-validation.",
        "Achieved 92.1% test accuracy on a held-out leaderboard set, emphasizing careful feature design, regularization, and model validation."
      ],
      tags: ["Classification", "NLP", "Data Science", "Python"],
      link: ""
    },
    {
      title: "Housing Price Prediction & Assessment Bias Analysis",
      home: 2,
      desc: "A regression pipeline on Cook County Assessor data, analyzing how modeling choices connect to systemic over- and under-estimation in property assessment.",
      bullets: [
        "Built a linear regression pipeline on 200K+ Cook County Assessor records, engineering log-transformed square footage, polynomial age/geographic terms, latitude–longitude interactions, and one-hot road/garage features.",
        "Filtered non-arm's-length $1 sales to better align the modeling setup with real assessment practice.",
        "Achieved test RMSE of 0.562 using 4-fold cross-validation.",
        "Quantified over- and under-estimation across price bands, connecting model behavior to documented inequities in property tax assessment."
      ],
      tags: ["Regression", "Data Science", "Machine Learning", "Python"],
      link: ""
    },
    {
      title: "Scheme Interpreter",
      desc: "An interpreter for a subset of Scheme — strengthening foundations in programming languages, environments, evaluation, recursion, and abstraction.",
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
      desc: "A Java application for exploring relationships between words over time using data structures, graph traversal, and historical word-frequency data.",
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
      home: 4,
      desc: "A tile-based world-generation project emphasizing procedural generation, persistence, interactivity, and large-scale software design.",
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

  /* ---------- Courses (grouped by term) ---------- */
  courses: [
    {
      term: "Fall 2025",
      rows: [
        { code: "CS 61A",  title: "The Structure and Interpretation of Computer Programs", status: "A-", topics: "Python, Scheme, recursion, abstraction, higher-order functions", project: "Scheme Interpreter" },
        { code: "Data C8", title: "Foundations of Data Science", status: "A", topics: "Tables, sampling, inference, regression, hypothesis testing", project: "California Housing Regression" },
        { code: "Math 98", title: "Supervised Group Study", status: "P", topics: "Directed study", project: "—" }
      ]
    },
    {
      term: "Spring 2026",
      rows: [
        { code: "CS 61B",   title: "Data Structures", status: "A-", topics: "Lists, trees, graphs, hashing, sorting, asymptotics, Java", project: "NGordnet · Build Your Own World" },
        { code: "CS 194",   title: "Special Topics", status: "P", topics: "Advanced / special topics", project: "—" },
        { code: "Data C100", title: "Principles & Techniques of Data Science", status: "A-", topics: "Pandas, EDA, regression, classification, feature engineering", project: "Email Spam/Ham · Housing Bias Analysis" },
        { code: "Data C140", title: "Probability for Data Science", status: "A", topics: "Probability, distributions, expectation, Markov chains", project: "—" },
        { code: "Data 198",  title: "Directed Group Studies for Advanced Undergraduates", status: "P", topics: "Directed study", project: "—" },
        { code: "INDENG 198", title: "Directed Group Studies for Advanced Undergraduates", status: "P", topics: "Directed study", project: "—" }
      ]
    },
    {
      term: "Upcoming / In Progress",
      rows: [
        { code: "CYPLAN 101", title: "Introduction to Urban Data Analytics", status: "In progress", planned: true, topics: "Spatial data, urban analytics", project: "—" },
        { code: "DATA 197",   title: "Field Studies in Data Science", status: "In progress", planned: true, topics: "Applied field studies", project: "—" },
        { code: "UGBA 137",   title: "Special Topics in Finance", status: "In progress", planned: true, topics: "Applied finance topics", project: "—" },
        { code: "CS 189",     title: "Introduction to Machine Learning", status: "Planned", planned: true, topics: "Supervised learning, neural networks, optimization", project: "—" },
        { code: "Data C101",  title: "Data Engineering", status: "Planned", planned: true, topics: "Pipelines, SQL, data systems", project: "—" }
      ]
    }
  ],

  /* ---------- Skills ---------- */
  skills: [
    { group: "Languages",        items: ["Python", "Java", "C++", "SQL", "Scheme"] },
    { group: "Developer Tools",  items: ["Git", "GitHub", "VS Code", "IntelliJ", "Jupyter Notebook", "Google Colab", "MATLAB"] },
    { group: "Libraries & ML",   items: ["pandas", "NumPy", "Matplotlib", "seaborn", "scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "LightGBM", "SentenceTransformers"] },
    { group: "Interests & Learning Roadmap", interests: true, items: ["Reinforcement Learning", "Multimodal AI", "NLP", "Computer Vision", "Time Series", "Data Engineering", "Applied Machine Learning", "Human-centered AI", "Public Health Technology"] }
  ],

  /* ---------- Transfer journey ---------- */
  journey: {
    title: "The Path Here",
    quote: "",
    body: [
      "The path to Berkeley was not something I had a clear roadmap for. Coming from where I lived, pursuing undergraduate studies in the U.S. meant figuring out unfamiliar systems one step at a time. It was a risk, but one I was willing to take because I wanted the chance to study what I loved and see how far I could go.",
      "I'm deeply grateful to my dad for believing in me, giving me the freedom to make decisions, and supporting me when it mattered most. De Anza became the place where I built my foundation in the U.S., and Berkeley has been everything I hoped for and harder than I expected. It has humbled me, challenged me, and made me stronger \u2014 and the people I've met here continue to inspire me every day."
    ]
  },

  /* ---------- Hobbies ---------- */
  recentlyWatched: {
    title: "Recently Watched",
    lead: "A small, regularly updated log of what I've been watching between problem sets and projects.",
    entries: [
      {
        title: "Suits",
        type: "Series",
        status: "Finished",
        rating: "",  // add a rating, e.g. "8.5/10" or "\u2605\u2605\u2605\u2605\u2606"
        review: "Sharp, addictive, and carried by character chemistry more than legal realism.",
        date: "Recently",
        poster: "media/suits.jpg",       // add media/suits.jpg, or leave a placeholder shows
        genre: "Legal Drama",
        tags: ["Series", "Finished"]
      },
      {
        title: "Obsession",
        type: "Movie",
        status: "Watched in theaters",
        rating: "",  // add a rating, e.g. "7/10"
        review: "A theater watch that stayed with me more for the experience and mood than just the plot.",
        date: "Recently",
        poster: "media/obsession.jpg",
        genre: "Thriller",
        tags: ["Movie", "Theater Watch"]
      }
    ]
  },

  /* ---------- Contact ---------- */
  contact: {
    lead: "I'm open to Summer 2027 internships in machine learning, AI, data science, and applied ML roles. I'm especially excited by roles where I can learn deeply, build useful systems, and work with thoughtful teams."
  }
};


/* ============================================================
   RENDERING — you usually won't need to edit below this line.
   ============================================================ */

// Small helpers
const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

// Inline icons for buttons/links
const icons = {
  projects: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18M3 12h18M3 17h12"/></svg>',
  resume:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>',
  github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5a10.5 10.5 0 00-3.32 20.46c.52.1.71-.23.71-.5v-1.95c-2.9.63-3.52-1.24-3.52-1.24-.48-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.07 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.41-2.07 1.08-2.8-.11-.27-.47-1.33.1-2.78 0 0 .88-.28 2.88 1.07a9.9 9.9 0 015.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.51.1 2.78.67.73 1.07 1.66 1.07 2.8 0 4.01-2.45 4.9-4.78 5.16.38.32.71.95.71 1.92v2.85c0 .28.19.61.72.5A10.5 10.5 0 0012 1.5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z"/></svg>',
  email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  ext:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  chevron:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
};

function renderHero() {
  const h = siteData.hero;
  $("#heroEyebrow").textContent = h.eyebrow;
  $("#heroName").textContent = h.name;
  $("#heroHeadline").textContent = h.headline;
  $("#heroSubheadline").textContent = h.subheadline;
  if (h.identity) {
    $("#heroIdentity").textContent = h.identity;
  } else {
    $("#heroIdentity").style.display = "none";
  }

  const L = siteData.links;
  const buttons = [
    { label: "View Projects",   href: "#projects", icon: icons.projects, primary: true },
    { label: "Download Resume", href: L.resume,    icon: icons.resume,   attrs: 'download' },
    { label: "GitHub",          href: L.github,    icon: icons.github,   attrs: 'target="_blank" rel="noopener"' },
    { label: "LinkedIn",        href: L.linkedin,  icon: icons.linkedin, attrs: 'target="_blank" rel="noopener"' },
    { label: "Email",           href: "mailto:" + L.email, icon: icons.email }
  ];
  const wrap = $("#heroButtons");
  buttons.forEach((b) => {
    const a = el("a", "btn" + (b.primary ? " btn-primary" : ""));
    a.href = b.href;
    a.innerHTML = b.icon + "<span>" + b.label + "</span>";
    if (b.attrs) {
      b.attrs.split(" ").forEach((pair) => {
        const [k, v] = pair.split("=");
        a.setAttribute(k, v ? v.replace(/"/g, "") : "");
      });
    }
    wrap.appendChild(a);
  });
}

function renderAbout() {
  const wrap = $("#aboutBody");
  siteData.about.forEach((p) => wrap.appendChild(el("p", null, p)));
}

function renderEducation() {
  const wrap = $("#educationList");
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
    wrap.appendChild(card);
  });
}

function buildExperienceCard(x) {
  const card = el("div", "exp-card");
  let html = '<div class="exp-top"><h3 class="exp-role">' + x.role + "</h3>" +
    '<span class="date-chip">' + x.dates + "</span></div>" +
    '<p class="exp-org">' + x.org + ' <span class="exp-loc">· ' + x.loc + "</span></p>" +
    '<ul class="exp-bullets">';
  x.bullets.forEach((b) => (html += "<li>" + b + "</li>"));
  html += "</ul>";
  card.innerHTML = html;
  return card;
}

function renderExperience() {
  const visible = siteData.experience.filter((x) => x.visible !== false);

  // Homepage: only the ranked "home" experiences, in rank order
  const homeWrap = $("#experienceList");
  visible
    .filter((x) => x.home)
    .sort((a, b) => a.home - b.home)
    .forEach((x) => homeWrap.appendChild(buildExperienceCard(x)));

  // Full experience page: every visible experience, in listed order
  const fullWrap = $("#allExperienceList");
  visible.forEach((x) => fullWrap.appendChild(buildExperienceCard(x)));
}

function buildProjectCard(p) {
  const card = el("article", "project-card");
  card.dataset.tags = p.tags.join("|");
  let html = '<h3 class="project-title">' + p.title + "</h3>" +
    '<p class="project-desc">' + p.desc + "</p>";
  if (p.link) {
    html += '<a class="project-link" href="' + p.link + '" target="_blank" rel="noopener">View Repository ' + icons.ext + "</a>";
  }
  html += '<ul class="project-bullets">';
  p.bullets.forEach((b) => (html += "<li>" + b + "</li>"));
  html += "</ul>";
  html += '<div class="project-tags">';
  p.tags.forEach((t) => (html += '<span class="tag">' + t + "</span>"));
  html += "</div>";
  card.innerHTML = html;
  return card;
}

function renderProjects() {
  // Homepage: only the ranked "home" projects, in rank order
  const homeGrid = $("#projectsGrid");
  siteData.projects
    .filter((p) => p.home)
    .sort((a, b) => a.home - b.home)
    .forEach((p) => homeGrid.appendChild(buildProjectCard(p)));

  // Full projects page: every project + topic filters
  const fullGrid = $("#allProjectsGrid");
  siteData.projects.forEach((p) => fullGrid.appendChild(buildProjectCard(p)));

  const tagSet = [];
  siteData.projects.forEach((p) => p.tags.forEach((t) => { if (!tagSet.includes(t)) tagSet.push(t); }));
  tagSet.sort();

  const filters = $("#projectFilters");
  const allBtn = el("button", "filter-btn active", "All");
  allBtn.dataset.filter = "all";
  filters.appendChild(allBtn);
  tagSet.forEach((t) => {
    const b = el("button", "filter-btn", t);
    b.dataset.filter = t;
    filters.appendChild(b);
  });

  const cards = Array.from(fullGrid.querySelectorAll(".project-card"));
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    cards.forEach((c) => {
      const match = f === "all" || c.dataset.tags.split("|").includes(f);
      c.classList.toggle("hide", !match);
    });
  });
}

function renderCourses() {
  const acc = $("#coursesAccordion");

  // Only show letter-graded courses — exclude pass/no-pass ("P") and
  // planned / in-progress entries. Terms left empty after filtering are skipped.
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
    // open the first panel after layout
    if (idx === 0) requestAnimationFrame(() => { panel.style.maxHeight = panel.scrollHeight + "px"; });
  });

  // Keep open panels sized correctly on resize
  window.addEventListener("resize", () => {
    acc.querySelectorAll(".acc-item.open .acc-panel").forEach((p) => { p.style.maxHeight = p.scrollHeight + "px"; });
  });
}

function renderSkills() {
  const wrap = $("#skillsGrid");
  siteData.skills.forEach((g) => {
    const row = el("div", "toolkit-row" + (g.interests ? " interests" : ""));
    let chips = "";
    g.items.forEach((s) => (chips += '<span class="toolkit-chip">' + s + "</span>"));
    row.innerHTML =
      '<span class="toolkit-label">' + g.group + "</span>" +
      '<div class="toolkit-chips">' + chips + "</div>";
    wrap.appendChild(row);
  });
}

function renderJourney() {
  $("#journeyTitle").textContent = siteData.journey.title;
  const q = $("#journeyQuote");
  if (siteData.journey.quote) {
    q.textContent = "\u201C" + siteData.journey.quote + "\u201D";
  } else if (q) {
    q.remove();
  }
  const body = $("#journeyBody");
  siteData.journey.body.forEach((p) => body.appendChild(el("p", null, p)));
}

function renderRecentlyWatched() {
  const data = siteData.recentlyWatched;
  $("#hobbiesTitle").textContent = data.title;
  $("#watchedLead").textContent = data.lead;

  const grid = $("#watchedGrid");
  data.entries.forEach((m) => {
    const card = el("article", "watched-card");
    const initial = (m.title || "?").charAt(0).toUpperCase();
    const ratingHtml = m.rating
      ? '<span class="watched-rating">' + m.rating + "</span>"
      : '<span class="watched-rating empty">Unrated</span>';
    const metaParts = [m.type, m.status, m.genre].filter(Boolean).join(" · ");
    let tagsHtml = "";
    (m.tags || []).forEach((t) => (tagsHtml += '<span class="watched-tag">' + t + "</span>"));

    card.innerHTML =
      '<div class="watched-poster">' +
        // Poster: drop your image at the path set in the data (e.g. media/suits.jpg).
        // If it is missing, the title initial shows as a clean placeholder.
        (m.poster ? '<img src="' + m.poster + '" alt="' + m.title + ' poster" loading="lazy" />' : "") +
        '<span class="watched-poster-fallback" aria-hidden="true">' + initial + "</span>" +
      "</div>" +
      '<div class="watched-body">' +
        '<div class="watched-head">' +
          '<h3 class="watched-title">' + m.title + "</h3>" +
          ratingHtml +
        "</div>" +
        '<p class="watched-meta">' + metaParts + "</p>" +
        '<p class="watched-review">\u201C' + m.review + '\u201D</p>' +
        '<div class="watched-tags">' + tagsHtml +
          '<span class="watched-date">' + (m.date || "") + "</span>" +
        "</div>" +
      "</div>";

    // Poster fallback wiring
    const img = card.querySelector(".watched-poster img");
    const fb = card.querySelector(".watched-poster-fallback");
    if (img) {
      const showFb = () => { img.classList.add("is-hidden"); };
      if (img.complete && img.naturalWidth === 0) showFb();
      img.addEventListener("error", showFb);
      img.addEventListener("load", () => { if (img.naturalWidth > 0) img.classList.remove("is-hidden"); });
    }

    grid.appendChild(card);
  });
}

function renderContact() {
  $("#contactLead").textContent = siteData.contact.lead;
  const L = siteData.links;
  const wrap = $("#contactLinks");
  const items = [
    { label: "Email",    href: "mailto:" + L.email, icon: icons.email,   primary: true },
    { label: "LinkedIn", href: L.linkedin, icon: icons.linkedin, attrs: 'target="_blank" rel="noopener"' },
    { label: "GitHub",   href: L.github,   icon: icons.github,   attrs: 'target="_blank" rel="noopener"' },
    { label: "Download Resume", href: L.resume, icon: icons.resume, attrs: "download" }
  ];
  items.forEach((b) => {
    const a = el("a", "btn" + (b.primary ? " btn-primary" : ""));
    a.href = b.href;
    a.innerHTML = b.icon + "<span>" + b.label + "</span>";
    if (b.attrs) {
      b.attrs.split(" ").forEach((pair) => {
        const [k, v] = pair.split("=");
        a.setAttribute(k, v ? v.replace(/"/g, "") : "");
      });
    }
    wrap.appendChild(a);
  });
}

/* ---------- Interactions: nav, theme, reveal, profile fallback ---------- */
function initInteractions() {
  // Footer year
  $("#footerYear").textContent = new Date().getFullYear();

  // Theme toggle
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

  // Header shadow on scroll
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Profile photo fallback: if profile.jpg is missing, show the "DV" monogram
  const img = $("#profileImg");
  const fallback = $("#photoFallback");
  const showFallback = () => { img.classList.add("is-hidden"); fallback.setAttribute("aria-hidden", "false"); };
  if (img.complete && img.naturalWidth === 0) showFallback();
  img.addEventListener("error", showFallback);
  img.addEventListener("load", () => {
    if (img.naturalWidth > 0) { img.classList.remove("is-hidden"); fallback.setAttribute("aria-hidden", "true"); }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in-view"));
  }

  // Active nav link via section observation
  const navAnchors = Array.from(navLinks.querySelectorAll("a"));
  const sections = navAnchors
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }
}

/* ---------- View router (curated home + full pages) ---------- */
function initRouter() {
  const views = {
    home: $("#view-home"),
    projects: $("#view-projects"),
    experience: $("#view-experience"),
    courses: $("#view-courses")
  };
  const routeMap = {
    "all-projects": "projects",
    "all-experience": "experience",
    "all-courses": "courses"
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

  function route() {
    const hash = (location.hash || "").replace(/^#/, "");
    const view = routeMap[hash] || "home";

    Object.keys(views).forEach((k) => { if (views[k]) views[k].hidden = (k !== view); });

    if (view !== "home") {
      revealAll(views[view]);                       // sub-pages reveal instantly
      if (view === "courses") requestAnimationFrame(refreshCourses);
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    } else if (hash && hash !== "top") {
      // home + jump to a specific section
      const target = document.getElementById(hash);
      if (target) requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" }));
    } else {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    }
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
  renderAbout();
  renderEducation();
  renderExperience();
  renderProjects();
  renderCourses();
  renderSkills();
  renderJourney();
  renderRecentlyWatched();
  renderContact();
  initInteractions();
  initRouter();
});
