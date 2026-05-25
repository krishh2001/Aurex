/** Portfolio page — project showcase (edit copy, images & live URLs here) */

/** HD Unsplash banners — w=1600 & q=85 for sharp cards */
const IMG = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&h=900&q=85`;

export const PORTFOLIO_CATEGORIES = ["All", "Websites", "Web Apps", "Mobile", "Cloud"];

export const PORTFOLIO_PAGE = {
  badge: "Portfolio",
  title: "Projects we've delivered",
  lead:
    "Enterprise websites and a fintech mobile app we've shipped—for pharma, FMCG, fitness, recruitment, and career brands.",
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
    id: "symbiotec",
    title: "Symbiotec",
    client: "Pharma · Enterprise",
    category: "Websites",
    year: "2025",
    image: IMG("photo-1512069772995-ec65ed45afd6"),
    imageAlt: "Assorted pharmaceutical capsules and tablets for Symbiotec enterprise API manufacturer site",
    liveUrl: "https://symbiotec.com/",
    excerpt:
      "Enterprise pharmaceutical website for a global API manufacturer—showcasing infrastructure, research capabilities, and regulatory presence across multiple markets.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "livinda",
    title: "Livinda",
    client: "Confectionery · FMCG",
    category: "Websites",
    year: "2025",
    image: IMG("photo-1578985545062-69928b1d9587"),
    imageAlt: "Rich chocolate cake and premium confectionery styling for Livinda Kingdom of Sweetness website",
    liveUrl: "https://livinda.in/",
    excerpt:
      "Premium confectionery brand website—the Kingdom of Sweetness—with product lines, Rochello luxury storytelling, global presence, and rich media across candies, chocolates, and surprise eggs.",
    tech: ["React", "Vite", "Video", "CMS"],
  },
  {
    id: "fitness-temple",
    title: "Fitness Temple",
    client: "Fitness · Premium Gym",
    category: "Websites",
    year: "2025",
    image: IMG("photo-1549060279-7e168fcee0c2"),
    imageAlt: "Modern gym interior with equipment for Fitness Temple website",
    liveUrl: "https://fitness-temple-gamma.vercel.app/",
    excerpt:
      "Premium fitness website for a Manhattan gym—classes, membership tiers, trainer profiles, member stories, and 24/7 facility positioning with a polished join flow.",
    tech: ["React", "Vite", "Vercel", "Responsive UI"],
  },
  {
    id: "billsebachat",
    title: "Bill se Bachat",
    client: "FinTech · Mobile App",
    category: "Mobile",
    year: "2025",
    image: IMG("photo-1512941937669-90a1b58e7e9c"),
    imageAlt: "Smartphone app interface for Bill se Bachat bill verification and rewards",
    liveUrl: "https://billsebachat.com/",
    excerpt:
      "Fintech mobile app with Laravel backend APIs—users verify bills and earn subscription-based rewards through secure, structured payment flows.",
    tech: ["Laravel", "MySQL", "REST APIs", "Mobile"],
  },
  {
    id: "myjobaccess",
    title: "MyJobAccess",
    client: "Recruitment · Job Portal",
    category: "Websites",
    year: "2025",
    image: IMG("photo-1553877522-43269d4ea984"),
    imageAlt: "Modern hiring workspace and recruitment flow for MyJobAccess job portal",
    liveUrl: "https://myjobaccess.com/",
    excerpt:
      "Recruitment website where employers post roles and manage applicants, and candidates search opportunities and apply—with performance and SEO in mind.",
    tech: ["React", "Node.js", "PostgreSQL", "SEO"],
  },
  {
    id: "skillzy",
    title: "SkillZY",
    client: "EdTech · Career Tech",
    category: "Websites",
    year: "2025",
    image: IMG("photo-1522202176988-66273c2fd55f"),
    imageAlt: "Students collaborating on laptops for SkillZY career platform",
    liveUrl: "https://skillzy-five.vercel.app/",
    excerpt:
      "Career assessment website with a custom quiz engine—personality-driven insights, step-by-step roadmaps, and salary context for students and professionals.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
];
