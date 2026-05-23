import React from "react";
import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiFlashlightFill,
} from "react-icons/ri";
import PremiumServiceIcon from "./PremiumServiceIcon";
import HomeAboutScene3D from "./HomeAboutScene3D";
import { HOME_ABOUT_SECTION } from "../data/company";

export default function HomeAboutSection() {

  return (
    <section
      className="home-about section-margin"
      id="about"
      aria-labelledby="home-about-title"
    >
      <div className="section-header reveal">
        <span className="section-subtitle">{HOME_ABOUT_SECTION.subtitle}</span>
        <h2 id="home-about-title" className="section-title">
          {HOME_ABOUT_SECTION.title}
        </h2>
        <p className="section-desc">{HOME_ABOUT_SECTION.description}</p>
      </div>

      <div className="home-about__story reveal">
        <div className="home-about__copy">
          <div className="about-section-badge">
            <RiFlashlightFill aria-hidden />
            {HOME_ABOUT_SECTION.badge}
          </div>

          {HOME_ABOUT_SECTION.paragraphs.map((text) => (
            <p key={text.slice(0, 48)} className="home-about__text">
              {text}
            </p>
          ))}

          <blockquote className="home-about__quote">
            <p>&ldquo;{HOME_ABOUT_SECTION.quote}&rdquo;</p>
          </blockquote>

          <ul className="home-about__pillars">
            {HOME_ABOUT_SECTION.pillars.map((item) => (
              <li key={item.title} className="home-about__pillar">
                <PremiumServiceIcon
                  type={item.icon}
                  className="home-about__pillar-icon"
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <HomeAboutScene3D />
      </div>

      <ul className="home-about__metrics reveal">
        {HOME_ABOUT_SECTION.stats.map((stat) => (
          <li key={stat.label} className="home-about__metric">
            <span className="home-about__metric-value">{stat.value}</span>
            <span className="home-about__metric-label">{stat.label}</span>
          </li>
        ))}
      </ul>

      <div className="home-section-cta-row reveal">
        <Link to={HOME_ABOUT_SECTION.cta.to} className="home-section-cta">
          {HOME_ABOUT_SECTION.cta.label}
          <RiArrowRightLine aria-hidden />
        </Link>
      </div>
    </section>
  );
}
