import React from 'react';

interface ShrimpLogoProps {
  className?: string;
  size?: number; // scale sizing
  showText?: boolean;
}

export default function ShrimpLogo({ className = '', size = 180, showText = true }: ShrimpLogoProps) {
  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`} id="shrimp-time-logo">
      {/* Crisp vector logo group */}
      <img
        src="https://dropshare.42web.io/1/files/naCFAXlorP.png"
        alt="Shrimp Time Logo"
        width={size}
        className="transform transition-transform duration-500 hover:scale-105 object-contain animate-shrimp-float lg:drop-shadow-[0_0_20px_rgba(234,209,27,0.3)]"
        referrerPolicy="no-referrer"
      />

      {showText && (
        <div className="mt-2 flex flex-col items-center">
          {/* Editorial Serif Header for Brand */}
          <h1 className="font-serif font-black tracking-tight text-white flex flex-col items-center">
            <span 
              className="text-4xl md:text-5xl uppercase font-semibold text-white"
              style={{
                letterSpacing: '0.12em',
                fontFamily: '"Playfair Display", Georgia, serif'
              }}
            >
              SHRIMP
            </span>
            <span 
              className="text-2xl md:text-3xl uppercase tracking-wider text-white brightness-95 mt-0.5"
              style={{
                letterSpacing: '0.3em',
                fontFamily: '"Playfair Display", Georgia, serif'
              }}
            >
              TIME
            </span>
          </h1>

          {/* Slogan banner with underscore guides (عيش التجربة) */}
          <div className="flex items-center gap-3 mt-4 text-brand-green font-arabic font-bold text-lg md:text-xl tracking-wide">
            <span className="h-[2px] w-10 bg-brand-green opacity-80" />
            <span className="text-[#9CB421]">عيش التجربة</span>
            <span className="h-[2px] w-10 bg-brand-green opacity-80" />
          </div>
        </div>
      )}
    </div>
  );
}
