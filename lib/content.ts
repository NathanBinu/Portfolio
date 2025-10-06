export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  completedAt: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  publishedAt: string
  updatedAt: string
  author: string
  tags: string[]
  category: string
  featured: boolean
  readingTime: number
  image: string
}

export interface Experience {
  positions: Array<{
    id: string
    title: string
    company: string
    location: string
    type: string
    startDate: string
    endDate: string | null
    current: boolean
    description: string
    achievements: string[]
    technologies: string[]
  }>
  education: Array<{
    id: string
    degree: string
    institution: string
    location: string
    startDate: string
    endDate: string
    gpa?: string
    honors?: string[]
    relevantCourses?: string[]
  }>
  skills: {
    frontend: string[]
    backend: string[]
    tools: string[]
    concepts: string[]
  }
}

// Sample data - in a real app, this would come from a CMS or API
const projects: Project[] = [
  {
    slug: "parking-app",
    title: "YorkU Parking App Management",
    description: "Desktop application for parking bookings and admin management with real-time data sync.",
    longDescription:
      "A Java Swing client backed by a Spring Boot REST API, implementing secure authentication (Firebase Auth) and live data sync with Firestore. Built with strong OOP principles and design patterns, and quality-assured via JUnit test suites and Randoop-generated tests in a TDD workflow.",
    image: "/YU_Parking_Image.png",
    technologies: [
      "Java",
      "TDD",
      "Firestore",
      "Swing",
      "Firebase Auth",
      "JUnit",
      "Randoop",
      "OOP",
      "Spring Boot",
      "Design Patterns",
      "Software development life cycle",
    ],
    category: "Web Application",
    featured: true,
    githubUrl: "https://github.com/NathanBinu/ParkingApp",
    completedAt: "2025-04-20",
  },
  {
    slug: "reddit-sentiment-analyzer",
    title: "AI Reddit Sentiment Analyzer",
    description: "NLP pipeline and Streamlit app classifying Reddit posts with TF-IDF + Logistic Regression and DistilBERT.",
    longDescription:
      "Scraped and cleaned 5,000+ Reddit posts (Regex, NLTK/VADER). Trained a TF-IDF + Logistic Regression baseline with GridSearchCV, then fine-tuned DistilBERT via HuggingFace Trainer, achieving ~85% accuracy and 0.83 weighted F1. Exposed insights and comparisons in an interactive Streamlit dashboard.",
    image: "/AI_Reddit_Sentiment_Project.png",
    technologies: [
      "Python",
      "Scikit-learn",
      "NLTK",
      "VADER",
      "HuggingFace Transformers",
      "DistilBERT",
      "Pandas",
      "Reddit API",
      "Streamlit",
      "Jupyter Notebooks",
      "Matplotlib",
    ],
    category: "Machine Learning Modeling",
    featured: true,
    githubUrl: "https://github.com/NathanBinu/sentiment-analyzer",
    completedAt: "2025-06-20",
  },
  {
    slug: "AI-real-estate-price-predictor",
    title: "AI Real Estate Price Predictor [In Progress]",
    description: "A machine learning pipeline that predicts U.A.E real-estate prices using scraped property data and advanced regression models.",
    longDescription:
      "This project implements an end-to-end AI pipeline for real estate price prediction. Property listings are scraped from Property Finder using Selenium, then cleaned, preprocessed, and feature-engineered to create robust training data. An XGBoost regression model (trained on log-transformed prices) is used to generate predictions. The pipeline includes automated evaluation with MAE, RMSE, and R² metrics, as well as visualization scripts for feature importance and residual analysis. The project demonstrates data engineering, model training, evaluation, and deployment-ready prediction scripts.",
    image: "/AI_Real_Estate_Project.png",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Selenium",
      "Jupyter Notebooks",
      "Matplotlib"
    ],
    category: "Machine Leaning Modeling",
    featured: true,
    githubUrl: "https://github.com/example/weather-dashboard", // Has to be incorporated!!!!!!
    completedAt: "2025-07-23",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with smooth animations.",
    longDescription:
      "This portfolio is built with Next.js and React, styled with Tailwind CSS 4 and shadcn/ui (Radix UI under the hood). It features a responsive layout, page transitions and scroll-reveal animations via Framer Motion, accessible mobile navigation, dark/light theme toggle, structured SEO (OpenGraph + JSON-LD), and content driven pages (projects loaded from JSON). It also includes a Projects grid with filters, detailed project pages, and Vercel Analytics for basic insights.",
    image: "/modern-portfolio-website.png",
    technologies: [
      "Next.js",
      "React.js",
      "Typescript",
      "Framer Motion",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI"
    ],
    category: "Website",
    featured: false,
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
    completedAt: "2025-09-30",
  },
  {
    slug: "ML-Agent",
    title: "Autonomous ML Agent",
    description: "An end-to-end AutoML system that trains, optimizes, and serves machine learning models on tabular datasets.",
    longDescription:
      "The Autonomous ML Agent ingests a CSV dataset, profiles numeric and categorical features, applies preprocessing (imputation, scaling, encoding), and searches across multiple model families using Optuna for hyperparameter optimization. It evaluates models with cross-validation under a fixed time/trial budget, exports the best pipeline as reusable artifacts, and serves predictions through a FastAPI REST API with Swagger UI. The project demonstrates automated model selection, reproducible pipelines, and deployable ML services.",
    image: "/Autonomous_ML_Agent_Project.png",
    technologies: [
      "Python",
      "Scikit-learn",
      "Optuna",
      "Pandas",
      "FastAPI",
      "Uvicorn",
      "Joblib"
    ],
    category: "Machine Leaning Modeling",
    featured: false,
    githubUrl: "https://github.com/NathanBinu/Autonomous-ML-Agent",
    completedAt: "2025-09-10",
  },
]

const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    description: "A comprehensive guide to building modern web applications with Next.js 14 and the App Router.",
    content:
      "Next.js 14 introduces powerful new features that make building web applications faster and more efficient...",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    author: "Alex Johnson",
    tags: ["Next.js", "React", "Web Development", "Tutorial"],
    category: "Tutorial",
    featured: true,
    readingTime: 8,
    image: "/nextjs-tutorial.jpg",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for 2024",
    description: "Explore the latest CSS features and techniques that are shaping modern web design.",
    content: "CSS continues to evolve with new features that make styling more powerful and intuitive...",
    publishedAt: "2023-12-15",
    updatedAt: "2023-12-15",
    author: "Alex Johnson",
    tags: ["CSS", "Web Design", "Frontend", "Modern Web"],
    category: "Design",
    featured: true,
    readingTime: 6,
    image: "/modern-css-design.jpg",
  },
]

const experience: Experience = {
  positions: [
    {
      id: "1",
      title: "Full-Stack & AI Developer",
      company: "PharmShift",
      location: "Toronto, ON",
      type: "Part-time",
      startDate: "2025-09-11",
      endDate: null,
      current: true,
      description: "Contributing to the development of AI-driven web applications that support pharmacy OSCE exam preparation and enhance learning outcomes.",
      achievements: [
        "Develop user profiles, case submission workflows, and interactive practice features tailored for students.",
        "Integrate AI-driven speech recognition, chatbot simulations, and automated performance feedback systems.",
        "Enhance learning with quizzes, multilingual support (e.g., French), and study partner matchmaking tools.",
        "Collaborate in a startup environment funded by York University to bridge technology and pharmacy education."
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Machine Learning",
        "AI Speech Recognition",
        "NLP",
        "Chatbots"
      ],
    },
    {
      id: "2",
      title: "Software & AI Engineering Fellow",
      company: "Headstarter",
      location: "Remote, United States",
      type: "Fellowship",
      startDate: "2020-06-01",
      endDate: "null",
      current: true,
      description: "Developed and maintained web applications for early-stage startup.",
      achievements: [
        "Developed an Autonomous ML Agent that automated preprocessing and hyperparameter search (30 trials in <2 min across 6 model families), achieved ~82% CV accuracy on a randomly picked dataset, and deployed as a reusable FastAPI prediction service with exported artifacts for deployment.",
        "Delivering end-to-end ML and full-stack features in short sprints—model training, API wiring, and lightweight dashboards.",
        "Shipping 5+ Python neural network models and ~10 TypeScript/Next.js apps deployed to Vercel/AWS with dev/stage/prod environments.",
        "Implementing LLM chaining, H.P.O, and lightweight fine-tuning across 10+ base models; benchmarking latency vs. accuracy."
      ],
      technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas", "React", "Next.js", "TypeScript", "BrowserBase", "AWS", "Vercel", "Machine Learning", "AI"],
    },
    {
      id: "3",
      title: "System Integrator & IT Intern",
      company: "GetMax.ae",
      location: "Dubai, United Arab Emirates",
      type: "Internship",
      startDate: "2021-07-10",
      endDate: "2021-08-15",
      current: false,
      description: "Developed and maintained web applications for early-stage startup.",
      achievements: [
        "Built the company's main product from MVP to production with 10k+ users",
        "Reduced page load times by 50% through performance optimizations",
        "Implemented real-time features using WebSocket technology",
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
    },
  ],
  education: [
    {
      id: "1",
      degree: "B.Eng. (Honours) in Software Engineering",
      institution: "York University",
      location: "Toronto, Canada",
      startDate: "2022-09-01",
      endDate: "2026-12-05",
      gpa: "3.22/4.00",
      honors: ["Honours B.Eng. program"],
      relevantCourses: [
        "Data Structures & Algorithms",
        "OOP & Design Patterns",
        "Software Development Project",
        "Software Design & Architecture",
        "Operating Systems",
        "Computer Organization & Programming",
        "Introduction to Embedded Systems"
      ],
    },
  ],
  skills: {
    frontend: [
      "React", 
      "Next.js", 
      "Typescript", 
      "Tailwind CSS", 
      "Redux", 
      "Chart.js"],
    backend: [
      "Node.js", 
      "Express.js", 
      "Python", 
      "FastAPI", 
      "PostgreSQL", 
      "MySQL", 
      "Redis", 
      "REST APIs"
    ],
    tools: [
      "Git", 
      "Docker", 
      "AWS", 
      "GCP", 
      "Vercel", 
      "Jupyter Notebooks", 
      "Postman", 
      "Optuna", 
      "VS Code", 
      "HuggingFace"
    ],
    concepts: [
      "Machine Learning",
      "NLP",
      "LLMs",
      "Data Preprocessing",
      "Hyperparameter Tuning",
      "Model Serving",
      "CI/CD",
      "TDD & Testing",
      "Design Patterns",
      "Responsive Design"
    ],
  },
}

// export async function getProjects(): Promise<Project[]> {
//   return projects.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
// }

// CHANGED: make `getProjects` accept an optional `limit` and `featured` filter,
// and sort newest-first by `completedAt`.
export async function getProjects(
  limit?: number,
  opts?: { featured?: boolean }
) {
  // NEW: clone and sort by completed date (newest first)
  let list = projects
    .slice()
    .sort((a, b) => {
      const aTime = a.completedAt ? new Date(a.completedAt).getTime() : 0
      const bTime = b.completedAt ? new Date(b.completedAt).getTime() : 0
      return bTime - aTime
    })

  // NEW: optionally keep only featured projects
  if (opts?.featured) {
    list = list.filter((p) => p.featured)
  }

  // NEW: optionally cap the number of projects returned
  if (typeof limit === "number" && Number.isFinite(limit)) {
    return list.slice(0, limit)
  }

  return list
}


export async function getProject(slug: string): Promise<Project | null> {
  return projects.find((project) => project.slug === slug) || null
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug) || null
}

export async function getExperience(): Promise<Experience | null> {
  return experience
}

export function getProjectCategories(projects: Project[]): string[] {
  const categories = [...new Set(projects.map((project) => project.category))]
  return categories.sort()
}

export function getBlogCategories(posts: BlogPost[]): string[] {
  const categories = [...new Set(posts.map((post) => post.category))]
  return categories.sort()
}
