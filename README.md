# Iqra Online Mart

A professional, full-featured e-commerce SaaS-style website with an elegant dark theme, vibrant animations, multi-language support, and a complete built-in CMS.

## ✨ Features

### Storefront
- **Elegant dark theme** with vibrant gradients (purple → pink, cyan → violet) and colorful animations
- **Animated hero section** with floating cards, orbiting gradient orbs, and floating shapes
- **Featured products** with hover animations, badges (new/sale/hot), wishlist, quick view
- **Dynamic product grid** with category filters, sorting (price/rating/newest), search
- **Shopping cart drawer** with full quantity controls and persistent localStorage
- **Multi-step checkout** with shipping info and multiple payment methods (COD, card, bKash, Nagad)
- **Order management** - orders saved to localStorage and visible in admin
- **Blog system** with full posts, modal reader, and CMS-editable content
- **Newsletter subscription** with admin subscriber list
- **Contact form** with admin message inbox
- **Testimonials** fully editable from CMS

### Multi-language Support
- English, Urdu, Arabic, Spanish, Bengali
- RTL support for Urdu/Arabic
- Persistent language preference

### Theme System
- Dark mode (default) with vibrant accents
- Light mode toggle
- Persistent theme preference

### 🛠️ Full CMS Admin Panel
Accessible at `/admin-login.html` (default: `admin` / `admin123`)
- **Dashboard** - real-time stats (products, orders, revenue, posts)
- **Products** - full CRUD with categories, badges, pricing, stock, ratings
- **Categories** - manage category icons and descriptions
- **Blog Posts** - publish/draft, HTML content, categories
- **Orders** - view, update status, delete orders
- **Testimonials** - add/edit/delete customer reviews
- **Subscribers** - manage newsletter list
- **Messages** - read contact form submissions
- **Page Content** - edit hero, features, about, footer text
- **Settings** - site name, contact info, currency, admin credentials, social links

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (≤640px), tablet (≤968px), desktop
- Touch-friendly cart drawer
- Adaptive admin sidebar
- Mobile navigation menu

## 🚀 Quick Start

1. Clone or download the repo
2. Open `index.html` in a browser
3. To access the CMS, navigate to `admin-login.html` (or click "Admin" in the nav)
4. Default login: **admin / admin123** (change in Settings)

## 📁 File Structure

```
├── index.html          # Homepage
├── product.html        # Product detail page
├── blog.html           # Blog listing
├── contact.html        # Contact page
├── checkout.html       # Checkout flow
├── admin-login.html    # Admin login
├── admin.html          # Admin dashboard (CMS)
├── styles.css          # All styles (dark theme + responsive)
└── script.js           # App logic, Store, UI, Admin, ProductDetail, Checkout
```

## 🎨 Design System

- **Primary**: Purple `#7c3aed` → Pink `#ec4899`
- **Accent**: Cyan `#06b6d4`
- **Background**: Deep black `#0a0a0f` with gradient mesh
- **Typography**: Poppins (300-800)
- **Animations**: Cubic-bezier easing, scroll reveals, hover transforms
- **Icons**: Font Awesome 6

## 💾 Data Persistence

All CMS data is stored in `localStorage` under `iqra_*` keys:
- `iqra_products`, `iqra_categories`, `iqra_posts`
- `iqra_settings`, `iqra_pages`, `iqra_testimonials`
- `iqra_orders`, `iqra_subscribers`, `iqra_messages`
- `iqra_cart`, `iqra_lang`, `iqra_theme`, `iqra_isAdmin`

## 🔐 Security Note

This is a client-side demo. For production, replace localStorage with a real backend (Firebase, Supabase, custom API) and add proper authentication.

---

Built for **Iqra Online Mart** · 2026