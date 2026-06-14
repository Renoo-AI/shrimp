import React, { useState, useRef } from 'react';
import { BRANCHES, TIME_SLOTS, RESERVATION_FORM_INITIAL } from '../data';
import { motion } from 'motion/react';

export default function ReservationSection() {
  const [f, setF] = useState({ ...RESERVATION_FORM_INITIAL });
  const [e, setE] = useState<Record<string, string>>({});
  const [ok, setOk] = useState(false);
  const cr = useRef<HTMLDivElement>(null);

  const s = (k: string, v: string | number) => { setF((p) => ({ ...p, [k]: v })); if (e[k]) setE((p) => ({ ...p, [k]: '' })); };

  const vp = (p: string) => {
    const c = p.replace(/[\s\-()]+/g, '');
    return /^\+216[2-9]\d{7}$/.test(c) || /^216[2-9]\d{7}$/.test(c) || /^0[2-9]\d{7}$/.test(c) || /^[2-9]\d{7}$/.test(c);
  };

  const msg = () => {
    const b = BRANCHES.find((x) => x.id === f.branch);
    const dp = f.date.split('-');
    return `Bonjour Shrimp Time, Réservation pour ${f.guests} personnes le ${dp[2] || ''}/${dp[1] || ''}/${dp[0] || ''} à ${f.time} à la branche ${b?.name || f.branch} Tel: ${f.phone}`;
  };

  const confetti = () => {
    if (!cr.current) return;
    const el = cr.current;
    const em = ['🦐', '✨', '🦞', '🦑', '🍋', '🐟', '🦀'];
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('span');
      p.textContent = em[Math.floor(Math.random() * em.length)];
      p.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:0;font-size:${Math.random() * 20 + 14}px;animation:confetti-fall ${Math.random() * 2 + 1.8}s ease-out forwards;animation-delay:${Math.random() * 0.6}s;pointer-events:none;`;
      el.appendChild(p);
      setTimeout(() => p.remove(), 2800);
    }
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const er: Record<string, string> = {};
    if (!f.branch) er.branch = 'Choisissez une branche';
    if (!f.phone.trim()) er.phone = 'Numéro requis';
    else if (!vp(f.phone)) er.phone = 'Numéro tunisien invalide (ex: 98 900 372)';
    if (f.guests < 1 || f.guests > 20) er.guests = '1 à 20 personnes';
    if (!f.date) er.date = 'Date requise';
    if (!f.time) er.time = 'Heure requise';
    if (Object.keys(er).length) { setE(er); return; }

    const b = BRANCHES.find((x) => x.id === f.branch);
    setTimeout(() => window.open(`https://wa.me/${(b?.phone || '+21698900372').replace('+', '')}?text=${encodeURIComponent(msg())}`, '_blank'), 500);
    setOk(true); confetti(); setF({ ...RESERVATION_FORM_INITIAL }); setTimeout(() => setOk(false), 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="py-24 md:py-36 px-6 md:px-10 relative" style={{ background: '#F8F6F2' }}>
      <div ref={cr} className="absolute inset-0 pointer-events-none overflow-hidden z-10" />

      <div className="max-w-[520px] mx-auto relative z-20">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-12"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-4 block"
          >🍋</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="heading text-4xl md:text-5xl text-navy"
          >
            Réserver une Table
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-6 mb-5"
            style={{ width: 48, height: 3, background: '#F5D300', borderRadius: 2, transformOrigin: 'center' }}
          />
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.6 } }}
            className="text-muted text-sm"
          >
            Réservez en ligne, sans appel
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-sm"
          style={{ border: '1px solid rgba(245,211,0,0.12)' }}
        >
          <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
            
            {/* Branch */}
            <div>
              <label className="label-s text-navy mb-2 block">Choisissez votre branche *</label>
              <select
                value={f.branch}
                onChange={(ev) => s('branch', ev.target.value)}
                className="sel"
                style={e.branch ? { borderColor: '#DC2626' } : {}}
              >
                <option value="">— Sélectionnez —</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>{b.name} ({b.phoneDisplay})</option>
                ))}
              </select>
              {e.branch && <p className="text-xs mt-1.5 font-sans font-medium" style={{ color: '#DC2626' }}>{e.branch}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="label-s text-navy mb-2 block">
                <span className="mr-1.5">📱</span>Votre numéro de téléphone *
              </label>
              <input
                type="tel"
                value={f.phone}
                onChange={(ev) => s('phone', ev.target.value)}
                placeholder="98 900 372"
                className="inp"
                style={e.phone ? { borderColor: '#DC2626' } : {}}
              />
              {e.phone && <p className="text-xs mt-1.5 font-sans font-medium" style={{ color: '#DC2626' }}>{e.phone}</p>}
            </div>

            {/* Guests */}
            <div>
              <label className="label-s text-navy mb-2 block">
                <span className="mr-1.5">👥</span>Nombre de personnes *
              </label>
              <select
                value={f.guests}
                onChange={(ev) => s('guests', parseInt(ev.target.value))}
                className="sel"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label-s text-navy mb-2 block">
                  <span className="mr-1.5">📅</span>Date *
                </label>
                <input
                  type="date"
                  value={f.date}
                  min={today}
                  onChange={(ev) => s('date', ev.target.value)}
                  className="inp"
                  style={e.date ? { borderColor: '#DC2626' } : {}}
                />
                {e.date && <p className="text-xs mt-1.5 font-sans font-medium" style={{ color: '#DC2626' }}>{e.date}</p>}
              </div>
              <div>
                <label className="label-s text-navy mb-2 block">
                  <span className="mr-1.5">🕐</span>Heure *
                </label>
                <select
                  value={f.time}
                  onChange={(ev) => s('time', ev.target.value)}
                  className="sel"
                >
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-yellow w-full py-4 text-base mt-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Réserver maintenant
            </button>

            {ok && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-semibold font-sans"
                style={{ color: '#8B9A3D' }}
              >
                Réservation envoyée ! Ouverture de WhatsApp...
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Trust text */}
        <p className="text-center mt-5 text-xs text-muted font-sans flex items-center justify-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Sans engagement. Confirmation immédiate via WhatsApp.
        </p>
      </div>
    </section>
  );
}
