import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import BranchesSection from './components/BranchesSection';
import ReservationSection from './components/ReservationSection';
import { INSTAGRAM_URL, BRANCHES } from './data';
import { motion } from 'motion/react';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function App() {
  return (
    <main className="min-h-screen antialiased bg-white text-navy">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section id="hero" className="relative min-h-[105vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
          style={{ filter: 'brightness(0.32) saturate(1.15)' }}
        />
        
        {/* Rich dark overlay with depth */}
        <div className="absolute inset-0 z-[1]"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(10,31,63,0.55) 0%,
                rgba(10,31,63,0.35) 40%,
                rgba(10,31,63,0.55) 75%,
                rgba(10,31,63,0.85) 100%
              )
            `
          }}
        />

        {/* Subtle grain texture */}
        <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl w-full pt-8">
          
          {/* Logo — floating with subtle shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/logo.png"
              alt="Shrimp Time"
              className="w-[170px] md:w-[220px] h-auto mx-auto mb-14 md:mb-16"
              style={{ filter: 'drop-shadow(0 4px 24px rgba(245,211,0,0.25)) brightness(1.1)' }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[11vw] md:text-[100px] text-white tracking-tight leading-[0.86]"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
          >
            Fruits de<br />Mer Frais
          </motion.h1>

          {/* Location tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="label-s tracking-[0.2em] mt-8"
            style={{ color: '#F5D300' }}
          >
            La Marsa & L'Aouina — Tunis
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-12 h-[2px] rounded-full mt-6"
            style={{ background: 'rgba(245,211,0,0.4)', transformOrigin: 'center' }}
          />

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-14"
          >
            <button onClick={() => go('menu')} className="btn-yellow px-10 py-4 text-base">
              🦐 Voir le Menu
            </button>
            <button
              onClick={() => go('reservation')}
              className="btn-ghost text-white border-white/40 hover:border-white hover:bg-white/10 px-10 py-4 text-base"
            >
              📅 Réserver une Table
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-20 md:mt-28 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25 font-sans font-semibold">Découvrir</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1"
            >
              <span className="w-1 h-2 rounded-full bg-yellow/60" />
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[3] pointer-events-none"
          style={{ background: 'linear-gradient(to top, #F8F6F2, transparent)' }}
        />
      </section>

      {/* ═══════════ BRANCHES ═══════════ */}
      <BranchesSection />

      {/* ═══════════ MENU ═══════════ */}
      <MenuSection />

      {/* ═══════════ RESERVATION ═══════════ */}
      <ReservationSection />

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="py-20 px-6 md:px-10" style={{ background: '#0A1F3F' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <img src="/logo.png" alt="Shrimp Time" className="h-10 w-auto mb-6" style={{ filter: 'brightness(2)' }} />
              <div className="flex flex-col gap-1">
                {BRANCHES.map((b) => (
                  <p key={b.id} className="italic-s text-base text-white/55 leading-relaxed">
                    {b.name} — <span className="text-white/35 text-sm">{b.address}</span>
                  </p>
                ))}
              </div>
              <a href={`tel:${BRANCHES[0].phone}`}
                className="label-s inline-block mt-5 hover:opacity-80 transition-opacity"
                style={{ color: '#F5D300' }}>
                {BRANCHES[0].phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label-s text-white/45 hover:text-yellow transition-colors duration-300"
              >
                Instagram @shrimp_.time
              </a>
              <p className="text-xs text-white/18 font-sans tracking-wide">
                &copy; {new Date().getFullYear()} Shrimp Time. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
