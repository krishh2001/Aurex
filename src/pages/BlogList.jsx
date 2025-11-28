import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiArticleLine,
  RiArrowRightLine,
  RiFolderOpenLine,
  RiHistoryLine,
  RiPriceTag3Line,
  RiMailLine
} from "react-icons/ri";

import CTA from "../components/CTA";


export default function BlogList() {

  // --- Data: Blog Posts ---
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring and scaling your React applications for maintainability and performance.",
      category: "Web Development",
      date: "June 10, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "The Psychology of Color in UI Design",
      excerpt: "How color choices impact user behavior and perception in digital interfaces.",
      category: "UI/UX Design",
      date: "June 5, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It Matters",
      excerpt: "Understanding the importance of designing for mobile devices first in today's digital landscape.",
      category: "UI/UX Design",
      date: "May 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 4,
      title: "SEO Strategies for 2023",
      excerpt: "Latest SEO techniques and algorithm updates to improve your website's visibility.",
      category: "Digital Marketing",
      date: "May 20, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
    },
    {
      id: 5,
      title: "Introduction to Cloud-Native Development",
      excerpt: "What it means to build applications specifically for cloud environments.",
      category: "Cloud Solutions",
      date: "May 15, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 6,
      title: "Building Progressive Web Apps with Next.js",
      excerpt: "How to leverage Next.js to create fast, reliable progressive web applications.",
      category: "Web Development",
      date: "May 10, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
    }
  ];

  // --- Data: Recent Posts ---
  const recentPosts = [
    {
      id: 101,
      title: "The Future of Web Development",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 102,
      title: "Building Scalable React Applications",
      date: "June 10, 2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 103,
      title: "The Psychology of Color in UI Design",
      date: "June 5, 2023",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"
    }
  ];

  // --- Effects: Particles & Parallax ---
  useEffect(() => {
    // 1. Parallax background text
    const handleScroll = () => {
      const bgText = document.querySelector('.bg-large-text');
      if (bgText) {
        let scroll = window.scrollY;
        bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
        bgText.style.opacity = 1 - (scroll * 0.001);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Particles
    const particleContainer = document.getElementById('particles');
    if (particleContainer && particleContainer.childElementCount === 0) {
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        let size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${Math.random() * 100}vh`;
        p.style.animationDelay = `-${Math.random() * 20}s`;
        p.style.opacity = Math.random() * 0.5;
        particleContainer.appendChild(p);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="blog-list-wrapper">
      {/* Background Effects */}
            <div className="ambient-glow"></div>
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>
            <h1 className="bg-large-text">Blogs</h1>
            <div className="particles" id="particles"></div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

      <main className="container">

        {/* Hero Section */}
        <section className="blog-hero-section">
          <div className="hero-content">
            <div className="section-badge"><RiArticleLine /> Insights & Updates</div>
            <h1>Digital Insights & <br />Industry Trends</h1>
            <p className="hero-text">
              Explore our latest articles on web development, design trends, and digital innovation.
            </p>
          </div>
        </section>

        {/* Blog Content Layout */}
        <div className="blog-layout">

          <div className="main-content">
            {/* Featured Post */}
            <section className="featured-post">
              <div className="featured-card">
                <div className="featured-image">
                  <div className="featured-badge">Featured</div>
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Featured Post" />
                </div>
                <div className="featured-content">
                  <div className="post-meta">
                    <span className="post-category">Web Development</span>
                    <span>June 15, 2023</span>
                    <span>8 min read</span>
                  </div>
                  <h2 className="featured-title">The Future of Web Development: Trends to Watch in 2023</h2>
                  <p className="featured-excerpt">
                    Explore the emerging technologies and methodologies that are shaping the future of web
                    development. From AI-powered tools to new frameworks, discover what's next for the industry.
                  </p>
                  {/* Example link to details page */}
                  <Link to="/blog-details" className="read-more">
                    Read Article <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            </section>

            {/* Posts Grid */}
            <div className="posts-container">
              <div className="posts-grid">
                {blogPosts.map((post) => (
                  <article className="post-card" key={post.id}>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <Link to="/blog-details" className="read-more">
                        Read More <RiArrowRightLine />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="load-more">
                <button className="load-btn" onClick={() => alert('Loading more...')}>
                  Load More Articles
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">

            {/* Categories */}
            <div className="sidebar-widget">
              <h3 className="widget-title"><RiFolderOpenLine /> Categories</h3>
              <ul className="categories-list">
                <li><Link to="#">Web Development <span>12</span></Link></li>
                <li><Link to="#">UI/UX Design <span>8</span></Link></li>
                <li><Link to="#">Digital Marketing <span>5</span></Link></li>
                <li><Link to="#">Mobile Development <span>7</span></Link></li>
                <li><Link to="#">Cloud Solutions <span>4</span></Link></li>
                <li><Link to="#">Business Strategy <span>6</span></Link></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="sidebar-widget">
              <h3 className="widget-title"><RiHistoryLine /> Recent Posts</h3>
              <div className="recent-posts-list">
                {recentPosts.map((post) => (
                  <div className="recent-post-item" key={post.id}>
                    <div className="recent-post-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="recent-post-content">
                      <h4 className="recent-post-title">{post.title}</h4>
                      <div className="recent-post-date">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="sidebar-widget">
              <h3 className="widget-title"><RiPriceTag3Line /> Popular Tags</h3>
              <div className="tags-container">
                {['React', 'Next.js', 'UI Design', 'SEO', 'JavaScript', 'TypeScript', 'Web Performance', 'Mobile First'].map((tag) => (
                  <Link to="#" className="tag" key={tag}>{tag}</Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="sidebar-widget">
              <h3 className="widget-title"><RiMailLine /> Newsletter</h3>
              <p style={{ color: 'var(--blog-text-muted)', marginBottom: '15px', fontSize: '0.9rem' }}>
                Subscribe to get the latest articles and updates.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" className="newsletter-input" placeholder="Your email address" required />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>

          </aside>
        </div>

      <CTA />

      </main>
    </div>
  );
}