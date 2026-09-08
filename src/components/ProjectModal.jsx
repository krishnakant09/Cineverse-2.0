import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { SlateFallback } from './MediaFallback';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-dialog"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{ '--modal-accent': project.accent }}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-header-left">
              <span className="modal-category">{project.category}</span>
              <span className="modal-divider">•</span>
              <span className="modal-number">SCENE {project.number || '01'}</span>
            </div>

            <button 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Video / Media Container */}
          <div className="modal-media-viewport">
            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                playsInline
                className="modal-video-element"
                poster={project.image}
              >
                Your browser does not support HTML5 video.
              </video>
            ) : project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="modal-fallback-img"
              />
            ) : (
              <SlateFallback
                title={project.title}
                category={project.category}
                accent={project.accent}
                aspectRatio={project.aspectRatio}
                number={project.number}
              />
            )}
          </div>

          {/* Modal Content Details */}
          <div className="modal-details">
            <div className="modal-title-row">
              <h2 className="modal-project-title">{project.title}</h2>
              <a
                href={project.instagram || "https://www.instagram.com/cineverseby_kk"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cinematic btn-modal-watch"
              >
                <span>VIEW ON INSTAGRAM</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="modal-description">{project.description}</p>

            {/* Technical Metadata Breakdown */}
            <div className="modal-specs-grid">
              <div className="spec-card">
                <span className="spec-label">ASPECT RATIO</span>
                <span className="spec-value">{project.aspectRatio || '2.39:1'}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">RUNTIME</span>
                <span className="spec-value">{project.duration || '01:00'}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">YEAR</span>
                <span className="spec-value">{project.year || '2024'}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">WORKFLOW</span>
                <span className="spec-value">{project.software ? project.software.join(', ') : 'DaVinci Resolve'}</span>
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="modal-tags-row">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <style>{`
          .modal-backdrop {
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0, 0, 0, 0.88);
            backdrop-filter: blur(16px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: clamp(1rem, 3vw, 2.5rem);
            overflow-y: auto;
          }

          .modal-dialog {
            background: #111111;
            border: 1px solid var(--modal-accent);
            box-shadow: 0 20px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.05);
            width: 100%;
            max-width: 1000px;
            max-height: 92vh;
            overflow-y: auto;
            border-radius: 4px;
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 1.8rem;
            border-bottom: 1px solid var(--border-subtle);
            background: #0d0d0d;
          }

          .modal-header-left {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-family: var(--font-mono);
            font-size: 0.75rem;
            letter-spacing: 0.16em;
          }

          .modal-category {
            color: var(--modal-accent);
            font-weight: 500;
          }

          .modal-divider {
            color: var(--border-medium);
          }

          .modal-number {
            color: var(--text-secondary);
          }

          .modal-close-btn {
            background: transparent;
            border: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            padding: 0.4rem;
            cursor: pointer;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--transition-fast);
          }

          .modal-close-btn:hover {
            color: #ffffff;
            border-color: var(--text-primary);
            background: rgba(255, 255, 255, 0.08);
          }

          .modal-media-viewport {
            width: 100%;
            background: #050505;
            position: relative;
            aspect-ratio: 16 / 9;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .modal-video-element {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .modal-fallback-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .modal-details {
            padding: clamp(1.5rem, 3vw, 2.5rem);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .modal-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            flex-wrap: wrap;
          }

          .modal-project-title {
            font-family: var(--font-display);
            font-size: clamp(2rem, 4.5vw, 3.2rem);
            letter-spacing: 0.04em;
            color: var(--text-primary);
            text-transform: uppercase;
            line-height: 1;
          }

          .btn-modal-watch {
            background: var(--modal-accent);
            color: #080808;
            border-color: var(--modal-accent);
            font-weight: 600;
          }

          .btn-modal-watch::before {
            background: #ffffff;
          }

          .btn-modal-watch:hover {
            color: #080808;
            box-shadow: 0 0 20px var(--modal-accent);
          }

          .modal-description {
            font-family: var(--font-body);
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.65;
            max-width: 800px;
          }

          .modal-specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 1rem;
            padding: 1.25rem 0;
            border-top: 1px solid var(--border-subtle);
            border-bottom: 1px solid var(--border-subtle);
          }

          .spec-card {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }

          .spec-label {
            font-family: var(--font-mono);
            font-size: 0.68rem;
            letter-spacing: 0.16em;
            color: var(--text-muted);
          }

          .spec-value {
            font-family: var(--font-mono);
            font-size: 0.88rem;
            color: var(--text-primary);
          }

          .modal-tags-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
