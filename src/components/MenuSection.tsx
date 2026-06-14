import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_NOTE } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuSection() {
  const [tab, setTab] = useState('seafood_boil');
  const cat = MENU_CATEGORIES.find((c) => c.id === tab);
  const items = MENU_ITEMS.filter((x) => x.category === tab);

  return (
    <section id="menu" className="py-24 md:py-36 px-6 md:px-10 bg-white">
      <div className="max-w-[900px] mx-auto">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-4 block"
          >🦞</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="heading text-4xl md:text-5xl text-navy"
          >
            Notre Menu
          </motion.h2>
          {cat?.arabicLabel && (
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.45 } }}
              className="text-sm text-olive mt-2 font-sans font-semibold tracking-wider uppercase"
            >
              {cat.arabicLabel}
            </motion.p>
          )}
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6"
            style={{ width: 48, height: 3, background: '#F5D300', borderRadius: 2, transformOrigin: 'center' }}
          />
        </motion.div>

        {/* Tabs — pill style, polished */}
        <div className="flex justify-center gap-2 md:gap-3 mb-16 overflow-x-auto pb-2 -mx-2 px-2">
          {MENU_CATEGORIES.map((c) => {
            const active = tab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setTab(c.id)}
                className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider cursor-pointer transition-all duration-250"
                style={{
                  background: active ? '#F5D300' : '#F8F6F2',
                  color: active ? '#0A1F3F' : '#6B7280',
                  border: active ? '2px solid #F5D300' : '1.5px solid #E5E7EB',
                  fontWeight: active ? 700 : 600,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = '#F5D300';
                    e.currentTarget.style.color = '#0A1F3F';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.color = '#6B7280';
                  }
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group flex items-start gap-4 py-5 border-b border-gray-75 last:border-0 hover:bg-yellow/[0.02] -mx-3 px-3 rounded-lg transition-colors duration-200"
                style={{ borderColor: i < items.length - 1 ? '#f3f4f6' : 'transparent' }}
              >
                {/* Image thumbnail */}
                {item.image && (
                  <div className="hidden sm:block w-[68px] h-[68px] rounded-xl overflow-hidden shrink-0 bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg shrink-0">{item.emoji}</span>
                    <h3 className="italic-s text-lg md:text-xl text-navy group-hover:text-yellow/80 transition-colors duration-200">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed ml-7">{item.description}</p>
                </div>

                {/* Price */}
                <span className="heading text-lg md:text-xl shrink-0 pt-0.5 tabular-nums" style={{ color: '#F5D300' }}>
                  {item.price.toFixed(item.price % 1 !== 0 ? 1 : 0)}
                  <span className="text-[10px] font-medium text-muted ml-0.5 align-super tracking-normal font-sans">DT</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sauce note */}
        {tab === 'seafood_boil' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 p-4 rounded-xl text-center"
            style={{ background: 'rgba(245,211,0,0.06)', border: '1px solid rgba(245,211,0,0.1)' }}
          >
            <p className="text-sm text-navy/65 font-sans tracking-wide">
              🍋 {MENU_NOTE}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
