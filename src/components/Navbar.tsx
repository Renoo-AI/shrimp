import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';

let last = 0;

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => {
      const y = window.scrollY;
      setShow(y <= last || y < 80);
      last = y;
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-transform duration-700"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100%)',
          background: 'rgba(10,31,63,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div style={{ height: 64 }} className="max-w-[1200px] mx-auto px-8 md:px-12 flex items-center justify-between">
          <button onClick={() => go('hero')} className="cursor-pointer opacity-50 hover:opacity-80 transition-opacity duration-500">
            <img src="/logo.png" alt="Shrimp Time" className="h-7 w-auto" />
          </button>
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="label text-white/30 hover:text-yellow transition-colors duration-300 cursor-pointer">
                {l.label}
              </button>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 cursor-pointer" aria-label="Menu">
            <span className={`block w-5 h-px bg-white/40 mb-[5px] transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-white/40 mb-[5px] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white/40 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10" style={{ background: '#0A1F3F' }}>
          {NAV_LINKS.map((l, i) => (
            <button key={l.id} onClick={() => go(l.id)} className="h-italic text-3xl text-white/60 hover:text-yellow transition-colors cursor-pointer"
              style={{ animation: `rise 0.5s ease forwards ${i * 0.08}s`, opacity: 0 }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
