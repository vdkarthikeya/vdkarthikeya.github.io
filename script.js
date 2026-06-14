/* ============================================================
   Dhana Karthikeya Ventrapragada — Portfolio
   Content-first static site. Edit siteData; no build step.
   ============================================================ */

const siteData = {
  links: {
    email: "vdkarthikeya@berkeley.edu",
    github: "https://github.com/vdkarthikeya",
    linkedin: "https://linkedin.com/in/vdkarthikeya",
    resume: "resume.pdf"
  },

  hero: {
    eyebrow: "UC Berkeley · ML Engineering",
    name: "Dhana Karthikeya Ventrapragada",
    headline: "UC Berkeley student building applied ML systems across video, valuation, and NLP.",
    summary: "Seeking Summer 2027 Machine Learning Engineering internships. Currently working as an Engineering Intern at Guang Labs, a Data Science Intern at IDX Exchange, and Course Staff for CS 61A.",
    research: "Research-oriented and actively exploring AI/ML research opportunities, especially AI in education. Longer-term interests include reinforcement learning, multimodal AI, and human-centered ML systems.",
    panel: "Building stronger ML foundations through internships, Berkeley CS/data coursework, and project-based learning."
  },

  proof: [
    {
      label: "Target",
      value: "Summer 2027 ML Engineering Intern",
      detail: "Focused on applied ML roles at strong engineering teams.",
      primary: true
    },
    {
      label: "Current work",
      value: "Guang Labs · IDX Exchange · CS 61A",
      detail: "AI video workflows, valuation models, course staff work."
    },
    {
      label: "Foundation",
      value: "UC Berkeley · Data Science + Applied Math",
      detail: "GPA 3.82 / 4.00 · expected Dec 2027."
    },
    {
      label: "Research direction",
      value: "AI in education",
      detail: "Seeking opportunities to study ML systems that support learning."
    }
  ],

  projects: [
    {
      home: 1,
      title: "Movie Genre Classification — Multi-Label NLP",
      desc: "Multi-label genre prediction on MovieLens/TMDB films using metadata, text features, and sentence embeddings.",
      metrics: ["42K+ films", "Macro F1 0.48 → 0.66", "Micro F1 0.68"],
      homeBullets: [
        "Built an NLP pipeline combining metadata features with semantic text embeddings.",
        "Benchmarked Logistic Regression, XGBoost, and LightGBM under class imbalance.",
        "Used threshold tuning and rare-label handling to improve multi-label performance."
      ],
      fullBullets: [
        "Built a multi-label genre prediction system on 42K+ MovieLens/TMDB films using structured metadata, titles, taglines, and overviews.",
        "Parsed nested IMDb metadata, engineered temporal and financial features, and generated sentence embeddings with MiniLM, MPNet, and e5-large-v2.",
        "Benchmarked Logistic Regression, XGBoost, and LightGBM while tuning thresholds and rare-genre cutoffs for class imbalance.",
        "Improved Macro F1 from 0.48 to 0.66 and reached Micro F1 of 0.68; Logistic Regression outperformed tree models while training faster."
      ],
      tags: ["NLP", "Embeddings", "Classification", "Python"],
      link: "https://github.com/vdkarthikeya/movie-genre-classification-nlp"
    },
    {
      home: 2,
      title: "Housing Price Prediction & Assessment Bias Analysis",
      desc: "Regression pipeline on Cook County property records, connecting model behavior to assessment-bias questions.",
      metrics: ["200K+ records", "Test RMSE 0.562", "4-fold CV"],
      homeBullets: [
        "Built a regression pipeline with log transforms, geographic features, and categorical encodings.",
        "Filtered non-arm’s-length sales to better match real assessment conditions.",
        "Analyzed over- and under-estimation patterns across property price bands."
      ],
      fullBullets: [
        "Built a linear regression pipeline on 200K+ Cook County Assessor records with log-transformed square footage, polynomial age/geographic terms, and location interactions.",
        "Engineered road, garage, and property features while filtering non-arm’s-length $1 sales to better match assessment practice.",
        "Achieved test RMSE of 0.562 using 4-fold cross-validation and systematic feature iteration.",
        "Quantified over- and under-estimation across price bands to connect model behavior with documented property-assessment inequities."
      ],
      tags: ["Regression", "Data Science", "Fairness", "Python"],
      link: ""
    },
    {
      home: 3,
      title: "Email Spam / Ham Classifier",
      desc: "Spam classifier built from engineered text, structure, and metadata features extracted from raw emails.",
      metrics: ["92.1% accuracy", "50+ features", "10-fold CV"],
      homeBullets: [
        "Engineered text, HTML, punctuation, length, and keyword features from raw emails.",
        "Trained an L1-regularized logistic regression model with validation tuning.",
        "Inspected model weights and errors to understand which features drove predictions."
      ],
      fullBullets: [
        "Engineered 50+ features from raw emails, including regex counts for links, punctuation, dollar signs, HTML indicators, subject signals, log-scaled length, and spam/ham word indicators.",
        "Trained an L1-regularized Logistic Regression model tuned with GridSearchCV and evaluated with 10-fold cross-validation.",
        "Achieved 92.1% test accuracy on a held-out leaderboard set through careful feature design and validation.",
        "Used model weights and error cases to identify which features were actually driving spam predictions."
      ],
      tags: ["Classification", "NLP", "Feature Engineering", "Python"],
      link: ""
    },
    {
      title: "California Housing Regression",
      desc: "Regression models for California housing price prediction using demographic, geographic, and economic features.",
      metrics: ["Regression", "kNN vs linear"],
      fullBullets: [
        "Developed regression models on the California Housing dataset to predict housing values from demographic, geographic, and economic features.",
        "Compared Linear Regression and kNN regression, analyzing tradeoffs between interpretability, feature scaling, and predictive performance.",
        "Used the project to strengthen foundations in supervised learning, regression evaluation, and end-to-end ML experimentation."
      ],
      tags: ["Regression", "Machine Learning", "Data Science", "Python"],
      link: "https://github.com/vdkarthikeya/california-housing-regression"
    },
    {
      title: "Scheme Interpreter",
      desc: "Interpreter for a subset of Scheme, focused on environments, evaluation, recursion, and abstraction.",
      metrics: ["CS 61A", "Interpreters"],
      fullBullets: [
        "Implemented core components of a Scheme interpreter, including expression evaluation, environments, special forms, procedures, and recursive evaluation.",
        "Developed a deeper understanding of how programming languages are represented, parsed, evaluated, and extended.",
        "Strengthened foundations in abstraction, recursion, functional programming, and interpreter design."
      ],
      tags: ["Interpreters", "Software Engineering", "Python"],
      link: ""
    },
    {
      title: "NGordnet",
      desc: "Java word-relationship explorer using data structures, graph traversal, and historical word-frequency data.",
      metrics: ["Java", "Graphs"],
      fullBullets: [
        "Built a Java word-relationship explorer using maps, sets, graph traversal, and WordNet-style semantic relationships.",
        "Integrated historical word-frequency data to analyze language trends and relationships across time.",
        "Strengthened understanding of parsing, modular design, testing, and graph-backed data structures in a larger Java codebase."
      ],
      tags: ["Java", "Data Structures", "Software Engineering"],
      link: ""
    },
    {
      title: "Build Your Own World",
      desc: "Tile-based world-generation project emphasizing procedural generation, persistence, and software design.",
      metrics: ["Java", "Persistence"],
      fullBullets: [
        "Designed and implemented a procedurally generated 2D world using Java, data structures, random seeds, and modular world-building logic.",
        "Built interactive player movement and deterministic world generation from user-provided seeds.",
        "Implemented saving/loading for player state, room information, world state, and random seeds while managing large-project architecture."
      ],
      tags: ["Java", "Data Structures", "Software Engineering"],
      link: ""
    }
  ],

  experience: [
    {
      home: 1,
      role: "Engineering Intern",
      org: "Guang Labs",
      dates: "May 2026 – Present",
      loc: "Remote",
      homeBullets: [
        "Build AI-powered video workflows for gameplay upload, processing, and highlight generation.",
        "Work across backend logic, worker flows, metadata storage, and model-driven retrieval pieces.",
        "Turn messy product requirements into usable ML/system components for creators."
      ],
      fullBullets: [
        "Build backend AI infrastructure for Guang Labs’ automated gaming-highlight detection platform, supporting video ingestion, media classification, and highlight-generation workflows.",
        "Develop a Gemini-based media classification workflow with Pydantic schemas, configurable parameters, prompt files, and prompt-loading utilities.",
        "Work across frontend-to-backend upload flows, worker processes, metadata storage, and model-driven retrieval pieces.",
        "Collaborate with engineering and product teammates to translate creator workflows into practical AI-powered short-form content tooling."
      ]
    },
    {
      home: 2,
      role: "Data Science Intern",
      org: "IDX Exchange",
      dates: "Jun 2026 – Present",
      loc: "Remote",
      homeBullets: [
        "Build valuation-model pipelines on MLS sold-property datasets using tree-based ML methods.",
        "Clean, structure, and evaluate housing data for real-world price prediction tasks.",
        "Analyze model behavior and errors to improve reliability of property valuation outputs."
      ],
      fullBullets: [
        "Build end-to-end machine learning pipelines on large-scale MLS sold-property data for California home-price prediction.",
        "Handle ingestion, cleaning, feature engineering, leakage prevention, and regression modeling for applied real-estate analytics.",
        "Iterate on XGBoost valuation models with cross-validation, feature-importance analysis, and metrics including MdAPE, RMSE, MAE, and R².",
        "Translate modeling results into documentation that connects data quality, feature design, and predictive performance."
      ]
    },
    {
      home: 3,
      role: "Undergraduate Course Staff — CS 61A",
      org: "UC Berkeley EECS",
      dates: "Jun 2026 – Aug 2026",
      loc: "Berkeley, CA",
      homeBullets: [
        "Support grading workflows across Gradescope, autograders, regrades, and extensions.",
        "Teach weekly exam-prep sections and hold office hours for Python, Scheme, SQL, and recursion.",
        "Help students debug code by connecting implementation errors to core CS concepts."
      ],
      fullBullets: [
        "Support CS 61A grading workflows, including Gradescope/autograder assignments, regrade requests, extension requests, and student support.",
        "Teach two weekly exam-prep sections for groups of 5–6 students.",
        "Hold office hours and help students with Python, Scheme, SQL, recursion, environments, abstraction, and debugging.",
        "Assist TAs in lab and discussion sections by supporting students through conceptual and implementation issues."
      ]
    },
    {
      role: "Incoming Fung Fellow — Health + Innovation Track",
      org: "UC Berkeley",
      dates: "Fall 2026",
      loc: "Berkeley, CA",
      fullBullets: [
        "Selected for UC Berkeley’s Fung Fellowship Health + Innovation track, an interdisciplinary program focused on technology-driven solutions for public health challenges.",
        "Preparing to collaborate with students, community partners, and public-health stakeholders on digital tools grounded in human-centered design.",
        "Building experience at the intersection of product thinking, public health, user research, and socially responsible technology."
      ]
    },
    {
      role: "Secretary",
      org: "Boundary.0",
      dates: "Apr 2024 – Jun 2025",
      loc: "Cupertino, CA",
      fullBullets: [
        "Managed internal operations, documentation, and compliance processes for a student organization serving international students.",
        "Supported student–company engagement by coordinating outreach, enrollment, and opportunity-matching initiatives.",
        "Led communication and community support for a 120+ member Discord server, responding to student concerns and strengthening engagement."
      ]
    },
    {
      role: "Mentor",
      org: "Mentors at De Anza",
      dates: "Sep 2024 – Apr 2025",
      loc: "Cupertino, CA",
      fullBullets: [
        "Mentored De Anza students on course planning, professor selection, transfer-credit policies, and academic pathways toward four-year universities.",
        "Shared study strategies, tutoring resources, and exam-preparation approaches to help mentees build stronger academic habits.",
        "Supported students as they navigated coursework, stress, transfer uncertainty, and personal growth."
      ]
    },
    {
      role: "Intern — Programs Committee",
      org: "De Anza Student Government",
      dates: "Feb 2024 – Feb 2025",
      loc: "Cupertino, CA",
      fullBullets: [
        "Served on the Programs Committee, helping plan and execute campus-wide events including Club Day, Resource Fair, Spring Carnival, and Homecoming.",
        "Coordinated logistics, vendor communication, event marketing, and student engagement to support turnout and smooth execution.",
        "Helped design inclusive campus experiences that made student resources more visible."
      ]
    },
    {
      role: "Events Coordinator",
      org: "Indian Students Association, De Anza College",
      dates: "Oct 2023 – Feb 2025",
      loc: "Cupertino, CA",
      fullBullets: [
        "Led planning and execution for major cultural events, including Diwali 2024, overseeing logistics, venue coordination, budgeting, volunteers, and operations.",
        "Created spaces for international students to connect, celebrate traditions, and feel a stronger sense of belonging.",
        "Coordinated volunteers, sponsorship outreach, and funding support for large-scale cultural programming."
      ]
    }
  ],

  skills: [
    {
      label: "Used in projects / internships",
      items: ["Python", "Java", "SQL", "Git/GitHub", "pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "SentenceTransformers", "Pydantic", "Gemini API", "Jupyter"]
    },
    {
      label: "ML / data foundations",
      items: ["Regression", "Classification", "Feature engineering", "Cross-validation", "Evaluation metrics", "Probability", "Data structures", "Algorithms", "OOP"]
    },
    {
      label: "Currently learning",
      learning: true,
      items: ["PyTorch", "Deep learning", "Vector search", "ML systems", "Computer vision", "Reinforcement learning", "Multimodal AI"]
    }
  ],

  direction: "I’m looking for research environments where I can study how AI systems support learning, feedback, tutoring, or educational workflows. For now, I’m keeping the homepage honest: strong applied-ML work, growing systems experience, and a research direction that will sharpen as I build real evidence.",

  about: {
    title: "A little more context.",
    intro: [
      "I’m a <strong>Data Science and Applied Mathematics</strong> student at UC Berkeley. My work right now sits between applied machine learning, data systems, and the modeling decisions that make ML useful outside a notebook.",
      "I’m aiming for Summer 2027 Machine Learning Engineering internships while building a longer-term path toward ML research. I care about strong fundamentals: probability, algorithms, data structures, statistical modeling, and the engineering habits needed to make systems reliable."
    ],
    researchTitle: "Research direction",
    research: [
      "The research direction I’m currently most interested in is <strong>AI in education</strong>: systems that support learning, feedback, tutoring, accessibility, and better educational workflows.",
      "I’m also interested in reinforcement learning and multimodal AI, but I don’t want to overclaim a narrow research identity before I have stronger project or research evidence there. For now, I’m building foundations and looking for serious research opportunities where I can contribute and learn."
    ],
    pathTitle: "Path to Berkeley",
    path: [
      "I transferred from De Anza College to UC Berkeley after building my academic foundation through mathematics, computer science, and data science coursework. That path made me comfortable learning from scratch, asking better questions, and staying disciplined when the environment gets harder.",
      "The personal story matters to me, but the professional version is simple: I’m trying to become the kind of ML engineer and researcher who can reason carefully, build useful systems, and communicate clearly with the people affected by those systems."
    ]
  },

  education: [
    {
      school: "UC Berkeley",
      date: "Expected Dec 2027",
      degree: "B.A. Data Science + Applied Mathematics",
      detail: "GPA 3.82 / 4.00 · College of Computing, Data Science, and Society"
    },
    {
      school: "De Anza College",
      date: "Sep 2023 – Jun 2025",
      degree: "A.A. Mathematics and Computer Science",
      detail: "GPA 3.92 / 4.00 · Cupertino, CA"
    }
  ],

  courses: [
    {
      term: "Fall 2025",
      rows: [
        { code: "CS 61A", title: "Structure and Interpretation of Computer Programs", status: "A-", topics: "Python, Scheme, recursion, abstraction, higher-order functions" },
        { code: "Data C8", title: "Foundations of Data Science", status: "A", topics: "Tables, sampling, inference, regression, hypothesis testing" },
        { code: "Math 98", title: "Supervised Group Study", status: "P", topics: "Directed study" }
      ]
    },
    {
      term: "Spring 2026",
      rows: [
        { code: "CS 61B", title: "Data Structures", status: "A-", topics: "Lists, trees, graphs, hashing, sorting, asymptotics, Java" },
        { code: "Data C100", title: "Principles & Techniques of Data Science", status: "A-", topics: "pandas, EDA, regression, classification, feature engineering" },
        { code: "Data C140", title: "Probability for Data Science", status: "A", topics: "Probability, distributions, expectation, Markov chains" },
        { code: "CS 194", title: "Special Topics", status: "P", topics: "Advanced / special topics" },
        { code: "Data 198", title: "Directed Group Studies", status: "P", topics: "Directed study" },
        { code: "INDENG 198", title: "Directed Group Studies", status: "P", topics: "Directed study" }
      ]
    },
    {
      term: "Upcoming / In Progress",
      rows: [
        { code: "CYPLAN 101", title: "Introduction to Urban Data Analytics", status: "In progress", topics: "Spatial data, urban analytics" },
        { code: "DATA 197", title: "Field Studies in Data Science", status: "In progress", topics: "Applied field studies" },
        { code: "UGBA 137", title: "Special Topics in Finance", status: "In progress", topics: "Applied finance topics" },
        { code: "CS 189", title: "Introduction to Machine Learning", status: "Planned", topics: "Supervised learning, neural networks, optimization" },
        { code: "Data C101", title: "Data Engineering", status: "Planned", topics: "Pipelines, SQL, data systems" }
      ]
    }
  ],

  contact: {
    lead: "Open to Summer 2027 ML engineering internships and AI/ML research opportunities. Best way to reach me is email."
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const create = (tag, className, html) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

const icons = {
  work: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h12M4 17h8"/></svg>',
  resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.75a10.25 10.25 0 0 0-3.24 19.98c.52.1.71-.22.71-.5v-1.93c-2.9.63-3.51-1.23-3.51-1.23-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.92 1.58 2.42 1.12 3.02.86.09-.67.36-1.12.66-1.38-2.31-.26-4.74-1.16-4.74-5.14 0-1.13.4-2.06 1.07-2.78-.11-.26-.46-1.31.1-2.74 0 0 .87-.28 2.85 1.06a9.8 9.8 0 0 1 5.18 0c1.98-1.34 2.85-1.06 2.85-1.06.56 1.43.21 2.48.1 2.74.67.72 1.07 1.65 1.07 2.78 0 3.99-2.43 4.87-4.75 5.13.37.32.7.94.7 1.9v2.82c0 .28.19.6.72.5A10.25 10.25 0 0 0 12 1.75Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3.1 9.4h3.76V21H3.1V9.4Zm6.17 0h3.6v1.58h.05c.5-.95 1.72-1.96 3.55-1.96 3.8 0 4.5 2.5 4.5 5.75V21h-3.76v-5.52c0-1.32-.02-3.01-1.84-3.01-1.84 0-2.12 1.43-2.12 2.91V21H9.27V9.4Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
};

function iconLink(label, href, icon, attrs = {}) {
  const a = create('a', 'icon-link');
  a.href = href;
  a.innerHTML = icon + `<span>${label}</span>`;
  a.setAttribute('aria-label', label);
  Object.entries(attrs).forEach(([key, value]) => a.setAttribute(key, value));
  return a;
}

function renderHero() {
  const h = siteData.hero;
  $('#heroEyebrow').textContent = h.eyebrow;
  $('#heroName').textContent = h.name;
  $('#heroHeadline').textContent = h.headline;
  $('#heroSummary').textContent = h.summary;
  $('#heroResearch').textContent = h.research;
  $('#heroPanelText').textContent = h.panel;

  const actions = $('#heroActions');
  const work = create('a', 'btn btn-primary', `${icons.work}<span>View work</span>`);
  work.href = '#work';
  const resume = create('a', 'btn', `${icons.resume}<span>Resume</span>`);
  resume.href = siteData.links.resume;
  resume.setAttribute('download', '');
  actions.append(work, resume);
  actions.append(
    iconLink('GitHub', siteData.links.github, icons.github, { target: '_blank', rel: 'noopener' }),
    iconLink('LinkedIn', siteData.links.linkedin, icons.linkedin, { target: '_blank', rel: 'noopener' }),
    iconLink('Email', `mailto:${siteData.links.email}`, icons.email)
  );
}

function renderProof() {
  const grid = $('#proofGrid');
  siteData.proof.forEach((item) => {
    const card = create('article', `proof-card${item.primary ? ' primary' : ''}`);
    card.innerHTML = `
      <span class="proof-label">${item.label}</span>
      <span class="proof-value">${item.value}</span>
      <span class="proof-detail">${item.detail}</span>
    `;
    grid.appendChild(card);
  });
}

function getProjectBullets(project, mode) {
  if (mode === 'home') return project.homeBullets || project.fullBullets || [];
  return project.fullBullets || project.homeBullets || [];
}

function buildProjectCard(project, mode = 'home', index = 1) {
  const card = create('article', 'project-card reveal');
  card.dataset.tags = project.tags.join('|');
  const bullets = getProjectBullets(project, mode);
  const metrics = project.metrics || [];
  card.innerHTML = `
    <span class="project-index">${String(index).padStart(2, '0')}</span>
    <div class="metric-row">${metrics.map((m) => `<span class="metric">${m}</span>`).join('')}</div>
    <h3>${project.title}</h3>
    <p class="project-desc">${project.desc}</p>
    <ul class="bullets">${bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
    <div class="project-foot">
      <div class="tag-row">${project.tags.slice(0, 3).map((t) => `<span class="tag">${t}</span>`).join('')}</div>
      ${project.link ? `<a class="repo-link" href="${project.link}" target="_blank" rel="noopener" aria-label="Open repository for ${project.title}">${icons.external}<span>Repository</span></a>` : ''}
    </div>
  `;
  return card;
}

function renderProjects() {
  const featured = $('#featuredProjects');
  siteData.projects
    .filter((p) => p.home)
    .sort((a, b) => a.home - b.home)
    .forEach((p, i) => featured.appendChild(buildProjectCard(p, 'home', i + 1)));

  const all = $('#allProjects');
  siteData.projects.forEach((p, i) => all.appendChild(buildProjectCard(p, 'full', i + 1)));

  const tags = [...new Set(siteData.projects.flatMap((p) => p.tags))].sort();
  const filters = $('#projectFilters');
  const allButton = create('button', 'filter-btn active', 'All');
  allButton.type = 'button';
  allButton.dataset.filter = 'all';
  filters.appendChild(allButton);
  tags.forEach((tag) => {
    const button = create('button', 'filter-btn', tag);
    button.type = 'button';
    button.dataset.filter = tag;
    filters.appendChild(button);
  });

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    $$('.filter-btn', filters).forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    $$('.project-card', all).forEach((card) => {
      const match = filter === 'all' || card.dataset.tags.split('|').includes(filter);
      card.classList.toggle('hide', !match);
    });
  });
}

function buildExperienceRow(exp, mode = 'home') {
  const bullets = mode === 'home' ? (exp.homeBullets || exp.fullBullets || []) : (exp.fullBullets || exp.homeBullets || []);
  const row = create('article', 'exp-row reveal');
  row.innerHTML = `
    <div class="exp-meta">
      <h3>${exp.role}</h3>
      <p class="exp-org">${exp.org} <span class="exp-loc">· ${exp.loc}</span></p>
      <span class="role-date">${exp.dates}</span>
    </div>
    <div class="exp-body">
      <ul class="bullets">${bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
    </div>
  `;
  return row;
}

function renderExperience() {
  const home = $('#homeExperience');
  siteData.experience
    .filter((e) => e.home)
    .sort((a, b) => a.home - b.home)
    .forEach((e) => home.appendChild(buildExperienceRow(e, 'home')));

  const all = $('#allExperience');
  siteData.experience.forEach((e) => all.appendChild(buildExperienceRow(e, 'full')));
}

function renderSkills() {
  const card = $('#skillsCard');
  siteData.skills.forEach((group) => {
    const row = create('div', `skill-row${group.learning ? ' learning' : ''}`);
    row.innerHTML = `
      <span class="skill-label">${group.label}</span>
      <div class="chip-row">${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}</div>
    `;
    card.appendChild(row);
  });
}

function renderDirection() {
  $('#directionText').textContent = siteData.direction;
}

function renderContact() {
  $('#contactLead').textContent = siteData.contact.lead;
  const email = $('#contactEmail');
  email.href = `mailto:${siteData.links.email}`;
  email.textContent = siteData.links.email;

  const actions = $('#contactActions');
  const resume = create('a', 'btn', `${icons.resume}<span>Resume</span>`);
  resume.href = siteData.links.resume;
  resume.setAttribute('download', '');
  actions.append(
    resume,
    iconLink('Email', `mailto:${siteData.links.email}`, icons.email),
    iconLink('GitHub', siteData.links.github, icons.github, { target: '_blank', rel: 'noopener' }),
    iconLink('LinkedIn', siteData.links.linkedin, icons.linkedin, { target: '_blank', rel: 'noopener' })
  );

  const footerEmail = $('#footerEmail');
  footerEmail.href = `mailto:${siteData.links.email}`;
  footerEmail.textContent = siteData.links.email;

  $('#footerActions').append(
    iconLink('GitHub', siteData.links.github, icons.github, { target: '_blank', rel: 'noopener' }),
    iconLink('LinkedIn', siteData.links.linkedin, icons.linkedin, { target: '_blank', rel: 'noopener' }),
    iconLink('Email', `mailto:${siteData.links.email}`, icons.email)
  );
}

function renderAbout() {
  const about = siteData.about;
  $('#aboutTitle').textContent = about.title;
  $('#aboutIntro').innerHTML = about.intro.map((p) => `<p>${p}</p>`).join('');
  $('#aboutResearchTitle').textContent = about.researchTitle;
  $('#aboutResearch').innerHTML = about.research.map((p) => `<p>${p}</p>`).join('');
  $('#aboutPathTitle').textContent = about.pathTitle;
  $('#aboutPath').innerHTML = about.path.map((p) => `<p>${p}</p>`).join('');

  const stack = $('#educationStack');
  siteData.education.forEach((edu) => {
    const card = create('div', 'edu-card');
    card.innerHTML = `
      <h3>${edu.school}</h3>
      <p>${edu.degree}</p>
      <p>${edu.detail}</p>
      <span class="edu-date">${edu.date}</span>
    `;
    stack.appendChild(card);
  });
}

function renderCourses() {
  const accordion = $('#coursesAccordion');
  siteData.courses.forEach((term, index) => {
    const item = create('section', `acc-item${index === 0 ? ' open' : ''}`);
    const rows = term.rows.map((course) => `
      <div class="course-row">
        <span class="course-code">${course.code}</span>
        <div>
          <div class="course-title">${course.title}</div>
          <div class="course-topics">${course.topics}</div>
        </div>
        <span class="course-status">${course.status}</span>
      </div>
    `).join('');
    item.innerHTML = `
      <button class="acc-trigger" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${term.term}</span>
        <span class="acc-count">${term.rows.length} courses</span>
        <span class="acc-chevron">${icons.chevron}</span>
      </button>
      <div class="acc-panel">
        <div class="course-list">${rows}</div>
      </div>
    `;
    accordion.appendChild(item);
  });

  $$('.acc-item').forEach((item) => {
    const trigger = $('.acc-trigger', item);
    const panel = $('.acc-panel', item);
    const sync = () => { panel.style.maxHeight = item.classList.contains('open') ? panel.scrollHeight + 'px' : '0px'; };
    trigger.addEventListener('click', () => {
      item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', item.classList.contains('open'));
      sync();
    });
    sync();
  });
}

function initPhotoFallback() {
  const img = $('#profileImg');
  img.addEventListener('error', () => img.classList.add('is-hidden'));
}

const subpageRoutes = {
  '#all-projects': '#view-projects',
  '#all-experience': '#view-experience',
  '#all-courses': '#view-courses',
  '#about': '#view-about'
};

function setActiveNav(hash) {
  $$('.nav-links a').forEach((link) => link.classList.remove('active'));
  let targetHash = hash;
  if (!targetHash || targetHash === '#top') targetHash = '#work';
  const active = $(`.nav-links a[href="${targetHash}"]`);
  if (active) active.classList.add('active');
}

function showHome() {
  $('#view-home').hidden = false;
  Object.values(subpageRoutes).forEach((selector) => { $(selector).hidden = true; });
}

function showSubpage(selector) {
  $('#view-home').hidden = true;
  Object.values(subpageRoutes).forEach((view) => { $(view).hidden = view !== selector; });
}

function route() {
  const hash = window.location.hash || '#top';
  const subpage = subpageRoutes[hash];

  if (subpage) {
    showSubpage(subpage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showHome();
    if (hash && hash !== '#top') {
      requestAnimationFrame(() => {
        const target = $(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setActiveNav(hash === '#about' ? '#about' : hash);
  $$('.reveal').forEach((node) => revealObserver.observe(node));
}

function initNavigation() {
  const header = $('#siteHeader');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 8), { passive: true });

  const menuToggle = $('#menuToggle');
  const nav = $('#navLinks');
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });

  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  window.addEventListener('hashchange', route);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function boot() {
  renderHero();
  renderProof();
  renderProjects();
  renderExperience();
  renderSkills();
  renderDirection();
  renderContact();
  renderAbout();
  renderCourses();
  initPhotoFallback();
  initNavigation();
  route();
}

document.addEventListener('DOMContentLoaded', boot);
