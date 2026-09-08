import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { SlateFallback } from './MediaFallback';

export default function ProjectCard({ project, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !hasVideoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented or file not present
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const showVideo = project.video && !hasVideoError && isHovered;
  const showCustomMedia = (project.image && !hasImageError) || (project.video && !hasVideoError);

  return (
    <motion.article 
      className="cine-project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        '--card-accent': project.accent,
        '--card-accent-glow': `${project.accent}33`,
        '--card-accent-border': `${project.accent}88`
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Visual Frame / Media Area */}
      <div className="card-media-viewport">
        {/* Dynamic Project Accent Border Glow on Hover */}
        <div className={`card-accent-glow ${isHovered ? 'active' : ''}`} />

        {/* Media elements */}
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            onError={() => setHasVideoError(true)}
            className={`card-video ${showVideo ? 'visible' : 'hidden'}`}
          />
        )}

        {project.image && !hasImageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setHasImageError(true)}
            className={`card-image ${showVideo ? 'faded' : 'visible'}`}
          />
        ) : null}

        {/* Fallback procedural slate if image or video missing */}
        {(!showCustomMedia || (hasImageError && (!project.video || hasVideoError))) && (
          <SlateFallback
            title={project.title}
            category={project.category}
            accent={project.accent}
            aspectRatio={project.aspectRatio}
            number={project.number}
          />
        )}

        {/* Cinematic Film Crop Letterbox Markers */}
        <div className="card-hud-overlay">
          <div className="card-hud-top">
            <span className="card-hud-num">{project.number}</span>
            <span className="card-hud-category" style={{ color: project.accent }}>
              {project.category}
            </span>
          </div>

          <div className="card-hud-bottom">
            <span className="card-hud-aspect">{project.aspectRatio || '2.39:1'}</span>
            <span className="card-hud-fps">24 FPS RAW</span>
          </div>
        </div>

        {/* Hover Center Play Pill */}
        <div className={`card-hover-cue ${isHovered ? 'visible' : ''}`}>
          <div className="play-pill">
            <Play size={16} fill="currentColor" />
            <span>PREVIEW</span>
          </div>
        </div>
      </div>

      {/* Card Information Section */}
      <div className="card-info-section">
        <div className="card-info-header">
          <div className="card-category-row">
            <span className="card-accent-bullet" style={{ backgroundColor: project.accent }} />
            <span className="card-category-name">{project.category}</span>
            <span className="card-meta-sep">•</span>
            <span className="card-client-type">{project.clientOrType}</span>
          </div>

          <button 
            type="button" 
            className="btn-card-watch"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            aria-label={`Watch ${project.title}`}
          >
            <span>WATCH</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        <h3 className="card-huge-title">{project.title}</h3>

        <p className="card-excerpt">{project.description}</p>

        {/* Tags */}
        {project.tags && (
          <div className="card-tags-list">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag-badge">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .cine-project-card {
          position: relative;
          background: #0d0d0d;
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: transform var(--transition-smooth), border-color var(--transition-smooth), box-shadow var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .cine-project-card:hover {
          transform: translateY(-6px);
          border-color: var(--card-accent-border);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px var(--card-accent-glow);
        }

        /* Viewport */
        .card-media-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #080808;
          overflow: hidden;
        }

        .card-accent-glow {
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          pointer-events: none;
          z-index: 10;
          transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
        }

        .card-accent-glow.active {
          border-color: var(--card-accent);
          box-shadow: inset 0 0 20px var(--card-accent-glow);
        }

        .card-video, .card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow), opacity var(--transition-smooth);
        }

        .cine-project-card:hover .card-image {
          transform: scale(1.05);
        }

        .cine-project-card:hover .card-video {
          transform: scale(1.05);
        }

        .card-video.visible {
          opacity: 1;
          z-index: 4;
        }

        .card-video.hidden {
          opacity: 0;
          z-index: 2;
        }

        .card-image.visible {
          opacity: 1;
          z-index: 3;
        }

        .card-image.faded {
          opacity: 0;
          z-index: 1;
        }

        /* Overlay Markers */
        .card-hud-overlay {
          position: absolute;
          inset: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          pointer-events: none;
          z-index: 8;
        }

        .card-hud-top, .card-hud-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
        }

        .card-hud-num {
          color: #f2eee9;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.6);
          padding: 0.2rem 0.5rem;
          backdrop-filter: blur(4px);
        }

        .card-hud-category {
          font-weight: 600;
          background: rgba(0, 0, 0, 0.6);
          padding: 0.2rem 0.6rem;
          backdrop-filter: blur(4px);
        }

        .card-hud-aspect, .card-hud-fps {
          color: rgba(242, 238, 233, 0.7);
          background: rgba(0, 0, 0, 0.6);
          padding: 0.2rem 0.5rem;
          backdrop-filter: blur(4px);
        }

        /* Center Play Cue */
        .card-hover-cue {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          opacity: 0;
          transition: all var(--transition-smooth);
          z-index: 9;
          pointer-events: none;
        }

        .card-hover-cue.visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .play-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(8, 8, 8, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid var(--card-accent);
          color: #f2eee9;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          padding: 0.55rem 1.1rem;
          border-radius: 999px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6), 0 0 15px var(--card-accent-glow);
        }

        /* Card Info */
        .card-info-section {
          padding: 1.6rem clamp(1.2rem, 2.5vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          background: #0f0f0f;
          flex: 1;
        }

        .card-info-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .card-category-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
        }

        .card-accent-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .card-category-name {
          color: var(--text-primary);
          font-weight: 500;
          text-transform: uppercase;
        }

        .card-meta-sep {
          color: var(--text-muted);
        }

        .card-client-type {
          color: var(--text-muted);
        }

        .btn-card-watch {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: 1px solid var(--border-medium);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          padding: 0.4rem 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          border-radius: 2px;
        }

        .cine-project-card:hover .btn-card-watch {
          background: var(--card-accent);
          color: #080808;
          border-color: var(--card-accent);
          font-weight: 600;
          box-shadow: 0 0 15px var(--card-accent-glow);
        }

        .card-huge-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.2vw, 2.7rem);
          letter-spacing: 0.04em;
          color: var(--text-primary);
          line-height: 0.95;
          text-transform: uppercase;
          transition: color var(--transition-fast);
        }

        .cine-project-card:hover .card-huge-title {
          color: #ffffff;
        }

        .card-excerpt {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }
      `}</style>
    </motion.article>
  );
}
