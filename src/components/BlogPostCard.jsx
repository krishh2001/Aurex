import React, { memo } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiCalendarLine, RiTimeLine, RiHashtag } from "react-icons/ri";

function BlogPostCard({ post }) {
  return (
    <article className="blog-list-post-card">
      <div className="blog-list-post-image">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          decoding="async"
          width={640}
          height={220}
        />
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
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="blog-list-tag">{tag}</span>
          ))}
        </div>
        <Link to={`/blog/${post.id}`} className="blog-list-read-more">
          Read More <RiArrowRightLine />
        </Link>
      </div>
    </article>
  );
}

export default memo(BlogPostCard);
