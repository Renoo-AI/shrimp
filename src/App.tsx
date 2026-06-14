import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import BranchesSection from './components/BranchesSection';
import ReservationSection from './components/ReservationSection';
import { INSTAGRAM_URL, BRANCHES } from './data';
import { motion } from 'motion/react';

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-brand-navy antialiased">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-5 text-center overflow-hidden"
        style={{ backgroundColor: '#0A1F3F' }}
      >
        {/* Subtle seafood background image overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.12]"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-navy/60 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/logo.png"
              alt="Shrimp Time logo"
              className="w-full max-w-[300px] h-auto mx-auto"
            />
          </motion.div>

          {/* French tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-olive font-sans text-[18px] uppercase tracking-[2px] mt-4"
          >
            Vivez l'expérience
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-10"
          >
            {/* Primary: Voir le Menu */}
            <button
              onClick={() => scrollTo('menu')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-bold text-base uppercase tracking-wider cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: '#F5D300',
                color: '#0A1F3F',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#E0C200';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#F5D300';
              }}
            >
              📖 Voir le Menu
            </button>

            {/* Secondary outline: Réserver */}
            <button
              onClick={() => scrollTo('reservation')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-sans font-bold text-base uppercase tracking-wider cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: '#F5D300',
                border: '2px solid #F5D300',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F5D300';
                e.currentTarget.style.color = '#0A1F3F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#F5D300';
              }}
            >
              📞 Réserver
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==================== BRANCHES ==================== */}
      <BranchesSection />

      {/* ==================== MENU ==================== */}
      <MenuSection />

      {/* ==================== RESERVATION ==================== */}
      <ReservationSection />

      {/* ==================== FOOTER ==================== */}
      <footer
        className="py-16 px-5 md:px-10 text-center"
        style={{ backgroundColor: '#0A1F3F' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-white">
          {/* Small logo */}
          <img src="/logo.png" alt="Shrimp Time" className="h-12 w-auto mb-4" />

          <p className="font-serif text-lg font-bold tracking-wider mb-1">Shrimp Time</p>
          <p className="text-sm text-white/60 mb-6">
            📍 {BRANCHES.map((b) => b.name).join(' & ')}
          </p>
          <p className="text-sm text-white/60 mb-4">
            📞 {BRANCHES[0].phoneDisplay}
          </p>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand-yellow transition-colors mb-8"
          >
            📸 @shrimp_.time
          </a>

          <div className="w-12 h-px bg-white/15 mb-6" />

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Shrimp Time. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
