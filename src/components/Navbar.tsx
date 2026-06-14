import React, { useState, useEffect } from 'react';
import ShrimpLogo from './ShrimpLogo';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-300"
        style={{
          height: '70px',
          background: scrolled ? 'rgba(10,31,63,0.92)' : 'rgba(10,31,63,0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(245,211,0,0.15)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Shrimp Time" className="h-10 w-auto" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white text-sm font-semibold uppercase tracking-wider hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-navy/98 backdrop-blur-md">
          <div className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white text-xl font-serif font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
