import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, filterCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter(
      (p) => p.category.toUpperCase() === activeFilter.toUpperCase()
    );
  }, [activeFilter]);

  return (
    <section className="work-section" id="work">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-marker">
          <span className="section-label">01 / SELECTED WORK</span>
          <h2 className="section-title">THE FRAMES</h2>
          <p className="section-subtitle">
            Curated cuts across narrative fiction, high-energy music videos, experimental motion, and commercial stories.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="work-filter-bar">
          <div className="filter-pills-list" role="tablist">
            {filterCategories.map((category) => {
              const count = category === "ALL" 
                ? projects.length 
                : projects.filter(p => p.category.toUpperCase() === category).length;
              const isActive = activeFilter === category;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  <span className="filter-pill-name">{category}</span>
                  <span className="filter-pill-count">[{count}]</span>
                </button>
              );
            })}
          </div>

          <div className="filter-meta-hud">
            <span>SHOWING {filteredProjects.length} OF {projects.length} CUTS</span>
          </div>
        </div>

        {/* Projects Grid (Large Cinematic Cards) */}
        <div className="projects-editorial-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Cinematic Modal Viewer */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .work-section {
          position: relative;
          padding: clamp(5rem, 10vw, 8.5rem) 0;
          background: #080808;
          border-top: 1px solid var(--border-subtle);
        }

        .work-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 1.2rem;
        }

        .filter-pills-list {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .filter-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          padding: 0.6rem 1.15rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          border-radius: 2px;
          user-select: none;
        }

        .filter-pill-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-medium);
          background: rgba(255, 255, 255, 0.03);
        }

        .filter-pill-btn.active {
          background: #f2eee9;
          color: #080808;
          border-color: #f2eee9;
          font-weight: 600;
          box-shadow: 0 0 20px rgba(242, 238, 233, 0.2);
        }

        .filter-pill-count {
          font-size: 0.7rem;
          opacity: 0.7;
        }

        .filter-pill-btn.active .filter-pill-count {
          opacity: 1;
        }

        .filter-meta-hud {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          color: var(--text-muted);
        }

        /* Large 2-column or 1-column layout for huge cinematic presence */
        .projects-editorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 540px), 1fr));
          gap: clamp(2rem, 4vw, 3.5rem);
        }

        @media (max-width: 768px) {
          .projects-editorial-grid {
            grid-template-columns: 1fr;
          }
          .work-filter-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .filter-pills-list {
            width: 100%;
          }
          .filter-pill-btn {
            flex: 1 1 auto;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
