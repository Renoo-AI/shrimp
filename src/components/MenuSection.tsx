import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_NOTE } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuSection() {
  const [tab, setTab] = useState('seafood_boil');
  const cat = MENU_CATEGORIES.find((c) => c.id === tab);
  const items = MENU_ITEMS.filter((x) => x.category === tab);

  return (
    <section id="menu" className="py-20 md:py-[100px] px-5 md:px-10" style={{ backgroundColor: '#F8F6F2' }}>
      <div className="max-w-[800px] mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="heading text-[36px] md:text-[48px] font-bold text-navy">Notre Menu</h2>
          {cat?.arabicLabel && (
            <p className="text-sm text-olive mt-1 font-sans font-semibold tracking-wider uppercase">{cat.arabicLabel}</p>
          )}
          <div className="mx-auto mt-3" style={{ width: 60, height: 3, background: '#F5D300' }} />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {MENU_CATEGORIES.map((c) => {
            const active = tab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setTab(c.id)}
                className="shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider cursor-pointer transition-all duration-200"
                style={{
                  background: active ? '#F5D300' : 'transparent',
                  color: active ? '#0A1F3F' : '#6B7280',
                  border: active ? '2px solid #F5D300' : '1px solid #D1D5DB',
                }}
                onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = '#F5D300'; e.currentTarget.style.color = '#0A1F3F'; } }}
                onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.color = '#6B7280'; } }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {items.map((item, i) => (
              <div key={item.id}>
                <div className="flex items-start justify-between py-5">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{item.emoji}</span>
                      <h3 className="italic-s text-lg text-navy">{item.name}</h3>
                    </div>
                    <p className="text-sm text-muted ml-8">{item.description}</p>
                  </div>
                  <span className="heading text-lg font-bold shrink-0 pt-1" style={{ color: '#F5D300' }}>
                    {item.price.toFixed(item.price % 1 !== 0 ? 1 : 0)} DT
                  </span>
                </div>
                {i < items.length - 1 && <div className="w-full h-px bg-[#E5E7EB]" />}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {tab === 'seafood_boil' && (
          <div className="mt-8 p-4 rounded-lg text-center" style={{ background: 'rgba(245,211,0,0.06)', border: '1px solid rgba(245,211,0,0.1)' }}>
            <p className="text-sm text-navy/60 font-sans">🍋 {MENU_NOTE}</p>
          </div>
        )}
      </div>
    </section>
  );
}
