// Shrimp Time - Application Core (Vanilla JS)

// 1. Core Data Model
const RESTAURANT_DATA = {
  name: 'Shrimp Time',
  email: 'shrimptime270@gmail.com',
  phone: '+21698900372',
  phoneDisplay: '98 900 372',
  whatsappUrl: 'https://wa.me/21698900372',
  instagram: 'https://www.instagram.com/shrimp_.time/',
  facebook: 'https://www.facebook.com/profile.php?id=61559768967974',
  website: 'https://shrimptime.vercel.app/',
  tagline: "Restaurant de fruits de mer à La Marsa et L'Aouina. Menu frais, réservation WhatsApp, ambiance premium. Note 4.4★ sur Google.",
  hours: 'Mar–Dim · 12:00 – 23:30',
  branches: [
    {
      id: 'marsa',
      name: 'La Marsa',
      nameAr: 'المرسى',
      address: 'La Marsa Plage, face à Zephyr',
      addressAr: 'المرسى الشاطئ، قبالة الزفير',
      phone: '+21698900372',
      phoneDisplay: '98 900 372'
    },
    {
      id: 'aouina',
      name: "L'Aouina",
      nameAr: 'العوينة',
      address: 'Sous le Centre Médical Aïcha, Cité El Wahat',
      addressAr: 'تحت المركز الطبي عائشة، واحة سكرة',
      phone: '+21698900372',
      phoneDisplay: '98 900 372'
    }
  ],
  categories: [
    { id: 'seafood', label: 'Fruits de Mer', labelAr: 'مأكولات بحرية' },
    { id: 'crispy', label: 'Fritures', labelAr: 'أطباق مقلية' },
    { id: 'sides', label: 'Accompagnements', labelAr: 'أطباق جانبية' },
    { id: 'drinks', label: 'Boissons', labelAr: 'مشروبات' }
  ],
  menuItems: [
    // --- Fruits de Mer (Seafood Boil) ---
    {
      id: 'm1',
      category: 'seafood',
      name: 'Crevettes 12 Pièces',
      nameAr: '12 جمبري + أرز + سلطة',
      price: 49,
      description: '12 crevettes + riz + salade',
      emoji: '🦐',
      image: '/assets/images/crevettes-12.webp'
    },
    {
      id: 'm2',
      category: 'seafood',
      name: 'Crevettes 6 Pièces',
      nameAr: '6 جمبري + أرز + سلطة',
      price: 29,
      description: '6 crevettes + riz + salade',
      emoji: '🦐',
      image: '/assets/images/menu/crevettes-6.webp'
    },
    {
      id: 'm3',
      category: 'seafood',
      name: 'Moules',
      nameAr: 'بلح البحر (Mussels)',
      price: 25,
      description: 'Moules fraîches, portion généreuse',
      emoji: '🦪',
      image: '/assets/images/menu/moules.webp'
    },
    {
      id: 'm4',
      category: 'seafood',
      name: 'Crabe',
      nameAr: 'كراب (Crab)',
      price: 25,
      description: 'Crabe entier préparé',
      emoji: '🦀',
      image: '/assets/images/menu/crabe.webp'
    },
    {
      id: 'm5',
      category: 'seafood',
      name: 'Mix Fruits de Mer (2 Pers.)',
      nameAr: 'مزيج مأكولات بحرية (لشخصين)',
      price: 80,
      description: '8 crevettes, 2 crabes, 8 moules, 250g poulpe, 250g calamar',
      emoji: '🦞',
      image: '/assets/images/menu/mix-2.webp'
    },
    {
      id: 'm6',
      category: 'seafood',
      name: 'Langouste',
      nameAr: 'لانجوست (Spiny Lobster)',
      price: 120,
      description: 'Langouste grillée + riz + salade',
      emoji: '🦞',
      image: '/assets/images/menu/langouste.webp'
    },
    {
      id: 'm7',
      category: 'seafood',
      name: 'Mix Fruits de Mer (4 Pers.)',
      nameAr: 'مزيج مأكولات بحرية (لأربعة أشخاص)',
      price: 270,
      description: '1 kg de chaque : calamar, poulpe, crevettes, crabe, moules',
      emoji: '🦐',
      image: '/assets/images/menu/mix-4.webp'
    },
    // --- Fritures (Crispy) ---
    {
      id: 'm8',
      category: 'crispy',
      name: 'Frites',
      nameAr: 'بطاطا مقلية',
      price: 5,
      description: 'Frites dorées maison',
      emoji: '🍟',
      image: '/assets/images/menu/frites.webp'
    },
    {
      id: 'm9',
      category: 'crispy',
      name: 'Frites Cajun',
      nameAr: 'بطاطا كاجون',
      price: 7,
      description: 'Frites assaisonnées au cajun épicé',
      emoji: '🍟',
      image: '/assets/images/menu/frites-cajun.webp'
    },
    {
      id: 'm10',
      category: 'crispy',
      name: 'Filet de Poulet',
      nameAr: 'فيليه دجاج',
      price: 15,
      description: 'Filet de poulet croustillant',
      emoji: '🍗',
      image: '/assets/images/menu/poulet.webp'
    },
    {
      id: 'm11',
      category: 'crispy',
      name: 'Fish & Chips Enfant',
      nameAr: 'فيش أند تشيبس (للأطفال)',
      price: 17,
      description: 'Portion enfant — poisson pané + frites',
      emoji: '🐟',
      image: '/assets/images/menu/fish-chips-kids.webp'
    },
    {
      id: 'm12',
      category: 'crispy',
      name: 'Calamars Frits',
      nameAr: 'كلامار',
      price: 23,
      description: 'Anneaux de calamar croustillants + tartare',
      emoji: '🦑',
      image: '/assets/images/menu/calamars.webp'
    },
    {
      id: 'm13',
      category: 'crispy',
      name: 'Crevettes Frites',
      nameAr: 'جمبري',
      price: 23,
      description: 'Crevettes croustillantes panées',
      emoji: '🦐',
      image: '/assets/images/menu/crevettes-frites.webp'
    },
    {
      id: 'm14',
      category: 'crispy',
      name: 'Fish & Chips Adulte',
      nameAr: 'فيش أند تشيبس (للبالغين)',
      price: 28,
      description: 'Poisson pané, frites, sauce tartare',
      emoji: '🐟',
      image: '/assets/images/menu/fish-chips-adulte.webp'
    },
    {
      id: 'm15',
      category: 'crispy',
      name: 'Mix Friture Fruits de Mer',
      nameAr: 'مزيج مأكولات بحرية مقلية',
      price: 35,
      description: 'Poisson, calamar, crevettes — trio croustillant',
      emoji: '🦑',
      image: '/assets/images/menu/mix-friture.webp'
    },
    // --- Accompagnements (Sides) ---
    {
      id: 'm16',
      category: 'sides',
      name: 'Sauce Tartare',
      nameAr: 'صوص التارتار',
      price: 2,
      description: 'Sauce tartare maison',
      emoji: '🥄'
    },
    {
      id: 'm17',
      category: 'sides',
      name: 'Sauce Dynamite',
      nameAr: 'صوص الديناميت',
      price: 2,
      description: 'Sauce épicée signature',
      emoji: '🥄'
    },
    {
      id: 'm18',
      category: 'sides',
      name: 'Sauce Cajun',
      nameAr: 'صوص الكاجون',
      price: 3,
      description: 'Sauce relevée au cajun',
      emoji: '🥄'
    },
    {
      id: 'm19',
      category: 'sides',
      name: 'Sauce Citron & Ail',
      nameAr: 'صوص الليمون والثوم',
      price: 3,
      description: 'Sauce fraîche citronnée à l\'ail',
      emoji: '🥄'
    },
    {
      id: 'm20',
      category: 'sides',
      name: 'Salade',
      nameAr: 'سلطة',
      price: 3.5,
      description: 'Salade verte fraîche',
      emoji: '🥗'
    },
    {
      id: 'm21',
      category: 'sides',
      name: 'Riz safrané',
      nameAr: 'أرز',
      price: 3.5,
      description: 'Riz blanc parfumé',
      emoji: '🍚'
    },
    {
      id: 'm22',
      category: 'sides',
      name: 'Soupe de fruits de mer',
      nameAr: 'شوربة',
      price: 12,
      description: 'Soupe de fruits de mer maison',
      emoji: '🍜',
      image: '/assets/images/menu/soupe.webp'
    },
    // --- Boissons (Drinks) ---
    {
      id: 'm23',
      category: 'drinks',
      name: 'Eau Minérale',
      nameAr: 'ماء معدني',
      price: 1,
      description: 'Bouteille d\'eau minérale 1L',
      emoji: '💧'
    },
    {
      id: 'm24',
      category: 'drinks',
      name: 'Boissons Gazeuses',
      nameAr: 'مشروبات غازية',
      price: 3,
      description: 'Coca-Cola, Fanta, Sprite',
      emoji: '🥤'
    },
    {
      id: 'm25',
      category: 'drinks',
      name: 'Jus de Citron',
      nameAr: 'عصير ليمون',
      price: 3.5,
      description: 'Citronnade fraîche maison',
      emoji: '🍋',
      image: '/assets/images/menu/citronnade.webp'
    }
  ],
  timeSlots: [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ]
};

// 2. Local Storage Drafting Utilities
const DRAFT_KEY = 'shrimptime_reservation_draft';

function saveDraftToStorage(data) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Could not save draft to localStorage', e);
  }
}

function loadDraftFromStorage() {
  try {
    const data = localStorage.getItem(DRAFT_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Could not load draft from localStorage', e);
    return null;
  }
}

function clearDraftFromStorage() {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch (e) {
    console.error('Could not clear draft from localStorage', e);
  }
}

// 3. Validation and Formatting Helper Functions
function normalizePhone(phone) {
  // Strip whitespaces, hyphens, brackets, non-digits (keep + for country code)
  return phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
}

function validateTunisianPhone(phone) {
  const normalized = normalizePhone(phone);
  // Matches:
  // - +216 followed by 8 digits starting with 2, 3, 4, 5, 7, 9
  // - 216 followed by 8 digits
  // - 0 followed by 8 digits
  // - 8 digits directly
  const phonePattern = /^(?:\+216|216|0)?([234579]\d{7})$/;
  return phonePattern.test(normalized);
}

function formatRawPhoneToTunisian(phone) {
  const normalized = normalizePhone(phone);
  const match = normalized.match(/^(?:\+216|216|0)?([234579]\d{7})$/);
  if (match) {
    const mainNum = match[1]; // e.g. 98900372
    return `${mainNum.slice(0, 2)} ${mainNum.slice(2, 5)} ${mainNum.slice(5)}`;
  }
  return phone;
}

function formatDateToFrench(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
  }
  return dateStr;
}

// 4. UI Rendering Functions

// Renders the categories tabs (pills)
function renderCategoryTabs(activeId) {
  const container = document.getElementById('menu-tabs');
  if (!container) return;

  container.innerHTML = RESTAURANT_DATA.categories.map(category => {
    const isActive = category.id === activeId ? 'active' : '';
    return `
      <button type="button" class="menu-tab-btn ${isActive}" data-category="${category.id}">
        <span class="tab-label-fr">${category.label}</span>
        <span class="tab-label-ar">${category.labelAr}</span>
      </button>
    `;
  }).join('');

  // Add click listeners
  container.querySelectorAll('.menu-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-category');
      renderCategoryTabs(catId);
      renderMenuItems(catId);
    });
  });
}

// Renders the menu items grid
function renderMenuItems(categoryId) {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const items = RESTAURANT_DATA.menuItems.filter(item => item.category === categoryId);

  grid.innerHTML = items.map(item => {
    const hasImage = !!item.image;
    // We add onerror handler to hide image if it fails loading, fallback gracefully
    const imgHtml = hasImage 
      ? `<div class="menu-card-img-wrap">
           <img src="${item.image}" alt="Plat ${item.name}" loading="lazy" class="menu-card-img" onerror="this.parentElement.style.display='none'">
         </div>`
      : '';

    return `
      <article class="menu-card ${hasImage ? 'has-image' : 'no-image'}">
        ${imgHtml}
        <div class="menu-card-content">
          <div class="menu-card-header">
            <h3 class="menu-card-title">
              <span class="menu-card-emoji">${item.emoji}</span>
              <span class="menu-card-name-fr">${item.name}</span>
              <span class="menu-card-name-ar">${item.nameAr}</span>
            </h3>
            <span class="menu-card-price">${item.price} <span class="price-currency">DT</span></span>
          </div>
          <p class="menu-card-desc">${item.description}</p>
        </div>
      </article>
    `;
  }).join('');
}

// Renders branch cards (on homepage)
function renderBranchCards() {
  const container = document.getElementById('branch-grid');
  if (!container) return;

  container.innerHTML = RESTAURANT_DATA.branches.map(branch => {
    return `
      <article class="branch-card">
        <div class="branch-card-header">
          <div class="branch-card-icon">⚓</div>
          <div class="branch-card-meta">
            <h3 class="branch-card-title">
              <span class="branch-name-fr">${branch.name}</span>
              <span class="branch-name-ar">${branch.nameAr}</span>
            </h3>
            <p class="branch-card-address">
              <span class="address-fr">${branch.address}</span>
              <span class="address-ar">${branch.addressAr}</span>
            </p>
          </div>
        </div>
        <div class="branch-card-actions">
          <a href="tel:${branch.phone}" class="branch-action-btn phone-btn" aria-label="Appeler la branche de ${branch.name}">
            <span class="btn-icon">📞</span> Appeler (${branch.phoneDisplay})
          </a>
          <a href="https://wa.me/${branch.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Bonjour Shrimp Time, je souhaite réserver à la branche ' + branch.name)}" 
             target="_blank" rel="noopener noreferrer" class="branch-action-btn wa-btn" aria-label="Réserver sur WhatsApp pour la branche de ${branch.name}">
            <span class="btn-icon">💬</span> WhatsApp
          </a>
        </div>
      </article>
    `;
  }).join('');
}

// Populate time slot dropdown in reservation form
function populateTimeSlots() {
  const select = document.getElementById('time');
  if (!select) return;

  // Preserve the currently selected value if any
  const currentVal = select.value;

  select.innerHTML = RESTAURANT_DATA.timeSlots.map(time => {
    return `<option value="${time}">${time}</option>`;
  }).join('');

  if (RESTAURANT_DATA.timeSlots.includes(currentVal)) {
    select.value = currentVal;
  } else {
    select.value = '20:00'; // Default popular dinner slot
  }
}

// Set inline validation error
function setFieldError(fieldId, errorMsg) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const parent = field.closest('.form-group');
  if (!parent) return;

  let errorContainer = parent.querySelector('.field-error-msg');
  
  if (errorMsg) {
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('input-invalid');
    if (!errorContainer) {
      errorContainer = document.createElement('span');
      errorContainer.className = 'field-error-msg';
      errorContainer.id = `${fieldId}-error`;
      parent.appendChild(errorContainer);
    }
    errorContainer.textContent = errorMsg;
    field.setAttribute('aria-describedby', errorContainer.id);
  } else {
    field.setAttribute('aria-invalid', 'false');
    field.classList.remove('input-invalid');
    if (errorContainer) {
      errorContainer.remove();
    }
    field.removeAttribute('aria-describedby');
  }
}

// 5. Reservation Form Flow Handler
function handleReservationSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const feedback = document.getElementById('reservation-feedback');

  const branchId = form.branch.value;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const guests = parseInt(form.guests.value, 10);
  const date = form.date.value;
  const time = form.time.value;
  const requests = form.requests.value.trim();

  // Reset errors
  setFieldError('branch', '');
  setFieldError('name', '');
  setFieldError('phone', '');
  setFieldError('guests', '');
  setFieldError('date', '');
  setFieldError('time', '');

  let hasErrors = false;

  // Validation
  const branchData = RESTAURANT_DATA.branches.find(b => b.id === branchId);
  if (!branchId || !branchData) {
    setFieldError('branch', 'Veuillez sélectionner une succursale.');
    hasErrors = true;
  }

  if (!name) {
    setFieldError('name', 'Veuillez saisir votre nom.');
    hasErrors = true;
  }

  if (!phone) {
    setFieldError('phone', 'Veuillez saisir votre numéro de téléphone.');
    hasErrors = true;
  } else if (!validateTunisianPhone(phone)) {
    setFieldError('phone', 'Veuillez saisir un numéro de téléphone tunisien valide (8 chiffres).');
    hasErrors = true;
  }

  if (isNaN(guests) || guests < 1 || guests > 20) {
    setFieldError('guests', 'Le nombre d\'invités doit être compris entre 1 et 20.');
    hasErrors = true;
  }

  if (!date) {
    setFieldError('date', 'Veuillez choisir une date de réservation.');
    hasErrors = true;
  } else {
    // Check if date is in the past in local time
    const selectedDate = new Date(date + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setFieldError('date', 'Veuillez choisir une date aujourd\'hui ou dans le futur.');
      hasErrors = true;
    }
  }

  if (!time || !RESTAURANT_DATA.timeSlots.includes(time)) {
    setFieldError('time', 'Veuillez sélectionner une heure de réservation valide.');
    hasErrors = true;
  }

  if (hasErrors) {
    if (feedback) {
      feedback.className = 'form-feedback-banner error';
      feedback.innerHTML = '⚠️ Veuillez corriger les erreurs dans le formulaire ci-dessus.';
      feedback.style.display = 'block';
    }
    return;
  }

  // Success: Disable button & show spinner/text
  submitBtn.disabled = true;
  submitBtn.classList.add('submitting');
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Redirection... 🚀';

  if (feedback) {
    feedback.className = 'form-feedback-banner success';
    feedback.innerHTML = '✅ Réservation validée ! Redirection vers WhatsApp en cours...';
    feedback.style.display = 'block';
  }

  // Format display phone
  const formattedPhone = formatRawPhoneToTunisian(phone);
  const frenchDate = formatDateToFrench(date);

  // Build WhatsApp message text:
  // "Bonjour Shrimp Time, Réservation pour {N} personnes le {date} à {heure} à la branche {branche} Tel: {téléphone}"
  let message = `Bonjour Shrimp Time, Réservation pour ${guests} personnes le ${frenchDate} à ${time} à la branche ${branchData.name} Tel: ${formattedPhone}`;
  if (name) {
    message += ` Nom: ${name}`;
  }
  if (requests) {
    message += ` Demandes: ${requests}`;
  }

  const encodedMessage = encodeURIComponent(message);
  const finalWhatsAppUrl = `${RESTAURANT_DATA.whatsappUrl}?text=${encodedMessage}`;

  // Clear drafts
  clearDraftFromStorage();

  // Redirect after a short delay so the user sees the confirmation banner
  setTimeout(() => {
    window.open(finalWhatsAppUrl, '_blank', 'noopener,noreferrer');
    
    // Restore button state
    submitBtn.disabled = false;
    submitBtn.classList.remove('submitting');
    submitBtn.innerHTML = originalBtnText;
    
    // Reset form except defaults
    form.reset();
    populateTimeSlots();
  }, 1000);
}

// Sync form changes to localStorage
function setupFormDraftSync(form) {
  if (!form) return;

  // Load existing draft if any
  const draft = loadDraftFromStorage();
  if (draft) {
    if (draft.branch && form.branch) form.branch.value = draft.branch;
    if (draft.name && form.name) form.name.value = draft.name;
    if (draft.phone && form.phone) form.phone.value = draft.phone;
    if (draft.guests && form.guests) form.guests.value = draft.guests;
    if (draft.requests && form.requests) form.requests.value = draft.requests;
    // We intentionally don't restore past dates
    if (draft.date && form.date) {
      const draftDate = new Date(draft.date + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (draftDate >= today) {
        form.date.value = draft.date;
      }
    }
    if (draft.time && form.time) form.time.value = draft.time;
  }

  // Listen to inputs to save drafts
  const saveDraft = () => {
    const draftData = {
      branch: form.branch ? form.branch.value : '',
      name: form.name ? form.name.value : '',
      phone: form.phone ? form.phone.value : '',
      guests: form.guests ? form.guests.value : '',
      date: form.date ? form.date.value : '',
      time: form.time ? form.time.value : '',
      requests: form.requests ? form.requests.value : ''
    };
    saveDraftToStorage(draftData);
  };

  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', saveDraft);
    input.addEventListener('change', saveDraft);
  });
}

// 6. Application Initializer
function initializeApp() {
  // A. Render Menu
  const defaultCategory = RESTAURANT_DATA.categories[0].id;
  renderCategoryTabs(defaultCategory);
  renderMenuItems(defaultCategory);

  // B. Render Branches (Homepage only)
  renderBranchCards();

  // C. Set up Reservation Form (Homepage only)
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    populateTimeSlots();
    setupFormDraftSync(reservationForm);
    reservationForm.addEventListener('submit', handleReservationSubmit);

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
      const todayStr = new Date().toISOString().split('T')[0];
      dateInput.min = todayStr;
    }
  }

  // D. Dynamic copyright year
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // E. Nav Link scroll adjustments / Active highlighting
  setupStickyNavbar();

  // F. Service Worker Registration
  registerServiceWorker();
}

// Setup sticky navbar color change on scroll
function setupStickyNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check immediately in case page was reloaded scrolled down
}

// Register service worker for caching
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          console.log('ServiceWorker successfully registered with scope: ', reg.scope);
        })
        .catch(err => {
          console.warn('ServiceWorker registration failed: ', err);
        });
    });
  }
}

// Start application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
