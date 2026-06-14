import React from 'react';
import { BRANCHES } from '../data';
import { motion } from 'motion/react';

export default function BranchesSection() {
  return (
    <section id="branches" className="py-24 md:py-36 px-6 md:px-10" style={{ background: '#F8F6F2' }}>
      <div className="max-w-[1000px] mx-auto">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-4 block"
          >🦐</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="heading text-4xl md:text-5xl text-navy"
          >
            Nos Branches
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6"
            style={{ width: 48, height: 3, background: '#F5D300', borderRadius: 2, transformOrigin: 'center' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRANCHES.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="card-hover bg-white p-8 md:p-10 rounded-2xl border border-yellow/[0.12] shadow-sm cursor-default"
            >
              {/* Icon + Badge row */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">🦐</span>
                <span className="label-s text-[10px] text-olive bg-olive/5 px-3 py-1 rounded-full">
                  Tunis
                </span>
              </div>

              <h3 className="heading text-xl md:text-2xl text-navy uppercase tracking-wide mb-2">
                {b.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5 max-w-[300px]">
                {b.address}
              </p>

              {/* Phone display */}
              <div className="flex items-center gap-2 mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm text-muted font-medium">{b.phoneDisplay}</span>
              </div>

              {/* CTA */}
              <a
                href={`tel:${b.phone}`}
                className="btn-yellow text-sm py-3 px-8 inline-flex"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Appeler
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
