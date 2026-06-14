import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import BranchesSection from './components/BranchesSection';
import ReservationSection from './components/ReservationSection';
import { INSTAGRAM_URL, BRANCHES, RESTAURANT_EMAIL, RESTAURANT_HOURS } from './data';
import { motion } from 'motion/react';

const VID = [1, 2, 3][Math.floor(Math.random() * 3)];
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function App() {
  return (
    <main className="min-h-screen antialiased bg-white text-navy font-sans">
      <Navbar />

      {/* ═══════════════ HERO — Video Background, Navy Overlay ═══════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0A1F3F' }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.15]">
          <source src={`/${VID}.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-0 bg-navy/60" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>
            <img src="/logo.png" alt="Shrimp Time logo" className="w-[200px] md:w-[300px] h-auto mx-auto mb-12"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(245,211,0,0.2))' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-olive font-sans text-lg uppercase tracking-[2px] mb-10 font-semibold">
            Vivez l'expérience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => go('menu')} className="btn-yellow text-base px-10 py-4">
              📖 Voir le Menu
            </button>
            <button onClick={() => go('reservation')} className="btn-outline-white text-base px-10 py-4">
              📞 Réserver
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ BRANCHES — #FFFFFF ═══════════════ */}
      <BranchesSection />

      {/* ═══════════════ MENU — #F8F6F2 ═══════════════ */}
      <MenuSection />

      {/* ═══════════════ RESERVATION — #FFFFFF ═══════════════ */}
      <ReservationSection />

      {/* ═══════════════ FOOTER — #0A1F3F ═══════════════ */}
      <footer className="py-20 px-6 md:px-10" style={{ background: '#0A1F3F' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <img src="/logo.png" alt="Shrimp Time" className="h-10 w-auto mx-auto mb-6 brightness-200" />
          <p className="font-serif text-lg font-bold tracking-widest text-white mb-1">SHRIMP TIME</p>
          <p className="text-xs text-olive font-sans font-semibold tracking-wider mb-6">عيش التجربة</p>
          
          <p className="text-sm text-white/50 mb-2">📍 {BRANCHES.map(b => b.name).join(' & ')}</p>
          <p className="text-sm text-white/50 mb-4">📞 {BRANCHES[0].phoneDisplay} &nbsp; ✉️ {RESTAURANT_EMAIL}</p>
          <p className="text-sm text-white/30 mb-6">{RESTAURANT_HOURS}</p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-yellow transition-colors font-sans font-semibold">📸 @shrimp_.time</a>
            <a href="https://www.facebook.com/profile.php?id=61559768967974" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-yellow transition-colors font-sans font-semibold">🟦 Facebook</a>
          </div>

          <div className="w-12 h-px bg-white/10 mx-auto mb-6" />
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Shrimp Time. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
