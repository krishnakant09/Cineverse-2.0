import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toolsData } from '../data/tools';

export default function EditingTools() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="tools-section" id="tools">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-marker">
          <span className="section-label">03 / THE EDITING ROOM</span>
          <h2 className="section-title">THE TOOLS</h2>
          <p className="section-subtitle">
            Tools don't make the cut—taste and timing do. But mastering the right tool for each layer makes visual ambition possible.
          </p>
        </div>

        {/* Tools Editorial Rows */}
        <div className="tools-rows-container">
          {toolsData.map((tool, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={tool.number}
                className={`tool-row-item ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  '--tool-color': tool.color,
                  '--tool-color-glow': `${tool.color}25`
                }}
              >
                {/* Main Row Content */}
                <div className="tool-row-header">
                  <span className="tool-number">{tool.number}</span>
                  <div className="tool-title-group">
                    <h3 className="tool-name">{tool.name}</h3>
                    <span className="tool-role">— {tool.role}</span>
                  </div>
                  <div className="tool-indicator-badge">
                    <span>{tool.purpose}</span>
                  </div>
                </div>

                {/* Expanded Capabilities & Timeline Preview */}
                <div className="tool-row-drawer">
                  <p className="tool-description">{tool.description}</p>
                  
                  <div className="tool-capabilities-list">
                    {tool.capabilities.map((cap, cIdx) => (
                      <span key={cIdx} className="tool-cap-badge">
                        <span className="cap-bullet" style={{ backgroundColor: tool.color }} />
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Simulated NLE Audio-Video Timeline Bar */}
                  <div className="tool-nle-bar">
                    <div className="nle-track v1">
                      <span className="nle-tag">V1 / 4K RAW</span>
                      <div className="nle-block" style={{ width: '45%' }} />
                      <div className="nle-block" style={{ width: '30%', backgroundColor: `${tool.color}55` }} />
                      <div className="nle-block" style={{ width: '25%' }} />
                    </div>
                    <div className="nle-track a1">
                      <span className="nle-tag">A1 / 48kHz FOLEY</span>
                      <div className="nle-wave" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tools-section {
          position: relative;
          padding: clamp(5rem, 10vw, 8.5rem) 0;
          background: #080808;
          border-top: 1px solid var(--border-subtle);
        }

        .tools-rows-container {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-subtle);
        }

        .tool-row-item {
          padding: clamp(1.6rem, 3vw, 2.5rem) 0;
          border-bottom: 1px solid var(--border-subtle);
          transition: all var(--transition-smooth);
          position: relative;
        }

        .tool-row-item::before {
          content: '';
          position: absolute;
          left: -1rem;
          right: -1rem;
          top: 0;
          bottom: 0;
          background: transparent;
          pointer-events: none;
          z-index: 0;
          transition: background var(--transition-smooth);
          border-radius: 4px;
        }

        .tool-row-item.hovered::before {
          background: rgba(255, 255, 255, 0.02);
        }

        .tool-row-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: baseline;
          gap: clamp(1rem, 3vw, 2.5rem);
          flex-wrap: wrap;
        }

        .tool-number {
          font-family: var(--font-mono);
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          color: var(--text-muted);
          width: 40px;
          transition: color var(--transition-fast);
        }

        .tool-row-item.hovered .tool-number {
          color: var(--tool-color);
        }

        .tool-title-group {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          flex-wrap: wrap;
          flex: 1;
        }

        .tool-name {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          letter-spacing: 0.03em;
          color: var(--text-primary);
          line-height: 1;
          text-transform: uppercase;
          transition: transform var(--transition-fast);
        }

        .tool-row-item.hovered .tool-name {
          transform: translateX(6px);
        }

        .tool-role {
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 1.4vw, 1.1rem);
          color: var(--text-secondary);
          letter-spacing: 0.06em;
        }

        .tool-indicator-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--text-muted);
          text-transform: uppercase;
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.8rem;
          border-radius: 2px;
        }

        /* Drawer Details */
        .tool-row-drawer {
          position: relative;
          z-index: 1;
          padding-left: clamp(0rem, 3.5vw, 4.5rem);
          margin-top: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          max-width: 900px;
        }

        .tool-description {
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .tool-capabilities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tool-cap-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
          border-radius: 2px;
        }

        .cap-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        /* NLE Timeline Aesthetic */
        .tool-nle-bar {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 3px;
          background: #040404;
          border: 1px solid var(--border-subtle);
          padding: 6px;
          border-radius: 2px;
          opacity: 0.85;
        }

        .nle-track {
          height: 20px;
          display: flex;
          align-items: center;
          gap: 4px;
          background: #0e0e0e;
          padding: 0 4px;
          border-radius: 1px;
          position: relative;
          overflow: hidden;
        }

        .nle-tag {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: rgba(242, 238, 233, 0.4);
          min-width: 85px;
        }

        .nle-block {
          height: 14px;
          background: #1c1c1c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1px;
        }

        .nle-wave {
          flex: 1;
          height: 10px;
          background-image: repeating-linear-gradient(
            90deg,
            #1e293b 0px,
            #1e293b 3px,
            transparent 3px,
            transparent 6px
          );
          opacity: 0.5;
        }

        @media (max-width: 640px) {
          .tool-indicator-badge {
            display: none;
          }
          .tool-row-drawer {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
