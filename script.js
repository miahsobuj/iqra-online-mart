/* ==========================================================================
   IQRA ONLINE MART — CORE APPLICATION ENGINE (INTERNATIONAL STANDARD)
   Features: Multi-currency, i18n (EN/BN), Audio FX, Faceted Search, CMS,
             Interactive Checkout, Live Chatbot, PWA, DOM XSS Sanitization
   ========================================================================== */

"use strict";

const STORE_KEY = "iqra2_";

// HTML Sanitizer to prevent DOM & Stored XSS
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const uid = () => Date.now() + Math.floor(Math.random() * 9999);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ==========================================================================
   CURRENCIES & CONVERSION RATES (Base: BDT)
   ========================================================================== */
const CURRENCIES = {
  BDT: { symbol: "৳", rate: 1, label: "BDT (৳)", locale: "en-BD" },
  USD: { symbol: "$", rate: 0.00833, label: "USD ($)", locale: "en-US" },
  EUR: { symbol: "€", rate: 0.00769, label: "EUR (€)", locale: "de-DE" },
  GBP: { symbol: "£", rate: 0.00658, label: "GBP (£)", locale: "en-GB" },
  SAR: { symbol: "﷼", rate: 0.03125, label: "SAR (﷼)", locale: "ar-SA" },
  AED: { symbol: "AED ", rate: 0.03077, label: "AED (د.إ)", locale: "en-AE" },
  INR: { symbol: "₹", rate: 0.70, label: "INR (₹)", locale: "en-IN" }
};

/* ==========================================================================
   SOUND EFFECTS SYNTHESIZER (Web Audio API — Zero External Audio Files)
   ========================================================================== */
const SoundFX = {
  ctx: null,
  enabled: true,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  play(type = "click") {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;
      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === "chime") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "success") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      // Audio autoplay policy catch
    }
  }
};

/* ==========================================================================
   DEFAULT CATALOG DATA & ASSETS
   ========================================================================== */
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    sku: "EL-HP-001",
    name: "Wireless Active Noise Cancelling Headphones",
    nameBn: "ওয়্যারলেস অ্যাক্টিভ নয়েজ ক্যানসেলিং হেডফোন",
    price: 3499,
    oldPrice: 4999,
    category: "Electronics",
    rating: 4.8,
    reviews: 142,
    badge: "hot",
    icon: "fa-headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium studio-grade ANC wireless headphones with 40-hour battery life, high-res audio drivers, and plush memory foam earcups.",
    descriptionBn: "স্টুডিও গ্রেড অ্যাক্টিভ নয়েজ ক্যান্সেলেশন ও ৪০ ঘণ্টার দীর্ঘস্থায়ী ব্যাটারি ব্যাকআপযুক্ত প্রিমিয়াম হেডফোন।",
    specs: { "Brand": "AuraSound", "Battery": "40 Hours ANC On", "Connectivity": "Bluetooth 5.3 & 3.5mm", "Weight": "250g", "Warranty": "1 Year Official" },
    colors: ["Midnight Black", "Champagne Gold", "Silver Mist"],
    sizes: ["Standard"],
    stock: 28,
    featured: true,
    status: "active",
    createdAt: "2026-02-15"
  },
  {
    id: 2,
    sku: "EL-SW-002",
    name: "Apex Smart Watch Ultra Series 5",
    nameBn: "অ্যাপেক্স স্মার্ট ওয়াচ আল্ট্রা সিরিজ ৫",
    price: 5499,
    oldPrice: 7999,
    category: "Electronics",
    rating: 4.9,
    reviews: 98,
    badge: "new",
    icon: "fa-clock",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Aerospace titanium casing, AMOLED sapphire glass, continuous heart-rate & SpO2 monitoring, and 50m water resistance.",
    descriptionBn: "টাইটানিয়াম বডি, অ্যামোলেড স্যাফায়ার ডিসপ্লে, হার্ট রেট ও রক্তে অক্সিজেন মনিটরিং এবং ৫০ মিটার ওয়াটারপ্রুফ।",
    specs: { "Brand": "Apex", "Display": "1.96\" AMOLED", "Water Resistance": "5 ATM", "Sensors": "Optical HR, SpO2, GPS", "Warranty": "2 Years" },
    colors: ["Titanium Grey", "Obsidian Black", "Gold Accent"],
    sizes: ["45mm", "49mm"],
    stock: 22,
    featured: true,
    status: "active",
    createdAt: "2026-02-20"
  },
  {
    id: 3,
    sku: "FA-TS-003",
    name: "Luxury Heavyweight Supima Cotton T-Shirt",
    nameBn: "লাক্সারি সুপিমা কটন প্রিমিয়াম টি-শার্ট",
    price: 899,
    oldPrice: 1299,
    category: "Fashion",
    rating: 4.7,
    reviews: 210,
    badge: "sale",
    icon: "fa-shirt",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Crafted from 100% long-staple Supima cotton. 240 GSM heavy fabric with pre-shrunk silky handfeel.",
    descriptionBn: "১০০% প্রিমিয়াম সুপিমা কটনে তৈরি ২৪০ জিএসএম টেকসই ও নরম টি-শার্ট।",
    specs: { "Fabric": "100% Supima Cotton", "GSM": "240 Heavyweight", "Fit": "Relaxed Tailored", "Origin": "Bangladesh" },
    colors: ["Obsidian Black", "Off-White", "Sage Green", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 140,
    featured: true,
    status: "active",
    createdAt: "2026-02-05"
  },
  {
    id: 4,
    sku: "FA-HB-004",
    name: "Artisan Handcrafted Leather Tote Bag",
    nameBn: "হস্তনির্মিত খাঁটি চামড়ার টোট ব্যাগ",
    price: 3899,
    oldPrice: 5200,
    category: "Fashion",
    rating: 4.8,
    reviews: 84,
    badge: "hot",
    icon: "fa-bag-shopping",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Full-grain vegetable-tanned leather tote with solid brass hardware, laptop divider, and reinforced straps.",
    descriptionBn: "ফুল গ্রেইন লেদার ও ব্রাস হার্ডওয়্যার দিয়ে তৈরি টেকসই এবং দৃষ্টিনন্দন ব্যাগ।",
    specs: { "Material": "Full Grain Leather", "Compartment": "Fits 15.6\" Laptop", "Hardware": "Solid Brass", "Origin": "Hazaribagh, BD" },
    colors: ["Vintage Tan", "Deep Espresso", "Black Onyx"],
    sizes: ["Medium (14L)", "Large (18L)"],
    stock: 35,
    featured: true,
    status: "active",
    createdAt: "2026-01-28"
  },
  {
    id: 5,
    sku: "HL-CT-005",
    name: "Minimalist Solid Oak & Tempered Glass Table",
    nameBn: "মিনিমালিস্ট সলিড ওক কাঠ ও গ্লাস টেবিল",
    price: 6499,
    oldPrice: 8500,
    category: "Home & Living",
    rating: 4.6,
    reviews: 38,
    badge: null,
    icon: "fa-table",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Scandinavian minimalist coffee table featuring 10mm tempered safety glass and kiln-dried white oak base.",
    descriptionBn: "১০ মিলিমিটার টেম্পার্ড গ্লাস ও সিজন করা সাদা ওক কাঠের আধুনিক ড্রয়িং টেবিল।",
    specs: { "Top Material": "10mm Tempered Glass", "Base": "Solid White Oak", "Dimensions": "100 x 55 x 45 cm", "Assembly": "Tool-free 5 mins" },
    colors: ["Natural Oak", "Walnut Finish"],
    sizes: ["Standard"],
    stock: 14,
    featured: false,
    status: "active",
    createdAt: "2026-02-12"
  },
  {
    id: 6,
    sku: "HL-BS-006",
    name: "Organic Egyptian Cotton 400TC Bedding Set",
    nameBn: "অর্গানিক মিশরীয় কটন ৪০০টিসি বেডিং সেট",
    price: 3299,
    oldPrice: 4500,
    category: "Home & Living",
    rating: 4.9,
    reviews: 115,
    badge: "sale",
    icon: "fa-bed",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Silky soft 400 thread-count sateen weave organic cotton. Includes 1 fitted sheet, 1 duvet cover, and 2 pillowcases.",
    descriptionBn: "৪০০ থ্রেড কাউন্ট অর্গানিক কটন শিট, ডুভেট কাভার ও বালিশের কাভারের বিলাসবহুল সেট।",
    specs: { "Thread Count": "400 TC", "Weave": "Sateen Luxury", "Certification": "OEKO-TEX Standard 100", "Pieces": "4 Piece Set" },
    colors: ["Champagne Cream", "Slate Grey", "Midnight Navy", "Ivory White"],
    sizes: ["Queen (7.5x6.5 ft)", "King (8x7 ft)"],
    stock: 45,
    featured: true,
    status: "active",
    createdAt: "2026-02-01"
  },
  {
    id: 7,
    sku: "BK-PY-007",
    name: "Modern Python & AI Systems Architecture Guide",
    nameBn: "পাইথন ও এআই সিস্টেম আর্কিটেকচার গাইড",
    price: 950,
    oldPrice: 1200,
    category: "Books & Education",
    rating: 4.9,
    reviews: 320,
    badge: "hot",
    icon: "fa-book",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Comprehensive guide to building production-grade on-device AI, local LLM orchestration, and high-performance Python services.",
    descriptionBn: "অন-ডিভাইস এআই, লোকাল এলএলএম ও উচ্চক্ষমতাসম্পন্ন সিস্টেম তৈরির বিশদ নির্দেশিকা।",
    specs: { "Author": "Engineering Press", "Pages": "480 Hardcover", "Language": "English & Bangla Notes", "Edition": "2026 Updated" },
    colors: ["Standard Edition"],
    sizes: ["Hardcover Book", "Bundle + E-Book"],
    stock: 180,
    featured: true,
    status: "active",
    createdAt: "2026-01-10"
  },
  {
    id: 8,
    sku: "SP-YM-008",
    name: "Eco-Friendly Natural Rubber Yoga Mat (6mm)",
    nameBn: "ইকো-ফ্রেন্ডলি প্রাকৃতিক রাবার যোগ ম্যাট",
    price: 1199,
    oldPrice: 1699,
    category: "Sports & Fitness",
    rating: 4.7,
    reviews: 176,
    badge: "sale",
    icon: "fa-person-running",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "High-density natural tree rubber with laser-etched body alignment lines and non-slip textured grip.",
    descriptionBn: "প্রাকৃতিক রাবার দ্বারা তৈরি নন-স্লিপ গ্রিপযুক্ত ৬ মিমি কুশন ম্যাট।",
    specs: { "Material": "Natural Tree Rubber + PU", "Thickness": "6mm Cushioned", "Dimensions": "183 x 68 cm", "Weight": "2.6 kg" },
    colors: ["Obsidian Black", "Forest Green", "Dusty Rose"],
    sizes: ["Standard 6mm"],
    stock: 62,
    featured: false,
    status: "active",
    createdAt: "2026-02-18"
  },
  {
    id: 9,
    sku: "GR-BR-009",
    name: "Royal Supreme Aged Basmati Rice 5kg",
    nameBn: "রয়্যাল সুপ্রিম ২ বছর পুরনো বাসমতি চাল ৫ কেজি",
    price: 780,
    oldPrice: 920,
    category: "Groceries",
    rating: 4.9,
    reviews: 189,
    badge: "hot",
    icon: "fa-basket-shopping",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "2-year aged long-grain aromatic basmati rice. Perfect elongation and non-sticky texture for premium Biryani & Pulao.",
    descriptionBn: "বিরিয়ানি ও পোলাও রান্নার জন্য ২ বছর পুরনো খাঁটি সুগন্ধি বাসমতি চাল।",
    specs: { "Origin": "Punjab Valley", "Age": "2 Years Matured", "Pack Size": "5 kg Air-tight Sack", "Grain Length": "8.4 mm+" },
    colors: ["Standard"],
    sizes: ["5 kg Pack", "10 kg Pack", "25 kg Sack"],
    stock: 210,
    featured: true,
    status: "active",
    createdAt: "2026-03-01"
  },
  {
    id: 10,
    sku: "GR-HN-010",
    name: "Raw Wildflower Organic Honey 500g",
    nameBn: "সুন্দরবনের খাঁটি প্রাকৃতিক মধু ৫০০ গ্রাম",
    price: 580,
    oldPrice: 700,
    category: "Groceries",
    rating: 4.9,
    reviews: 245,
    badge: null,
    icon: "fa-jar",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
    ],
    description: "100% pure raw unfiltered honey collected directly from natural beehives. Zero added sugar or preservatives.",
    descriptionBn: "কোনো প্রকার কৃত্রিম চিনি বা প্রিজারভেটিভ ছাড়া সুন্দরবনের প্রাকৃতিক খাঁটি মধু।",
    specs: { "Source": "Sundarbans Flora", "Processing": "Cold Unfiltered Raw", "Purity": "100% Lab Tested", "Net Weight": "500g Glass Jar" },
    colors: ["Golden Amber"],
    sizes: ["250g Jar", "500g Jar", "1000g Family Pack"],
    stock: 130,
    featured: true,
    status: "active",
    createdAt: "2026-03-05"
  },
  {
    id: 11,
    sku: "BC-VC-011",
    name: "Radiance 20% Vitamin C + Hyaluronic Acid Serum",
    nameBn: "রেডিয়েন্স ২০% ভিটামিন সি ও হায়ালুরোনিক অ্যাসিড সিরাম",
    price: 790,
    oldPrice: 1150,
    category: "Beauty & Care",
    rating: 4.8,
    reviews: 198,
    badge: "sale",
    icon: "fa-spa",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Potent brightening and anti-aging serum with stabilized L-Ascorbic acid, Ferulic acid, and pure botanicals.",
    descriptionBn: "ত্বকের উজ্জ্বলতা বৃদ্ধি ও অ্যান্টি-এজিং ফর্মুলা সমৃদ্ধ অর্গানিক সিরাম।",
    specs: { "Key Actives": "20% Vitamin C, 1% Ferulic, Hyaluronic", "Volume": "30ml Dropper", "Skin Type": "All Skin Types", "Paraben Free": "Yes" },
    colors: ["Standard"],
    sizes: ["30ml Bottle", "50ml Value Pack"],
    stock: 88,
    featured: true,
    status: "active",
    createdAt: "2026-02-22"
  },
  {
    id: 12,
    sku: "EL-KB-012",
    name: "Vanguard 75% Wireless Mechanical Keyboard",
    nameBn: "ভ্যানগার্ড ৭৫% ওয়্যারলেস মেকানিক্যাল কীবোর্ড",
    price: 4299,
    oldPrice: 5800,
    category: "Electronics",
    rating: 4.9,
    reviews: 164,
    badge: "new",
    icon: "fa-keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "CNC Aluminum chassis, hot-swappable tactile switches, gasket mounted acoustics, RGB per-key backlighting, and Tri-mode wireless.",
    descriptionBn: "সিএনসি অ্যালুমিনিয়াম বডি, হট-সোয়াপ গ্যাস্কেট মাউন্টেড মেকানিক্যাল কীবোর্ড।",
    specs: { "Layout": "75% Compact (82 Keys)", "Switches": "Pre-lubed Gateron Yellow", "Connectivity": "2.4GHz + BT 5.1 + Type-C", "Battery": "4000 mAh" },
    colors: ["Obsidian Black", "Chalk White & Gold", "Retro Grey"],
    sizes: ["Standard ANSI"],
    stock: 31,
    featured: true,
    status: "active",
    createdAt: "2026-03-02"
  }
];

const DEFAULT_CATEGORIES = [
  { id: "electronics", name: "Electronics", nameBn: "ইলেকট্রনিক্স", icon: "fa-laptop", description: "Audio, wearables, computing & smart accessories", descriptionBn: "অডিও, ওয়্যারেবল ও স্মার্ট গ্যাজেটস" },
  { id: "fashion", name: "Fashion", nameBn: "ফ্যাশন", icon: "fa-shirt", description: "Apparel, leather craft & lifestyle goods", descriptionBn: "পোশাক ও প্রিমিয়াম চামড়ার পণ্য" },
  { id: "home", name: "Home & Living", nameBn: "ঘর ও বসবাস", icon: "fa-house", description: "Minimalist furniture & luxury bedding", descriptionBn: "আসবাবপত্র ও আরামদায়ক বেডিং" },
  { id: "groceries", name: "Groceries", nameBn: "মুদিখানা", icon: "fa-basket-shopping", description: "Aged basmati, pure honey & organic pantry", descriptionBn: "খাঁটি মধু ও অর্গানিক খাদ্যপণ্য" },
  { id: "beauty", name: "Beauty & Care", nameBn: "সৌন্দর্য ও যত্ন", icon: "fa-spa", description: "Clean skincare & holistic wellness formulas", descriptionBn: "ত্বকের যত্ন ও অর্গানিক প্রসাধনী" },
  { id: "books", name: "Books & Education", nameBn: "বই ও শিক্ষা", icon: "fa-book", description: "Engineering, system design & literature", descriptionBn: "প্রকৌশল ও জ্ঞানচর্চার বই" },
  { id: "sports", name: "Sports & Fitness", nameBn: "খেলা ও ফিটনেস", icon: "fa-dumbbell", description: "Yoga, movement & training essentials", descriptionBn: "ব্যায়াম ও ফিটনেস সরঞ্জাম" }
];

const DEFAULT_COUPONS = [
  { code: "WELCOME10", type: "percent", value: 10, minOrder: 500, description: "10% off for new customers" },
  { code: "IQRA2026", type: "percent", value: 15, minOrder: 2000, description: "15% off on orders over ৳2,000" },
  { code: "FREESHIP", type: "shipping", value: 100, minOrder: 0, description: "Free nationwide delivery" },
  { code: "EID500", type: "fixed", value: 500, minOrder: 3000, description: "৳500 flat discount over ৳3,000" }
];

const DEFAULT_POSTS = [
  {
    id: 1,
    title: "The Architecture of Quiet Luxury in Everyday Objects",
    titleBn: "দৈনন্দিন জীবনে শান্ত আভিজাত্যের গুরুত্ব",
    category: "Philosophy",
    date: "2026-03-15",
    readTime: "4 min",
    icon: "fa-gem",
    excerpt: "Why fewer, better products transform both your workspace and your state of mind.",
    content: "<p>In an age saturated with disposable goods and planned obsolescence, choosing intention over volume is a form of quiet rebellion. At Iqra Online Mart, our curation follows a simple architectural doctrine: everything we stock must age gracefully, function with precision, and respect the human who holds it.</p><h3>The Longevity Standard</h3><p>From 400-thread-count Egyptian cotton to CNC-machined mechanical keyboards, we look for honest craftsmanship. When an object is built properly, you buy it once.</p>",
    status: "published"
  },
  {
    id: 2,
    title: "How to Build a Focused Remote Work Environment",
    titleBn: "একটি কার্যকর রিমোট ওয়ার্কস্পেস সাজানোর উপায়",
    category: "Productivity",
    date: "2026-03-10",
    readTime: "5 min",
    icon: "fa-laptop",
    excerpt: "Audio isolation, tactile feedback, and ergonomic lighting for deep engineering work.",
    content: "<p>High-leverage work requires sensory calm. ANC headphones create an acoustic boundary, while mechanical switches provide positive tactile confirmation of every keypress. When you strip away visual clutter, concentration follows naturally.</p>",
    status: "published"
  }
];

const DEFAULT_TESTIMONIALS = [
  { id: 1, name: "Ayesha Rahman", role: "Software Engineer · Dhaka", text: "The ANC headphones and keyboard exceeded my expectations. Fast next-day dispatch to Dhanmondi.", rating: 5, initials: "AR" },
  { id: 2, name: "Tanvir Hasan", role: "Architect · Chattogram", text: "Cash on delivery was seamless. The packaging and build quality are truly international grade.", rating: 5, initials: "TH" },
  { id: 3, name: "Dr. Nusrat Jahan", role: "Physician · Savar", text: "Sundarbans raw honey and Egyptian cotton sheets are 100% authentic. Will be a lifelong customer.", rating: 5, initials: "NJ" }
];

const DEFAULT_SETTINGS = {
  siteName: "Iqra Online Mart",
  motto: "Quality Over Quantity",
  tagline: "Considered goods for everyday life in Bangladesh.",
  email: "iqrabintesobuj@gmail.com",
  phone: "+880 1617 040846",
  address: "Savar-1340, Dhaka, Bangladesh",
  currency: "BDT",
  freeShippingThreshold: 1500,
  standardShippingFee: 80,
  expressShippingFee: 160,
  repoUrl: "https://github.com/soobujmiah/iqra-online-mart",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  adminCredentials: { username: "admin", password: "admin123" }
};

const DEFAULT_PAGES = {
  hero: {
    badge: "Curated 2026 Collection",
    title: "Shop with intention.",
    highlight: "Live beautifully.",
    subtitle: "A quiet, dark luxury marketplace for high-performance tech, crafted fashion, and daily essentials — delivered nationwide."
  },
  about: {
    title: "A mart with manners.",
    highlight: "Quality over quantity.",
    p1: "Iqra Online Mart is founded on the conviction that people prefer fewer, better things. We test, curate, and ship with meticulous care from Savar, Dhaka.",
    p2: "Every product, category, and order is governed by our integrated in-browser CMS. Transparent pricing, zero hidden fees, and dependable human customer care."
  },
  footer: { tagline: "Premium everyday shopping. Quality over quantity." }
};

/* ==========================================================================
   TRANSLATION DICTIONARY (English & বাংলা)
   ========================================================================== */
const T = {
  en: {
    home: "Home", products: "Products", categories: "Categories", blog: "Journal", about: "About", contact: "Contact", admin: "Admin",
    shopNow: "Shop the edit", explore: "Browse categories", cart: "Bag", checkout: "Checkout", search: "Search",
    addToCart: "Add to Bag", viewDetails: "Details", total: "Total", subtotal: "Subtotal", shipping: "Shipping",
    freeShippingUnlocked: "You unlocked Free Shipping!", addMoreForFreeShip: "Add {amount} more for FREE shipping",
    emptyCart: "Your bag is empty", emptyWish: "Your wishlist is empty",
    signIn: "Sign In", register: "Register", myAccount: "Account",
    inStock: "In Stock", lowStock: "Low Stock", outOfStock: "Out of Stock",
    filterTitle: "Filters", allCategories: "All Collections", priceRange: "Price Range",
    applyCoupon: "Apply", couponApplied: "Coupon applied successfully!", invalidCoupon: "Invalid promo code",
    quickView: "Quick View", compare: "Compare", addedToBag: "Added to Bag", addedToWish: "Added to Wishlist", removedFromWish: "Removed from Wishlist"
  },
  bn: {
    home: "হোম", products: "পণ্য", categories: "ক্যাটাগরি", blog: "জার্নাল", about: "আমাদের কথা", contact: "যোগাযোগ", admin: "অ্যাডমিন",
    shopNow: "কেনাকাটা করুন", explore: "ক্যাটাগরি দেখুন", cart: "ব্যাগ", checkout: "চেকআউট", search: "খুঁজুন",
    addToCart: "ব্যাগে যোগ করুন", viewDetails: "বিস্তারিত", total: "মোট", subtotal: "সাবটোটাল", shipping: "শিপিং",
    freeShippingUnlocked: "অভিনন্দন! আপনি ফ্রি ডেলিভারি পেয়েছেন!", addMoreForFreeShip: "ফ্রি ডেলিভারির জন্য আরও {amount} যোগ করুন",
    emptyCart: "আপনার ব্যাগ খালি", emptyWish: "আপনার উইশলিস্ট খালি",
    signIn: "লগইন", register: "রেজিস্টার", myAccount: "অ্যাকাউন্ট",
    inStock: "স্টকে আছে", lowStock: "সীমিত স্টক", outOfStock: "স্টক শেষ",
    filterTitle: "ফিল্টার", allCategories: "সকল কালেকশন", priceRange: "দামের পরিসীমা",
    applyCoupon: "প্রয়োগ", couponApplied: "কুপন কোড যুক্ত হয়েছে!", invalidCoupon: "ভুল কুপন কোড",
    quickView: "দ্রুত দেখুন", compare: "তুলনা করুন", addedToBag: "ব্যাগে যুক্ত হয়েছে", addedToWish: "উইশলিস্টে যুক্ত হয়েছে", removedFromWish: "উইশলিস্ট থেকে সরানো হয়েছে"
  }
};

/* ==========================================================================
   CENTRAL STORE & DATA LAYER
   ========================================================================== */
const Store = {
  products: [],
  categories: [],
  coupons: [],
  posts: [],
  testimonials: [],
  orders: [],
  subscribers: [],
  messages: [],
  cart: [],
  wishlist: [],
  compareList: [],
  settings: {},
  pages: {},
  lang: "en",
  theme: "dark",
  currency: "BDT",
  appliedCoupon: null,

  // Filters & sorting state
  filter: "all",
  priceMin: 0,
  priceMax: 10000,
  onlyInStock: false,
  onlyOnSale: false,
  sort: "default",
  viewMode: "grid",

  load() {
    const get = (k, def) => {
      try {
        const val = localStorage.getItem(STORE_KEY + k);
        return val ? JSON.parse(val) : structuredClone(def);
      } catch {
        return structuredClone(def);
      }
    };

    this.products = get("products", DEFAULT_PRODUCTS);
    this.categories = get("categories", DEFAULT_CATEGORIES);
    this.coupons = get("coupons", DEFAULT_COUPONS);
    this.posts = get("posts", DEFAULT_POSTS);
    this.testimonials = get("testimonials", DEFAULT_TESTIMONIALS);
    this.orders = get("orders", []);
    this.subscribers = get("subscribers", []);
    this.messages = get("messages", []);
    this.cart = get("cart", []);
    this.wishlist = get("wishlist", []);
    this.compareList = get("compare", []);
    this.settings = { ...DEFAULT_SETTINGS, ...get("settings", {}) };
    this.pages = get("pages", DEFAULT_PAGES);
    this.lang = localStorage.getItem(STORE_KEY + "lang") || "en";
    this.theme = localStorage.getItem(STORE_KEY + "theme") || "dark";
    this.currency = localStorage.getItem(STORE_KEY + "currency") || this.settings.currency || "BDT";
    this.appliedCoupon = get("appliedCoupon", null);
  },

  save(k, v) {
    try {
      localStorage.setItem(STORE_KEY + k, JSON.stringify(v));
    } catch (e) {
      console.warn("Storage write error", e);
    }
  },

  persistAll() {
    [
      "products", "categories", "coupons", "posts", "testimonials",
      "orders", "subscribers", "messages", "cart", "wishlist", "settings", "pages"
    ].forEach((k) => this.save(k, this[k]));
  },

  t(key) {
    return (T[this.lang] && T[this.lang][key]) || T.en[key] || key;
  },

  pname(p) {
    if (!p) return "";
    return this.lang === "bn" && p.nameBn ? p.nameBn : p.name;
  },

  pdesc(p) {
    if (!p) return "";
    return this.lang === "bn" && p.descriptionBn ? p.descriptionBn : p.description;
  },

  // Currency Converter & Formatter
  money(amountInBDT) {
    const cur = CURRENCIES[this.currency] || CURRENCIES.BDT;
    const converted = Number(amountInBDT || 0) * cur.rate;
    const isDecimal = this.currency === "USD" || this.currency === "EUR" || this.currency === "GBP";
    const formatted = converted.toLocaleString(cur.locale || "en-US", {
      minimumFractionDigits: isDecimal ? 2 : 0,
      maximumFractionDigits: isDecimal ? 2 : 0
    });
    return `${cur.symbol}${formatted}`;
  },

  activeProducts() {
    return this.products.filter((p) => p.status !== "inactive");
  },

  /* Cart Operations */
  addToCart(id, qty = 1, variant = null) {
    const p = this.products.find((x) => x.id == id);
    if (!p || p.stock < 1) {
      toast(this.t("outOfStock"), "danger");
      return;
    }
    const line = this.cart.find((c) => c.id == id && c.variant === variant);
    if (line) {
      line.qty = Math.min(p.stock, line.qty + qty);
    } else {
      this.cart.push({ id: p.id, qty, variant: variant || (p.colors ? p.colors[0] : null) });
    }
    this.save("cart", this.cart);
    UI.cartCount();
    UI.renderCart();
    SoundFX.play("chime");
    toast(this.t("addedToBag"), "success");
  },

  setQty(id, qty, variant = null) {
    const p = this.products.find((x) => x.id == id);
    const line = this.cart.find((c) => c.id == id && (!variant || c.variant === variant));
    if (!line) return;
    if (qty < 1) {
      this.cart = this.cart.filter((c) => !(c.id == id && (!variant || c.variant === variant)));
    } else {
      line.qty = Math.min(p ? p.stock : qty, qty);
    }
    this.save("cart", this.cart);
    UI.renderCart();
    UI.cartCount();
  },

  cartItems() {
    return this.cart.map((c) => {
      const p = this.products.find((x) => x.id == c.id);
      return p ? { ...p, qty: c.qty, variant: c.variant, line: p.price * c.qty } : null;
    }).filter(Boolean);
  },

  cartSubtotal() {
    return this.cartItems().reduce((s, i) => s + i.line, 0);
  },

  discountAmount() {
    const sub = this.cartSubtotal();
    if (!this.appliedCoupon) return 0;
    if (sub < (this.appliedCoupon.minOrder || 0)) return 0;

    if (this.appliedCoupon.type === "percent") {
      return Math.round(sub * (this.appliedCoupon.value / 100));
    }
    if (this.appliedCoupon.type === "fixed") {
      return Math.min(sub, this.appliedCoupon.value);
    }
    return 0;
  },

  shippingFee(selectedMethod = "standard") {
    const sub = this.cartSubtotal();
    if (this.appliedCoupon && this.appliedCoupon.type === "shipping") return 0;
    const threshold = this.settings.freeShippingThreshold || 1500;
    if (sub >= threshold && selectedMethod === "standard") return 0;
    return selectedMethod === "express" ? (this.settings.expressShippingFee || 160) : (this.settings.standardShippingFee || 80);
  },

  cartTotal(selectedMethod = "standard") {
    const sub = this.cartSubtotal();
    const disc = this.discountAmount();
    const ship = this.shippingFee(selectedMethod);
    return Math.max(0, sub - disc + ship);
  },

  /* Wishlist Operations */
  toggleWish(id) {
    if (this.wishlist.includes(id)) {
      this.wishlist = this.wishlist.filter((x) => x !== id);
      toast(this.t("removedFromWish"));
    } else {
      this.wishlist.push(id);
      SoundFX.play("click");
      toast(this.t("addedToWish"), "success");
    }
    this.save("wishlist", this.wishlist);
    UI.wishCount();
    UI.renderWishlistState();
  },

  /* Comparison Operations */
  toggleCompare(id) {
    if (this.compareList.includes(id)) {
      this.compareList = this.compareList.filter((x) => x !== id);
      toast("Removed from comparison");
    } else {
      if (this.compareList.length >= 4) {
        toast("You can compare maximum 4 products at once", "warning");
        return;
      }
      this.compareList.push(id);
      toast("Added to comparison", "success");
    }
    this.save("compare", this.compareList);
    UI.renderCompareModal();
  }
};

/* ==========================================================================
   AUTHENTICATION & USER PROFILE
   ========================================================================== */
const Auth = {
  users() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY + "users")) || []; } catch { return []; }
  },
  saveUsers(u) { localStorage.setItem(STORE_KEY + "users", JSON.stringify(u)); },
  session() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY + "session")); } catch { return null; }
  },
  setSession(u) { localStorage.setItem(STORE_KEY + "session", JSON.stringify(u)); },
  logout() {
    localStorage.removeItem(STORE_KEY + "session");
    location.reload();
  },
  register(data) {
    const users = this.users();
    if (users.some((u) => u.email === data.email)) return { ok: false, msg: "Email already registered" };
    const user = {
      id: uid(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone || "",
      password: data.password,
      addresses: [],
      createdAt: new Date().toISOString()
    };
    users.push(user);
    this.saveUsers(users);
    this.setSession({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName });
    return { ok: true };
  },
  login(email, password) {
    const u = this.users().find((x) => x.email === email && x.password === password);
    if (!u) return { ok: false, msg: "Invalid email or password" };
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
    if (u) this.setSession({ id: u.id, email: u.email, firstName: u.firstName, lastName: u.lastName });
  }
};

/* Admin Authentication */
const AdminAuth = {
  is() { return localStorage.getItem(STORE_KEY + "admin") === "1"; },
  login(user, pass) {
    const c = Store.settings.adminCredentials || DEFAULT_SETTINGS.adminCredentials;
    if (user === c.username && pass === c.password) {
      localStorage.setItem(STORE_KEY + "admin", "1");
      return true;
    }
    return false;
  },
  logout() {
    localStorage.removeItem(STORE_KEY + "admin");
    location.href = "admin-login.html";
  }
};

/* ==========================================================================
   UI HELPERS, TOASTS & STAR RATING
   ========================================================================== */
function toast(msg, type = "info") {
  let container = $(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const el = document.createElement("div");
  el.className = `toast toast-${type}`;
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "danger") icon = "fa-circle-xmark";
  if (type === "warning") icon = "fa-triangle-exclamation";

  el.innerHTML = `<i class="fa-solid ${icon} gold"></i> <span>${escapeHtml(msg)}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(-10px)";
    setTimeout(() => el.remove(), 300);
  }, 2800);
}

function stars(n) {
  const rounded = Math.round(n * 2) / 2;
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) html += '<i class="fa-solid fa-star"></i>';
    else if (i - 0.5 === rounded) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

/* Reusable Product Card Component */
function productCard(p) {
  const isWish = Store.wishlist.includes(p.id);
  const discountPercent = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;

  return `<article class="product-card" data-pid="${p.id}">
    <div class="product-media">
      ${p.badge ? `<span class="p-badge ${p.badge}">${escapeHtml(p.badge)}</span>` : (discountPercent > 0 ? `<span class="p-badge sale">-${discountPercent}%</span>` : "")}
      <div class="product-media-actions">
        <button class="media-action-btn ${isWish ? "active" : ""}" data-wish="${p.id}" title="Wishlist" aria-label="Add to wishlist">
          <i class="fa-solid fa-heart"></i>
        </button>
        <button class="media-action-btn" data-compare="${p.id}" title="Compare" aria-label="Compare product">
          <i class="fa-solid fa-code-compare"></i>
        </button>
      </div>
      <a href="product.html?id=${p.id}" class="product-img-link" style="display:block;width:100%;height:100%">
        ${p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" class="product-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">` : ""}
        <div class="product-icon-fallback" style="${p.image ? 'display:none;' : ''}width:100%;height:100%;display:grid;place-items:center;">
          <i class="fa-solid ${escapeHtml(p.icon || "fa-box")}"></i>
        </div>
      </a>
      <button class="quick-view-overlay-btn" data-quickview="${p.id}">
        <i class="fa-solid fa-eye"></i> ${Store.t("quickView")}
      </button>
    </div>
    <div class="product-body">
      <div class="product-cat">${escapeHtml(p.category)}</div>
      <h3><a href="product.html?id=${p.id}">${escapeHtml(Store.pname(p))}</a></h3>
      <div class="stars">
        ${stars(p.rating)}
        <span class="stars-count">(${p.reviews || 0})</span>
      </div>
      <div class="price-row">
        <span class="price">${Store.money(p.price)}</span>
        ${p.oldPrice ? `<span class="old">${Store.money(p.oldPrice)}</span>` : ""}
      </div>
      <div class="product-actions">
        <button class="btn btn-sm" data-add="${p.id}" ${p.stock < 1 ? "disabled" : ""}>
          <i class="fa-solid fa-bag-shopping"></i> ${p.stock > 0 ? Store.t("addToCart") : Store.t("outOfStock")}
        </button>
        <a class="btn btn-outline btn-sm" href="product.html?id=${p.id}">${Store.t("viewDetails")}</a>
      </div>
    </div>
  </article>`;
}

/* ==========================================================================
   UI CONTROLLER & EVENT BINDINGS
   ========================================================================== */
const UI = {
  applyChrome() {
    document.documentElement.lang = Store.lang;
    document.documentElement.setAttribute("data-theme", Store.theme);

    // Theme toggle button icons
    const icon = Store.theme === "dark" ? "fa-moon" : "fa-sun";
    $$("#themeToggle i, .theme-toggle i").forEach((i) => { i.className = `fa-solid ${icon}`; });

    // Language label & buttons
    const langLabel = $("#currentLangLabel");
    if (langLabel) langLabel.textContent = Store.lang === "bn" ? "বাংলা" : "English";
    $$(".lang-option").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === Store.lang);
    });

    // Currency label & buttons
    const curLabel = $("#currentCurrencyLabel");
    if (curLabel) curLabel.textContent = CURRENCIES[Store.currency]?.label || Store.currency;
    $$(".currency-option").forEach((b) => {
      b.classList.toggle("active", b.dataset.cur === Store.currency);
    });

    // i18n text keys
    $$("[data-i18n]").forEach((el) => {
      const v = Store.t(el.dataset.i18n);
      if (v) el.textContent = v;
    });

    // CMS dynamic text sync
    const s = Store.settings;
    $$("[data-cms=phone]").forEach((el) => { el.textContent = s.phone; });
    $$("[data-cms=email]").forEach((el) => { el.textContent = s.email; });
    $$("[data-cms=address]").forEach((el) => { el.textContent = s.address; });

    this.cartCount();
    this.wishCount();
  },

  cartCount() {
    const totalQty = Store.cart.reduce((s, c) => s + c.qty, 0);
    $$(".cart-badge").forEach((b) => {
      b.textContent = totalQty;
      b.style.display = totalQty ? "grid" : "none";
    });
  },

  wishCount() {
    const totalWish = Store.wishlist.length;
    $$(".wish-badge").forEach((b) => {
      b.textContent = totalWish;
      b.style.display = totalWish ? "grid" : "none";
    });
  },

  renderWishlistState() {
    $$("[data-wish]").forEach((btn) => {
      const id = +btn.dataset.wish;
      btn.classList.toggle("active", Store.wishlist.includes(id));
    });
  },

  renderCart() {
    const body = $("#cartDrawerBody");
    if (!body) return;

    const items = Store.cartItems();
    const sub = Store.cartSubtotal();
    const threshold = Store.settings.freeShippingThreshold || 1500;

    // Free Shipping Progress calculation
    const freeShipBox = $("#freeShippingBox");
    if (freeShipBox) {
      if (sub >= threshold) {
        freeShipBox.innerHTML = `<span class="gold"><i class="fa-solid fa-truck-fast"></i> ${Store.t("freeShippingUnlocked")}</span>
          <div class="free-shipping-bar-wrap"><div class="free-shipping-bar-fill" style="width:100%"></div></div>`;
      } else {
        const remaining = threshold - sub;
        const progress = Math.min(100, Math.round((sub / threshold) * 100));
        freeShipBox.innerHTML = `<span><i class="fa-solid fa-truck"></i> ${Store.t("addMoreForFreeShip").replace("{amount}", Store.money(remaining))}</span>
          <div class="free-shipping-bar-wrap"><div class="free-shipping-bar-fill" style="width:${progress}%"></div></div>`;
      }
    }

    if (!items.length) {
      body.innerHTML = `<div class="empty">
        <i class="fa-solid fa-bag-shopping gold" style="font-size:2.5rem;margin-bottom:1rem;display:block"></i>
        <p>${Store.t("emptyCart")}</p>
        <a href="index.html#products" class="btn btn-sm" style="margin-top:1rem">${Store.t("shopNow")}</a>
      </div>`;
    } else {
      body.innerHTML = items.map((i) => `<div class="cart-item">
        <img src="${escapeHtml(i.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80')}" class="cart-item-img" alt="${escapeHtml(i.name)}">
        <div>
          <h4>${escapeHtml(Store.pname(i))}</h4>
          ${i.variant ? `<small style="color:var(--muted)">Variant: ${escapeHtml(i.variant)}</small><br>` : ""}
          <div class="qty-stepper" style="margin-top:0.4rem">
            <button class="qty-btn" data-qty="${i.id}" data-d="-1" aria-label="Decrease quantity">−</button>
            <span class="qty-val">${i.qty}</span>
            <button class="qty-btn" data-qty="${i.id}" data-d="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <strong>${Store.money(i.line)}</strong><br>
          <button class="btn-ghost btn-sm" data-qty="${i.id}" data-d="0" style="margin-top:0.4rem;color:var(--danger)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>`).join("");
    }

    const subEl = $("#cartSubtotalValue");
    if (subEl) subEl.textContent = Store.money(sub);

    const discEl = $("#cartDiscountValue");
    if (discEl) {
      const disc = Store.discountAmount();
      discEl.textContent = disc > 0 ? `-${Store.money(disc)}` : Store.money(0);
      $("#cartDiscountRow")?.classList.toggle("hidden", disc <= 0);
    }

    const tot = $("#cartTotalValue");
    if (tot) tot.textContent = Store.money(Store.cartTotal());
  },

  openCart(on = true) {
    $("#cartDrawer")?.classList.toggle("open", on);
    $("#cartDrawerOverlay")?.classList.toggle("open", on);
    if (on) {
      this.renderCart();
      SoundFX.play("click");
    }
  },

  /* Home View Renderer */
  renderHome() {
    const cats = $("#categoriesGrid");
    if (cats) {
      cats.innerHTML = Store.categories.map((c) => `<div class="cat-card" data-gocat="${escapeHtml(c.name)}">
        <div class="cat-ico"><i class="fa-solid ${escapeHtml(c.icon)}"></i></div>
        <h3>${escapeHtml(Store.lang === "bn" && c.nameBn ? c.nameBn : c.name)}</h3>
        <p>${escapeHtml(Store.lang === "bn" && c.descriptionBn ? c.descriptionBn : c.description)}</p>
      </div>`).join("");
    }

    const feat = $("#featuredGrid");
    if (feat) {
      feat.innerHTML = Store.activeProducts().filter((p) => p.featured).slice(0, 8).map(productCard).join("");
    }

    this.renderCatalog();

    const tg = $("#testimonialsGrid");
    if (tg) {
      tg.innerHTML = Store.testimonials.map((t) => `<div class="cat-card" style="text-align:left">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem">
          <div class="logo-mark" style="width:36px;height:36px;font-size:0.95rem">${escapeHtml(t.initials)}</div>
          <div>
            <strong>${escapeHtml(t.name)}</strong><br>
            <small style="color:var(--muted)">${escapeHtml(t.role)}</small>
          </div>
        </div>
        <div class="stars" style="margin-bottom:0.6rem">${stars(t.rating)}</div>
        <p style="color:var(--ink-secondary);font-size:0.92rem">“${escapeHtml(t.text)}”</p>
      </div>`).join("");
    }

    const bg = $("#blogGrid");
    if (bg) {
      bg.innerHTML = Store.posts.filter((p) => p.status === "published").slice(0, 3).map((p) => `<article class="cat-card" style="text-align:left">
        <div style="font-size:0.75rem;color:var(--gold);font-weight:600;margin-bottom:0.4rem">${escapeHtml(p.category)} · ${escapeHtml(p.readTime)}</div>
        <h3 style="font-size:1.15rem;margin-bottom:0.6rem">${escapeHtml(p.title)}</h3>
        <p style="color:var(--muted);font-size:0.88rem;margin-bottom:1rem">${escapeHtml(p.excerpt)}</p>
        <a href="blog.html?id=${p.id}" class="btn btn-outline btn-sm">Read Article →</a>
      </article>`).join("");
    }

    // Dynamic CMS content for Hero & About
    const h = Store.pages.hero || {};
    const setTxt = (sel, val) => { const el = $(sel); if (el && val) el.textContent = val; };
    setTxt("[data-cms=hero-badge]", h.badge);
    setTxt("[data-cms=hero-title]", h.title);
    setTxt("[data-cms=hero-highlight]", h.highlight);
    setTxt("[data-cms=hero-subtitle]", h.subtitle);
    setTxt("[data-cms=motto]", Store.settings.motto);

    const a = Store.pages.about || {};
    setTxt("[data-cms=about-title]", a.title);
    setTxt("[data-cms=about-highlight]", a.highlight);
    setTxt("[data-cms=about-p1]", a.p1);
    setTxt("[data-cms=about-p2]", a.p2);
  },

  /* Catalog Renderer with Full Faceted Filters */
  renderCatalog() {
    const grid = $("#productsGrid");
    if (!grid) return;

    let list = Store.activeProducts();

    // Category filter
    if (Store.filter !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === Store.filter.toLowerCase());
    }

    // Price Range Filter
    if (Store.priceMax > 0) {
      list = list.filter((p) => p.price >= Store.priceMin && p.price <= Store.priceMax);
    }

    // In Stock Only
    if (Store.onlyInStock) {
      list = list.filter((p) => p.stock > 0);
    }

    // On Sale Only
    if (Store.onlyOnSale) {
      list = list.filter((p) => p.oldPrice && p.oldPrice > p.price);
    }

    // Sorting
    if (Store.sort === "priceLow") list.sort((a, b) => a.price - b.price);
    if (Store.sort === "priceHigh") list.sort((a, b) => b.price - a.price);
    if (Store.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (Store.sort === "newest") list.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    if (Store.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    // View Mode Class
    grid.className = `products-grid ${Store.viewMode === "list" ? "list-view" : ""}`;

    grid.innerHTML = list.length
      ? list.map(productCard).join("")
      : `<div class="empty" style="grid-column: 1 / -1;">
          <i class="fa-solid fa-box-open gold" style="font-size:2.5rem;margin-bottom:1rem;display:block"></i>
          <p>No products found matching your current filter criteria.</p>
          <button class="btn btn-outline btn-sm" id="clearFilterBtn" style="margin-top:1rem">Clear Filters</button>
        </div>`;

    const countEl = $("#catalogResultsCount");
    if (countEl) countEl.textContent = `Showing ${list.length} of ${Store.activeProducts().length} products`;

    this.renderFilterSidebar();
  },

  renderFilterSidebar() {
    const chipContainer = $("#categoryFilterChips");
    if (chipContainer) {
      const activeCount = (cat) => cat === "all"
        ? Store.activeProducts().length
        : Store.activeProducts().filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;

      const categories = ["all", ...Store.categories.map((c) => c.name)];
      chipContainer.innerHTML = categories.map((cat) => `<div class="filter-chip-item ${Store.filter.toLowerCase() === cat.toLowerCase() ? "active" : ""}" data-filter-cat="${escapeHtml(cat)}">
        <span>${cat === "all" ? Store.t("allCategories") : escapeHtml(cat)}</span>
        <span class="filter-chip-count">${activeCount(cat)}</span>
      </div>`).join("");
    }
  },

  /* Quick View Modal Renderer */
  openQuickView(id) {
    const p = Store.products.find((x) => x.id == id);
    if (!p) return;

    let modal = $("#quickViewModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "quickViewModal";
      modal.className = "modal";
      modal.innerHTML = `<div class="modal-content modal-lg">
        <button class="modal-close" data-close-modal><i class="fa-solid fa-times"></i></button>
        <div id="quickViewContent"></div>
      </div>`;
      document.body.appendChild(modal);
    }

    const content = $("#quickViewContent", modal);
    content.innerHTML = `<div class="pd-grid" style="gap:2rem">
      <div class="pd-gallery">
        <div class="pd-main-img-wrap" style="aspect-ratio:1/1">
          <img src="${escapeHtml(p.image || '')}" class="pd-main-img" id="qvMainImg" alt="${escapeHtml(p.name)}">
        </div>
      </div>
      <div class="pd-info">
        <div class="product-cat">${escapeHtml(p.category)}</div>
        <h2 style="font-family:var(--serif);font-size:1.8rem;margin:0.25rem 0 0.5rem">${escapeHtml(Store.pname(p))}</h2>
        <div class="stars" style="margin-bottom:0.75rem">${stars(p.rating)} <span class="stars-count">(${p.reviews || 0} reviews)</span></div>
        <div class="price-row">
          <span class="price" style="font-size:1.5rem">${Store.money(p.price)}</span>
          ${p.oldPrice ? `<span class="old">${Store.money(p.oldPrice)}</span>` : ""}
        </div>
        <p style="color:var(--muted);font-size:0.92rem;margin-bottom:1.25rem">${escapeHtml(Store.pdesc(p))}</p>

        ${p.colors && p.colors.length ? `<div class="variant-section">
          <div class="variant-title">Color: <span id="qvSelectedColor">${escapeHtml(p.colors[0])}</span></div>
          <div class="color-swatches">
            ${p.colors.map((c, idx) => `<button class="color-swatch ${idx === 0 ? 'active' : ''}" data-qv-color="${escapeHtml(c)}" title="${escapeHtml(c)}" style="background:${c.toLowerCase().includes('black') ? '#121212' : c.toLowerCase().includes('gold') ? '#d4af37' : c.toLowerCase().includes('white') ? '#f5f5f5' : '#888'}"></button>`).join('')}
          </div>
        </div>` : ''}

        <div style="display:flex;gap:1rem;align-items:center;margin:1.5rem 0">
          <div class="qty-stepper">
            <button class="qty-btn" id="qvMinus">−</button>
            <span class="qty-val" id="qvQtyVal">1</span>
            <button class="qty-btn" id="qvPlus">+</button>
          </div>
          <button class="btn" id="qvAddBtn" style="flex:1">
            <i class="fa-solid fa-bag-shopping"></i> ${Store.t("addToCart")}
          </button>
        </div>

        <div style="display:flex;gap:1rem">
          <a href="product.html?id=${p.id}" class="btn btn-outline btn-sm" style="flex:1">View Full Details →</a>
        </div>
      </div>
    </div>`;

    let qvQty = 1;
    let selectedColor = p.colors ? p.colors[0] : null;

    $("#qvMinus").onclick = () => { qvQty = Math.max(1, qvQty - 1); $("#qvQtyVal").textContent = qvQty; };
    $("#qvPlus").onclick = () => { qvQty = Math.min(p.stock, qvQty + 1); $("#qvQtyVal").textContent = qvQty; };
    $("#qvAddBtn").onclick = () => {
      Store.addToCart(p.id, qvQty, selectedColor);
      modal.classList.remove("open");
    };

    $$("[data-qv-color]", modal).forEach((btn) => {
      btn.onclick = () => {
        $$("[data-qv-color]", modal).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = btn.dataset.qvColor;
        $("#qvSelectedColor").textContent = selectedColor;
      };
    });

    modal.classList.add("open");
    SoundFX.play("click");
  },

  /* Product Comparison Modal */
  renderCompareModal() {
    let modal = $("#compareModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "compareModal";
      modal.className = "modal";
      modal.innerHTML = `<div class="modal-content modal-xl">
        <button class="modal-close" data-close-modal><i class="fa-solid fa-times"></i></button>
        <h2 style="font-family:var(--serif);margin-bottom:1rem">Product <span class="gradient-text">Comparison</span></h2>
        <div id="compareContent"></div>
      </div>`;
      document.body.appendChild(modal);
    }

    const items = Store.compareList.map((id) => Store.products.find((p) => p.id == id)).filter(Boolean);
    const content = $("#compareContent", modal);

    if (!items.length) {
      content.innerHTML = `<div class="empty">
        <i class="fa-solid fa-code-compare gold" style="font-size:2.5rem;margin-bottom:1rem;display:block"></i>
        <p>No products added for comparison yet.</p>
      </div>`;
    } else {
      content.innerHTML = `<div style="overflow-x:auto">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              ${items.map((i) => `<td>
                <img src="${escapeHtml(i.image || '')}" style="width:90px;height:90px;object-fit:cover;border-radius:var(--radius-sm);margin:0 auto 0.5rem" alt="${escapeHtml(i.name)}">
                <strong>${escapeHtml(Store.pname(i))}</strong><br>
                <button class="btn-ghost btn-sm" data-rem-compare="${i.id}" style="color:var(--danger);font-size:0.75rem">Remove</button>
              </td>`).join("")}
            </tr>
          </thead>
          <tbody>
            <tr><th>Price</th>${items.map((i) => `<td><strong>${Store.money(i.price)}</strong></td>`).join("")}</tr>
            <tr><th>Rating</th>${items.map((i) => `<td>${stars(i.rating)} (${i.reviews})</td>`).join("")}</tr>
            <tr><th>Category</th>${items.map((i) => `<td>${escapeHtml(i.category)}</td>`).join("")}</tr>
            <tr><th>Availability</th>${items.map((i) => `<td><span class="status ${i.stock > 0 ? 'active' : 'cancelled'}">${i.stock > 0 ? 'In Stock (' + i.stock + ')' : 'Out of Stock'}</span></td>`).join("")}</tr>
            <tr><th>Action</th>${items.map((i) => `<td><button class="btn btn-sm" data-add="${i.id}" ${i.stock < 1 ? 'disabled' : ''}>Add to Bag</button></td>`).join("")}</tr>
          </tbody>
        </table>
      </div>`;
    }

    modal.classList.add("open");
  },

  /* Global Event Listeners */
  bind() {
    // Theme toggle
    $$("#themeToggle, .theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        Store.theme = Store.theme === "dark" ? "light" : "dark";
        localStorage.setItem(STORE_KEY + "theme", Store.theme);
        this.applyChrome();
        SoundFX.play("click");
      });
    });

    // Language Dropdown
    $("#langBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      $("#langDropdownWrap")?.classList.toggle("open");
      $("#currencyDropdownWrap")?.classList.remove("open");
    });

    $$(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        Store.lang = btn.dataset.lang;
        localStorage.setItem(STORE_KEY + "lang", Store.lang);
        location.reload();
      });
    });

    // Currency Dropdown
    $("#currencyBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      $("#currencyDropdownWrap")?.classList.toggle("open");
      $("#langDropdownWrap")?.classList.remove("open");
    });

    $$(".currency-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        Store.currency = btn.dataset.cur;
        localStorage.setItem(STORE_KEY + "currency", Store.currency);
        $("#currencyDropdownWrap")?.classList.remove("open");
        this.applyChrome();
        this.renderHome();
        this.renderCart();
        ProductDetail.render();
        Checkout.render();
        SoundFX.play("click");
        toast(`Currency switched to ${CURRENCIES[Store.currency]?.label}`);
      });
    });

    // Close Dropdowns on outside click
    document.addEventListener("click", () => {
      $("#langDropdownWrap")?.classList.remove("open");
      $("#currencyDropdownWrap")?.classList.remove("open");
    });

    // Mobile Menu Toggle
    $("#mobileMenuBtn")?.addEventListener("click", () => {
      $(".nav-links")?.classList.toggle("open");
    });

    // Cart Drawer Open/Close
    $("#cartBtn")?.addEventListener("click", () => this.openCart(true));
    $("#cartClose")?.addEventListener("click", () => this.openCart(false));
    $("#cartDrawerOverlay")?.addEventListener("click", () => this.openCart(false));
    $("#checkoutBtn")?.addEventListener("click", () => { location.href = "checkout.html"; });

    // Promo Code Application in Cart
    $("#applyCouponBtn")?.addEventListener("click", () => {
      const code = ($("#couponCodeInput")?.value || "").trim().toUpperCase();
      const match = Store.coupons.find((c) => c.code === code);
      if (match) {
        Store.appliedCoupon = match;
        Store.save("appliedCoupon", Store.appliedCoupon);
        toast(Store.t("couponApplied"), "success");
        SoundFX.play("success");
        this.renderCart();
      } else {
        toast(Store.t("invalidCoupon"), "danger");
      }
    });

    // Live Search Autocomplete & Overlay
    $("#searchBtn")?.addEventListener("click", () => {
      $("#searchModal")?.classList.add("open");
      $("#searchInput")?.focus();
    });
    $("#searchClose")?.addEventListener("click", () => $("#searchModal")?.classList.remove("open"));

    // Keyboard shortcut '/' or 'Ctrl+K' to open search
    document.addEventListener("keydown", (e) => {
      if ((e.key === "/" || (e.ctrlKey && e.key === "k")) && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        $("#searchModal")?.classList.add("open");
        $("#searchInput")?.focus();
      }
      if (e.key === "Escape") {
        $$(".modal.open").forEach((m) => m.classList.remove("open"));
        this.openCart(false);
      }
    });

    $("#searchInput")?.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      const box = $("#searchResults");
      if (!box) return;

      if (!q) {
        box.innerHTML = "";
        return;
      }

      const hits = Store.activeProducts().filter((p) =>
        Store.pname(p).toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.sku && p.sku.toLowerCase().includes(q))
      );

      box.innerHTML = hits.length
        ? `<div class="search-results-list">${hits.map((p) => `<div class="search-hit-item" onclick="location.href='product.html?id=${p.id}'">
            <img src="${escapeHtml(p.image || '')}" class="search-hit-img" alt="${escapeHtml(p.name)}">
            <div>
              <strong>${escapeHtml(Store.pname(p))}</strong>
              <small style="color:var(--muted);display:block">${escapeHtml(p.category)} · ${p.stock > 0 ? 'In Stock' : 'Out of Stock'}</small>
            </div>
            <strong class="gold">${Store.money(p.price)}</strong>
          </div>`).join("")}</div>`
        : `<p class="empty">No matching products found for "${escapeHtml(q)}"</p>`;
    });

    // Catalog Filter Controls
    $("#priceMinInput")?.addEventListener("input", (e) => {
      Store.priceMin = Number(e.target.value) || 0;
      this.renderCatalog();
    });
    $("#priceMaxInput")?.addEventListener("input", (e) => {
      Store.priceMax = Number(e.target.value) || 10000;
      this.renderCatalog();
    });
    $("#filterInStockOnly")?.addEventListener("change", (e) => {
      Store.onlyInStock = e.target.checked;
      this.renderCatalog();
    });
    $("#filterOnSaleOnly")?.addEventListener("change", (e) => {
      Store.onlyOnSale = e.target.checked;
      this.renderCatalog();
    });
    $("#sortSelect")?.addEventListener("change", (e) => {
      Store.sort = e.target.value;
      this.renderCatalog();
    });
    $("#viewGridBtn")?.addEventListener("click", () => {
      Store.viewMode = "grid";
      $("#viewGridBtn")?.classList.add("active");
      $("#viewListBtn")?.classList.remove("active");
      this.renderCatalog();
    });
    $("#viewListBtn")?.addEventListener("click", () => {
      Store.viewMode = "list";
      $("#viewListBtn")?.classList.add("active");
      $("#viewGridBtn")?.classList.remove("active");
      this.renderCatalog();
    });

    // Global Delegated Click Handlers
    document.addEventListener("click", (e) => {
      // Add to Cart
      const add = e.target.closest("[data-add]");
      if (add) {
        Store.addToCart(+add.dataset.add);
      }

      // Wishlist Toggle
      const w = e.target.closest("[data-wish]");
      if (w) {
        Store.toggleWish(+w.dataset.wish);
      }

      // Quick View
      const qv = e.target.closest("[data-quickview]");
      if (qv) {
        this.openQuickView(+qv.dataset.quickview);
      }

      // Compare Toggle
      const cmp = e.target.closest("[data-compare]");
      if (cmp) {
        Store.toggleCompare(+cmp.dataset.compare);
      }

      // Remove from comparison table
      const remCmp = e.target.closest("[data-rem-compare]");
      if (remCmp) {
        Store.toggleCompare(+remCmp.dataset.remCompare);
      }

      // Cart Quantity Stepper
      const q = e.target.closest("[data-qty]");
      if (q) {
        const id = +q.dataset.qty;
        const line = Store.cart.find((c) => c.id === id);
        const d = +q.dataset.d;
        if (d === 0) Store.setQty(id, 0);
        else Store.setQty(id, (line?.qty || 1) + d);
      }

      // Category Chip Filter Click
      const catChip = e.target.closest("[data-filter-cat]");
      if (catChip) {
        Store.filter = catChip.dataset.filterCat;
        this.renderCatalog();
      }

      // Home category card go-to
      const gc = e.target.closest("[data-gocat]");
      if (gc) {
        Store.filter = gc.dataset.gocat;
        this.renderCatalog();
        document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
      }

      // Modal Closers
      const closeModal = e.target.closest("[data-close-modal]");
      if (closeModal) {
        $$(".modal").forEach((m) => m.classList.remove("open"));
      }

      // Clear Filters button
      if (e.target.id === "clearFilterBtn" || e.target.closest("#clearFilterBtn")) {
        Store.filter = "all";
        Store.priceMin = 0;
        Store.priceMax = 10000;
        Store.onlyInStock = false;
        Store.onlyOnSale = false;
        if ($("#priceMinInput")) $("#priceMinInput").value = "";
        if ($("#priceMaxInput")) $("#priceMaxInput").value = "";
        if ($("#filterInStockOnly")) $("#filterInStockOnly").checked = false;
        if ($("#filterOnSaleOnly")) $("#filterOnSaleOnly").checked = false;
        this.renderCatalog();
      }
    });

    // Newsletter Submission
    $("#newsletterForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector("input").value.trim();
      if (!Store.subscribers.includes(email)) {
        Store.subscribers.push(email);
        Store.save("subscribers", Store.subscribers);
      }
      SoundFX.play("success");
      toast("Thank you for subscribing to Iqra Mart Journal!", "success");
      e.target.reset();
    });
  }
};

/* ==========================================================================
   PRODUCT DETAIL CONTROLLER (GALLERY, REVIEWS, SPECS)
   ========================================================================== */
const ProductDetail = {
  render() {
    const box = $("#productDetail");
    if (!box) return;

    const id = +new URLSearchParams(location.search).get("id");
    const p = Store.products.find((x) => x.id === id) || Store.activeProducts()[0];
    if (!p) {
      box.innerHTML = `<div class="empty"><p>Product not found.</p><a href="index.html" class="btn" style="margin-top:1rem">Browse Catalog</a></div>`;
      return;
    }

    document.title = `${Store.pname(p)} · Iqra Mart`;

    // Calculate savings
    const discountPercent = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
    const galleryImages = p.gallery && p.gallery.length ? p.gallery : (p.image ? [p.image] : []);

    box.innerHTML = `
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span>
        <a href="index.html#products">${escapeHtml(p.category)}</a> <span>/</span>
        <span style="color:var(--ink)">${escapeHtml(Store.pname(p))}</span>
      </div>

      <div class="pd-grid">
        <div class="pd-gallery">
          <div class="pd-main-img-wrap">
            <img src="${escapeHtml(galleryImages[0] || '')}" class="pd-main-img" id="pdCurrentImg" alt="${escapeHtml(p.name)}">
          </div>
          ${galleryImages.length > 1 ? `<div class="pd-thumbnails">
            ${galleryImages.map((img, i) => `<div class="pd-thumb ${i === 0 ? 'active' : ''}" data-gallery-img="${escapeHtml(img)}">
              <img src="${escapeHtml(img)}" alt="${escapeHtml(p.name)} thumbnail ${i+1}">
            </div>`).join('')}
          </div>` : ''}
        </div>

        <div class="pd-info">
          <div class="pd-meta-row">
            <span class="product-cat">${escapeHtml(p.category)}</span>
            <span class="pd-sku">SKU: <strong>${escapeHtml(p.sku || 'IQ-' + p.id)}</strong></span>
            <span class="pd-stock-badge ${p.stock > 10 ? 'in-stock' : p.stock > 0 ? 'low-stock' : 'out-of-stock'}">
              <i class="fa-solid fa-circle" style="font-size:0.5rem"></i> ${p.stock > 0 ? `In Stock (${p.stock} units)` : 'Out of Stock'}
            </span>
          </div>

          <h1>${escapeHtml(Store.pname(p))}</h1>

          <div class="stars" style="margin-bottom:1rem">
            ${stars(p.rating)}
            <span class="stars-count" style="font-size:0.92rem;color:var(--ink-secondary)">${p.rating} · (${p.reviews || 0} customer reviews)</span>
          </div>

          <div class="price-row" style="margin:1.25rem 0">
            <span class="price" style="font-size:2rem">${Store.money(p.price)}</span>
            ${p.oldPrice ? `<span class="old" style="font-size:1.2rem">${Store.money(p.oldPrice)}</span>` : ""}
            ${discountPercent > 0 ? `<span class="discount-tag">Save ${discountPercent}%</span>` : ""}
          </div>

          <p class="lead" style="margin-bottom:1.75rem">${escapeHtml(Store.pdesc(p))}</p>

          ${p.colors && p.colors.length ? `<div class="variant-section">
            <div class="variant-title">Select Color: <span id="pdSelectedColor" class="gold">${escapeHtml(p.colors[0])}</span></div>
            <div class="color-swatches">
              ${p.colors.map((c, i) => `<button class="color-swatch ${i === 0 ? 'active' : ''}" data-pd-color="${escapeHtml(c)}" title="${escapeHtml(c)}" style="background:${c.toLowerCase().includes('black') ? '#121212' : c.toLowerCase().includes('gold') ? '#d4af37' : c.toLowerCase().includes('white') ? '#f5f5f5' : '#888'}"></button>`).join('')}
            </div>
          </div>` : ''}

          ${p.sizes && p.sizes.length && p.sizes[0] !== 'Standard' ? `<div class="variant-section">
            <div class="variant-title">Select Option: <span id="pdSelectedSize" class="gold">${escapeHtml(p.sizes[0])}</span></div>
            <div class="size-chips">
              ${p.sizes.map((s, i) => `<button class="size-chip ${i === 0 ? 'active' : ''}" data-pd-size="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join('')}
            </div>
          </div>` : ''}

          <div style="display:flex;gap:1.25rem;align-items:center;margin:2rem 0">
            <div class="qty-stepper">
              <button class="qty-btn" id="pdMinus" aria-label="Decrease quantity">−</button>
              <span class="qty-val" id="pdQty">1</span>
              <button class="qty-btn" id="pdPlus" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-lg" id="pdAdd" style="flex:1" ${p.stock < 1 ? 'disabled' : ''}>
              <i class="fa-solid fa-bag-shopping"></i> ${p.stock > 0 ? Store.t("addToCart") : Store.t("outOfStock")}
            </button>
            <button class="icon-btn" id="pdWishBtn" title="Wishlist">
              <i class="fa-solid fa-heart ${Store.wishlist.includes(p.id) ? 'gold' : ''}"></i>
            </button>
          </div>

          <!-- Social Share Row -->
          <div style="display:flex;align-items:center;gap:1rem;padding-top:1.5rem;border-top:1px solid var(--line-faint)">
            <span style="font-size:0.85rem;color:var(--muted)">Share product:</span>
            <button class="icon-btn" style="width:34px;height:34px;font-size:0.85rem" id="shareCopyBtn" title="Copy link"><i class="fa-solid fa-link"></i></button>
            <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(location.href)}" target="_blank" class="icon-btn" style="width:34px;height:34px;font-size:0.85rem" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://t.me/share/url?url=${encodeURIComponent(location.href)}" target="_blank" class="icon-btn" style="width:34px;height:34px;font-size:0.85rem" title="Telegram"><i class="fa-brands fa-telegram"></i></a>
          </div>
        </div>
      </div>

      <!-- Tabbed Specifications, Reviews & Shipping -->
      <div class="pd-tabs-container">
        <div class="pd-tab-nav">
          <button class="pd-tab-btn active" data-tab="description">Description</button>
          <button class="pd-tab-btn" data-tab="specifications">Specifications</button>
          <button class="pd-tab-btn" data-tab="reviews">Reviews (${p.reviews || 0})</button>
          <button class="pd-tab-btn" data-tab="shipping">Shipping & Returns</button>
        </div>

        <div class="pd-tab-content active" id="tab-description">
          <div class="checkout-card" style="line-height:1.8">
            <h3 style="font-family:var(--serif);font-size:1.4rem;margin-bottom:1rem">Product Overview</h3>
            <p>${escapeHtml(p.description)}</p>
            <p style="margin-top:1rem;color:var(--muted)">${escapeHtml(p.descriptionBn || '')}</p>
          </div>
        </div>

        <div class="pd-tab-content" id="tab-specifications">
          <div class="checkout-card">
            <h3 style="font-family:var(--serif);font-size:1.4rem;margin-bottom:1rem">Technical Specifications</h3>
            <table class="specs-table">
              <tbody>
                ${p.specs ? Object.entries(p.specs).map(([k, v]) => `<tr><th>${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`).join('') : '<tr><td colspan="2">No detailed specs specified.</td></tr>'}
              </tbody>
            </table>
          </div>
        </div>

        <div class="pd-tab-content" id="tab-reviews">
          <div class="reviews-breakdown">
            <div style="text-align:center">
              <div class="rating-big">${p.rating}</div>
              <div class="stars" style="margin:0.5rem 0">${stars(p.rating)}</div>
              <div style="color:var(--muted);font-size:0.85rem">Based on ${p.reviews || 0} reviews</div>
            </div>
            <div>
              <div class="rating-bar-row"><span>5 Star</span><div class="rating-bar-wrap"><div class="rating-bar-fill" style="width:85%"></div></div><span>85%</span></div>
              <div class="rating-bar-row"><span>4 Star</span><div class="rating-bar-wrap"><div class="rating-bar-fill" style="width:12%"></div></div><span>12%</span></div>
              <div class="rating-bar-row"><span>3 Star</span><div class="rating-bar-wrap"><div class="rating-bar-fill" style="width:3%"></div></div><span>3%</span></div>
              <div class="rating-bar-row"><span>2 Star</span><div class="rating-bar-wrap"><div class="rating-bar-fill" style="width:0%"></div></div><span>0%</span></div>
              <div class="rating-bar-row"><span>1 Star</span><div class="rating-bar-wrap"><div class="rating-bar-fill" style="width:0%"></div></div><span>0%</span></div>
            </div>
          </div>

          <!-- Review Form -->
          <div class="checkout-card" style="margin-top:2rem">
            <h3 style="font-family:var(--serif);font-size:1.3rem;margin-bottom:1rem">Write a Verified Review</h3>
            <form id="productReviewForm">
              <div class="form-row">
                <div class="form-group"><label class="form-label">Your Name</label><input class="form-input" name="reviewerName" required></div>
                <div class="form-group"><label class="form-label">Rating</label>
                  <select class="form-select" name="reviewRating">
                    <option value="5">⭐⭐⭐⭐⭐ (5 - Outstanding)</option>
                    <option value="4">⭐⭐⭐⭐ (4 - Very Good)</option>
                    <option value="3">⭐⭐⭐ (3 - Average)</option>
                    <option value="2">⭐⭐ (2 - Poor)</option>
                    <option value="1">⭐ (1 - Terrible)</option>
                  </select>
                </div>
              </div>
              <div class="form-group"><label class="form-label">Review Headline</label><input class="form-input" name="reviewTitle" placeholder="e.g. Exceptional sound and battery life" required></div>
              <div class="form-group"><label class="form-label">Review Comments</label><textarea class="form-textarea" name="reviewBody" placeholder="Describe your experience with the product..." required></textarea></div>
              <button class="btn">Submit Review</button>
            </form>
          </div>
        </div>

        <div class="pd-tab-content" id="tab-shipping">
          <div class="checkout-card" style="line-height:1.8">
            <h3 style="font-family:var(--serif);font-size:1.4rem;margin-bottom:1rem">Shipping & Returns Policy</h3>
            <ul style="padding-left:1.5rem;color:var(--ink-secondary);display:flex;flex-direction:column;gap:0.75rem">
              <li><strong>Free Nationwide Shipping:</strong> Automatically applied to all orders above ${Store.money(Store.settings.freeShippingThreshold || 1500)}.</li>
              <li><strong>Dhaka Metro Dispatch:</strong> Express next-day delivery available for ৳160.</li>
              <li><strong>7-Day Hassle-Free Returns:</strong> Return eligible unused items in original packaging within 7 calendar days for a full refund or replacement.</li>
              <li><strong>Payment Protection:</strong> Pay via Cash on Delivery, bKash, Nagad, Rocket or all major Debit/Credit Cards.</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    // Interactive Gallery Switcher
    $$("[data-gallery-img]", box).forEach((thumb) => {
      thumb.addEventListener("click", () => {
        $$(".pd-thumb", box).forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
        $("#pdCurrentImg").src = thumb.dataset.galleryImg;
      });
    });

    // Variants Selection
    let selectedColor = p.colors ? p.colors[0] : null;
    let selectedSize = p.sizes ? p.sizes[0] : null;

    $$("[data-pd-color]", box).forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-pd-color]", box).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = btn.dataset.pdColor;
        $("#pdSelectedColor").textContent = selectedColor;
      });
    });

    $$("[data-pd-size]", box).forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-pd-size]", box).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.dataset.pdSize;
        $("#pdSelectedSize").textContent = selectedSize;
      });
    });

    // Quantity Stepper
    let q = 1;
    $("#pdMinus").onclick = () => { q = Math.max(1, q - 1); $("#pdQty").textContent = q; };
    $("#pdPlus").onclick = () => { q = Math.min(p.stock, q + 1); $("#pdQty").textContent = q; };
    $("#pdAdd").onclick = () => {
      const variantStr = [selectedColor, selectedSize].filter(Boolean).join(" / ");
      Store.addToCart(p.id, q, variantStr);
    };

    $("#pdWishBtn").onclick = () => {
      Store.toggleWish(p.id);
      $("#pdWishBtn i").classList.toggle("gold", Store.wishlist.includes(p.id));
    };

    // Tab Navigation
    $$(".pd-tab-btn", box).forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".pd-tab-btn", box).forEach((b) => b.classList.remove("active"));
        $$(".pd-tab-content", box).forEach((c) => c.classList.remove("active"));
        btn.classList.add("active");
        $("#tab-" + btn.dataset.tab)?.classList.add("active");
      });
    });

    // Copy Link
    $("#shareCopyBtn")?.addEventListener("click", () => {
      navigator.clipboard.writeText(location.href);
      toast("Link copied to clipboard!", "success");
    });

    // Review Submission
    $("#productReviewForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      toast("Thank you! Your review has been submitted.", "success");
      e.target.reset();
    });

    // Related Products
    const rel = $("#relatedProducts");
    if (rel) {
      rel.innerHTML = Store.activeProducts()
        .filter((x) => x.category === p.category && x.id !== p.id)
        .slice(0, 4)
        .map(productCard)
        .join("");
    }
  }
};

/* ==========================================================================
   CHECKOUT CONTROLLER (MULTI-GATEWAY PAYMENT & INVOICE GENERATION)
   ========================================================================== */
const Checkout = {
  render() {
    const formBox = $("#checkoutFormContainer");
    const sumBox = $("#checkoutSummary");
    if (!formBox || !sumBox) return;

    const items = Store.cartItems();
    if (!items.length) {
      formBox.innerHTML = `<div class="empty">
        <i class="fa-solid fa-bag-shopping gold" style="font-size:2.5rem;margin-bottom:1rem;display:block"></i>
        <h3>Your shopping bag is empty</h3>
        <p style="margin:0.5rem 0 1.5rem">Add items to your bag to proceed with checkout.</p>
        <a class="btn" href="index.html#products">Browse Catalog</a>
      </div>`;
      sumBox.innerHTML = "";
      return;
    }

    const user = Auth.current() || {};
    let shippingMethod = "standard";

    formBox.innerHTML = `
      <form class="checkout-card" id="orderCheckoutForm">
        <h3><i class="fa-solid fa-location-dot gold"></i> 1. Contact & Shipping Address</h3>

        <div class="form-row">
          <div class="form-group"><label class="form-label">First Name</label><input class="form-input" name="firstName" value="${escapeHtml(user.firstName || '')}" required></div>
          <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" name="lastName" value="${escapeHtml(user.lastName || '')}" required></div>
        </div>

        <div class="form-row">
          <div class="form-group"><label class="form-label">Email Address</label><input class="form-input" name="email" type="email" value="${escapeHtml(user.email || '')}" required></div>
          <div class="form-group"><label class="form-label">Mobile Phone (e.g. 017XXXXXXXX)</label><input class="form-input" name="phone" value="${escapeHtml(user.phone || '')}" required></div>
        </div>

        <div class="form-group"><label class="form-label">Delivery Street Address</label><input class="form-input" name="address" placeholder="House, Road, Area, Ward" required></div>

        <div class="form-row-3">
          <div class="form-group"><label class="form-label">Division</label>
            <select class="form-select" name="division" id="checkoutDivision">
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Barishal">Barishal</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">District / City</label><input class="form-input" name="city" value="Dhaka" required></div>
          <div class="form-group"><label class="form-label">Postal Code</label><input class="form-input" name="zip" value="1340" required></div>
        </div>

        <h3 style="margin:2rem 0 1rem"><i class="fa-solid fa-truck gold"></i> 2. Delivery Method</h3>
        <div style="display:grid;gap:0.75rem;margin-bottom:1.5rem">
          <label class="pay-opt-card active" style="text-align:left;display:flex;align-items:center;justify-content:space-between">
            <div>
              <input type="radio" name="shippingMethod" value="standard" checked>
              <strong>Standard Nationwide Delivery (2–3 Days)</strong><br>
              <small style="color:var(--muted)">Free on orders over ${Store.money(Store.settings.freeShippingThreshold || 1500)}</small>
            </div>
            <strong>${Store.shippingFee("standard") === 0 ? "FREE" : Store.money(Store.settings.standardShippingFee || 80)}</strong>
          </label>

          <label class="pay-opt-card" style="text-align:left;display:flex;align-items:center;justify-content:space-between">
            <div>
              <input type="radio" name="shippingMethod" value="express">
              <strong>Express Metro Priority Dispatch (Same/Next Day)</strong><br>
              <small style="color:var(--muted)">Available for Dhaka Metro areas</small>
            </div>
            <strong>${Store.money(Store.settings.expressShippingFee || 160)}</strong>
          </label>
        </div>

        <h3 style="margin:2rem 0 1rem"><i class="fa-solid fa-credit-card gold"></i> 3. Payment Method</h3>
        <div class="pay-opts">
          <label class="pay-opt-card active" data-pay="cod">
            <input type="radio" name="paymentMethod" value="cod" checked>
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <span>Cash on Delivery</span>
          </label>
          <label class="pay-opt-card" data-pay="bkash">
            <input type="radio" name="paymentMethod" value="bkash">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span>bKash</span>
          </label>
          <label class="pay-opt-card" data-pay="nagad">
            <input type="radio" name="paymentMethod" value="nagad">
            <i class="fa-solid fa-bolt"></i>
            <span>Nagad</span>
          </label>
          <label class="pay-opt-card" data-pay="card">
            <input type="radio" name="paymentMethod" value="card">
            <i class="fa-solid fa-credit-card"></i>
            <span>Card (Visa/MC)</span>
          </label>
        </div>

        <!-- Payment Details Container -->
        <div id="paymentGatewayFields" class="pay-gateway-details">
          <p style="font-size:0.88rem;color:var(--muted)"><i class="fa-solid fa-shield-halved gold"></i> Pay comfortably with cash or card upon receiving your parcel at your doorstep.</p>
        </div>

        <button class="btn btn-lg" id="placeOrderSubmitBtn" style="width:100%;margin-top:2rem">
          <i class="fa-solid fa-lock"></i> Place Order · <span id="placeOrderTotalSpan">${Store.money(Store.cartTotal())}</span>
        </button>
      </form>
    `;

    const updateSummary = () => {
      const sub = Store.cartSubtotal();
      const disc = Store.discountAmount();
      const ship = Store.shippingFee(shippingMethod);
      const grandTotal = Store.cartTotal(shippingMethod);

      sumBox.innerHTML = `
        <div class="checkout-card">
          <h3 style="font-family:var(--serif);font-size:1.4rem;margin-bottom:1.25rem">Order Summary</h3>
          <div style="display:flex;flex-direction:column;gap:0.85rem;max-height:280px;overflow-y:auto;padding-right:0.5rem">
            ${items.map((i) => `<div class="cart-item" style="grid-template-columns:50px 1fr auto;padding:0.5rem">
              <img src="${escapeHtml(i.image || '')}" style="width:50px;height:50px;border-radius:4px;object-fit:cover" alt="${escapeHtml(i.name)}">
              <div>
                <strong style="font-size:0.86rem">${escapeHtml(Store.pname(i))}</strong><br>
                <small style="color:var(--muted)">Qty: ${i.qty} ${i.variant ? '· ' + escapeHtml(i.variant) : ''}</small>
              </div>
              <strong style="font-size:0.9rem">${Store.money(i.line)}</strong>
            </div>`).join("")}
          </div>

          <!-- Promo Code Form -->
          <div class="promo-input-wrap" style="margin-top:1.5rem">
            <input class="promo-input" id="checkoutPromoCode" placeholder="PROMO CODE" value="${Store.appliedCoupon ? escapeHtml(Store.appliedCoupon.code) : ''}">
            <button type="button" class="btn btn-sm" id="checkoutApplyPromo">Apply</button>
          </div>

          <div style="margin-top:1rem;border-top:1px solid var(--line-faint);padding-top:1rem">
            <div class="cart-total-row"><span>Subtotal</span><span>${Store.money(sub)}</span></div>
            ${disc > 0 ? `<div class="cart-total-row" style="color:var(--ok)"><span>Discount (${escapeHtml(Store.appliedCoupon.code)})</span><span>-${Store.money(disc)}</span></div>` : ''}
            <div class="cart-total-row"><span>Estimated Shipping</span><span>${ship === 0 ? '<strong class="gold">FREE</strong>' : Store.money(ship)}</span></div>
            <div class="cart-total-row grand-total"><span>Grand Total</span><span class="gold">${Store.money(grandTotal)}</span></div>
          </div>
        </div>
      `;

      const span = $("#placeOrderTotalSpan");
      if (span) span.textContent = Store.money(grandTotal);

      $("#checkoutApplyPromo")?.addEventListener("click", () => {
        const code = ($("#checkoutPromoCode")?.value || "").trim().toUpperCase();
        const match = Store.coupons.find((c) => c.code === code);
        if (match) {
          Store.appliedCoupon = match;
          Store.save("appliedCoupon", Store.appliedCoupon);
          toast("Coupon code applied!", "success");
          updateSummary();
        } else {
          toast("Invalid promo code", "danger");
        }
      });
    };

    updateSummary();

    // Payment Gateway Switcher
    $$(".pay-opts .pay-opt-card").forEach((card) => {
      card.addEventListener("click", () => {
        $$(".pay-opts .pay-opt-card").forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        const method = card.dataset.pay;
        const box = $("#paymentGatewayFields");
        if (method === "cod") {
          box.innerHTML = `<p style="font-size:0.88rem;color:var(--muted)"><i class="fa-solid fa-hand-holding-dollar gold"></i> Cash on Delivery: Pay the courier directly upon physical package arrival.</p>`;
        } else if (method === "bkash") {
          box.innerHTML = `<div style="display:flex;flex-direction:column;gap:0.75rem">
            <div style="background:rgba(226,19,110,0.15);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid rgba(226,19,110,0.3)">
              <strong style="color:#e2136e">bKash Merchant Payment</strong><br>
              <small>Send payment to Merchant Wallet: <strong>01617040846</strong></small>
            </div>
            <div class="form-group" style="margin:0"><label class="form-label">bKash Transaction ID (TrxID)</label><input class="form-input" name="bkashTrxId" placeholder="e.g. 9J82KD892" required></div>
          </div>`;
        } else if (method === "nagad") {
          box.innerHTML = `<div style="display:flex;flex-direction:column;gap:0.75rem">
            <div style="background:rgba(247,148,29,0.15);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid rgba(247,148,29,0.3)">
              <strong style="color:#f7941d">Nagad Merchant Payment</strong><br>
              <small>Send payment to Merchant Wallet: <strong>01617040846</strong></small>
            </div>
            <div class="form-group" style="margin:0"><label class="form-label">Nagad Transaction ID (TrxID)</label><input class="form-input" name="nagadTrxId" placeholder="e.g. NG839201" required></div>
          </div>`;
        } else if (method === "card") {
          box.innerHTML = `
            <div class="form-group"><label class="form-label">Cardholder Name</label><input class="form-input" name="cardName" placeholder="Name on card" required></div>
            <div class="form-group"><label class="form-label">Card Number</label><input class="form-input" name="cardNumber" placeholder="4000 1234 5678 9010" maxlength="19" required></div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Expiry Date</label><input class="form-input" name="cardExp" placeholder="MM/YY" maxlength="5" required></div>
              <div class="form-group"><label class="form-label">CVV / CVC</label><input class="form-input" name="cardCvv" placeholder="123" maxlength="4" required></div>
            </div>
          `;
        }
      });
    });

    // Shipping Method Toggle
    $$("input[name=shippingMethod]").forEach((radio) => {
      radio.addEventListener("change", (e) => {
        shippingMethod = e.target.value;
        $$("input[name=shippingMethod]").forEach((r) => r.closest(".pay-opt-card").classList.toggle("active", r.checked));
        updateSummary();
      });
    });

    // Order Submission Handler
    $("#orderCheckoutForm").onsubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const orderData = Object.fromEntries(fd);
      const shipFee = Store.shippingFee(shippingMethod);
      const grandTotal = Store.cartTotal(shippingMethod);

      const orderId = "IQ-" + Math.floor(100000 + Math.random() * 900000);
      const order = {
        id: orderId,
        date: new Date().toISOString(),
        items: items.map((i) => ({ id: i.id, name: i.name, nameBn: i.nameBn, qty: i.qty, price: i.price, variant: i.variant })),
        subtotal: Store.cartSubtotal(),
        discount: Store.discountAmount(),
        shipping: shipFee,
        total: grandTotal,
        currency: Store.currency,
        status: "pending",
        shippingMethod: shippingMethod,
        paymentMethod: orderData.paymentMethod || "cod",
        customer: {
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          email: orderData.email,
          phone: orderData.phone,
          address: orderData.address,
          city: orderData.city,
          division: orderData.division,
          zip: orderData.zip
        },
        trackingNumber: "TRK-" + Math.floor(10000000 + Math.random() * 90000000)
      };

      // Deduct inventory
      items.forEach((item) => {
        const prod = Store.products.find((p) => p.id === item.id);
        if (prod) prod.stock = Math.max(0, prod.stock - item.qty);
      });

      Store.orders.unshift(order);
      Store.cart = [];
      Store.appliedCoupon = null;
      Store.persistAll();

      SoundFX.play("success");

      // Render Order Confirmation & Printable Receipt
      formBox.innerHTML = `
        <div class="order-success-hero">
          <div class="order-check-icon"><i class="fa-solid fa-check"></i></div>
          <h2 style="font-family:var(--serif);font-size:2.4rem;margin-bottom:0.5rem">Order Confirmed!</h2>
          <p style="color:var(--muted);font-size:1.05rem">Thank you, <strong>${escapeHtml(order.customer.firstName)}</strong>. Your order is registered in our ledger.</p>
          <div style="background:var(--bg-elev);padding:1rem;border-radius:var(--radius-md);border:1px solid var(--line);display:inline-block;margin:1.5rem 0">
            Order Reference: <strong class="gold" style="font-size:1.2rem">${order.id}</strong><br>
            Tracking Code: <strong>${order.trackingNumber}</strong>
          </div>

          <!-- Live Order Timeline -->
          <div class="order-timeline">
            <div class="timeline-step completed"><div class="step-circle"><i class="fa-solid fa-check"></i></div><strong>Placed</strong><small>Just now</small></div>
            <div class="timeline-step active"><div class="step-circle"><i class="fa-solid fa-box"></i></div><strong>Processing</strong><small>Warehouse</small></div>
            <div class="timeline-step"><div class="step-circle"><i class="fa-solid fa-truck-fast"></i></div><strong>Shipped</strong><small>Courier</small></div>
            <div class="timeline-step"><div class="step-circle"><i class="fa-solid fa-house"></i></div><strong>Delivered</strong><small>Destination</small></div>
          </div>

          <!-- Printable Invoice Box -->
          <div class="printable-invoice checkout-card" style="text-align:left;margin-top:2rem">
            <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:1rem;margin-bottom:1.5rem">
              <div class="logo">
                <div class="logo-mark">I</div>
                <div><div class="logo-text">Iqra Mart</div><div class="logo-sub">Official Tax Invoice</div></div>
              </div>
              <div style="text-align:right">
                <strong>Invoice: ${order.id}</strong><br>
                <small style="color:var(--muted)">Date: ${order.date.slice(0, 10)}</small>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem">
              <div>
                <strong style="color:var(--gold)">Shipped To:</strong><br>
                ${escapeHtml(order.customer.firstName)} ${escapeHtml(order.customer.lastName)}<br>
                ${escapeHtml(order.customer.address)}<br>
                ${escapeHtml(order.customer.city)}, ${escapeHtml(order.customer.division)} - ${escapeHtml(order.customer.zip)}<br>
                Phone: ${escapeHtml(order.customer.phone)}
              </div>
              <div style="text-align:right">
                <strong style="color:var(--gold)">Payment Details:</strong><br>
                Method: ${escapeHtml(order.paymentMethod.toUpperCase())}<br>
                Status: Verified / Cash on Delivery<br>
                Delivery: ${escapeHtml(order.shippingMethod)}
              </div>
            </div>

            <table class="specs-table" style="margin-bottom:1.5rem">
              <thead>
                <tr><th style="width:50%">Item</th><th>Qty</th><th>Unit Price</th><th style="text-align:right">Total</th></tr>
              </thead>
              <tbody>
                ${order.items.map((i) => `<tr>
                  <td>${escapeHtml(i.name)} ${i.variant ? `<small>(${escapeHtml(i.variant)})</small>` : ''}</td>
                  <td>${i.qty}</td>
                  <td>${Store.money(i.price)}</td>
                  <td style="text-align:right">${Store.money(i.price * i.qty)}</td>
                </tr>`).join("")}
              </tbody>
            </table>

            <div style="display:flex;justify-content:flex-end">
              <div style="width:260px">
                <div class="cart-total-row"><span>Subtotal:</span><span>${Store.money(order.subtotal)}</span></div>
                ${order.discount > 0 ? `<div class="cart-total-row" style="color:var(--ok)"><span>Discount:</span><span>-${Store.money(order.discount)}</span></div>` : ''}
                <div class="cart-total-row"><span>Shipping:</span><span>${order.shipping === 0 ? 'FREE' : Store.money(order.shipping)}</span></div>
                <div class="cart-total-row grand-total"><span>Total Paid:</span><span class="gold">${Store.money(order.total)}</span></div>
              </div>
            </div>
          </div>

          <div style="display:flex;gap:1rem;justify-content:center;margin-top:2rem">
            <button class="btn" onclick="window.print()"><i class="fa-solid fa-print"></i> Print Official Invoice</button>
            <a class="btn btn-outline" href="index.html">Return to Storefront</a>
          </div>
        </div>
      `;
      sumBox.innerHTML = "";
    };
  }
};

/* ==========================================================================
   ACCOUNT PORTAL & ORDER TRACKING CONTROLLER
   ========================================================================== */
const AccountPage = {
  render() {
    const root = $("#accountRoot");
    if (!root) return;

    const user = Auth.current();
    if (!user) {
      root.innerHTML = `
        <div class="checkout-card" style="max-width:540px;margin:0 auto;text-align:center">
          <i class="fa-solid fa-user-lock gold" style="font-size:3rem;margin-bottom:1rem"></i>
          <h2 style="font-family:var(--serif);margin-bottom:0.75rem">Customer Account Portal</h2>
          <p style="color:var(--muted);margin-bottom:1.5rem">Please sign in to view your order history, manage addresses, and access saved wishlist items.</p>
          <button class="btn btn-lg" onclick="$('#authModal')?.classList.add('open')">Sign In / Register</button>
          
          <div style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--line-faint)">
            <h4>Guest Order Tracker</h4>
            <p style="color:var(--muted);font-size:0.88rem;margin:0.4rem 0 1rem">Have an Order ID? Track your delivery progress instantly.</p>
            <div style="display:flex;gap:0.5rem">
              <input class="form-input" id="guestTrackingInput" placeholder="e.g. IQ-829104">
              <button class="btn btn-sm" id="guestTrackBtn">Track</button>
            </div>
            <div id="guestTrackingResult" style="margin-top:1rem;text-align:left"></div>
          </div>
        </div>
      `;

      $("#guestTrackBtn")?.addEventListener("click", () => {
        const q = ($("#guestTrackingInput")?.value || "").trim();
        const o = Store.orders.find((x) => x.id.toLowerCase() === q.toLowerCase() || x.trackingNumber?.toLowerCase() === q.toLowerCase());
        const resBox = $("#guestTrackingResult");
        if (!resBox) return;
        if (o) {
          resBox.innerHTML = `<div class="checkout-card" style="padding:1rem;margin-top:1rem">
            <strong>Order Found: ${o.id}</strong> · <span class="status ${o.status}">${o.status}</span><br>
            <small style="color:var(--muted)">Recipient: ${escapeHtml(o.customer?.firstName)} · Destination: ${escapeHtml(o.customer?.city)}</small>
            <div class="order-timeline" style="margin:1.5rem 0 0.5rem">
              <div class="timeline-step completed"><div class="step-circle">✓</div><small>Placed</small></div>
              <div class="timeline-step ${o.status !== 'pending' ? 'completed' : 'active'}"><div class="step-circle">📦</div><small>Packed</small></div>
              <div class="timeline-step ${o.status === 'shipped' || o.status === 'delivered' ? 'completed' : ''}"><div class="step-circle">🚚</div><small>Shipped</small></div>
              <div class="timeline-step ${o.status === 'delivered' ? 'completed' : ''}"><div class="step-circle">🏠</div><small>Delivered</small></div>
            </div>
          </div>`;
        } else {
          resBox.innerHTML = `<p style="color:var(--danger)">No order found with reference "${escapeHtml(q)}"</p>`;
        }
      });
      return;
    }

    const orders = Store.orders.filter((o) => o.customer?.email === user.email);

    root.innerHTML = `
      <div class="admin-layout" style="min-height:auto;gap:2rem">
        <aside class="checkout-card" style="height:fit-content">
          <div style="text-align:center;padding-bottom:1.5rem;border-bottom:1px solid var(--line-faint);margin-bottom:1.5rem">
            <div class="logo-mark" style="width:64px;height:64px;font-size:1.8rem;margin:0 auto 1rem">${escapeHtml(user.firstName?.[0] || 'U')}</div>
            <h3>${escapeHtml(user.firstName || '')} ${escapeHtml(user.lastName || '')}</h3>
            <small style="color:var(--muted)">${escapeHtml(user.email)}</small>
          </div>
          <nav style="display:flex;flex-direction:column;gap:0.4rem">
            <button class="admin-nav-item active" data-ap="overview"><i class="fa-solid fa-gauge"></i> Overview</button>
            <button class="admin-nav-item" data-ap="orders"><i class="fa-solid fa-box"></i> Orders (${orders.length})</button>
            <button class="admin-nav-item" data-ap="wishlist"><i class="fa-solid fa-heart"></i> Wishlist (${Store.wishlist.length})</button>
            <button class="admin-nav-item" data-ap="profile"><i class="fa-solid fa-user-gear"></i> Profile Settings</button>
            <button class="admin-nav-item" id="accLogoutBtn" style="color:var(--danger)"><i class="fa-solid fa-right-from-bracket"></i> Log Out</button>
          </nav>
        </aside>

        <main>
          <!-- Pane: Overview -->
          <div class="account-pane" id="pane-overview">
            <div class="admin-stats-grid">
              <div class="admin-stat-card"><b>${orders.length}</b><span>Total Orders</span></div>
              <div class="admin-stat-card"><b>${Store.wishlist.length}</b><span>Wishlist Items</span></div>
              <div class="admin-stat-card"><b>${Store.money(orders.reduce((s, o) => s + o.total, 0))}</b><span>Total Spent</span></div>
            </div>

            <div class="checkout-card" style="margin-top:1.5rem">
              <h3>Recent Order Activity</h3>
              ${orders.length ? `<table class="admin-table">
                <thead><tr><th>Order ID</th><th>Date</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  ${orders.slice(0, 5).map((o) => `<tr>
                    <td><strong>${o.id}</strong></td>
                    <td>${o.date.slice(0, 10)}</td>
                    <td><strong>${Store.money(o.total)}</strong></td>
                    <td><span class="status ${o.status}">${o.status}</span></td>
                    <td><button class="btn-sm btn-outline" data-acc-invoice="${o.id}">Invoice</button></td>
                  </tr>`).join("")}
                </tbody>
              </table>` : `<p class="empty">No orders placed yet.</p>`}
            </div>
          </div>

          <!-- Pane: Orders -->
          <div class="account-pane" id="pane-orders" style="display:none">
            <div class="checkout-card">
              <h3>All Orders</h3>
              ${orders.length ? `<div style="display:flex;flex-direction:column;gap:1rem">
                ${orders.map((o) => `<div class="checkout-card" style="padding:1.25rem;background:var(--bg-elev)">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
                    <div><strong>${o.id}</strong> · <small style="color:var(--muted)">${o.date.slice(0, 10)}</small></div>
                    <span class="status ${o.status}">${o.status}</span>
                  </div>
                  <p style="font-size:0.88rem;color:var(--ink-secondary);margin-bottom:0.75rem">
                    ${o.items.map((i) => `${escapeHtml(i.name)} × ${i.qty}`).join(", ")}
                  </p>
                  <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line-faint);padding-top:0.75rem">
                    <strong class="gold">${Store.money(o.total)}</strong>
                    <button class="btn btn-sm btn-outline" data-acc-invoice="${o.id}">View Printable Invoice</button>
                  </div>
                </div>`).join("")}
              </div>` : `<p class="empty">No order history available.</p>`}
            </div>
          </div>

          <!-- Pane: Wishlist -->
          <div class="account-pane" id="pane-wishlist" style="display:none">
            <div class="checkout-card">
              <h3>Saved Wishlist</h3>
              <div class="products-grid" style="margin-top:1.5rem">
                ${Store.wishlist.map((id) => Store.products.find((p) => p.id == id)).filter(Boolean).map(productCard).join("") || `<p class="empty" style="grid-column:1/-1">Your wishlist is empty.</p>`}
              </div>
            </div>
          </div>

          <!-- Pane: Profile -->
          <div class="account-pane" id="pane-profile" style="display:none">
            <div class="checkout-card">
              <h3>Account & Profile Settings</h3>
              <form id="accProfileForm" style="margin-top:1.25rem">
                <div class="form-row">
                  <div class="form-group"><label class="form-label">First Name</label><input class="form-input" name="firstName" value="${escapeHtml(user.firstName || '')}" required></div>
                  <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" name="lastName" value="${escapeHtml(user.lastName || '')}" required></div>
                </div>
                <div class="form-group"><label class="form-label">Mobile Phone</label><input class="form-input" name="phone" value="${escapeHtml(user.phone || '')}"></div>
                <div class="form-group"><label class="form-label">New Password (leave blank to keep current)</label><input class="form-input" name="password" type="password" minlength="4"></div>
                <button class="btn" style="margin-top:1rem">Save Profile</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    `;

    // Navigation Switcher
    $$(".admin-nav-item[data-ap]").forEach((btn) => {
      btn.onclick = () => {
        $$(".admin-nav-item[data-ap]").forEach((b) => b.classList.remove("active"));
        $$(".account-pane").forEach((p) => { p.style.display = "none"; });
        btn.classList.add("active");
        $("#pane-" + btn.dataset.ap).style.display = "block";
      };
    });

    $("#accLogoutBtn")?.addEventListener("click", () => Auth.logout());

    $("#accProfileForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(e.target));
      const payload = { firstName: fd.firstName, lastName: fd.lastName, phone: fd.phone };
      if (fd.password) payload.password = fd.password;
      Auth.update(payload);
      toast("Profile updated successfully!", "success");
    });
  }
};

/* ==========================================================================
   BLOG & JOURNAL CONTROLLER
   ========================================================================== */
const BlogPage = {
  render() {
    const list = $("#blogList");
    const reader = $("#blogReader");
    const id = +new URLSearchParams(location.search).get("id");
    const post = Store.posts.find((p) => p.id === id) || Store.posts[0];

    if (reader && post) {
      document.title = `${post.title} · Iqra Mart Journal`;
      reader.innerHTML = `
        <article class="checkout-card" style="max-width:820px;margin:0 auto;line-height:1.8">
          <div style="font-size:0.8rem;color:var(--gold);font-weight:600;margin-bottom:0.5rem">${escapeHtml(post.category)} · ${escapeHtml(post.date)} · ${escapeHtml(post.readTime)}</div>
          <h1 style="font-family:var(--serif);font-size:clamp(2.2rem, 4vw, 3.2rem);line-height:1.2;margin-bottom:1.5rem">${escapeHtml(post.title)}</h1>
          <div style="color:var(--ink-secondary);font-size:1.1rem;margin-bottom:2rem">${post.content}</div>
          
          <div style="border-top:1px solid var(--line-faint);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center">
            <a href="blog.html" class="btn btn-outline btn-sm">← Back to all stories</a>
            <div style="display:flex;gap:0.5rem">
              <button class="icon-btn" onclick="navigator.clipboard.writeText(location.href);toast('Link copied!')" title="Share"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
          </div>
        </article>
      `;
    }

    if (list) {
      list.innerHTML = Store.posts.filter((p) => p.status === "published").map((p) => `
        <article class="cat-card" style="text-align:left">
          <div style="font-size:0.75rem;color:var(--gold);font-weight:600;margin-bottom:0.4rem">${escapeHtml(p.category)} · ${escapeHtml(p.date)} · ${escapeHtml(p.readTime)}</div>
          <h3 style="font-size:1.25rem;margin-bottom:0.6rem"><a href="blog.html?id=${p.id}">${escapeHtml(p.title)}</a></h3>
          <p style="color:var(--muted);font-size:0.92rem;margin-bottom:1.25rem">${escapeHtml(p.excerpt)}</p>
          <a href="blog.html?id=${p.id}" class="btn btn-outline btn-sm">Read Story →</a>
        </article>
      `).join("");
    }
  }
};

/* ==========================================================================
   CONTACT & INTERACTIVE LIVE CHAT CONTROLLER
   ========================================================================== */
const ContactPage = {
  bind() {
    const f = $("#contactForm");
    if (f) {
      f.onsubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(f));
        Store.messages.unshift({ id: uid(), ...data, date: new Date().toISOString(), read: false });
        Store.save("messages", Store.messages);
        SoundFX.play("success");
        toast("Your inquiry has been logged. Support team will respond within 24 hours.", "success");
        f.reset();
      };
    }

    // Interactive FAQ Accordion
    $$(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        item.classList.toggle("open");
      });
    });
  }
};

/* Automated Interactive Live Chatbot */
const LiveChat = {
  init() {
    let bubble = $(".live-chat-bubble");
    if (!bubble) {
      bubble = document.createElement("div");
      bubble.className = "live-chat-bubble";
      bubble.innerHTML = `<i class="fa-solid fa-comments"></i>`;
      bubble.title = "Live Customer Support";
      document.body.appendChild(bubble);

      const win = document.createElement("div");
      win.className = "live-chat-window";
      win.id = "liveChatWindow";
      win.innerHTML = `
        <div class="chat-header">
          <div class="chat-agent-info">
            <div class="agent-avatar">I</div>
            <div>
              <strong style="font-size:0.92rem">Iqra Support Desk</strong><br>
              <small style="color:var(--ok)"><span class="agent-status-dot"></span> Online · Active Assistant</small>
            </div>
          </div>
          <button id="chatCloseBtn" class="modal-close" style="position:static;width:28px;height:28px;font-size:0.8rem"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="chat-messages-body" id="chatMsgBody">
          <div class="chat-msg bot">
            Hello! Welcome to Iqra Online Mart. How can we assist you today? You can ask about order tracking, delivery timelines, payment options, or product recommendations.
          </div>
        </div>
        <form class="chat-input-footer" id="chatInputForm">
          <input class="chat-input" id="chatInputField" placeholder="Type a message..." required>
          <button class="btn btn-sm" type="submit"><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      `;
      document.body.appendChild(win);

      bubble.onclick = () => win.classList.toggle("open");
      $("#chatCloseBtn").onclick = () => win.classList.remove("open");

      $("#chatInputForm").onsubmit = (e) => {
        e.preventDefault();
        const input = $("#chatInputField");
        const msg = input.value.trim();
        if (!msg) return;

        const body = $("#chatMsgBody");
        const userMsg = document.createElement("div");
        userMsg.className = "chat-msg user";
        userMsg.textContent = msg;
        body.appendChild(userMsg);
        input.value = "";
        body.scrollTop = body.scrollHeight;

        SoundFX.play("click");

        // Automated Intelligent Bot Response Simulator
        setTimeout(() => {
          const botMsg = document.createElement("div");
          botMsg.className = "chat-msg bot";
          const lower = msg.toLowerCase();

          if (lower.includes("track") || lower.includes("order")) {
            botMsg.textContent = "To track any order, go to the Account page and enter your Order ID (e.g. IQ-123456) in the guest tracker, or check your account dashboard.";
          } else if (lower.includes("shipping") || lower.includes("delivery") || lower.includes("time")) {
            botMsg.textContent = "We provide standard nationwide delivery in 2–3 days (৳80, free over ৳1500) and express next-day delivery in Dhaka Metro (৳160).";
          } else if (lower.includes("bkash") || lower.includes("nagad") || lower.includes("payment")) {
            botMsg.textContent = "We support Cash on Delivery nationwide, bKash/Nagad merchant payments, and all major Credit/Debit cards.";
          } else if (lower.includes("contact") || lower.includes("human") || lower.includes("phone")) {
            botMsg.textContent = "You can call or WhatsApp our support team directly at +880 1617 040846 or email iqrabintesobuj@gmail.com.";
          } else {
            botMsg.textContent = "Thank you for reaching out! Our team is available Sat–Thu for custom inquiries. You can also explore our curated collections on the home page.";
          }

          body.appendChild(botMsg);
          body.scrollTop = body.scrollHeight;
          SoundFX.play("chime");
        }, 600);
      };
    }
  }
};

/* ==========================================================================
   ENTERPRISE CMS & ADMIN DASHBOARD CONTROLLER
   ========================================================================== */
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
    this.coupons();
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
    const lowStockCount = Store.products.filter((p) => p.stock < 10).length;

    el.innerHTML = [
      ["Total Revenue", Store.money(rev)],
      ["Total Orders", Store.orders.length],
      ["Active SKUs", Store.products.length],
      ["Low Stock Alerts", lowStockCount]
    ].map(([l, v]) => `<div class="admin-stat-card"><b>${v}</b><span>${l}</span></div>`).join("");

    const ro = $("#recentOrders");
    if (ro) {
      ro.innerHTML = Store.orders.slice(0, 5).map((o) => `
        <div class="cart-item" style="grid-template-columns:1fr auto;padding:0.75rem">
          <div><strong>${o.id}</strong> · ${escapeHtml(o.customer?.firstName || '')} ${escapeHtml(o.customer?.lastName || '')}<br><small style="color:var(--muted)">${o.date.slice(0, 10)}</small></div>
          <div style="text-align:right"><strong>${Store.money(o.total)}</strong><br><span class="status ${o.status}">${o.status}</span></div>
        </div>
      `).join("") || "<p class='empty'>No orders in ledger</p>";
    }
  },

  products() {
    const tb = $("#productsTableBody");
    if (!tb) return;
    const q = ($("#productSearch")?.value || "").toLowerCase();

    tb.innerHTML = Store.products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).map((p) => `<tr>
      <td><img src="${escapeHtml(p.image || '')}" style="width:36px;height:36px;border-radius:4px;object-fit:cover" alt="${escapeHtml(p.name)}"></td>
      <td><strong>${escapeHtml(p.name)}</strong><br><small style="color:var(--muted)">SKU: ${escapeHtml(p.sku || '')}</small></td>
      <td>${escapeHtml(p.category)}</td>
      <td>${Store.money(p.price)}</td>
      <td><span class="status ${p.status || 'active'}">${p.status || 'active'}</span></td>
      <td><strong class="${p.stock < 10 ? 'gold' : ''}">${p.stock}</strong></td>
      <td>
        <button class="btn-sm btn-outline" data-edp="${p.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-sm btn-ghost" data-delp="${p.id}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`).join("") || "<tr><td colspan='7'>No products found</td></tr>";

    const sel = $("[name=category]", $("#productForm") || document);
    if (sel && sel.tagName === "SELECT") {
      sel.innerHTML = Store.categories.map((c) => `<option value="${escapeHtml(c.name)}">${escapeHtml(c.name)}</option>`).join("");
    }
  },

  categories() {
    const tb = $("#categoriesTableBody");
    if (!tb) return;
    tb.innerHTML = Store.categories.map((c) => `<tr>
      <td><i class="fa-solid ${escapeHtml(c.icon)} gold"></i></td>
      <td><strong>${escapeHtml(c.name)}</strong><br><small style="color:var(--muted)">${escapeHtml(c.nameBn || '')}</small></td>
      <td>${escapeHtml(c.description)}</td>
      <td>${Store.products.filter((p) => p.category.toLowerCase() === c.name.toLowerCase()).length}</td>
      <td>
        <button class="btn-sm btn-outline" data-edc="${c.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-sm btn-ghost" data-delc="${c.id}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`).join("");
  },

  orders() {
    const tb = $("#ordersTableBody");
    if (!tb) return;
    tb.innerHTML = Store.orders.map((o) => `<tr>
      <td><strong>${o.id}</strong><br><small style="color:var(--muted)">${o.trackingNumber || ''}</small></td>
      <td>${escapeHtml(o.customer?.firstName || '')} ${escapeHtml(o.customer?.lastName || '')}<br><small style="color:var(--muted)">${escapeHtml(o.customer?.phone || '')}</small></td>
      <td>${o.date.slice(0, 10)}</td>
      <td>${o.items?.length || 0} items</td>
      <td><strong>${Store.money(o.total)}</strong></td>
      <td>
        <select data-ost="${o.id}" class="form-select" style="padding:0.25rem 1.5rem 0.25rem 0.5rem;font-size:0.78rem">
          ${["pending", "processing", "shipped", "delivered", "cancelled"].map((s) => `<option value="${s}" ${o.status === s ? 'selected' : ''}>${s}</option>`).join("")}
        </select>
      </td>
      <td>
        <button class="btn-sm btn-outline" data-vo="${o.id}"><i class="fa-solid fa-file-invoice"></i></button>
        <button class="btn-sm btn-ghost" data-delo="${o.id}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`).join("") || "<tr><td colspan='7'>No orders logged</td></tr>";
  },

  coupons() {
    const tb = $("#couponsTableBody");
    if (!tb) return;
    tb.innerHTML = Store.coupons.map((c, idx) => `<tr>
      <td><strong class="gold">${escapeHtml(c.code)}</strong></td>
      <td>${c.type === 'percent' ? c.value + '%' : c.type === 'fixed' ? Store.money(c.value) : 'Free Delivery'}</td>
      <td>${Store.money(c.minOrder)}</td>
      <td>${escapeHtml(c.description)}</td>
      <td><button class="btn-sm btn-ghost" data-delcoupon="${idx}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`).join("") || "<tr><td colspan='5'>No promo coupons created</td></tr>";
  },

  posts() {
    const tb = $("#postsTableBody");
    if (!tb) return;
    tb.innerHTML = Store.posts.map((p) => `<tr>
      <td><strong>${escapeHtml(p.title)}</strong></td>
      <td>${escapeHtml(p.category)}</td>
      <td>${p.date}</td>
      <td><span class="status ${p.status}">${p.status}</span></td>
      <td>
        <button class="btn-sm btn-outline" data-edpost="${p.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-sm btn-ghost" data-delpost="${p.id}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`).join("");
  },

  testimonials() {
    const tb = $("#testimonialsTableBody");
    if (!tb) return;
    tb.innerHTML = Store.testimonials.map((t) => `<tr>
      <td><strong>${escapeHtml(t.name)}</strong></td>
      <td>${escapeHtml(t.role)}</td>
      <td>${escapeHtml(t.text.slice(0, 48))}…</td>
      <td>${stars(t.rating)}</td>
      <td><button class="btn-sm btn-ghost" data-delt="${t.id}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`).join("");
  },

  subscribers() {
    const tb = $("#subscribersTableBody");
    if (!tb) return;
    tb.innerHTML = Store.subscribers.map((e, idx) => `<tr>
      <td>${escapeHtml(e)}</td>
      <td>Active</td>
      <td><button class="btn-sm btn-ghost" data-delsub="${idx}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`).join("") || "<tr><td colspan='3'>No newsletter subscribers yet</td></tr>";
  },

  messages() {
    const tb = $("#messagesTableBody");
    if (!tb) return;
    tb.innerHTML = Store.messages.map((m) => `<tr>
      <td><strong>${escapeHtml(m.name || m.email)}</strong></td>
      <td>${escapeHtml(m.subject || '')}</td>
      <td>${(m.date || '').slice(0, 10)}</td>
      <td>
        <button class="btn-sm btn-outline" data-vm="${m.id}">Read</button>
        <button class="btn-sm btn-ghost" data-delm="${m.id}" style="color:var(--danger)"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`).join("") || "<tr><td colspan='4'>No customer inquiries</td></tr>";
  },

  settingsForm() {
    const f = $("#settingsForm");
    if (!f) return;
    const s = Store.settings;
    if (f.siteName) f.siteName.value = s.siteName || "";
    if (f.tagline) f.tagline.value = s.tagline || "";
    if (f.motto) f.motto.value = s.motto || "";
    if (f.email) f.email.value = s.email || "";
    if (f.phone) f.phone.value = s.phone || "";
    if (f.address) f.address.value = s.address || "";
    if (f.currency) f.currency.value = s.currency || "BDT";
    if (f.freeShippingThreshold) f.freeShippingThreshold.value = s.freeShippingThreshold || 1500;
    if (f.adminUsername) f.adminUsername.value = s.adminCredentials?.username || "admin";
  },

  pagesForm() {
    this.drawPage("hero");
  },

  drawPage(which) {
    const box = $("#pageContent");
    if (!box) return;
    const p = Store.pages[which] || {};
    box.innerHTML = Object.keys(p).map((k) => `<div class="form-group">
      <label class="form-label">${escapeHtml(k)}</label>
      <textarea class="form-textarea" name="${escapeHtml(k)}">${escapeHtml(p[k] || '')}</textarea>
    </div>`).join("");
    box.dataset.page = which;
  },

  openModal(id) { $("#" + id)?.classList.add("open"); },
  closeModals() { $$(".modal").forEach((m) => m.classList.remove("open")); },

  fill(form, obj) {
    if (!form || !obj) return;
    [...form.elements].forEach((el) => {
      if (!el.name || el.type === "submit") return;
      if (obj[el.name] !== undefined && obj[el.name] !== null) el.value = obj[el.name];
    });
  },

  bind() {
    if (!$(".admin-layout")) return;
    if (!AdminAuth.is()) {
      location.href = "admin-login.html";
      return;
    }

    this.renderAll();

    $$(".admin-nav-item[data-section]").forEach((b) => b.onclick = () => this.switchSection(b.dataset.section));
    $("#adminLogout")?.addEventListener("click", () => AdminAuth.logout());

    // Mobile Sidebar Toggles
    $("#adminSidebarToggle")?.addEventListener("click", () => $(".admin-sidebar")?.classList.add("open"));
    $("#adminSidebarClose")?.addEventListener("click", () => $(".admin-sidebar")?.classList.remove("open"));

    // Modal Open Buttons
    $$("[data-open-modal]").forEach((b) => b.onclick = () => {
      const id = b.dataset.openModal;
      const form = $("#" + id.replace("Modal", "Form"));
      if (form) form.reset();
      this.openModal(id);
    });

    $$("[data-close-modal]").forEach((b) => b.onclick = () => this.closeModals());

    $("#productSearch")?.addEventListener("input", () => this.products());

    // Product Form Submit
    $("#productForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      d.price = +d.price;
      d.oldPrice = d.oldPrice ? +d.oldPrice : null;
      d.stock = +d.stock;
      d.rating = +d.rating;
      d.featured = d.featured === "true";
      d.status = "active";

      if (d.id) {
        const i = Store.products.findIndex((p) => p.id == d.id);
        Store.products[i] = { ...Store.products[i], ...d, id: +d.id };
      } else {
        Store.products.unshift({
          ...d,
          id: uid(),
          reviews: 0,
          gallery: d.image ? [d.image] : [],
          createdAt: new Date().toISOString().slice(0, 10)
        });
      }
      Store.save("products", Store.products);
      this.closeModals();
      this.products();
      this.stats();
      toast("Product catalog updated", "success");
    });

    // Category Form Submit
    $("#categoryForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      if (d.id) {
        const i = Store.categories.findIndex((c) => c.id == d.id);
        Store.categories[i] = { ...Store.categories[i], ...d };
      } else {
        Store.categories.push({ ...d, id: d.name.toLowerCase().replace(/\s+/g, "-") });
      }
      Store.save("categories", Store.categories);
      this.closeModals();
      this.categories();
      toast("Category saved", "success");
    });

    // Coupon Form Submit
    $("#couponForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      d.code = d.code.trim().toUpperCase();
      d.value = +d.value;
      d.minOrder = +d.minOrder;
      Store.coupons.push(d);
      Store.save("coupons", Store.coupons);
      this.closeModals();
      this.coupons();
      toast("Coupon code created", "success");
    });

    // Delegated Admin Actions
    document.addEventListener("click", (e) => {
      const edp = e.target.closest("[data-edp]");
      if (edp) {
        const p = Store.products.find((x) => x.id == edp.dataset.edp);
        this.fill($("#productForm"), { ...p, featured: String(!!p.featured) });
        this.openModal("productModal");
      }
      const delp = e.target.closest("[data-delp]");
      if (delp && confirm("Are you sure you want to delete this product?")) {
        Store.products = Store.products.filter((p) => p.id != delp.dataset.delp);
        Store.save("products", Store.products);
        this.products();
        this.stats();
      }
      const edc = e.target.closest("[data-edc]");
      if (edc) {
        this.fill($("#categoryForm"), Store.categories.find((c) => c.id == edc.dataset.edc));
        this.openModal("categoryModal");
      }
      const delc = e.target.closest("[data-delc]");
      if (delc && confirm("Delete category?")) {
        Store.categories = Store.categories.filter((c) => c.id != delc.dataset.delc);
        Store.save("categories", Store.categories);
        this.categories();
      }
      const delcoupon = e.target.closest("[data-delcoupon]");
      if (delcoupon) {
        Store.coupons.splice(+delcoupon.dataset.delcoupon, 1);
        Store.save("coupons", Store.coupons);
        this.coupons();
      }
      const vo = e.target.closest("[data-vo]");
      if (vo) {
        const o = Store.orders.find((x) => x.id == vo.dataset.vo);
        if (o) {
          $("#orderContent").innerHTML = `
            <div class="checkout-card" style="padding:1rem">
              <h3>Order ${o.id} · <span class="status ${o.status}">${o.status}</span></h3>
              <p><strong>Customer:</strong> ${escapeHtml(o.customer?.firstName)} ${escapeHtml(o.customer?.lastName)}<br>
                 <strong>Phone:</strong> ${escapeHtml(o.customer?.phone)}<br>
                 <strong>Address:</strong> ${escapeHtml(o.customer?.address)}, ${escapeHtml(o.customer?.city)}</p>
              <table class="specs-table" style="margin:1rem 0">
                <thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead>
                <tbody>${o.items.map((i) => `<tr><td>${escapeHtml(i.name)}</td><td>${i.qty}</td><td>${Store.money(i.price * i.qty)}</td></tr>`).join("")}</tbody>
              </table>
              <strong class="gold" style="font-size:1.2rem">Total: ${Store.money(o.total)}</strong> (${escapeHtml(o.paymentMethod || 'COD')})
            </div>
          `;
          this.openModal("orderModal");
        }
      }
      const delo = e.target.closest("[data-delo]");
      if (delo && confirm("Delete order record?")) {
        Store.orders = Store.orders.filter((o) => o.id != delo.dataset.delo);
        Store.save("orders", Store.orders);
        this.orders();
        this.stats();
      }
      const vm = e.target.closest("[data-vm]");
      if (vm) {
        const m = Store.messages.find((x) => x.id == vm.dataset.vm);
        if (m) {
          alert(`Message from ${m.name} <${m.email}>\nSubject: ${m.subject}\n\n${m.message}`);
        }
      }
    });

    // Order Status Dropdown Change
    document.addEventListener("change", (e) => {
      const s = e.target.closest("[data-ost]");
      if (s) {
        const o = Store.orders.find((x) => x.id == s.dataset.ost);
        if (o) {
          o.status = s.value;
          Store.save("orders", Store.orders);
          this.stats();
          toast(`Order ${o.id} status updated to ${s.value}`, "success");
        }
      }
    });

    // Database JSON Export
    $("#exportDbBtn")?.addEventListener("click", () => {
      const dump = {
        products: Store.products,
        categories: Store.categories,
        coupons: Store.coupons,
        orders: Store.orders,
        posts: Store.posts,
        settings: Store.settings,
        pages: Store.pages
      };
      const blob = new Blob([JSON.stringify(dump, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `iqra_mart_backup_${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      toast("Store database exported to JSON", "success");
    });
  }
};

/* ==========================================================================
   APPLICATION BOOTSTRAPPER & ENTRY POINT
   ========================================================================== */
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
  LiveChat.init();

  if ($(".admin-layout")) Admin.bind();

  // Admin login page handler
  if ($("body.auth-page")) {
    $("#loginForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      if (AdminAuth.login(fd.get("username"), fd.get("password"))) {
        location.href = "admin.html";
      } else {
        toast("Invalid admin credentials", "danger");
      }
    });
  }
  // Register Service Worker for PWA
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", boot);
window.Store = Store;
window.Admin = Admin;
window.Auth = Auth;
window.SoundFX = SoundFX;
