import React, { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import { useIntervalWhenVisible } from "../hooks/useIntervalWhenVisible";
import { optimizeImageUrl } from "../utils/imageUrl";
import PersonAvatar from "../components/PersonAvatar";
import PremiumServiceIcon from "../components/PremiumServiceIcon";
import {
    RiFlashlightFill, RiStackLine,
    RiGithubFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiReactjsLine,
    RiTerminalBoxFill, RiDatabase2Line, RiGitlabFill, RiAndroidFill, RiAppleFill,
    RiGoogleFill, RiAmazonFill, RiWindowsFill, RiChromeFill,
    RiLinkedinFill, RiTwitterXLine,
} from "react-icons/ri";

import CTA from "../components/CTA";
import { AUREX_METHOD, PAGE_META, TEAM_MEMBERS, TEAM_SECTION } from "../data/company";
import { TEAM_SKILL_ICONS, TEAM_SKILL_ACCENTS, TEAM_SKILL_ORBIT, TEAM_SKILL_ORBIT_MOBILE, TEAM_SKILL_ORBIT_MOBILE_SM } from "../data/teamSkills";

const TEAM_SOCIAL_ICONS = {
    linkedin: RiLinkedinFill,
    twitter: RiTwitterXLine,
    github: RiGithubFill,
};

function memberPhoto(member) {
    if (!member.image?.trim()) return "";
    return member.image.startsWith("http")
        ? optimizeImageUrl(member.image, 400)
        : member.image;
}

export default function About() {
    const [currentMember, setCurrentMember] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [viewportTier, setViewportTier] = useState(() => {
        if (typeof window === "undefined") return "desktop";
        if (window.matchMedia("(max-width: 480px)").matches) return "small";
        if (window.matchMedia("(max-width: 768px)").matches) return "tablet";
        return "desktop";
    });
    const pageRef = useRef(null);
    const stageRef = useRef(null);
    const pathRef = useRef(null);
    const iconsRef = useRef([]);
    const teamRef = useRef(null);

    usePageMeta(PAGE_META.about);
    usePageEffects(".bg-large-text");
    useReveal(".about-reveal", pageRef);

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

    useEffect(() => {
        const stage = stageRef.current;
        const path = pathRef.current;
        if (!stage || !path) return undefined;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return undefined;

        let rafId = null;
        let isVisible = false;
        let iconData = [];
        let layout = { centerX: 0, vertexY: 0, boundary: 0 };

        const iconSpacing = 110;
        const animationSpeed = 0.6;
        const steepness = 1800;
        const vertexOffset = 50;
        const iconCount = techStack.length;

        const initTech = () => {
            const width = stage.offsetWidth;
            const height = stage.offsetHeight;
            const centerX = width / 2;
            const vertexY = height - vertexOffset;
            const drawWidth = width / 2 + 400;
            const getCurveY = (x) => vertexY - (x * x) / steepness;

            let pathData = `M ${-drawWidth + centerX} ${getCurveY(-drawWidth)}`;
            for (let x = -drawWidth; x <= drawWidth; x += 10) {
                pathData += ` L ${x + centerX} ${getCurveY(x)}`;
            }
            path.setAttribute("d", pathData);

            layout = {
                centerX,
                vertexY,
                boundary: (iconCount * iconSpacing) / 2,
            };

            if (!iconData.length) {
                iconData = techStack.map((_, index) => ({
                    x: index * iconSpacing - layout.boundary,
                }));
            }
        };

        const animate = () => {
            if (!isVisible) {
                rafId = null;
                return;
            }

            const { centerX, vertexY, boundary } = layout;
            const totalWidth = iconCount * iconSpacing;

            for (let i = 0; i < iconData.length; i += 1) {
                const data = iconData[i];
                data.x += animationSpeed;
                if (data.x > boundary) data.x -= totalWidth;

                const el = iconsRef.current[i];
                if (el) {
                    const currentY = vertexY - (data.x * data.x) / steepness;
                    el.style.left = `${data.x + centerX - 32}px`;
                    el.style.top = `${currentY - 32}px`;
                }
            }

            rafId = requestAnimationFrame(animate);
        };

        const startLoop = () => {
            if (rafId === null) rafId = requestAnimationFrame(animate);
        };

        const stopLoop = () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        };

        const visibilityObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) startLoop();
                else stopLoop();
            },
            { threshold: 0.05, rootMargin: "80px" }
        );

        initTech();
        visibilityObserver.observe(stage);

        const onResize = () => initTech();
        window.addEventListener("resize", onResize, { passive: true });

        return () => {
            stopLoop();
            visibilityObserver.disconnect();
            window.removeEventListener("resize", onResize);
        };
    }, [techStack.length]);

    useEffect(() => {
        const mqTablet = window.matchMedia("(max-width: 768px)");
        const mqSmall = window.matchMedia("(max-width: 480px)");
        const sync = () => {
            if (mqSmall.matches) setViewportTier("small");
            else if (mqTablet.matches) setViewportTier("tablet");
            else setViewportTier("desktop");
        };
        sync();
        mqTablet.addEventListener("change", sync);
        mqSmall.addEventListener("change", sync);
        return () => {
            mqTablet.removeEventListener("change", sync);
            mqSmall.removeEventListener("change", sync);
        };
    }, []);

    const skillOrbit =
        viewportTier === "small"
            ? TEAM_SKILL_ORBIT_MOBILE_SM
            : viewportTier === "tablet"
              ? TEAM_SKILL_ORBIT_MOBILE
              : TEAM_SKILL_ORBIT;

    const avatarSize =
        viewportTier === "small" ? 108 : viewportTier === "tablet" ? 120 : 184;

    const changeSlide = (index) => {
        if (index === currentMember) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentMember(index);
            setIsAnimating(false);
        }, 400);
    };

    useIntervalWhenVisible(teamRef, () => {
        changeSlide((currentMember + 1) % TEAM_MEMBERS.length);
    }, 4000);

    const member = TEAM_MEMBERS[currentMember];
    const memberContentStyle = {
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
        transition: 'all 0.4s ease',
    };

    const memberImageStyle = {
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'scale(0.9) rotate(-5deg)' : 'scale(1) rotate(0deg)',
        transition: 'all 0.4s ease',
    };

    return (
        <div className="about-page-wrapper" ref={pageRef}>
            <div className="ambient-glow"></div>
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>
            <div className="bg-large-text" aria-hidden="true">About</div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            <main className="container">
                <section className="about-story-section about-reveal">
                    <div className="about-story-grid">
                        <div className="about-story-content">
                            <div className="about-section-badge"><RiFlashlightFill /> Who We Are</div>
                            <h1>Your IT Project Delivery Partner</h1>
                            <p className="about-story-text">
                                Founded in 2015, AUREX is an IT company that takes client projects and delivers production-ready
                                websites, web applications, and mobile apps—backed by cloud, security, and support when you need them.
                            </p>
                            <p className="about-story-text">
                                You bring requirements and goals; we handle discovery, design, development, testing, and launch—with
                                clear milestones whether you need a corporate site, a customer portal, or a full product build.
                            </p>
                            <div style={{ marginTop: '30px', paddingLeft: '20px', borderLeft: '2px solid var(--accent-primary)', display: 'inline-block' }}>
                                <p style={{ color: '#fff', fontStyle: 'italic' }}>
                                    &ldquo;Every delivery is documented, tested, and handed over ready for real users—not demo-only builds.&rdquo;
                                </p>
                            </div>
                        </div>

                        <div className="about-story-image-wrapper">
                            <img
                                src={optimizeImageUrl("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", 900)}
                                alt="AUREX office workspace"
                                className="about-story-img"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                                width={900}
                                height={600}
                            />
                            <div className="about-exp-badge">
                                <div className="about-exp-number">10+</div>
                                <div className="about-exp-text">Years<br />Delivering IT</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-process-section about-reveal">
                    <div className="section-header">
                        <div className="about-section-badge">{AUREX_METHOD.badge}</div>
                        <h2 className="section-title">{AUREX_METHOD.title}</h2>
                        <p className="section-desc">{AUREX_METHOD.description}</p>
                    </div>

                    <div className="about-process-principles" role="list">
                        {AUREX_METHOD.principles.map((item) => (
                            <div key={item.label} className="about-process-principle" role="listitem">
                                <span className="about-process-principle__value">{item.value}</span>
                                <span className="about-process-principle__label">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="about-process-grid">
                        {AUREX_METHOD.steps.map((item, idx) => (
                            <article
                                className={`about-process-card about-reveal about-delay-${(idx + 1) * 100}`}
                                key={item.id}
                            >
                                <span className="about-step-number">{item.id}</span>
                                <div className="about-process-icon">
                                    <PremiumServiceIcon type={item.icon} className="about-process-premium-icon" />
                                </div>
                                <h3 className="about-process-title">{item.title}</h3>
                                <p className="about-process-desc">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

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

                <section className="about-team-section about-reveal">
                    <div className="section-header">
                        <div className="about-section-badge">{TEAM_SECTION.subtitle}</div>
                        <h2 className="section-title">{TEAM_SECTION.title}</h2>
                        <p className="section-desc">{TEAM_SECTION.description}</p>
                    </div>

                    <div className="about-orbit-wrapper" ref={teamRef}>
                        <div className="about-orbit-stage">
                        <div className="about-orbit-system">
                            <div className="about-orbit-ring about-orbit-ring--outer" aria-hidden />
                            <div className="about-orbit-ring about-orbit-ring--inner" aria-hidden />
                            <div className="about-sun-glow-ring"></div>

                            <div className="about-sun-profile" style={memberImageStyle}>
                                <PersonAvatar
                                    name={member.name}
                                    image={memberPhoto(member)}
                                    size={avatarSize}
                                />
                            </div>

                            {[1, 2, 3, 4, 5, 6].map((pos) => {
                                const skill = member.skills[pos - 1];
                                const SkillIcon = skill ? TEAM_SKILL_ICONS[skill.icon] : null;
                                const accent = TEAM_SKILL_ACCENTS[(pos - 1) % TEAM_SKILL_ACCENTS.length];
                                const orbit = skillOrbit[pos - 1];
                                return (
                                    <div
                                        key={pos}
                                        className={`about-orbit-bubble ${!isAnimating && skill ? "visible" : ""}`}
                                        style={{
                                            transitionDelay: `${pos * 0.05}s`,
                                            "--skill-accent": accent,
                                            "--ox": orbit.ox,
                                            "--oy": orbit.oy,
                                        }}
                                    >
                                        {skill && (
                                            <div className="about-skill-chip">
                                                {SkillIcon && (
                                                    <span className="about-skill-chip__icon" aria-hidden>
                                                        <SkillIcon />
                                                    </span>
                                                )}
                                                <span className="about-skill-chip__label">{skill.label}</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        </div>

                        <ul
                            className="about-team-skills-mobile"
                            style={memberContentStyle}
                            aria-label={`${member.name} skills`}
                        >
                            {member.skills.filter(Boolean).map((skill, i) => {
                                const SkillIcon = TEAM_SKILL_ICONS[skill.icon];
                                const accent = TEAM_SKILL_ACCENTS[i % TEAM_SKILL_ACCENTS.length];
                                return (
                                    <li key={skill.label}>
                                        <div
                                            className="about-skill-chip"
                                            style={{ "--skill-accent": accent }}
                                        >
                                            {SkillIcon && (
                                                <span className="about-skill-chip__icon" aria-hidden>
                                                    <SkillIcon />
                                                </span>
                                            )}
                                            <span className="about-skill-chip__label">{skill.label}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="about-member-info" style={memberContentStyle}>
                            <h2 className="about-member-name">{member.name}</h2>
                            <p className="about-member-role">{member.role}</p>

                            <div className="about-team-social-links">
                                {member.socials
                                    .filter((s) => s.url?.trim())
                                    .map((social) => {
                                        const Icon = TEAM_SOCIAL_ICONS[social.type];
                                        if (!Icon) return null;
                                        return (
                                            <a
                                                href={social.url}
                                                key={`${social.type}-${social.url}`}
                                                className="about-team-social-icon"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} on ${social.type}`}
                                            >
                                                <Icon />
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>

                        <div className="about-slider-dots">
                            {TEAM_MEMBERS.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`about-team-dot ${idx === currentMember ? 'active' : ''}`}
                                    onClick={() => changeSlide(idx)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Show ${TEAM_MEMBERS[idx].name}`}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") changeSlide(idx);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <CTA pageKey="about" />
            </main>
        </div>
    );
}
