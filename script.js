/* Iqra Online Mart — storefront + CMS */
const KEY = "iqra2_";
const money = (n) => {
  const s = Store.settings.currency || "৳";
  return s + Number(n || 0).toLocaleString("en-BD");
};
const uid = () => Date.now() + Math.floor(Math.random() * 999);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const DEFAULT_PRODUCTS = [
  { id: 1, name: "Wireless Bluetooth Headphones", nameBn: "ওয়্যারলেস ব্লুটুথ হেডফোন", price: 2499, oldPrice: 3499, category: "Electronics", rating: 4.5, reviews: 128, badge: "hot", icon: "fa-headphones", description: "ANC wireless headphones with 30-hour battery life.", descriptionBn: "অ্যাক্টিভ নয়েজ ক্যান্সেলেশন ও ৩০ ঘণ্টা ব্যাটারি।", stock: 45, featured: true, status: "active", createdAt: "2026-01-15" },
  { id: 2, name: "Smart Watch Series 5", nameBn: "স্মার্ট ওয়াচ সিরিজ ৫", price: 4999, oldPrice: 6999, category: "Electronics", rating: 4.7, reviews: 89, badge: "new", icon: "fa-clock", description: "Health tracking, GPS and water resistance.", descriptionBn: "হেলথ ট্র্যাকিং, জিপিএস ও ওয়াটার রেজিস্ট্যান্স।", stock: 32, featured: true, status: "active", createdAt: "2026-02-01" },
  { id: 3, name: "Designer Cotton T-Shirt", nameBn: "ডিজাইনার কটন টি-শার্ট", price: 599, oldPrice: null, category: "Fashion", rating: 4.3, reviews: 234, badge: null, icon: "fa-shirt", description: "Premium cotton with a modern relaxed fit.", descriptionBn: "প্রিমিয়াম কটন, আধুনিক ফিট।", stock: 120, featured: true, status: "active", createdAt: "2026-02-10" },
  { id: 4, name: "Leather Handbag", nameBn: "লেদার হ্যান্ডব্যাগ", price: 1899, oldPrice: 2999, category: "Fashion", rating: 4.6, reviews: 156, badge: "sale", icon: "fa-bag-shopping", description: "Elegant leather bag in classic finishes.", descriptionBn: "ক্লাসিক ফিনিশের এলিগ্যান্ট চামড়ার ব্যাগ।", stock: 67, featured: true, status: "active", createdAt: "2026-01-20" },
  { id: 5, name: "Modern Coffee Table", nameBn: "মডার্ন কফি টেবিল", price: 3999, oldPrice: null, category: "Home & Living", rating: 4.4, reviews: 45, badge: null, icon: "fa-table", description: "Tempered glass top with oak legs.", descriptionBn: "টেম্পার্ড গ্লাস টপ ও ওক লেগ।", stock: 18, featured: true, status: "active", createdAt: "2026-02-15" },
  { id: 6, name: "Organic Bedding Set", nameBn: "অর্গানিক বেডিং সেট", price: 2299, oldPrice: 3199, category: "Home & Living", rating: 4.2, reviews: 78, badge: "sale", icon: "fa-bed", description: "Luxury organic cotton bedding.", descriptionBn: "অর্গানিক কটন বেডিং।", stock: 54, featured: false, status: "active", createdAt: "2026-01-25" },
  { id: 7, name: "Python Programming Guide", nameBn: "পাইথন প্রোগ্রামিং গাইড", price: 899, oldPrice: null, category: "Books & Education", rating: 4.8, reviews: 312, badge: "hot", icon: "fa-book", description: "Beginner to advanced Python handbook.", descriptionBn: "প্রাথমিক থেকে অ্যাডভান্সড পাইথন।", stock: 200, featured: true, status: "active", createdAt: "2026-02-05" },
  { id: 8, name: "Yoga Mat Premium", nameBn: "যোগ ম্যাট প্রিমিয়াম", price: 799, oldPrice: 1199, category: "Sports & Fitness", rating: 4.5, reviews: 167, badge: "sale", icon: "fa-person-running", description: "Non-slip mat with alignment guides.", descriptionBn: "নন-স্লিপ যোগ ম্যাট।", stock: 89, featured: false, status: "active", createdAt: "2026-02-12" },
  { id: 9, name: "Premium Basmati Rice 5kg", nameBn: "প্রিমিয়াম বাসমতি চাল ৫ কেজি", price: 650, oldPrice: 750, category: "Groceries", rating: 4.7, reviews: 89, badge: "hot", icon: "fa-basket-shopping", description: "Aged basmati for biryani and pulao.", descriptionBn: "বিরিয়ানির জন্য পুরনো বাসমতি।", stock: 200, featured: true, status: "active", createdAt: "2026-03-10" },
  { id: 10, name: "Organic Honey 500g", nameBn: "অর্গানিক মধু ৫০০ গ্রাম", price: 450, oldPrice: null, category: "Groceries", rating: 4.8, reviews: 145, badge: null, icon: "fa-jar", description: "Pure Sundarbans honey. No added sugar.", descriptionBn: "সুন্দরবনের খাঁটি মধু।", stock: 150, featured: true, status: "active", createdAt: "2026-03-12" },
  { id: 11, name: "Vitamin C Serum", nameBn: "ভিটামিন সি সিরাম", price: 599, oldPrice: 899, category: "Beauty & Care", rating: 4.6, reviews: 234, badge: "sale", icon: "fa-spa", description: "Brightening serum for radiant skin.", descriptionBn: "উজ্জ্বল ত্বকের সিরাম।", stock: 78, featured: true, status: "active", createdAt: "2026-03-15" },
  { id: 12, name: "Multivitamin Supplement", nameBn: "মাল্টিভিটামিন", price: 350, oldPrice: 450, category: "Pharmacy & Health", rating: 4.5, reviews: 178, badge: null, icon: "fa-heart-pulse", description: "Daily vitamins and minerals.", descriptionBn: "দৈনিক ভিটামিন ও মিনারেল।", stock: 250, featured: false, status: "active", createdAt: "2026-03-08" },
  { id: 13, name: "Educational Toy Set", nameBn: "শিক্ষামূলক খেলনা", price: 1299, oldPrice: null, category: "Kids & Baby", rating: 4.7, reviews: 92, badge: "new", icon: "fa-baby", description: "Safe, non-toxic toys for ages 3–8.", descriptionBn: "৩–৮ বছরের নিরাপদ খেলনা।", stock: 60, featured: true, status: "active", createdAt: "2026-03-18" },
  { id: 14, name: "Mechanical Gaming Keyboard", nameBn: "মেকানিক্যাল কীবোর্ড", price: 3299, oldPrice: 4499, category: "Electronics", rating: 4.8, reviews: 245, badge: "new", icon: "fa-keyboard", description: "RGB hot-swap mechanical keyboard.", descriptionBn: "আরজিবি মেকানিক্যাল কীবোর্ড।", stock: 41, featured: true, status: "active", createdAt: "2026-03-01" },
  { id: 15, name: "Running Shoes Pro", nameBn: "রানিং শু প্রো", price: 2499, oldPrice: null, category: "Sports & Fitness", rating: 4.6, reviews: 189, badge: "hot", icon: "fa-shoe-prints", description: "Lightweight cushioned runners.", descriptionBn: "হালকা কুশন রানিং শু।", stock: 95, featured: true, status: "active", createdAt: "2026-02-20" },
  { id: 16, name: "Premium Dog Food", nameBn: "প্রিমিয়াম কুকুরের খাবার", price: 1199, oldPrice: null, category: "Pet Supplies", rating: 4.6, reviews: 92, badge: null, icon: "fa-dog", description: "Complete nutrition for all breeds.", descriptionBn: "সব জাতের পুষ্টিকর খাবার।", stock: 76, featured: false, status: "active", createdAt: "2026-01-30" }
];

const DEFAULT_CATEGORIES = [
  { id: "electronics", name: "Electronics", nameBn: "ইলেকট্রনিক্স", icon: "fa-laptop", description: "Gadgets and accessories", descriptionBn: "গ্যাজেট ও অ্যাকসেসরিজ" },
  { id: "fashion", name: "Fashion", nameBn: "ফ্যাশন", icon: "fa-shirt", description: "Apparel and style", descriptionBn: "পোশাক ও স্টাইল" },
  { id: "home", name: "Home & Living", nameBn: "ঘর ও বসবাস", icon: "fa-house", description: "Furniture and decor", descriptionBn: "আসবাব ও সাজসজ্জা" },
  { id: "groceries", name: "Groceries", nameBn: "মুদিখানা", icon: "fa-basket-shopping", description: "Daily essentials", descriptionBn: "দৈনন্দিন প্রয়োজন" },
  { id: "beauty", name: "Beauty & Care", nameBn: "সৌন্দর্য", icon: "fa-spa", description: "Skincare and wellness", descriptionBn: "ত্বক ও সুস্থতা" },
  { id: "books", name: "Books & Education", nameBn: "বই ও শিক্ষা", icon: "fa-book", description: "Learn and grow", descriptionBn: "জ্ঞান ও শিক্ষা" },
  { id: "sports", name: "Sports & Fitness", nameBn: "খেলা ও ফিটনেস", icon: "fa-dumbbell", description: "Move every day", descriptionBn: "সক্রিয় জীবন" },
  { id: "kids", name: "Kids & Baby", nameBn: "শিশু", icon: "fa-baby", description: "Toys and essentials", descriptionBn: "খেলনা ও প্রয়োজনীয়" },
  { id: "pharmacy", name: "Pharmacy & Health", nameBn: "স্বাস্থ্য", icon: "fa-heart-pulse", description: "Health products", descriptionBn: "স্বাস্থ্য পণ্য" },
  { id: "pets", name: "Pet Supplies", nameBn: "পোষা প্রাণী", icon: "fa-paw", description: "For furry friends", descriptionBn: "পোষা প্রাণীর যত্ন" }
];

const DEFAULT_POSTS = [
  { id: 1, title: "Welcome to Iqra Online Mart", excerpt: "A quieter, more considered way to shop — quality over quantity.", date: "2026-03-15", readTime: "3 min", icon: "fa-store", category: "Announcement", status: "published", content: "<p>Iqra Online Mart is open. We curate electronics, fashion, home, groceries and more with honest pricing and delivery across Bangladesh.</p><ul><li>Curated brands</li><li>COD, bKash &amp; Nagad</li><li>Free shipping over ৳1000</li></ul>" },
  { id: 2, title: "This week’s electronics edit", excerpt: "Headphones, watches and keyboards worth the upgrade.", date: "2026-03-12", readTime: "4 min", icon: "fa-laptop", category: "Electronics", status: "published", content: "<p>From noise-cancelling headphones to mechanical keyboards — this week’s tech is built to last, not just to launch.</p>" },
  { id: 3, title: "Spring wardrobe notes", excerpt: "Breathable cotton and leather that ages well.", date: "2026-03-10", readTime: "2 min", icon: "fa-shirt", category: "Fashion", status: "published", content: "<p>Fewer pieces, better cloth. Our spring drop focuses on cotton tees and leather you will still carry next year.</p>" },
  { id: 4, title: "How to choose a smartwatch", excerpt: "Battery, sensors and style — what actually matters.", date: "2026-03-08", readTime: "5 min", icon: "fa-clock", category: "Guide", status: "published", content: "<p>Pick for fitness GPS, all-day battery, or design. Compatibility with your phone is non-negotiable.</p>" }
];

const DEFAULT_TESTIMONIALS = [
  { id: 1, name: "Ayesha Rahman", role: "Dhaka", text: "Packaging was careful and the headphones sound better than I expected at this price.", rating: 5, initials: "AR" },
  { id: 2, name: "Tanvir Hasan", role: "Chattogram", text: "COD was easy. Order arrived the next evening.", rating: 5, initials: "TH" },
  { id: 3, name: "Nusrat Jahan", role: "Savar", text: "The CMS is simple enough that I helped my sister list her products.", rating: 4, initials: "NJ" },
  { id: 4, name: "Rahim Uddin", role: "Rajshahi", text: "Basmati rice and honey were fresh. Will reorder groceries here.", rating: 5, initials: "RU" }
];

const DEFAULT_SETTINGS = {
  siteName: "Iqra Online Mart",
  motto: "Quality Over Quantity",
  tagline: "Considered goods for everyday life in Bangladesh.",
  email: "iqrabintesobuj@gmail.com",
  phone: "01617040846",
  address: "Savar, Dhaka, Bangladesh",
  currency: "৳",
  freeShippingThreshold: 1000,
  repoUrl: "https://github.com/soobujmiah/iqra-online-mart",
  facebook: "#", twitter: "#", instagram: "#", linkedin: "#",
  adminCredentials: { username: "admin", password: "admin123" }
};

const DEFAULT_PAGES = {
  hero: { badge: "Collection 2026", title: "Shop with intention.", highlight: "Live beautifully.", subtitle: "A dark, quiet marketplace for electronics, fashion, home and daily essentials — delivered across Bangladesh." },
  about: { title: "A mart with manners.", highlight: "Quality over quantity.", p1: "Iqra Online Mart is built for people who prefer fewer, better things. We source carefully and ship quickly from Savar, Dhaka.", p2: "Every product can be managed from the built-in CMS. No clutter — just a store you can actually run." },
  footer: { tagline: "Premium everyday shopping. Quality over quantity." }
};

const T = {
  en: {
    home: "Home", products: "Products", categories: "Categories", blog: "Journal", about: "About", contact: "Contact", admin: "Admin",
    shopNow: "Shop the edit", explore: "Browse categories", cart: "Bag", checkout: "Checkout", search: "Search",
    addToCart: "Add to bag", viewDetails: "Details", total: "Total", emptyCart: "Your bag is empty",
    signIn: "Sign in", register: "Register", myAccount: "Account"
  },
  bn: {
    home: "হোম", products: "পণ্য", categories: "ক্যাটাগরি", blog: "জার্নাল", about: "আমাদের কথা", contact: "যোগাযোগ", admin: "অ্যাডমিন",
    shopNow: "কেনাকাটা করুন", explore: "ক্যাটাগরি দেখুন", cart: "ব্যাগ", checkout: "চেকআউট", search: "খুঁজুন",
    addToCart: "ব্যাগে যোগ", viewDetails: "বিস্তারিত", total: "মোট", emptyCart: "ব্যাগ খালি",
    signIn: "লগইন", register: "রেজিস্টার", myAccount: "অ্যাকাউন্ট"
  }
};

const Store = {
  products: [], categories: [], posts: [], testimonials: [],
  orders: [], subscribers: [], messages: [], cart: [], wishlist: [],
  settings: {}, pages: {}, lang: "en", theme: "dark",
  filter: "all", sort: "default",

  load() {
    const g = (k, d) => {
      try { return JSON.parse(localStorage.getItem(KEY + k)) ?? structuredClone(d); }
      catch { return structuredClone(d); }
    };
    this.products = g("products", DEFAULT_PRODUCTS);
    this.categories = g("categories", DEFAULT_CATEGORIES);
    this.posts = g("posts", DEFAULT_POSTS);
    this.testimonials = g("testimonials", DEFAULT_TESTIMONIALS);
    this.orders = g("orders", []);
    this.subscribers = g("subscribers", []);
    this.messages = g("messages", []);
    this.cart = g("cart", []);
    this.wishlist = g("wishlist", []);
    this.settings = { ...DEFAULT_SETTINGS, ...g("settings", {}) };
    this.pages = g("pages", DEFAULT_PAGES);
    this.lang = localStorage.getItem(KEY + "lang") || "en";
    this.theme = localStorage.getItem(KEY + "theme") || "dark";
  },
  save(k, v) { localStorage.setItem(KEY + k, JSON.stringify(v)); },
  persistAll() {
    ["products", "categories", "posts", "testimonials", "orders", "subscribers", "messages", "cart", "wishlist", "settings", "pages"]
      .forEach((k) => this.save(k, this[k]));
  },
  t(key) { return (T[this.lang] && T[this.lang][key]) || T.en[key] || key; },
  pname(p) { return this.lang === "bn" && p.nameBn ? p.nameBn : p.name; },
  pdesc(p) { return this.lang === "bn" && p.descriptionBn ? p.descriptionBn : p.description; },
  activeProducts() { return this.products.filter((p) => p.status !== "inactive"); },
  addToCart(id, qty = 1) {
    const p = this.products.find((x) => x.id == id);
    if (!p || p.stock < 1) return toast("Out of stock");
    const line = this.cart.find((c) => c.id == id);
    if (line) line.qty = Math.min(p.stock, line.qty + qty);
    else this.cart.push({ id: p.id, qty });
    this.save("cart", this.cart);
    UI.cartCount();
    toast("Added to bag");
  },
  setQty(id, qty) {
    const p = this.products.find((x) => x.id == id);
    const line = this.cart.find((c) => c.id == id);
    if (!line) return;
    if (qty < 1) this.cart = this.cart.filter((c) => c.id != id);
    else line.qty = Math.min(p ? p.stock : qty, qty);
    this.save("cart", this.cart);
    UI.renderCart();
    UI.cartCount();
  },
  cartItems() {
    return this.cart.map((c) => {
      const p = this.products.find((x) => x.id == c.id);
      return p ? { ...p, qty: c.qty, line: p.price * c.qty } : null;
    }).filter(Boolean);
  },
  cartTotal() { return this.cartItems().reduce((s, i) => s + i.line, 0); },
  toggleWish(id) {
    if (this.wishlist.includes(id)) this.wishlist = this.wishlist.filter((x) => x !== id);
    else this.wishlist.push(id);
    this.save("wishlist", this.wishlist);
    UI.renderHome();
  }
};

const Auth = {
  users() { try { return JSON.parse(localStorage.getItem(KEY + "users")) || []; } catch { return []; } },
  saveUsers(u) { localStorage.setItem(KEY + "users", JSON.stringify(u)); },
  session() { try { return JSON.parse(localStorage.getItem(KEY + "session")); } catch { return null; } },
  setSession(u) { localStorage.setItem(KEY + "session", JSON.stringify(u)); },
  logout() { localStorage.removeItem(KEY + "session"); location.reload(); },
  register(data) {
    const users = this.users();
    if (users.some((u) => u.email === data.email)) return { ok: false, msg: "Email already registered" };
    const user = { id: uid(), ...data, addresses: [], createdAt: new Date().toISOString() };
    users.push(user);
    this.saveUsers(users);
    this.setSession({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName });
    return { ok: true };
  },
  login(email, password) {
    const u = this.users().find((x) => x.email === email && x.password === password);
    if (!u) return { ok: false, msg: "Invalid credentials" };
    this.setSession({ id: u.id, email: u.email, firstName: u.firstName, lastName: u.lastName });
    return { ok: true };
  },
  current() {
    const s = this.session();
    if (!s) return null;
    return this.users().find((u) => u.id === s.id) || s;
  },
  update(partial) {
    const s = this.session();
    if (!s) return;
    const users = this.users().map((u) => (u.id === s.id ? { ...u, ...partial } : u));
    this.saveUsers(users);
    const u = users.find((x) => x.id === s.id);
    this.setSession({ id: u.id, email: u.email, firstName: u.firstName, lastName: u.lastName });
  }
};

const AdminAuth = {
  is() { return localStorage.getItem(KEY + "admin") === "1"; },
  login(user, pass) {
    const c = Store.settings.adminCredentials || DEFAULT_SETTINGS.adminCredentials;
    if (user === c.username && pass === c.password) {
      localStorage.setItem(KEY + "admin", "1");
      return true;
    }
    return false;
  },
  logout() { localStorage.removeItem(KEY + "admin"); location.href = "admin-login.html"; }
};

function toast(msg) {
  $$(".toast").forEach((el) => el.remove());
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function stars(n) {
  const f = Math.round(n);
  return "★".repeat(f) + "☆".repeat(5 - f);
}

function productCard(p) {
  const on = Store.wishlist.includes(p.id) ? "on" : "";
  return `<article class="product-card">
    <div class="product-media">
      ${p.badge ? `<span class="p-badge ${p.badge}">${p.badge}</span>` : ""}
      <button class="wish-btn ${on}" data-wish="${p.id}"><i class="fa-solid fa-heart"></i></button>
      <i class="fa-solid ${p.icon || "fa-box"}"></i>
    </div>
    <div class="product-body">
      <div class="product-cat">${p.category}</div>
      <h3>${Store.pname(p)}</h3>
      <div class="stars">${stars(p.rating)} <span style="color:var(--faint)">(${p.reviews || 0})</span></div>
      <div class="price-row"><span class="price">${money(p.price)}</span>${p.oldPrice ? `<span class="old">${money(p.oldPrice)}</span>` : ""}</div>
      <div class="product-actions">
        <button class="btn" data-add="${p.id}">${Store.t("addToCart")}</button>
        <a class="btn btn-outline" href="product.html?id=${p.id}">${Store.t("viewDetails")}</a>
      </div>
    </div>
  </article>`;
}

const UI = {
  applyChrome() {
    document.documentElement.lang = Store.lang;
    document.documentElement.setAttribute("data-theme", Store.theme);
    const icon = Store.theme === "dark" ? "fa-moon" : "fa-sun";
    $$("#themeToggle i").forEach((i) => { i.className = `fa-solid ${icon}`; });
    const lab = $("#currentLangLabel");
    if (lab) lab.textContent = Store.lang === "bn" ? "বাংলা" : "English";
    $$("[data-i18n]").forEach((el) => {
      const v = Store.t(el.dataset.i18n);
      if (v) el.textContent = v;
    });
    const s = Store.settings;
    $$("[data-cms=phone]").forEach((el) => { el.textContent = s.phone; });
    $$("[data-cms=email]").forEach((el) => { el.textContent = s.email; });
    $$("[data-cms=address]").forEach((el) => { el.textContent = s.address; });
    this.cartCount();
  },
  cartCount() {
    const n = Store.cart.reduce((s, c) => s + c.qty, 0);
    $$(".cart-badge").forEach((b) => {
      b.textContent = n;
      b.style.display = n ? "grid" : "none";
    });
  },
  renderCart() {
    const body = $("#cartDrawerBody");
    if (!body) return;
    const items = Store.cartItems();
    if (!items.length) {
      body.innerHTML = `<div class="empty">${Store.t("emptyCart")}</div>`;
    } else {
      body.innerHTML = items.map((i) => `<div class="cart-item">
        <div class="hf-ico"><i class="fa-solid ${i.icon}"></i></div>
        <div>
          <h4>${Store.pname(i)}</h4>
          <div class="qty">
            <button data-qty="${i.id}" data-d="-1">−</button>
            <span>${i.qty}</span>
            <button data-qty="${i.id}" data-d="1">+</button>
          </div>
        </div>
        <div>
          <strong>${money(i.line)}</strong><br>
          <button class="btn-ghost btn-sm" data-qty="${i.id}" data-d="0" style="margin-top:.4rem">✕</button>
        </div>
      </div>`).join("");
    }
    const tot = $("#cartTotalValue");
    if (tot) tot.textContent = money(Store.cartTotal());
  },
  openCart(on = true) {
    $("#cartDrawer")?.classList.toggle("open", on);
    $("#cartDrawerOverlay")?.classList.toggle("open", on);
    if (on) this.renderCart();
  },
  renderHome() {
    const cats = $("#categoriesGrid");
    if (cats) {
      cats.innerHTML = Store.categories.map((c) => `<div class="cat-card" data-gocat="${c.name}">
        <div class="cat-ico"><i class="fa-solid ${c.icon}"></i></div>
        <h3>${Store.lang === "bn" && c.nameBn ? c.nameBn : c.name}</h3>
        <p>${Store.lang === "bn" && c.descriptionBn ? c.descriptionBn : c.description}</p>
      </div>`).join("");
    }
    const feat = $("#featuredGrid");
    if (feat) feat.innerHTML = Store.activeProducts().filter((p) => p.featured).slice(0, 8).map(productCard).join("");
    this.renderCatalog();
    const tg = $("#testimonialsGrid");
    if (tg) tg.innerHTML = Store.testimonials.map((t) => `<div class="t-card">
      <div class="t-top"><div class="avatar">${t.initials}</div><div><strong>${t.name}</strong><div class="stars">${stars(t.rating)}</div></div></div>
      <p>“${t.text}”</p>
      <small style="color:var(--faint)">${t.role}</small>
    </div>`).join("");
    const bg = $("#blogGrid");
    if (bg) bg.innerHTML = Store.posts.filter((p) => p.status === "published").slice(0, 4).map((p) => `<article class="blog-card">
      <div class="blog-meta">${p.category} · ${p.readTime}</div>
      <h3>${p.title}</h3>
      <p style="color:var(--muted)">${p.excerpt}</p>
      <a href="blog.html?id=${p.id}" class="gold" style="display:inline-block;margin-top:.6rem">Read</a>
    </article>`).join("");
    const h = Store.pages.hero || {};
    const set = (sel, val) => { const el = $(sel); if (el && val) el.textContent = val; };
    set("[data-cms=hero-badge]", h.badge);
    set("[data-cms=hero-title]", h.title);
    set("[data-cms=hero-highlight]", h.highlight);
    set("[data-cms=hero-subtitle]", h.subtitle);
    set("[data-cms=motto]", Store.settings.motto);
    const a = Store.pages.about || {};
    set("[data-cms=about-title]", a.title);
    set("[data-cms=about-highlight]", a.highlight);
    set("[data-cms=about-p1]", a.p1);
    set("[data-cms=about-p2]", a.p2);
    set("[data-cms=footer-tagline]", (Store.pages.footer || {}).tagline);
  },
  renderCatalog() {
    const grid = $("#productsGrid");
    if (!grid) return;
    let list = Store.activeProducts();
    if (Store.filter !== "all") list = list.filter((p) => p.category === Store.filter);
    if (Store.sort === "priceLow") list = [...list].sort((a, b) => a.price - b.price);
    if (Store.sort === "priceHigh") list = [...list].sort((a, b) => b.price - a.price);
    if (Store.sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (Store.sort === "newest") list = [...list].sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    grid.innerHTML = list.map(productCard).join("") || `<p class="empty">No products in this collection.</p>`;
    const tabs = $("#filterTabs");
    if (tabs && !tabs.dataset.ready) {
      const names = ["all", ...new Set(Store.products.map((p) => p.category))];
      tabs.innerHTML = names.map((n) => `<button class="filter-tab ${n === "all" ? "active" : ""}" data-category="${n}">${n === "all" ? "All" : n}</button>`).join("");
      tabs.dataset.ready = "1";
    }
  },
  bind() {
    $("#themeToggle")?.addEventListener("click", () => {
      Store.theme = Store.theme === "dark" ? "light" : "dark";
      localStorage.setItem(KEY + "theme", Store.theme);
      this.applyChrome();
    });
    $("#langBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      $(".lang-selector")?.classList.toggle("open");
    });
    $$(".lang-option").forEach((b) => b.addEventListener("click", () => {
      Store.lang = b.dataset.lang;
      localStorage.setItem(KEY + "lang", Store.lang);
      location.reload();
    }));
    document.addEventListener("click", () => $(".lang-selector")?.classList.remove("open"));
    $("#mobileMenuBtn")?.addEventListener("click", () => $(".nav-links")?.classList.toggle("open"));
    $("#cartBtn")?.addEventListener("click", () => this.openCart(true));
    $("#cartClose")?.addEventListener("click", () => this.openCart(false));
    $("#cartDrawerOverlay")?.addEventListener("click", () => this.openCart(false));
    $("#checkoutBtn")?.addEventListener("click", () => { location.href = "checkout.html"; });
    $("#searchBtn")?.addEventListener("click", () => $("#searchModal")?.classList.add("open"));
    $("#searchClose")?.addEventListener("click", () => $("#searchModal")?.classList.remove("open"));
    $("#searchInput")?.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      const box = $("#searchResults");
      if (!box) return;
      const hits = Store.activeProducts().filter((p) => Store.pname(p).toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      box.innerHTML = q ? hits.map((p) => `<div class="search-hit" onclick="location.href='product.html?id=${p.id}'"><span>${Store.pname(p)}</span><strong>${money(p.price)}</strong></div>`).join("") || "<p class='empty'>Nothing found</p>" : "";
    });
    $("#accountBtn")?.addEventListener("click", () => {
      if (Auth.session()) location.href = "account.html";
      else $("#authModal")?.classList.add("open");
    });
    $("#authClose")?.addEventListener("click", () => $("#authModal")?.classList.remove("open"));
    $$(".auth-tab").forEach((t) => t.addEventListener("click", () => {
      $$(".auth-tab").forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      $$(".auth-form").forEach((f) => { f.style.display = f.dataset.pane === t.dataset.tab ? "block" : "none"; });
    }));
    $$("[data-switch]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      $(`.auth-tab[data-tab="${a.dataset.switch}"]`)?.click();
    }));
    $("#loginForm")?.addEventListener("submit", (e) => {
      if ($("body.auth-page")) return;
      e.preventDefault();
      const fd = new FormData(e.target);
      const r = Auth.login(fd.get("email"), fd.get("password"));
      if (!r.ok) return toast(r.msg);
      toast("Welcome back");
      location.href = "account.html";
    });
    $("#registerForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(e.target));
      if (fd.password !== fd.confirmPassword) return toast("Passwords do not match");
      const r = Auth.register(fd);
      if (!r.ok) return toast(r.msg);
      toast("Account created");
      location.href = "account.html";
    });
    $("#newsletterForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector("input").value.trim();
      if (!Store.subscribers.includes(email)) {
        Store.subscribers.push(email);
        Store.save("subscribers", Store.subscribers);
      }
      toast("Subscribed");
      e.target.reset();
    });
    document.addEventListener("click", (e) => {
      const add = e.target.closest("[data-add]");
      if (add) Store.addToCart(+add.dataset.add);
      const w = e.target.closest("[data-wish]");
      if (w) Store.toggleWish(+w.dataset.wish);
      const q = e.target.closest("[data-qty]");
      if (q) {
        const id = +q.dataset.qty;
        const line = Store.cart.find((c) => c.id === id);
        const d = +q.dataset.d;
        if (d === 0) Store.setQty(id, 0);
        else Store.setQty(id, (line?.qty || 1) + d);
      }
      const cat = e.target.closest("[data-category]");
      if (cat && cat.closest("#filterTabs")) {
        Store.filter = cat.dataset.category;
        $$("#filterTabs .filter-tab").forEach((t) => t.classList.toggle("active", t === cat));
        this.renderCatalog();
      }
      const gc = e.target.closest("[data-gocat]");
      if (gc) {
        Store.filter = gc.dataset.gocat;
        $$("#filterTabs .filter-tab").forEach((t) => t.classList.toggle("active", t.dataset.category === Store.filter));
        this.renderCatalog();
        document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
      }
    });
    $(".sort-select")?.addEventListener("change", (e) => {
      Store.sort = e.target.value;
      this.renderCatalog();
    });
  }
};

const ProductDetail = {
  render() {
    const box = $("#productDetail");
    if (!box) return;
    const id = +new URLSearchParams(location.search).get("id");
    const p = Store.products.find((x) => x.id === id) || Store.activeProducts()[0];
    if (!p) { box.innerHTML = "<p>Product not found.</p>"; return; }
    document.title = `${Store.pname(p)} · Iqra Mart`;
    box.innerHTML = `<div class="pd">
      <div class="pd-media"><i class="fa-solid ${p.icon}"></i></div>
      <div>
        <div class="product-cat">${p.category}</div>
        <h1>${Store.pname(p)}</h1>
        <div class="stars">${stars(p.rating)} · ${p.reviews || 0} reviews</div>
        <div class="price-row" style="margin:1rem 0"><span class="price" style="font-size:1.6rem">${money(p.price)}</span>${p.oldPrice ? `<span class="old">${money(p.oldPrice)}</span>` : ""}</div>
        <p class="lead">${Store.pdesc(p)}</p>
        <p>${p.stock > 0 ? `<span class="status active">In stock · ${p.stock}</span>` : `<span class="status cancelled">Out of stock</span>`}</p>
        <div class="qty-lg">
          <button class="icon-btn" id="pdMinus">−</button>
          <strong id="pdQty">1</strong>
          <button class="icon-btn" id="pdPlus">+</button>
        </div>
        <div class="hero-actions">
          <button class="btn btn-lg" id="pdAdd">${Store.t("addToCart")}</button>
          <a class="btn btn-outline btn-lg" href="index.html#products">Continue shopping</a>
        </div>
      </div>
    </div>`;
    let q = 1;
    $("#pdMinus").onclick = () => { q = Math.max(1, q - 1); $("#pdQty").textContent = q; };
    $("#pdPlus").onclick = () => { q = Math.min(p.stock, q + 1); $("#pdQty").textContent = q; };
    $("#pdAdd").onclick = () => Store.addToCart(p.id, q);
    const rel = $("#relatedProducts");
    if (rel) rel.innerHTML = Store.activeProducts().filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4).map(productCard).join("");
  }
};

const Checkout = {
  render() {
    const form = $("#checkoutFormContainer");
    const sum = $("#checkoutSummary");
    if (!form || !sum) return;
    const items = Store.cartItems();
    if (!items.length) {
      form.innerHTML = `<p class="empty">Your bag is empty. <a class="gold" href="index.html#products">Shop now</a></p>`;
      sum.innerHTML = "";
      return;
    }
    const user = Auth.current() || {};
    const sub = Store.cartTotal();
    const ship = sub >= (Store.settings.freeShippingThreshold || 1000) ? 0 : 80;
    form.innerHTML = `<form class="checkout-form" id="orderForm">
      <h3>Shipping</h3>
      <div class="form-row">
        <div class="form-group"><label class="form-label">First name</label><input class="form-input" name="firstName" value="${user.firstName || ""}" required></div>
        <div class="form-group"><label class="form-label">Last name</label><input class="form-input" name="lastName" value="${user.lastName || ""}" required></div>
      </div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" name="email" type="email" value="${user.email || ""}" required></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" name="phone" value="${user.phone || ""}" required></div>
      <div class="form-group"><label class="form-label">Address</label><input class="form-input" name="address" required></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">City</label><input class="form-input" name="city" value="Dhaka" required></div>
        <div class="form-group"><label class="form-label">Postal code</label><input class="form-input" name="zip" required></div>
      </div>
      <h3 style="margin:1rem 0 .5rem">Payment</h3>
      <div class="pay-opts">
        <label class="pay-opt"><input type="radio" name="pay" value="cod" checked> Cash on delivery</label>
        <label class="pay-opt"><input type="radio" name="pay" value="bkash"> bKash</label>
        <label class="pay-opt"><input type="radio" name="pay" value="nagad"> Nagad</label>
        <label class="pay-opt"><input type="radio" name="pay" value="card"> Card</label>
      </div>
      <button class="btn btn-lg" style="width:100%;margin-top:1rem">Place order · ${money(sub + ship)}</button>
    </form>`;
    sum.innerHTML = `<h3>Order</h3>${items.map((i) => `<div class="cart-item" style="grid-template-columns:1fr auto"><span>${Store.pname(i)} × ${i.qty}</span><strong>${money(i.line)}</strong></div>`).join("")}
      <div class="cart-total-row"><span>Subtotal</span><span>${money(sub)}</span></div>
      <div class="cart-total-row"><span>Shipping</span><span>${ship ? money(ship) : "Free"}</span></div>
      <div class="cart-total-row"><span>Total</span><span class="total">${money(sub + ship)}</span></div>`;
    $("#orderForm").onsubmit = (e) => {
      e.preventDefault();
      const shipInfo = Object.fromEntries(new FormData(e.target));
      const order = {
        id: "IQ" + uid().toString().slice(-8),
        items: items.map((i) => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
        total: sub + ship, shipping: ship, pay: shipInfo.pay, customer: shipInfo,
        status: "pending", date: new Date().toISOString(), userId: Auth.session()?.id || null
      };
      Store.orders.unshift(order);
      items.forEach((i) => {
        const p = Store.products.find((x) => x.id === i.id);
        if (p) p.stock = Math.max(0, p.stock - i.qty);
      });
      Store.cart = [];
      Store.persistAll();
      form.innerHTML = `<div class="checkout-form"><h2>Thank you.</h2><p>Order <strong>${order.id}</strong> is confirmed. We will reach you at ${shipInfo.phone}.</p><a class="btn" href="index.html" style="margin-top:1rem">Back to store</a></div>`;
    };
  }
};

const AccountPage = {
  render() {
    const root = $("#accountRoot");
    if (!root) return;
    const user = Auth.current();
    if (!user) { location.href = "index.html"; return; }
    const orders = Store.orders.filter((o) => o.userId === user.id || o.customer?.email === user.email);
    root.innerHTML = `<div class="account-wrap">
      <nav class="account-nav">
        <button class="active" data-pane="profile">Profile</button>
        <button data-pane="orders">Orders</button>
        <button data-pane="security">Security</button>
        <button id="accLogout">Log out</button>
      </nav>
      <div>
        <div class="account-panel" data-ap="profile">
          <h2>Profile</h2>
          <form id="profForm">
            <div class="form-row">
              <div class="form-group"><label class="form-label">First name</label><input class="form-input" name="firstName" value="${user.firstName || ""}"></div>
              <div class="form-group"><label class="form-label">Last name</label><input class="form-input" name="lastName" value="${user.lastName || ""}"></div>
            </div>
            <div class="form-group"><label class="form-label">Phone</label><input class="form-input" name="phone" value="${user.phone || ""}"></div>
            <button class="btn">Save</button>
          </form>
        </div>
        <div class="account-panel" data-ap="orders" style="display:none">
          <h2>Orders</h2>
          ${orders.length ? `<table class="admin-table"><thead><tr><th>ID</th><th>Date</th><th>Total</th><th>Status</th></tr></thead><tbody>
            ${orders.map((o) => `<tr><td>${o.id}</td><td>${o.date.slice(0, 10)}</td><td>${money(o.total)}</td><td><span class="status ${o.status}">${o.status}</span></td></tr>`).join("")}
          </tbody></table>` : "<p class='empty'>No orders yet.</p>"}
        </div>
        <div class="account-panel" data-ap="security" style="display:none">
          <h2>Password</h2>
          <form id="passForm">
            <div class="form-group"><label class="form-label">New password</label><input class="form-input" name="password" type="password" minlength="4" required></div>
            <button class="btn">Update</button>
          </form>
        </div>
      </div>
    </div>`;
    $$(".account-nav button[data-pane]").forEach((b) => b.onclick = () => {
      $$(".account-nav button[data-pane]").forEach((x) => x.classList.toggle("active", x === b));
      $$("[data-ap]").forEach((p) => { p.style.display = p.dataset.ap === b.dataset.pane ? "block" : "none"; });
    });
    $("#accLogout").onclick = () => Auth.logout();
    $("#profForm").onsubmit = (e) => {
      e.preventDefault();
      Auth.update(Object.fromEntries(new FormData(e.target)));
      toast("Profile saved");
    };
    $("#passForm").onsubmit = (e) => {
      e.preventDefault();
      Auth.update({ password: new FormData(e.target).get("password") });
      toast("Password updated");
      e.target.reset();
    };
  }
};

const BlogPage = {
  render() {
    const list = $("#blogList");
    const reader = $("#blogReader");
    const posts = Store.posts.filter((p) => p.status === "published");
    const id = +new URLSearchParams(location.search).get("id");
    const one = posts.find((p) => p.id === id);
    if (reader && one) {
      reader.innerHTML = `<article class="blog-card" style="max-width:760px;margin:0 auto">
        <div class="blog-meta">${one.category} · ${one.date} · ${one.readTime}</div>
        <h1 class="section-title">${one.title}</h1>
        <div style="color:var(--muted);margin-top:1rem">${one.content}</div>
      </article>`;
    }
    if (list) list.innerHTML = posts.map((p) => `<article class="blog-card">
      <div class="blog-meta">${p.category} · ${p.date}</div>
      <h3>${p.title}</h3>
      <p style="color:var(--muted)">${p.excerpt}</p>
      <a class="gold" href="blog.html?id=${p.id}">Read</a>
    </article>`).join("");
  }
};

const ContactPage = {
  bind() {
    const f = $("#contactForm");
    if (!f) return;
    f.onsubmit = (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(f));
      Store.messages.unshift({ id: uid(), ...data, date: new Date().toISOString(), read: false });
      Store.save("messages", Store.messages);
      toast("Message sent");
      f.reset();
    };
  }
};

const Admin = {
  switchSection(name) {
    $$(".admin-content-section").forEach((s) => { s.style.display = s.id === "section-" + name ? "block" : "none"; });
    $$(".admin-nav-item[data-section]").forEach((b) => b.classList.toggle("active", b.dataset.section === name));
  },
  renderAll() {
    this.stats();
    this.products();
    this.categories();
    this.orders();
    this.posts();
    this.testimonials();
    this.subscribers();
    this.messages();
    this.settingsForm();
    this.pagesForm();
  },
  stats() {
    const el = $("#adminStats");
    if (!el) return;
    const rev = Store.orders.reduce((s, o) => s + (o.status !== "cancelled" ? o.total : 0), 0);
    el.innerHTML = [
      ["Products", Store.products.length],
      ["Orders", Store.orders.length],
      ["Revenue", money(rev)],
      ["Messages", Store.messages.length]
    ].map(([l, v]) => `<div class="admin-stat"><b>${v}</b><span>${l}</span></div>`).join("");
    const ro = $("#recentOrders");
    if (ro) ro.innerHTML = Store.orders.slice(0, 5).map((o) => `<div class="cart-item" style="grid-template-columns:1fr auto"><span>${o.id} · ${o.customer?.firstName || ""}</span><span class="status ${o.status}">${o.status}</span></div>`).join("") || "<p class='empty'>No orders</p>";
    const tp = $("#topProducts");
    if (tp) tp.innerHTML = [...Store.products].sort((a, b) => b.reviews - a.reviews).slice(0, 5).map((p) => `<div class="cart-item" style="grid-template-columns:1fr auto"><span>${p.name}</span><span>${p.reviews}</span></div>`).join("");
  },
  products() {
    const tb = $("#productsTableBody");
    if (!tb) return;
    const q = ($("#productSearch")?.value || "").toLowerCase();
    tb.innerHTML = Store.products.filter((p) => p.name.toLowerCase().includes(q)).map((p) => `<tr>
      <td><i class="fa-solid ${p.icon}"></i></td>
      <td>${p.name}</td><td>${p.category}</td><td>${money(p.price)}</td>
      <td><span class="status ${p.status || "active"}">${p.status || "active"}</span></td>
      <td>${p.stock}</td>
      <td><button class="btn-sm btn-outline" data-edp="${p.id}">Edit</button>
          <button class="btn-sm btn-ghost" data-delp="${p.id}">Delete</button></td>
    </tr>`).join("");
    const sel = $("[name=category]", $("#productForm") || document);
    if (sel && sel.tagName === "SELECT") {
      sel.innerHTML = Store.categories.map((c) => `<option>${c.name}</option>`).join("");
    }
  },
  categories() {
    const tb = $("#categoriesTableBody");
    if (!tb) return;
    tb.innerHTML = Store.categories.map((c) => `<tr>
      <td><i class="fa-solid ${c.icon}"></i></td><td>${c.name}</td><td>${c.description}</td>
      <td>${Store.products.filter((p) => p.category === c.name).length}</td>
      <td><button class="btn-sm btn-outline" data-edc="${c.id}">Edit</button>
          <button class="btn-sm btn-ghost" data-delc="${c.id}">Delete</button></td>
    </tr>`).join("");
  },
  orders() {
    const tb = $("#ordersTableBody");
    if (!tb) return;
    tb.innerHTML = Store.orders.map((o) => `<tr>
      <td>${o.id}</td><td>${o.customer?.firstName || ""} ${o.customer?.lastName || ""}</td>
      <td>${(o.date || "").slice(0, 10)}</td><td>${o.items?.length || 0}</td><td>${money(o.total)}</td>
      <td><select data-ost="${o.id}" class="form-select" style="width:auto">
        ${["pending", "processing", "shipped", "delivered", "cancelled"].map((s) => `<option ${o.status === s ? "selected" : ""}>${s}</option>`).join("")}
      </select></td>
      <td><button class="btn-sm btn-outline" data-vo="${o.id}">View</button>
          <button class="btn-sm btn-ghost" data-delo="${o.id}">Delete</button></td>
    </tr>`).join("");
  },
  posts() {
    const tb = $("#postsTableBody");
    if (!tb) return;
    tb.innerHTML = Store.posts.map((p) => `<tr>
      <td><i class="fa-solid ${p.icon}"></i></td><td>${p.title}</td><td>${p.category}</td><td>${p.date}</td>
      <td><span class="status ${p.status}">${p.status}</span></td>
      <td><button class="btn-sm btn-outline" data-edpost="${p.id}">Edit</button>
          <button class="btn-sm btn-ghost" data-delpost="${p.id}">Delete</button></td>
    </tr>`).join("");
  },
  testimonials() {
    const tb = $("#testimonialsTableBody");
    if (!tb) return;
    tb.innerHTML = Store.testimonials.map((t) => `<tr>
      <td>${t.name}</td><td>${t.role}</td><td>${t.text.slice(0, 48)}…</td><td>${t.rating}</td>
      <td><button class="btn-sm btn-outline" data-edt="${t.id}">Edit</button>
          <button class="btn-sm btn-ghost" data-delt="${t.id}">Delete</button></td>
    </tr>`).join("");
  },
  subscribers() {
    const tb = $("#subscribersTableBody");
    if (!tb) return;
    tb.innerHTML = Store.subscribers.map((e, i) => `<tr><td>${e}</td><td>—</td><td><button class="btn-sm btn-ghost" data-delsub="${i}">Remove</button></td></tr>`).join() || "<tr><td colspan='3'>None yet</td></tr>";
  },
  messages() {
    const tb = $("#messagesTableBody");
    if (!tb) return;
    tb.innerHTML = Store.messages.map((m) => `<tr>
      <td>${m.name || m.email}</td><td>${m.subject || ""}</td><td>${(m.date || "").slice(0, 10)}</td>
      <td><button class="btn-sm btn-outline" data-vm="${m.id}">Read</button>
          <button class="btn-sm btn-ghost" data-delm="${m.id}">Delete</button></td>
    </tr>`).join() || "<tr><td colspan='4'>No messages</td></tr>";
  },
  settingsForm() {
    const f = $("#settingsForm");
    if (!f) return;
    const s = Store.settings;
    f.siteName.value = s.siteName || "";
    f.tagline.value = s.tagline || "";
    f.motto.value = s.motto || "";
    f.repoUrl.value = s.repoUrl || "";
    f.email.value = s.email || "";
    f.phone.value = s.phone || "";
    f.address.value = s.address || "";
    f.currency.value = s.currency || "৳";
    f.freeShippingThreshold.value = s.freeShippingThreshold || 1000;
    f.adminUsername.value = s.adminCredentials?.username || "admin";
    f.facebook.value = s.facebook || "";
    f.twitter.value = s.twitter || "";
    f.instagram.value = s.instagram || "";
    f.linkedin.value = s.linkedin || "";
  },
  pagesForm() {
    this.drawPage("hero");
  },
  drawPage(which) {
    const box = $("#pageContent");
    if (!box) return;
    const p = Store.pages[which] || {};
    box.innerHTML = Object.keys(p).map((k) => `<div class="form-group"><label class="form-label">${k}</label><textarea class="form-textarea" name="${k}">${p[k] || ""}</textarea></div>`).join("");
    box.dataset.page = which;
  },
  openModal(id) { $("#" + id)?.classList.add("open"); },
  closeModals() { $$(".modal").forEach((m) => m.classList.remove("open")); },
  fill(form, obj) {
    [...form.elements].forEach((el) => {
      if (!el.name || el.type === "submit") return;
      if (obj[el.name] !== undefined && obj[el.name] !== null) el.value = obj[el.name];
    });
  },
  bind() {
    if (!$(".admin-layout")) return;
    if (!AdminAuth.is()) { location.href = "admin-login.html"; return; }
    this.renderAll();
    $$(".admin-nav-item[data-section]").forEach((b) => b.onclick = () => this.switchSection(b.dataset.section));
    $("#adminLogout")?.addEventListener("click", () => AdminAuth.logout());
    $("#adminSidebarToggle")?.addEventListener("click", () => { $(".admin-sidebar")?.classList.add("open"); $("#adminSidebarOverlay")?.classList.add("open"); });
    $("#adminSidebarClose")?.addEventListener("click", () => { $(".admin-sidebar")?.classList.remove("open"); $("#adminSidebarOverlay")?.classList.remove("open"); });
    $("#adminSidebarOverlay")?.addEventListener("click", () => { $(".admin-sidebar")?.classList.remove("open"); $("#adminSidebarOverlay")?.classList.remove("open"); });
    $$("[data-open-modal]").forEach((b) => b.onclick = () => {
      const id = b.dataset.openModal;
      const form = $("#" + id.replace("Modal", "Form"));
      if (form) form.reset();
      this.openModal(id);
    });
    $$("[data-close-modal]").forEach((b) => b.onclick = () => this.closeModals());
    $("#productSearch")?.addEventListener("input", () => this.products());
    $$("#pageTabs .tab").forEach((t) => t.onclick = () => {
      $$("#pageTabs .tab").forEach((x) => x.classList.toggle("active", x === t));
      this.drawPage(t.dataset.page);
    });
    $("#pagesForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const which = $("#pageContent").dataset.page;
      Store.pages[which] = Object.fromEntries(new FormData(e.target));
      Store.save("pages", Store.pages);
      toast("Pages saved");
    });
    $("#settingsForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      Store.settings = {
        ...Store.settings,
        siteName: fd.get("siteName"),
        tagline: fd.get("tagline"),
        motto: fd.get("motto"),
        repoUrl: fd.get("repoUrl"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        address: fd.get("address"),
        currency: fd.get("currency"),
        freeShippingThreshold: +fd.get("freeShippingThreshold"),
        facebook: fd.get("facebook"),
        twitter: fd.get("twitter"),
        instagram: fd.get("instagram"),
        linkedin: fd.get("linkedin"),
        adminCredentials: {
          username: fd.get("adminUsername"),
          password: fd.get("adminPassword") || Store.settings.adminCredentials.password
        }
      };
      Store.save("settings", Store.settings);
      toast("Settings saved");
    });
    $("#productForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      d.price = +d.price; d.oldPrice = d.oldPrice ? +d.oldPrice : null;
      d.stock = +d.stock; d.rating = +d.rating; d.featured = d.featured === "true";
      d.status = "active";
      if (d.id) {
        const i = Store.products.findIndex((p) => p.id == d.id);
        Store.products[i] = { ...Store.products[i], ...d, id: +d.id };
      } else {
        Store.products.push({ ...d, id: uid(), reviews: 0, createdAt: new Date().toISOString().slice(0, 10) });
      }
      Store.save("products", Store.products);
      this.closeModals(); this.products(); this.stats(); toast("Product saved");
    });
    $("#categoryForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      if (d.id) {
        const i = Store.categories.findIndex((c) => c.id == d.id);
        Store.categories[i] = { ...Store.categories[i], ...d };
      } else Store.categories.push({ ...d, id: d.name.toLowerCase().replace(/\s+/g, "-") });
      Store.save("categories", Store.categories);
      this.closeModals(); this.categories(); toast("Category saved");
    });
    $("#postForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      if (d.id) {
        const i = Store.posts.findIndex((p) => p.id == d.id);
        Store.posts[i] = { ...Store.posts[i], ...d, id: +d.id };
      } else Store.posts.push({ ...d, id: uid(), date: new Date().toISOString().slice(0, 10) });
      Store.save("posts", Store.posts);
      this.closeModals(); this.posts(); toast("Post saved");
    });
    $("#testimonialForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      d.rating = +d.rating;
      if (d.id) {
        const i = Store.testimonials.findIndex((t) => t.id == d.id);
        Store.testimonials[i] = { ...Store.testimonials[i], ...d, id: +d.id };
      } else Store.testimonials.push({ ...d, id: uid() });
      Store.save("testimonials", Store.testimonials);
      this.closeModals(); this.testimonials(); toast("Saved");
    });
    document.addEventListener("click", (e) => {
      const edp = e.target.closest("[data-edp]");
      if (edp) {
        const p = Store.products.find((x) => x.id == edp.dataset.edp);
        this.fill($("#productForm"), { ...p, featured: String(!!p.featured) });
        this.openModal("productModal");
      }
      const delp = e.target.closest("[data-delp]");
      if (delp && confirm("Delete product?")) {
        Store.products = Store.products.filter((p) => p.id != delp.dataset.delp);
        Store.save("products", Store.products); this.products();
      }
      const edc = e.target.closest("[data-edc]");
      if (edc) {
        this.fill($("#categoryForm"), Store.categories.find((c) => c.id == edc.dataset.edc));
        this.openModal("categoryModal");
      }
      const delc = e.target.closest("[data-delc]");
      if (delc && confirm("Delete category?")) {
        Store.categories = Store.categories.filter((c) => c.id != delc.dataset.delc);
        Store.save("categories", Store.categories); this.categories();
      }
      const edpost = e.target.closest("[data-edpost]");
      if (edpost) {
        this.fill($("#postForm"), Store.posts.find((p) => p.id == edpost.dataset.edpost));
        this.openModal("postModal");
      }
      const delpost = e.target.closest("[data-delpost]");
      if (delpost && confirm("Delete post?")) {
        Store.posts = Store.posts.filter((p) => p.id != delpost.dataset.delpost);
        Store.save("posts", Store.posts); this.posts();
      }
      const edt = e.target.closest("[data-edt]");
      if (edt) {
        this.fill($("#testimonialForm"), Store.testimonials.find((t) => t.id == edt.dataset.edt));
        this.openModal("testimonialModal");
      }
      const delt = e.target.closest("[data-delt]");
      if (delt && confirm("Delete?")) {
        Store.testimonials = Store.testimonials.filter((t) => t.id != delt.dataset.delt);
        Store.save("testimonials", Store.testimonials); this.testimonials();
      }
      const vo = e.target.closest("[data-vo]");
      if (vo) {
        const o = Store.orders.find((x) => x.id == vo.dataset.vo);
        $("#orderContent").innerHTML = `<p><strong>${o.id}</strong> · ${o.status}</p>
          <p>${o.customer?.firstName} ${o.customer?.lastName}<br>${o.customer?.address}, ${o.customer?.city}<br>${o.customer?.phone}</p>
          <ul>${o.items.map((i) => `<li>${i.name} × ${i.qty} — ${money(i.price * i.qty)}</li>`).join("")}</ul>
          <p>Total ${money(o.total)} · ${o.pay}</p>`;
        this.openModal("orderModal");
      }
      const delo = e.target.closest("[data-delo]");
      if (delo && confirm("Delete order?")) {
        Store.orders = Store.orders.filter((o) => o.id != delo.dataset.delo);
        Store.save("orders", Store.orders); this.orders(); this.stats();
      }
      const vm = e.target.closest("[data-vm]");
      if (vm) {
        const m = Store.messages.find((x) => x.id == vm.dataset.vm);
        alert(`${m.name} <${m.email}>\n${m.subject}\n\n${m.message}`);
      }
      const delm = e.target.closest("[data-delm]");
      if (delm) {
        Store.messages = Store.messages.filter((m) => m.id != delm.dataset.delm);
        Store.save("messages", Store.messages); this.messages();
      }
      const ds = e.target.closest("[data-delsub]");
      if (ds) {
        Store.subscribers.splice(+ds.dataset.delsub, 1);
        Store.save("subscribers", Store.subscribers); this.subscribers();
      }
    });
    document.addEventListener("change", (e) => {
      const s = e.target.closest("[data-ost]");
      if (s) {
        const o = Store.orders.find((x) => x.id == s.dataset.ost);
        if (o) { o.status = s.value; Store.save("orders", Store.orders); this.stats(); }
      }
    });
  }
};

function boot() {
  Store.load();
  UI.applyChrome();
  UI.bind();
  UI.renderHome();
  ProductDetail.render();
  Checkout.render();
  AccountPage.render();
  BlogPage.render();
  ContactPage.bind();
  if ($(".admin-layout")) Admin.bind();
  if ($("body.auth-page")) {
    $("#loginForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      if (AdminAuth.login(fd.get("username"), fd.get("password"))) location.href = "admin.html";
      else toast("Invalid admin login");
    });
  }
}

document.addEventListener("DOMContentLoaded", boot);
window.Store = Store;
window.Admin = Admin;
window.Auth = Auth;
