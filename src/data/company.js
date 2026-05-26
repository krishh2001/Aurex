/** Shared copy for Aurex — IT company (websites & applications for clients) */

export const POSITIONING =
  "AUREX is an IT company that takes client projects and delivers production-ready websites, web applications, and mobile apps.";

export const COMPANY = {
  name: "AUREX",
  legalName: "Aurex IT Solutions",
  tagline: "We build websites and applications your business can run on.",
  description:
    "AUREX is an IT services company in Indore. Clients bring project requirements—we design, develop, test, and deliver websites, web apps, and mobile applications ready for real users.",
  email: "aurexitsolutions@gmail.com",
  salesEmail: "aurexitsolutions@gmail.com",
  phone: "+91 731 456 7890",
  city: "Indore",
  state: "Madhya Pradesh",
  location: "Indore, Madhya Pradesh, India",
  address: "Vijay Nagar, Indore, Madhya Pradesh 452010, India",
  hours: "Mon–Fri, 9:00 AM – 6:30 PM IST",
  founded: "2015",
  copyrightYear: new Date().getFullYear(),
  mapEmbedUrl:
    "https://www.google.com/maps?q=Vijay+Nagar+Indore+Madhya+Pradesh+India&hl=en&z=13&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Vijay+Nagar+Indore+Madhya+Pradesh+India",
  footerDescription:
    "IT project delivery—custom websites, web applications, cloud, and security for startups and enterprises.",
  linkedin: "https://www.linkedin.com/company/aurex",
  twitter: "https://x.com/aurex",
  instagram: "https://www.instagram.com/aurex",
  github: "https://github.com/aurex",
};

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://aurex-phi.vercel.app").replace(
  /\/$/,
  ""
);

/** Production site URL — used for canonical, OG, sitemap (override via VITE_SITE_URL) */
export const SITE = {
  url: SITE_URL,
  name: "AUREX IT Solutions",
  locale: "en_IN",
  twitterHandle: "@aurex",
  ogImage: `${SITE_URL}/og-image.png`,
};

/** Footer social row — always 4 icons; update URLs in COMPANY above */
export const FOOTER_SOCIAL = [
  { type: "linkedin", url: COMPANY.linkedin, label: "LinkedIn" },
  { type: "twitter", url: COMPANY.twitter, label: "X (Twitter)" },
  { type: "instagram", url: COMPANY.instagram, label: "Instagram" },
  { type: "github", url: COMPANY.github, label: "GitHub" },
];

export const DEFAULT_PAGE_META = {
  title: "AUREX IT Solutions | Websites, Web Apps & IT Projects",
  description: POSITIONING,
};

export const PAGE_META = {
  home: {
    title: "AUREX IT Solutions | Websites & Application Development",
    description:
      "Hire AUREX for IT projects—custom websites, web applications, mobile apps, cloud, and security. Based in Indore, India.",
  },
  services: {
    title: "IT Services | Web, Mobile, Cloud & Security — AUREX",
    description:
      "End-to-end IT services: custom software, websites, mobile apps, cloud DevOps, cybersecurity, and consulting.",
  },
  about: {
    title: "About AUREX | IT Project Delivery Team",
    description:
      "Learn how AUREX delivers client IT projects—from discovery and design to development, launch, and support.",
  },
  blog: {
    title: "Insights | AUREX IT Solutions",
    description: "Articles on web development, cloud, security, and delivery practices from the AUREX team.",
  },
  portfolio: {
    title: "Portfolio | Websites & Apps We've Built — AUREX",
    description:
      "Explore AUREX client projects—websites, web applications, mobile apps, and cloud delivery across industries.",
  },
  pricing: {
    title: "Service Plans & Pricing (INR) | AUREX",
    description:
      "Project-based, dedicated team, and enterprise IT engagement plans. Starting estimates in Indian Rupees.",
  },
  contact: {
    title: "Contact AUREX | Start Your IT Project",
    description:
      "Share your website or application requirements. We reply within one business day.",
  },
  careers: {
    title: "Careers at AUREX | Join Our Engineering Team",
    description:
      "Open roles in Indore for developers, designers, and delivery leads. Apply to build websites and apps for global clients.",
  },
  privacy: {
    title: "Privacy Policy | AUREX IT Solutions",
    description: "How AUREX IT Solutions collects and uses information on this website.",
  },
  terms: {
    title: "Terms of Use | AUREX IT Solutions",
    description: "Terms and conditions for using the AUREX IT Solutions website.",
  },
  notFound: {
    title: "Page Not Found | AUREX",
    description: "The page you requested could not be found.",
    robots: "noindex, follow",
  },
};

export const CONTACT_PAGE = {
  badge: "Contact",
  title: "Let's talk about your project",
  lead: "Fill the form or reach us directly—we reply within one business day.",
  highlights: [
    "Reply in 24 hours",
    "Free consultation",
  ],
  formTitle: "Send a message",
  formHint: "Name, email, phone & message are required",
  contactTitle: "Other ways to reach us",
  mapLocationDesc: "Indore studio — in-person visits by appointment during business hours.",
  nextStepsTitle: "What happens next",
  nextSteps: [
    {
      title: "We read your brief",
      desc: "A project lead reviews your message within one business day.",
    },
    {
      title: "Quick discovery call",
      desc: "A short call to clarify scope, timeline, and budget—no hard sell.",
    },
    {
      title: "Proposal & kickoff",
      desc: "You receive a clear plan and timeline. Start only when you're ready.",
    },
  ],
  asideStats: [
    { value: "24h", label: "Typical first reply" },
    { value: "180+", label: "Projects delivered" },
    { value: "96%", label: "Client retention" },
    { value: "10+", label: "Years in operation" },
  ],
};

export const CONTACT_CHANNEL_ACCENTS = ["#4ade80", "#60a5fa", "#22d3ee", "#fb923c"];

export const CONTACT_CHANNELS = [
  {
    id: "general",
    icon: "mail",
    label: "Email",
    value: COMPANY.email,
    hint: "We reply within one business day.",
    href: `mailto:${COMPANY.email}`,
    accent: CONTACT_CHANNEL_ACCENTS[0],
  },
  {
    id: "phone",
    icon: "phone",
    label: "Phone",
    value: COMPANY.phone,
    hint: "Speak with our team during business hours.",
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    accent: CONTACT_CHANNEL_ACCENTS[2],
  },
  {
    id: "hours",
    icon: "time",
    label: "Business hours",
    value: COMPANY.hours,
    hint: "Indian Standard Time (IST) · Closed on weekends.",
    accent: CONTACT_CHANNEL_ACCENTS[3],
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  "Custom Website",
  "Web Application",
  "Mobile Application",
  "Cloud & DevOps",
  "Cybersecurity",
  "IT Consulting / Dedicated Team",
  "Not sure yet",
];

export const TECH_TICKER = [
  "REACT",
  "NODE.JS",
  "AWS",
  "AZURE",
  "PYTHON",
  "DOCKER",
  "KUBERNETES",
  "POSTGRESQL",
  "TYPESCRIPT",
  "NEXT.JS",
];

export const HOME_HERO = {
  badge: "Aurex IT Solutions",
  title: "We Built For Brands", 
  titleLine2: "That Refuse To Look Ordinary.",
  description:
    "We create bold, high-performance digital experiences for brands that want to stand out, build trust and leave a lasting impression. From premium design to powerful development, everything is crafted to make your business look modern, credible and impossible to ignore.",
  primaryCta: { label: "View Services", to: "/services" },
  secondaryCta: { label: "Start Your Project", to: "/contact" },
};

/** Single source of truth — used on Services page; Home maps card fields from this */
export const SERVICE_OFFERINGS = [
  {
    icon: "website",
    tag: "Websites",
    title: "Custom Websites",
    description:
      "Marketing sites, portals, and admin panels tailored to your brand—with responsive UI, CMS options, and SEO-ready structure.",
    features: [
      "Corporate & product websites",
      "Landing pages & multi-language sites",
      "CMS integration (headless or traditional)",
      "Performance & SEO optimization",
    ],
  },
  {
    icon: "webapp",
    tag: "Web Apps",
    title: "Web Applications",
    description:
      "Business web apps, dashboards, and customer portals built with modern stacks—secure APIs, role-based access, and scalable architecture.",
    features: [
      "React / Next.js frontends",
      "Node.js & REST/GraphQL APIs",
      "Authentication & admin modules",
      "Staging, QA & production deployment",
    ],
  },
  {
    icon: "mobile",
    tag: "Mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform and native mobile apps connected to your backend—app store readiness, analytics, and push notifications.",
    features: [
      "React Native & hybrid approaches",
      "iOS & Android release support",
      "API integration with existing systems",
      "Offline-first & performance tuning",
    ],
  },
  {
    icon: "cloud",
    tag: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Hosting, CI/CD, and observability so your website or application stays fast, available, and cost-efficient in production.",
    features: [
      "AWS & Azure setup",
      "Docker & Kubernetes pipelines",
      "Monitoring & alerting",
      "Backup & disaster recovery",
    ],
  },
  {
    icon: "security",
    tag: "Security",
    title: "Cybersecurity",
    description:
      "Security reviews and hardening for applications you ship—VAPT support, access control, and compliance-oriented practices.",
    features: [
      "Application security assessments",
      "IAM & secrets management",
      "Secure SDLC guidance",
      "Incident response planning",
    ],
  },
  {
    icon: "transform",
    tag: "Consulting",
    title: "IT Consulting",
    description:
      "Architecture reviews, technology roadmaps, and dedicated engineering teams when you need ongoing delivery capacity.",
    features: [
      "Discovery & solution design",
      "Legacy modernization",
      "Dedicated developer squads",
      "CTO advisory & audits",
    ],
  },
];

/**
 * Team — About page orbit section.
 * Replace names, roles, photos (image path or URL), skills, and social URLs with your real team.
 */
export const TEAM_MEMBERS = [
  {
    name: "Vishnu Rajput",
    role: "Founder & CEO",
    image: "/team/vishnu.png",
    skills: [
      { icon: "leadership", label: "Leadership" },
      { icon: "strategy", label: "Business Strategy" },
      { icon: "delivery", label: "Client Delivery" },
      { icon: "operations", label: "Operations" },
      { icon: "team-mgmt", label: "Team Management" },
      { icon: "growth", label: "Growth" },
    ],
    socials: [
      { type: "linkedin", url: "" },
      { type: "twitter", url: "" },
    ],
  },
  {
    name: "Sohit Tiwari",
    role: "Head of Delivery",
    image: "/team/sohit.jpeg",
    skills: [
      { icon: "project-mgmt", label: "Project Management" },
      { icon: "agile", label: "Agile Delivery" },
      { icon: "communication", label: "Client Communication" },
      { icon: "scope", label: "Scope & Timeline" },
      { icon: "qa", label: "QA Planning" },
      { icon: "reporting", label: "Reporting" },
    ],
    socials: [{ type: "linkedin", url: "" }],
  },
  {
    name: "Vikas Mishra",
    role: "Team Lead",
    image: "/team/vikki.png",
    skills: [
      { icon: "react", label: "React & Node.js" },
      { icon: "api", label: "API Design" },
      { icon: "cloud", label: "Cloud Deployment" },
      { icon: "code-review", label: "Code Review" },
      { icon: "architecture", label: "Architecture" },
      { icon: "security", label: "Security" },
    ],
    socials: [{ type: "github", url: "" }, { type: "linkedin", url: "" }],
  },
];

/**
 * Client testimonials — Home slider.
 * Add real clients: name, role/company, quote, and optional photo (image URL or leave "" for initials).
 */
const testimonialPhoto = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&h=200&q=80`;

export const HOME_TESTIMONIALS = [
  {
    name: "Dr. Anil Sharma",
    role: "Head of Digital, Symbiotec",
    text: "Our site had to speak to regulators and buyers across regions. AUREX delivered clear architecture pages, fast loads, and a CMS-friendly structure our marketing team still updates without developer tickets.",
    image: testimonialPhoto("photo-1560250097-0b93528c311a"),
  },
  {
    name: "Meera Nambiar",
    role: "Brand Manager, Livinda",
    text: "The Livinda site finally matches the quality of our products—product films, Rochello storytelling, and export markets are easy to find. Launches feel premium, not like a generic catalog.",
    image: testimonialPhoto("photo-1573497013693-52b61e584f42"),
  },
  {
    name: "Jason Cole",
    role: "Owner, Fitness Temple NYC",
    text: "Membership tiers, class schedules, and trainer bios were exactly what we needed. Members book tours from mobile, and the design feels as high-end as our Midtown facility.",
    image: testimonialPhoto("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Kavita Desai",
    role: "Product Lead, Bill se Bachat",
    text: "Bill verification and reward payouts needed reliable APIs under load. AUREX shipped documented Laravel endpoints our app team integrated in weeks—not months.",
    image: testimonialPhoto("photo-1580489944761-15ec19edbcd2"),
  },
  {
    name: "Rohit Malhotra",
    role: "Founder, MyJobAccess",
    text: "Employers manage listings and applicants in one place; candidates get a smooth apply flow. Search and dashboards stayed fast after we crossed our first ten thousand sign-ups.",
    image: testimonialPhoto("photo-1472099645785-5658abf4ff4"),
  },
  {
    name: "Sneha Iyer",
    role: "Product Manager, SkillZY",
    text: "The career quiz and roadmap experience had to feel credible to students. AUREX built the MERN flow so results, skills, and next steps load instantly—even on slower networks.",
    image: testimonialPhoto("photo-1438761681033-6461ffad8d80"),
  },
];

export const HOME_TESTIMONIALS_SECTION = {
  subtitle: "Client Feedback",
  title: "What Our Clients Say",
  description:
    "Feedback from teams who hired AUREX to build their websites and applications.",
  disclaimer:
    "Quotes reflect client experiences on delivered projects. Names and roles used with client context; update or remove any entry that is not approved for public use.",
};

/** Shown under aggregate stats on marketing pages */
export const STATS_DISCLAIMER =
  "Figures are indicative of our delivery track record—confirm current numbers with our team during discovery.";

export const TEAM_SECTION = {
  subtitle: "The Team",
  title: "People Behind Delivery",
  description:
    "Engineers, designers, and project leads who build your websites and applications.",
};

/** About page — The AUREX Method (6-step delivery) */
export const AUREX_METHOD = {
  badge: "How We Work",
  title: "The AUREX Method",
  description:
    "A focused workflow for client IT projects—from scoped websites to long-running application programs. Every phase has clear outputs, owners, and review gates so you always know what shipped and what comes next.",
  principles: [
    { label: "Written scope", value: "Before build" },
    { label: "Weekly demos", value: "No surprises" },
    { label: "One accountable team", value: "Brief → launch" },
    { label: "Production handover", value: "Docs + access" },
  ],
  steps: [
    {
      id: "01",
      icon: "discovery",
      title: "Discovery & Research",
      description:
        "We align on business goals, users, integrations, and constraints—then document assumptions so everyone shares the same picture before design or code.",
    },
    {
      id: "02",
      icon: "strategy",
      title: "Strategy & Structure",
      description:
        "We turn research into a delivery plan: information architecture, tech choices, timelines, and success metrics tied to your priorities—not generic templates.",
    },
    {
      id: "03",
      icon: "design",
      title: "UI/UX Design",
      description:
        "Interfaces are designed for clarity and conversion—responsive layouts, accessible patterns, and a cohesive visual system your team can extend after launch.",
    },
    {
      id: "04",
      icon: "development",
      title: "Development",
      description:
        "Engineering runs in short iterations with staging environments, code review, and demos—so you see working software early instead of a big reveal at the end.",
    },
    {
      id: "05",
      icon: "testing",
      title: "Testing & Polish",
      description:
        "We validate quality across devices, browsers, and real-world scenarios—performance, security basics, and edge cases—before anything reaches your users.",
    },
    {
      id: "06",
      icon: "launch",
      title: "Launch & Scale",
      description:
        "Go-live includes deployment, monitoring setup, handover documentation, and a support path—whether you need hypercare, enhancements, or a dedicated squad.",
    },
  ],
};

/** Contact page FAQs */
export const CONTACT_FAQ = {
  title: "Common questions",
  description: "Quick answers before you reach out—we're happy to go deeper on a call.",
  items: [
    {
      q: "How fast do you reply to inquiries?",
      a: "We respond within one business day (IST). Urgent production issues from existing clients get priority handling.",
    },
    {
      q: "Do you work with startups and enterprises?",
      a: "Yes. We deliver MVPs and marketing sites for startups as well as multi-phase programs for larger teams.",
    },
    {
      q: "Can we start with a small project first?",
      a: "Absolutely. Many clients begin with a fixed-scope website or MVP, then move to a dedicated team as the product grows.",
    },
    {
      q: "Do you sign NDAs before sharing requirements?",
      a: "Yes. We routinely execute NDAs before technical deep-dives or access to your systems and data.",
    },
    {
      q: "Where is your team based?",
      a: `We're based in ${COMPANY.location}. Discovery calls are remote; on-site visits in ${COMPANY.city} are available by appointment.`,
    },
    {
      q: "What should I include in the contact form?",
      a: "A short summary of what you're building, target users, desired timeline, and any stack or compliance requirements you already know.",
    },
  ],
};

export const CAREERS_PAGE = {
  badge: "We're hiring",
  title: "Build products that",
  titleAccent: "actually ship",
  lead:
    "Join a focused engineering team in Indore—websites, web apps, and mobile products for clients who care about quality delivery.",
  highlights: [
    { value: "4", label: "Open roles" },
    { value: "Hybrid", label: "Flexible work" },
    { value: "Indore", label: "Studio hub" },
    { value: "Live", label: "Client products" },
  ],
  cultureTitle: "Why AUREX",
  cultureSubtitle: "Small team, real delivery, room to grow.",
  culture: [
    {
      premiumIcon: "launch",
      title: "Real client projects",
      description: "Ship production code for pharma, fintech, fitness, and edtech brands—not throwaway demos.",
    },
    {
      premiumIcon: "development",
      title: "Modern stack",
      description: "React, Node.js, cloud pipelines, and mobile—mentorship from leads who still write code.",
    },
    {
      premiumIcon: "strategy",
      title: "Clear process",
      description: "Written scope, weekly demos, and code review—less chaos, more craft.",
    },
    {
      premiumIcon: "cloud",
      title: "Hybrid-friendly",
      description: "Core collaboration from our Indore studio with sensible remote flexibility.",
    },
  ],
  openingsTitle: "Open roles",
  openingsNote: "Don't see a fit? Email us your portfolio—we keep strong profiles on file.",
  openingsSearchPlaceholder: "Search by role, skills, or keywords…",
  openingsFilterDepartments: ["All", "Engineering", "Delivery"],
  openingsFilterWorkModes: ["All", "Indore", "Hybrid"],
  openings: [
    {
      id: "react-dev",
      department: "Engineering",
      workMode: "Indore",
      title: "React / Frontend Developer",
      type: "Full-time · Indore",
      description:
        "Build responsive UIs, component libraries, and integrations with REST/GraphQL APIs for client web apps.",
      requirements: ["2+ years React", "TypeScript or strong JS", "REST APIs & Git"],
    },
    {
      id: "fullstack",
      department: "Engineering",
      workMode: "Indore",
      title: "Full-Stack Developer (MERN)",
      type: "Full-time · Indore",
      description:
        "Own features end to end—from database schema to React screens—for websites and internal tools.",
      requirements: ["Node.js & MongoDB/Postgres", "React", "Deployment basics (Vercel/AWS)"],
    },
    {
      id: "mobile",
      department: "Engineering",
      workMode: "Hybrid",
      title: "React Native Developer",
      type: "Full-time · Hybrid",
      description:
        "Deliver cross-platform mobile apps connected to Laravel or Node backends with store-ready builds.",
      requirements: ["React Native", "API integration", "App Store / Play release experience"],
    },
    {
      id: "delivery",
      department: "Delivery",
      workMode: "Indore",
      title: "IT Project / Delivery Coordinator",
      type: "Full-time · Indore",
      description:
        "Coordinate sprints, client updates, and QA handoffs—bridge between engineering and stakeholders.",
      requirements: ["Agile familiarity", "Strong written English", "Technical aptitude"],
    },
  ],
  applyCta: "Apply via email",
  applySubject: "Careers application — AUREX",
};

export const HOME_STATS = [
  { value: "180+", label: "Projects Delivered" },
  { value: "96%", label: "Client Retention" },
  { value: "45+", label: "Engineers & Consultants" },
  { value: "10+", label: "Years in Operation" },
];

export const HOME_CAPABILITIES_SECTION = {
  subtitle: "Capabilities",
  title: "Technology We Deploy Daily",
  description:
    "Modern stacks and delivery practices we use every day—from front-end frameworks to cloud pipelines and application security.",
};

export const HOME_CAPABILITIES = {
  center: ["Web Apps", "Cloud", "Security"],
  items: [
    { num: "01", text: "Websites &\nWeb Apps" },
    { num: "02", text: "Mobile\nApplications" },
    { num: "03", text: "APIs &\nIntegrations" },
    { num: "04", text: "Cloud &\nDevOps" },
    { num: "05", text: "Support &\nMaintenance" },
  ],
};

export const HOME_SERVICES_SECTION = {
  subtitle: "IT Services",
  title: "Websites, Apps & IT Delivery",
  description:
    "One partner for your client project—from corporate sites to full-stack applications and ongoing support.",
  cta: { label: "Explore all services", to: "/services" },
};

export const HOME_PORTFOLIO_SECTION = {
  subtitle: "Portfolio",
  title: "Work that speaks for itself",
  description:
    "A snapshot of websites and applications we've delivered—filter by type on the full portfolio page.",
  cta: { label: "View full portfolio", to: "/portfolio" },
  featuredIds: ["livinda", "symbiotec", "myjobaccess"],
};

/** Home — company overview (below hero); mirrors About page story tone */
export const HOME_ABOUT_SECTION = {
  subtitle: "About Us",
  title: "Engineers & designers who ship",
  description:
    "Your IT project delivery partner in Indore—websites, web apps, and mobile products built for real users.",
  badge: "Who We Are",
  paragraphs: [
    "Founded in 2015, AUREX takes client requirements and delivers production-ready websites, web applications, and mobile apps—with cloud, security, and support when you need them.",
    "You bring goals and scope; we run discovery, design, development, testing, and launch with clear milestones and one accountable team.",
  ],
  quote:
    "Every delivery is documented, tested, and handed over ready for real users—not demo-only builds.",
  pillars: [
    {
      icon: "launch",
      title: "End-to-end delivery",
      description: "Strategy, UI/UX, engineering, QA, and go-live under one roof.",
    },
    {
      icon: "discovery",
      title: "Transparent process",
      description: "Weekly demos, written scope, and milestones you can track.",
    },
    {
      icon: "security",
      title: "Long-term support",
      description: "Monitoring, updates, and dedicated squads when you need scale.",
    },
  ],
  stats: [
    { value: "180+", label: "Projects delivered" },
    { value: "96%", label: "Client retention" },
    { value: "45+", label: "Engineers & consultants" },
    { value: "10+", label: "Years in operation" },
  ],
  cta: { label: "Meet the team", to: "/about" },
};

export const PRICING_CURRENCY_NOTE =
  "Indicative starting prices in INR (₹), exclusive of GST. Final quotes follow discovery and written scope.";

export const ENGAGEMENT_PLANS = [
  {
    id: "project",
    name: "Project-Based",
    priceLabel: "From",
    currency: "₹",
    price: "6,50,000",
    period: "per project",
    featured: false,
    features: [
      { ok: true, text: "Fixed-scope website or app delivery" },
      { ok: true, text: "2–4 week discovery & milestone plan" },
      { ok: true, text: "Source code & documentation handover" },
      { ok: false, text: "Dedicated team allocation" },
      { ok: false, text: "24/7 priority support" },
      { ok: false, text: "Managed operations" },
    ],
    cta: "Request Estimate",
    note: "Ideal for MVPs & one-off builds",
  },
  {
    id: "retainer",
    name: "Dedicated Team",
    priceLabel: "From",
    currency: "₹",
    price: "9,50,000",
    period: "/month",
    featured: true,
    features: [
      { ok: true, text: "Dedicated developers & lead engineer" },
      { ok: true, text: "Weekly demos & backlog grooming" },
      { ok: true, text: "DevOps, QA & code review included" },
      { ok: true, text: "Slack/Teams direct access" },
      { ok: true, text: "Flexible monthly scale up/down" },
      { ok: false, text: "On-site enterprise SLA" },
    ],
    cta: "Schedule Call",
    note: "Best for ongoing product development",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceLabel: "",
    currency: "",
    price: "Custom",
    period: "",
    featured: false,
    features: [
      { ok: true, text: "Multi-team program delivery" },
      { ok: true, text: "Security audits & compliance support" },
      { ok: true, text: "Architecture board & CTO advisory" },
      { ok: true, text: "On-prem / hybrid / multi-cloud" },
      { ok: true, text: "24/7 support & incident response" },
      { ok: true, text: "MSA, NDAs & procurement ready" },
    ],
    cta: "Contact Sales",
    note: "For large-scale IT programs",
  },
];

export const ENGAGEMENT_FAQ = [
  {
    q: "Can I switch plans later?",
    a: "Yes. Many clients start with a project-based engagement and move to a dedicated team as the product grows.",
  },
  {
    q: "Do you sign NDAs before discussing our project?",
    a: "Yes. We routinely execute NDAs before any technical deep-dive or access to your systems.",
  },
  {
    q: "How is each plan priced?",
    a: "After discovery we share written scope, timeline, and estimate in INR. Figures on this page are starting ranges—not final quotes.",
  },
  {
    q: "Which plan fits a new website or app?",
    a: "A defined website or MVP fits Project-Based; ongoing feature work fits Dedicated Team; multi-team programs fit Enterprise.",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "All Services", to: "/services" },
      { label: "Custom Websites", to: "/services" },
      { label: "Web Applications", to: "/services" },
      { label: "Mobile Applications", to: "/services" },
      { label: "Cloud & DevOps", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Service Plans", to: "/pricing" },
      { label: "Insights", to: "/blog" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: COMPANY.email, href: `mailto:${COMPANY.email}` },
      { label: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
      { label: COMPANY.location, static: true },
    ],
  },
];

/** Shared CTA defaults — same card design everywhere; override per page via CTA_BY_PAGE */
export const CTA_DEFAULT = {
  icon: "mail",
  title: "Ready to start your IT project?",
  description:
    "Share your website or application requirements. We will respond within one business day with next steps and a discovery call option.",
  button: "Request Consultation",
  to: "/contact",
};

/** Per-page CTA copy (icon | title | description | button | to) */
export const CTA_BY_PAGE = {
  home: {
    icon: "rocket",
    title: "Ready to build something?",
    description:
      "From MVP to enterprise platforms—we scope, ship, and support your website or application end to end.",
    button: "Start a Project",
  },
  services: {
    icon: "code",
    title: "Need the right delivery partner?",
    description:
      "Tell us what you want to build. We'll align on stack, timeline, and a clear delivery plan for your team.",
    button: "Discuss Your Project",
  },
  about: {
    icon: "team",
    title: "Work with our engineering team",
    description:
      "Meet the people behind Aurex and start a conversation about your next website, app, or cloud initiative.",
    button: "Get in Touch",
  },
  pricing: {
    icon: "price",
    title: "Get a tailored estimate",
    description:
      "Share scope and goals—we'll respond with transparent pricing and engagement options that fit your budget.",
    button: "Request Estimate",
  },
  blog: {
    icon: "mail",
    title: "Stay Updated",
    description:
      "Planning a website or application project? Talk to our team about scope, timeline, and delivery.",
    button: "Start a Project",
  },
  blogPost: {
    icon: "mail",
    title: "Turn ideas into shipped software",
    description:
      "Need a website or application built? Tell us about your IT project—we reply within one business day.",
    button: "Start a Project",
  },
  portfolio: {
    icon: "rocket",
    title: "Want results like these?",
    description:
      "Share your goals and timeline—we'll scope a delivery plan for your website, app, or cloud initiative.",
    button: "Start Your Project",
  },
  contact: {
    icon: "mail",
    title: "Still have questions?",
    description:
      "Send your brief and we'll reply within one business day with next steps and a discovery call option.",
    button: "Send a message",
  },
  careers: {
    icon: "team",
    title: "Ready to apply?",
    description:
      "Email your resume, portfolio, and the role you're interested in. We review every application personally.",
    button: "Apply now",
    to: `mailto:${COMPANY.email}?subject=Careers%20application%20%E2%80%94%20AUREX`,
  },
};

/** @deprecated Use CTA_DEFAULT — kept for any external imports */
export const CTA_COPY = CTA_DEFAULT;
