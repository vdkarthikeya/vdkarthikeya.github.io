/* === Edit your content here. Everything the site renders lives in this file. === */
/* ===================== content ===================== */
const siteData = {
  name: "Dhana Karthikeya Ventrapragada",
  photo: "profile.JPG",
  resume: "resume.pdf",
  contact: {
    email: "vdkarthikeya@berkeley.edu",
    github: "https://github.com/vdkarthikeya", githubLabel: "github / vdkarthikeya",
    linkedin: "https://linkedin.com/in/vdkarthikeya", linkedinLabel: "linkedin / vdkarthikeya"
  },
  current: [
    { role:"Engineering Intern", org:"Guang Labs" },
    { role:"Data Science Intern", org:"IDX Exchange" },
    { role:"UCS1, CS 61A", org:"UC Berkeley" }
  ],
  intro: 'Hi!, I\'m a rising senior at <span class="hl">UC Berkeley</span> studying <span class="hl">Data Science</span>, <span class="hl">graduating December 2027</span>. Right now I\'m working as an engineering intern at Guang Labs, a data science intern at IDX Exchange, and as course staff for CS 61A. Alongside that, I\'m actively exploring opportunities in Machine Learning Research.',
  about: {
    bio: [
      'I\'m a <span class="hl">Data Science</span> student at <span class="hl">UC Berkeley</span>, graduating December 2027, and a transfer from De Anza College, where I earned an Associate\'s degree in Mathematics and Computer Science.',
      'I grew up in <span class="hl">Vijayawada, India</span>, where pursuing an undergraduate degree in the U.S. \u2014 let alone aiming for UC Berkeley \u2014 was almost unheard of. I started at community college with no roadmap and no structured guidance, and figured out most of the path on my own. Through all of it the constant was my family, and especially <span class="hl">my father</span>: they believed I could do this long before I believed it myself, and I\'m here because of their love and support.',
      'My work so far spans video understanding, real-estate valuation, and NLP. In the short term my goal is to grow into a <span class="hl">Machine Learning Engineer</span>; longer term, I want to move into <span class="hl">Machine Learning Research</span>. I care more about the honest version of a result than the flattering one.'
    ],
    education: [
      { school:"University of California, Berkeley", degree:"B.A. in Data Science", gpa:"GPA 3.82 / 4.00", detail:"College of Computing, Data Science, and Society", dates:"Aug 2025 \u2014 Dec 2027", courses:true },
      { school:"De Anza College", degree:"Associate's Degree in Mathematics & Computer Science", gpa:"GPA 3.92 / 4.00", detail:"Cupertino, CA", dates:"Sep 2023 \u2014 Jun 2025" }
    ],
    /* NOTE: Fall/Spring placement is still a best guess except Data C140 (confirmed Spring 2026). */
    terms: [
      { term:"Fall 2025", rows:[
        { code:"CS 61A",   title:"Structure & Interpretation of Computer Programs", grade:"A\u2212" },
        { code:"Data C8",  title:"Foundations of Data Science", grade:"A" }
      ]},
      { term:"Spring 2026", rows:[
        { code:"CS 61B",   title:"Data Structures", grade:"A\u2212" },
        { code:"Data C100", title:"Principles & Techniques of Data Science", grade:"A\u2212" },
        { code:"Data C140", title:"Probability for Data Science", grade:"A" }
      ]},
      { term:"Summer 2026", note:"In progress", rows:[
        { code:"CYPLAN 101", title:"Introduction to Urban Data Analytics", grade:"In progress", muted:true }
      ]},
      { term:"Fall 2026", note:"Planned", rows:[
        { code:"CS 189",    title:"Introduction to Machine Learning", grade:"Planned", muted:true },
        { code:"Data C101", title:"Data Engineering", grade:"Planned", muted:true }
      ]}
    ]
  },
  experiences: [
    { featured:true, role:"Engineering Intern", company:"Guang Labs", location:"Remote", dates:"May 2026 \u2014 Present", bullets:[
      "Build AI-powered video workflows that take gameplay uploads through processing and automatic highlight generation.",
      "Develop a Gemini-based media-classification workflow with Pydantic schemas, configurable parameters, and prompt-loading utilities.",
      "Handle image, short-video, and sampled long-video classification across 5+ content domains end to end."
    ]},
    { featured:true, role:"Data Science Intern", company:"IDX Exchange", location:"Remote", dates:"Jun 2026 \u2014 Present", bullets:[
      "Build end-to-end ML pipelines on 100K+ California MLS sold-property records for home-price prediction.",
      "Iterate on XGBoost valuation models with cross-validation and feature-importance analysis, tracking MdAPE, RMSE, MAE, and R\u00b2 across experiments.",
      "Own ingestion, cleaning, feature engineering, and leakage prevention, documenting how data quality maps to model performance."
    ]},
    { featured:true, role:"Undergraduate Course Staff (UCS1)", company:"UC Berkeley \u2014 CS 61A", location:"Berkeley, CA", dates:"Jun 2026 \u2014 Present", bullets:[
      "Serve as course staff for CS 61A, Berkeley's 250+-student introductory computer science course, owning the grading focus area across Gradescope, autograders, regrades, and extensions.",
      "Run 2 weekly exam-prep sections and office hours and support lab and discussion sections, helping students work through the material."
    ]},
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
      "Led educational tours for prospective Environmental Science students and helped plant wildflowers across campus."
    ]}
  ],
  projects: [
    { featured:true, title:"Movie Genre Classification", tag:"NLP \u00b7 Embeddings", stack:"Python, PyTorch, SentenceTransformers, scikit-learn",
      repo:"https://github.com/vdkarthikeya/movie-genre-classification-nlp",
      home:[
        "Multi-label genre prediction on 42K+ films across 20+ genres using MiniLM, MPNet, and e5-large-v2 embeddings.",
        "Rare-genre cutoffs and per-label threshold tuning lifted Macro F1 from 0.48 to 0.66 (Micro F1 0.68).",
        "A simple Logistic Regression beat the boosted trees while training ~12\u00d7 faster."
      ],
      full:[
        "Built a multi-label genre prediction system over 42K+ MovieLens/TMDB films across 20+ genres, parsing nested IMDb metadata with regex and engineering log budget/revenue and temporal release features.",
        "Generated semantic embeddings of each film's title, tagline, and overview with MiniLM, MPNet, and e5-large-v2, then compared them as inputs to Logistic Regression, XGBoost, and LightGBM.",
        "Tackled heavy class imbalance with rare-genre cutoffs and per-label threshold tuning, lifting Macro F1 from 0.48 to 0.66 (Micro F1 0.68).",
        "Found that Logistic Regression on 1024-dim e5 embeddings outperformed the boosted trees while training roughly 12\u00d7 faster \u2014 a deliberate accuracy-vs-cost takeaway."
      ]
    },
    { featured:true, title:"Housing Price & Assessment Bias", tag:"Regression \u00b7 Bias", stack:"pandas, NumPy, scikit-learn", repo:null,
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
    { featured:true, title:"Email Spam / Ham Classifier", tag:"Classification", stack:"scikit-learn, pandas, NumPy", repo:null,
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
    { featured:false, title:"California Housing Regression", tag:"Regression", stack:"Python, scikit-learn",
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
    { featured:false, title:"Scheme Interpreter", tag:"Interpreters", stack:"Python", repo:null,
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
    { featured:false, title:"NGordnet", tag:"Java \u00b7 Graphs", stack:"Java", repo:null,
      home:[
        "Java tool linking a WordNet semantic graph with Google NGrams historical word-frequency data.",
        "Built a custom directed graph to return hyponyms and surface the k most popular words over time."
      ],
      full:[
        "Built a Java tool for exploring how word meaning and usage relate over time, combining a WordNet semantic graph with Google NGrams historical word-frequency data.",
        "Parsed the synset/hyponym dataset and implemented a custom directed graph (no external graph libraries) that returns all hyponyms of a word or set of words.",
        "Implemented NGramMap/TimeSeries structures that parse the frequency files once and answer historical-trend queries efficiently.",
        "Combined the two to surface the k most historically popular words within a semantic category, served through a small web interface."
      ]
    },
    { featured:false, title:"Build Your Own World", tag:"Java \u00b7 Systems", stack:"Java", repo:null,
      home:[
        "Java engine generating explorable 2D tile worlds from a seed, deterministic per seed.",
        "Interactive WASD movement plus save/load persistence restoring exact world state."
      ],
      full:[
        "Designed and built a Java engine that generates explorable 2D tile worlds from a seed, using a pseudorandom generator so the same seed always reproduces the exact same world.",
        "Generated distinct rooms and connecting hallways with randomized counts, sizes, and positions drawn onto a tile grid.",
        "Implemented interactive WASD movement and save/load persistence that restores the world \u2014 including the random-number-generator state \u2014 exactly as it was left.",
        "Emphasized large-project architecture, object-oriented design, and deterministic, testable generation."
      ]
    }
  ],
  skills: [
    { group:"Languages", items:["Python","Java","C++","SQL","Scheme"] },
    { group:"Libraries", items:["pandas","NumPy","Matplotlib","seaborn","scikit-learn","XGBoost","LightGBM","SentenceTransformers"] },
    { group:"Tools", items:["Git","GitHub","VS Code","IntelliJ","Jupyter","Google Colab","MATLAB"] }
  ]
};

const ICON = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>'
};
