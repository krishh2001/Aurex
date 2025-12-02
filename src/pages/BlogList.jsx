import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiArticleLine,
  RiArrowRightLine,
  RiSearchLine,
  RiEyeLine,
  RiFilterLine,
  RiCloseLine,
  RiMailSendLine,
  RiTimeLine,
  RiCalendarLine,
  RiHashtag
} from "react-icons/ri";


export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // All blog posts data - Cleaner and more professional
  const allBlogPosts = [
    {
      id: 1,
      title: "Advanced React Patterns for 2023",
      excerpt: "Master the latest React design patterns and architectural best practices for building scalable applications.",
      category: "Web Development",
      date: "June 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      id: 2,
      title: "Modern UI/UX Design Principles",
      excerpt: "Explore contemporary design principles that enhance user experience and drive engagement.",
      category: "UI/UX Design",
      date: "June 12, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      tags: ["Design", "UI", "UX", "Principles"]
    },
    {
      id: 3,
      title: "Cloud Infrastructure Optimization",
      excerpt: "Strategies for optimizing cloud resources and reducing costs while maintaining performance.",
      category: "Cloud Solutions",
      date: "June 10, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      tags: ["Cloud", "AWS", "Optimization"]
    },
    {
      id: 4,
      title: "Performance Optimization Techniques",
      excerpt: "Essential techniques for improving web application performance and user experience.",
      category: "Web Development",
      date: "June 8, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      tags: ["Performance", "Optimization", "Web"]
    },
    {
      id: 5,
      title: "Mobile App Development Trends",
      excerpt: "Latest trends and technologies shaping the future of mobile application development.",
      category: "Mobile Development",
      date: "June 5, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      tags: ["Mobile", "Trends", "Development"]
    },
    {
      id: 6,
      title: "Data Security Best Practices",
      excerpt: "Comprehensive guide to implementing robust security measures in modern applications.",
      category: "Security",
      date: "June 3, 2023",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Security", "Data", "Best Practices"]
    },
    {
      id: 7,
      title: "AI Integration in Web Apps",
      excerpt: "How to effectively integrate artificial intelligence features into web applications.",
      category: "Web Development",
      date: "May 30, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["AI", "Integration", "Web Apps"]
    },
    {
      id: 8,
      title: "Design Systems Implementation",
      excerpt: "Step-by-step guide to creating and implementing design systems for consistent UI.",
      category: "UI/UX Design",
      date: "May 25, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      tags: ["Design Systems", "UI", "Consistency"]
    },
    {
      id: 9,
      title: "Serverless Architecture Patterns",
      excerpt: "Exploring modern serverless patterns for scalable and cost-effective applications.",
      category: "Cloud Solutions",
      date: "May 20, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      tags: ["Serverless", "Architecture", "Cloud"]
    },
    {
      id: 10,
      title: "Modern JavaScript Best Practices",
      excerpt: "Essential JavaScript patterns and practices for writing clean, efficient code.",
      category: "Web Development",
      date: "May 18, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      tags: ["JavaScript", "Best Practices", "ES6+"]
    },
    {
      id: 11,
      title: "Responsive Web Design Strategies",
      excerpt: "Modern approaches to creating responsive websites that work across all devices.",
      category: "UI/UX Design",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      tags: ["Responsive", "Design", "Mobile"]
    },
    {
      id: 12,
      title: "Database Optimization Techniques",
      excerpt: "Advanced techniques for optimizing database performance and query efficiency.",
      category: "Backend Development",
      date: "May 12, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Database", "Optimization", "Performance"]
    }
  ];

  // Get unique categories
  const categories = ["All", ...new Set(allBlogPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Posts to display
  const displayPosts = filteredPosts.slice(0, visiblePosts);

  // Handle load more
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Effects: Particles & Parallax
  useEffect(() => {
    const handleScroll = () => {
      const bgText = document.querySelector('.bg-large-text');
      if (bgText) {
        let scroll = window.scrollY;
        bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
        bgText.style.opacity = 1 - (scroll * 0.001);
      }
    };
    window.addEventListener('scroll', handleScroll);

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
        <section className="blog-list-hero-section">
          <div className="blog-list-hero-content">
            <div className="section-badge"><RiArticleLine /> Insights & Updates</div>
            <h1>Digital Insights & <br />Industry Trends</h1>
            <p className="blog-list-hero-text">
              Explore our latest articles on web development, design trends, and digital innovation.
            </p>
          </div>
        </section>

        {/* Filter & Search Section */}
        <div className="blog-list-filters-section">
          <div className="blog-list-search-container">
            <div className="blog-list-search-box">
              <RiSearchLine className="blog-list-search-icon" />
              <input
                type="text"
                className="blog-list-search-input"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="blog-list-clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  <RiCloseLine />
                </button>
              )}
            </div>

            <button
              className="blog-list-filter-toggle"
              onClick={() => setShowFilter(!showFilter)}
            >
              <RiFilterLine /> Filter
            </button>
          </div>

          {/* Category Filter */}
          <div className={`blog-list-categories-filter ${showFilter ? 'active' : ''}`}>
            <div className="blog-list-categories-header">
              <span className="blog-list-categories-title">Filter by Category</span>
              <button
                className="blog-list-clear-filters"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </div>
            <div className="blog-list-categories-grid">
              {categories.map(category => (
                <button
                  key={category}
                  className={`blog-list-category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <span className="blog-list-category-count">
                    {category === "All"
                      ? allBlogPosts.length
                      : allBlogPosts.filter(p => p.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="blog-list-results-info">
            <span className="blog-list-results-count">
              Showing {displayPosts.length} of {filteredPosts.length} articles
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            </span>
            {searchQuery && (
              <span className="blog-list-search-info">
                Search results for: <strong>"{searchQuery}"</strong>
              </span>
            )}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="blog-list-posts-container">
          {isLoading ? (
            <div className="blog-list-loading">
              <div className="blog-list-loading-spinner"></div>
              <p>Loading articles...</p>
            </div>
          ) : (
            <>
              <div className="blog-list-posts-grid">
                {displayPosts.length > 0 ? (
                  displayPosts.map((post) => (
                    <article className="blog-list-post-card" key={post.id}>
                      <div className="blog-list-post-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="blog-list-post-content">
                        <div className="blog-list-post-meta">
                          <span className="blog-list-post-category">{post.category}</span>
                          <span><RiCalendarLine /> {post.date}</span>
                          <span><RiTimeLine /> {post.readTime}</span>
                        </div>
                        <h3 className="blog-list-post-title">{post.title}</h3>
                        <p className="blog-list-post-excerpt">{post.excerpt}</p>
                        <div className="blog-list-tags-container">
                          <RiHashtag className="blog-list-tag-icon" />
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="blog-list-tag">{tag}</span>
                          ))}
                        </div>
                        <Link to={`/blog/${post.id}`} className="blog-list-read-more">
                          Read More <RiArrowRightLine />
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="blog-list-no-results">
                    <p>No articles found. Try a different search or category.</p>
                    <button onClick={clearFilters} className="blog-list-clear-filters-btn">
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Load More Button */}
              {displayPosts.length > 0 && visiblePosts < filteredPosts.length && (
                <div className="blog-list-load-more">
                  <button className="blog-list-load-btn" onClick={handleLoadMore}>
                    <RiEyeLine /> View More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Newsletter Section */}
        <section className="blog-list-newsletter-section">
          <div className="blog-list-newsletter-container">
            <div className="blog-list-newsletter-content">
              <RiMailSendLine className="blog-list-newsletter-icon" />
              <h2 className="blog-list-newsletter-title">Stay Updated</h2>
              <p className="blog-list-newsletter-text">
                Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered directly to your inbox.
              </p>
              <form className="blog-list-newsletter-form" onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.querySelector('.blog-list-newsletter-input').value;
                alert(`Thank you for subscribing with: ${email}`);
                e.target.reset();
              }}>
                <input
                  type="email"
                  className="blog-list-newsletter-input"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="blog-list-newsletter-btn">
                  Subscribe <RiArrowRightLine />
                </button>
              </form>
              <p className="blog-list-newsletter-note">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}