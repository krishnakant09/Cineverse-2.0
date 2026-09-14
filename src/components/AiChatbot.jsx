import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Send, 
  RotateCcw, 
  Bot, 
  User, 
  Film, 
  ChevronRight,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { 
  KK_PROFILE, 
  QUICK_PROMPTS, 
  generateChatbotResponse 
} from '../data/chatbotKnowledge';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotified, setHasNotified] = useState(true);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: `**Welcome to Cineverse 2.0.** 🎬\n\nI am **CINE-AI**, virtual studio assistant to **Krishna Kant Sharma (KK)**. Ask me anything about his editing styles, software arsenal, portfolio cuts, or how to collaborate.`,
      suggestions: ["Who is KK?", "Explore editing styles", "Showcase projects", "How to hire KK?"],
      timestamp: "00:00:01"
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Live 24fps timecode HUD
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

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setHasNotified(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const handleSend = (textToSend) => {
    const query = (typeof textToSend === 'string' ? textToSend : inputVal).trim();
    if (!query || isTyping) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: timecode
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsTyping(true);

    // Realistic typing delay for cinematic conversational feel
    setTimeout(() => {
      const botResponseData = generateChatbotResponse(query);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponseData.text,
        suggestions: botResponseData.suggestions,
        timestamp: timecode
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: `**Studio session reset.** 🎬\n\nI'm ready for your next question about KK, his editing techniques, or project inquiries.`,
        suggestions: ["Who is KK?", "Software & tools", "Showcase projects", "How to hire KK?"],
        timestamp: timecode
      }
    ]);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(KK_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Simple Markdown parsing for **bold**, links [label](url), and list items
  const renderFormattedText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Parse markdown links [title](url) and bold **bold**
      let parts = [line];

      return (
        <p key={idx} className={`chat-line ${line.trim() === '' ? 'empty-line' : ''}`}>
          <span dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-inline-link">$1 ↗</a>')
          }} />
        </p>
      );
    });
  };

  return (
    <div className="cine-ai-root" aria-label="Cine-AI Chatbot Assistant">
      {/* Teaser Bubble (before first opening) */}
      <AnimatePresence>
        {!isOpen && hasNotified && (
          <motion.div
            className="cine-ai-teaser"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            onClick={() => setIsOpen(true)}
          >
            <span className="teaser-dot" />
            <div className="teaser-content">
              <span className="teaser-title">CINE-AI ASSISTANT</span>
              <span className="teaser-desc">Ask anything about KK & his cuts 🎬</span>
            </div>
            <button 
              className="teaser-close"
              onClick={(e) => {
                e.stopPropagation();
                setHasNotified(false);
              }}
              aria-label="Dismiss teaser"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        className={`cine-ai-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close CINE-AI Chatbot" : "Open CINE-AI Chatbot"}
      >
        <div className="trigger-inner">
          <span className="trigger-rec-dot" />
          <div className="trigger-icon-wrap">
            {isOpen ? <X size={20} /> : <Sparkles size={20} />}
          </div>
          <span className="trigger-label">CINE-AI</span>
        </div>
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cine-ai-window"
            initial={{ opacity: 0, scale: 0.9, y: 30, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
          >
            {/* Window HUD Header */}
            <div className="chat-hud-header">
              <div className="hud-title-group">
                <span className="rec-dot-blinking" />
                <div>
                  <div className="hud-agent-name">CINE-AI // COPILOT</div>
                  <div className="hud-agent-meta">
                    <span>{timecode}</span>
                    <span className="hud-dot">•</span>
                    <span>ONLINE</span>
                  </div>
                </div>
              </div>

              <div className="hud-actions">
                <button 
                  onClick={handleReset} 
                  className="hud-action-btn"
                  title="Reset Conversation"
                  aria-label="Reset Conversation"
                >
                  <RotateCcw size={14} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hud-action-btn"
                  title="Close Assistant"
                  aria-label="Close Assistant"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Quick Prompt Carousel */}
            <div className="chat-quick-prompts">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  className="quick-prompt-chip"
                  onClick={() => handleSend(prompt)}
                >
                  <span>{prompt}</span>
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="chat-messages-area">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`chat-msg-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.sender === 'bot' && (
                    <div className="msg-avatar bot-avatar">
                      <Film size={14} />
                    </div>
                  )}

                  <div className={`msg-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                    <div className="msg-meta-bar">
                      <span className="msg-sender-name">
                        {msg.sender === 'user' ? "YOU" : "CINE-AI"}
                      </span>
                      <span className="msg-time">{msg.timestamp}</span>
                    </div>

                    <div className="msg-body">
                      {renderFormattedText(msg.text)}
                    </div>

                    {/* Quick action buttons if email is mentioned */}
                    {msg.sender === 'bot' && msg.text.includes(KK_PROFILE.email) && (
                      <div className="msg-quick-actions">
                        <button onClick={handleCopyEmail} className="msg-action-pill">
                          {copiedEmail ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                          <span>{copiedEmail ? "COPIED!" : "COPY EMAIL"}</span>
                        </button>
                        <a 
                          href={KK_PROFILE.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="msg-action-pill"
                        >
                          <ExternalLink size={12} />
                          <span>INSTAGRAM DM</span>
                        </a>
                      </div>
                    )}

                    {/* Dynamic Follow-up Suggestions */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="msg-suggestions-box">
                        <span className="suggestions-label">SUGGESTED TOPICS:</span>
                        <div className="suggestions-list">
                          {msg.suggestions.map((sug) => (
                            <button
                              key={sug}
                              className="suggestion-item"
                              onClick={() => handleSend(sug)}
                            >
                              <span>{sug}</span>
                              <ChevronRight size={11} />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="msg-avatar user-avatar">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div 
                  className="chat-msg-row bot-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="msg-avatar bot-avatar">
                    <Film size={14} />
                  </div>
                  <div className="msg-bubble bot-bubble typing-bubble">
                    <div className="typing-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="typing-label">ANALYZING CUTS...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="chat-input-bar">
              <input
                ref={inputRef}
                type="text"
                className="chat-input-field"
                placeholder="Ask about KK, projects, styles, rates..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="chat-send-btn"
                onClick={() => handleSend()}
                disabled={!inputVal.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>

            {/* Bottom mini-footer */}
            <div className="chat-window-footer">
              <span>CINEVERSE 2.0 • BUILT WITH 24 FPS PASSION</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .cine-ai-root {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 990;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          font-family: var(--font-body);
        }

        /* Teaser Bubble */
        .cine-ai-teaser {
          position: relative;
          background: rgba(14, 14, 14, 0.96);
          border: 1px solid rgba(229, 155, 85, 0.35);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(229, 155, 85, 0.15);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 8px;
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          max-width: 290px;
          transition: border-color var(--transition-fast);
        }

        .cine-ai-teaser:hover {
          border-color: var(--accent-default);
        }

        .teaser-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff3344;
          box-shadow: 0 0 10px #ff3344;
          animation: pulseRec 1.6s infinite ease-in-out;
          flex-shrink: 0;
        }

        .teaser-content {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .teaser-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: var(--accent-default);
          font-weight: 600;
        }

        .teaser-desc {
          font-size: 0.75rem;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .teaser-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 0.25rem;
        }

        .teaser-close:hover {
          color: var(--text-primary);
        }

        /* Trigger Button */
        .cine-ai-trigger {
          background: #0f0f0f;
          border: 1px solid rgba(229, 155, 85, 0.4);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 25px rgba(229, 155, 85, 0.2);
          border-radius: 9999px;
          padding: 0.65rem 1.15rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-smooth);
        }

        .cine-ai-trigger:hover,
        .cine-ai-trigger.active {
          border-color: var(--accent-default);
          background: #151515;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8), 0 0 35px rgba(229, 155, 85, 0.35);
        }

        .trigger-inner {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .trigger-rec-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff3344;
          box-shadow: 0 0 8px #ff3344;
          animation: pulseRec 1.6s infinite ease-in-out;
        }

        .trigger-icon-wrap {
          color: var(--accent-default);
          display: flex;
          align-items: center;
        }

        .trigger-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          font-weight: 700;
          color: #ffffff;
        }

        /* Chat Window */
        .cine-ai-window {
          width: 390px;
          max-width: calc(100vw - 2.5rem);
          height: 570px;
          max-height: calc(100vh - 7.5rem);
          background: rgba(12, 12, 12, 0.96);
          border: 1px solid rgba(229, 155, 85, 0.3);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* HUD Header */
        .chat-hud-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.1rem;
          background: rgba(20, 20, 20, 0.8);
          border-bottom: 1px solid var(--border-subtle);
        }

        .hud-title-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .rec-dot-blinking {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ff3344;
          box-shadow: 0 0 10px #ff3344;
          animation: pulseRec 1.4s infinite ease-in-out;
        }

        .hud-agent-name {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #ffffff;
        }

        .hud-agent-meta {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          color: var(--accent-default);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          letter-spacing: 0.05em;
        }

        .hud-dot {
          opacity: 0.6;
        }

        .hud-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hud-action-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          width: 28px;
          height: 28px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .hud-action-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
        }

        /* Quick Prompt Chips */
        .chat-quick-prompts {
          display: flex;
          gap: 0.4rem;
          padding: 0.65rem 0.85rem;
          overflow-x: auto;
          background: rgba(16, 16, 16, 0.6);
          border-bottom: 1px solid var(--border-subtle);
          scrollbar-width: none;
        }

        .chat-quick-prompts::-webkit-scrollbar {
          display: none;
        }

        .quick-prompt-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-family: var(--font-mono);
          padding: 0.3rem 0.65rem;
          border-radius: 9999px;
          white-space: nowrap;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .quick-prompt-chip:hover {
          background: rgba(229, 155, 85, 0.12);
          border-color: rgba(229, 155, 85, 0.4);
          color: var(--text-primary);
        }

        /* Messages Area */
        .chat-messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          scrollbar-width: thin;
          scrollbar-color: rgba(229, 155, 85, 0.3) transparent;
        }

        .chat-messages-area::-webkit-scrollbar {
          width: 5px;
        }

        .chat-messages-area::-webkit-scrollbar-thumb {
          background: rgba(229, 155, 85, 0.3);
          border-radius: 4px;
        }

        .chat-msg-row {
          display: flex;
          gap: 0.65rem;
          align-items: flex-start;
          width: 100%;
        }

        .user-row {
          justify-content: flex-end;
        }

        .msg-avatar {
          width: 26px;
          height: 26px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bot-avatar {
          background: rgba(229, 155, 85, 0.15);
          border: 1px solid rgba(229, 155, 85, 0.35);
          color: var(--accent-default);
        }

        .user-avatar {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .msg-bubble {
          max-width: 84%;
          border-radius: 6px;
          padding: 0.75rem 0.95rem;
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .bot-bubble {
          background: #141414;
          border: 1px solid var(--border-subtle);
          border-left: 2px solid var(--accent-default);
          color: var(--text-primary);
        }

        .user-bubble {
          background: rgba(229, 155, 85, 0.12);
          border: 1px solid rgba(229, 155, 85, 0.3);
          color: #ffffff;
        }

        .msg-meta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.64rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          letter-spacing: 0.06em;
        }

        .msg-sender-name {
          font-weight: 600;
          color: var(--accent-default);
        }

        .user-row .msg-sender-name {
          color: #a8a8a8;
        }

        .chat-line {
          margin: 0 0 0.45rem 0;
          word-break: break-word;
        }

        .chat-line:last-child {
          margin-bottom: 0;
        }

        .empty-line {
          height: 0.4rem;
        }

        .chat-inline-link {
          color: var(--accent-default);
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 500;
        }

        .chat-inline-link:hover {
          color: #ffffff;
        }

        /* Message Action Buttons */
        .msg-quick-actions {
          display: flex;
          gap: 0.45rem;
          margin-top: 0.65rem;
          flex-wrap: wrap;
        }

        .msg-action-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(229, 155, 85, 0.1);
          border: 1px solid rgba(229, 155, 85, 0.3);
          color: var(--accent-default);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .msg-action-pill:hover {
          background: var(--accent-default);
          color: #080808;
        }

        /* Suggestions in Bot Bubble */
        .msg-suggestions-box {
          margin-top: 0.8rem;
          padding-top: 0.65rem;
          border-top: 1px dashed var(--border-subtle);
        }

        .suggestions-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.35rem;
        }

        .suggestions-list {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .suggestion-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.35rem 0.6rem;
          border-radius: 4px;
          font-size: 0.72rem;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }

        .suggestion-item:hover {
          background: rgba(229, 155, 85, 0.08);
          border-color: rgba(229, 155, 85, 0.3);
          color: #ffffff;
        }

        /* Typing Bubble */
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.85rem;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
        }

        .typing-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-default);
          animation: dotBounce 1.2s infinite ease-in-out;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        .typing-label {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }

        /* Input Bar */
        .chat-input-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 0.85rem;
          background: #111111;
          border-top: 1px solid var(--border-subtle);
        }

        .chat-input-field {
          flex: 1;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 0.6rem 0.8rem;
          color: var(--text-primary);
          font-size: 0.82rem;
          font-family: var(--font-body);
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .chat-input-field:focus {
          border-color: var(--accent-default);
          background: rgba(255, 255, 255, 0.07);
        }

        .chat-input-field::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .chat-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: var(--accent-default);
          border: none;
          color: #080808;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #f0ab6b;
          transform: translateY(-1px);
        }

        .chat-send-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* Window Footer */
        .chat-window-footer {
          padding: 0.4rem 0.85rem;
          background: #0a0a0a;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          color: var(--text-muted);
        }

        @keyframes pulseRec {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }

        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        @media (max-width: 480px) {
          .cine-ai-root {
            bottom: 1rem;
            right: 1rem;
          }

          .cine-ai-window {
            width: calc(100vw - 2rem);
            height: 510px;
          }
        }
      `}</style>
    </div>
  );
}
