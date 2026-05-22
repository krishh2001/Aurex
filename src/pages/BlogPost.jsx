import { useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import { getPostById, getRelatedPosts } from "../data/blogPosts";
import { PAGE_META } from "../data/company";
import CTA from "../components/CTA";
import {
  RiCalendarLine,
  RiTimeLine,
  RiArrowLeftLine,
} from "react-icons/ri";

function ArticleBody({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === "h2") {
      return <h2 key={i}>{block.text}</h2>;
    }
    if (block.type === "ul") {
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{block.text}</p>;
  });
}

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);
  const related = post ? getRelatedPosts(post.id) : [];
  const bgTextRef = useRef(null);

  usePageEffects(bgTextRef);

  usePageMeta(
    post
      ? {
          title: `${post.title} | AUREX Insights`,
          description: post.excerpt,
        }
      : PAGE_META.notFound
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      <div className="tech-line left-line"></div>
      <div className="tech-line right-line"></div>

      <h1 className="bg-large-text" ref={bgTextRef}>
        Blog
      </h1>

      <main className="container">
        <div className="blog-details-layout">
          <Link to="/blog" className="blog-back-link">
            <RiArrowLeftLine /> Back to Insights
          </Link>

          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{post.category}</span>
              <span className="article-date">
                <RiCalendarLine style={{ marginRight: "5px" }} /> {post.date}
              </span>
              <span className="article-read-time">
                <RiTimeLine style={{ marginRight: "5px" }} /> {post.readTime}
              </span>
            </div>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-excerpt">{post.excerpt}</p>

            <div className="author-info">
              <div className="author-avatar author-avatar--initials" aria-hidden>
                AX
              </div>
              <div className="author-details">
                <h4>{post.author.name}</h4>
                <p>{post.author.role}</p>
              </div>
            </div>
          </header>

          <article className="article-content">
            <div className="featured-image">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                width={960}
                height={540}
              />
            </div>

            <div className="article-body">
              <ArticleBody blocks={post.body} />
            </div>
          </article>

          <footer className="article-footer">
            <div className="article-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="article-tag">
                  {tag}
                </span>
              ))}
            </div>
          </footer>

          {related.length > 0 && (
            <section className="related-articles">
              <h2 className="blogpost-title">Related Articles</h2>
              <div className="related-grid">
                {related.map((item) => (
                  <Link to={`/blog/${item.id}`} className="related-card" key={item.id}>
                    <div className="related-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        width={480}
                        height={270}
                      />
                    </div>
                    <div className="related-content">
                      <h3 className="related-title">{item.title}</h3>
                      <div className="related-date">{item.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <CTA pageKey="blogPost" />
        </div>
      </main>
    </>
  );
}
