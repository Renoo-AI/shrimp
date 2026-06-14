import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import BranchesSection from './components/BranchesSection';
import ReservationSection from './components/ReservationSection';
import { INSTAGRAM_URL, BRANCHES } from './data';
import { motion } from 'motion/react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  return (
    <main className="min-h-screen font-sans antialiased" style={{ background: '#0A1F3F' }}>
      <Navbar />

      {/* ═══════════════════ HERO — Deep Sea ═══════════════════ */}
      <section id="hero" className="section-deep relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Subtle hero image — barely visible, like looking into deep water */}
        <div className="absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Large ambient light pool — a single source of warmth in the depths */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(245,211,0,0.07) 0%, rgba(245,211,0,0.02) 35%, transparent 70%)',
          }}
        />

        {/* Second smaller light — off-center, creating depth */}
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(245,211,0,0.04) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl w-full">
          
          {/* Logo — centered, floating, with breathing room */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <img
              src="/logo.png"
              alt="Shrimp Time"
              className="w-[220px] md:w-[300px] h-auto mx-auto"
            />
          </motion.div>

          {/* Title — massive, but quiet. Not shouting. */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="display-xl text-[10vw] md:text-[120px] text-white tracking-tighter leading-[0.85]"
          >
            SHRIMP<br />TIME
          </motion.h1>

          {/* Tagline — whispered */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="label-xs text-white/50 mt-8"
          >
            Vivez l'expérience
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5, delay: 1.0 }}
            className="text-[11px] text-olive/60 uppercase tracking-[0.25em] font-sans font-semibold mt-2"
          >
            عيش التجربة
          </motion.p>

          {/* Gold line — the first pierce of light */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line mt-10"
          />

          {/* Buttons — generous spacing, like objects on a vast table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-16"
          >
            <button onClick={() => scrollTo('menu')} className="btn-primary">
              Voir le Menu
            </button>
            <button onClick={() => scrollTo('reservation')} className="btn-ghost">
              Réserver
            </button>
          </motion.div>
        </div>

        {/* Subtle bottom fade — the sea getting deeper */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,31,63,0.6), transparent)' }}
        />
      </section>

      {/* ═══════════════════ BRANCHES — Surface ═══════════════════ */}
      <BranchesSection />

      {/* ═══════════════════ MENU — The Depths ═══════════════════ */}
      <MenuSection />

      {/* ═══════════════════ RESERVATION — The Shore ═══════════════════ */}
      <ReservationSection />

      {/* ═══════════════════ FOOTER — The Abyss ═══════════════════ */}
      <footer className="section-abyss relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Deepest ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(245,211,0,0.04) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            
            {/* Left */}
            <div>
              <img src="/logo.png" alt="Shrimp Time" className="h-8 w-auto opacity-40 mb-8" />
              {BRANCHES.map((b) => (
                <p key={b.id} className="display-italic text-lg text-white/35 mb-1">
                  {b.name}
                </p>
              ))}
              <p className="label-xs text-white/20 mt-4">{BRANCHES[0].phoneDisplay}</p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start lg:items-end gap-6 text-left lg:text-right">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="label-xs text-white/25 hover:text-yellow transition-colors duration-500">
                @shrimp_.time
              </a>
              <p className="text-[10px] text-white/15 font-sans uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Shrimp Time
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
