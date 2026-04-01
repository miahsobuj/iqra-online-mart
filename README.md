# Iqra Online Mart

An elegant, responsive e-commerce website with a dark colorful theme, built with HTML, CSS, and JavaScript.

## Features

- **Dark Colorful Theme**: Modern dark theme with vibrant accent colors
- **Multi-language Support**: English, Urdu, Arabic, and Spanish language switching
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Interactive Animations**: Smooth hover effects, floating icons, and scroll animations
- **Product Catalog**: Dynamic product grid with sample products
- **Search Functionality**: Real-time product search with filtering
- **Shopping Cart**: Add items to cart with persistence using localStorage
- **Accessible Navigation**: Keyboard-friendly navigation and ARIA labels
- **Font Awesome Icons**: Beautiful vector icons for enhanced UI
- **Google Fonts**: Custom typography with Poppins font family

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome 6
- Google Fonts (Poppins)

## Pages & Sections

1. **Hero Section** - Welcome message with call-to-action
2. **Categories** - Product categories with icons
3. **Featured Products** - Dynamic product grid
4. **About Us** - Company information
5. **Footer** - Contact info, social links, and quick navigation

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/iqra-online-mart.git
   ```

2. Open `index.html` in your browser to view the website

3. For development:
   - Modify `index.html` for structure
   - Edit `styles.css` for styling
   - Update `script.js` for functionality

## Customization

### Changing Theme Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Indigo */
    --secondary-color: #8b5cf6;  /* Purple */
    --accent-color: #06b6d4;     /* Cyan */
    --dark-bg: #0f172a;          /* Dark blue-gray */
    --darker-bg: #020617;        /* Near black */
    --card-bg: #1e293b;          /* Slate gray */
    --text-primary: #f8fafc;     /* White */
    --text-secondary: #cbd5e1;   /* Light gray */
}
```

### Adding More Products
Edit the `sampleProducts` array in `script.js`:
```javascript
const sampleProducts = [
    {
        id: 11,
        name: "New Product Name",
        price: 29.99,
        category: "Category",
        rating: 4.5,
        description: "Product description here...",
        image: "fa-icon-name"  // Font Awesome icon class
    }
];
```

### Adding Languages
Add new language objects to the `translations` object in `script.js`:
```javascript
translations = {
    // ... existing languages
    fr: {
        home: "Accueil",
        products: "Produits",
        // ... all other translations
    }
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Deployment

This website is designed to be hosted on GitHub Pages:

1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually main or master)
4. Choose `/ (root)` folder
5. Save and wait for deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for Poppins typography
- Inspired by modern e-commerce designs