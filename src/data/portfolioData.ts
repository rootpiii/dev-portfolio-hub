export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; icon: string }[];
}

export const developerInfo = {
  name: "Alex Rivers",
  role: "Senior Software Engineer & System Architect",
  location: "San Francisco, CA",
  status: "Available for select freelance & full-time roles",
  bio: "Passionate about crafting resilient distributed systems, lightning-fast web applications, and intuitive developer experiences. Over 7 years of building scalable software utilized by millions.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  resumeUrl: "#",
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  email: "alex.rivers.dev@example.com",
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Shipped Projects", value: "34" },
    { label: "GitHub Contributions", value: "2,400+" },
    { label: "Open Source Repos", value: "18" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "cloudpulse",
    title: "CloudPulse Observability",
    tagline: "Real-time distributed tracing & metrics platform",
    description: "A high-throughput telemetry ingestion and visualization engine built for modern cloud-native microservice architectures.",
    longDescription: "CloudPulse processes over 50,000 events per second with sub-millisecond latency. Features custom time-series dashboards, automated anomaly detection via lightweight ML models, and alerting integrations with Slack and PagerDuty.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Go", "ClickHouse", "TailwindCSS"],
    metrics: "50k req/sec",
    githubUrl: "https://github.com/example/cloudpulse",
    liveUrl: "https://cloudpulse-demo.example.com",
    featured: true
  },
  {
    id: "nexuside",
    title: "Nexus Collaborative IDE",
    tagline: "Browser-based multi-user code editor with real-time CRDT sync",
    description: "Lightning-fast cloud IDE enabling seamless pair programming with integrated terminal multiplexing and instant preview.",
    longDescription: "Nexus IDE brings VS Code-level editing directly to the browser. Powered by WebSockets and Yjs for conflict-free replicated data types, it supports multi-cursor editing, voice channels, and secure containerized sandbox execution.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "WebSockets", "Node.js", "Docker", "Monaco Editor"],
    metrics: "< 12ms sync latency",
    githubUrl: "https://github.com/example/nexus-ide",
    liveUrl: "https://nexuside-demo.example.com",
    featured: true
  },
  {
    id: "cryptoshield",
    title: "CryptoShield Vault",
    tagline: "Zero-knowledge encrypted secret manager for teams",
    description: "End-to-end encrypted credential management vault ensuring secure secret sharing across distributed engineering squads.",
    longDescription: "CryptoShield implements client-side AES-GCM encryption before data ever hits the server. Includes role-based access control, automated secret rotation, audit logging, and a robust CLI for CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Rust", "PostgreSQL", "TailwindCSS", "WebCrypto"],
    metrics: "Zero-Knowledge",
    githubUrl: "https://github.com/example/cryptoshield",
    liveUrl: "https://cryptoshield-demo.example.com",
    featured: true
  },
  {
    id: "pulsemetrics",
    title: "PulseMetrics Analytics",
    tagline: "Privacy-focused alternative web analytics tool",
    description: "Lightweight, cookie-free web traffic tracker providing actionable insights without compromising user privacy.",
    longDescription: "PulseMetrics offers a 1kB tracking snippet with blazing fast page loads and GDPR-compliant visitor analytics. Features funnel analysis, custom events, and clean exported reports.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Python", "FastAPI", "Redis"],
    metrics: "1kB script size",
    githubUrl: "https://github.com/example/pulsemetrics",
    liveUrl: "https://pulsemetrics-demo.example.com",
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: 95, icon: "atom" },
      { name: "TypeScript / JavaScript", level: 92, icon: "code" },
      { name: "Tailwind CSS / UI Design", level: 90, icon: "palette" },
      { name: "State Management (Zustand/Redux)", level: 88, icon: "layers" }
    ]
  },
  {
    name: "Backend & Distributed Systems",
    skills: [
      { name: "Node.js / Express / NestJS", level: 90, icon: "server" },
      { name: "Go (Golang)", level: 85, icon: "cpu" },
      { name: "Python / FastAPI", level: 82, icon: "terminal" },
      { name: "REST & GraphQL APIs", level: 94, icon: "globe" }
    ]
  },
  {
    name: "Databases & Storage",
    skills: [
      { name: "PostgreSQL / Supabase", level: 90, icon: "database" },
      { name: "Redis / Caching", level: 86, icon: "hard-drive" },
      { name: "MongoDB / ClickHouse", level: 80, icon: "database" }
    ]
  },
  {
    name: "DevOps & Cloud Infrastructure",
    skills: [
      { name: "Docker & Kubernetes", level: 85, icon: "box" },
      { name: "AWS & Vercel Cloud", level: 88, icon: "cloud" },
      { name: "CI/CD Pipelines (GitHub Actions)", level: 90, icon: "git-branch" }
    ]
  }
];

export const terminalCommandsHelp = [
  { cmd: "help", desc: "List all available commands" },
  { cmd: "bio", desc: "Display summary about Alex" },
  { cmd: "skills", desc: "List technical skills and expertise" },
  { cmd: "projects", desc: "Show featured software projects" },
  { cmd: "contact", desc: "Get contact email and social links" },
  { cmd: "clear", desc: "Clear terminal output" }
];