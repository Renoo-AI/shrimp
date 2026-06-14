# Shrimp Time — Assets & Decisions Tracker

## ✅ Have
- [x] Logo: `public/logo.png` (118 KB)
- [x] Hero video: `public/1.mp4` (1.6 MB), `public/2.mp4` (5.3 MB), `public/3.mp4` (7 MB)
- [x] Menu photo: `public/crevettes-12.webp` (3.2 MB — needs compression)
- [x] Favicon PNG: `public/favicon.png`
- [x] Favicon SVG: `public/favicon.svg`
- [x] Hosting: Vercel + GitHub

## 🔴 Need

### Hero
- [ ] Better hero video — shorter, compressed (target <2 MB each), loop-friendly. Current: 3 long videos used randomly.
- [ ] Fallback hero image if video fails: `public/hero-bg-fallback.jpg`

### Menu Photos (17 items need images for thumbnails)
Place in `public/menu/`:
- [ ] `crevettes-6.webp` — Crevettes 6 Pièces
- [ ] `moules.webp` — Moules
- [ ] `crabe.webp` — Crabe
- [ ] `mix-2.webp` — Mix (2 Pers.)
- [ ] `langouste.webp` — Langouste
- [ ] `mix-4.webp` — Mix (4 Pers.)
- [ ] `frites.webp` — Frites
- [ ] `frites-cajun.webp` — Frites Cajun
- [ ] `poulet.webp` — Filet Poulet
- [ ] `fish-chips-kids.webp` — Fish & Chips Enfant
- [ ] `calamars.webp` — Calamars Frits
- [ ] `crevettes-frites.webp` — Crevettes Frites
- [ ] `fish-chips-adulte.webp` — Fish & Chips Adulte
- [ ] `mix-friture.webp` — Mix Friture
- [ ] `soupe.webp` — Soupe
- [ ] `citronnade.webp` — Jus de Citron
- [ ] `crevettes-12.webp` already exists — needs compression from 3.2 MB to ~80 KB

### SEO
- [ ] `public/og-image.jpg` — 1200×630px social preview
- [ ] Google Maps Place IDs per branch
- [ ] Opening hours confirmed: Mar–Dim 12:00–23:30?
- [ ] Domain name — what is it?

### Social Proof
- [ ] Real customer testimonial text
- [ ] Google review count confirmed: 394?

### Compression Needed
- [ ] Compress `crevettes-12.webp`: 3.2 MB → ~80 KB
- [ ] Compress `favicon.png`: 1.3 MB → ~5 KB (resize to 64×64)
- [ ] Compress hero videos to <2 MB each

## 📐 Page Structure (Matched to Spec)
| Section | Background | Status |
|---------|-----------|--------|
| Navbar | Fixed 70px, glass blur on scroll | ✅ |
| Hero | Navy + video bg + dark overlay | ✅ |
| Branches | #FFFFFF white | ✅ |
| Menu | #F8F6F2 light grey | ✅ |
| Réservation | #FFFFFF white | ✅ |
| Footer | #0A1F3F navy | ✅ |

## 🎨 Design Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Navy | #0A1F3F | Hero, nav, footer |
| Yellow | #F5D300 | Buttons, prices, accents |
| Olive | #8B9A3D | Tagline, small details |
| White | #FFFFFF | Branches, reservation bg |
| Light Grey | #F8F6F2 | Menu bg |
| Muted | #6B7280 | Descriptions |
| Error | #DC2626 | Validation |
| Headings | Playfair Display (400, 700) | All h1-h3 |
| Body | Inter (400, 500, 600) | All body text |
