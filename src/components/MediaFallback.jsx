import React, { useState } from 'react';

/**
 * Procedural Cinematic Film Slate Fallback
 * Renders when an image or video is missing or fails to load.
 */
export function SlateFallback({ title = "UNTITLED SEQUENCE", category = "CINEMATIC", accent = "#e59b55", aspectRatio = "16:9", number = "01" }) {
  return (
    <div 
      className="slate-fallback-root"
      style={{
        '--slate-accent': accent,
        '--slate-accent-glow': `${accent}25`
      }}
    >
      {/* Dynamic Background Atmosphere */}
      <div className="slate-backdrop" />

      {/* 35mm Frame Grid & Crosshairs */}
      <div className="slate-corners">
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </div>

      {/* Center Center-mark */}
      <div className="slate-center-mark">
        <span className="crosshair-h" />
        <span className="crosshair-v" />
      </div>

      {/* Header Technical Bar */}
      <div className="slate-hud-top">
        <span className="hud-badge">SCENE {number}</span>
        <span className="hud-shutter">180° SHUTTER</span>
        <span className="hud-aspect">{aspectRatio}</span>
      </div>

      {/* Main Slate Typography */}
      <div className="slate-center-content">
        <span className="slate-category">{category}</span>
        <h3 className="slate-title">{title}</h3>
        <span className="slate-cue">CINEVERSE BY KK // PREVIEW</span>
      </div>

      {/* Bottom Technical Bar */}
      <div className="slate-hud-bottom">
        <span className="slate-timecode">TC 00:0{number}:24:18</span>
        <span className="slate-fps">24.000 FPS • RAW</span>
      </div>

      <style>{`
        .slate-fallback-root {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 240px;
          background-color: #0d0d0d;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          user-select: none;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .slate-backdrop {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, var(--slate-accent-glow) 0%, transparent 65%),
                      linear-gradient(180deg, rgba(12,12,12,0.5) 0%, rgba(5,5,5,0.95) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* 35mm Slate Corner Brackets */
        .slate-corners {
          position: absolute;
          inset: 1rem;
          pointer-events: none;
          z-index: 2;
        }

        .corner {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: rgba(242, 238, 233, 0.3);
          border-style: solid;
        }

        .top-left { top: 0; left: 0; border-width: 1.5px 0 0 1.5px; }
        .top-right { top: 0; right: 0; border-width: 1.5px 1.5px 0 0; }
        .bottom-left { bottom: 0; left: 0; border-width: 0 0 1.5px 1.5px; }
        .bottom-right { bottom: 0; right: 0; border-width: 0 1.5px 1.5px 0; }

        .slate-center-mark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          pointer-events: none;
          z-index: 2;
          opacity: 0.35;
        }

        .crosshair-h {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.4);
        }

        .crosshair-v {
          position: absolute;
          top: 0;
          left: 50%;
          height: 100%;
          width: 1px;
          background: rgba(255,255,255,0.4);
        }

        .slate-hud-top, .slate-hud-bottom {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: rgba(242, 238, 233, 0.5);
          letter-spacing: 0.12em;
        }

        .hud-badge {
          color: var(--slate-accent);
          font-weight: 500;
        }

        .slate-center-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          margin: auto 0;
        }

        .slate-category {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: var(--slate-accent);
          text-transform: uppercase;
        }

        .slate-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          color: #f2eee9;
          letter-spacing: 0.05em;
          line-height: 1;
          text-transform: uppercase;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .slate-cue {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          color: rgba(242, 238, 233, 0.4);
          text-transform: uppercase;
        }

        .slate-fps {
          color: rgba(242, 238, 233, 0.4);
        }
      `}</style>
    </div>
  );
}

/**
 * Image with automatic graceful fallback
 */
export function ImageWithFallback({ src, alt, className = "", style = {}, fallbackProps = {} }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return <SlateFallback {...fallbackProps} />;
  }

  return (
    <div className={`img-fallback-wrapper ${className}`} style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      {!loaded && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <SlateFallback {...fallbackProps} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          position: 'relative',
          zIndex: 2,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}
      />
    </div>
  );
}

/**
 * Profile Photo with graceful director avatar fallback
 */
export function ProfileWithFallback({ src, alt = "Krishna Kant Sharma" }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="profile-procedural-avatar">
        <div className="avatar-grid" />
        <div className="avatar-monogram">KK</div>
        <div className="avatar-role">KRISHNA KANT SHARMA</div>
        <div className="avatar-sub">DIRECTOR • EDITOR</div>
        <style>{`
          .profile-procedural-avatar {
            width: 100%;
            aspect-ratio: 4/5;
            background: linear-gradient(145deg, #141414, #080808);
            border: 1px solid rgba(242, 238, 233, 0.12);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            overflow: hidden;
          }
          .avatar-grid {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 24px 24px;
          }
          .avatar-monogram {
            font-family: var(--font-display);
            font-size: 6rem;
            line-height: 1;
            color: #f2eee9;
            letter-spacing: 0.1em;
            position: relative;
            text-shadow: 0 0 40px rgba(229, 155, 85, 0.3);
          }
          .avatar-role {
            font-family: var(--font-mono);
            font-size: 0.8rem;
            letter-spacing: 0.25em;
            color: #e59b55;
            margin-top: 1rem;
            position: relative;
          }
          .avatar-sub {
            font-family: var(--font-mono);
            font-size: 0.68rem;
            letter-spacing: 0.15em;
            color: rgba(242, 238, 233, 0.5);
            margin-top: 0.25rem;
            position: relative;
          }
        `}</style>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }}
    />
  );
}
