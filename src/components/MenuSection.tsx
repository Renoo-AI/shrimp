import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_NOTE } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuSection() {
  const [tab, setTab] = useState('seafood_boil');
  const cat = MENU_CATEGORIES.find((c) => c.id === tab);
  const items = MENU_ITEMS.filter((x) => x.category === tab);

  return (
    <section id="menu" className="relative py-36 md:py-52 px-8 md:px-12 lg:px-20 overflow-hidden" style={{ background: '#0A1F3F' }}>
      {/* Ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,211,0,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mb-28 md:mb-36"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="label text-white/25 mb-4">
            La Carte
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="h-lg text-5xl md:text-7xl text-white">
            Notre Menu
          </motion.h2>
          {cat?.arabicLabel && (
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.35 } }} className="text-sm text-olive/60 uppercase tracking-wider mt-3 font-sans font-semibold">
              {cat.arabicLabel}
            </motion.p>
          )}
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: 0.8 }} className="gold-line mt-10" />
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-12 md:gap-16 mb-24 overflow-x-auto">
          {MENU_CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => setTab(c.id)}
              className="relative shrink-0 pb-4 label cursor-pointer transition-colors duration-300"
              style={{ color: tab === c.id ? '#fff' : 'rgba(255,255,255,0.2)' }}>
              {c.label}
              {tab === c.id && (
                <motion.span layoutId="tab-line" className="absolute bottom-0 left-0 w-full h-px bg-yellow"
                  transition={{ duration: 0.35, ease: 'easeOut' }} />
              )}
            </button>
          ))}
        </div>

        {/* Items — like a fine-dining menu card */}
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }} className="flex flex-col gap-0">
            
            {items.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-6 py-10 border-b border-white/[0.04]"
              >
                {/* Thumbnail */}
                {item.image && (
                  <div className="hidden md:block w-20 h-20 shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 saturate-[0.3] group-hover:saturate-100" loading="lazy" />
                  </div>
                )}

                <div className="flex-1 min-w-0 flex items-start justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm opacity-25">{item.emoji}</span>
                      <h3 className="h-italic text-lg md:text-xl text-white/75 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-white/25 mt-1.5 leading-relaxed max-w-[380px] font-sans">
                      {item.description}
                    </p>
                  </div>

                  <span className="h-lg text-xl md:text-2xl gold-text shrink-0 pt-0.5 tabular-nums">
                    {item.price.toFixed(item.price % 1 !== 0 ? 1 : 0)}
                    <span className="font-sans text-[10px] font-medium text-white/15 ml-1 align-super tracking-normal">DT</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {tab === 'seafood_boil' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-xs text-white/20 italic font-sans tracking-wide mt-12 pl-6 border-l border-yellow/10">
            {MENU_NOTE}
          </motion.p>
        )}
      </div>
    </section>
  );
}
