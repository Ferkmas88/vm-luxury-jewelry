/* =============================================
   V&M LUXURY JEWELRY — SCRIPT.JS
   Cart · Filter · Modal · Search · Animations
   ============================================= */

'use strict';

// ── Image path helper (uses generated AI images for categories) ──────────────
const CAT_IMG = {
  bracelets: 'C:\\Users\\ferkm\\.gemini\\antigravity\\brain\\a66f005a-e1f2-43c1-a925-101a7be03917\\category_bracelets_1772720567454.png',
  earrings:  'C:\\Users\\ferkm\\.gemini\\antigravity\\brain\\a66f005a-e1f2-43c1-a925-101a7be03917\\category_earrings_1772720586909.png',
  necklaces: 'C:\\Users\\ferkm\\.gemini\\antigravity\\brain\\a66f005a-e1f2-43c1-a925-101a7be03917\\category_necklaces_1772720872621.png',
  pendants:  'C:\\Users\\ferkm\\.gemini\\antigravity\\brain\\a66f005a-e1f2-43c1-a925-101a7be03917\\category_pendants_1772720901641.png',
  rings:     'C:\\Users\\ferkm\\.gemini\\antigravity\\brain\\a66f005a-e1f2-43c1-a925-101a7be03917\\category_rings_1772720921012.png',
  kids:      null  // placeholder gradient used in CSS
};

// ── PRODUCT CATALOG ──────────────────────────────────────────────────────────
const products = [
  // ── BRACELETS ──
  {
    id: 1,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    subcategory: "bracelets-women",
    price: 1250,
    material: "14K White Gold · Round Diamonds",
    description: "Stunning tennis bracelet handcrafted in 14K white gold, featuring a continuous line of brilliant-cut diamonds totaling approximately 3.00 ctw. A timeless statement piece.",
    badge: "popular",
    img: CAT_IMG.bracelets,
    inStock: true
  },
  {
    id: 2,
    name: "Cuban Link Gold Bracelet",
    category: "bracelets",
    subcategory: "bracelets-men",
    price: 870,
    material: "14K Yellow Gold",
    description: "Classic Cuban-link bracelet in solid 14K yellow gold, 8mm width. Perfect for the modern man who appreciates bold, authentic gold jewelry.",
    badge: "new",
    img: CAT_IMG.bracelets,
    inStock: true
  },
  {
    id: 3,
    name: "Gold Bangle Set",
    category: "bracelets",
    subcategory: "bracelets-women",
    price: 480,
    material: "10K Yellow Gold",
    description: "Elegant set of three stackable bangles in polished 10K yellow gold. Lightweight and effortlessly chic, designed to be worn alone or stacked.",
    badge: null,
    img: CAT_IMG.bracelets,
    inStock: true
  },
  {
    id: 4,
    name: "Kids Gold Bracelet",
    category: "bracelets",
    subcategory: "bracelets-kids",
    price: 195,
    material: "10K Yellow Gold",
    description: "Delicate and durable gold bracelet designed for children, featuring an adjustable lobster clasp for a perfect fit as they grow.",
    badge: "new",
    img: CAT_IMG.bracelets,
    inStock: true
  },

  // ── EARRINGS ──
  {
    id: 5,
    name: "Diamond Stud Earrings",
    category: "earrings",
    subcategory: "earrings-diamond",
    price: 690,
    material: "14K White Gold · 1.00 ctw Diamonds",
    description: "Brilliant-cut diamond stud earrings set in 14K white gold four-prong settings. A wardrobe essential that elevates every look with timeless radiance.",
    badge: "popular",
    img: CAT_IMG.earrings,
    inStock: true
  },
  {
    id: 6,
    name: "Gold Hoop Earrings",
    category: "earrings",
    subcategory: "earrings-hoop",
    price: 360,
    material: "14K Yellow Gold",
    description: "Classic Italian-style hoop earrings in polished 14K yellow gold, 40mm diameter. Lightweight and comfortable for all-day wear.",
    badge: null,
    img: CAT_IMG.earrings,
    inStock: true
  },
  {
    id: 7,
    name: "Drop Dangle Earrings",
    category: "earrings",
    subcategory: "earrings-drop",
    price: 520,
    material: "14K Gold · Cubic Zirconia",
    description: "Stunning drop earrings featuring cascading CZ stones in a graceful waterfall design. Perfect for special occasions and formal events.",
    badge: "new",
    img: CAT_IMG.earrings,
    inStock: true
  },
  {
    id: 8,
    name: "Baby Gold Studs",
    category: "earrings",
    subcategory: "earrings-baby",
    price: 145,
    material: "14K Yellow Gold",
    description: "Tiny and precious gold ball stud earrings, ideal for baby's first piercing. Hypoallergenic and safe with secure screw-back closures.",
    badge: null,
    img: CAT_IMG.earrings,
    inStock: true
  },
  {
    id: 9,
    name: "Fashion Fringe Earrings",
    category: "earrings",
    subcategory: "earrings-fashion",
    price: 280,
    material: "Gold-Plated · 14K Base",
    description: "Bold and fashionable fringe earrings with a contemporary design. Pairs beautifully with casual or evening outfits.",
    badge: "limited",
    img: CAT_IMG.earrings,
    inStock: true
  },

  // ── NECKLACES ──
  {
    id: 10,
    name: "Cuban Link Chain Necklace",
    category: "necklaces",
    subcategory: "necklaces-cuban",
    price: 1450,
    material: "14K Yellow Gold · 10mm",
    description: "Iconic Cuban-link chain necklace in solid 14K yellow gold, 24 inches, 10mm width. A symbol of luxury and an enduring expression of style.",
    badge: "popular",
    img: CAT_IMG.necklaces,
    inStock: true
  },
  {
    id: 11,
    name: "Diamond Solitaire Necklace",
    category: "necklaces",
    subcategory: "necklaces-diamond",
    price: 890,
    material: "14K White Gold · 0.50ct Diamond",
    description: "A brilliant 0.50 carat round diamond suspended on a delicate 18\" 14K white gold chain. A gift that will be treasured forever.",
    badge: "new",
    img: CAT_IMG.necklaces,
    inStock: true
  },
  {
    id: 12,
    name: "White Gold Chain",
    category: "necklaces",
    subcategory: "necklaces-white",
    price: 420,
    material: "14K White Gold · Singapore Link",
    description: "Elegant Singapore-link chain in lustrous 14K white gold. A versatile staple that works beautifully alone or layered with pendants.",
    badge: null,
    img: CAT_IMG.necklaces,
    inStock: true
  },
  {
    id: 13,
    name: "Yellow Gold Figaro Necklace",
    category: "necklaces",
    subcategory: "necklaces-yellow",
    price: 560,
    material: "14K Yellow Gold · Figaro",
    description: "Classic Figaro-link chain in 14K yellow gold, 20 inches. A beloved Italian design that complements any pendant or wears beautifully alone.",
    badge: null,
    img: CAT_IMG.necklaces,
    inStock: true
  },
  {
    id: 14,
    name: "Fashion Layered Necklace Set",
    category: "necklaces",
    subcategory: "necklaces-fashion",
    price: 320,
    material: "Gold-Plated · Multi-layer",
    description: "Pre-layered necklace set featuring three gold chains of varying lengths with dainty star and moon charms. On-trend and effortlessly stylish.",
    badge: "limited",
    img: CAT_IMG.necklaces,
    inStock: true
  },

  // ── PENDANTS ──
  {
    id: 15,
    name: "Diamond Cross Pendant",
    category: "pendants",
    subcategory: "pendants-diamond",
    price: 780,
    material: "14K White Gold · Diamond Pavé",
    description: "Beautifully crafted cross pendant adorned with pavé-set diamonds in 14K white gold. A meaningful symbol of faith and elegance.",
    badge: "popular",
    img: CAT_IMG.pendants,
    inStock: true
  },
  {
    id: 16,
    name: "Gold Heart Pendant",
    category: "pendants",
    subcategory: "pendants-women",
    price: 395,
    material: "14K Yellow Gold",
    description: "Polished heart-shaped pendant in 14K yellow gold, a timeless expression of love. Includes an 18\" chain. Perfect for gifting.",
    badge: "new",
    img: CAT_IMG.pendants,
    inStock: true
  },
  {
    id: 17,
    name: "Men's Lion Head Pendant",
    category: "pendants",
    subcategory: "pendants-men",
    price: 650,
    material: "14K Gold · Hand-Engraved",
    description: "Bold and intricate lion head pendant in 14K gold with hand-engraved detailing. A powerful statement for the discerning gentleman.",
    badge: null,
    img: CAT_IMG.pendants,
    inStock: true
  },
  {
    id: 18,
    name: "Kids Angel Charm Pendant",
    category: "pendants",
    subcategory: "pendants-kids",
    price: 175,
    material: "10K Yellow Gold",
    description: "Adorable guardian angel charm pendant in 10K yellow gold. A precious gift for a child's special occasion — First Communion, Baptism, or Birthday.",
    badge: null,
    img: CAT_IMG.pendants,
    inStock: true
  },

  // ── RINGS ──
  {
    id: 19,
    name: "Diamond Engagement Ring",
    category: "rings",
    subcategory: "rings-engagement",
    price: 2850,
    material: "18K White Gold · 1.00ct Diamond",
    description: "A breathtaking 1.00 carat round brilliant diamond set in a classic four-prong 18K white gold solitaire setting. The ring of her dreams.",
    badge: "popular",
    img: CAT_IMG.rings,
    inStock: true
  },
  {
    id: 20,
    name: "Ruby Gemstone Ring",
    category: "rings",
    subcategory: "rings-gemstone",
    price: 980,
    material: "14K Gold · Natural Ruby",
    description: "Exquisite natural ruby center stone surrounded by a halo of brilliant-cut diamonds, set in 14K gold. Vibrant color and extraordinary elegance.",
    badge: "new",
    img: CAT_IMG.rings,
    inStock: true
  },
  {
    id: 21,
    name: "Men's Gold Wedding Band",
    category: "rings",
    subcategory: "rings-men",
    price: 620,
    material: "14K Yellow Gold · 6mm",
    description: "Classic comfort-fit wedding band in polished 14K yellow gold, 6mm width. Durable, sophisticated, and built to be worn every day.",
    badge: null,
    img: CAT_IMG.rings,
    inStock: true
  },
  {
    id: 22,
    name: "Women's Diamond Band",
    category: "rings",
    subcategory: "rings-women",
    price: 1100,
    material: "14K White Gold · Eternity Band",
    description: "Half-eternity diamond band featuring brilliant-cut diamonds channel-set in 14K white gold. Stunning as a standalone ring or stacked with an engagement ring.",
    badge: "popular",
    img: CAT_IMG.rings,
    inStock: true
  },
  {
    id: 23,
    name: "Gold Statement Cocktail Ring",
    category: "rings",
    subcategory: "rings-women",
    price: 740,
    material: "14K Gold · Emerald Cut CZ",
    description: "Glamorous cocktail ring featuring an oversized emerald-cut cubic zirconia surrounded by a double halo of sparkling stones. Pure drama.",
    badge: "limited",
    img: CAT_IMG.rings,
    inStock: true
  },

  // ── KIDS ──
  {
    id: 24,
    name: "Kids Pearl Bracelet",
    category: "kids",
    subcategory: "kids",
    price: 165,
    material: "14K Gold · Freshwater Pearls",
    description: "Delicate freshwater pearl bracelet with a 14K gold clasp. An heirloom-quality piece for your little one's most special moments.",
    badge: "new",
    img: CAT_IMG.bracelets,
    inStock: true
  },
  {
    id: 25,
    name: "Kids Butterfly Pendant",
    category: "kids",
    subcategory: "kids",
    price: 195,
    material: "10K Yellow Gold",
    description: "Charming butterfly pendant in 10K yellow gold with colorful enamel wings. Includes an adjustable 14\" chain — perfect for ages 3-12.",
    badge: null,
    img: CAT_IMG.pendants,
    inStock: true
  }
];

// ── STATE ────────────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('vm_cart') || '[]');
let currentFilter = 'all';
let currentSort = 'default';
let searchQuery = '';
let modalProduct = null;
let modalQty = 1;

// ── DOM REFS ─────────────────────────────────────────────────────────────────
const productsGrid   = document.getElementById('products-grid');
const cartCount      = document.getElementById('cart-count');
const cartItems      = document.getElementById('cart-items');
const cartEmpty      = document.getElementById('cart-empty');
const cartFooter     = document.getElementById('cart-footer');
const cartTotal      = document.getElementById('cart-total-price');
const cartSidebar    = document.getElementById('cart-sidebar');
const cartOverlay    = document.getElementById('cart-overlay');
const productModal   = document.getElementById('product-modal');
const productOverlay = document.getElementById('product-overlay');
const toast          = document.getElementById('toast');

// ── FORMAT PRICE ─────────────────────────────────────────────────────────────
const fmt = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2 });

// ── RENDER PRODUCTS ──────────────────────────────────────────────────────────
function getFiltered() {
  let list = products.filter(p => {
    const matchCat = currentFilter === 'all'
      || p.category === currentFilter
      || p.subcategory === currentFilter;
    const matchSearch = !searchQuery
      || p.name.toLowerCase().includes(searchQuery)
      || p.category.toLowerCase().includes(searchQuery)
      || p.material.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (currentSort === 'price-asc')  list = [...list].sort((a,b) => a.price - b.price);
  if (currentSort === 'price-desc') list = [...list].sort((a,b) => b.price - a.price);
  if (currentSort === 'name-asc')   list = [...list].sort((a,b) => a.name.localeCompare(b.name));

  return list;
}

function getBadgeHTML(badge) {
  if (!badge) return '';
  const labels = { new: 'New', limited: 'Limited', popular: 'Popular' };
  const cls    = { new: 'badge-new', limited: 'badge-limited', popular: 'badge-popular' };
  return `<div class="product-badge ${cls[badge]}">${labels[badge]}</div>`;
}

function renderProducts() {
  const list = getFiltered();
  if (list.length === 0) {
    productsGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 0;color:var(--gray)">
      <p style="font-size:2rem;margin-bottom:12px">💎</p>
      <p>No products found. Try a different filter.</p>
    </div>`;
    return;
  }
  productsGrid.innerHTML = list.map((p, i) => `
    <div class="product-card animate-in" style="animation-delay:${i * 0.06}s" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'" />`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:linear-gradient(135deg,#1a1a2e,#2d1b69)">💍</div>`
        }
        ${getBadgeHTML(p.badge)}
        <div class="product-quick-add">
          <button class="quick-add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})">+ Add to Cart</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category-tag">${p.category.toUpperCase()}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${fmt(p.price)}</p>
        <p class="product-material">${p.material}</p>
      </div>
    </div>
  `).join('');
}

// ── MODAL ────────────────────────────────────────────────────────────────────
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  modalProduct = p;
  modalQty = 1;
  document.getElementById('qty-val').textContent = 1;
  document.getElementById('modal-category').textContent = p.category.toUpperCase() + ' › ' + p.name;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-price').textContent = fmt(p.price);
  document.getElementById('modal-desc').textContent = p.description;
  document.getElementById('modal-material').textContent = '✦ ' + p.material;
  document.getElementById('modal-stock').textContent = p.inStock ? '✅ In Stock' : '❌ Out of Stock';

  const img = document.getElementById('modal-img');
  if (p.img) {
    img.src = p.img;
    img.alt = p.name;
    img.style.display = '';
  } else {
    img.style.display = 'none';
  }

  const badge = document.getElementById('modal-badge');
  if (p.badge) {
    const labels = { new: 'New', limited: 'Limited', popular: 'Popular' };
    const cls    = { new: 'badge-new', limited: 'badge-limited', popular: 'badge-popular' };
    badge.textContent = labels[p.badge];
    badge.className   = `modal-badge ${cls[p.badge]}`;
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }

  productModal.classList.add('open');
  productOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  productModal.classList.remove('open');
  productOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

window.changeQty = function(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('qty-val').textContent = modalQty;
};

window.addFromModal = function() {
  if (!modalProduct) return;
  addToCart(modalProduct, modalQty);
  closeModal();
};

// ── CART ─────────────────────────────────────────────────────────────────────
function addToCart(product, qty = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`"${product.name}" added to cart ✦`);
}

window.quickAdd = function(id) {
  const p = products.find(x => x.id === id);
  if (p) addToCart(p, 1);
};

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function updateCartItemQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('vm_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  cartCount.textContent = total;
  cartCount.style.display = total > 0 ? 'flex' : 'none';

  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    cartItems.innerHTML = '';
    cartItems.appendChild(cartEmpty);
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  const grandTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotal.textContent = fmt(grandTotal);

  cartItems.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${i.img
          ? `<img src="${i.img}" alt="${i.name}" onerror="this.style.display='none'" />`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:var(--dark3)">💍</div>`
        }
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${i.name}</p>
        <p class="cart-item-price">${fmt(i.price)}</p>
        <div class="cart-item-qty">
          <button onclick="updateCartItemQty(${i.id}, -1)">−</button>
          <span>${i.qty}</span>
          <button onclick="updateCartItemQty(${i.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i.id})" title="Remove">✕</button>
    </div>
  `).join('');
}

window.closeCart = function() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
};

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.checkout = function() {
  showToast('Please contact us at mairinmastrapabb@gmail.com to complete your order 💎');
  closeCart();
};

// ── TOAST ─────────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── FILTER & SORT ─────────────────────────────────────────────────────────────
function setFilter(filter) {
  currentFilter = filter;
  // Update chips
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.dataset.filter === filter);
  });
  // Update nav links
  document.querySelectorAll('[data-filter]').forEach(a => {
    a.classList.toggle('active', a.dataset.filter === filter);
  });
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── INIT & EVENT LISTENERS ────────────────────────────────────────────────────
function init() {
  renderProducts();
  updateCartUI();

  // Cart toggle
  document.getElementById('cart-toggle').addEventListener('click', openCart);
  document.getElementById('cart-close').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  productOverlay.addEventListener('click', closeModal);

  // Search
  const searchToggle = document.getElementById('search-toggle');
  const searchBar    = document.getElementById('search-bar');
  const searchInput  = document.getElementById('search-input');
  const searchClose  = document.getElementById('search-close');

  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) searchInput.focus();
  });
  searchClose.addEventListener('click', () => {
    searchBar.classList.add('hidden');
    searchInput.value = '';
    searchQuery = '';
    renderProducts();
  });
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Filter chips
  document.getElementById('filter-chips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (chip) setFilter(chip.dataset.filter);
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', e => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Nav links (including dropdown items and footer links)
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-filter]');
    if (a) {
      e.preventDefault();
      setFilter(a.dataset.filter);
    }
  });

  // Category cards
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => setFilter(card.dataset.cat));
  });

  // Mobile hamburger
  const hamburger    = document.getElementById('menu-toggle');
  const nav          = document.getElementById('main-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');

  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    hamburger.classList.toggle('open', open);
    mobileOverlay.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileOverlay.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Mobile dropdown toggles
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      if (nav.classList.contains('mobile-open')) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Header sticky effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.style.borderBottomColor = window.scrollY > 60
      ? 'rgba(201,168,76,0.25)'
      : 'rgba(201,168,76,0.15)';
  });

  // Contact form
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('cf-name').value;
    const email   = document.getElementById('cf-email').value;
    const phone   = document.getElementById('cf-phone').value;
    const subject = document.getElementById('cf-subject').value;
    const message = document.getElementById('cf-message').value;

    // Build mailto link
    const body = `Name: ${name}%0APhone: ${phone}%0AInterest: ${subject}%0A%0A${message}`;
    window.location.href = `mailto:mairinmastrapabb@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${body}`;

    document.getElementById('form-success').classList.remove('hidden');
    e.target.reset();
    setTimeout(() => document.getElementById('form-success').classList.add('hidden'), 5000);
  });

  // Keyboard close for modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); }
  });

  // Animate on scroll (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) en.target.classList.add('animate-in');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature, .stat, .cat-card').forEach(el => {
    observer.observe(el);
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
