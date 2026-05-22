/** Shared copy for Aurex — IT company (websites & applications for clients) */

export const POSITIONING =
  "AUREX is an IT company that takes client projects and delivers production-ready websites, web applications, and mobile apps.";

export const COMPANY = {
  name: "AUREX",
  legalName: "Aurex IT Solutions Pvt. Ltd.",
  tagline: "We build websites and applications your business can run on.",
  description:
    "AUREX is an IT services company in Noida. Clients bring project requirements—we design, develop, test, and deliver websites, web apps, and mobile applications ready for real users.",
  email: "hello@aurex.com",
  salesEmail: "projects@aurex.com",
  phone: "+91 120 456 7890",
  location: "Noida, Uttar Pradesh, India",
  address: "Sector 62, Noida, Uttar Pradesh 201309, India",
  hours: "Mon–Fri, 9:00 AM – 6:30 PM IST",
  founded: "2015",
  copyrightYear: new Date().getFullYear(),
  mapEmbedUrl:
    "https://www.google.com/maps?q=Sector+62+Noida+Uttar+Pradesh+India&hl=en&z=13&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sector+62+Noida+Uttar+Pradesh+India",
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
      "Hire AUREX for IT projects—custom websites, web applications, mobile apps, cloud, and security. Based in Noida, India.",
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
  title: "Start your IT project",
  lead: "Tell us about the website or application you need—scope, timeline, and goals. We read every inquiry and reply within one business day.",
  highlights: [
    "Websites, web apps & mobile applications",
    "Fixed-scope projects or dedicated teams",
    "NDA available before technical deep-dives",
  ],
  formTitle: "Project inquiry",
  formHint: "Required fields are marked with *",
};

export const CONTACT_CHANNELS = [
  {
    id: "general",
    icon: "mail",
    label: "General inquiries",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    id: "sales",
    icon: "mail",
    label: "New projects",
    value: COMPANY.salesEmail,
    href: `mailto:${COMPANY.salesEmail}`,
  },
  {
    id: "phone",
    icon: "phone",
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  {
    id: "office",
    icon: "map",
    label: "Office",
    value: "Sector 62, Noida, UP, India",
    static: true,
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
    image: "https://softwarehousetechnology.com/assets/images/team/vishnu.png",
    skills: [
      "Leadership",
      "Business Strategy",
      "Client Delivery",
      "Operations",
      "Team Management",
      "Growth",
    ],
    socials: [
      { type: "linkedin", url: "" },
      { type: "twitter", url: "" },
    ],
  },
  {
    name: "Priya Sharma",
    role: "Head of Delivery",
    image: "",
    skills: [
      "Project Management",
      "Agile Delivery",
      "Client Communication",
      "Scope & Timeline",
      "QA Planning",
      "Reporting",
    ],
    socials: [{ type: "linkedin", url: "" }],
  },
  {
    name: "Arjun Kapoor",
    role: "Lead Developer",
    image: "",
    skills: [
      "React & Node.js",
      "API Design",
      "Cloud Deployment",
      "Code Review",
      "Architecture",
      "Security",
    ],
    socials: [{ type: "github", url: "" }, { type: "linkedin", url: "" }],
  },
  {
    name: "Neha Verma",
    role: "UI/UX Lead",
    image: "",
    skills: [
      "UI/UX Design",
      "Design Systems",
      "Figma",
      "Prototyping",
      "User Research",
      "Handoff",
    ],
    socials: [{ type: "linkedin", url: "" }],
  },
];

/**
 * Client testimonials — Home slider.
 * Add real clients: name, role/company, quote, and optional photo (image URL or leave "" for initials).
 */
export const HOME_TESTIMONIALS = [
  {
    name: "Rahul Mehta",
    role: "CTO, FinEdge Payments",
    text: "AUREX delivered our web application on scope and on time. Releases are stable and their communication through each sprint was clear.",
    image: "",
  },
  {
    name: "Priya Nair",
    role: "Operations Director, HealthSync",
    text: "From requirements to launch, the team owned the build end-to-end. Security and performance were handled properly—not left for later.",
    image: "",
  },
  {
    name: "Arjun Kapoor",
    role: "Director IT, RetailNova",
    text: "We needed a reliable portal integrated with our existing systems. AUREX shipped clean APIs and documentation our internal team still uses.",
    image: "",
  },
  {
    name: "Neha Verma",
    role: "Founder, LogiTrack",
    text: "Our MVP website and admin panel went live in ten weeks. Clear milestones, demos every week, and a sensible support plan after launch.",
    image: "",
  },
  {
    name: "David Chen",
    role: "Head of Product, CloudServe",
    text: "Transparent estimates, sensible timelines, and engineers who understand business constraints—not just closing tickets.",
    image: "",
  },
];

export const HOME_TESTIMONIALS_SECTION = {
  subtitle: "Client Feedback",
  title: "What Our Clients Say",
  description:
    "Feedback from teams who hired AUREX to build their websites and applications.",
};

export const TEAM_SECTION = {
  subtitle: "The Team",
  title: "People Behind Delivery",
  description:
    "Engineers, designers, and project leads who build your websites and applications. Edit team profiles in company.js.",
};

export const HOME_STATS = [
  { value: "180+", label: "Projects Delivered" },
  { value: "96%", label: "Client Retention" },
  { value: "45+", label: "Engineers & Consultants" },
  { value: "10+", label: "Years in Operation" },
];

export const HOME_CAPABILITIES = {
  title: "Technology We",
  highlight: "Deploy Daily",
  center: ["Web Apps", "Cloud", "Security"],
  items: [
    { num: "01", text: "Websites &\nWeb Apps" },
    { num: "02", text: "Mobile\nApplications" },
    { num: "03", text: "APIs &\nIntegrations" },
    { num: "04", text: "Cloud &\nDevOps" },
    { num: "05", text: "Support &\nMaintenance" },
  ],
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
      { label: "Cloud & DevOps", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Home", to: "/" },
      { label: "Careers", href: "mailto:careers@aurex.com" },
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
};

/** @deprecated Use CTA_DEFAULT — kept for any external imports */
export const CTA_COPY = CTA_DEFAULT;
