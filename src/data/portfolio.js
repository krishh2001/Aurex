/** Portfolio page — project showcase (edit copy, images & live URLs here) */

const BANNER = (file) => `/portfolio/${file}`;

export const PORTFOLIO_CATEGORIES = ["All", "Websites", "Web Apps", "Mobile", "Cloud"];

export const PORTFOLIO_PAGE = {
  badge: "Portfolio",
  title: "Projects we've delivered",
  lead:
    "Enterprise websites, SaaS platforms, and apps we've shipped—for pharma, FMCG, fitness, recruitment, agencies, and career brands.",
  filterLabel: "Filter by type",
  emptyTitle: "No projects in this category",
  emptyText: "Try another filter to see more of our work.",
  liveCta: "Live site",
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
    id: "livinda",
    title: "Livinda",
    client: "Confectionery · FMCG",
    category: "Websites",
    year: "2025",
    image: BANNER("livinda.png"),
    imageAlt: "Livinda Kingdom of Sweetness confectionery brand website",
    liveUrl: "https://livinda.in/",
    excerpt:
      "Premium confectionery brand website—the Kingdom of Sweetness—with product lines, Rochello luxury storytelling, global presence, and rich media across candies, chocolates, and surprise eggs.",
    tech: ["React", "Vite", "Video", "CMS"],
  },
  {
    id: "symbiotec",
    title: "Symbiotec",
    client: "Pharma · Enterprise",
    category: "Websites",
    year: "2025",
    image: BANNER("symbiotec.webp"),
    lightBanner: true,
    imageAlt: "Symbiotec pharmaceutical enterprise website homepage",
    liveUrl: "https://symbiotec.com/",
    excerpt:
      "Enterprise pharmaceutical website for a global API manufacturer—showcasing infrastructure, research capabilities, and regulatory presence across multiple markets.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "myjobaccess",
    title: "MyJobAccess",
    client: "Recruitment · Job Portal",
    category: "Websites",
    year: "2025",
    image: BANNER("jobaccess.png"),
    lightBanner: true,
    imageAlt: "MyJobAccess recruitment and job portal website",
    liveUrl: "https://myjobaccess.com/",
    excerpt:
      "Recruitment website where employers post roles and manage applicants, and candidates search opportunities and apply—with performance and SEO in mind.",
    tech: ["React", "Node.js", "PostgreSQL", "SEO"],
  },
  {
    id: "billsebachat",
    title: "Bill se Bachat",
    client: "FinTech · Mobile App",
    category: "Mobile",
    year: "2025",
    image: BANNER("bilsebachat.png"),
    lightBanner: true,
    imageAlt: "Bill se Bachat fintech mobile app",
    liveUrl: "https://billsebachat.com/",
    excerpt:
      "Fintech mobile app with Laravel backend APIs—users verify bills and earn subscription-based rewards through secure, structured payment flows.",
    tech: ["Laravel", "MySQL", "REST APIs", "Mobile"],
  },
  {
    id: "fitness-temple",
    title: "Fitness Temple",
    client: "Fitness · Premium Gym",
    category: "Websites",
    year: "2025",
    image: BANNER("fiteness-temple.png"),
    imageAlt: "Fitness Temple premium gym website",
    liveUrl: "https://fitness-temple-gamma.vercel.app/",
    excerpt:
      "Premium fitness website for a Manhattan gym—classes, membership tiers, trainer profiles, member stories, and 24/7 facility positioning with a polished join flow.",
    tech: ["React", "Vite", "Vercel", "Responsive UI"],
  },
  {
    id: "skillzy",
    title: "SkillZY",
    client: "EdTech · Career Tech",
    category: "Websites",
    year: "2025",
    image: BANNER("skillzy.png"),
    imageAlt: "SkillZY career assessment and roadmap platform",
    liveUrl: "https://skillzy-five.vercel.app/",
    excerpt:
      "Career assessment website with a custom quiz engine—personality-driven insights, step-by-step roadmaps, and salary context for students and professionals.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "trackify",
    title: "Trackify",
    client: "SaaS · Project Management",
    category: "Web Apps",
    year: "2025",
    image: BANNER("trackify.png"),
    imageAlt: "Trackify dark SaaS dashboard for developer and client project collaboration",
    excerpt:
      "A collaborative project delivery platform where developers and clients manage projects, tasks, and communication in one shared workspace.",
    tech: ["React", "SaaS", "Real-time", "Role-based access"],
  },
];
