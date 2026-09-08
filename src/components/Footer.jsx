import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "cineversebykk@gmail.com"; // Editable email placeholder

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="contact">
      {/* Background Ambience */}
      <div className="footer-ambient-glow" />

      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-marker">
          <span className="section-label">05 / END CREDITS</span>
          <h2 className="section-title footer-huge-cta">
            LET'S CREATE<br />SOMETHING.
          </h2>
          <p className="section-subtitle">
            Have a project that demands a distinct visual language, meticulous rhythm, and cinematic color? Let's talk.
          </p>
        </div>

        {/* Contact CTAs */}
        <div className="footer-action-row">
          <a
            href="https://www.instagram.com/cineverseby_kk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cinematic btn-cinematic-filled footer-cta-btn"
          >
            <InstagramIcon size={18} />
            <span>INSTAGRAM DM ↗</span>
          </a>

          <button
            onClick={copyEmailToClipboard}
            className="btn-cinematic footer-cta-btn"
            aria-label="Copy contact email"
          >
            {copied ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
            <span>{copied ? "EMAIL COPIED!" : `COPY ${email}`}</span>
          </button>
        </div>

        {/* Cinematic End Credits Roll Section */}
        <div className="credits-roll-board">
          <div className="credits-hud-header">
            <span>ROLLING CREDITS</span>
            <span>PROD NO. 0024 // REEL FINAL</span>
          </div>

          <div className="credits-columns-grid">
            <div className="credit-item">
              <span className="credit-role">CREATOR & VISUAL STORYTELLER</span>
              <span className="credit-name">Krishna Kant Sharma</span>
            </div>

            <div className="credit-item">
              <span className="credit-role">BRAND & STUDIO</span>
              <span className="credit-name">Cineverse by KK</span>
            </div>

            <div className="credit-item">
              <span className="credit-role">PRIMARY SOFTWARE STACK</span>
              <span className="credit-name">DaVinci Resolve • Premiere Pro • After Effects • CapCut</span>
            </div>

            <div className="credit-item">
              <span className="credit-role">INSTAGRAM HANDLE</span>
              <a 
                href="https://www.instagram.com/cineverseby_kk"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-link"
              >
                @cineverseby_kk ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-info">
            <span className="footer-brand">CINEVERSE BY KK</span>
            <span className="footer-sep">•</span>
            <span className="footer-copy">© {new Date().getFullYear()} Krishna Kant Sharma. All rights reserved.</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="btn-back-to-top"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          position: relative;
          padding: clamp(5rem, 10vw, 8.5rem) 0 3rem;
          background: #050505;
          border-top: 1px solid var(--border-subtle);
          overflow: hidden;
        }

        .footer-ambient-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 350px;
          background: radial-gradient(circle, rgba(229, 155, 85, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .footer-huge-cta {
          font-size: clamp(3rem, 9vw, 7.5rem);
          line-height: 0.9;
        }

        .footer-action-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: clamp(4rem, 7vw, 6rem);
          flex-wrap: wrap;
        }

        .footer-cta-btn {
          padding: 1.2rem 2.4rem;
          font-size: 0.88rem;
        }

        /* Credits Roll Board */
        .credits-roll-board {
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          padding: 2.5rem 0;
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .credits-hud-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          color: var(--text-muted);
        }

        .credits-columns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .credit-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .credit-role {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          color: var(--text-muted);
        }

        .credit-name {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .credit-link {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--accent-default);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .credit-link:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 1.2rem;
        }

        .footer-bottom-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .footer-brand {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .footer-sep {
          color: var(--border-medium);
        }

        .btn-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          padding: 0.45rem 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          border-radius: 2px;
        }

        .btn-back-to-top:hover {
          color: var(--text-primary);
          border-color: var(--border-medium);
          background: rgba(255, 255, 255, 0.04);
        }

        @media (max-width: 640px) {
          .footer-action-row {
            flex-direction: column;
            align-items: stretch;
          }
          .footer-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
