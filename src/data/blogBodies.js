import { buildArticleBody } from "../utils/blogBody";

/** Unique article bodies keyed by post id — falls back to generic template */
const BODIES = {
  1: [
    { type: "p", text: "Enterprise React apps fail when every screen owns its own data-fetching, styling, and error handling. A small set of shared patterns keeps teams shipping without rewriting the same plumbing on each feature." },
    { type: "h2", text: "Composition over configuration" },
    { type: "p", text: "Prefer compound components and explicit props over giant configuration objects. It keeps APIs readable for the next engineer and makes tree-shaking and testing straightforward." },
    { type: "h2", text: "Data boundaries" },
    { type: "p", text: "Colocate loaders with routes, normalize server state in one layer, and treat UI state separately. When AUREX delivers client portals, we document which hooks own cache invalidation so support teams are not guessing after launch." },
    { type: "h2", text: "What we ship on client projects" },
    { type: "ul", items: [
      "Feature folders with shared design tokens and form primitives",
      "Error boundaries plus structured logging hooks for production",
      "Storybook or Ladle for critical flows before merge",
      "Performance budgets on list and dashboard routes",
    ]},
    { type: "p", text: "Starting a new React product? Share your scope—we typically respond within one business day with a milestone outline." },
  ],
  2: [
    { type: "p", text: "Users judge trust in milliseconds: hierarchy, spacing, and motion either guide attention or create noise. Modern UI work is less about trendy gradients and more about predictable systems." },
    { type: "h2", text: "Clarity before decoration" },
    { type: "p", text: "Lead with readable type scale, sufficient contrast, and one primary action per view. Secondary actions should never compete with the main conversion path—whether that is booking a demo or submitting a form." },
    { type: "h2", text: "Responsive as a system" },
    { type: "p", text: "Breakpoints should change layout, not rewrite the brand. Component tokens for spacing and radius keep marketing pages and logged-in apps feeling like the same product." },
    { type: "ul", items: [
      "8px spacing grid tied to CSS variables",
      "Focus states that work with keyboard and screen readers",
      "Content-first mobile layouts, not shrunk desktop mockups",
      "Motion reduced when prefers-reduced-motion is set",
    ]},
    { type: "p", text: "We pair UX reviews with engineering estimates so design decisions stay buildable within your timeline." },
  ],
  3: [
    { type: "p", text: "Cloud bills creep up when environments multiply and nobody owns tagging, idle resources, or right-sizing. Optimization is an ongoing practice—not a one-time ticket." },
    { type: "h2", text: "Measure before you resize" },
    { type: "p", text: "Use real utilization metrics for compute, storage, and egress. Staging clusters left running 24/7 are a common leak; scheduled scale-down often pays for a week of engineering." },
    { type: "h2", text: "Architecture choices" },
    { type: "p", text: "Managed services reduce ops toil but can lock you in. For client workloads we document trade-offs: when serverless fits, when containers on Kubernetes earn their complexity, and when a simple VM plus CDN is enough." },
    { type: "ul", items: [
      "Tag every resource by client, environment, and cost center",
      "Automate backups and test restores quarterly",
      "Set budgets and alerts per environment, not only per account",
      "Review NAT, logging, and cross-AZ traffic monthly",
    ]},
  ],
  4: [
    { type: "p", text: "Perceived speed drives conversion. Technical performance is Largest Contentful Paint, interaction delay, and how quickly lists hydrate—not only Lighthouse scores in CI." },
    { type: "h2", text: "Front-end wins" },
    { type: "p", text: "Code-split routes, lazy-load below-the-fold media, and serve modern image formats with explicit dimensions to avoid layout shift." },
    { type: "h2", text: "Back-end and data" },
    { type: "p", text: "Index queries you actually run, paginate heavy tables, and cache read-heavy endpoints with clear TTLs. For Indian users on mobile networks we prioritize small JSON payloads over clever abstractions." },
    { type: "ul", items: [
      "CDN for static assets and cacheable API responses where safe",
      "Database explain plans on top ten slow queries",
      "HTTP/2 or HTTP/3 termination at the edge",
      "Real-user monitoring, not synthetic tests alone",
    ]},
  ],
  5: [
    { type: "p", text: "Mobile delivery in 2025 is less about picking React Native versus native for ideology, and more about release cadence, offline needs, and store policies." },
    { type: "h2", text: "Cross-platform when it fits" },
    { type: "p", text: "Shared business logic with a single API contract speeds up MVPs. We validate push notifications, deep links, and payment flows early because they drive store rejection rates." },
    { type: "h2", text: "Quality bar" },
    { type: "p", text: "Crash-free sessions, battery use, and startup time matter for fintech and health-adjacent apps. Automated builds plus staged rollouts reduce Friday-night firefights." },
    { type: "ul", items: [
      "Feature flags for gradual release",
      "Secure storage for tokens, never plain AsyncStorage for secrets",
      "Analytics with privacy-conscious event design",
      "App Store and Play Console checklist per release",
    ]},
  ],
  6: [
    { type: "p", text: "Security is not a final scan before launch. It is access control, dependency hygiene, and how you handle incidents when something slips through." },
    { type: "h2", text: "Baselines we enforce" },
    { type: "p", text: "HTTPS everywhere, least-privilege IAM, secrets in vaults—not repos—and dependency updates on a schedule. For client data we align with their compliance story (ISO, SOC expectations, or sector rules)." },
    { type: "h2", text: "Application layer" },
    { type: "p", text: "Validate input server-side, rate-limit auth endpoints, and log security events without storing passwords or card data in application logs." },
    { type: "ul", items: [
      "OWASP ASVS checklist for new modules",
      "Encrypted backups with tested restore",
      "MFA on admin and deployment accounts",
      "Incident contact tree documented before go-live",
    ]},
  ],
  7: [
    { type: "p", text: "AI features belong where they reduce real work—summaries, classification, search—not as a chat box on every page because the board asked for AI." },
    { type: "h2", text: "Integration patterns" },
    { type: "p", text: "Wrap model calls behind your API, log prompts and responses with retention limits, and never send regulated data to third parties without a data-processing agreement." },
    { type: "h2", text: "Product guardrails" },
    { type: "p", text: "Show confidence, allow human override, and design fallbacks when the model times out. Users should still complete the task manually." },
    { type: "ul", items: [
      "Token budgets per user/session to control cost",
      "Caching for repeated FAQ-style queries",
      "Evaluation set before promoting a prompt change",
      "Clear UI when output is generated, not factual guarantee",
    ]},
  ],
  8: [
    { type: "p", text: "A design system is the contract between design and engineering: tokens, components, and documentation that stay in sync in Figma and code." },
    { type: "h2", text: "Start small, govern gently" },
    { type: "p", text: "Ship buttons, inputs, typography, and layout primitives first. Add complex organisms when two products need the same pattern—not before." },
    { type: "h2", text: "Rollout" },
    { type: "p", text: "Version the package, publish changelogs, and provide codemods or migration notes when breaking props. Marketing sites and admin apps can consume the same core with different themes." },
    { type: "ul", items: [
      "Semantic color tokens (not only hex names)",
      "Accessibility checks in CI for contrast and focus",
      "Contribution guide for new components",
      "Storybook as the source of truth for states",
    ]},
  ],
  9: [
    { type: "p", text: "Serverless shines for spiky traffic and small teams that do not want to patch servers. It hurts when you need long-running jobs or predictable latency at high scale." },
    { type: "h2", text: "Good fits" },
    { type: "p", text: "Webhooks, image processing, scheduled reports, and APIs with intermittent use. Pair functions with queues when work must be retried or ordered." },
    { type: "h2", text: "Watch the edges" },
    { type: "p", text: "Cold starts, vendor limits, and observability across dozens of functions require discipline. Central structured logging beats grep across CloudWatch groups." },
    { type: "ul", items: [
      "Infrastructure as code for every stage",
      "Dead-letter queues on async handlers",
      "Per-function memory tuning from profiling",
      "Cost dashboards by feature flag or tenant",
    ]},
  ],
  10: [
    { type: "p", text: "Modern JavaScript is ESM-first, async by default, and full of APIs that replace lodash-era habits—if you know which ones are production-safe in your target browsers." },
    { type: "h2", text: "Modules and tooling" },
    { type: "p", text: "Use TypeScript or JSDoc where teams scale beyond five developers. Lint for import cycles and ban default exports in shared libraries if they complicate refactors." },
    { type: "h2", text: "Runtime habits" },
    { type: "p", text: "Prefer const, structured clone over JSON round-trips, and explicit error types on boundaries. Avoid mutating shared objects in React state." },
    { type: "ul", items: [
      "Native fetch with timeout wrappers",
      "Intl for dates and currency on Indian locales",
      "Tree-shakeable utility libraries only where needed",
      "Unit tests on pure domain logic, not every component",
    ]},
  ],
  11: [
    { type: "p", text: "Responsive design today means container queries, fluid type, and testing on real mid-range Android devices—not only resizing Chrome on a MacBook." },
    { type: "h2", text: "Layout strategy" },
    { type: "p", text: "Use CSS Grid for page skeletons and Flexbox for component internals. Let content define min-widths; horizontal scroll on a card row is a smell." },
    { type: "h2", text: "Content and performance" },
    { type: "p", text: "Serve smaller hero images on narrow viewports, defer non-critical scripts, and keep tap targets at least 44px. Forms should not zoom unexpectedly on iOS—font-size 16px on inputs still matters." },
    { type: "ul", items: [
      "Mobile-first wireframes for key flows",
      "Picture element or srcset for marketing heroes",
      "Sticky headers that respect safe-area insets",
      "Print styles for invoices and reports when required",
    ]},
  ],
  12: [
    { type: "p", text: "Slow databases show up as angry users before they show up in dashboards. Optimization starts with schema and query shape, not buying a larger instance." },
    { type: "h2", text: "Indexing discipline" },
    { type: "p", text: "Index columns you filter and join on; avoid redundant indexes that slow writes. Review migration plans on staging with production-like volume when possible." },
    { type: "h2", text: "Operations" },
    { type: "p", text: "Connection pooling, read replicas for reporting, and archival for old rows keep OLTP fast. Document maintenance windows for clients who integrate 24/7." },
    { type: "ul", items: [
      "Explain analyze on regressions, not guesswork",
      "Batch jobs off the primary during peak hours",
      "Monitoring on replication lag and disk growth",
      "Runbooks for restore and failover drills",
    ]},
  ],
};

export function getArticleBody(post) {
  return BODIES[post.id] ?? buildArticleBody(post);
}
