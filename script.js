// ============================================================
// STITCH & SOUL — Centralized JS
// Cart system: localStorage · Product data · Navigation
// ============================================================

// ── PRODUCT DATABASE ─────────────────────────────────────────
const PRODUCTS = [
  // ── EASTERN MEN ──────────────────────────────────────
  {
    id: 1,
    name: "Black Shalwar Kameez",
    price: 148,
    category: "eastern-men",
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Black","Charcoal","Navy"],
    description: "Elegant black shalwar kameez crafted for traditional occasions. Classic silhouette with refined detailing for a sophisticated look.",
    features: ["100% Cotton Blend","Traditional Cut","Comfortable Fit"],
    image: "images/Black Shalwar Kameez.jpeg",
    badge: null
  },
  {
    id: 2,
    name: "Brown Traditional Shalwar Kameez",
    price: 155,
    category: "eastern-men",
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Brown","Cream","Tan"],
    description: "Richly colored brown shalwar kameez perfect for cultural events and celebrations. Premium fabric with traditional stitching.",
    features: ["100% Cotton Blend","Premium Fabric","Traditional Design"],
    image: "images/Brown Traditional Shalwar Kameez.jpeg",
    badge: null
  },
  {
    id: 3,
    name: "Cream Shalwar Kameez",
    price: 142,
    category: "eastern-men",
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Cream","Off-White","Beige"],
    description: "Lightweight cream shalwar kameez ideal for warm occasions. Breathable fabric with relaxed fit ensures all-day comfort.",
    features: ["100% Cotton Blend","Lightweight","Relaxed Fit"],
    image: "images/Cream Shalwar Kameez.jpeg",
    badge: null
  },
  
  // ── EASTERN WOMEN ────────────────────────────────────
  {
    id: 4,
    name: "Celestial Star Embroidered Kurti",
    price: 195,
    category: "eastern-women",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Crimson","Navy","Sapphire"],
    description: "Elegant embroidered kurti featuring beautiful celestial star detailing. Perfect for festivals, celebrations, and elegant gatherings with its vibrant colors and intricate craftsmanship.",
    features: ["Premium Cotton Blend","Hand-Embroidered Stars","Traditional Neckline"],
    image: "images/eastern female.jpeg",
    badge: "New"
  },
  {
    id: 5,
    name: "Red Floral Kurti",
    price: 175,
    category: "eastern-women",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Red","Crimson","Maroon"],
    description: "Vibrant red kurti with beautiful floral designs. A stunning piece perfect for celebrations and festivals with its graceful and feminine appeal.",
    features: ["Premium Cotton","Hand-Printed Florals","Elegant Cut"],
    image: "images/Red Floral Kurti.jpeg",
    badge: null
  },
  
  // ── WESTERN WEAR ─────────────────────────────────────
  {
    id: 6,
    name: "The Yapper & Listener Graphic Tee",
    price: 45,
    category: "western",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Cream","Chocolate","Black"],
    description: "Fun graphic tee with humorous personality-driven prints. Perfect casual wear for expressing your vibe. Available in classic color combinations.",
    features: ["100% Organic Cotton","Comfortable Fit","Screen-Printed Design"],
    image: "images/western.jpeg",
    badge: null
  },
  {
    id: 7,
    name: "Her One & His Only Couple Tee",
    price: 50,
    category: "western",
    sizes: ["XS","S","M","L","XL"],
    colors: ["White","Cream","Pastel Pink"],
    description: "Adorable couple graphic tee with cute line art designs. Perfect for matching with your loved one or wearing solo as a statement piece.",
    features: ["100% Organic Cotton","Unisex Fit","Cute Couple Graphics"],
    image: "images/western 2.jpeg",
    badge: null
  },
  {
    id: 8,
    name: "Forever & Together Couple Tee",
    price: 48,
    category: "western",
    sizes: ["XS","S","M","L","XL"],
    colors: ["Navy","Sky Blue","Lavender"],
    description: "Romantic couple graphic tee with sweet line art designs. Celebrate your bond with this charming and comfortable casual piece.",
    features: ["100% Organic Cotton","Soft Print","Relaxed Fit"],
    image: "images/western 3.jpeg",
    badge: null
  },
  {
    id: 9,
    name: "Couple Printed T-Shirt Set",
    price: 65,
    category: "western",
    sizes: ["XS","S","M","L","XL"],
    colors: ["White","Cream","Black"],
    description: "Fun couple-themed printed t-shirt set with modern comfort. Perfect for casual outings and everyday wear.",
    features: ["100% Cotton","Comfortable Fit","Printed Design"],
    image: "images/Copule Printed T-Shirt set.jpeg",
    badge: null
  },
  
  // ── SHAWLS ───────────────────────────────────────────
  {
    id: 10,
    name: "Biege Soft Wool Shawl",
    price: 85,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Beige","Cream"],
    description: "Soft and luxurious beige wool shawl, perfect for layering. A timeless piece that adds warmth and elegance to any outfit.",
    features: ["Premium Wool","Soft Finish","Versatile Design"],
    image: "images/biege soft wool shawl.jpeg",
    badge: null
  },
  {
    id: 11,
    name: "Classic Winter Shawl Set",
    price: 95,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Navy","Beige"],
    description: "Classic winter shawl perfect for cold seasons. Quality fabric with refined design for year-round versatility.",
    features: ["Premium Wool","Traditional Design","Decorative Pattern"],
    image: "images/Classic Winter Shawl Set.jpeg",
    badge: "New"
  },
  {
    id: 12,
    name: "Traditional Printed Shawl",
    price: 92,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["Cream","Brown"],
    description: "Beautiful traditional shawl featuring printed patterns. A versatile piece perfect for both casual and formal occasions.",
    features: ["Premium Wool","Hand-Printed Design","Traditional Pattern"],
    image: "images/Traditional Printed shawl.jpeg",
    badge: null
  },
  {
    id: 13,
    name: "White Ethnic Border Shawl",
    price: 88,
    category: "shawls",
    sizes: ["One Size"],
    colors: ["White","Cream"],
    description: "Elegant white shawl with ethnic border detailing. Perfect for special occasions and adds instant sophistication to any outfit.",
    features: ["Premium Wool","Ethnic Borders","Elegant Design"],
    image: "images/White Ethinic Border Shawl.jpeg",
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
