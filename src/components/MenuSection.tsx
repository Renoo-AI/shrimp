import React from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { ChefHat, Flame, Sparkles, GlassWater, Calendar, Star, MapPin, Phone, Citrus, Check, ArrowRight } from 'lucide-react';

export default function MenuSection() {
  const seafoodBoil = MENU_ITEMS.filter((x) => x.category === 'seafood_boil');
  const crispy = MENU_ITEMS.filter((x) => x.category === 'crispy');
  const sides = MENU_ITEMS.filter((x) => x.category === 'sides');
  const drinks = MENU_ITEMS.filter((x) => x.category === 'drinks');

  const scrollToBook = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderItem = (item: MenuItem) => (
    <div key={item.id} className="group mb-6 last:mb-0">
      <div className="flex items-baseline justify-between gap-1">
        <h4 className="font-serif italic text-base md:text-lg text-white font-medium group-hover:text-[#F5D300] transition-colors duration-200">
          {item.name}
        </h4>
        <span className="flex-1 border-b border-dashed border-white/10 mx-2 self-center min-w-[20px]" />
        <span className="font-sans text-sm md:text-base font-bold text-[#F5D300]">
          {item.price} DT
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-1 pl-1 gap-1">
        {item.description && (
          <span className="text-white/50 text-xs md:text-sm font-sans">
            {item.description}
          </span>
        )}
        {item.nameAr && (
          <span className="text-[#F5D300]/80 text-xs md:text-sm font-sans dir-rtl text-right sm:ml-auto">
            {item.nameAr}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-24 md:py-32 px-4 md:px-10 bg-[#0A1F3F] text-white relative overflow-hidden">
      {/* Premium Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,211,0,0.03) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,211,0,0.02) 0%, transparent 70%)' }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* outer double border box */}
        <div className="border-[6px] border-double border-[#F5D300]/30 rounded-3xl p-6 md:p-14 bg-gradient-to-b from-[#0a1e3b] to-[#06142c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
          
          {/* Header */}
          <div className="text-center mb-12">
            <img src="/logo.png" alt="Shrimp Time Logo" className="h-20 w-auto mx-auto mb-6 object-contain brightness-110" />
            <h2 className="font-serif text-3xl md:text-5xl tracking-[0.25em] font-black uppercase text-white mb-3">
              SHRIMP TIME
            </h2>
            <p className="text-[#F5D300] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-8 font-sans">
              عيش التجربة
            </p>
            <div className="w-20 h-1 bg-[#F5D300] mx-auto rounded-full" />
          </div>

          {/* INNER MENU BOX */}
          <div className="border border-white/10 rounded-2xl p-5 md:p-10 bg-[#091b35]/60 backdrop-blur-sm">
            
            {/* Tagline */}
            <div className="text-center mb-12 flex items-center justify-center gap-3">
              <Citrus size={18} className="text-[#F5D300] shrink-0" />
              <p className="text-[#F5D300] font-serif italic text-lg md:text-2xl leading-relaxed">
                &ldquo;Fresh from the boil — straight to your plate&rdquo;
              </p>
              <Citrus size={18} className="text-[#F5D300] shrink-0" />
            </div>

            {/* Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Category: Seafood Boil */}
              <fieldset className="border border-white/15 rounded-2xl p-6 bg-[#07162c]/75 hover:border-[#F5D300]/20 transition-all duration-350 shadow-lg">
                <legend className="px-4 text-[#F5D300] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                  <ChefHat size={16} className="text-[#F5D300]" />
                  <span>Seafood Boil</span>
                </legend>
                <div className="flex flex-col gap-2 mt-4">
                  {seafoodBoil.map(renderItem)}
                </div>
              </fieldset>

              {/* Category: Crispy Selection */}
              <fieldset className="border border-white/15 rounded-2xl p-6 bg-[#07162c]/75 hover:border-[#F5D300]/20 transition-all duration-350 shadow-lg">
                <legend className="px-4 text-[#F5D300] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                  <Flame size={16} className="text-[#F5D300]" />
                  <span>Crispy Selection</span>
                </legend>
                <div className="flex flex-col gap-2 mt-4">
                  {crispy.map(renderItem)}
                </div>
              </fieldset>

              {/* Category: Sides */}
              <fieldset className="border border-white/15 rounded-2xl p-6 bg-[#07162c]/75 hover:border-[#F5D300]/20 transition-all duration-350 shadow-lg">
                <legend className="px-4 text-[#F5D300] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                  <Sparkles size={16} className="text-[#F5D300]" />
                  <span>Sides</span>
                </legend>
                <div className="flex flex-col gap-2 mt-4">
                  {sides.map(renderItem)}
                </div>
              </fieldset>

              {/* Category: Drinks */}
              <fieldset className="border border-white/15 rounded-2xl p-6 bg-[#07162c]/75 hover:border-[#F5D300]/20 transition-all duration-350 shadow-lg">
                <legend className="px-4 text-[#F5D300] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                  <GlassWater size={16} className="text-[#F5D300]" />
                  <span>Drinks</span>
                </legend>
                <div className="flex flex-col gap-2 mt-4">
                  {drinks.map(renderItem)}
                </div>
              </fieldset>

            </div>

            {/* Sauces Row */}
            <fieldset className="border border-white/15 rounded-2xl p-6 md:p-8 mt-10 bg-[#07162c]/75 hover:border-[#F5D300]/20 transition-all duration-350 text-center shadow-lg">
              <legend className="px-4 text-[#F5D300] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2 mx-auto">
                <Sparkles size={16} className="text-[#F5D300]" />
                <span>Sauces</span>
              </legend>
              <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold text-white/70 max-w-xl mx-auto mt-4">
                <span>Sauce maison</span>
                <span className="text-white/20">•</span>
                <span>Sauce Cajun</span>
                <span className="text-white/20">•</span>
                <span>Sauce citronnée</span>
                <span className="text-white/20">•</span>
                <span>Sauce tartare</span>
                <span className="text-white/20">•</span>
                <span>Sauce harissa</span>
                <span className="text-white/20">•</span>
                <span>Sauce algérienne</span>
              </div>
              <div className="mt-4 text-[#F5D300] font-bold text-sm tracking-wide font-sans">
                3 DT each
              </div>
            </fieldset>

            {/* CTA Box */}
            <fieldset className="border border-white/15 rounded-2xl p-6 md:p-8 mt-10 bg-[#07162c]/75 hover:border-[#F5D300]/20 transition-all duration-350 text-center shadow-lg">
              <legend className="px-4 text-[#F5D300] font-sans font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2 mx-auto">
                <Flame size={16} className="text-[#F5D300]" />
                <span>Crack The Boil</span>
              </legend>
              <button
                onClick={scrollToBook}
                className="w-full mt-2 border-4 border-double border-[#0A1F3F] bg-[#F5D300] hover:bg-[#E0C200] text-[#0A1F3F] rounded-xl p-5 md:p-6 font-serif font-black uppercase transition-all duration-300 shadow-xl cursor-pointer hover:scale-[1.01]"
              >
                <div className="text-lg md:text-2xl tracking-wider mb-2 flex items-center justify-center gap-2">
                  <ChefHat size={20} />
                  <span>ORDER NOW — RESERVE YOUR TABLE</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-3 text-xs font-semibold opacity-90 font-sans normal-case">
                  <span>WhatsApp order</span>
                  <span className="hidden sm:inline opacity-40">·</span>
                  <span>📞 +216 98 900 372</span>
                  <span className="hidden sm:inline opacity-40">·</span>
                  <span>Takeaway available</span>
                </div>
              </button>
            </fieldset>

          </div>

          {/* Bottom Social Proof Info */}
          <div className="mt-10 text-center border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-xs md:text-sm text-white/40">
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-[#F5D300] fill-[#F5D300]" /> 
                <span className="font-bold text-white/60">4.4 ★ (394 reviews)</span>
              </span>
              <span>·</span>
              <span>&ldquo;Best seafood boil in Tunisia&rdquo;</span>
              <span>·</span>
              <span>Fresh daily</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 items-center opacity-70">
              <span className="flex items-center gap-1.5"><MapPin size={13} /> La Marsa Plage</span>
              <span>·</span>
              <span><MapPin size={13} /> L&apos;Aouina Cité El Wahat</span>
              <span>·</span>
              <span><Phone size={13} /> +216 98 900 372</span>
            </div>
            <div className="text-[#F5D300]/80 tracking-wide font-medium mt-2 flex items-center gap-2 justify-center">
              <img src="/logo.png" alt="" className="h-4 w-auto brightness-110 object-contain inline-block" />
              <span>SHRIMP TIME · contact@shrimptime.tn · © 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
