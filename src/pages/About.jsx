import React, { useEffect, useRef, useState } from "react";
// Import Icons
import {
    RiFlashlightFill, RiSearchEyeLine, RiLightbulbFlashLine, RiPantoneLine,
    RiCodeSSlashLine, RiToolsLine, RiRocket2Line, RiStackLine, RiArrowRightLine,
    RiLinkedinFill, RiTwitterXLine, RiDribbbleLine, RiInstagramLine, RiBehanceLine,
    RiGithubFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiReactjsLine,
    RiTerminalBoxFill, RiDatabase2Line, RiGitlabFill, RiAndroidFill, RiAppleFill,
    RiGoogleFill, RiAmazonFill, RiWindowsFill, RiChromeFill
} from "react-icons/ri";

import CTA from "../components/CTA";

export default function About() {
    const [currentMember, setCurrentMember] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const stageRef = useRef(null);
    const pathRef = useRef(null);
    const iconsRef = useRef([]);

    const techStack = [
        { icon: <RiHtml5Fill />, color: '#E34F26' },
        { icon: <RiCss3Fill />, color: '#1572B6' },
        { icon: <RiJavascriptFill />, color: '#F7DF1E' },
        { icon: <RiReactjsLine />, color: '#61DAFB' },
        { icon: <RiTerminalBoxFill />, color: '#1f8f3d' },
        { icon: <RiDatabase2Line />, color: '#336791' },
        { icon: <RiGithubFill />, color: '#ffffff' },
        { icon: <RiGitlabFill />, color: '#FC6D26' },
        { icon: <RiAndroidFill />, color: '#3DDC84' },
        { icon: <RiAppleFill />, color: '#A2AAAD' },
        { icon: <RiGoogleFill />, color: '#EA4335' },
        { icon: <RiAmazonFill />, color: '#FF9900' },
        { icon: <RiWindowsFill />, color: '#0078D6' },
        { icon: <RiChromeFill />, color: '#4285F4' },
        { icon: <RiStackLine />, color: '#3b82f6' },
    ];

    const teamData = [
        {
            name: "Vishnu Rajput",
            role: "Founder & CEO",
            image: "https://softwarehousetechnology.com/assets/images/team/vishnu.png",
            skills: ["Leadership", "Business Strategy", "Brand Vision", "Operations", "Team Management", "Growth"],
            socials: [
                { icon: <RiLinkedinFill />, link: '#' },
                { icon: <RiTwitterXLine />, link: '#' }
            ]
        },
        {
            name: "Samsunge Sharma",
            role: "Head of Product",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop",
            skills: ["Product Strategy", "User Research", "Agile Workflow", "UX Planning", "Data Insights", "Metrics"],
            socials: [
                { icon: <RiLinkedinFill />, link: '#' },
                { icon: <RiDribbbleLine />, link: '#' }
            ]
        },
        {
            name: "Carbon Kapoor",
            role: "Lead Designer",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
            skills: ["UI/UX Design", "Brand Identity", "Figma Expert", "Motion Graphics", "Wireframing", "Systems"],
            socials: [
                { icon: <RiInstagramLine />, link: '#' },
                { icon: <RiBehanceLine />, link: '#' }
            ]
        },
        {
            name: "Vivo Verma",
            role: "Senior Developer",
            image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1000&auto=format&fit=crop",
            skills: ["React.js", "Node.js", "API Engineering", "AWS Cloud", "System Architecture", "Security"],
            socials: [
                { icon: <RiGithubFill />, link: '#' }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("active");
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll(".about-reveal").forEach((el) => observer.observe(el));

        // Particle System
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

        const handleScroll = () => {
            const bgText = document.querySelector('.bg-large-text');
            if (bgText) {
                let scroll = window.scrollY;
                bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
                bgText.style.opacity = 1 - (scroll * 0.001);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const stage = stageRef.current;
        const path = pathRef.current;
        if (!stage || !path) return;

        let animationFrameId;
        let iconData = [];

        const iconSpacing = 110;
        const animationSpeed = 0.6;
        const steepness = 1800;
        const vertexOffset = 50;

        const initTech = () => {
            const width = stage.offsetWidth;
            const height = stage.offsetHeight;
            const centerX = width / 2;
            const vertexY = height - vertexOffset;

            const drawWidth = width / 2 + 400;
            const getCurveY = (x) => vertexY - (Math.pow(x, 2) / steepness);

            let pathData = `M ${-drawWidth + centerX} ${getCurveY(-drawWidth)}`;
            for (let x = -drawWidth; x <= drawWidth; x += 10) {
                pathData += ` L ${x + centerX} ${getCurveY(x)}`;
            }
            path.setAttribute('d', pathData);

            iconData = techStack.map((_, index) => ({
                x: (index * iconSpacing) - (techStack.length * iconSpacing) / 2
            }));
        };

        const animate = () => {
            const width = stage.offsetWidth;
            const height = stage.offsetHeight;
            const centerX = width / 2;
            const vertexY = height - vertexOffset;
            const totalWidth = techStack.length * iconSpacing;
            const boundary = totalWidth / 2;

            iconData.forEach((data, i) => {
                data.x += animationSpeed;
                if (data.x > boundary) data.x -= totalWidth;

                const currentY = vertexY - (Math.pow(data.x, 2) / steepness);

                const el = iconsRef.current[i];
                if (el) {
                    el.style.left = `${data.x + centerX - 32}px`;
                    el.style.top = `${currentY - 32}px`;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initTech();
        animate();

        window.addEventListener('resize', initTech);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', initTech);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide((currentMember + 1) % teamData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentMember]);

    const changeSlide = (index) => {
        if (index === currentMember) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentMember(index);
            setIsAnimating(false);
        }, 400);
    };

    const memberContentStyle = {
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
        transition: 'all 0.4s ease'
    };

    const memberImageStyle = {
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'scale(0.9) rotate(-5deg)' : 'scale(1) rotate(0deg)',
        transition: 'all 0.4s ease'
    };

    return (
        <div className="about-page-wrapper">
            <div className="ambient-glow"></div>
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>
            <h1 className="bg-large-text">About</h1>
            <div className="particles" id="particles"></div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            <main className="container">
                {/* ORIGIN / STORY SECTION */}
                <section className="about-story-section about-reveal">
                    <div className="about-story-grid">
                        <div className="about-story-content">
                            <div className="about-section-badge"><RiFlashlightFill /> Our Origin</div>
                            <h1>Engineering the Future</h1>
                            <p className="about-story-text">
                                AUREX began with a simple goal: build digital systems that feel powerful, precise, and
                                effortless. No outdated methods. No overcomplication. Only sharp engineering and minimal design brought
                                together as one.
                            </p>
                            <p className="about-story-text">
                                Over the years, we've transformed into a performance-first digital company trusted for building
                                fast interfaces, scalable architectures, and polished customer experiences.
                            </p>
                            <div style={{ marginTop: '30px', paddingLeft: '20px', borderLeft: '2px solid var(--accent-primary)', display: 'inline-block' }}>
                                <p style={{ color: '#fff', fontStyle: 'italic' }}>
                                    "Our work blends precision engineering with clean design.
                                    Technology should feel powerful, not overwhelming."
                                </p>
                            </div>
                        </div>

                        <div className="about-story-image-wrapper about-reveal about-delay-200">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Office" className="about-story-img" />
                            <div className="about-exp-badge">
                                <div className="about-exp-number">5+</div>
                                <div className="about-exp-text">Years of<br />Innovation</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="about-process-section about-reveal">
                    <div className="section-header">
                        <div className="about-section-badge">How We Work</div>
                        <h2 className="section-title">The AUREX Method</h2>
                        <p className="section-desc">
                            A focused workflow that removes guesswork and builds digital systems with clarity and intent.
                        </p>
                    </div>

                    <div className="about-process-grid">
                        {[
                            { id: "01", icon: <RiSearchEyeLine />, title: "Discovery & Research", desc: "We study your goals, audience, and digital landscape to form a clear direction." },
                            { id: "02", icon: <RiLightbulbFlashLine />, title: "Strategy & Structure", desc: "We design a scalable plan that aligns with performance, brand, and business needs." },
                            { id: "03", icon: <RiPantoneLine />, title: "UI/UX Design", desc: "Interfaces crafted to be clean, modern, intuitive, and visually striking." },
                            { id: "04", icon: <RiCodeSSlashLine />, title: "Development", desc: "Fast, secure, and optimized engineering built with modern technologies." },
                            { id: "05", icon: <RiToolsLine />, title: "Testing & Polish", desc: "We refine every detail to ensure performance, stability, and consistency." },
                            { id: "06", icon: <RiRocket2Line />, title: "Launch & Scale", desc: "Your product goes live-backed with ongoing support and growth optimization." }
                        ].map((item, idx) => (
                            <div className={`about-process-card about-reveal about-delay-${(idx + 1) * 100}`} key={idx}>
                                <span className="about-step-number">{item.id}</span>
                                <div className="about-process-icon">{item.icon}</div>
                                <h3 className="about-process-title">{item.title}</h3>
                                <p className="about-process-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TECH STACK SECTION */}
                <section className="about-tech-stack-section about-reveal">
                    <div className="section-header">
                        <div className="about-section-badge"><RiStackLine /> Our Arsenal</div>
                        <h2 className="section-title">Technology That Powers AUREX</h2>
                        <p className="section-desc">
                            We work with modern, stable, and future-focused technologies to ensure speed and scalability.
                        </p>
                    </div>

                    <div className="about-tech-curve-stage" ref={stageRef}>
                        <svg className="about-tech-curve-svg">
                            <path ref={pathRef} className="about-tech-curve-path" />
                        </svg>
                        {techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="about-tech-icon-bubble"
                                ref={el => iconsRef.current[i] = el}
                                style={{
                                    color: tech.color,
                                    borderColor: `${tech.color}40`,
                                    boxShadow: `0 10px 20px ${tech.color}15`
                                }}
                            >
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </section>

                {/* TEAM SECTION */}
                <section className="about-team-section about-reveal">
                    <div className="section-header">
                        <div className="about-section-badge">The Team</div>
                        <h2 className="section-title">People Behind The Vision</h2>
                        <p className="section-desc">A tight crew of creators, strategists, and engineers.</p>
                    </div>

                    <div className="about-orbit-wrapper">
                        <div className="about-orbit-system">
                            <div className="about-sun-glow-ring"></div>

                            <div className="about-sun-profile">
                                <img
                                    src={teamData[currentMember].image}
                                    alt="Team Member"
                                    style={memberImageStyle}
                                />
                            </div>

                            {[1, 2, 3, 4, 5, 6].map((pos) => {
                                const skill = teamData[currentMember].skills[pos - 1];
                                return (
                                    <div
                                        key={pos}
                                        className={`about-orbit-bubble about-bubble-pos-${pos} ${!isAnimating && skill ? 'visible' : ''}`}
                                        style={{ transitionDelay: `${pos * 0.05}s` }}
                                    >
                                        {skill}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="about-member-info" style={memberContentStyle}>
                            <h2 className="about-member-name">{teamData[currentMember].name}</h2>
                            <p className="about-member-role">{teamData[currentMember].role}</p>

                            <div className="about-team-social-links">
                                {teamData[currentMember].socials.map((social, idx) => (
                                    <a href={social.link} key={idx} className="about-team-social-icon">{social.icon}</a>
                                ))}
                            </div>
                        </div>

                        <div className="about-slider-dots">
                            {teamData.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`about-team-dot ${idx === currentMember ? 'active' : ''}`}
                                    onClick={() => changeSlide(idx)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
        </div>
    );
}