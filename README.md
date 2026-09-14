# 🎬 Cineverse 2.0 — Portfolio of Krishna Kant Sharma

<div align="center">

![Cineverse Banner](https://img.shields.io/badge/CINEVERSE-2.0-e59b55?style=for-the-badge&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production_Ready-10b981?style=for-the-badge)

<br />

**"Different styles. Different stories. One editor. — I CREATE WHAT YOU FEEL."**

*A high-end, immersive cinematic portfolio engineered for video editor & visual storyteller Krishna Kant Sharma.*

[Live Instagram](https://www.instagram.com/cineverseby_kk) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Getting Started](#-getting-started) • [Customization Guide](#-customization--content-management)

</div>

---

## 📽️ Overview

**Cineverse 2.0** is an editorial web experience designed from the ground up to reflect the pacing, color science, and tactile atmosphere of modern filmmaking. Built with React 18, Vite, and Framer Motion, the portfolio presents work with the visual language of professional editing suites and film monitors—featuring live camera HUDs, 35mm analog grain overlays, dynamic aspect-ratio frames, and procedural cinema slates.

---

## ✨ Key Features

- **🔴 Viewfinder HUD & Hero Experience**:
  - Live camera framing metadata (`RAW DCI 4K • 24.00 FPS • COLOR • VFX • STORY`).
  - Dynamic ambient glows, subtle grid lines, and high-impact editorial typography.
  - Smooth scroll prompts and direct reel shortcuts.

- **🎞️ Interactive Selected Work**:
  - Multi-ratio media containers (`2.39:1 Anamorphic`, `16:9 Widescreen`, `4:5 Social`).
  - Fast category filtering (`ALL`, `CINEMATIC`, `DARK`, `CREATIVE`, `MUSIC`).
  - Hover-triggered muted MP4 video previews.
  - Detailed modal view with software badges, tag breakdowns, client specs, and direct Instagram Reel links.

- **🛡️ Zero-Crash Procedural Media Slates**:
  - Custom SVG film slate fallback system that automatically activates when media files are loading or missing.
  - Generates real-time timecode displays, technical markers, and project-specific accent colors so the UI never displays broken image icons.

- **🌌 Explore the 'Verse (Style Breakdown)**:
  - Deep-dive into 6 signature editing styles: `CINEMATIC`, `DARK`, `CREATIVE`, `MUSIC`, `REELS`, and `STORY`.
  - Explains the philosophy, pacing, color treatment (e.g., Kodak 2383 emulation, halation, transient beat velocity), and emotional impact of each style.

- **🛠️ Editing Arsenal**:
  - Comprehensive breakdown of primary toolsets:
    - **DaVinci Resolve**: ACES Color Science, PowerGrades, film emulation, Fairlight audio.
    - **Adobe Premiere Pro**: Timeline architecture, pacing, story structure, proxies & 4K RAW.
    - **After Effects**: 3D camera tracking, kinetic typography, motion graphics, clean plates.
    - **CapCut**: High-retention vertical 9:16 reels, speed ramps, and snappy mobile-first workflows.

- **👤 Behind the Frames (About)**:
  - Director portrait with lens corner brackets and film metadata caption bar.
  - Career milestones and metrics: `4+ Years Cutting`, `150+ Projects Delivered`, `30M+ Impressions & Views`, `24 FPS Obsession`.
  - Core philosophy and creative statement.

- **📜 End Credits & Contact**:
  - Rolling film credit board styling honoring production details and roles.
  - One-click email copy with real-time visual feedback (`cineversebykk@gmail.com`).
  - Direct links to Instagram DM and social presence.

- **🤖 CINE-AI Studio Copilot (Bottom-Right Corner)**:
  - Floating cinematic HUD assistant with live 24fps timecode, pulsating REC indicator, and ambient neon glow.
  - Interactive knowledge engine that answers client inquiries about KK's background, editing styles, software tools, showcase cuts, turnaround times, and booking info.
  - Interactive quick-prompt chips, streaming typewriter responses, copy email shortcut, and Instagram DM deep-links.

- **🎞️ 35mm Analog Film Grain Overlay**:
  - Low-overhead SVG turbulence texture layer providing an authentic analog cinematic feel across the entire page.

---

## 💻 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component architecture & state management |
| **Build Tool** | [Vite 5](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth viewport transitions, modal fades, and interactive choreography |
| **Icons** | [Lucide React](https://lucide.dev/) | Crisp, modern UI icons |
| **Typography** | Google Fonts | *Anton* (Display), *Syne* (Headings), *Manrope* (Body), *DM Mono* (HUD Metadata) |
| **Styling** | Custom Vanilla CSS | Handcrafted cinematic design tokens, dark void themes, and responsive layouts |

---

## 📁 Project Structure

```text
Cineverse 2.0/
├── public/
│   ├── assets/
│   │   ├── projects/          # Project thumbnails (JPG/PNG) & video previews (MP4)
│   │   │   └── README.md      # Naming and format guidelines for project media
│   │   ├── profile.jpg        # Director profile picture
│   │   └── README.md          # Profile photo specifications
│   ├── favicon.svg            # Custom Cineverse favicon
│   └── vite.svg
├── src/
│   ├── assets/                # Internal static assets
│   ├── components/
│   │   ├── About.jsx          # Director bio, credentials, and career metrics
│   │   ├── AiChatbot.jsx      # CINE-AI floating chatbot assistant & HUD window
│   │   ├── EditingTools.jsx   # Software stack and capability breakdown
│   │   ├── ExploreVerse.jsx   # Visual styles and editing philosophy section
│   │   ├── FilmGrain.jsx      # 35mm analog film grain SVG overlay
│   │   ├── Footer.jsx         # Rolling end credits and contact actions
│   │   ├── Hero.jsx           # Viewfinder HUD and editorial title section
│   │   ├── Icons.jsx          # Custom SVG icons (e.g., Instagram, Reel markers)
│   │   ├── Loader.jsx         # Fullscreen cinematic frame intro loader
│   │   ├── MediaFallback.jsx  # Procedural film slates and fallback graphics
│   │   ├── Navbar.jsx         # Fixed HUD header with smooth navigation links
│   │   ├── ProjectCard.jsx    # Individual project card with hover video playback
│   │   ├── ProjectModal.jsx   # Fullscreen project case study modal
│   │   └── SelectedWork.jsx   # Work showcase with category filtering
│   ├── data/
│   │   ├── chatbotKnowledge.js# CINE-AI knowledge base & intent response engine
│   │   ├── projects.js        # Project database (titles, tags, colors, media links)
│   │   ├── styles.js          # Style definitions and keywords
│   │   └── tools.js           # Editing tools and capabilities data
│   ├── App.css
│   ├── App.jsx                # Main layout composition
│   ├── index.css              # Global cinematic design system tokens & utilities
│   └── main.jsx               # React DOM entrypoint
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML shell with Google Fonts & SEO Open Graph tags
├── package.json               # Dependencies and build scripts
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/krishnakant09/Cineverse-2.0.git
   cd "Cineverse 2.0"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### Available Scripts

- `npm run dev`: Starts the local Vite development server.
- `npm run build`: Generates an optimized production build in the `dist/` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.

---

## ⚙️ Customization & Content Management

### 1. Adding or Modifying Projects
All project data lives in [`src/data/projects.js`](src/data/projects.js). To add a new project, insert an object into the `projects` array:

```javascript
{
  id: 7,
  number: "07",
  title: "PROJECT TITLE",
  category: "CINEMATIC", // "CINEMATIC" | "DARK" | "CREATIVE" | "MUSIC"
  clientOrType: "Short Film / Brand Concept",
  year: "2024",
  aspectRatio: "2.39:1", // "2.39:1" | "16:9" | "4:5"
  duration: "01:30",
  accent: "#e59b55", // Accent color for glow and fallback slates
  tags: ["Color Grading", "Sound Design", "DaVinci Resolve"],
  software: ["DaVinci Resolve", "Premiere Pro"],
  image: "/assets/projects/project-7.jpg",
  video: "/assets/projects/project-7.mp4",
  instagram: "https://www.instagram.com/reel/YOUR_REEL_ID",
  description: "A detailed breakdown of the storytelling rhythm and edit approach."
}
```

### 2. Adding Project Media Files
Place media files into [`public/assets/projects/`](public/assets/projects/):
- **Thumbnails**: Save as `project-1.jpg`, `project-2.jpg`, etc.
- **Hover Previews**: Save as short (3–8s), muted loop MP4 files (`project-1.mp4`, etc.) under 5MB for instant playback.
- *Note:* If a media file is missing, the procedural slate handles it gracefully without errors.

### 3. Updating the Profile Picture
- Place your photo into [`public/assets/profile.jpg`](public/assets/profile.jpg).
- Recommended dimensions: `1000×1200` (portrait 4:5 or square).
- Supported formats: JPG, PNG, or WEBP.

### 4. Updating Contact Info & Socials
- **Email**: Edit the `email` variable in [`src/components/Footer.jsx`](src/components/Footer.jsx).
- **Instagram**: Update the Instagram URL in [`src/components/Footer.jsx`](src/components/Footer.jsx), [`src/components/Hero.jsx`](src/components/Hero.jsx), and `index.html`.

---

## 🎨 Design System & Visual Tokens

The visual foundation is defined in [`src/index.css`](src/index.css):

```css
--bg-void: #040404;             /* Pitch black viewport backdrop */
--bg-primary: #080808;          /* Primary dark surface */
--bg-surface: #111111;          /* Card and frame background */
--text-primary: #f2eee9;        /* Warm editorial parchment white */
--accent-default: #e59b55;      /* Signature warm amber / Kodak gold */
--font-display: 'Anton';        /* Bold cinematic editorial headlines */
--font-heading: 'Syne';         /* Modern geometric structural headings */
--font-mono: 'DM Mono';         /* Camera viewfinder HUD and timecodes */
--font-body: 'Manrope';         /* Clean contemporary reading text */
```

---

## 📬 Contact & Socials

- **Creator**: Krishna Kant Sharma (KK)
- **Brand**: Cineverse by KK
- **Instagram**: [@cineverseby_kk](https://www.instagram.com/cineverseby_kk)
- **Email**: [cineversebykk@gmail.com](mailto:cineversebykk@gmail.com)

---

<div align="center">

*Designed & Engineered for Cineverse by KK • © 2024 Krishna Kant Sharma. All rights reserved.*

</div>
