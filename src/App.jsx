import React, { useState } from 'react';
import FilmGrain from './components/FilmGrain';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import ExploreVerse from './components/ExploreVerse';
import EditingTools from './components/EditingTools';
import About from './components/About';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="cineverse-app-root">
      {/* Fullscreen Cinematic Frame Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* 35mm Analog Film Grain Texture Overlay */}
      <FilmGrain />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <ExploreVerse />
        <EditingTools />
        <About />
      </main>

      {/* End Credits Footer */}
      <Footer />

      {/* CINE-AI Chatbot Assistant in Bottom-Right Corner */}
      <AiChatbot />
    </div>
  );
}
