import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const h = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-24 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
      style={{ background: '#0A1F3F', border: '1px solid rgba(245,211,0,0.3)' }}
      aria-label="Retour en haut"
      title="Retour en haut"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5D300" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
