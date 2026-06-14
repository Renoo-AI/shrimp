import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.id);
    const h = () => {
      const y = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  let prevY = 0;
  useEffect(() => {
    const h = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > prevY && y > 400);
      prevY = y;
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);

  const go = useCallback((id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-400"
        style={{
          height: scrolled ? 64 : 80,
          transform: hidden && !open ? 'translateY(-100%)' : 'translateY(0)',
          background: scrolled ? 'rgba(10,31,63,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,211,0,0.12)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={() => go('hero')} className="flex items-center gap-2 cursor-pointer shrink-0">
            <img src="/logo.png" alt="Shrimp Time" className="h-10 w-auto transition-all duration-400"
              style={{ filter: scrolled ? 'none' : 'brightness(2) drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }} />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.id;
              const isLast = i === NAV_LINKS.length - 1;
              return (
                <React.Fragment key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className="text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer px-4 py-2"
                    style={{
                      color: isActive ? '#F5D300' : scrolled ? '#fff' : '#fff',
                      opacity: isActive ? 1 : scrolled ? 0.8 : 0.9,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#F5D300'; e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? '#F5D300' : '#fff'; e.currentTarget.style.opacity = isActive ? '1' : scrolled ? '0.8' : '0.9'; }}
                  >
                    {link.label}
                  </button>
                  {!isLast && (
                    <span className="text-white/15 text-xs select-none mx-1"
                      style={{ opacity: scrolled ? 0.3 : 0.2 }}>|</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go('reservation')}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-sans text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer"
              style={{ background: '#F5D300', color: '#0A1F3F' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#E0C200'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#F5D300'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Réserver
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
              aria-label="Menu"
              style={{ color: scrolled ? '#fff' : '#fff' }}
            >
              <span className="block w-[22px] h-[2px] bg-current rounded-full transition-all duration-300"
                style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span className="block w-[22px] h-[2px] bg-current rounded-full transition-all duration-200"
                style={{ opacity: open ? 0 : 1 }} />
              <span className="block w-[22px] h-[2px] bg-current rounded-full transition-all duration-300"
                style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-navy">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer text-2xl">&times;</button>
          {NAV_LINKS.map((link, i) => (
            <button key={link.id} onClick={() => go(link.id)}
              className="heading text-3xl text-white/80 hover:text-yellow transition-colors cursor-pointer"
              style={{ animation: `slideUp 0.4s ease forwards ${0.2 + i * 0.07}s`, opacity: 0 }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => go('reservation')}
            className="btn-yellow mt-4 text-base py-4 px-10 rounded-xl"
            style={{ animation: `slideUp 0.4s ease forwards ${0.2 + NAV_LINKS.length * 0.07}s`, opacity: 0 }}>
            📅 Réserver
          </button>
        </div>
      )}
    </>
  );
}
