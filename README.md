# Shrimp Time Website Rebuild

A rebuilt, highly performant, accessible, and premium seafood restaurant website for **Shrimp Time** (La Marsa & L'Aouina), Tunisa. 

This project uses a clean and minimal **vanilla stack** (pure HTML, CSS, and JavaScript) to prioritize page speed, search engine optimization (SEO), and mobile accessibility.

## Tech Stack
- **Structure**: Vanilla HTML5 (semantic elements, schema.json JSON-LD markup)
- **Styling**: Vanilla CSS3 (custom HSL design tokens, responsive CSS grids, CSS variables, Google Fonts)
- **Logic**: Vanilla ES6 JavaScript (`app.js`)
- **PWA Features**: Service Worker (`sw.js`) and PWA Web Manifest (`manifest.json`)
- **SEO & Indexing**: `robots.txt` and `sitemap.xml`

## Directory Structure
```text
├── index.html                  (Homepage)
├── styles.css                  (Global & Homepage CSS)
├── app.js                      (Shared Javascript logic, menu rendering & WhatsApp form flow)
├── manifest.json               (PWA Manifest)
├── robots.txt                  (SEO instructions)
├── sitemap.xml                 (SEO Sitemap)
├── sw.js                       (Service Worker for offline caching)
├── menu/
│   ├── index.html              (Detailed menu page)
│   └── menu.css                (Menu-page-specific CSS overrides)
└── assets/
    ├── images/
    │   ├── logo.png
    │   ├── hero-bg.jpg
    │   ├── crevettes-12.webp   (Compressed menu dish thumbnail)
    │   └── og-image.jpg
    ├── icons/
    │   ├── favicon.png
    │   └── favicon.svg
    └── videos/
        ├── 1.mp4               (Loop video assets)
        ├── 2.mp4
        └── 3.mp4
```

## Features
1. **Dynamic Category Filtering**: Shared `app.js` renders menu categories and items dynamically on both the homepage and menu page.
2. **Tunisian Phone Normalization & Validation**: Form validation recognizes and formats all Tunisian phone patterns (`98 900 372`, `+21698900372`, `21698900372`, `098900372`).
3. **Structured WhatsApp Booking Flow**: Form values are validated client-side and compiled into a structured message redirecting directly to the business:
   `Bonjour Shrimp Time, Réservation pour {guests} personnes le {date} à {time} à la branche {branch} Tel: {phone} Nom: {name} Demandes: {requests}`
4. **Draft State Persistence**: Input fields are backed up in `localStorage` in case the page is closed/reloaded, clearing only upon successful submission.
5. **Accessible Design**: Complies with semantic markup patterns, using proper labels, `aria` validation feedback, skip links, and tab indexes.

## Running Locally
Since this is a static site, you can run it directly by opening `index.html` in any browser, or serve it using any lightweight static server:

```bash
# Example using live-server (npm)
npx live-server

# Example using python
python -m http.server 8000
```
