export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Fast, accessible web applications engineered for scale and clarity.",
    icon: "code",
  },
  {
    id: "software",
    title: "Custom Software",
    description: "Tailored software solutions for long-term reliability.",
    icon: "cog",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that learn from real data and support decision-making.",
    icon: "brain",
  },
  {
    id: "commerce",
    title: "E-Commerce",
    description: "Secure and scalable e-commerce platforms for your business.",
    icon: "cart",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Human-centered design that balances beauty with usability.",
    icon: "pen",
  },
  {
    id: "transform",
    title: "Digital Transformation",
    description:
      "Modernizing legacy systems and guiding organizations through technology-led change.",
    icon: "chart",
  },
] as const;

export type Project = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly image: string;
  readonly url?: string;
};

export const projects: readonly Project[] = [
  {
    id: "shiftdraw",
    title: "Shiftdraw",
    description: "A modern platform for creative professionals and teams.",
    tags: ["Web App", "React", "Tailwind"],
    image: "shiftdraw",
  },
  {
    id: "propx",
    title: "PropX",
    description: "AI-powered analytics and visualization platform.",
    tags: ["AI/ML", "Python", "MongoDB"],
    image: "propx",
  },
  {
    id: "sarvacart",
    title: "SarvaCart",
    description: "E-commerce platform for growing businesses.",
    tags: ["E-commerce", "React", "Node.js"],
    image: "sarvacart",
  },
  {
    id: "obsidian",
    title: "OBSIDIAN-X",
    description: "AI-powered analytics and visualization platform.",
    tags: ["AI/ML", "Python", "FastAPI"],
    image: "obsidian",
  },
] as readonly Project[];

export const processSteps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand your goals, challenges and audience.",
    icon: "search",
  },
  {
    num: "02",
    title: "Strategize",
    description: "Plan the right approach with technical and creative direction.",
    icon: "map",
  },
  {
    num: "03",
    title: "Design",
    description: "Create intuitive and engaging user experiences.",
    icon: "pen",
  },
  {
    num: "04",
    title: "Develop",
    description: "Build scalable, secure and high-performance solutions.",
    icon: "code",
  },
  {
    num: "05",
    title: "Launch",
    description: "Deploy and ensure everything runs smoothly.",
    icon: "rocket",
  },
  {
    num: "06",
    title: "Optimize",
    description: "Monitor, improve and scale for long-term success.",
    icon: "activity",
  },
] as const;

export type Technology = {
  readonly id: string;
  readonly name: string;
};

export type TechnologyCategory = {
  readonly id: string;
  readonly title: string;
  readonly technologies: readonly Technology[];
  readonly optional?: boolean;
};

export const technologyCategories = [
  {
    id: "frontend",
    title: "Frontend",
    technologies: [
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "ts", name: "TypeScript" },
      { id: "tw", name: "Tailwind CSS" },
      { id: "react-native", name: "React Native" },
      { id: "flutter", name: "Flutter" },
    ],
  },
  {
    id: "creative-motion",
    title: "Creative & Motion",
    technologies: [
      { id: "fm", name: "Framer Motion" },
      { id: "gsap", name: "GSAP" },
      { id: "three", name: "Three.js" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    technologies: [
      { id: "java", name: "Java" },
      { id: "spring-boot", name: "Spring Boot" },
      { id: "node", name: "Node.js" },
      { id: "python", name: "Python" },
      { id: "fastapi", name: "FastAPI" },
      { id: "ai-llm", name: "AI / LLM APIs" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Caching",
    technologies: [
      { id: "pg", name: "PostgreSQL" },
      { id: "redis", name: "Redis" },
      { id: "mongo", name: "MongoDB" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    technologies: [
      { id: "docker", name: "Docker" },
      { id: "kubernetes", name: "Kubernetes" },
      { id: "github-actions", name: "GitHub Actions" },
      { id: "aws", name: "AWS" },
      { id: "gcp", name: "Google Cloud" },
      { id: "kafka", name: "Kafka" },
    ],
  },
  {
    id: "security",
    title: "Security & Authentication",
    technologies: [
      { id: "oauth", name: "OAuth 2.0" },
      { id: "jwt", name: "JWT" },
      { id: "rbac", name: "Role-Based Access Control (RBAC)" },
      { id: "encryption", name: "Encryption in Transit and at Rest" },
    ],
  },
] as const satisfies readonly TechnologyCategory[];

export type TechnologyId =
  (typeof technologyCategories)[number]["technologies"][number]["id"];

export const projectTypes = [
  "Web Development",
  "Custom Software",
  "AI & Machine Learning",
  "E-Commerce",
  "UI/UX Design",
  "Digital Transformation",
  "Other",
] as const;

export const aboutHighlights = [
  { title: "Innovative Solutions", icon: "spark" },
  { title: "Scalable Architecture", icon: "nodes" },
  { title: "Long-Term Partnerships", icon: "handshake" },
] as const;
