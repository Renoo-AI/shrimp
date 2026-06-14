import React from 'react';
import { BRANCHES } from '../data';
import { motion } from 'motion/react';

export default function BranchesSection() {
  return (
    <section id="branches" className="relative py-36 md:py-52 px-8 md:px-12 lg:px-20" style={{ background: '#F8F6F2' }}>
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mb-28 md:mb-36"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="label text-muted mb-4">
            Tunis, Tunisie
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="h-lg text-5xl md:text-7xl text-navy">
            Nos Branches
          </motion.h2>
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: 0.8 }} className="gold-line mt-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36">
          {BRANCHES.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="h-xl text-[90px] md:text-[120px] text-navy/[0.03] leading-none select-none mb-4">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="h-italic text-2xl md:text-3xl text-navy">{b.name}</h3>
              <p className="body text-muted mt-4 leading-relaxed max-w-[340px]">{b.address}</p>
              <a href={`tel:${b.phone}`} className="inline-block h-italic text-xl text-navy hover:text-yellow transition-colors duration-300 mt-10">
                {b.phoneDisplay}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
