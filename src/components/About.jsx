import React from 'react';
import { motion } from 'framer-motion';
import { ProfileWithFallback } from './MediaFallback';

export default function About() {
  const stats = [
    { label: "YEARS CUTTING", value: "4+" },
    { label: "PROJECTS DELIVERED", value: "150+" },
    { label: "IMPRESSIONS & VIEWS", value: "30M+" },
    { label: "FRAMERATE OBSESSION", value: "24 FPS" }
  ];

  const highlights = [
    "DaVinci Resolve Color Grading & ACES Color Science",
    "Pacing, Rhythm, & Eye-Trace Narrative Flow",
    "Layered Sound Design, Foley, & Low-End Transients",
    "High-Retention Mobile Short-Form & Cinematic Widescreen"
  ];

  return (
    <section className="about-section" id="about">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-marker">
          <span className="section-label">04 / BEHIND THE FRAMES</span>
          <h2 className="section-title">HEY, I'M KK.</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Portrait & Lens Marks */}
          <div className="about-media-col">
            <div className="profile-frame-wrap">
              {/* Director Portrait with automatic procedural fallback */}
              <ProfileWithFallback 
                src="/assets/profile.jpg" 
                alt="Krishna Kant Sharma (KK) - Cineverse" 
              />

              {/* Lens markings & film borders */}
              <div className="lens-overlay-corners">
                <span className="lens-bracket tl" />
                <span className="lens-bracket tr" />
                <span className="lens-bracket bl" />
                <span className="lens-bracket br" />
              </div>

              <div className="profile-caption-bar">
                <span className="caption-director">KRISHNA KANT SHARMA</span>
                <span className="caption-tag">FOUNDER / CINEVERSE</span>
              </div>
            </div>

            {/* Hint for developer/creator */}
            <div className="profile-file-hint">
              <span>PHOTO PATH:</span> <code>public/assets/profile.jpg</code>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Metrics */}
          <div className="about-content-col">
            <div className="about-bio-text">
              <p className="bio-lead">
                I'm <strong>Krishna Kant Sharma</strong>, the creator behind Cineverse by KK.
              </p>
              <p className="bio-body">
                I explore cinematic storytelling, dark visuals, creative edits, fast-paced content and experimental visuals.
              </p>
              <p className="bio-body">
                To me, video editing isn't just joining clips together—it's psychological manipulation of time, emotion, and sound. Whether creating an ominous dark thriller sequence, a high-octane music promo, or a commercial film that grips viewers from frame one, my mission is simple:
              </p>
              <blockquote className="bio-quote">
                "I CREATE WHAT YOU FEEL."
              </blockquote>
            </div>

            {/* Core Competencies */}
            <div className="about-highlights-list">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <span className="highlight-bullet" />
                  <span className="highlight-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          padding: clamp(5rem, 10vw, 8.5rem) 0;
          background: #080808;
          border-top: 1px solid var(--border-subtle);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: clamp(2.5rem, 6vw, 5.5rem);
          align-items: start;
        }

        /* Left Col */
        .about-media-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-frame-wrap {
          position: relative;
          width: 100%;
          border: 1px solid var(--border-medium);
          background: #111111;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
        }

        .lens-overlay-corners {
          position: absolute;
          inset: 1rem;
          pointer-events: none;
          z-index: 10;
        }

        .lens-bracket {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: rgba(242, 238, 233, 0.4);
          border-style: solid;
        }

        .tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
        .tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
        .bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
        .br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

        .profile-caption-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0.8rem 1.2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          z-index: 10;
        }

        .caption-director {
          color: #f2eee9;
          font-weight: 600;
        }

        .caption-tag {
          color: var(--accent-default);
        }

        .profile-file-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .profile-file-hint code {
          background: rgba(255, 255, 255, 0.04);
          padding: 0.15rem 0.4rem;
          border-radius: 2px;
          color: var(--text-secondary);
        }

        /* Right Col */
        .about-content-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-bio-text {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .bio-lead {
          font-family: var(--font-body);
          font-size: clamp(1.25rem, 2vw, 1.6rem);
          color: var(--text-primary);
          line-height: 1.4;
        }

        .bio-lead strong {
          color: #ffffff;
          font-weight: 700;
        }

        .bio-body {
          font-family: var(--font-body);
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .bio-quote {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          letter-spacing: 0.04em;
          color: var(--accent-default);
          margin-top: 0.5rem;
          text-shadow: 0 0 25px rgba(229, 155, 85, 0.2);
        }

        .about-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
        }

        .highlight-bullet {
          width: 6px;
          height: 6px;
          background: var(--accent-default);
          border-radius: 50%;
        }

        /* Stats Grid */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-media-col {
            max-width: 480px;
          }
        }
      `}</style>
    </section>
  );
}
