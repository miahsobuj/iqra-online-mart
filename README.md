# Iqra Online Mart

A professional, full-featured e-commerce storefront with an elegant dark theme, bilingual UI (English / বাংলা), and a complete built-in CMS. Everything runs in the browser — no backend required.

**Live repo:** [github.com/soobujmiah/iqra-online-mart](https://github.com/soobujmiah/iqra-online-mart)

## Features

### Storefront
- Dark theme with purple–pink gradients, light-mode toggle, and motion
- Animated hero, featured products, category grid, and smart catalog filters
- Product badges (new / sale / hot), wishlist, search, and product detail pages
- Cart drawer with quantity controls and `localStorage` persistence
- Multi-step checkout: shipping + COD / card / bKash / Nagad
- Customer accounts (register, login, profile, addresses, order history)
- Blog with modal reader, contact form, newsletter, and testimonials

### Languages & theme
- English and Bengali with persistent preference
- Dark (default) and light themes

### CMS Admin
Open `admin-login.html` — default **admin** / **admin123** (change in Settings).

- Dashboard stats (products, orders, revenue, posts)
- CRUD for products, categories, blog posts, testimonials
- Orders: view, status updates, delete
- Subscribers and contact-message inbox
- Editable page copy (hero, about, footer)
- Site settings: name, contact, currency, credentials, social links

### Responsive
Mobile-first layout, adaptive admin sidebar, touch-friendly cart and nav.

## Quick start

1. Clone the repository
2. Open `index.html` in a modern browser (or serve the folder with any static host)
3. Admin: `admin-login.html` → `admin` / `admin123`

```bash
git clone https://github.com/soobujmiah/iqra-online-mart.git
cd iqra-online-mart
# optional: python3 -m http.server 8080
```

## File structure

```
├── index.html          Homepage
├── product.html        Product detail
├── blog.html           Blog listing
├── contact.html        Contact
├── checkout.html       Checkout
├── account.html        Customer account
├── admin-login.html    CMS login
├── admin.html          CMS dashboard
├── styles.css          Design system + responsive styles
├── script.js           Store, Auth, UI, Admin, Checkout
├── manifest.json       PWA manifest
└── robots.txt
```

## Design system

| Token | Value |
| --- | --- |
| Primary | `#7c3aed` → `#ec4899` |
| Accent | `#06b6d4` |
| Background | `#0a0a0f` |
| Type | Poppins |
| Icons | Font Awesome 6 |

## Data persistence

Client-side keys under `iqra_*`:

`iqra_products`, `iqra_categories`, `iqra_posts`, `iqra_settings`, `iqra_pages`, `iqra_testimonials`, `iqra_orders`, `iqra_subscribers`, `iqra_messages`, `iqra_cart`, `iqra_lang`, `iqra_theme`, `iqra_isAdmin`, plus auth/user keys.

## Security

This is a **client-side demo**. Admin credentials and orders live in `localStorage`. For production, use a real backend (Firebase, Supabase, or a custom API) and proper authentication.

---

Iqra Online Mart · 2026 · Quality Over Quantity
