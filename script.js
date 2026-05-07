// ============================================================
// STITCH & SOUL — Centralized JS
// Cart system: localStorage · Product data · Navigation
// ============================================================

// ── PRODUCT DATABASE ─────────────────────────────────────────
const PRODUCTS = [
  // ── EASTERN MEN ──────────────────────────────────────
  {
    id: 1,
    name: "Chocolate Kurta Pajama Set",
    price: 165,
    category: "eastern-men",
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Chocolate","Cream","Black"],
    description: "Traditional kurta pajama set in rich chocolate brown. A timeless piece offering comfort and elegance for any occasion. Perfect blend of heritage and contemporary style.",
    features: ["100% Cotton Blend","Traditional Cut","Embroidered Detailing"],
    image: "images/eastern male.jpeg",
    badge: null
  },
  {
    id: 2,
    name: "Cream Linen Kurta Set",
    price: 148,
    category: "eastern-men",
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Cream","Off-White","Beige"],
    description: "Lightweight cream linen kurta set ideal for summer gatherings. Breathable fabric with relaxed fit ensures all-day comfort.",
    features: ["100% Premium Linen","Lightweight","Relaxed Fit"],
    image: "images/eastern male2.jpeg",
    badge: null
  },
  {
    id: 3,
    name: "Midnight Black Formal Kurta",
    price: 185,
    category: "eastern-men",
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Black","Charcoal","Navy"],
    description: "Sophisticated black formal kurta for weddings and special events. Structured design with subtle embroidery for an upscale look.",
    features: ["Premium Cotton","Formal Cut","Hand-stitched"],
    image: "images/eastern male 3.jpeg",
    badge: "Bestseller"
  },
  
  // ── EASTERN WOMEN ────────────────────────────────────
  {
    id: 4,
    name: "Embroidered Ethnic Ensemble",
    price: 195,
    category: "eastern-women",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Crimson","Navy","Sapphire"],
    description: "Beautiful ethnic ensemble featuring intricate embroidery. Perfect for festivals and celebrations with its vibrant colors and detailed craftsmanship.",
    features: ["Premium Cotton Blend","Hand-Embroidered","Festival Ready"],
    image: "images/eastern female.jpeg",
    badge: "New"
  },
  
  // ── WESTERN WEAR ─────────────────────────────────────
  {
    id: 5,
    name: "The Aveline Silk Slip",
    price: 485,
    category: "western",
    sizes: ["XS","S","M","L"],
    colors: ["Champagne","Midnight","Rust"],
    description: "Cut on the bias from 100% heavyweight mulberry silk, the Aveline skims the body with a liquid-like fluidity. Designed with meticulous attention to drape.",
    features: ["100% Heavyweight Mulberry Silk (22 Momme)","Bias-cut for a fluid, adaptive fit","Ethically crafted in our Milan atelier"],
    image: "images/western 1.jpeg",
    badge: null
  },
  {
    id: 6,
    name: "Structured Wool Blazer",
    price: 345,
    category: "western",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Navy","Charcoal","Camel"],
    description: "Structured wool blend with satin lapels. A cornerstone of the considered wardrobe — equally commanding in a boardroom or gallery opening.",
    features: ["Structured Wool Blend","Satin-Peak Lapels","Half-canvas construction"],
    image: "images/western 2.jpeg",
    badge: null
  },
  {
    id: 7,
    name: "Silk Whisper Blouse",
    price: 195,
    category: "western",
    sizes: ["XS","S","M","L"],
    colors: ["Blush","Ivory","Black"],
    description: "Flowing silk blouse in soft blush pink with delicate cuffs. The kind of piece that whispers luxury without shouting it.",
    features: ["100% Silk Crepe de Chine","Delicate pintuck cuffs","Dry Clean recommended"],
    image: "images/western 3.jpeg",
    badge: null
  },
  {
    id: 8,
    name: "Artisan Leather Boots",
    price: 320,
    category: "western",
    sizes: ["36","37","38","39","40","41"],
    colors: ["Cognac","Black","Stone"],
    description: "Classic leather ankle boots handcrafted by master cobblers. Rich, full-grain leather that develops a patina unique to the wearer.",
    features: ["Full-Grain Leather Upper","Leather-Lined Interior","Hand-stitched Goodyear welt"],
    image: "images/western.jpeg",
    badge: null
  },
  {
    id: 9,
    name: "Premium Cable Knit",
    price: 195,
    category: "western",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Sage","Oat","Charcoal"],
    description: "Heavyweight cotton-cashmere cable knit. The kind of sweater you reach for every morning without a second thought.",
    features: ["Cotton-Cashmire Blend","Cable-knit construction","Machine washable (cold)"],
    image: "images/western 1.jpeg",
    badge: null
  },
  {
    id: 10,
    name: "Pearl Drop Necklace",
    price: 95,
    category: "western",
    sizes: ["One Size"],
    colors: ["Gold","Silver"],
    description: "Delicate gold chain with a single freshwater pearl drop. The detail that elevates everything.",
    features: ["18K Gold-Plated Chain","Freshwater Pearl Pendant","Lobster clasp closure"],
    image: "images/western 2.jpeg",
    badge: null
  },
  {
    id: 11,
    name: "Rattan Day Bag",
    price: 210,
    category: "western",
    sizes: ["One Size"],
    colors: ["Natural","Black"],
    description: "Woven rattan bag with cognac leather accents and top-handle. Artisan-crafted in Bali, designed for your best days.",
    features: ["Hand-woven Rattan Body","Leather trim & handles","Cotton twill lining"],
    image: "images/western 3.jpeg",
    badge: null
  },
  
  // ── SHAWLS ───────────────────────────────────────────
  {
    id: 12,
    name: "Charcoal & Burgundy Fringed Wrap",
    price: 85,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Charcoal","Burgundy"],
    description: "Classic two-tone shawl with elegant fringe detailing. Versatile piece perfect for layering and adds instant sophistication to any outfit.",
    features: ["Premium Wool Blend","Hand-Fringed Edges","Reversible Design"],
    image: "images/shawl 1.jpeg",
    badge: null
  },
  {
    id: 13,
    name: "Patterned Navy Weave Shawl",
    price: 95,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Navy","Beige"],
    description: "Sophisticated patterned shawl with intricate textile borders. The perfect accessory for both casual and formal occasions.",
    features: ["Premium Wool","Traditional Weave","Decorative Borders"],
    image: "images/shawl 2.jpeg",
    badge: "New"
  },
  {
    id: 14,
    name: "Cream Wrap Shawl",
    price: 75,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Cream","Ivory"],
    description: "Minimalist cream shawl with clean lines. A timeless piece that complements any wardrobe and works seamlessly for all seasons.",
    features: ["100% Pure Wool","Smooth Finish","Lightweight"],
    image: "images/shawl 3.jpeg",
    badge: null
  },
  {
    id: 15,
    name: "Ornate Red & Cream Pashmina",
    price: 155,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Red","Cream","Gold"],
    description: "Luxurious pashmina with ornate embroidered borders. A traditional masterpiece showcasing intricate craftsmanship and rich heritage patterns.",
    features: ["Premium Pashmina","Hand-Embroidered Borders","Traditional Design"],
    image: "images/shawl 4.jpeg",
    badge: "Bestseller"
  },
  {
    id: 16,
    name: "Cream Striped Border Shawl",
    price: 88,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Cream","Brown","White"],
    description: "Classic cream shawl featuring subtle brown and white striped borders. Elegant and versatile, perfect for everyday wear and special occasions alike.",
    features: ["Premium Wool","Striped Border Detail","Versatile Design"],
    image: "images/shawl 5.jpeg",
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
