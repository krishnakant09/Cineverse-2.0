/**
 * =======================================================================
 * CINEVERSE BY KK — PROJECTS DATA
 * =======================================================================
 * 
 * Edit this file to add, remove, or modify your portfolio projects.
 * 
 * Instructions:
 * 1. Image Thumbnails: Drop into 'public/assets/projects/your-image.jpg'
 * 2. MP4 Video Previews: Drop into 'public/assets/projects/your-video.mp4'
 * 3. Instagram Reel: Paste the exact Instagram Reel URL (e.g., https://www.instagram.com/reel/...)
 * 4. Accent Color: Unique hex color per project (e.g., #e59b55, #ff3344, #a855f7, #3b82f6)
 * 5. Categories supported: "CINEMATIC", "DARK", "CREATIVE", "MUSIC"
 * 
 * NOTE: If any image or video file is not yet added, the website will
 * automatically render a cinematic procedural slate with frame markers
 * and your chosen accent color. It will NEVER crash!
 */

export const projects = [
  {
    id: 1,
    number: "01",
    title: "NEON SHADOWS",
    category: "DARK",
    clientOrType: "Narrative Short",
    year: "2024",
    aspectRatio: "2.39:1",
    duration: "01:15",
    accent: "#ff3344", // Crimson Dark Accent
    tags: ["High Contrast", "Sound Design", "Color Grading", "DaVinci Resolve"],
    software: ["DaVinci Resolve", "Premiere Pro"],
    image: "/assets/projects/project-1.jpg",
    video: "/assets/projects/project-1.mp4",
    instagram: "https://www.instagram.com/cineverseby_kk", // Replace with specific reel link
    description: "A gritty, visceral narrative edit balancing crushed blacks, analog distortion, and aggressive rhythmic cuts that heighten psychological tension."
  },
  {
    id: 2,
    number: "02",
    title: "THE GOLDEN HOUR ODYSSEY",
    category: "CINEMATIC",
    clientOrType: "Travel Film",
    year: "2024",
    aspectRatio: "2.39:1",
    duration: "01:45",
    accent: "#e59b55", // Warm Cinematic Gold Accent
    tags: ["Color Science", "Seamless Transitions", "Pacing", "4K HDR"],
    software: ["DaVinci Resolve", "After Effects"],
    image: "/assets/projects/project-2.jpg",
    video: "/assets/projects/project-2.mp4",
    instagram: "https://www.instagram.com/cineverseby_kk",
    description: "An evocative cinematic visual journey capturing raw landscapes through delicate match cuts, organic film grain, and an amber-tinted Kodak 2383 film print simulation."
  },
  {
    id: 3,
    number: "03",
    title: "SYNAPSE OVERDRIVE",
    category: "CREATIVE",
    clientOrType: "Experimental Promo",
    year: "2024",
    aspectRatio: "16:9",
    duration: "00:48",
    accent: "#a855f7", // Electric Purple Creative Accent
    tags: ["Kinetic Typography", "VFX Compositing", "Speed Ramping", "3D Projection"],
    software: ["After Effects", "Premiere Pro"],
    image: "/assets/projects/project-3.jpg",
    video: "/assets/projects/project-3.mp4",
    instagram: "https://www.instagram.com/cineverseby_kk",
    description: "Multi-layered visual collage combining optical flow speed ramps, geometric masking, and synchronized glitch layers to reflect modern sensory overload."
  },
  {
    id: 4,
    number: "04",
    title: "FREQUENCY & PULSE",
    category: "MUSIC",
    clientOrType: "Official Music Video Edit",
    year: "2024",
    aspectRatio: "16:9",
    duration: "02:10",
    accent: "#3b82f6", // Electric Blue Music Accent
    tags: ["Beat Sync", "Sub-Bass Shakes", "Light Leaks", "Dynamic Cuts"],
    software: ["Premiere Pro", "CapCut", "After Effects"],
    image: "/assets/projects/project-4.jpg",
    video: "/assets/projects/project-4.mp4",
    instagram: "https://www.instagram.com/cineverseby_kk",
    description: "Heavy drum-driven music video edit cut to exact transient frequencies with stroboscopic cutaways, analog CRT textures, and hyper-kinetic camera movements."
  },
  {
    id: 5,
    number: "05",
    title: "MIDNIGHT REVERIE",
    category: "DARK",
    clientOrType: "Fashion / Moody Film",
    year: "2024",
    aspectRatio: "4:5",
    duration: "00:32",
    accent: "#ef4444", // Deep Red Accent
    tags: ["Editorial Pacing", "Film Halation", "Moody Grading", "Sound Atmosphere"],
    software: ["DaVinci Resolve", "CapCut"],
    image: "/assets/projects/project-5.jpg",
    video: "/assets/projects/project-5.mp4",
    instagram: "https://www.instagram.com/cineverseby_kk",
    description: "Dark moody editorial piece characterized by deep shadows, soft halation around practical light sources, and whisper-quiet audio transitions."
  },
  {
    id: 6,
    number: "06",
    title: "ECHOES OF TOMORROW",
    category: "CINEMATIC",
    clientOrType: "Commercial Concept",
    year: "2024",
    aspectRatio: "2.39:1",
    duration: "01:05",
    accent: "#f59e0b", // Amber Glow Accent
    tags: ["Anamorphic Bokeh", "Sound Design", "Cine Pacing", "Story Beats"],
    software: ["DaVinci Resolve", "Premiere Pro"],
    image: "/assets/projects/project-6.jpg",
    video: "/assets/projects/project-6.mp4",
    instagram: "https://www.instagram.com/cineverseby_kk",
    description: "High-end brand film with anamorphic lens flare elements, deliberate slow-burn tempo, and deeply immersive audio layering."
  }
];

export const filterCategories = ["ALL", "CINEMATIC", "DARK", "CREATIVE", "MUSIC"];
