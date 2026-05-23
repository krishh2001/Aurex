/** Portfolio page — project showcase (edit copy, images & live URLs here) */

export const PORTFOLIO_CATEGORIES = ["All", "Websites", "Web Apps", "Mobile", "Cloud"];

export const PORTFOLIO_PAGE = {
  badge: "Portfolio",
  title: "Projects we've delivered",
  lead:
    "A selection of websites, applications, and cloud work shipped for startups and enterprises across India and abroad.",
  filterLabel: "Filter by type",
  emptyTitle: "No projects in this category",
  emptyText: "Try another filter to see more of our work.",
  liveCta: "View live site",
  quoteCta: "Get a quote",
  viewMoreCta: "View more",
  initialVisible: 6,
  loadMoreStep: 6,
};

export const PORTFOLIO_STATS = [
  { value: "180+", label: "Projects delivered" },
  { value: "12+", label: "Industries served" },
  { value: "96%", label: "On-time delivery" },
  { value: "40+", label: "Active tech stacks" },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "finledger",
    title: "FinLedger Console",
    client: "FinTech · B2B SaaS",
    category: "Web Apps",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "FinLedger analytics dashboard interface",
    liveUrl: "https://mui.com/store/previews/minimal-dashboard/",
    excerpt:
      "Multi-tenant finance dashboard with role-based access, real-time reporting, and audit-ready exports for operations teams.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "novamart",
    title: "NovaMart Commerce",
    client: "Retail · E-commerce",
    category: "Web Apps",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "NovaMart e-commerce storefront",
    liveUrl: "https://demo.vercel.store/",
    excerpt:
      "Headless storefront with inventory sync, payment gateways, and a merchant dashboard for catalog and order management.",
    tech: ["Next.js", "Stripe", "Redis", "Vercel"],
  },
  {
    id: "healthpulse",
    title: "HealthPulse Portal",
    client: "Healthcare · Clinics",
    category: "Web Apps",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "HealthPulse patient portal screens",
    liveUrl: "https://demos.creative-tim.com/soft-ui-dashboard-pro-react/",
    excerpt:
      "Patient booking, EMR-friendly workflows, and staff scheduling with HIPAA-minded security practices and uptime monitoring.",
    tech: ["React", "TypeScript", "Azure", "Docker"],
  },
  {
    id: "techflow",
    title: "TechFlow Corporate Site",
    client: "IT Services · Enterprise",
    category: "Websites",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "TechFlow corporate marketing website",
    liveUrl: "https://nextjs.org/",
    excerpt:
      "High-performance marketing site with CMS-driven pages, lead capture, and localized content for multiple regions.",
    tech: ["React", "Vite", "Headless CMS", "CDN"],
  },
  {
    id: "eduspark",
    title: "EduSpark LMS",
    client: "Education · EdTech",
    category: "Web Apps",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "EduSpark learning management platform",
    liveUrl: "https://demos.creative-tim.com/notus-react/",
    excerpt:
      "Learning platform with course modules, assessments, progress tracking, and instructor analytics for cohort-based programs.",
    tech: ["React", "Node.js", "MongoDB", "S3"],
  },
  {
    id: "logitrack",
    title: "LogiTrack Fleet",
    client: "Logistics · Operations",
    category: "Mobile",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "LogiTrack mobile fleet tracking app",
    liveUrl: "https://expo.dev/",
    excerpt:
      "Driver and dispatcher apps with live trip status, proof-of-delivery capture, and integration with existing ERP web services.",
    tech: ["React Native", "Maps API", "Node.js", "PostgreSQL"],
  },
  {
    id: "cloudscale",
    title: "CloudScale Migration",
    client: "SaaS · Infrastructure",
    category: "Cloud",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "CloudScale cloud infrastructure architecture",
    liveUrl: "https://aws.amazon.com/solutions/",
    excerpt:
      "Lift-and-optimize migration from on-prem VMs to AWS with CI/CD pipelines, cost dashboards, and disaster-recovery runbooks.",
    tech: ["AWS", "Terraform", "GitHub Actions", "CloudWatch"],
  },
  {
    id: "securegate",
    title: "SecureGate IAM",
    client: "Cybersecurity · Enterprise",
    category: "Web Apps",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "SecureGate identity management dashboard",
    liveUrl: "https://demos.creative-tim.com/argon-dashboard-react/",
    excerpt:
      "Identity and access management UI with SSO integrations, policy editor, and security event timelines for IT administrators.",
    tech: ["React", "OAuth 2.0", "Python", "Kubernetes"],
  },
  {
    id: "propview",
    title: "PropView Realty",
    client: "Real Estate · Marketing",
    category: "Websites",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "PropView real estate listings website",
    liveUrl: "https://tailwindui.com/templates",
    excerpt:
      "Property listing site with map search, enquiry funnels, and CRM handoff for sales teams managing high-value inventory.",
    tech: ["React", "Maps", "Node.js", "MySQL"],
  },
];
