import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_NOTE } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<string>('seafood_boil');
  const activeCat = MENU_CATEGORIES.find((c) => c.id === activeTab);
  const items = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="section-depths relative py-32 md:py-44 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Warm light pool — like candlelight at a deep-sea table */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,211,0,0.06) 0%, rgba(245,211,0,0.01) 50%, transparent 70%)' }}
      />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,154,61,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mb-24 md:mb-32"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="label-xs text-white/30 mb-4"
          >
            L'Art Culinaire
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="display-lg text-5xl md:text-7xl text-white"
          >
            Notre Menu
          </motion.h2>
          {activeCat?.arabicLabel && (
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }}
              className="text-sm text-olive/60 uppercase tracking-wider mt-2 font-sans font-semibold"
            >
              {activeCat.arabicLabel}
            </motion.p>
          )}
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.8 }}
            className="gold-line mt-8"
          />
        </motion.div>

        {/* Tabs — understated underline */}
        <div className="flex gap-12 md:gap-16 mb-20 overflow-x-auto">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative shrink-0 pb-4 label-xs cursor-pointer transition-colors duration-300"
              style={{ color: activeTab === cat.id ? '#FFFFFF' : 'rgba(255,255,255,0.25)' }}
            >
              {cat.label}
              {activeTab === cat.id && (
                <motion.span
                  layoutId="menu-line"
                  className="absolute bottom-0 left-0 w-full h-px bg-yellow"
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Items — generous spacing, like courses in a tasting menu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-6 py-10 border-b border-white/[0.04]"
              >
                {/* Image thumbnail */}
                {item.image && (
                  <div className="hidden md:block w-16 h-16 shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 saturate-50 group-hover:saturate-100"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0 flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm opacity-30">{item.emoji}</span>
                      <h3 className="display-italic text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                    <p className="body-text text-white/30 text-sm mt-1.5 leading-relaxed max-w-[340px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Price — the only yellow on the page */}
                  <span className="display-lg text-xl md:text-2xl text-yellow shrink-0 pt-0.5 tabular-nums">
                    {item.price.toFixed(item.price % 1 !== 0 ? 1 : 0)}
                    <span className="font-sans text-[10px] font-medium text-white/20 ml-1 align-super tracking-normal">DT</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sauce note — a quiet observation */}
        {activeTab === 'seafood_boil' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pl-6 border-l border-yellow/10"
          >
            <p className="text-xs text-white/25 italic font-sans tracking-wide">{MENU_NOTE}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
