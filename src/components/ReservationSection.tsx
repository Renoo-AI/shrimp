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

  const validateTunisianPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-()]+/g, '');
    if (/^\+216/.test(cleaned)) return /^\+216[2-9]\d{7}$/.test(cleaned);
    if (/^216/.test(cleaned)) return /^216[2-9]\d{7}$/.test(cleaned);
    if (/^0/.test(cleaned)) return /^0[2-9]\d{7}$/.test(cleaned);
    return /^[2-9]\d{7}$/.test(cleaned);
  };

  const buildWhatsAppMessage = (): string => {
    const branch = BRANCHES.find((b) => b.id === form.branch);
    const branchName = branch ? branch.name : form.branch;
    const dateParts = form.date.split('-');
    const dateFormatted = `${dateParts[2] || ''}/${dateParts[1] || ''}/${dateParts[0] || ''}`;
    return `Bonjour Shrimp Time, Réservation pour ${form.guests} personnes le ${dateFormatted} à ${form.time} à la branche ${branchName} Tel: ${form.phone}`;
  };

  const launchConfetti = () => {
    if (!confettiRef.current) return;
    const container = confettiRef.current;
    const colors = ['#F5D300', '#0A1F3F', '#8B9A3D', '#FFFFFF'];
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement('span');
      particle.textContent = ['🦐', '✨', '🦞', '🦑', '🍋'][Math.floor(Math.random() * 5)];
      particle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: 0;
        font-size: ${Math.random() * 20 + 14}px;
        animation: confetti-fall ${Math.random() * 2 + 1.5}s ease-out forwards;
        animation-delay: ${Math.random() * 0.5}s;
        pointer-events: none;
      `;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!form.branch) errs.branch = 'Veuillez choisir une branche';
    if (!form.phone.trim()) {
      errs.phone = 'Numéro de téléphone requis';
    } else if (!validateTunisianPhone(form.phone)) {
      errs.phone = 'Numéro tunisien invalide (8 chiffres)';
    }
    if (form.guests < 1 || form.guests > 20) errs.guests = '1 à 20 personnes';
    if (!form.date) errs.date = 'Date requise';
    if (!form.time) errs.time = 'Heure requise';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const branch = BRANCHES.find((b) => b.id === form.branch);
    const phone = branch ? branch.phone.replace('+', '') : '21698900372';
    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setSuccess(true);
    launchConfetti();
    setForm({ ...RESERVATION_FORM_INITIAL });

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);

    setTimeout(() => setSuccess(false), 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="py-20 md:py-[100px] px-5 md:px-10 relative" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Confetti container */}
      <div ref={confettiRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10" />

      <div className="max-w-[500px] mx-auto relative z-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-[36px] md:text-[48px] font-bold text-brand-navy">
            Réserver une Table
          </h2>
          <div
            className="mx-auto mt-2 mb-4"
            style={{ width: '60px', height: '3px', backgroundColor: '#F5D300' }}
          />
          <p className="text-base text-brand-muted">Réservez en ligne, sans appel</p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid rgba(245,211,0,0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            {/* Branch */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                Choisissez votre branche *
              </label>
              <select
                value={form.branch}
                onChange={(e) => set('branch', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border font-sans text-sm text-brand-navy bg-white cursor-pointer transition-all duration-200 focus:outline-none"
                style={{
                  borderRadius: '8px',
                  border: errors.branch ? '1px solid #DC2626' : '1px solid #D1D5DB',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#F5D300';
                  e.target.style.outline = '2px solid rgba(245,211,0,0.3)';
                  e.target.style.outlineOffset = '0';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  if (!errors.branch) e.target.style.borderColor = '#D1D5DB';
                }}
              >
                <option value="">-- Sélectionnez --</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} – {b.phoneDisplay}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <p className="text-xs mt-1 font-medium" style={{ color: '#DC2626' }}>{errors.branch}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                📱 Votre numéro de téléphone *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="98 900 372"
                className="w-full px-4 py-3 rounded-lg border font-sans text-sm text-brand-navy placeholder:text-gray-400 transition-all duration-200 focus:outline-none"
                style={{
                  borderRadius: '8px',
                  border: errors.phone ? '1px solid #DC2626' : '1px solid #D1D5DB',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#F5D300';
                  e.target.style.outline = '2px solid rgba(245,211,0,0.3)';
                  e.target.style.outlineOffset = '0';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  if (!errors.phone) e.target.style.borderColor = '#D1D5DB';
                }}
              />
              {errors.phone && (
                <p className="text-xs mt-1 font-medium" style={{ color: '#DC2626' }}>{errors.phone}</p>
              )}
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                👥 Nombre de personnes *
              </label>
              <select
                value={form.guests}
                onChange={(e) => set('guests', parseInt(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border font-sans text-sm text-brand-navy bg-white cursor-pointer transition-all duration-200 focus:outline-none"
                style={{
                  borderRadius: '8px',
                  border: errors.guests ? '1px solid #DC2626' : '1px solid #D1D5DB',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#F5D300';
                  e.target.style.outline = '2px solid rgba(245,211,0,0.3)';
                  e.target.style.outlineOffset = '0';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  if (!errors.guests) e.target.style.borderColor = '#D1D5DB';
                }}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                ))}
              </select>
              {errors.guests && (
                <p className="text-xs mt-1 font-medium" style={{ color: '#DC2626' }}>{errors.guests}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                📅 Date souhaitée *
              </label>
              <input
                type="date"
                value={form.date}
                min={today}
                onChange={(e) => set('date', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border font-sans text-sm text-brand-navy cursor-pointer transition-all duration-200 focus:outline-none"
                style={{
                  borderRadius: '8px',
                  border: errors.date ? '1px solid #DC2626' : '1px solid #D1D5DB',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#F5D300';
                  e.target.style.outline = '2px solid rgba(245,211,0,0.3)';
                  e.target.style.outlineOffset = '0';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  if (!errors.date) e.target.style.borderColor = '#D1D5DB';
                }}
              />
              {errors.date && (
                <p className="text-xs mt-1 font-medium" style={{ color: '#DC2626' }}>{errors.date}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                🕐 Heure souhaitée *
              </label>
              <select
                value={form.time}
                onChange={(e) => set('time', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border font-sans text-sm text-brand-navy bg-white cursor-pointer transition-all duration-200 focus:outline-none"
                style={{
                  borderRadius: '8px',
                  border: errors.time ? '1px solid #DC2626' : '1px solid #D1D5DB',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#F5D300';
                  e.target.style.outline = '2px solid rgba(245,211,0,0.3)';
                  e.target.style.outlineOffset = '0';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  if (!errors.time) e.target.style.borderColor = '#D1D5DB';
                }}
              >
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {errors.time && (
                <p className="text-xs mt-1 font-medium" style={{ color: '#DC2626' }}>{errors.time}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-sans font-bold text-base uppercase tracking-wider cursor-pointer transition-all duration-300 mt-2"
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
              Réserver maintenant →
            </button>
          </form>
        </motion.div>

        {/* Success message */}
        {success && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4 text-sm text-brand-olive font-semibold"
          >
            Réservation envoyée ! Ouverture de WhatsApp...
          </motion.p>
        )}

        {/* Footer text */}
        <p className="text-center mt-4 text-sm text-brand-muted">
          ⚡ Sans engagement. Confirmation immédiate via WhatsApp.
        </p>
      </div>

      {/* Confetti keyframes injected once */}
      <style>{`
        @keyframes confetti-fall {
          0% { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
          100% { opacity: 0; transform: translateY(500px) rotate(720deg) scale(0.3); }
        }
      `}</style>
    </section>
  );
}
