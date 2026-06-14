import React, { useState, useEffect } from 'react';
import ShrimpLogo from './ShrimpLogo';
import { BRAND_COLORS } from '../data';

interface NavbarProps {
  currentPath: string;
  navigateTo: (path: string, scrollToId?: string) => void;
}

export default function Navbar({ currentPath, navigateTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentPath === '/menu') {
      setActiveSection('menu');
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'menu', 'branches', 'reservation'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      if (currentPath === '/menu') {
        navigateTo('/');
      } else {
        const el = document.getElementById('hero');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'menu') {
      if (currentPath !== '/menu') {
        navigateTo('/menu');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // branches or reservation
      if (currentPath === '/menu') {
        navigateTo('/', id);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all duration-300 rounded-full px-5 md:px-8 py-2 md:py-3 flex items-center justify-between ${
          isScrolled
            ? 'subtle-glass bg-brand-navy/90 shadow-lg shadow-brand-navy/20 border-brand-yellow/20'
            : 'subtle-glass bg-brand-navy/40 border-white/10'
        }`}
        id="app-navbar"
      >
        {/* Brand Trigger with Mini SVG Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <ShrimpLogo size={42} showText={false} />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white text-base tracking-wider leading-none group-hover:text-brand-yellow transition-colors">
              SHRIMP TIME
            </span>
            <span className="text-[9px] text-brand-green font-arabic font-bold self-start tracking-wider">
              عيش التجربة
            </span>
          </div>
        </div>

        {/* Desktop Anchor Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: 'hero', label: 'Accueil' },
            { id: 'menu', label: 'Notre Menu' },
            { id: 'branches', label: 'Branches' },
            { id: 'reservation', label: 'Réservation' },
          ].map(item => {
            const isItemActive = (currentPath === '/menu' && item.id === 'menu') || (currentPath === '/' && activeSection === item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative py-1 cursor-pointer hover:text-brand-yellow ${
                  isItemActive
                    ? 'text-brand-yellow font-semibold'
                    : 'text-white/80'
                }`}
              >
                {item.label}
                {isItemActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-yellow rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA Ring with Olive/Lemon Accent */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('reservation')}
            className="px-5 py-2 rounded-[8px] font-bold text-xs tracking-wider uppercase cursor-pointer text-brand-navy bg-brand-yellow hover:bg-brand-yellow/90 transition-colors leading-none"
          >
            Réserver maintenant
          </button>
        </div>

        {/* Mobile Hamburger Burger button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-white hover:text-brand-yellow focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Glass Drawer Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-45 bg-brand-navy/98 backdrop-blur-xl flex flex-col justify-center items-center p-8 transition-all duration-300 animate-fade-in">
          {/* Logo element inside drawer */}
          <div className="mb-8 select-none">
            <ShrimpLogo size={90} showText={false} />
            <div className="mt-2 text-center">
              <span className="font-serif text-2xl font-black text-white tracking-widest block">SHRIMP TIME</span>
              <span className="text-xs text-brand-green font-arabic block mt-1 tracking-wider">— عيش التجربة —</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 w-full max-w-xs">
            {[
              { id: 'hero', label: 'Accueil' },
              { id: 'menu', label: 'Le Menu Gastronomique' },
              { id: 'branches', label: 'Nos Branches' },
              { id: 'reservation', label: 'Réserver une Table' },
            ].map(item => {
              const isItemActive = (currentPath === '/menu' && item.id === 'menu') || (currentPath === '/' && activeSection === item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 px-6 w-full text-center text-base uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    isItemActive
                      ? 'text-brand-navy bg-brand-yellow font-bold'
                      : 'text-white/90 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={() => handleNavClick('reservation')}
              className="mt-4 w-full py-3.5 rounded-[8px] font-bold uppercase tracking-widest text-xs text-brand-navy bg-brand-yellow hover:bg-brand-yellow/90 transition-colors text-center border-none"
            >
              RÉSERVER UNE TABLE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
