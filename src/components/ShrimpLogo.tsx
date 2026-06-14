import React from 'react';

interface ShrimpLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function ShrimpLogo({ className = '', size = 200, showText = true }: ShrimpLogoProps) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Shrimp Time Logo"
        width={size}
        height={size}
        className="object-contain"
      />
      {showText && (
        <div className="mt-2 flex flex-col items-center">
          <span
            className="text-2xl md:text-3xl font-serif font-black text-white uppercase tracking-widest"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            SHRIMP TIME
          </span>
          <span className="text-sm text-brand-olive font-sans uppercase tracking-[0.2em] mt-1">
            عيش التجربة
          </span>
        </div>
      )}
    </div>
  );
}
