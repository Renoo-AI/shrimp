import React from 'react';
import { BRANCHES } from '../data';
import { motion } from 'motion/react';

export default function BranchesSection() {
  return (
    <section id="branches" className="py-20 md:py-[100px] px-5 md:px-10" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[36px] md:text-[48px] font-bold text-brand-navy">
            Nos Branches
          </h2>
          <div
            className="mx-auto mt-2"
            style={{ width: '60px', height: '3px', backgroundColor: '#F5D300' }}
          />
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {BRANCHES.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(245,211,0,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <span className="text-[40px] block mb-4">🦐</span>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-2 uppercase">
                {branch.name}
              </h3>
              <p className="text-sm text-brand-muted mb-4 leading-relaxed">{branch.address}</p>
              <p className="text-sm text-brand-muted mb-5">📞 {branch.phoneDisplay}</p>
              <a
                href={`tel:${branch.phone}`}
                className="inline-block px-8 py-3 rounded-lg font-sans font-semibold text-sm uppercase tracking-wider cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: '#F5D300',
                  color: '#0A1F3F',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#E0C200';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#F5D300';
                }}
              >
                Appeler
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
