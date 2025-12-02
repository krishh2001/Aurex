import { useState, useEffect, useRef } from 'react';

// Import Icons from react-icons
import {
    RiCalendarLine,
    RiTimeLine,
    RiTwitterFill,
    RiLinkedinFill,
    RiFacebookFill,
    RiLink,
    RiHeartLine,
    RiBookmarkLine,
    RiReplyLine,
    RiArrowRightLine,
    RiMailSendLine,
} from 'react-icons/ri';

export default function BlogPost() {
    const [particles, setParticles] = useState([]);
    const bgTextRef = useRef(null);

    // Handle Parallax Effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Parallax Text Logic
            if (bgTextRef.current) {
                bgTextRef.current.style.transform = `translate(-50%, ${scrollY * 0.15}px)`;
                bgTextRef.current.style.opacity = 1 - (scrollY * 0.001);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Generate Particles
    useEffect(() => {
        const newParticles = [];
        for (let i = 0; i < 30; i++) {
            const size = Math.random() * 3 + 1;
            newParticles.push({
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animationDelay: `-${Math.random() * 20}s`,
                opacity: Math.random() * 0.5,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <>
            <div className="ambient-glow"></div>
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>

            {/* Particles Container */}
            <div className="particles" id="particles">
                {particles.map((style, index) => (
                    <div key={index} className="particle" style={style}></div>
                ))}
            </div>

            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            {/* Background large text */}
            <h1 className="bg-large-text" ref={bgTextRef}>Blog</h1>

            <main className="container">

                {/* Blog Content Wrapper */}
                <div className="blog-details-layout">

                    {/* Article Header */}
                    <header className="article-header">
                        <div className="article-meta">
                            <span className="article-category">Web Development</span>
                            <span className="article-date">
                                <RiCalendarLine style={{ marginRight: '5px' }} /> June 15, 2023
                            </span>
                            <span className="article-read-time">
                                <RiTimeLine style={{ marginRight: '5px' }} /> 8 min read
                            </span>
                        </div>
                        <h1 className="article-title">The Future of Web Development: Trends to Watch in 2023</h1>
                        <p className="article-excerpt">Explore the emerging technologies and methodologies that are shaping the
                            future of web development. From AI-powered tools to new frameworks, discover what's next for the
                            industry.</p>

                        <div className="author-info">
                            <div className="author-avatar">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Author" />
                            </div>
                            <div className="author-details">
                                <h4>Alex Johnson</h4>
                                <p>Senior Web Developer at Nova Digital</p>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <article className="article-content">
                        <div className="featured-image">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Featured Image" />
                        </div>

                        <div className="article-body">
                            <p>The web development landscape is evolving at an unprecedented pace. As we move further into
                                2023, several key trends are emerging that promise to reshape how we build and interact with
                                web applications. In this comprehensive guide, we'll explore the most significant
                                developments that every web developer should be aware of.</p>

                            <h2>The Rise of AI-Powered Development Tools</h2>
                            <p>Artificial Intelligence is no longer a futuristic concept—it's actively transforming how
                                developers work. AI-powered tools are becoming increasingly sophisticated, offering
                                capabilities that range from code completion to automated testing and optimization.</p>

                            <p>One of the most exciting developments is the integration of AI in development environments.
                                Tools like GitHub Copilot and Amazon CodeWhisperer are changing how developers write code,
                                providing intelligent suggestions that can significantly speed up development time.</p>

                            <blockquote>
                                "AI-assisted development isn't about replacing developers—it's about augmenting their
                                capabilities and allowing them to focus on more complex, creative problems."
                            </blockquote>

                            <h3>Key Benefits of AI in Web Development</h3>
                            <ul>
                                <li>Faster development cycles through intelligent code completion</li>
                                <li>Improved code quality with automated testing and optimization</li>
                                <li>Enhanced accessibility through automated compliance checking</li>
                                <li>Better user experiences with personalized content delivery</li>
                            </ul>

                            <h2>Jamstack and Serverless Architecture</h2>
                            <p>The Jamstack architecture (JavaScript, APIs, and Markup) continues to gain momentum, offering
                                improved performance, security, and scalability. Combined with serverless computing, it's
                                enabling developers to build highly dynamic applications without managing complex
                                infrastructure.</p>

                            <p>Serverless functions have become more accessible, with platforms like Vercel, Netlify, and
                                AWS Lambda making it easier than ever to deploy backend functionality without worrying about
                                server management.</p>

                            <div className="code-block">
                  // Example of a serverless function in Next.js<br />
                                export default function handler(req, res) {'{'}<br />
                                &nbsp;&nbsp;const {'{'} name = 'World' {'}'} = req.query;<br />
                                &nbsp;&nbsp;res.status(200).json({'{'} message: `Hello ${'{'}name{'}'}!` {'}'});<br />
                                {'}'}
                            </div>

                            <p className="image-caption">A simple serverless function example in Next.js</p>

                            <h2>WebAssembly (Wasm) for High-Performance Applications</h2>
                            <p>WebAssembly is revolutionizing what's possible in the browser by enabling near-native
                                performance for computationally intensive tasks. From video editing to 3D rendering and
                                scientific simulations, Wasm is opening up new possibilities for web applications.</p>

                            <p>Major frameworks like React and Vue are exploring ways to integrate WebAssembly, allowing
                                developers to build more powerful applications that can handle complex computations directly
                                in the browser.</p>

                            <h2>Progressive Web Apps (PWAs) Becoming Mainstream</h2>
                            <p>Progressive Web Apps continue to blur the line between web and native applications. With
                                improved browser support and more sophisticated capabilities, PWAs are becoming a viable
                                alternative to traditional mobile apps for many use cases.</p>

                            <p>Key PWA features like offline functionality, push notifications, and device hardware access
                                are now more reliable and easier to implement, making them an attractive option for
                                businesses looking to reach users across multiple platforms.</p>

                            <h2>Low-Code and No-Code Platforms</h2>
                            <p>While professional developers will always be needed for complex applications, low-code and
                                no-code platforms are empowering non-technical users to create functional web applications.
                                This trend is democratizing web development and allowing businesses to prototype and build
                                solutions faster than ever before.</p>

                            <p>These platforms are particularly valuable for internal tools, marketing sites, and simple
                                customer-facing applications where custom development might be overkill.</p>

                            <h2>Conclusion</h2>
                            <p>The future of web development is exciting and full of possibilities. As AI, WebAssembly, and
                                new architectural patterns continue to evolve, developers will have more powerful tools at
                                their disposal to create amazing web experiences.</p>

                            <p>Staying current with these trends is essential for any web developer looking to build a
                                successful career in this rapidly changing field. The key is to embrace continuous learning
                                and be open to experimenting with new technologies as they emerge.</p>
                        </div>
                    </article>

                    {/* Article Footer */}
                    <footer className="article-footer">
                        <div className="article-tags">
                            <a href="#" className="article-tag">Web Development</a>
                            <a href="#" className="article-tag">AI</a>
                            <a href="#" className="article-tag">Jamstack</a>
                            <a href="#" className="article-tag">WebAssembly</a>
                            <a href="#" className="article-tag">PWAs</a>
                            <a href="#" className="article-tag">Trends</a>
                        </div>

                        <div className="article-actions">
                            <div className="social-share">
                                <a href="#" className="share-btn"><RiTwitterFill /></a>
                                <a href="#" className="share-btn"><RiLinkedinFill /></a>
                                <a href="#" className="share-btn"><RiFacebookFill /></a>
                                <a href="#" className="share-btn"><RiLink /></a>
                            </div>

                            <div className="action-btns">
                                <a href="#" className="action-btn">
                                    <RiHeartLine /> Like
                                </a>
                                <a href="#" className="action-btn">
                                    <RiBookmarkLine /> Save
                                </a>
                            </div>
                        </div>
                    </footer>

                    {/* Comments Section */}
                    <section className="comments-section">
                        <h2 className="blogpost-title">Comments (3)</h2>

                        <div className="comment-form">
                            <h3>Leave a Comment</h3>
                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" className="form-input" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-input" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-textarea" placeholder="Your Comment" required></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Post Comment</button>
                            </form>
                        </div>

                        <div className="comments-list">
                            <div className="comment">
                                <div className="comment-header">
                                    <div className="comment-avatar">
                                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                            alt="Commenter" />
                                    </div>
                                    <div>
                                        <div className="comment-author">Sarah Miller</div>
                                        <div className="comment-date">June 16, 2023</div>
                                    </div>
                                </div>
                                <div className="comment-body">
                                    <p>Great article! I've been experimenting with WebAssembly in my projects, and the
                                        performance improvements are incredible. Do you have any recommendations for
                                        resources to learn more about integrating Wasm with React?</p>
                                </div>
                                <a href="#" className="comment-reply">
                                    <RiReplyLine /> Reply
                                </a>
                            </div>

                            <div className="comment">
                                <div className="comment-header">
                                    <div className="comment-avatar">
                                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Commenter" />
                                    </div>
                                    <div>
                                        <div className="comment-author">Michael Chen</div>
                                        <div className="comment-date">June 17, 2023</div>
                                    </div>
                                </div>
                                <div className="comment-body">
                                    <p>I appreciate the balanced perspective on AI tools. There's a lot of fear about AI
                                        replacing developers, but I agree that it's more about augmentation. The key is
                                        learning how to work effectively with these tools rather than resisting them.</p>
                                </div>
                                <a href="#" className="comment-reply">
                                    <RiReplyLine /> Reply
                                </a>
                            </div>

                            <div className="comment">
                                <div className="comment-header">
                                    <div className="comment-avatar">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                                            alt="Commenter" />
                                    </div>
                                    <div>
                                        <div className="comment-author">David Wilson</div>
                                        <div className="comment-date">June 18, 2023</div>
                                    </div>
                                </div>
                                <div className="comment-body">
                                    <p>Excellent overview of the current trends. I'd add that TypeScript adoption continues
                                        to grow rapidly. The type safety it provides is becoming essential for larger
                                        projects, especially with the complexity of modern web applications.</p>
                                </div>
                                <a href="#" className="comment-reply">
                                    <RiReplyLine /> Reply
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="related-articles">
                        <h2 className="blogpost-title">Related Articles</h2>
                        <div className="related-grid">
                            <article className="related-card">
                                <div className="related-image">
                                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Related Article" />
                                </div>
                                <div className="related-content">
                                    <h3 className="related-title">Building Scalable React Applications</h3>
                                    <div className="related-date">June 10, 2023</div>
                                </div>
                            </article>

                            <article className="related-card">
                                <div className="related-image">
                                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                        alt="Related Article" />
                                </div>
                                <div className="related-content">
                                    <h3 className="related-title">Mobile-First Design: Why It Matters</h3>
                                    <div className="related-date">May 28, 2023</div>
                                </div>
                            </article>

                            <article className="related-card">
                                <div className="related-image">
                                    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                                        alt="Related Article" />
                                </div>
                                <div className="related-content">
                                    <h3 className="related-title">Building Progressive Web Apps with Next.js</h3>
                                    <div className="related-date">May 10, 2023</div>
                                </div>
                            </article>
                        </div>
                    </section>

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
        </>
    );
}
