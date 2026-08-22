# Iqra Online Mart — International Standard E-Commerce & CMS

> **Obsidian & Gold Luxury Storefront & In-Browser CMS Engine**  
> Considered everyday goods, electronics, crafted fashion, and organic pantry staples delivered nationwide across Bangladesh.

---

## 🌟 Key International Standard Features

### 1. **Obsidian & Gold Luxury Design System**
* **Dual Theme Engine:** Deep obsidian luxury dark mode with metallic champagne gold highlights (`#d4af37`), and an editorial alabaster champagne light mode.
* **Fluid & Accessible Typography:** Cormorant Garamond serif headings paired with Outfit and Hind Siliguri for bilingual typography.
* **Web Audio Sound Synthesizer:** Subtle synthesized audio feedback (tap clicks, cart chime, order fanfare) without any external audio file dependencies.
* **Responsive & Mobile-First:** Adaptive layout with desktop mega-toolbars and mobile sticky bottom navigation bar.

### 2. **Global Currency & Localization (i18n)**
* **Real-time Multi-Currency Conversion:** Supports **BDT (৳)**, **USD ($)**, **EUR (€)**, **GBP (£)**, **SAR (﷼)**, **AED (د.إ)**, and **INR (₹)** with instant recalculation across the catalog, cart, and checkout.
* **Bilingual English & বাংলা Parity:** Instant seamless language switcher translating all UI components, badges, filters, and product details.

### 3. **Search & Product Discovery**
* **Instant Autocomplete Search:** Live search overlay (triggered by `/` or `Ctrl+K`) with real-time thumbnail results, category tags, and price badges.
* **Faceted Sidebar Filtering:** Category filters with dynamic SKU counts, interactive price range slider, In-Stock only filter, and Discounted/Sale filter.
* **Multi-Criteria Sorter:** Sort by Featured, Price (Low to High), Price (High to Low), Rating, Newest Arrivals, or Alphabetical.
* **Grid & List Views:** Instant switcher between multi-column grid and detailed row view.
* **Quick View Modal:** Inspect product photos, select color/size variants, adjust quantity, and add to bag without leaving the page.
* **Side-by-Side Product Comparison:** Compare up to 4 products with a complete feature, price, and specification matrix.

### 4. **Cart, Coupons & Checkout Experience**
* **Slide-over Cart Drawer:** Real-time subtotal, interactive Free Shipping progress bar, and coupon discount engine.
* **Built-in Coupon Engine:**
  * `WELCOME10`: 10% off for new customers
  * `IQRA2026`: 15% off orders over ৳2,000
  * `FREESHIP`: Free nationwide delivery
  * `EID500`: ৳500 flat discount on orders over ৳3,000
* **Multi-Gateway Payment Integration:**
  * 💵 **Cash on Delivery (COD)**
  * 📱 **bKash** (Merchant number and TrxID verification)
  * ⚡ **Nagad** (Merchant number and TrxID verification)
  * 💳 **Credit / Debit Card** (Visa, Mastercard, Amex with live card brand detector)
* **Official Printable Tax Invoice:** Print-ready invoice with tax breakdown, shipping info, itemized table, and barcode styling.
* **Visual Order Tracking Timeline:** Real-time progression (Order Placed ➔ Packed ➔ Shipped ➔ Delivered).

### 5. **Customer Space & Guest Order Tracking**
* **Guest Order Tracker:** Instant lookup for any order code (e.g. `IQ-123456`) without requiring account login.
* **Member Dashboard:** Order history with 1-click invoice view, wishlist manager, and profile security settings.

### 6. **Automated Live Chat Concierge**
* Floating interactive support chat widget with instant automated answers for order tracking, shipping policies, payment methods, and contact assistance.

### 7. **Enterprise CMS & House Ledger (`admin.html`)**
* **Executive Dashboard:** Live KPI cards (Revenue, Orders, SKUs, Stock Alerts) and SVG sales trajectory chart.
* **Products CRUD:** Full catalog editor with image galleries, SKU, cost, price, stock counts, and bilingual descriptions.
* **Orders Management:** Update order status with 1-click, manage tracking codes, and view printable invoices.
* **Coupons & Promo Manager:** Create and manage discount campaigns.
* **Data Backup & Restore:** One-click JSON database export and backup file restore.

---

## 🚀 Getting Started

### Local Setup
Run with any static web server:
```bash
python3 -m http.server 3000
```
Open `http://localhost:3000` in your browser.

### CMS Credentials
* **URL:** `admin-login.html` or click **CMS** in the navigation bar.
* **Username:** `admin`
* **Password:** `admin123`

---

## 🔒 Security & Data Integrity
* **XSS Sanitization:** All user-supplied inputs, customer reviews, order fields, and CMS content are safely escaped before DOM injection (`escapeHtml`).
* **PWA & Offline Resilience:** Registered Service Worker (`sw.js`) and Web App Manifest (`manifest.json`).
