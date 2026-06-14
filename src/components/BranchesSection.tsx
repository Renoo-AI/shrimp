import React from 'react';
import { BRANCHES } from '../data';
import { MapPin, Clock, Phone, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function BranchesSection() {
  return (
    <section id="branches" className="py-16 md:py-24 px-4 premium-gradient-bg relative">
      {/* Visual background ripple overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,209,27,0.06),rgba(0,0,0,0))] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-brand-yellow uppercase text-[11px] sm:text-xs tracking-widest font-extrabold block mb-2 font-mono drop-shadow-md">
            Nos Établissements en Tunisie
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white tracking-tight uppercase drop-shadow-lg">
            Trois Adresses d'Exception
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 px-2 font-sans font-semibold leading-relaxed">
            Que vous recherchiez le dynamisme de la ville, l'ambiance mythique face à la mer, ou la modernité de la Cité El Wahat, découvrez nos trois tables d'exception à Tunis.
          </p>
          <div className="w-16 h-[1.5px] premium-gold-gradient mx-auto mt-6" />
        </motion.div>

        {/* Dynamic Branch Cards Grid in Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="branches-list-grid">
          {BRANCHES.map((branch, idx) => {
            const arabicSubtitle = branch.id === 'marsa_zephyr' 
              ? 'فرع المرسى (قبالة زفير)' 
              : branch.id === 'marsa_plage' 
              ? 'فرع المرسى (قبالة قبة الهواء)' 
              : 'فرع العوينة (تحت مصحة عائشة)';
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={branch.id}
                className="group relative rounded-[12px] bg-brand-navy/60 backdrop-blur-md text-white border border-brand-yellow/35 hover:border-brand-yellow hover:shadow-2xl hover:shadow-brand-yellow/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Visual Top Bar decoration */}
                <div className="h-1.5 w-full premium-gold-gradient" />

                {/* Main Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge with category type */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow">
                        <MapPin size={18} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 text-white border border-white/10">
                        {branch.id === 'marsa_plage' ? 'Plage' : branch.id === 'marsa_zephyr' ? 'Zéphir' : 'Ville'}
                      </span>
                    </div>

                    {/* Title & Ambiance details */}
                    <h3 className="text-xl md:text-2xl font-serif font-black text-white hover:text-brand-yellow transition-colors mb-1 leading-tight uppercase">
                      {branch.name}
                    </h3>
                    <p className="text-brand-yellow font-arabic font-bold text-xs mb-4">
                      {arabicSubtitle}
                    </p>

                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                      {branch.ambiance}
                    </p>
                  </div>

                  <div>
                    <div className="w-full h-[1px] bg-white/10 mb-6" />

                    {/* Info Row: Operating hours, Address, and Direct Call */}
                    <div className="flex flex-col gap-4">
                      {/* Hourly block */}
                      <div className="flex items-start gap-3">
                        <Clock size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[10px] text-white/50 uppercase tracking-widest font-black leading-none mb-1">Horaires</span>
                          <span className="text-xs text-white font-semibold">{branch.hours}</span>
                        </div>
                      </div>

                      {/* Address block */}
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[10px] text-white/50 uppercase tracking-widest font-black leading-none mb-1">Notre Adresse</span>
                          <span className="text-xs text-white/90 font-medium leading-relaxed">{branch.address}</span>
                        </div>
                      </div>

                      {/* Phone Contact Block */}
                      <div className="flex items-start gap-4">
                        <Phone size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                        <div className="flex flex-col w-full">
                          <span className="text-[10px] text-white/50 uppercase tracking-widest font-black leading-none mb-1">Contact direct</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-white font-bold">{branch.phoneDisplay}</span>
                            <a 
                              href={`tel:${branch.phone}`}
                              className="text-[9px] bg-white/10 hover:bg-brand-yellow hover:text-brand-navy text-white px-2.5 py-1 rounded font-black uppercase transition-all"
                            >
                              Appeler
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Styled Button Section: 8px border radius, gold bg, navy text */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto flex flex-col gap-2">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-[8px] premium-gold-gradient hover:opacity-90 active:scale-95 text-brand-navy font-black text-xs uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Compass size={14} />
                    <span>Google Maps</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
