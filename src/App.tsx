import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import BranchesSection from './components/BranchesSection';
import ReservationSection from './components/ReservationSection';
import { INSTAGRAM_URL, BRANCHES } from './data';
import { motion } from 'motion/react';

const to = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function App() {
  return (
    <main className="min-h-screen antialiased" style={{ background: '#0A1F3F' }}>
      <Navbar />

      {/* ═══════════ HERO — Full-bleed photography, gold typography ═══════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Full-bleed image */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.25) saturate(0.6)' }}
        />
        
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to bottom, rgba(10,31,63,0.4) 0%, rgba(10,31,63,0.7) 60%, #0A1F3F 100%)' }} />

        {/* Content — very little on screen */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/logo.png" alt="Shrimp Time" className="w-[200px] md:w-[260px] h-auto mx-auto mb-20" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-xl text-[13vw] md:text-[130px] text-white tracking-tighter leading-[0.82]"
          >
            SHRIMP<br />TIME
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="gold-line mt-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="label text-white/40 mt-8"
          >
            Fruits de mer frais — La Marsa & L'Aouina
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-14"
          >
            <button onClick={() => to('menu')} className="btn-gold">Découvrir le Menu</button>
            <button onClick={() => to('reservation')} className="btn-outline">Réserver une Table</button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ BRANCHES ═══════════ */}
      <BranchesSection />

      {/* ═══════════ MENU ═══════════ */}
      <MenuSection />

      {/* ═══════════ RESERVATION ═══════════ */}
      <ReservationSection />

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="relative py-24 px-8 md:px-12 lg:px-20 overflow-hidden" style={{ background: '#060E1F' }}>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            <div>
              <img src="/logo.png" alt="Shrimp Time" className="h-8 w-auto opacity-30 mb-8" />
              {BRANCHES.map((b) => (
                <p key={b.id} className="h-italic text-base text-white/25 mb-1">{b.name}</p>
              ))}
              <p className="label text-white/15 mt-6">{BRANCHES[0].phoneDisplay}</p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-5 text-left lg:text-right">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="label text-white/20 hover:text-yellow transition-colors duration-500">
                @shrimp_.time
              </a>
              <p className="text-[10px] text-white/10 font-sans uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} Shrimp Time
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
