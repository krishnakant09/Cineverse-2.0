import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [frameNumber, setFrameNumber] = useState(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Increment progress and frame simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 700);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 4;
        return Math.min(prev + increment, 100);
      });

      setFrameNumber((prev) => (prev >= 24 ? 1 : prev + 1));
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Subtle Ambient Vignette */}
          <div className="loader-vignette" />

          <div className="loader-content">
            {/* Top Timecode HUD */}
            <motion.div 
              className="loader-hud"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="loader-hud-dot" />
              <span>REC // 24 FPS // FRAME {frameNumber < 10 ? `0${frameNumber}` : frameNumber}</span>
            </motion.div>

            {/* Brand Titles */}
            <div className="loader-title-box">
              <motion.h1 
                className="loader-brand"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                CINEVERSE
              </motion.h1>

              <motion.span 
                className="loader-sub"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                BY KK
              </motion.span>
            </div>

            {/* Loading Cue and Animated Progress Bar */}
            <div className="loader-progress-section">
              <div className="loader-line-track">
                <motion.div 
                  className="loader-line-fill"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="loader-status-row">
                <span className="loader-cue">LOADING THE NEXT FRAME...</span>
                <span className="loader-percentage">{progress}%</span>
              </div>
            </div>
          </div>

          <style>{`
            .cinematic-loader {
              position: fixed;
              inset: 0;
              z-index: 99999;
              background-color: #080808;
              display: flex;
              align-items: center;
              justify-content: center;
              user-select: none;
              overflow: hidden;
            }

            .loader-vignette {
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.85) 100%);
              pointer-events: none;
            }

            .loader-content {
              position: relative;
              z-index: 2;
              width: 90%;
              max-width: 520px;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 2.5rem;
            }

            .loader-hud {
              display: inline-flex;
              align-items: center;
              gap: 0.6rem;
              font-family: var(--font-mono);
              font-size: 0.72rem;
              letter-spacing: 0.18em;
              color: rgba(242, 238, 233, 0.45);
              padding: 0.3rem 0.8rem;
              border: 1px solid rgba(242, 238, 233, 0.08);
              background: rgba(255, 255, 255, 0.02);
            }

            .loader-hud-dot {
              width: 6px;
              height: 6px;
              background-color: #ff3344;
              border-radius: 50%;
              animation: recBlink 1s infinite;
            }

            .loader-title-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.2rem;
            }

            .loader-brand {
              font-family: var(--font-display);
              font-size: clamp(3.2rem, 8vw, 5.2rem);
              letter-spacing: 0.08em;
              line-height: 0.9;
              color: #f2eee9;
              text-transform: uppercase;
              text-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
            }

            .loader-sub {
              font-family: var(--font-mono);
              font-size: clamp(0.9rem, 2vw, 1.15rem);
              letter-spacing: 0.35em;
              color: #e59b55;
              text-transform: uppercase;
              margin-top: 0.4rem;
            }

            .loader-progress-section {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 0.85rem;
            }

            .loader-line-track {
              width: 100%;
              height: 2px;
              background-color: rgba(242, 238, 233, 0.1);
              position: relative;
              overflow: hidden;
            }

            .loader-line-fill {
              height: 100%;
              background: linear-gradient(90deg, #e59b55 0%, #ffffff 100%);
              box-shadow: 0 0 12px rgba(229, 155, 85, 0.8);
            }

            .loader-status-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-family: var(--font-mono);
              font-size: 0.75rem;
              letter-spacing: 0.14em;
              color: rgba(242, 238, 233, 0.6);
            }

            .loader-cue {
              text-transform: uppercase;
            }

            .loader-percentage {
              color: #e59b55;
              font-weight: 500;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
