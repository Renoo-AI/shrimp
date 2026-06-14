import React, { useState, useRef } from 'react';
import { BRANCHES, TIME_SLOTS, RESERVATION_FORM_INITIAL } from '../data';
import { motion } from 'motion/react';

export default function ReservationSection() {
  const [form, setForm] = useState({ ...RESERVATION_FORM_INITIAL });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const confettiRef = useRef<HTMLDivElement>(null);

  const set = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validatePhone = (p: string) => {
    const c = p.replace(/[\s\-()]+/g, '');
    if (/^\+216/.test(c)) return /^\+216[2-9]\d{7}$/.test(c);
    if (/^216/.test(c)) return /^216[2-9]\d{7}$/.test(c);
    if (/^0/.test(c)) return /^0[2-9]\d{7}$/.test(c);
    return /^[2-9]\d{7}$/.test(c);
  };

  const buildMsg = () => {
    const b = BRANCHES.find((x) => x.id === form.branch);
    const dp = form.date.split('-');
    const df = `${dp[2] || ''}/${dp[1] || ''}/${dp[0] || ''}`;
    return `Bonjour Shrimp Time, Réservation pour ${form.guests} personnes le ${df} à ${form.time} à la branche ${b?.name || form.branch} Tel: ${form.phone}`;
  };

  const confetti = () => {
    if (!confettiRef.current) return;
    const c = confettiRef.current;
    const e = ['🦐', '✨', '🦞', '🦑', '🍋'];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('span');
      p.textContent = e[Math.floor(Math.random() * e.length)];
      p.style.cssText = `
        position:absolute;left:${Math.random() * 100}%;top:0;
        font-size:${Math.random() * 20 + 14}px;
        animation:confetti-fall ${Math.random() * 2 + 1.5}s ease-out forwards;
        animation-delay:${Math.random() * 0.5}s;pointer-events:none;
      `;
      c.appendChild(p);
      setTimeout(() => p.remove(), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.branch) errs.branch = 'Choisissez une branche';
    if (!form.phone.trim()) errs.phone = 'Numéro requis';
    else if (!validatePhone(form.phone)) errs.phone = 'Numéro tunisien invalide';
    if (form.guests < 1 || form.guests > 20) errs.guests = '1–20 personnes';
    if (!form.date) errs.date = 'Date requise';
    if (!form.time) errs.time = 'Heure requise';
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const branch = BRANCHES.find((b) => b.id === form.branch);
    const phone = branch ? branch.phone.replace('+', '') : '21698900372';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(buildMsg())}`, '_blank');

    setSuccess(true);
    confetti();
    setForm({ ...RESERVATION_FORM_INITIAL });
    setTimeout(() => setSuccess(false), 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="section-shore relative py-32 md:py-44 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Ethereal light — the shore at twilight */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,211,0,0.05) 0%, rgba(10,31,63,0) 60%)' }}
      />
      <div ref={confettiRef} className="absolute inset-0 pointer-events-none overflow-hidden z-20" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mb-20 md:mb-28"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="label-xs text-white/30 mb-4"
          >
            Sans appel, sans attente
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.8 }}
            className="display-lg text-5xl md:text-7xl text-white"
          >
            Réserver<br />une Table
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.8 }}
            className="gold-line mt-8"
          />
        </motion.div>

        {/* Form — split layout, form on right, context on left */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-28">
          
          {/* Left — poetic context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex flex-col justify-end pb-4"
          >
            <p className="display-italic text-2xl text-white/15 leading-relaxed">
              Chaque table<br />
              est une promesse<br />
              de fraîcheur.
            </p>
            <p className="label-xs text-white/15 mt-8">
              Confirmation immédiate via WhatsApp
            </p>
          </motion.div>

          {/* Right — the form itself */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div>
                <label className="label-xs text-white/30 mb-3 block">Branche</label>
                <select value={form.branch} onChange={(e) => set('branch', e.target.value)} className="etch-select">
                  <option value="">— Sélectionnez —</option>
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
                {errors.branch && <p className="text-xs text-error mt-2 font-sans">{errors.branch}</p>}
              </div>

              <div>
                <label className="label-xs text-white/30 mb-3 block">Téléphone</label>
                <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="98 900 372" className="etch-input" />
                {errors.phone && <p className="text-xs text-error mt-2 font-sans">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label className="label-xs text-white/30 mb-3 block">Personnes</label>
                  <select value={form.guests} onChange={(e) => set('guests', parseInt(e.target.value))} className="etch-select">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-xs text-white/30 mb-3 block">Date</label>
                  <input type="date" value={form.date} min={today} onChange={(e) => set('date', e.target.value)} className="etch-input" />
                  {errors.date && <p className="text-xs text-error mt-2 font-sans">{errors.date}</p>}
                </div>
              </div>

              <div>
                <label className="label-xs text-white/30 mb-3 block">Heure</label>
                <select value={form.time} onChange={(e) => set('time', e.target.value)} className="etch-select">
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <button type="submit" className="btn-primary w-full mt-6">
                Réserver maintenant →
              </button>

              {success && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-xs text-olive/80 text-center font-sans tracking-wide">
                  Réservation envoyée. Ouverture de WhatsApp...
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
