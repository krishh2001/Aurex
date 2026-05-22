/** Builds consistent article body blocks from list metadata */
export function buildArticleBody(post) {
  const topic = post.category.toLowerCase();
  return [
    { type: "p", text: post.excerpt },
    {
      type: "p",
      text: `This article reflects how AUREX approaches ${topic} when delivering websites, web applications, and internal tools for clients who need reliable, production-ready systems.`,
    },
    { type: "h2", text: "Why this matters for your product" },
    {
      type: "p",
      text: "Strong engineering and clear delivery practices reduce rework, improve security, and keep launches on schedule—whether you are building an MVP or scaling an existing platform.",
    },
    { type: "h2", text: "Practical takeaways" },
    {
      type: "ul",
      items: [
        "Align technical choices with business goals before development starts",
        "Use modern, maintainable stacks with documentation and handover",
        "Plan for performance, security, and support after go-live",
      ],
    },
    {
      type: "p",
      text: "Have a website or application project in mind? Share your requirements with our team—we respond within one business day.",
    },
  ];
}
