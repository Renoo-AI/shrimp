import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';

let lastScroll = 0;

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => {
      const y = window.scrollY;
      setVisible(y <= lastScroll || y < 100);
      lastScroll = y;
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const go = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-transform duration-600"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          background: 'rgba(10,31,63,0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between" style={{ height: '60px' }}>
          <button onClick={() => go('hero')} className="cursor-pointer opacity-50 hover:opacity-80 transition-opacity duration-500">
            <img src="/logo.png" alt="Shrimp Time" className="h-7 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l.id)}
                className="label-xs text-white/35 hover:text-yellow transition-colors duration-300 cursor-pointer">
                {l.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 cursor-pointer" aria-label="Menu">
            <span className={`block w-5 h-px bg-white/40 mb-[5px] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-white/40 mb-[5px] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white/40 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10" style={{ background: '#0A1F3F' }}>
          {NAV_LINKS.map((l, i) => (
            <button key={l.id} onClick={() => go(l.id)}
              className="display-italic text-3xl text-white/60 hover:text-yellow transition-colors cursor-pointer"
              style={{ animation: `drift-up 0.5s ease forwards ${i * 0.08}s`, opacity: 0 }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
