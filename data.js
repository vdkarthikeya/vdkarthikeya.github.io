/* Edit your content here. Everything the site shows comes from this file. */
const siteData = {
  "name": "Dhana Karthikeya Ventrapragada",
  "short": "Karthik",
  "photo": "profile.JPG",
  "resume": "https://vdkarthikeya.github.io/Resume.pdf",
  "contact": {
    "email": "vdkarthikeya@berkeley.edu",
    "github": "https://github.com/vdkarthikeya",
    "linkedin": "https://www.linkedin.com/in/vdkarthikeya"
  },
  "current": [
    "Course Staff (Tutor/Reader), CDSS 198",
    "Transfer Representative, CDSS Dean's Cabinet",
    "Fung Fellow, Health + Innovation Track"
  ],
  "hero": {
    "line": "Senior at UC Berkeley studying Data Science, with a concentration in Applied Mathematics. I'm into AI/ML and building with data."
  },
  "greeting": "Hi, I'm Karthik.",
  "intro": [
    "I'm a senior at <a class='hl' href='https://www.berkeley.edu' target='_blank' rel='noopener'>UC Berkeley</a> studying <a class='hl' href='https://cdss.berkeley.edu/dsus' target='_blank' rel='noopener'>Data Science</a>, concentrating in Applied Mathematics, and a <span class='hl'>proud transfer student</span>. I started at De Anza College before Berkeley, mostly figuring out the path on my own.",
    "That's a big part of why I teach. I'm on undergraduate course staff for CDSS 198: Transfer Seminar and CDSS 198: Career Seminar, and I'm a Fung Fellow building <a class='hl' href='#projects' data-go='projects'>Next Step</a>, a free tool that helps wildfire survivors write to their insurer. I'm into AI/ML and still exploring where I fit."
  ],
  "about": {
    "bio": [
      "I'm a senior at <a class='ul' href='https://www.berkeley.edu' target='_blank' rel='noopener'>UC Berkeley</a> studying <a class='ul' href='https://cdss.berkeley.edu/dsus' target='_blank' rel='noopener'>data science</a>, graduating in December 2027. I transferred in from De Anza College, where I earned an A.S. in Mathematics and Computer Science.",
      "I grew up in Vijayawada, India, where going to college in the U.S. was almost unheard of. I started at community college with no roadmap and figured out most of the path on my own. My family, especially my father, believed in me long before I did.",
      "I'm currently building deep technical expertise in data science and machine learning. As a transfer student myself, I help other transfers find their footing."
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "B.A. in Data Science, Conc. in Applied Mathematics",
        "gpaValue": "3.85",
        "gpaMax": "4.00",
        "location": "Berkeley, CA",
        "dates": "Aug 2025 - Dec 2027",
        "courses": true,
        "logoDomain": "berkeley.edu"
      },
      {
        "school": "De Anza College",
        "degree": "A.S. in Mathematics and Computer Science",
        "gpaValue": "3.92",
        "gpaMax": "4.00",
        "location": "Cupertino, CA",
        "dates": "Sep 2023 - Jun 2025",
        "logoDomain": "deanza.edu"
      }
    ],
    "terms": [
      {
        "term": "Fall 2025",
        "rows": [
          {
            "code": "CS 61A",
            "title": "Structure & Interpretation of Computer Programs",
            "grade": "A−"
          },
          {
            "code": "DATA C8",
            "title": "Foundations of Data Science",
            "grade": "A"
          }
        ]
      },
      {
        "term": "Spring 2026",
        "rows": [
          {
            "code": "CS 61B",
            "title": "Data Structures",
            "grade": "A−"
          },
          {
            "code": "DATA C100",
            "title": "Principles & Techniques of Data Science",
            "grade": "A−"
          },
          {
            "code": "DATA C140",
            "title": "Probability for Data Science",
            "grade": "A"
          },
          {
            "code": "DATA 198",
            "title": "Introduction to Data Science",
            "grade": "P"
          },
          {
            "code": "IEOR 198",
            "title": "Introduction to Quantitative Finance",
            "grade": "P"
          }
        ]
      },
      {
        "term": "Summer 2026",
        "rows": [
          {
            "code": "CYPLAN 101",
            "title": "Introduction to Urban Data Analytics",
            "grade": "A"
          }
        ]
      },
      {
        "term": "Fall 2026",
        "rows": [
          {
            "code": "CS 189",
            "title": "Introduction to Machine Learning",
            "grade": "IP",
            "muted": true
          },
          {
            "code": "CS 194",
            "title": "Functional Programming & AI-Assisted App Development",
            "grade": "IP",
            "muted": true
          },
          {
            "code": "DATA C101",
            "title": "Data Engineering",
            "grade": "IP",
            "muted": true
          },
          {
            "code": "ENGIN 188",
            "title": "Fung Fellowship Seminar: Health + Innovation",
            "grade": "IP",
            "muted": true
          }
        ]
      }
    ]
  },
  "experience": [
    {
      "group": "Work Experience",
      "items": [
        {
          "company": "Fung Fellowship at UC Berkeley",
          "url": "https://funginstitute.berkeley.edu/",
          "role": "Fung Fellow, Health + Innovation Track",
          "dates": "Aug 2026 - Present",
          "bullets": [
            "Work on a three-person team with mentorship from The After Collective, a nonprofit building a free AI recovery coach for disaster survivors, as part of the Fung Fellowship's Health + Innovation track.",
            "Led and ran interviews and prototype sessions with wildfire survivors, recovery group leaders and insurance professionals, and helped narrow the team's focus to the person who runs a household's insurance claim.",
            "Built <a class='ul' href='#projects' data-go='projects'>Next Step</a>, a hosted website that helps survivors write a letter to their insurer with one clear ask, and rebuilt its start screen around the letter after users did not find the reply helper on their own.",
            "Serve as DRI of the week and keep the team's documentation current, including the main project doc, running notes, weekly status updates and shipped log."
          ],
          "logo": "assets/logos/fung.png"
        },
        {
          "company": "IDX Exchange",
          "url": "https://www.idxexchange.com/",
          "role": "Data Science Intern",
          "dates": "Jun 2026 - Aug 2026",
          "bullets": [
            "Developed a model that predicts California home sale prices, trained on 71K sales cleaned from 143K raw records, with typical predictions within 8.6% of the actual price.",
            "Evaluated four model types and selected XGBoost, finding that letting it learn finer patterns improved accuracy more than training it longer.",
            "Identified and fixed a data leakage bug in which test data was contaminating training and inflating early results, so the final model was judged fairly.",
            "Reduced a simpler model's error from 29% to 15% by adding each home's school district as a feature."
          ],
          "logoDomain": "idxexchange.com"
        },
        {
          "company": "Guang Labs",
          "role": "Engineering Intern",
          "dates": "May 2026 - Aug 2026",
          "bullets": [
            "Engineered a service for an AI video startup that analyzes a user's image or video and labels its content type (sports, gaming, talking, music) using Google's Gemini.",
            "Implemented a safeguard that detects uncertain or broken model responses and retries with different clips from the video, up to 10 attempts, to produce dependable labels.",
            "Validated the service end to end with real video clips after code review and expanded the automated test suite from 38 to 86 tests.",
            "Designed an in-app notification bell that alerts users when their video is ready."
          ],
          "logoDomain": "guanglabs.com",
          "url": "https://guanglabs.com/"
        },
        {
          "company": "Kirsch Center, De Anza",
          "url": "https://www.deanza.edu/kirsch/",
          "role": "Lab Technician Assistant",
          "dates": "Dec 2023 - Mar 2024",
          "bullets": [
            "Contributed to a team of about 30 restoring the Kirsch Center's sustainability spaces."
          ],
          "logoDomain": "deanza.edu"
        }
      ]
    },
    {
      "group": "Teaching",
      "items": [
        {
          "company": "Computer Science Mentors",
          "role": "Junior Mentor, CS 88 / DATA C88C",
          "dates": "Sep 2026 - Present",
          "bullets": [
            "Teach a weekly section that reinforces core concepts and strengthens transfer students' performance in the course."
          ],
          "logo": "assets/logos/csm.png"
        },
        {
          "company": "CDSS 198 Transfer Seminar",
          "role": "Course Staff (Tutor)",
          "dates": "Aug 2026 - Present",
          "bullets": [
            "Support transfer students' academic transition through study groups, office hours and tutoring.",
            "Lead exam reviews for CS and DS classes."
          ],
          "logo": "assets/logos/cdss.png"
        },
        {
          "company": "CDSS 198 Careers in Data Science & Computing",
          "role": "Course Staff (Reader)",
          "dates": "Aug 2026 - Present",
          "bullets": [
            "Review and critique resumes and cover letters to strengthen students' internship and job applications.",
            "Coordinate alumni and industry speakers for the careers seminar."
          ],
          "logo": "assets/logos/cdss.png"
        },
        {
          "company": "CS 61A",
          "role": "Course Staff (UCS1)",
          "dates": "Jun 2026 - Aug 2026",
          "bullets": [
            "Taught 4 weekly exam-prep sections, held office hours, helped write midterm and final questions, and led final review sessions."
          ],
          "logo": "assets/logos/eecs.png"
        },
        {
          "company": "Mentors at De Anza",
          "role": "Mentor",
          "dates": "Sep 2024 - Apr 2025",
          "bullets": [
            "Advised a first-generation nursing student on course planning, transfer credit and career pathways."
          ],
          "logo": "assets/logos/mentors-deanza.png"
        }
      ]
    },
    {
      "group": "Leadership",
      "items": [
        {
          "company": "CDSS Dean's Cabinet",
          "role": "Transfer Representative",
          "dates": "Sep 2026 - Present",
          "bullets": [
            "Represent transfer students to the associate dean and CDSS faculty, advocating for their needs across CDSS majors."
          ],
          "logo": "assets/logos/cdss.png"
        },
        {
          "company": "Boundary.0",
          "role": "Secretary",
          "dates": "Apr 2024 - Jun 2025",
          "bullets": [
            "Helped launch a student club connecting students with industry professionals.",
            "Organized events that grew membership to 120+."
          ],
          "logo": "assets/logos/boundary0.png"
        },
        {
          "company": "De Anza Student Government",
          "role": "Programs Committee Intern",
          "dates": "Feb 2024 - Feb 2025",
          "bullets": [
            "Planned and executed 5+ major campus events, including Club Day and Homecoming."
          ],
          "logo": "assets/logos/dasg.png"
        },
        {
          "company": "Indian Students Association, De Anza",
          "role": "Events Coordinator",
          "dates": "Oct 2023 - Feb 2025",
          "bullets": [
            "Directed the club's flagship event, a Diwali celebration with 200+ attendees.",
            "Coordinated 30+ volunteers and managed sponsorships and the event budget."
          ],
          "logo": "assets/logos/isa-deanza.png"
        }
      ]
    }
  ],
  "projects": [
    {
      "title": "Next Step",
      "line": "Next Step is a free website that helps California wildfire survivors deal with the aftermath of a disaster. It is built with plain JavaScript on Cloudflare Pages, with a hosted Llama model on Cloudflare Workers AI grounded in 15 numbered source notes, and its chat replies stream as they are written.",
      "when": "",
      "site": "https://next-step-2fg.pages.dev",
      "repo": "https://github.com/nextstep-wildfire/next-step",
      "media": {
        "type": "video",
        "src": "assets/projects/next-step/demo.mp4",
        "poster": "assets/projects/next-step/poster.webp",
        "fallback": "assets/projects/next-step/desk-letter.webp",
        "alt": "Next Step on a desktop browser, from the home page to a finished letter to an insurer"
      },
      "note": "Student prototype. General information, not legal or insurance advice."
    },
    {
      "title": "Hindsight",
      "line": "I co-designed Hindsight, a transfer planner that shows California community college students exactly which classes count toward their major. It matches courses against official ASSIST agreements with deterministic rules, and 10 transfer students who tried it said it would have helped them.",
      "when": "",
      "repo": "https://github.com/Cal-Hacks-2026/Hindsight",
      "media": {
        "type": "video",
        "src": "assets/projects/hindsight/demo.mp4",
        "poster": "assets/projects/hindsight/poster.webp",
        "fallback": "assets/projects/hindsight/card.webp",
        "alt": "Hindsight onboarding: a demo student picks De Anza College, San Jose State University and the Data Science B.S. major"
      }
    },
    {
      "title": "SightLine",
      "line": "SightLine turns a day of smart-glasses footage into a 60-second recap. On the ML team, I'm building the CLIP embeddings that group similar clips and the scoring pipeline that ranks the best moments.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/sightline-ml-public",
      "media": {
        "type": "schematic",
        "alt": "Schematic of the SightLine pipeline: 5-second windows, CLIP embeddings, three blended scores and a 60-second recap strip"
      },
      "note": "Team project. My pull requests are open and not merged yet."
    },
    {
      "title": "Movie Genre Classification",
      "line": "This model predicts a movie's genres from its plot across 42K+ films. It compares MiniLM, MPNet and e5-large-v2 embeddings with Logistic Regression, XGBoost and LightGBM, and Logistic Regression won.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/movie-genre-classification-nlp",
      "media": {
        "type": "image",
        "src": "assets/projects/movie-genre-classification/card.webp",
        "alt": "Bar chart of Micro and Macro F1 across five model setups, rising from MiniLM to e5-large with a tuned threshold"
      }
    },
    {
      "title": "Housing Price & Assessment Bias",
      "hidden": true,
      "line": "A model that estimates home values from 200K+ Chicago-area records and checks which homes get over- or under-valued.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/housing-price-assessment-bias-public"
    },
    {
      "title": "SB 79 Transit Housing Analysis",
      "line": "With a co-author, I built a GIS analysis of where Los Angeles can build denser housing near transit under California's SB 79. We flagged zoning within a half mile of qualifying rail and bus rapid transit stops, then checked each area against fire hazard and displacement risk.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/sb79-tod-analysis-public",
      "media": {
        "type": "video",
        "src": "assets/projects/sb79-transit-housing/demo.mp4",
        "poster": "assets/projects/sb79-transit-housing/poster.webp",
        "fallback": "assets/projects/sb79-transit-housing/card.webp",
        "alt": "Scrolling through the SB 79 StoryMap: the cover, the introduction, the policy background and the start of the methods"
      }
    },
    {
      "title": "Email Spam Classifier",
      "hidden": true,
      "line": "A spam filter that correctly sorts 92.1% of emails it had never seen.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/spam-ham-classifier-public"
    },
    {
      "title": "California Housing Regression",
      "hidden": true,
      "line": "A model that predicts home values across 20K+ California neighborhoods.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/california-housing-regression"
    },
    {
      "title": "Scheme Interpreter",
      "line": "I built a Scheme interpreter from scratch in Python. It evaluates expressions through a recursive eval and apply cycle with lexically scoped environments, so closures and recursive procedures work.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/scheme-interpreter-public",
      "media": {
        "type": "terminal",
        "poster": "assets/projects/scheme-interpreter/card.webp",
        "alt": "Terminal session of the Scheme interpreter defining a recursive factorial, mapping it over a list and composing two lambdas",
        "lines": [
          [
            "$",
            "python3 scheme.py"
          ],
          [
            ">",
            "(define (fact n) (if (= n 0) 1 (* n (fact (- n 1)))))"
          ],
          [
            "=",
            "fact"
          ],
          [
            ">",
            "(fact 20)"
          ],
          [
            "=",
            "2432902008176640000"
          ],
          [
            ">",
            "(map fact '(1 2 3 4 5 6))"
          ],
          [
            "=",
            "(1 2 6 24 120 720)"
          ],
          [
            ">",
            "(define (compose f g) (lambda (x) (f (g x))))"
          ],
          [
            "=",
            "compose"
          ],
          [
            ">",
            "((compose (lambda (x) (* x x)) (lambda (x) (+ x 1))) 4)"
          ],
          [
            "=",
            "25"
          ]
        ]
      }
    },
    {
      "title": "Ngordnet",
      "hidden": true,
      "line": "A word tool that finds more specific words under a word like \"food\" and ranks them by how often they appeared in books.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/ngordnet-public"
    },
    {
      "title": "Build Your Own World",
      "line": "This is a procedurally generated dungeon game in Java. Enemies chase you along the shortest path using BFS, and touching one starts a quiz battle on CS 61B concepts.",
      "when": "",
      "repo": "https://github.com/vdkarthikeya/build-your-own-world-public",
      "media": {
        "type": "video",
        "src": "assets/projects/build-your-own-world/demo.mp4",
        "poster": "assets/projects/build-your-own-world/poster.webp",
        "fallback": "assets/projects/build-your-own-world/card.webp",
        "alt": "Top-down view of a generated dungeon with rooms, hallways, enemies, health kits and a shortest path from the player"
      }
    }
  ],
  "sections": [
    [
      "home",
      "About",
      "About"
    ],
    [
      "experience",
      "Experience",
      "Experience"
    ],
    [
      "projects",
      "Projects",
      "Projects"
    ],
    [
      "courses",
      "Courses",
      "Courses"
    ]
  ]
};

const ICON = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>'
};
