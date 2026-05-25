import { getArticleBody } from "./blogBodies";

/** Smaller Unsplash widths for card thumbnails — faster load & scroll */
const img = (url, width = 640) =>
  url.replace(/w=\d+/i, `w=${width}`).replace(/q=\d+/i, "q=75");

const BLOG_AUTHOR = {
  name: "AUREX Engineering",
  role: "Technical Team",
};

const rawPosts = [
  {
    id: 1,
    title: "Advanced React Patterns for Enterprise Apps",
    excerpt: "Master the latest React design patterns and architectural best practices for building scalable applications.",
    category: "Web Development",
    date: "March 12, 2025",
    readTime: "8 min read",
    image: img("https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"),
    tags: ["React", "Architecture", "Best Practices"],
  },
  {
    id: 2,
    title: "Modern UI/UX Design Principles",
    excerpt: "Explore contemporary design principles that enhance user experience and drive engagement.",
    category: "UI/UX Design",
    date: "February 8, 2025",
    readTime: "6 min read",
    image: img("https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"),
    tags: ["Design", "UI", "UX", "Principles"],
  },
  {
    id: 3,
    title: "Cloud Infrastructure Optimization",
    excerpt: "Strategies for optimizing cloud resources and reducing costs while maintaining performance.",
    category: "Cloud Solutions",
    date: "January 22, 2025",
    readTime: "10 min read",
    image: img("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"),
    tags: ["Cloud", "AWS", "Optimization"],
  },
  {
    id: 4,
    title: "Performance Optimization Techniques",
    excerpt: "Essential techniques for improving web application performance and user experience.",
    category: "Web Development",
    date: "January 10, 2025",
    readTime: "7 min read",
    image: img("https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"),
    tags: ["Performance", "Optimization", "Web"],
  },
  {
    id: 5,
    title: "Mobile App Development Trends",
    excerpt: "Latest trends and technologies shaping the future of mobile application development.",
    category: "Mobile Development",
    date: "December 18, 2024",
    readTime: "9 min read",
    image: img("https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"),
    tags: ["Mobile", "Trends", "Development"],
  },
  {
    id: 6,
    title: "Data Security Best Practices",
    excerpt: "Comprehensive guide to implementing robust security measures in modern applications.",
    category: "Security",
    date: "December 5, 2024",
    readTime: "11 min read",
    image: img("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"),
    tags: ["Security", "Data", "Best Practices"],
  },
  {
    id: 7,
    title: "AI Integration in Web Apps",
    excerpt: "How to effectively integrate artificial intelligence features into web applications.",
    category: "Web Development",
    date: "November 20, 2024",
    readTime: "8 min read",
    image: img("https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"),
    tags: ["AI", "Integration", "Web Apps"],
  },
  {
    id: 8,
    title: "Design Systems Implementation",
    excerpt: "Step-by-step guide to creating and implementing design systems for consistent UI.",
    category: "UI/UX Design",
    date: "November 8, 2024",
    readTime: "7 min read",
    image: img("https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"),
    tags: ["Design Systems", "UI", "Consistency"],
  },
  {
    id: 9,
    title: "Serverless Architecture Patterns",
    excerpt: "Exploring modern serverless patterns for scalable and cost-effective applications.",
    category: "Cloud Solutions",
    date: "October 28, 2024",
    readTime: "9 min read",
    image: img("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"),
    tags: ["Serverless", "Architecture", "Cloud"],
  },
  {
    id: 10,
    title: "Modern JavaScript Best Practices",
    excerpt: "Essential JavaScript patterns and practices for writing clean, efficient code.",
    category: "Web Development",
    date: "October 15, 2024",
    readTime: "8 min read",
    image: img("https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"),
    tags: ["JavaScript", "Best Practices", "ES6+"],
  },
  {
    id: 11,
    title: "Responsive Web Design Strategies",
    excerpt: "Modern approaches to creating responsive websites that work across all devices.",
    category: "UI/UX Design",
    date: "October 2, 2024",
    readTime: "6 min read",
    image: img("https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"),
    tags: ["Responsive", "Design", "Mobile"],
  },
  {
    id: 12,
    title: "Database Optimization Techniques",
    excerpt: "Advanced techniques for optimizing database performance and query efficiency.",
    category: "Backend Development",
    date: "September 20, 2024",
    readTime: "10 min read",
    image: img("https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"),
    tags: ["Database", "Optimization", "Performance"],
  },
];

export const allBlogPosts = rawPosts.map((post) => ({
  ...post,
  author: BLOG_AUTHOR,
  body: getArticleBody(post),
}));

export const blogCategories = ["All", ...new Set(allBlogPosts.map((post) => post.category))];

export const categoryCounts = allBlogPosts.reduce(
  (acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  },
  { All: allBlogPosts.length }
);

export function getPostById(id) {
  const num = Number(id);
  if (Number.isNaN(num)) return null;
  return allBlogPosts.find((p) => p.id === num) ?? null;
}

export function getRelatedPosts(currentId, limit = 3) {
  const current = getPostById(currentId);
  if (!current) return allBlogPosts.filter((p) => p.id !== Number(currentId)).slice(0, limit);

  const sameCategory = allBlogPosts.filter(
    (p) => p.id !== current.id && p.category === current.category
  );
  const rest = allBlogPosts.filter(
    (p) => p.id !== current.id && p.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
