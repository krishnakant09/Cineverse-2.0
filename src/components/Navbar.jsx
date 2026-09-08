import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timecode, setTimecode] = useState("00:00:00:00");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real-time 24fps film timecode simulation
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      frame = (frame + 1) % 24;
      const f = String(frame).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "STYLES", href: "#styles" },
    { name: "TOOLS", href: "#tools" },
    { name: "ABOUT", href: "#about" },
  ];

  return (
    <>
      <header className={`cine-navbar ${scrolled ? 'cine-navbar-scrolled' : ''}`}>
        <div className="cinematic-container navbar-inner">
          {/* Logo Brand */}
          <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-main">CINEVERSE</span>
            <span className="logo-sub">BY KK</span>
          </a>

          {/* Center Timecode Indicator (Desktop) */}
          <div className="navbar-hud">
            <span className="rec-dot" />
            <span className="hud-label">REC</span>
            <span className="hud-timecode">{timecode}</span>
            <span className="hud-fps">24FPS</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/cineverseby_kk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-link-instagram"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-content">
              <div className="mobile-nav-hud">
                <span className="rec-dot" />
                <span className="hud-label">LIVE TIMECODE</span>
                <span className="hud-timecode">{timecode}</span>
              </div>

              <div className="mobile-nav-links">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <span className="mobile-link-num">0{idx + 1}</span>
                    <span className="mobile-link-text">{link.name}</span>
                  </motion.a>
                ))}

                <motion.a
                  href="https://www.instagram.com/cineverseby_kk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link mobile-link-ig"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <span className="mobile-link-num">05</span>
                  <span className="mobile-link-text">INSTAGRAM ↗</span>
                </motion.a>
              </div>

              <div className="mobile-nav-footer">
                <p>Krishna Kant Sharma • Video Editor</p>
                <span>@cineverseby_kk</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .cine-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all var(--transition-smooth);
          background: linear-gradient(180deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0) 100%);
        }

        .cine-navbar-scrolled {
          padding: 1rem 0;
          background: rgba(8, 8, 8, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .navbar-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          gap: 0.1rem;
          user-select: none;
        }

        .logo-main {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: var(--text-primary);
          letter-spacing: 0.08em;
          line-height: 0.9;
        }

        .logo-sub {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          color: var(--accent-default);
          margin-top: 0.15rem;
        }

        /* Center HUD */
        .navbar-hud {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.9rem;
          border-radius: 2px;
        }

        .hud-label {
          color: #ff3344;
          font-weight: 600;
        }

        .hud-timecode {
          color: var(--text-primary);
          font-variant-numeric: tabular-nums;
        }

        .hud-fps {
          color: var(--text-muted);
          font-size: 0.68rem;
        }

        /* Desktop Nav */
        .navbar-desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          padding: 0.3rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--text-primary);
          transition: width var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link-instagram {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-default);
          border: 1px solid rgba(229, 155, 85, 0.25);
          padding: 0.4rem 0.85rem;
          border-radius: 2px;
          background: rgba(229, 155, 85, 0.05);
        }

        .nav-link-instagram:hover {
          color: #ffffff;
          border-color: var(--accent-default);
          background: rgba(229, 155, 85, 0.15);
        }

        .nav-link-instagram::after {
          display: none;
        }

        /* Mobile Hamburger */
        .navbar-mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Mobile Drawer */
        .mobile-nav-overlay {
          position: fixed;
          top: 72px;
          left: 0;
          width: 100%;
          height: calc(100vh - 72px);
          background: rgba(8, 8, 8, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 2.5rem 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .mobile-nav-hud {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .mobile-link {
          display: flex;
          align-items: baseline;
          gap: 1.2rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .mobile-link-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-default);
        }

        .mobile-link-text {
          font-family: var(--font-display);
          font-size: 2.2rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .mobile-link-ig .mobile-link-text {
          color: var(--accent-default);
        }

        .mobile-nav-footer {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.5rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .navbar-hud {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .navbar-desktop-nav {
            display: none;
          }
          .navbar-mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
