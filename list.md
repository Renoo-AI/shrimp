# Shrimp Time — Project Asset & Decision List

> **Project**: Shrimp Time Tunisia — Single‑page restaurant website  
> **Stack**: React + Vite + Tailwind v4 (already deployed on Vercel)  
> **Core status**: Built. This document covers every missing piece to reach production $7K quality.  
> **Structure**: Each section below lists → ① Assets needed, ② Decisions required, ③ AI Prompts.

---

## 🟡 SECTION 0 — GLOBAL / CROSS-CUTTING

### ① Assets Needed
- [ ] **Domain name** — What is it? `shrimptime.tn`? `shrimp-time.tn`? (needed for: canonical URL, sitemap, OG tags, structured data, SSL, Google Business)
- [ ] **Favicon** (`public/favicon.png`) — browser tab + bookmarks icon

### ② Decisions
- [ ] **Google Analytics 4** — Want tracking? Give me Measurement ID `G-XXXXXXXXXX`
- [ ] **Meta Pixel** — Want retargeting for Instagram followers? Give me Pixel ID
- [ ] **Cookie consent banner** — Required if using GA. Add a minimal "Ce site utilise des cookies" bar? (yes/no)
- [ ] **Legal pages** — Do you have a privacy policy / mentions légales, or should I generate standard ones?
- [ ] **404 page** — Should I build a custom branded French 404 page? (yes/no)
- [ ] **Currency display** — Menu shows "DT". Confirmed correct (Dinar Tunisien)?
- [ ] **Phone number for both branches** — Same `98 900 372` for La Marsa AND L'Aouina? (currently coded this way)
- [ ] **Third branch?** — Old code had a Kobbet El Haoua location. Does it still exist?

### ③ AI Prompts
```
Favicon prompt: A single shrimp icon in lemon yellow (#F5D300), 
clean flat vector style, isolated on transparent background, 
square composition, bold and simple. 512x512px. --style minimal
```

---

## 🔵 SECTION 1 — HERO (Header)

> Currently: Logo image + "Vivez l'expérience" tagline + 2 buttons on navy background with Unsplash seafood overlay.

### ① Assets Needed
- [ ] **Hero background image** (`public/hero-bg.jpg`) — 1920×1080px, JPEG or WebP, ≤ 400 KB. Replaces the generic Unsplash fallback.

### ② Decisions
- [ ] Keep "Vivez l'expérience" tagline or change?
- [ ] Button text confirmed: "📖 Voir le Menu" + "📞 Réserver" — OK?

### ③ AI Prompts
```
Hero BG prompt (food focus):
A dark, moody overhead flat-lay of a premium seafood boil feast on a deep navy tabletop.
Scattered grilled jumbo shrimp with lemon wedges, cracked crab legs, fresh mussels,
golden corn on the cob, a bowl of saffron rice. Warm candlelight glow.
Shallow depth of field, editorial food photography, 35mm lens,
Michelin-restaurant aesthetic, deep navy shadows, subtle golden rim light.
No text, no logos, no people. --ar 16:9 --style raw

Hero BG prompt (location focus):
Aerial Mediterranean coastline at golden hour, La Marsa Tunisia.
Turquoise water, white sand, fishing boats in distance.
Warm amber light, cinematic color grade, navy shadow tones.
No text, no people. --ar 16:9 --style raw
```

---

## 🟠 SECTION 2 — NOTRE MENU (Menu)

> Real menu from `menu.md`. 4 categories, ~26 items.  
> Currently coded with all items, tabbed interface, fade animation. Images supported but commented out (optional).

### ① Assets Needed
Menu item photos — **800×600px, WebP, ≤ 100 KB each**. Place in `public/menu/`.

| File | Item | Category | Price |
|------|------|----------|-------|
| `crevettes-12.webp` | Crevettes 12 Pièces | Fruits de Mer | 49 DT |
| `crevettes-6.webp` | Crevettes 6 Pièces | Fruits de Mer | 29 DT |
| `moules.webp` | Moules | Fruits de Mer | 25 DT |
| `crabe.webp` | Crabe | Fruits de Mer | 25 DT |
| `mix-2.webp` | Mix Fruits de Mer (2 Pers.) | Fruits de Mer | 80 DT |
| `langouste.webp` | Langouste | Fruits de Mer | 120 DT |
| `mix-4.webp` | Mix Fruits de Mer (4 Pers.) | Fruits de Mer | 270 DT |
| `frites.webp` | Frites | Fritures | 5 DT |
| `frites-cajun.webp` | Frites Cajun | Fritures | 7 DT |
| `poulet.webp` | Filet de Poulet | Fritures | 15 DT |
| `fish-chips-kids.webp` | Fish & Chips Enfant | Fritures | 17 DT |
| `calamars.webp` | Calamars Frits | Fritures | 23 DT |
| `crevettes-frites.webp` | Crevettes Frites | Fritures | 23 DT |
| `fish-chips-adulte.webp` | Fish & Chips Adulte | Fritures | 28 DT |
| `mix-friture.webp` | Mix Friture Fruits de Mer | Fritures | 35 DT |
| `soupe.webp` | Soupe de Fruits de Mer | Accompagnements | 12 DT |
| `citronnade.webp` | Jus de Citron | Boissons | 3.5 DT |

> Side dishes (sauces, salad, rice) and basic drinks (water, soda) intentionally have no photos — they're small/low-price items.

### ② Decisions
- [ ] Are all 26 items correct? Any missing or to remove?
- [ ] Prices confirmed as DT (Dinar Tunisien)?
- [ ] The Arabic labels (مأكولات بحرية / أطباق مقلية etc.) — keep them displayed under category name?
- [ ] Sauce note at bottom of seafood section: "Sauces disponibles : Crème, Cajun, Citron & Ail." — correct?
- [ ] Should I add a "Menu PDF download" button linking to a downloadable PDF?

### ③ AI Prompts
```
Crevettes 12 Pièces:
Close-up of 12 large grilled jumbo shrimp arranged on a white ceramic plate,
side of saffron rice in a copper bowl, fresh green salad, lemon wedges.
Natural daylight, overhead shot, steam rising. --ar 4:3

Crevettes 6 Pièces:
Same as above, 6 shrimp, more intimate framing. --ar 4:3

Moules:
Steaming bowl of fresh black mussels in a rich broth, parsley garnish,
lemon half on the side, rustic dark table. --ar 4:3

Crabe:
Whole cooked crab on a wooden board, cracked claw revealing white meat,
lemon wedge, dipping sauce ramekin. --ar 4:3

Mix Fruits de Mer (2 Pers.):
Generous seafood platter for two: shrimp, crab legs, mussels, octopus, calamari,
served on butcher paper on a dark table, corn on the cob, lemon wedges. --ar 4:3

Langouste:
Split grilled spiny lobster on rectangular white plate, lemon butter drizzle,
saffron rice side, fresh herb garnish, dramatic dark background, golden rim light. --ar 4:3

Mix Fruits de Mer (4 Pers.):
Massive family-style seafood boil spread across a table covered in butcher paper,
1kg each of calamari, octopus, shrimp, crab, mussels, corn, potatoes,
shared dining vibe, warm lighting. --ar 4:3

Frites:
Crispy golden french fries in a cone or small basket, ketchup on the side,
casual plating, natural light. --ar 4:3

Frites Cajun:
Fries coated in reddish cajun seasoning, steam rising, spicy mayo dip,
dark slate background. --ar 4:3

Filet de Poulet:
Golden crispy chicken fillet, cut to show juicy interior, fries on the side,
simple plating on white plate. --ar 4:3

Fish & Chips Enfant:
Small portion of battered fish strips + crispy fries in a kid-friendly basket,
ketchup smiley face, bright cheerful presentation. --ar 4:3

Calamars Frits:
Golden crispy fried calamari rings piled on dark slate, tartare sauce ramekin,
lemon half, scattered parsley, rustic-elegant style. --ar 4:3

Crevettes Frites:
Crispy battered shrimp in a basket, dynamite sauce on the side,
lemon wedge, casual seafood-shack vibe. --ar 4:3

Fish & Chips Adulte:
Large battered fish fillet + chunky fries on wooden board, tartare sauce,
lemon wedge, mushy peas (optional), pub-style presentation. --ar 4:3

Mix Friture Fruits de Mer:
Mixed fried seafood basket: fish strips, calamari rings, shrimp,
tartare + dynamite sauce duo, lemon wedge. --ar 4:3

Soupe de Fruits de Mer:
Rustic ceramic bowl of rich seafood soup, mussels and shrimp visible,
fresh herbs, crusty bread on the side, warm cozy lighting. --ar 4:3

Citronnade:
Tall glass of fresh lemonade with ice, lemon slice on rim, condensation on glass,
bright sunny outdoor table, bokeh background. --ar 4:3
```

---

## ⚪ SECTION 3 — NOS BRANCHES (Branches)

> Currently: White bg, 2 cards (La Marsa, L'Aouina), 🦐 emoji, address, phone, "Appeler" button.

### ① Assets Needed
- [ ] **Interior photo — La Marsa** (`public/photos/marsa-interior.jpg`)
- [ ] **Interior photo — L'Aouina** (`public/photos/aouina-interior.jpg`)
- [ ] **Storefront — La Marsa** (with Zephyr visible) (`public/photos/marsa-storefront.jpg`)
- [ ] **Storefront — L'Aouina** (under Centre Médical Aïcha visible) (`public/photos/aouina-storefront.jpg`)

### ② Decisions
- [ ] **Google Maps embed or static image?** — I can embed an interactive map per branch (needs API key) or a static clickable image (free). Which?
- [ ] **Google Maps API key** — If embed, give me the key
- [ ] **Google Maps Place IDs** — Find at https://developers.google.com/maps/documentation/places/web-service/place-id for each branch
- [ ] **Coordinates correct?** — La Marsa: `36.8778, 10.3262` | L'Aouina: `36.8521, 10.2642`
- [ ] **Opening hours** — Exact days + times per branch (e.g., "Mardi–Dimanche 12:00–23:30, Fermé Lundi")
- [ ] **Both branches use same phone `98 900 372`?** — Confirm

### ③ AI Prompts (if no real photos)
```
La Marsa interior:
Warm, elegant seafood restaurant interior in La Marsa Tunisia.
Dark navy walls with gold accents, wooden tables with butcher paper,
soft amber pendant lighting, open kitchen visible, Mediterranean coastal decor,
empty restaurant (no people), editorial interior photography, wide angle. --ar 16:9

L'Aouina interior:
Modern seafood restaurant interior, navy and gold color scheme,
polished concrete floors, booth seating, warm ambient lighting,
contemporary Tunisian design elements, clean aesthetic, no people. --ar 16:9
```

---

## 🟢 SECTION 4 — RÉSERVATION (Reservation Form)

> Currently: White bg, form card, branch select, phone input (Tunisian validation), guests 1–20, date picker, time slots, WhatsApp message builder, confetti on success.

### ① Assets Needed
- [ ] **None** — this section is complete without images.

### ② Decisions
- [ ] **Time slots correct?** — `12:00` to `14:30` (lunch) + `19:00` to `22:30` (dinner) in 30-min steps
- [ ] **WhatsApp message format correct?** — Currently: `Bonjour Shrimp Time, Réservation pour {N} personnes le {date} à {heure} à la branche {branche} Tel: {téléphone}`
- [ ] **Phone validation** — Accepts Tunisian numbers in formats: `98 900 372`, `+21698900372`, `21698900372`, `098900372`. Good?
- [ ] **Guest count** — 1–20 range. Correct?
- [ ] **Should I add a name field?** — Currently only asks for phone. Many restaurants want a name.

---

## 🟣 SECTION 5 — FOOTER

> Currently: Navy bg, small logo, "Shrimp Time", branch names, phone, Instagram link, copyright.

### ① Assets Needed
- [ ] **None** — footer is text-only, complete.

### ② Decisions
- [ ] **Instagram URL confirmed** — `https://www.instagram.com/shrimp_.time/` — correct?
- [ ] **Facebook URL** — Want to add Facebook too? (`fb.com/61559768967974`)
- [ ] **Email** — `shrimptime270@gmail.com` — display in footer or no?
- [ ] **Copyright year** — Auto-updates (currently renders `© 2026`). Good.

---

## 🔴 SECTION 6 — SEO & STRUCTURED DATA

### ① Assets Needed
- [ ] **Open Graph image** (`public/og-image.jpg`) — 1200×630px, ≤ 200 KB. Shows on WhatsApp / Facebook / Twitter sharing.
- [ ] **robots.txt** — I'll generate it. Need to know domain first.
- [ ] **sitemap.xml** — I'll generate it. Need to know domain first.

### ② Decisions
- [ ] **Meta title** — "Shrimp Time | Fruits de Mer Frais – La Marsa & L'Aouina" — OK?
- [ ] **Meta description** — "Restaurant de fruits de mer à La Marsa et L'Aouina. Menu frais, réservation WhatsApp, ambiance premium. Note 4.4★ sur Google." — OK?
- [ ] **Google Maps star rating** — 4.4 ★ with 394 reviews? Confirm so I can add `aggregateRating` schema.
- [ ] **Price range** — What's the approximate range? "€€" (20–150 DT)?
- [ ] **Opening hours for schema** — Same as above. Give me per-branch day/times.

### ③ AI Prompts
```
OG image prompt:
Elegant branding card on deep navy (#0A1F3F) background.
Center: shrimp icon in lemon yellow (#F5D300).
Below: "SHRIMP TIME" in elegant white serif type.
Below that: "Fruits de Mer Frais • La Marsa & L'Aouina" in small olive green (#8B9A3D) text.
Thin gold border frame around edges. Premium, minimal, no clutter. 1200x630px. --ar 1.91:1
```

---

## 🟤 SECTION 7 — SOCIAL PROOF

### ① Assets Needed
- [ ] **5 best Google Reviews** — Screenshots or copy/paste (name + text + star rating). I'll hardcode them as testimonials.
- [ ] **Instagram embed** — Either a token for dynamic feed, OR 6 hand-picked photos I hardcode.

### ② Decisions
- [ ] **Add testimonial carousel?** — 5 curated reviews in a section between Branches and Menu
- [ ] **Instagram feed grid?** — 6 latest posts at bottom or near footer
- [ ] **"4.4 ★ sur Google" badge** — Link to Google Maps listing? Need the Maps URL.

### ③ AI Prompts
```
None. Use real screenshots or copy.
```

---

## ⚫ SECTION 8 — PERFORMANCE & TECH

### ① Assets Needed
- [ ] **None** — I handle all optimization in code.

### ② Decisions
- [ ] **Font subsetting** — Subset Playfair Display + Inter to Latin + Arabic only? Saves ~60% font weight.
- [ ] **Image format** — All photos will be converted to WebP. JPEG fallback? (modern browsers all support WebP)
- [ ] **Vercel analytics** — Enable Vercel Web Analytics? (free tier available)

### ③ AI Prompts
```
None.
```

---

## ✅ WHAT'S ALREADY DONE (No Action Needed)

| Feature | Status |
|---------|--------|
| Fixed glass-morphism navbar, 70px, 4 smooth-scroll links | ✅ |
| Hamburger fullscreen mobile menu | ✅ |
| Hero 100vh with logo + tagline + buttons | ✅ |
| Branches cards with tel: links | ✅ |
| Full 26-item real menu, 4 tabs, fade animation | ✅ |
| Reservation form with WhatsApp + confetti | ✅ |
| Tunisian phone validation (multiple formats) | ✅ |
| Footer with Instagram link | ✅ |
| All spec colors + Playfair Display / Inter fonts | ✅ |
| Responsive, mobile-first, all breakpoints | ✅ |
| TypeScript strict, zero type errors | ✅ |
| Production build (Vite) — 109 KB gzipped | ✅ |
| Logo.png downloaded and served locally | ✅ |
