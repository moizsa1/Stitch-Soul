// ============================================================
// STITCH & SOUL — Centralized JS
// Cart system: localStorage · Product data · Navigation
// ============================================================

// ── PRODUCT DATABASE ─────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "The Oxford Linen Shirt",
    price: 145,
    category: "casual",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Ivory","Sand","Slate"],
    description: "Meticulously tailored from 100% Belgian linen, the Oxford Shirt delivers effortless refinement for the modern wardrobe. Relaxed yet structured, it drapes beautifully.",
    features: ["100% Premium Belgian Linen","Relaxed Tailored Fit","Ethically crafted in our Milan atelier"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.36 PM.jpeg",
    badge: null
  },
  {
    id: 2,
    name: "Pleated Wool Trousers",
    price: 280,
    category: "formal",
    sizes: ["28","30","32","34","36"],
    colors: ["Charcoal","Navy","Camel"],
    description: "High-waisted and beautifully draped, these pleated trousers redefine elevated dressing. Cut from a fine Italian wool blend that moves like silk.",
    features: ["Italian Wool Blend","High-Rise Pleated Cut","Dry Clean Only"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.36 PM (1).jpeg",
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "The Aveline Silk Slip",
    price: 485,
    category: "western",
    sizes: ["XS","S","M","L"],
    colors: ["Champagne","Midnight","Rust"],
    description: "Cut on the bias from 100% heavyweight mulberry silk, the Aveline skims the body with a liquid-like fluidity. Designed with meticulous attention to drape.",
    features: ["100% Heavyweight Mulberry Silk (22 Momme)","Bias-cut for a fluid, adaptive fit","Ethically crafted in our Milan atelier"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.36 PM (2).jpeg",
    badge: "New"
  },
  {
    id: 4,
    name: "Oxford Wool Blazer",
    price: 345,
    category: "casual",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Navy","Charcoal","Camel"],
    description: "Structured wool blend with satin lapels. A cornerstone of the considered wardrobe — equally commanding in a boardroom or gallery opening.",
    features: ["Structured Wool Blend","Satin-Peak Lapels","Half-canvas construction"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.37 PM.jpeg",
    badge: null
  },
  {
    id: 5,
    name: "Silk Whisper Blouse",
    price: 195,
    category: "western",
    sizes: ["XS","S","M","L"],
    colors: ["Blush","Ivory","Black"],
    description: "Flowing silk blouse in soft blush pink with delicate cuffs. The kind of piece that whispers luxury without shouting it.",
    features: ["100% Silk Crepe de Chine","Delicate pintuck cuffs","Dry Clean recommended"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.37 PM (1).jpeg",
    badge: null
  },
  {
    id: 6,
    name: "Artisan Leather Boots",
    price: 320,
    category: "western",
    sizes: ["36","37","38","39","40","41"],
    colors: ["Cognac","Black","Stone"],
    description: "Classic leather ankle boots handcrafted by master cobblers. Rich, full-grain leather that develops a patina unique to the wearer.",
    features: ["Full-Grain Leather Upper","Leather-Lined Interior","Hand-stitched Goodyear welt"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.38 PM.jpeg",
    badge: null
  },
  {
    id: 7,
    name: "Cable Curator Knit",
    price: 195,
    category: "casual",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Sage","Oat","Charcoal"],
    description: "Heavyweight cotton-cashmere cable knit. The kind of sweater you reach for every morning without a second thought.",
    features: ["Cotton-Cashmere Blend","Cable-knit construction","Machine washable (cold)"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.38 PM (1).jpeg",
    badge: null
  },
  {
    id: 8,
    name: "The Linen Drape Dress",
    price: 248,
    category: "eastern",
    sizes: ["XS","S","M","L"],
    colors: ["Sage","Dusty Rose","Ivory"],
    description: "Ethereal linen dress with a signature drape silhouette. Moves like water. Wears like a second skin.",
    features: ["100% European Linen","Adjustable self-tie belt","Hand-finished hems"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.38 PM (3).jpeg",
    badge: null
  },
  {
    id: 9,
    name: "Pearl Drop Necklace",
    price: 95,
    category: "western",
    sizes: ["One Size"],
    colors: ["Gold","Silver"],
    description: "Delicate gold chain with a single freshwater pearl drop. The detail that elevates everything.",
    features: ["18K Gold-Plated Chain","Freshwater Pearl Pendant","Lobster clasp closure"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.39 PM.jpeg",
    badge: "New"
  },
  {
    id: 10,
    name: "Rattan Day Bag",
    price: 210,
    category: "western",
    sizes: ["One Size"],
    colors: ["Natural","Black"],
    description: "Woven rattan bag with cognac leather accents and top-handle. Artisan-crafted in Bali, designed for your best days.",
    features: ["Hand-woven Rattan Body","Leather trim & handles","Cotton twill lining"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.45 PM.jpeg",
    badge: null
  },
  {
    id: 11,
    name: "Oat Knit Sweater",
    price: 140,
    category: "casual",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Oat","Stone","Navy"],
    description: "Minimalist ribbed sweater in a warm oat tone. The foundation of any thoughtful wardrobe.",
    features: ["Merino Wool Blend","Relaxed ribbed silhouette","Machine washable"],
    image: "images/WhatsApp Image 2026-05-07 at 7.04.38 PM (1).jpeg",
    badge: null
  }
];

// ── CART SYSTEM ──────────────────────────────────────────────
const Cart = {
  STORAGE_KEY: 'ss_cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch { return []; }
  },

  saveItems(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateBadge();
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  addItem(productId, size, color, quantity = 1) {
    const items = this.getItems();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;

    const key = `${productId}_${size}_${color}`;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ key, productId, size, color, quantity, name: product.name, price: product.price, image: product.image });
    }
    this.saveItems(items);
    return true;
  },

  removeItem(key) {
    const items = this.getItems().filter(i => i.key !== key);
    this.saveItems(items);
  },

  updateQuantity(key, quantity) {
    const items = this.getItems();
    const item = items.find(i => i.key === key);
    if (item) {
      if (quantity <= 0) { this.removeItem(key); return; }
      item.quantity = quantity;
      this.saveItems(items);
    }
  },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.quantity, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateBadge();
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ── TOAST NOTIFICATIONS ───────────────────────────────────────
function showToast(message, type = 'success') {
  const existing = document.getElementById('ss-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'ss-toast';
  toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl font-body text-sm font-medium transition-all duration-500 opacity-0 translate-y-4';
  
  if (type === 'success') {
    toast.style.cssText += 'background:#480009;color:#fff;';
    toast.innerHTML = `<span class="material-symbols-outlined text-[18px]" style="font-variation-settings:'FILL' 1;">check_circle</span> ${message}`;
  } else if (type === 'error') {
    toast.style.cssText += 'background:#ba1a1a;color:#fff;';
    toast.innerHTML = `<span class="material-symbols-outlined text-[18px]" style="font-variation-settings:'FILL' 1;">error</span> ${message}`;
  }

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(1rem)';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// ── SHARED NAVBAR INIT ────────────────────────────────────────
function initNavbar() {
  Cart.updateBadge();
  
  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-stone-600');
    }
  });
}

// ── FORMAT CURRENCY ───────────────────────────────────────────
function formatPrice(num) {
  return '$' + num.toFixed(2);
}

// ── INIT ON DOM READY ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initNavbar);
