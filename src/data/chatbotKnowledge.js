/**
 * =======================================================================
 * CINE-AI — KNOWLEDGE BASE & QUERY ENGINE
 * =======================================================================
 * 
 * Contains verified data about Krishna Kant Sharma (KK), his editing
 * styles, software arsenal, portfolio cuts, career metrics, and client
 * inquiry workflows.
 */

import { projects } from './projects.js';
import { stylesData } from './styles.js';
import { toolsData } from './tools.js';

export const KK_PROFILE = {
  name: "Krishna Kant Sharma",
  aka: "KK",
  brand: "Cineverse by KK",
  role: "Director, Cinematic Video Editor & Visual Storyteller",
  motto: "Different styles. Different stories. One editor. — I CREATE WHAT YOU FEEL.",
  experienceYears: "4+",
  projectsDelivered: "150+",
  totalViews: "30M+",
  framerateObsession: "24 FPS (Film Native)",
  email: "cineversebykk@gmail.com",
  instagram: "https://www.instagram.com/cineverseby_kk",
  instagramHandle: "@cineverseby_kk",
  corePhilosophy: "Video editing isn't just cutting clips together—it's psychological manipulation of time, emotion, and sound. Every cut must justify its existence.",
  primarySkills: [
    "DaVinci Resolve ACES Color Science & Kodak 2383 Film Print Emulation",
    "High-tension Narrative Pacing & Invisible Match Cuts",
    "Layered Sound Design, Low-End Sub-Bass Transients & Foley",
    "High-retention 9:16 Social Reels & Commercial Widescreen 2.39:1",
    "Kinetic Typography, Motion Graphics & 3D Camera Tracking"
  ]
};

export const QUICK_PROMPTS = [
  "Who is KK?",
  "Explore editing styles",
  "Showcase projects",
  "Software & tools",
  "How to hire KK?",
  "Color grading expertise"
];

/**
 * Intelligent response generator that answers questions about KK and Cineverse.
 */
export function generateChatbotResponse(rawQuery) {
  const query = rawQuery.toLowerCase().trim();

  // 1. GREETINGS & CASUAL
  if (/^(hi|hello|hey|sup|yo|greetings|hola|namaste|morning|evening|good morning|good evening)/i.test(query)) {
    return {
      text: `**Hey there! Welcome to Cineverse 2.0.** 🎬\n\nI'm **CINE-AI**, Krishna Kant Sharma's virtual studio assistant. I can walk you through his editing styles, showcase projects, software arsenal, or help you start a collaboration.\n\nWhat would you like to explore?`,
      suggestions: ["Who is KK?", "Showcase projects", "Explore editing styles", "How to hire KK?"]
    };
  }

  // 2. SPECIFIC INDIVIDUAL PROJECT QUERIES (Check first so "Neon Shadows" doesn't trigger "shadow" style)
  const matchedProject = projects.find(p => {
    const title = p.title.toLowerCase();
    return query.includes(title) || 
           (title.includes("neon") && query.includes("neon")) ||
           (title.includes("golden hour") && query.includes("golden")) ||
           (title.includes("synapse") && query.includes("synapse")) ||
           (title.includes("frequency") && query.includes("frequency")) ||
           (title.includes("reverie") && query.includes("reverie")) ||
           (title.includes("echoes") && query.includes("echoes"));
  });

  if (matchedProject) {
    return {
      text: `**PROJECT BREAKDOWN: ${matchedProject.title}** (${matchedProject.year})\n\n• **Type:** ${matchedProject.clientOrType}\n• **Category:** ${matchedProject.category} • **Aspect Ratio:** ${matchedProject.aspectRatio}\n• **Duration:** ${matchedProject.duration}\n• **Software Used:** ${matchedProject.software.join(", ")}\n• **Tags:** ${matchedProject.tags.join(" • ")}\n\n*${matchedProject.description}*`,
      suggestions: ["Show other projects", "Explore editing styles", "How to hire KK?"]
    };
  }

  // 3. COLOR GRADING SPECIFIC (DaVinci, ACES, LUTs, Kodaks)
  if (
    query.includes("color grade") || 
    query.includes("color grading") || 
    query.includes("aces") || 
    query.includes("kodak 2383") || 
    query.includes("lut") || 
    query.includes("log3") || 
    query.includes("colorist")
  ) {
    return {
      text: `**COLOR GRADING & POST PIPELINE:**\n\nKK operates in **DaVinci Resolve Studio** using a node-based ACES / DWG (DaVinci Wide Gamut) color managed pipeline:\n\n• **Film Emulation:** True Kodak 2383 / Fuji 3513 print curve mapping.\n• **Texture Science:** Halation, split-toning, highlight roll-off, and analog 35mm grain.\n• **Formats Handled:** Sony S-Log3, RED RAW, Canon Log, ARRI LogC, Apple Log, and drone D-Log.`,
      suggestions: ["What tools does he use?", "Showcase projects", "How to hire KK?"]
    };
  }

  // 4. SPECIFIC STYLES
  if (query.includes("dark style") || (query.includes("dark") && !query.includes("style")) || query.includes("noir")) {
    const darkStyle = stylesData.find(s => s.id === "dark");
    return {
      text: `**DARK EDITING STYLE // ${darkStyle.tagline}**\n\n${darkStyle.description}\n\n• **Key Elements:** Deep contrast, film halation around light sources, subterranean sub-bass, and sharp tension-building micro-cuts.\n• **Featured Examples:** *Neon Shadows (Narrative Short)* and *Midnight Reverie*.`,
      suggestions: ["Showcase projects", "Cinematic style details", "DaVinci Resolve workflow"]
    };
  }

  if (query.includes("cinematic style") || (query.includes("cinematic") && !query.includes("style"))) {
    const cineStyle = stylesData.find(s => s.id === "cinematic");
    return {
      text: `**CINEMATIC STYLE // ${cineStyle.tagline}**\n\n${cineStyle.description}\n\n• **Signature Treatment:** 2.39:1 Anamorphic framing, Kodak 2383 film print simulation, delicate match cuts, and organic film grain overlay.\n• **Featured Example:** *The Golden Hour Odyssey* & *Echoes of Tomorrow*.`,
      suggestions: ["Color grading expertise", "Showcase projects", "What tools does he use?"]
    };
  }

  if (query.includes("music") || query.includes("beat") || query.includes("sound design") || query.includes("audio") || query.includes("foley")) {
    const musicStyle = stylesData.find(s => s.id === "music");
    return {
      text: `**MUSIC & RHYTHMIC EDITING // ${musicStyle.tagline}**\n\n${musicStyle.description}\n\nKK edits not just to the surface beat, but to the **pulse of individual audio frequencies**: sub-bass drops, transient risers, reverse sweeps, and stroboscopic cutaways.\n• **Featured Project:** *Frequency & Pulse (Official Music Video Edit)*.`,
      suggestions: ["Showcase projects", "Creative style details", "How to hire KK?"]
    };
  }

  if (query.includes("reel") || query.includes("tiktok") || query.includes("retention") || query.includes("9:16") || query.includes("viral")) {
    const reelStyle = stylesData.find(s => s.id === "reels");
    return {
      text: `**REELS & SHORT-FORM RETENTION // ${reelStyle.tagline}**\n\n${reelStyle.description}\n\n• **Strategy:** 3-second hook mastery, dynamic speed ramps, synchronized kinetic captions, sound design impacts, and seamless loops that keep watch time above 100%.`,
      suggestions: ["Check Instagram Reels", "Showcase projects", "Software & tools"]
    };
  }

  if (query.includes("creative") || query.includes("glitch") || query.includes("vfx") || query.includes("experiment")) {
    const creativeStyle = stylesData.find(s => s.id === "creative");
    return {
      text: `**CREATIVE EDITING STYLE // ${creativeStyle.tagline}**\n\n${creativeStyle.description}\n\n• **Techniques:** Kinetic typography, optical flow speed ramps, geometric masking, 3D projection, and custom glitch transitions.\n• **Featured Project:** *Synapse Overdrive*.`,
      suggestions: ["Showcase projects", "After Effects workflow", "How to hire KK?"]
    };
  }

  // 5. ALL EDITING STYLES OVERVIEW
  if (
    query.includes("style") || 
    query.includes("genre") || 
    query.includes("aesthetic") || 
    query.includes("verse")
  ) {
    const styleSummaries = stylesData.map(s => `• **${s.name}**: ${s.tagline} *(${s.keywords.join(", ")})*`).join("\n");
    return {
      text: `KK operates across **6 signature editorial styles** rather than a single formula:\n\n${styleSummaries}\n\nEvery project dictates its own cutting tempo, color science, and audio frequencies.`,
      suggestions: ["Dark style details", "Cinematic style details", "Music video editing", "Showcase projects"]
    };
  }

  // 6. SOFTWARE / TOOLS / HARDWARE
  if (
    query.includes("tool") || 
    query.includes("software") || 
    query.includes("davinci") || 
    query.includes("premiere") || 
    query.includes("after effects") || 
    query.includes("capcut") || 
    query.includes("specs")
  ) {
    const toolList = toolsData.map(t => `• **${t.name}** [${t.role}]: ${t.description}`).join("\n\n");
    return {
      text: `**KK's PRIMARY EDITING ARSENAL:**\n\n${toolList}\n\nHe works smoothly with **4K DCI RAW, ProRes 4444, Log profiles (Sony S-Log3, Canon C-Log, RED IPP2)**, and ACES Color Management.`,
      suggestions: ["Color grading expertise", "Showcase projects", "How to hire KK?"]
    };
  }

  // 7. WHO IS KK / BIO / ABOUT
  if (
    /\b(who is|about kk|about you|who are you|bio|background|founder|profile|yourself)\b/i.test(query) ||
    query.includes("krishna kant") ||
    query.includes("tell me about kk")
  ) {
    return {
      text: `**Krishna Kant Sharma (KK)** is a director, lead video editor, and visual storyteller behind **Cineverse**.\n\n• **Experience:** 4+ years of precision cutting\n• **Portfolio Volume:** 150+ commercial, narrative, & musical projects delivered\n• **Reach:** 30M+ organic views & impressions across platforms\n• **Core Motto:** *"I CREATE WHAT YOU FEEL."*\n\nHe specializes in pacing, psychological tension, ACES color science, and cinematic sound design.`,
      suggestions: ["What tools does he use?", "Explore editing styles", "Showcase projects", "How to hire KK?"]
    };
  }

  // 8. PROJECTS / PORTFOLIO / SELECTED WORK
  if (
    query.includes("project") || 
    query.includes("work") || 
    query.includes("portfolio") || 
    query.includes("cuts")
  ) {
    const projList = projects.map(p => `• **${p.number} — ${p.title}** [${p.category} • ${p.aspectRatio}]: ${p.description}`).join("\n\n");
    return {
      text: `**FEATURED SELECTED CUTS (CINEVERSE 2.0):**\n\n${projList}\n\nClick any project card in the **Selected Work** section above to view full specs, tags, and Instagram reel previews!`,
      suggestions: ["Tell me about Neon Shadows", "Tell me about Golden Hour", "How to hire KK?"]
    };
  }

  // 9. HIRING / PRICING / RATES / CONTACT
  if (
    query.includes("hire") || 
    query.includes("price") || 
    query.includes("cost") || 
    query.includes("rate") || 
    query.includes("contact") || 
    query.includes("email") || 
    query.includes("instagram") || 
    query.includes("quote") || 
    query.includes("booking") || 
    query.includes("turnaround") || 
    query.includes("freelance")
  ) {
    return {
      text: `**READY TO CUT YOUR NEXT PROJECT?** 🎬\n\nKK takes on select commercial, narrative, music video, and high-tier creator reel projects.\n\n• **Direct Email:** [${KK_PROFILE.email}](mailto:${KK_PROFILE.email})\n• **Instagram DM:** [${KK_PROFILE.instagramHandle}](${KK_PROFILE.instagram})\n• **Typical Turnaround:** 3–7 business days (Rush 48h turnaround available on request)\n• **Standard Workflow:** Raw Ingest & Proxies ➔ Assembly ➔ Sound Design & Foley ➔ ACES Color Grade ➔ Revisions ➔ Final 4K ProRes Export.\n\nDrop an email or Instagram DM with your raw footage link, concept, and deadline for a custom quote!`,
      suggestions: ["Software & tools", "Showcase projects", "Explore editing styles"]
    };
  }

  // 10. STATS / METRICS / NUMBERS
  if (query.includes("stat") || query.includes("number") || query.includes("view") || query.includes("metric") || query.includes("experience")) {
    return {
      text: `**CAREER BENCHMARKS AT A GLANCE:**\n\n• **4+ Years** cutting commercial, narrative, and social media content\n• **150+ Projects** delivered with picture lock\n• **30M+ Organic Views** generated for clients and creators\n• **24 FPS Native** cinematic framerate obsession\n• **Zero-Crash Pipeline** with DaVinci Resolve & Premiere Pro`,
      suggestions: ["Who is KK?", "Showcase projects", "How to hire KK?"]
    };
  }

  // 11. DEFAULT / SMART FALLBACK
  return {
    text: `That's an interesting question! While I specialize in KK's video editing portfolio, here's what I can tell you about **Cineverse 2.0**:\n\n• **Director & Editor:** Krishna Kant Sharma (KK)\n• **Disciplines:** Color grading, cinematic narrative cuts, high-velocity music videos, and viral reels\n• **Primary Software:** DaVinci Resolve, Premiere Pro, After Effects, CapCut\n• **Contact:** ${KK_PROFILE.email} / ${KK_PROFILE.instagramHandle}\n\nTry asking me about his specific styles, tools, projects, or how to collaborate!`,
    suggestions: ["Who is KK?", "Explore editing styles", "Showcase projects", "How to hire KK?"]
  };
}
