import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stylesData } from '../data/styles';

export default function ExploreVerse() {
  const [activeStyle, setActiveStyle] = useState(stylesData[0]);

  return (
    <section 
      className="verse-section" 
      id="styles"
      style={{
        '--verse-accent': activeStyle.accent,
        '--verse-accent-glow': `${activeStyle.accent}22`
      }}
    >
      {/* Ambient background glow shifting with current active style */}
      <div className="verse-ambient-glow" />

      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-marker">
          <span className="section-label">02 / EXPLORE THE VERSE</span>
          <h2 className="section-title">NO SINGLE STYLE.</h2>
          <p className="section-subtitle">
            A cookie-cutter edit is a dead edit. Every story dictates its own color grade, cutting tempo, camera velocity, and sound frequency.
          </p>
        </div>

        <div className="verse-interactive-layout">
          {/* Large Interactive Words Column */}
          <div className="verse-words-column">
            {stylesData.map((style, idx) => {
              const isActive = activeStyle.id === style.id;
              return (
                <div
                  key={style.id}
                  className={`verse-word-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveStyle(style)}
                  onClick={() => setActiveStyle(style)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setActiveStyle(style); }}
                >
                  <span className="verse-word-num">0{idx + 1}</span>
                  <span className="verse-word-title">{style.name}</span>
                  <span 
                    className="verse-word-indicator"
                    style={{ backgroundColor: style.accent }}
                  />
                </div>
              );
            })}
          </div>

          {/* Dynamic Style Visual Preview Board */}
          <div className="verse-preview-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStyle.id}
                className="verse-card-inner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="card-top-hud">
                  <div className="card-hud-badge">
                    <span className="rec-dot" style={{ backgroundColor: activeStyle.accent }} />
                    <span>STYLE PROFILE // {activeStyle.name}</span>
                  </div>
                  <span className="card-hud-accent-tag" style={{ color: activeStyle.accent }}>
                    {activeStyle.accent}
                  </span>
                </div>

                <div className="card-quote-box">
                  <h3 className="card-tagline">"{activeStyle.tagline}"</h3>
                </div>

                <p className="card-body-description">{activeStyle.description}</p>

                {/* Keyword Attributes */}
                <div className="card-attributes">
                  <span className="attr-heading">CORE ATTRIBUTES:</span>
                  <div className="attr-pills-list">
                    {activeStyle.keywords.map((kw, i) => (
                      <span 
                        key={i} 
                        className="tag-badge"
                        style={{ borderColor: `${activeStyle.accent}44` }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Film framing aesthetics */}
                <div className="card-footer-specs">
                  <span>FRAME DYNAMICS: CUSTOM TUNED</span>
                  <span>ACES COLOR WORKFLOW</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .verse-section {
          position: relative;
          padding: clamp(5rem, 10vw, 8.5rem) 0;
          background: #080808;
          border-top: 1px solid var(--border-subtle);
          overflow: hidden;
          transition: background-color 0.6s ease;
        }

        .verse-ambient-glow {
          position: absolute;
          top: 30%;
          right: 10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: var(--verse-accent);
          filter: blur(140px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 1;
          transition: background 0.6s ease;
        }

        .verse-interactive-layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: center;
        }

        /* Words Column */
        .verse-words-column {
          display: flex;
          flex-direction: column;
        }

        .verse-word-item {
          display: flex;
          align-items: baseline;
          padding: clamp(0.75rem, 1.8vw, 1.25rem) 0;
          border-bottom: 1px solid var(--border-subtle);
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
          user-select: none;
        }

        .verse-word-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          width: 50px;
          transition: color var(--transition-fast);
        }

        .verse-word-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.5vw, 5.2rem);
          letter-spacing: 0.04em;
          color: var(--text-secondary);
          line-height: 0.95;
          text-transform: uppercase;
          transition: all var(--transition-fast);
        }

        .verse-word-indicator {
          margin-left: auto;
          width: 0;
          height: 2px;
          transition: width var(--transition-smooth);
        }

        .verse-word-item:hover .verse-word-title {
          color: var(--text-primary);
          transform: translateX(8px);
        }

        .verse-word-item.active .verse-word-title {
          color: var(--text-primary);
          transform: translateX(12px);
          text-shadow: 0 0 35px rgba(255, 255, 255, 0.2);
        }

        .verse-word-item.active .verse-word-num {
          color: var(--verse-accent);
        }

        .verse-word-item.active .verse-word-indicator {
          width: 24px;
        }

        /* Preview Card */
        .verse-preview-card {
          background: #111111;
          border: 1px solid var(--border-medium);
          border-left: 3px solid var(--verse-accent);
          padding: clamp(1.8rem, 3.5vw, 3rem);
          border-radius: 4px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px var(--verse-accent-glow);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .verse-card-inner {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }

        .card-top-hud {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.16em;
        }

        .card-hud-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-secondary);
        }

        .card-hud-accent-tag {
          font-weight: 600;
        }

        .card-tagline {
          font-family: var(--font-heading);
          font-size: clamp(1.3rem, 2.2vw, 1.8rem);
          color: var(--text-primary);
          line-height: 1.25;
          font-weight: 700;
        }

        .card-body-description {
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .card-attributes {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: auto;
          padding-top: 1rem;
        }

        .attr-heading {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          color: var(--text-muted);
        }

        .attr-pills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .card-footer-specs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          border-top: 1px solid var(--border-subtle);
          padding-top: 1rem;
        }

        @media (max-width: 960px) {
          .verse-interactive-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
