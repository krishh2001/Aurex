import React, { useMemo, useState, useDeferredValue, useCallback } from "react";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../data/company";
import {
  RiArticleLine,
  RiSearchLine,
  RiEyeLine,
  RiFilterLine,
  RiCloseLine,
} from "react-icons/ri";

import BlogPostCard from "../components/BlogPostCard";
import CTA from "../components/CTA";
import { allBlogPosts, blogCategories, categoryCounts } from "../data/blogPosts";

export default function BlogList() {
  usePageMeta(PAGE_META.blog);
  usePageEffects(".bg-large-text");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [showFilter, setShowFilter] = useState(false);

  const deferredSearch = useDeferredValue(searchQuery);

  const filteredPosts = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();
    return allBlogPosts.filter((post) => {
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [deferredSearch, selectedCategory]);

  const displayPosts = useMemo(
    () => filteredPosts.slice(0, visiblePosts),
    [filteredPosts, visiblePosts]
  );

  const isSearchPending = searchQuery !== deferredSearch;

  const handleLoadMore = useCallback(() => {
    setVisiblePosts((prev) => prev + 6);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedCategory("All");
  }, []);

  return (
    <div className="blog-list-wrapper">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      <div className="bg-large-text" aria-hidden="true">Blogs</div>
      <div className="tech-line left-line"></div>
      <div className="tech-line right-line"></div>

      <main className="container">
        <section className="blog-list-hero-section">
          <div className="blog-list-hero-content">
            <div className="section-badge"><RiArticleLine /> Tech Insights</div>
            <h1>Engineering Notes & <br />Industry Perspectives</h1>
            <p className="blog-list-hero-text">
              Practical articles on software delivery, cloud operations, security, and modern IT strategy from the AUREX team.
            </p>
          </div>
        </section>

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
                  type="button"
                  className="blog-list-clear-search"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <RiCloseLine />
                </button>
              )}
            </div>

            <button
              type="button"
              className="blog-list-filter-toggle"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <RiFilterLine /> Filter
            </button>
          </div>

          <div className={`blog-list-categories-filter ${showFilter ? "active" : ""}`}>
            <div className="blog-list-categories-header">
              <span className="blog-list-categories-title">Filter by Category</span>
              <button type="button" className="blog-list-clear-filters" onClick={clearFilters}>
                Clear All
              </button>
            </div>
            <div className="blog-list-categories-grid">
              {blogCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`blog-list-category-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <span className="blog-list-category-count">
                    {categoryCounts[category] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="blog-list-results-info">
            <span className="blog-list-results-count">
              Showing {displayPosts.length} of {filteredPosts.length} articles
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            </span>
            {searchQuery && (
              <span className="blog-list-search-info">
                Search results for: <strong>&quot;{searchQuery}&quot;</strong>
              </span>
            )}
          </div>
        </div>

        <div
          className={`blog-list-posts-container ${isSearchPending ? "blog-list-posts-container--pending" : ""}`}
        >
          <div className="blog-list-posts-grid">
            {displayPosts.length > 0 ? (
              displayPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="blog-list-no-results">
                <p>No articles found. Try a different search or category.</p>
                <button type="button" onClick={clearFilters} className="blog-list-clear-filters-btn">
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {displayPosts.length > 0 && visiblePosts < filteredPosts.length && (
            <div className="blog-list-load-more">
              <button type="button" className="blog-list-load-btn" onClick={handleLoadMore}>
                <RiEyeLine /> View More Articles
              </button>
            </div>
          )}
        </div>

        <CTA pageKey="blog" />
      </main>
    </div>
  );
}
