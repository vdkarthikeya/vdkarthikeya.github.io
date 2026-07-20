/* === Edit your content here. Everything the site renders lives in this file. === */
/* ===================== content ===================== */
const siteData = {
  name: "Dhana Karthikeya Ventrapragada",
  photo: "profile.JPG",
  resume: "https://vdkarthikeya.github.io/Resume.pdf",
  contact: {
    email: "vdkarthikeya@berkeley.edu",
    github: "https://github.com/vdkarthikeya", githubLabel: "GitHub / vdkarthikeya",
    linkedin: "https://www.linkedin.com/in/vdkarthikeya", linkedinLabel: "LinkedIn / vdkarthikeya"
  },
  current: [
    { role:"Engineering Intern", org:"Guang Labs" },
    { role:"Data Science Intern", org:"IDX Exchange" },
    { role:"UCS1, CS 61A", org:"UC Berkeley" }
  ],
  greeting: "Hi, I'm Karthik 👋",
  intro: 'I\'m an undergraduate @ <a class="hl" href="https://www.berkeley.edu" target="_blank" rel="noopener">UC Berkeley</a>, studying <a class="hl" href="https://cdss.berkeley.edu/dsus" target="_blank" rel="noopener">Data Science</a> with Applied Math as domain emphasis. Right now I\'m splitting time between an engineering internship at Guang Labs, a data science internship at IDX Exchange, and course staff for CS 61A. My interests are in <span class="hl">Multimodal AI + Reinforcement Learning</span>.',
  about: {
    bio: [
      'I\'m a rising senior at <a class="hl" href="https://www.berkeley.edu" target="_blank" rel="noopener">UC Berkeley</a> studying <a class="hl" href="https://cdss.berkeley.edu/dsus" target="_blank" rel="noopener">Data Science</a>, graduating in December 2027. I transferred in from De Anza College, where I earned an A.S. in Mathematics and Computer Science.',
      'I grew up in <span class="hl">Vijayawada, India</span>, where pursuing an undergraduate degree in the U.S. \u2014 let alone aiming for UC Berkeley \u2014 was almost unheard of. I started at community college with no roadmap and no structured guidance, and figured out most of the path on my own. Through all of it the constant was my family, and especially <span class="hl">my father</span>: they believed I could do this long before I believed it myself, and I\'m here because of their love and support.',
      'My work so far has been hands-on: shipping a video classification pipeline at Guang Labs, building home-price models at IDX Exchange, and building NLP and regression projects on my own time. Short term, I want to grow into a <span class="hl">Machine Learning Engineer</span> role; longer term, I want to move into <span class="hl">Machine Learning Research</span>.'
    ],
    education: [
      { school:"University of California, Berkeley", degree:"B.A. in Data Science", gpaValue:"3.85", gpaMax:"4.00", location:"Berkeley, CA", dates:"Aug 2025 \u2014 Dec 2027", courses:true },
      { school:"De Anza College", degree:"A.S. in Mathematics and Computer Science", gpaValue:"3.92", gpaMax:"4.00", location:"Cupertino, CA", dates:"Sep 2023 \u2014 Jun 2025" }
    ],
    terms: [
      { term:"Fall 2025", rows:[
        { code:"CS 61A",   title:"Structure & Interpretation of Computer Programs", grade:"A\u2212" },
        { code:"DATA C8",  title:"Foundations of Data Science", grade:"A" }
      ]},
      { term:"Spring 2026", rows:[
        { code:"CS 61B",   title:"Data Structures", grade:"A\u2212" },
        { code:"DATA C100", title:"Principles & Techniques of Data Science", grade:"A\u2212" },
        { code:"DATA C140", title:"Probability for Data Science", grade:"A" }
      ]},
      { term:"Summer 2026", rows:[
        { code:"CYPLAN 101", title:"Introduction to Urban Data Analytics", grade:"A" }
      ]},
      { term:"Fall 2026", note:"Planned", rows:[
        { code:"CS 189",    title:"Introduction to Machine Learning", grade:"IP", muted:true },
        { code:"DATA C101", title:"Data Engineering", grade:"IP", muted:true },
        { code:"EECS 127", title:"Optimization Models in Engineering", grade:"IP", muted:true }
      ]}
    ]
  },
  experiences: [
    { featured:true, role:"Engineering Intern", company:"Guang Labs", url:"https://guanglabs.com/", location:"Remote", dates:"May 2026 \u2014 Present",
      home:[
        "Built an async video/image domain-classification API on FastAPI with Auth0 auth and a Postgres job store — submit-and-poll REST endpoints that run classification as background jobs and return structured JSON (domain labels, confidence, evidence).",
        "Implemented the full Python pipeline: resolving media from four source types (local, S3, HTTP), auto-detecting image vs. short/long video with ffprobe/ffmpeg, and classifying via Gemini multimodal calls behind a confidence-gated trust layer.",
        "Added a trust-gated resample loop for low-trust long videos, split the service into isolated testable modules, and backed it with 86 unit, integration, and acceptance tests."
      ],
      full:[
        "Built an async video/image domain-classification API on a FastAPI backend with Auth0 authentication and a PostgreSQL job store: clients submit one or more media items, poll for job status and granular per-item progress, and receive structured JSON with domain labels (sports, gaming, talking-head, etc.), confidence scores, evidence strings, and rollup metadata.",
        "Implemented the full classification pipeline in Python — resolving media from four source types (local path, S3 key, S3 URL, HTTP URL), detecting duration and image vs. short/long video via ffprobe with no client-supplied media type, preparing clips with ffmpeg, and attaching real media to Gemini multimodal calls.",
        "Designed a confidence-gated trust layer with a resample loop: when Gemini returns a low-trust result on a long video, the service re-samples different windows (excluding prior attempts), retries up to a configurable max, and tracks resample attempts and total model calls.",
        "Structured the codebase into isolated, testable modules — media resolver, segment sampler, trust evaluator, Gemini classifier provider, a deterministic fake provider for tests, a versioned prompt loader with strict JSON-schema contracts, and Pydantic schemas — behind a central VideoDomainService orchestrator.",
        "Validated it with 86 unit, integration, and acceptance tests plus a manual staging acceptance script, shipped a database migration with deploy docs, and drove the production path to done through code review after the initial branch wasn't wired end-to-end."
      ]
    },
    { featured:true, role:"Data Science Intern", company:"IDX Exchange", url:"https://idxexchange.com/", location:"Remote", dates:"Jun 2026 \u2014 Present",
      home:[
        "Building a California home sale-price model (automated valuation) on CRMLS MLS data — filtered 143K raw sold records down to ~71K single-family homes and built the preprocessing pipeline.",
        "Handled cleaning, statistical outlier caps (lot size, sale price), a log-price transform, and a chronological train/test split holding out the most recent month.",
        "Found and fixed a train/test data-leakage bug in the outlier thresholds, then benchmarked Linear Regression, Decision Tree, and Random Forest — Random Forest best at R² 0.85 and MdAPE 8.8%."
      ],
      full:[
        "Contributing to an internal team effort to predict the close (sale) price of California single-family homes from historical CRMLS MLS data, where each intern builds an independent preprocessing pipeline against shared rules (chronological split, no list-price features to avoid leakage, R²/MAPE/MdAPE metrics).",
        "Combined seven months of sold-property data (143K+ rows), filtered to single-family residences (~71K), ran a missingness audit, and settled on a core set of intrinsic features (living area, beds/baths, lot size, year built, latitude/longitude).",
        "Built the preprocessing: dropped high-missingness columns and invalid rows, applied statistical outlier caps on lot size and implausible sale prices, log-transformed the target, and split chronologically with the most recent month held out as test.",
        "Diagnosed a catastrophic baseline R² through a worst-prediction error analysis and traced it to a train/test data-leakage bug — outlier thresholds were computed over the full dataset before the split. Fixed it by recomputing every threshold from training data only and freezing them onto the test set.",
        "Benchmarked Linear Regression, Decision Tree, and Random Forest on the held-out month, logging each model's metrics side by side; Random Forest performed best at R² 0.85 (dollar-scale) and MdAPE 8.8%. Feature engineering and gradient-boosted models are the next phases of the 12-week plan."
      ]
    },
    { featured:true, role:"Undergraduate Course Staff (UCS1)", company:"CS 61A", url:"https://cs61a.org/", location:"Berkeley, CA", dates:"Jun 2026 \u2014 Present",
      aside:"Failed my midterms in this class the first time around \u2014 now I'm the one grading them.",
      home:[
        "Run 2 weekly exam-prep sections, office hours, grading, and regrade/extension requests for Berkeley's CS 61A (200+ students), an intro CS course taught in Python and Scheme."
      ],
      full:[
        "Serve as course staff (UCS1) for CS 61A, Berkeley's 200+ student introductory computer science course taught in Python and Scheme.",
        "Teach 2 weekly exam-prep sections, hold office hours, and author and deploy assignments on Gradescope.",
        "Handle grading, autograders, regrade requests, and extensions for the course."
      ]
    },
    { featured:false, role:"Incoming Fellow, Health + Innovation Track", company:"UC Berkeley \u2014 Fung Fellowship", location:"Berkeley, CA", dates:"Fall 2026", bullets:[
      "Selected for Berkeley's Fung Fellowship, Health + Innovation track.",
      "Will build digital public-health tools with community partners using human-centered design."
    ]},
    { featured:false, role:"Secretary", company:"Boundary.0", location:"Cupertino, CA", dates:"Apr 2024 \u2014 Jun 2025", bullets:[
      "Co-founded Boundary.0 to bridge students with industry after struggling, as a first-year, to find guidance for internships and work opportunities.",
      "Helped partner with 5+ companies across construction, finance, and computer science to pair students with hands-on experience.",
      "Coordinated board meetings to keep the club running efficiently and aligned with its mission.",
      "Organized launch and outreach events, pitching the club's vision to grow a 120+ member community."
    ]},
    { featured:false, role:"Mentor", company:"Mentors at De Anza", location:"Cupertino, CA", dates:"Sep 2024 \u2014 Apr 2025", bullets:[
      "Mentored a first-generation nursing student over two quarters on course planning, transfer-credit policies, and academic pathways.",
      "Researched campus nursing programs, clubs, and internships to surface concrete opportunities for her career.",
      "Provided a steady, judgment-free space for academic and personal guidance, drawing on my own experience navigating college alone."
    ]},
    { featured:false, role:"Programs Committee Intern", company:"De Anza Student Government", location:"Cupertino, CA", dates:"Feb 2024 \u2014 Feb 2025", bullets:[
      "Planned and executed 5+ major campus events \u2014 Club Day, Spring Carnival, Resource Fair, Homecoming, and de-stress events.",
      "Negotiated the Spring Carnival photo-booth vendor, the event's highest-turnout activity, with near-universal attendee participation.",
      "Designed and ran a Club Day game that drove a wave of new DASG sign-ups.",
      "Collaborated closely with fellow interns on brainstorming, logistics, and on-the-day crowd management."
    ]},
    { featured:false, role:"Events Coordinator", company:"Indian Students Association, De Anza", location:"Cupertino, CA", dates:"Oct 2023 \u2014 Feb 2025", bullets:[
      "Led planning and execution of ISA's flagship Diwali celebration, the organization's largest event of the year.",
      "Coordinated 30+ volunteers across timed shifts, assigning tasks and filling gaps to keep the event running smoothly.",
      "Secured sponsorships and owned budgeting, vendor coordination, and inter-organizer communication.",
      "Built an inclusive space for Indian and international students to connect and feel at home, drawing 200+ attendees."
    ]},
    { featured:false, role:"Lab Technician Assistant", company:"Kirsch Center, De Anza", location:"Cupertino, CA", dates:"Dec 2023 \u2014 Mar 2024", bullets:[
      "Worked within a ~30-person team to restore the Kirsch Center's sustainability spaces to pre-pandemic condition.",
      "Seeded and maintained native plants and cleared bio-waste, supporting on-campus natural food production for the dining hall.",
      "Led educational tours for prospective environmental science students and helped plant wildflowers across campus."
    ]}
  ],
  projects: [
    { featured:true, title:"Movie Genre Classification", stack:"Python, PyTorch, SentenceTransformers, scikit-learn",
      repo:"https://github.com/vdkarthikeya/movie-genre-classification-nlp",
      aside:"Started as my DSS Decal project, spring 2026.",
      home:[
        "Multi-label genre prediction on 42K+ films across 20+ genres using MiniLM, MPNet, and e5-large-v2 embeddings.",
        "Rare-genre cutoffs and per-label threshold tuning lifted Macro F1 from 0.48 to 0.66 (Micro F1 0.68).",
        "A simple Logistic Regression beat the boosted trees while training ~12\u00d7 faster."
      ],
      full:[
        "Built a multi-label genre-prediction system over 42K+ MovieLens/TMDB films spanning 20+ genres, where each film can carry several genre labels at once — parsing nested IMDb metadata with regex and engineering log budget/revenue and temporal release features.",
        "Generated semantic embeddings of each film's title, tagline, and overview with three sentence-transformer models — MiniLM, MPNet, and e5-large-v2 — and compared them head-to-head as inputs to Logistic Regression, XGBoost, and LightGBM.",
        "Addressed heavy class imbalance across the long tail of rare genres with a rare-genre cutoff and per-label threshold tuning, optimizing decision thresholds independently for each genre rather than a single global cutoff.",
        "Lifted Macro F1 from 0.48 to 0.66 (Micro F1 0.68), using Macro F1 as the primary metric so rare genres counted as much as the common ones.",
        "Found that a simple Logistic Regression on 1024-dim e5 embeddings outperformed the boosted trees while training roughly 12× faster — a deliberate accuracy-vs-compute takeaway."
      ]
    },
    { featured:true, title:"Housing Price & Assessment Bias", stack:"pandas, NumPy, scikit-learn", repo:null,
      home:[
        "Linear-regression pipeline on 200K+ Cook County records with 15+ engineered geographic and interaction features.",
        "Reached test RMSE 0.562 via 4-fold cross-validation.",
        "Quantified systematic over- and under-estimation across price bands."
      ],
      full:[
        "Built a linear-regression pipeline on 200K+ Cook County Assessor records, engineering 15+ features: log-transformed square footage, polynomial age and geographic terms, latitude\u00d7longitude interactions, and one-hot road/garage features.",
        "Filtered non-arm's-length $1 sales so the training distribution mirrored real assessment practice.",
        "Reached test RMSE of 0.562 under 4-fold cross-validation.",
        "Went beyond accuracy to quantify systematic over- and under-estimation across price bands, connecting modeling choices to documented inequities in property-tax assessment."
      ]
    },
    { featured:true, title:"Email Spam / Ham Classifier", stack:"scikit-learn, pandas, NumPy", repo:null,
      home:[
        "Engineered 50+ features from raw email text into a numeric feature matrix.",
        "L1-regularized Logistic Regression tuned with GridSearchCV and 10-fold cross-validation.",
        "92.1% test accuracy on a held-out leaderboard set."
      ],
      full:[
        "Turned raw email text into a numeric feature matrix, engineering 50+ features: regex counts for links, punctuation, and dollar signs, HTML and subject-line indicators, log-scaled length, and a curated spam/ham bag-of-words.",
        "Trained an L1-regularized Logistic Regression, using L1 sparsity to keep only the most informative features.",
        "Tuned the regularization strength with GridSearchCV and validated with 10-fold cross-validation.",
        "Reached 92.1% accuracy on a held-out leaderboard set, weighing precision against recall given the higher cost of false positives."
      ]
    },
    { featured:false, title:"California Housing Regression", stack:"Python, scikit-learn",
      repo:"https://github.com/vdkarthikeya/california-housing-regression",
      home:[
        "Predicted median home values across 20K+ California block groups from demographic, geographic, and economic features.",
        "Compared Linear Regression against k-Nearest-Neighbors on interpretability and accuracy."
      ],
      full:[
        "Built regression models on the 20K+-row California Housing dataset, predicting median home values from demographic, geographic, and economic features.",
        "Compared Linear Regression against k-Nearest-Neighbors, examining how feature scaling and the bias\u2013variance tradeoff affect each approach.",
        "Used the comparison to reason about interpretability versus predictive accuracy across an end-to-end workflow."
      ]
    },
    { featured:false, title:"Scheme Interpreter", stack:"Python", repo:null,
      home:[
        "Interpreter for a subset of Scheme built around a scheme_eval / scheme_apply cycle.",
        "Implemented environment frames, special forms, and tail-call optimization."
      ],
      full:[
        "Implemented an interpreter for a subset of Scheme in Python, built around a core scheme_eval / scheme_apply evaluation cycle.",
        "Implemented lexically-scoped environment frames, special forms (define, lambda, if, cond, let, quote, and/or), and both user-defined and built-in procedures.",
        "Added tail-call optimization so deeply recursive Scheme programs run in constant stack space.",
        "Reinforced how a language is parsed, represented, evaluated, and extended \u2014 the mechanics behind features most programmers take for granted."
      ]
    },
    { featured:false, title:"Ngordnet", stack:"Java", repo:null,
      home:[
        "Java tool linking a WordNet semantic graph with Google NGrams historical word-frequency data, built on a directed graph (adjacency list) with recursive DFS.",
        "Resolves hyponyms for single or multi-word queries via set intersection and surfaces the k most historically popular words in a category."
      ],
      full:[
        "Built a Java tool for exploring how word meaning and usage relate over time, combining a WordNet semantic graph with Google NGrams historical word-frequency data.",
        "Implemented the graph as an adjacency list (synset ID to child IDs) with a recursive DFS and a visited set to resolve all hyponyms reachable from a word — with unit tests covering cycles, self-loops, diamonds, disconnected components, and deep chains.",
        "Handled multi-word queries by set intersection and ranked results by historical frequency to return the top-k most popular words in a semantic category, with a k=0 case returning all hyponyms alphabetically.",
        "Debugged a subtle correctness bug where synset IDs split across multiple lines were being overwritten instead of merged, silently dropping hyponyms — fixed by appending to existing entries."
      ]
    },
    { featured:false, title:"Build Your Own World", stack:"Java", repo:null,
      home:[
        "Java dungeon-crawler with deterministic, seed-based procedural world generation — rooms connected by minimum-spanning-tree hallways built with Kruskal's algorithm.",
        "BFS powers avatar click-to-move pathfinding and enemy chasing, with a precomputed BFS distance map for fast, evenly-spread enemy and item spawning."
      ],
      full:[
        "Built a Java dungeon-crawler on the StdDraw tile engine: the player explores a procedurally generated world, fights enemies through quiz battles, and collects health kits to survive.",
        "Generated worlds deterministically from a seed — placing non-overlapping rooms and connecting them with L-shaped hallways along a minimum spanning tree built via Kruskal's algorithm, so every room is reachable with minimal total hallway length.",
        "Implemented BFS pathfinding for both avatar click-to-move (drawing and animating the shortest path) and enemy chasing, and used a single precomputed BFS distance map for O(1) spawn-distance checks so enemies and items spread evenly across the map.",
        "Added a full-screen quiz-battle combat system with overlay rendering that preserves world state, plus save/load that stores the seed and move history and replays it to deterministically reconstruct the exact world.",
        "Emphasized large-project architecture, object-oriented design, and deterministic, testable generation."
      ]
    }
  ],
  skills: [
    { group:"Languages", items:["Python","Java","C++","SQL","Scheme"] },
    { group:"ML & Data Science", items:["pandas","NumPy","scikit-learn","PyTorch","TensorFlow","XGBoost","LightGBM","SentenceTransformers","Matplotlib","seaborn"] },
    { group:"Backend & Infrastructure", items:["FastAPI","Pydantic","PostgreSQL","Auth0","AWS S3","Gemini API","REST APIs","pytest","ffmpeg","ffprobe"] },
    { group:"Developer Tools", items:["Git","GitHub","VS Code","IntelliJ","Jupyter","Google Colab","MATLAB"] }
  ]
};

const ICON = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>'
};
