import React, { useState, useRef } from 'react';
import { BRANCHES, TIME_SLOTS, RESERVATION_FORM_INITIAL } from '../data';
import { motion } from 'motion/react';

export default function ReservationSection() {
  const [f, setF] = useState({ ...RESERVATION_FORM_INITIAL });
  const [e, setE] = useState<Record<string, string>>({});
  const [ok, setOk] = useState(false);
  const cr = useRef<HTMLDivElement>(null);

  const s = (k: string, v: string | number) => { setF((p) => ({ ...p, [k]: v })); if (e[k]) setE((p) => ({ ...p, [k]: '' })); };

  const vp = (p: string) => { const c = p.replace(/[\s\-()]+/g, ''); if (/^\+216/.test(c)) return /^\+216[2-9]\d{7}$/.test(c); if (/^216/.test(c)) return /^216[2-9]\d{7}$/.test(c); if (/^0/.test(c)) return /^0[2-9]\d{7}$/.test(c); return /^[2-9]\d{7}$/.test(c); };

  const msg = () => {
    const b = BRANCHES.find((x) => x.id === f.branch);
    const dp = f.date.split('-');
    return `Bonjour Shrimp Time, Réservation pour ${f.guests} personnes le ${dp[2] || ''}/${dp[1] || ''}/${dp[0] || ''} à ${f.time} à la branche ${b?.name || f.branch} Tel: ${f.phone}`;
  };

  const confetti = () => {
    if (!cr.current) return;
    const el = cr.current;
    const em = ['🦐', '✨', '🦞', '🦑', '🍋'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('span');
      p.textContent = em[Math.floor(Math.random() * em.length)];
      p.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:0;font-size:${Math.random() * 18 + 12}px;animation:confetti-fall ${Math.random() * 2 + 1.5}s ease-out forwards;animation-delay:${Math.random() * 0.5}s;pointer-events:none;`;
      el.appendChild(p);
      setTimeout(() => p.remove(), 2500);
    }
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const er: Record<string, string> = {};
    if (!f.branch) er.branch = 'Choisissez une branche';
    if (!f.phone.trim()) er.phone = 'Numéro requis';
    else if (!vp(f.phone)) er.phone = 'Numéro tunisien invalide';
    if (f.guests < 1 || f.guests > 20) er.guests = '1–20 personnes';
    if (!f.date) er.date = 'Date requise';
    if (!f.time) er.time = 'Heure requise';
    if (Object.keys(er).length) { setE(er); return; }

    const b = BRANCHES.find((x) => x.id === f.branch);
    setTimeout(() => window.open(`https://wa.me/${(b?.phone || '+21698900372').replace('+', '')}?text=${encodeURIComponent(msg())}`, '_blank'), 500);
    setOk(true); confetti(); setF({ ...RESERVATION_FORM_INITIAL }); setTimeout(() => setOk(false), 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="relative py-36 md:py-52 px-8 md:px-12 lg:px-20 overflow-hidden" style={{ background: '#0A1F3F' }}>
      
      {/* Light */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,211,0,0.04) 0%, transparent 60%)' }} />
      <div ref={cr} className="absolute inset-0 pointer-events-none overflow-hidden z-20" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mb-24 md:mb-32"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="label text-white/25 mb-4">
            Conciergerie
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8 }} className="h-lg text-5xl md:text-7xl text-white">
            Réserver<br />une Table
          </motion.h2>
          <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: 0.8 }} className="gold-line mt-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 lg:gap-32">
          
          {/* Left — luxury copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex flex-col justify-end pb-4"
          >
            <p className="h-italic text-2xl text-white/[0.08] leading-relaxed">
              Chaque table<br />
              est une promesse<br />
              de fraîcheur.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={submit} className="flex flex-col gap-12">
              
              <div>
                <label className="label text-white/25 mb-3 block">Branche</label>
                <select value={f.branch} onChange={(ev) => s('branch', ev.target.value)} className="sel">
                  <option value="">— Sélectionnez —</option>
                  {BRANCHES.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
                {e.branch && <p className="text-xs text-error mt-2 font-sans">{e.branch}</p>}
              </div>

              <div>
                <label className="label text-white/25 mb-3 block">Téléphone</label>
                <input type="tel" value={f.phone} onChange={(ev) => s('phone', ev.target.value)} placeholder="98 900 372" className="inp" />
                {e.phone && <p className="text-xs text-error mt-2 font-sans">{e.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <label className="label text-white/25 mb-3 block">Personnes</label>
                  <select value={f.guests} onChange={(ev) => s('guests', parseInt(ev.target.value))} className="sel">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label text-white/25 mb-3 block">Date</label>
                  <input type="date" value={f.date} min={today} onChange={(ev) => s('date', ev.target.value)} className="inp" />
                  {e.date && <p className="text-xs text-error mt-2 font-sans">{e.date}</p>}
                </div>
              </div>

              <div>
                <label className="label text-white/25 mb-3 block">Heure</label>
                <select value={f.time} onChange={(ev) => s('time', ev.target.value)} className="sel">
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <button type="submit" className="btn-gold w-full mt-4">Réserver maintenant →</button>

              {ok && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-olive/80 text-center font-sans tracking-wide">
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
