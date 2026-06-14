import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_NOTE } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<string>('seafood_boil');
  const items = MENU_ITEMS.filter((item) => item.category === activeTab);
  const activeCat = MENU_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="menu" className="py-20 md:py-[100px] px-5 md:px-10" style={{ backgroundColor: '#F8F6F2' }}>
      <div className="max-w-[800px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-[36px] md:text-[48px] font-bold text-brand-navy">
            Notre Menu
          </h2>
          {activeCat?.arabicLabel && (
            <p className="text-sm text-brand-olive mt-1 font-sans tracking-wider uppercase">
              {activeCat.arabicLabel}
            </p>
          )}
          <div
            className="mx-auto mt-3"
            style={{ width: '60px', height: '3px', backgroundColor: '#F5D300' }}
          />
        </div>

        {/* Tabs — horizontal scroll on mobile */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 -mx-1 px-1 justify-center">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider cursor-pointer transition-all duration-300 whitespace-nowrap"
              style={{
                backgroundColor: activeTab === cat.id ? '#F5D300' : 'transparent',
                color: activeTab === cat.id ? '#0A1F3F' : '#0A1F3F',
                border: activeTab === cat.id ? '2px solid #F5D300' : '1px solid #0A1F3F',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(245,211,0,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, i) => (
              <div key={item.id}>
                <div className="flex items-start gap-4 py-5">
                  {/* Optional image thumbnail */}
                  {item.image && (
                    <div className="hidden sm:block w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-brand-navy/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl shrink-0">{item.emoji}</span>
                      <h3 className="font-serif text-lg font-bold text-brand-navy truncate">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-brand-muted ml-8">{item.description}</p>
                  </div>
                  <span
                    className="font-sans text-lg font-bold whitespace-nowrap pt-1 shrink-0"
                    style={{ color: '#F5D300' }}
                  >
                    {item.price.toFixed(item.price % 1 !== 0 ? 1 : 0)} DT
                  </span>
                </div>
                {i < items.length - 1 && (
                  <div className="w-full" style={{ height: '1px', backgroundColor: '#E5E7EB' }} />
                )}
              </div>
            ))}

            {/* Sauce note for seafood boil */}
            {activeTab === 'seafood_boil' && (
              <div className="mt-6 p-4 rounded-lg border text-sm text-brand-muted text-center" style={{ borderColor: 'rgba(139,154,61,0.3)', backgroundColor: 'rgba(139,154,61,0.05)' }}>
                🍋 {MENU_NOTE}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
