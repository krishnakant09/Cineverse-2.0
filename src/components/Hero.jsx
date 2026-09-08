import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Abstract Dark Ambient Background Glows */}
      <div className="hero-ambient-glow hero-glow-1" />
      <div className="hero-ambient-glow hero-glow-2" />

      {/* Grid line overlay */}
      <div className="hero-grid-overlay" />

      <div className="cinematic-container hero-container">
        {/* Top Camera Metadata HUD */}
        <motion.div 
          className="hero-hud-bar"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="hud-pill">
            <span className="rec-dot" />
            <span>DIRECTOR & LEAD EDITOR</span>
          </div>
          <span className="hud-divider">/</span>
          <div className="hud-pill hud-specs">
            <span>RAW DCI 4K</span>
            <span className="hud-dot-sep">•</span>
            <span>24.00 FPS</span>
            <span className="hud-dot-sep">•</span>
            <span>COLOR • VFX • STORY</span>
          </div>
        </motion.div>

        {/* Huge Editorial Hero Typography */}
        <div className="hero-headline-wrapper">
          <motion.div
            className="hero-line"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 className="hero-title-main">I CREATE</h1>
          </motion.div>

          <motion.div
            className="hero-line"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            <span className="hero-title-gradient">WHAT YOU FEEL.</span>
          </motion.div>
        </div>

        {/* Subtitle & Actions */}
        <div className="hero-bottom-wrapper">
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Different styles. Different stories. One editor.
          </motion.p>

          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <button 
              onClick={scrollToWork} 
              className="btn-cinematic btn-hero"
              aria-label="View Selected Work"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDownRight size={18} />
            </button>

            <a 
              href="https://www.instagram.com/cineverseby_kk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <span>INSTAGRAM REELS ↗</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator Prompt */}
        <motion.div 
          className="hero-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="scroll-cue-line" />
          <span className="scroll-cue-text">SCROLL TO ENTER THE TIMELINE</span>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 6rem;
          padding-bottom: 4rem;
          overflow: hidden;
          background: radial-gradient(circle at 50% 30%, #101010 0%, #080808 70%, #040404 100%);
        }

        .hero-ambient-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
          opacity: 0.15;
        }

        .hero-glow-1 {
          top: 15%;
          left: 20%;
          width: 500px;
          height: 500px;
          background: #e59b55;
        }

        .hero-glow-2 {
          bottom: 10%;
          right: 15%;
          width: 450px;
          height: 450px;
          background: #ff3344;
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        /* Top HUD */
        .hero-hud-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
          flex-wrap: wrap;
        }

        .hud-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: clamp(0.7rem, 1vw, 0.8rem);
          letter-spacing: 0.14em;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.9rem;
          border-radius: 2px;
        }

        .hud-specs {
          color: var(--text-muted);
        }

        .hud-dot-sep {
          color: rgba(255, 255, 255, 0.2);
        }

        .hud-divider {
          color: var(--border-subtle);
          font-family: var(--font-mono);
        }

        /* Headline */
        .hero-headline-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: clamp(1.8rem, 4vw, 3rem);
        }

        .hero-line {
          overflow: hidden;
        }

        .hero-title-main {
          font-family: var(--font-display);
          font-size: clamp(3.8rem, 13vw, 11rem);
          line-height: 0.88;
          color: var(--text-primary);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          text-shadow: 0 0 50px rgba(242, 238, 233, 0.1);
        }

        .hero-title-gradient {
          font-family: var(--font-display);
          font-size: clamp(3.8rem, 13vw, 11rem);
          line-height: 0.88;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          background: linear-gradient(180deg, #ffffff 15%, #b5b0a8 85%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Bottom Section */
        .hero-bottom-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 720px;
        }

        .hero-subtitle {
          font-family: var(--font-mono);
          font-size: clamp(1.05rem, 2.2vw, 1.45rem);
          color: var(--text-secondary);
          letter-spacing: 0.02em;
          line-height: 1.5;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 1.1rem 2.2rem;
          font-size: 0.9rem;
          background: #f2eee9;
          color: #080808;
          border: 1px solid #f2eee9;
          font-weight: 600;
        }

        .btn-hero::before {
          background: #ffffff;
        }

        .btn-hero:hover {
          color: #080808;
          box-shadow: 0 0 30px rgba(242, 238, 233, 0.35);
        }

        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.1rem 1.8rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          text-decoration: none;
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .btn-hero-secondary:hover {
          color: var(--text-primary);
          border-color: var(--border-medium);
          background: rgba(255, 255, 255, 0.03);
        }

        /* Scroll Cue */
        .hero-scroll-cue {
          margin-top: clamp(3rem, 6vw, 5rem);
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .scroll-cue-line {
          width: 48px;
          height: 1px;
          background: var(--text-muted);
          position: relative;
          overflow: hidden;
        }

        .scroll-cue-line::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: var(--accent-default);
          animation: cueScroll 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        @keyframes cueScroll {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .scroll-cue-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .hud-specs {
            display: none;
          }
          .hud-divider {
            display: none;
          }
          .hero-cta-group {
            width: 100%;
          }
          .btn-hero, .btn-hero-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
