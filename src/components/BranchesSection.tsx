import React from 'react';
import { BRANCHES } from '../data';
import { motion } from 'motion/react';

export default function BranchesSection() {
  return (
    <section id="branches" className="section-surface relative py-32 md:py-44 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle warm light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(245,211,0,0.06), transparent 70%)' }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section header — gallery-label minimal */}
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
            className="label-xs text-muted mb-4"
          >
            Tunis, Tunisie
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="display-lg text-5xl md:text-7xl text-navy"
          >
            Nos Branches
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.8 }}
            className="gold-line mt-8"
          />
        </motion.div>

        {/* Branches — two pillars of text, generously spaced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {BRANCHES.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Large number */}
              <p className="display-xl text-[80px] md:text-[100px] text-navy/[0.04] leading-none select-none mb-6">
                {String(i + 1).padStart(2, '0')}
              </p>
              
              <h3 className="display-lg text-2xl md:text-3xl text-navy">
                {branch.name}
              </h3>
              
              <p className="body-text text-muted mt-4 leading-relaxed max-w-[360px]">
                {branch.address}
              </p>

              <div className="flex items-center gap-8 mt-10">
                <a href={`tel:${branch.phone}`}
                  className="display-italic text-xl text-navy hover:text-yellow transition-colors duration-300">
                  {branch.phoneDisplay}
                </a>
                <a href={`tel:${branch.phone}`}
                  className="label-xs text-muted hover:text-navy transition-colors duration-300">
                  Appeler →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
