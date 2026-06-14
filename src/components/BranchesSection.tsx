import React from 'react';
import { BRANCHES } from '../data';
import { motion } from 'motion/react';

export default function BranchesSection() {
  return (
    <section id="branches" className="py-20 md:py-[100px] px-5 md:px-10" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="heading text-[36px] md:text-[48px] font-bold text-navy">Nos Branches</h2>
          <div className="mx-auto mt-2" style={{ width: 60, height: 3, background: '#F5D300' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {BRANCHES.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white p-8 rounded-xl border border-yellow/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              <span className="text-[40px] block mb-4">🦐</span>
              <h3 className="heading text-xl font-bold text-navy mb-2 uppercase">{branch.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{branch.address}</p>
              <p className="text-sm text-muted mb-5">📞 {branch.phoneDisplay}</p>
              <a href={`tel:${branch.phone}`} className="btn-yellow text-sm py-3 px-8 inline-flex">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
