/* === Edit your content here. Everything the site renders lives in this file. === */
/* ===================== content ===================== */
const siteData = {
  name: "Dhana Karthikeya Ventrapragada",
  photo: "profile.JPG",
  resume: "https://vdkarthikeya.github.io/Resume.pdf",
  contact: {
    email: "vdkarthikeya@berkeley.edu",
    github: "https://github.com/vdkarthikeya", githubLabel: "github / vdkarthikeya",
    linkedin: "https://www.linkedin.com/in/vdkarthikeya", linkedinLabel: "linkedin / vdkarthikeya"
  },
  current: [
    { role:"engineering intern", org:"Guang Labs" },
    { role:"data science intern", org:"IDX Exchange" },
    { role:"ucs1, cs 61a", org:"UC Berkeley" }
  ],
  greeting: "hi, i'm karthik 👋",
  intro: 'i\'m an undergraduate @ <a class="hl" href="https://www.berkeley.edu" target="_blank" rel="noopener">uc berkeley</a>, studying <a class="hl" href="https://cdss.berkeley.edu/dsus" target="_blank" rel="noopener">data science</a> with applied math as domain emphasis. right now i\'m splitting time between an engineering internship at Guang Labs, a data science internship at IDX Exchange, and course staff for CS 61A. my interests are in <span class="hl">multimodal ai + reinforcement learning</span>.',
  about: {
    bio: [
      'i\'m a rising senior at <a class="hl" href="https://www.berkeley.edu" target="_blank" rel="noopener">uc berkeley</a> studying <a class="hl" href="https://cdss.berkeley.edu/dsus" target="_blank" rel="noopener">data science</a>, graduating in december 2027. i transferred in from De Anza College, where i earned an a.s. in mathematics and computer science.',
      'i grew up in <span class="hl">Vijayawada, India</span>, where pursuing an undergraduate degree in the U.S. \u2014 let alone aiming for UC Berkeley \u2014 was almost unheard of. i started at community college with no roadmap and no structured guidance, and figured out most of the path on my own. through all of it the constant was my family, and especially <span class="hl">my father</span>: they believed i could do this long before i believed it myself, and i\'m here because of their love and support.',
      'my work so far has been hands-on: shipping a video classification pipeline at Guang Labs, building home-price models at IDX Exchange, and building NLP and regression projects on my own time. short term, i want to grow into a <span class="hl">machine learning engineer</span> role; longer term, i want to move into <span class="hl">machine learning research</span>.'
    ],
    education: [
      { school:"University of California, Berkeley", degree:"b.a. in data science", gpaValue:"3.85", gpaMax:"4.00", location:"Berkeley, CA", dates:"aug 2025 \u2014 dec 2027", courses:true },
      { school:"De Anza College", degree:"a.s. in mathematics and computer science", gpaValue:"3.92", gpaMax:"4.00", location:"Cupertino, CA", dates:"sep 2023 \u2014 jun 2025" }
    ],
    terms: [
      { term:"fall 2025", rows:[
        { code:"CS 61A",   title:"Structure & Interpretation of Computer Programs", grade:"A\u2212" },
        { code:"DATA C8",  title:"Foundations of Data Science", grade:"A" }
      ]},
      { term:"spring 2026", rows:[
        { code:"CS 61B",   title:"Data Structures", grade:"A\u2212" },
        { code:"DATA C100", title:"Principles & Techniques of Data Science", grade:"A\u2212" },
        { code:"DATA C140", title:"Probability for Data Science", grade:"A" }
      ]},
      { term:"summer 2026", rows:[
        { code:"CYPLAN 101", title:"Introduction to Urban Data Analytics", grade:"A" }
      ]},
      { term:"fall 2026", note:"upcoming", rows:[
        { code:"CS 189",    title:"Introduction to Machine Learning", grade:"upcoming", muted:true },
        { code:"DATA C101", title:"Data Engineering", grade:"upcoming", muted:true },
        { code:"EECS 127", title:"Optimization Models in Engineering", grade:"upcoming", muted:true }
      ]}
    ]
  },
  experiences: [
    { featured:true, role:"engineering intern", company:"Guang Labs", url:"https://guanglabs.com/", location:"remote", dates:"may 2026 \u2014 present",
      home:[
        "shipped an async video domain-classification service labeling images, short clips, and long videos across 6 content domains.",
        "built the Gemini classifier with Pydantic schemas and a confidence-gated trust layer that resamples low-trust clips up to 10\u00d7.",
        "wired it into a FastAPI submit/poll API with a Postgres job store, backed by 38 passing tests."
      ],
      full:[
        "shipped an asynchronous video domain-classification service that labels images, short clips, and long videos across 6 content domains, exposed through FastAPI submit/poll endpoints backed by a Postgres job store and background workers.",
        "built the Gemini classifier with Pydantic-validated schemas and a confidence-gated trust layer that auto-resamples low-trust long videos up to 10\u00d7, sampling random 10-second clips via ffprobe/ffmpeg and merging them through a weighted-mode rollup.",
        "modularized the service into resolver, sampler, trust, and provider layers, with a deterministic fake provider enabling API-key-free testing.",
        "validated the workflow with 38 passing unit and API tests covering segment-sampling math, trust boundaries, and end-to-end submit/poll flows."
      ]
    },
    { featured:true, role:"data science intern", company:"IDX Exchange", url:"https://idxexchange.com/", location:"remote", dates:"jun 2026 \u2014 present",
      home:[
        "build end-to-end ML pipelines on 100K+ California MLS sold-property records for home-price prediction.",
        "iterate on XGBoost valuation models, tracking MdAPE, RMSE, MAE, and R\u00b2 across experiments.",
        "own ingestion, cleaning, feature engineering, and leakage prevention end to end."
      ],
      full:[
        "build end-to-end ML pipelines on 100K+ California MLS sold-property records to predict home prices, owning the full workflow from ingestion and cleaning through feature engineering and leakage prevention.",
        "iterate on XGBoost valuation models with cross-validation and feature-importance analysis, evaluating with MdAPE, RMSE, MAE, and R\u00b2 across experiments.",
        "document how data quality and design choices map to model performance, translating results into structured analytics for the team."
      ]
    },
    { featured:true, role:"undergraduate course staff (ucs1)", company:"CS 61A", url:"https://cs61a.org/", location:"Berkeley, CA", dates:"jun 2026 \u2014 present",
      aside:"failed my midterms in this class the first time around \u2014 now i'm the one grading them.",
      home:[
        "run 2 weekly exam-prep sections, office hours, grading, and regrade/extension requests for Berkeley's 250+ student CS 61A."
      ],
      full:[
        "run 2 weekly exam-prep sections and office hours for CS 61A, Berkeley's 250+ student introductory computer science course.",
        "handle grading, Gradescope autograders, regrade requests, and extension requests for the course."
      ]
    },
    { featured:false, role:"incoming fellow, health + innovation track", company:"UC Berkeley \u2014 Fung Fellowship", location:"Berkeley, CA", dates:"fall 2026", bullets:[
      "selected for Berkeley's Fung Fellowship, Health + Innovation track.",
      "will build digital public-health tools with community partners using human-centered design."
    ]},
    { featured:false, role:"secretary", company:"Boundary.0", location:"Cupertino, CA", dates:"apr 2024 \u2014 jun 2025", bullets:[
      "co-founded Boundary.0 to bridge students with industry after struggling, as a first-year, to find guidance for internships and work opportunities.",
      "helped partner with 5+ companies across construction, finance, and computer science to pair students with hands-on experience.",
      "coordinated board meetings to keep the club running efficiently and aligned with its mission.",
      "organized launch and outreach events, pitching the club's vision to grow a 120+ member community."
    ]},
    { featured:false, role:"mentor", company:"Mentors at De Anza", location:"Cupertino, CA", dates:"sep 2024 \u2014 apr 2025", bullets:[
      "mentored a first-generation nursing student over two quarters on course planning, transfer-credit policies, and academic pathways.",
      "researched campus nursing programs, clubs, and internships to surface concrete opportunities for her career.",
      "provided a steady, judgment-free space for academic and personal guidance, drawing on my own experience navigating college alone."
    ]},
    { featured:false, role:"programs committee intern", company:"De Anza Student Government", location:"Cupertino, CA", dates:"feb 2024 \u2014 feb 2025", bullets:[
      "planned and executed 5+ major campus events \u2014 Club Day, Spring Carnival, Resource Fair, Homecoming, and de-stress events.",
      "negotiated the Spring Carnival photo-booth vendor, the event's highest-turnout activity, with near-universal attendee participation.",
      "designed and ran a Club Day game that drove a wave of new DASG sign-ups.",
      "collaborated closely with fellow interns on brainstorming, logistics, and on-the-day crowd management."
    ]},
    { featured:false, role:"events coordinator", company:"Indian Students Association, De Anza", location:"Cupertino, CA", dates:"oct 2023 \u2014 feb 2025", bullets:[
      "led planning and execution of ISA's flagship Diwali celebration, the organization's largest event of the year.",
      "coordinated 30+ volunteers across timed shifts, assigning tasks and filling gaps to keep the event running smoothly.",
      "secured sponsorships and owned budgeting, vendor coordination, and inter-organizer communication.",
      "built an inclusive space for Indian and international students to connect and feel at home, drawing 200+ attendees."
    ]},
    { featured:false, role:"lab technician assistant", company:"Kirsch Center, De Anza", location:"Cupertino, CA", dates:"dec 2023 \u2014 mar 2024", bullets:[
      "worked within a ~30-person team to restore the Kirsch Center's sustainability spaces to pre-pandemic condition.",
      "seeded and maintained native plants and cleared bio-waste, supporting on-campus natural food production for the dining hall.",
      "led educational tours for prospective environmental science students and helped plant wildflowers across campus."
    ]}
  ],
  projects: [
    { featured:true, title:"movie genre classification", stack:"Python, PyTorch, SentenceTransformers, scikit-learn",
      repo:"https://github.com/vdkarthikeya/movie-genre-classification-nlp",
      aside:"started as my DSS Decal project, spring 2026.",
      home:[
        "multi-label genre prediction on 42K+ films across 20+ genres using MiniLM, MPNet, and e5-large-v2 embeddings.",
        "rare-genre cutoffs and per-label threshold tuning lifted Macro F1 from 0.48 to 0.66 (Micro F1 0.68).",
        "a simple Logistic Regression beat the boosted trees while training ~12\u00d7 faster."
      ],
      full:[
        "built a multi-label genre prediction system over 42K+ MovieLens/TMDB films across 20+ genres, parsing nested IMDb metadata with regex and engineering log budget/revenue and temporal release features.",
        "generated semantic embeddings of each film's title, tagline, and overview with MiniLM, MPNet, and e5-large-v2, then compared them as inputs to Logistic Regression, XGBoost, and LightGBM.",
        "tackled heavy class imbalance with rare-genre cutoffs and per-label threshold tuning, lifting Macro F1 from 0.48 to 0.66 (Micro F1 0.68).",
        "found that Logistic Regression on 1024-dim e5 embeddings outperformed the boosted trees while training roughly 12\u00d7 faster \u2014 a deliberate accuracy-vs-cost takeaway."
      ]
    },
    { featured:true, title:"housing price & assessment bias", stack:"pandas, NumPy, scikit-learn", repo:null,
      home:[
        "linear-regression pipeline on 200K+ Cook County records with 15+ engineered geographic and interaction features.",
        "reached test RMSE 0.562 via 4-fold cross-validation.",
        "quantified systematic over- and under-estimation across price bands."
      ],
      full:[
        "built a linear-regression pipeline on 200K+ Cook County Assessor records, engineering 15+ features: log-transformed square footage, polynomial age and geographic terms, latitude\u00d7longitude interactions, and one-hot road/garage features.",
        "filtered non-arm's-length $1 sales so the training distribution mirrored real assessment practice.",
        "reached test RMSE of 0.562 under 4-fold cross-validation.",
        "went beyond accuracy to quantify systematic over- and under-estimation across price bands, connecting modeling choices to documented inequities in property-tax assessment."
      ]
    },
    { featured:true, title:"email spam / ham classifier", stack:"scikit-learn, pandas, NumPy", repo:null,
      home:[
        "engineered 50+ features from raw email text into a numeric feature matrix.",
        "L1-regularized Logistic Regression tuned with GridSearchCV and 10-fold cross-validation.",
        "92.1% test accuracy on a held-out leaderboard set."
      ],
      full:[
        "turned raw email text into a numeric feature matrix, engineering 50+ features: regex counts for links, punctuation, and dollar signs, HTML and subject-line indicators, log-scaled length, and a curated spam/ham bag-of-words.",
        "trained an L1-regularized Logistic Regression, using L1 sparsity to keep only the most informative features.",
        "tuned the regularization strength with GridSearchCV and validated with 10-fold cross-validation.",
        "reached 92.1% accuracy on a held-out leaderboard set, weighing precision against recall given the higher cost of false positives."
      ]
    },
    { featured:false, title:"california housing regression", stack:"Python, scikit-learn",
      repo:"https://github.com/vdkarthikeya/california-housing-regression",
      home:[
        "predicted median home values across 20K+ California block groups from demographic, geographic, and economic features.",
        "compared Linear Regression against k-Nearest-Neighbors on interpretability and accuracy."
      ],
      full:[
        "built regression models on the 20K+-row California Housing dataset, predicting median home values from demographic, geographic, and economic features.",
        "compared Linear Regression against k-Nearest-Neighbors, examining how feature scaling and the bias\u2013variance tradeoff affect each approach.",
        "used the comparison to reason about interpretability versus predictive accuracy across an end-to-end workflow."
      ]
    },
    { featured:false, title:"scheme interpreter", stack:"Python", repo:null,
      home:[
        "interpreter for a subset of Scheme built around a scheme_eval / scheme_apply cycle.",
        "implemented environment frames, special forms, and tail-call optimization."
      ],
      full:[
        "implemented an interpreter for a subset of Scheme in Python, built around a core scheme_eval / scheme_apply evaluation cycle.",
        "implemented lexically-scoped environment frames, special forms (define, lambda, if, cond, let, quote, and/or), and both user-defined and built-in procedures.",
        "added tail-call optimization so deeply recursive Scheme programs run in constant stack space.",
        "reinforced how a language is parsed, represented, evaluated, and extended \u2014 the mechanics behind features most programmers take for granted."
      ]
    },
    { featured:false, title:"ngordnet", stack:"Java", repo:null,
      home:[
        "Java tool linking a WordNet semantic graph with Google NGrams historical word-frequency data.",
        "built a custom directed graph to return hyponyms and surface the k most popular words over time."
      ],
      full:[
        "built a Java tool for exploring how word meaning and usage relate over time, combining a WordNet semantic graph with Google NGrams historical word-frequency data.",
        "parsed the synset/hyponym dataset and implemented a custom directed graph (no external graph libraries) that returns all hyponyms of a word or set of words.",
        "implemented NGramMap/TimeSeries structures that parse the frequency files once and answer historical-trend queries efficiently.",
        "combined the two to surface the k most historically popular words within a semantic category, served through a small web interface."
      ]
    },
    { featured:false, title:"build your own world", stack:"Java", repo:null,
      home:[
        "Java engine generating explorable 2D tile worlds from a seed, deterministic per seed.",
        "interactive WASD movement plus save/load persistence restoring exact world state."
      ],
      full:[
        "designed and built a Java engine that generates explorable 2D tile worlds from a seed, using a pseudorandom generator so the same seed always reproduces the exact same world.",
        "generated distinct rooms and connecting hallways with randomized counts, sizes, and positions drawn onto a tile grid.",
        "implemented interactive WASD movement and save/load persistence that restores the world \u2014 including the random-number-generator state \u2014 exactly as it was left.",
        "emphasized large-project architecture, object-oriented design, and deterministic, testable generation."
      ]
    }
  ],
  skills: [
    { group:"languages", items:["Python","Java","C++","SQL","Scheme"] },
    { group:"ml & data science", items:["pandas","NumPy","scikit-learn","PyTorch","TensorFlow","XGBoost","LightGBM","SentenceTransformers","Matplotlib","seaborn"] },
    { group:"backend & infrastructure", items:["FastAPI","Pydantic","PostgreSQL","AWS S3","Gemini API","REST APIs","pytest","ffmpeg"] },
    { group:"developer tools", items:["Git","GitHub","VS Code","IntelliJ","Jupyter","Google Colab","MATLAB"] }
  ]
};

const ICON = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>'
};
