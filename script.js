/* ============================================
   IQRA ONLINE MART - PROFESSIONAL APP
   CMS + Storefront + Admin Panel
   ============================================ */

// ============================================
// CMS / DATA LAYER (localStorage-based)
// ============================================

const DEFAULT_PRODUCTS = [
    { id: 1, name: 'Wireless Bluetooth Headphones', price: 89.99, oldPrice: 129.99, category: 'Electronics', rating: 4.5, reviews: 128, badge: 'hot', icon: 'fa-headphones', description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life. Premium sound quality with deep bass.', stock: 45, featured: true, status: 'active', createdAt: '2026-01-15' },
    { id: 2, name: 'Smart Watch Series 5', price: 199.99, oldPrice: 249.99, category: 'Electronics', rating: 4.7, reviews: 89, badge: 'new', icon: 'fa-watch', description: 'Advanced smartwatch with health tracking, GPS, and water resistance. Stay connected and healthy.', stock: 32, featured: true, status: 'active', createdAt: '2026-02-01' },
    { id: 3, name: 'Designer Cotton T-Shirt', price: 24.99, oldPrice: null, category: 'Fashion', rating: 4.3, reviews: 234, badge: null, icon: 'fa-tshirt', description: 'Premium quality cotton t-shirt with modern design and comfortable fit. Available in multiple colors.', stock: 120, featured: true, status: 'active', createdAt: '2026-02-10' },
    { id: 4, name: 'Leather Handbag Collection', price: 79.99, oldPrice: 119.99, category: 'Fashion', rating: 4.6, reviews: 156, badge: 'sale', icon: 'fa-handbag', description: 'Elegant leather handbags in various colors and styles. Handcrafted with attention to detail.', stock: 67, featured: true, status: 'active', createdAt: '2026-01-20' },
    { id: 5, name: 'Modern Coffee Table', price: 149.99, oldPrice: null, category: 'Home & Living', rating: 4.4, reviews: 45, badge: null, icon: 'fa-table', description: 'Contemporary design coffee table with tempered glass and wooden legs. Perfect for modern living rooms.', stock: 18, featured: true, status: 'active', createdAt: '2026-02-15' },
    { id: 6, name: 'Organic Bedding Set', price: 89.99, oldPrice: 119.99, category: 'Home & Living', rating: 4.2, reviews: 78, badge: 'sale', icon: 'fa-bed', description: 'Luxury organic cotton bedding set for ultimate comfort. Hypoallergenic and eco-friendly.', stock: 54, featured: false, status: 'active', createdAt: '2026-01-25' },
    { id: 7, name: 'Python Programming Guide', price: 34.99, oldPrice: null, category: 'Books & Education', rating: 4.8, reviews: 312, badge: 'hot', icon: 'fa-book', description: 'Complete guide to Python programming from beginner to advanced levels. Includes practical projects.', stock: 200, featured: true, status: 'active', createdAt: '2026-02-05' },
    { id: 8, name: 'Yoga Mat Premium', price: 29.99, oldPrice: 39.99, category: 'Sports & Fitness', rating: 4.5, reviews: 167, badge: 'sale', icon: 'fa-person-praying', description: 'Non-slip yoga mat with alignment guides and carrying strap. Eco-friendly materials.', stock: 89, featured: false, status: 'active', createdAt: '2026-02-12' },
    { id: 9, name: 'Dog Food Premium Pack', price: 45.99, oldPrice: null, category: 'Pet Supplies', rating: 4.6, reviews: 92, badge: null, icon: 'fa-dog', description: 'Nutritious dog food for all breeds and life stages. Made with natural ingredients.', stock: 76, featured: false, status: 'active', createdAt: '2026-01-30' },
    { id: 10, name: 'Cat Tree Tower', price: 69.99, oldPrice: 89.99, category: 'Pet Supplies', rating: 4.3, reviews: 54, badge: null, icon: 'fa-cat', description: 'Multi-level cat tree with scratching posts and cozy hideaways. Perfect for indoor cats.', stock: 23, featured: false, status: 'active', createdAt: '2026-02-08' },
    { id: 11, name: 'Mechanical Gaming Keyboard', price: 129.99, oldPrice: 159.99, category: 'Electronics', rating: 4.8, reviews: 245, badge: 'new', icon: 'fa-keyboard', description: 'RGB mechanical gaming keyboard with hot-swappable switches. Premium typing experience.', stock: 41, featured: true, status: 'active', createdAt: '2026-03-01' },
    { id: 12, name: 'Running Shoes Pro', price: 99.99, oldPrice: null, category: 'Sports & Fitness', rating: 4.6, reviews: 189, badge: 'hot', icon: 'fa-shoe-prints', description: 'Lightweight running shoes with responsive cushioning. Perfect for daily training.', stock: 95, featured: true, status: 'active', createdAt: '2026-02-20' }
];

const DEFAULT_CATEGORIES = [
    { id: 'electronics', name: 'Electronics', icon: 'fa-laptop', description: 'Latest gadgets and tech accessories' },
    { id: 'fashion', name: 'Fashion', icon: 'fa-tshirt', description: 'Trendy clothing and accessories' },
    { id: 'home', name: 'Home & Living', icon: 'fa-home', description: 'Furniture, decor & essentials' },
    { id: 'books', name: 'Books & Education', icon: 'fa-book', description: 'Knowledge and learning resources' },
    { id: 'sports', name: 'Sports & Fitness', icon: 'fa-dumbbell', description: 'Equipment for active lifestyles' },
    { id: 'pets', name: 'Pet Supplies', icon: 'fa-paw', description: 'Everything for your furry friends' }
];

const DEFAULT_BLOG_POSTS = [
    {
        id: 1,
        title: 'Welcome to Iqra Online Mart - Our Grand Opening!',
        excerpt: 'We are thrilled to announce the launch of Iqra Online Mart, bringing you the best in online shopping with quality products at unbeatable prices.',
        date: '2026-03-15',
        readTime: '3 min read',
        icon: 'fa-store',
        category: 'Announcement',
        content: '<p>Today marks a significant milestone in our journey as we officially launch Iqra Online Mart. After months of preparation, we are excited to open our virtual doors to customers across Bangladesh and beyond.</p><p>Our mission is simple: to provide a seamless online shopping experience where you can find everything you need in one place, from electronics and fashion to home essentials and groceries.</p><h3>What sets us apart:</h3><ul><li>Curated product selection from trusted brands</li><li>Competitive pricing with regular discounts</li><li>Fast and reliable delivery across Bangladesh</li><li>Secure payment options including Cash on Delivery</li><li>Dedicated customer support available 24/7</li></ul><p>To celebrate our launch, we are offering special discounts on all categories for the first week. Do not miss out on this opportunity to shop smart and save big!</p>',
        status: 'published'
    },
    {
        id: 2,
        title: 'Top 10 Electronics Deals This Week',
        excerpt: 'Discover the hottest tech deals available now on Iqra Online Mart - from smartphones to smart home devices.',
        date: '2026-03-12',
        readTime: '4 min read',
        icon: 'fa-laptop',
        category: 'Electronics',
        content: '<p>Looking to upgrade your tech game? This week we have got incredible deals on the latest electronics that you will not want to miss!</p><h3>Featured Deals:</h3><ol><li><strong>Smartphone Bonanza:</strong> Get up to 30% off on latest Android and iOS devices</li><li><strong>Smart Home Starter Kit:</strong> Lights, plugs, and speakers - all bundled for maximum savings</li><li><strong>Gaming Gear:</strong> Consoles, controllers, and games at special prices</li><li><strong>Audio Excellence:</strong> Premium headphones and speakers with crystal clear sound</li><li><strong>Computing Power:</strong> Laptops and accessories for work and play</li></ol>',
        status: 'published'
    },
    {
        id: 3,
        title: 'Spring Fashion Collection Now Live',
        excerpt: 'Refresh your wardrobe with our vibrant spring collection featuring light fabrics and bold colors.',
        date: '2026-03-10',
        readTime: '2 min read',
        icon: 'fa-tshirt',
        category: 'Fashion',
        content: '<p>As the weather warms up, it is time to refresh your wardrobe with vibrant and stylish spring essentials. Our new spring collection has arrived!</p><h3>Collection Highlights:</h3><ul><li><strong>Light Fabrics:</strong> Linen, cotton, and breathable materials</li><li><strong>Bold Colors:</strong> Pastels, florals, and bright accents</li><li><strong>Versatile Pieces:</strong> Mix and match for any occasion</li><li><strong>Comfortable Footwear:</strong> Sneakers, sandals, and loafers</li></ul>',
        status: 'published'
    },
    {
        id: 4,
        title: 'How to Choose the Perfect Smart Watch',
        excerpt: 'A comprehensive guide to picking the right smartwatch for your lifestyle and budget.',
        date: '2026-03-08',
        readTime: '5 min read',
        icon: 'fa-watch',
        category: 'Tech Guide',
        content: '<p>Smart watches have evolved from simple notification devices to comprehensive health and fitness companions. Here is how to pick the perfect one for you.</p><h3>Consider Your Needs:</h3><ul><li><strong>Fitness Focus:</strong> Look for heart rate, GPS, and workout tracking</li><li><strong>Style First:</strong> Prioritize design and customizable watch faces</li><li><strong>Battery Life:</strong> Some last days, others need daily charging</li><li><strong>Compatibility:</strong> Ensure it works with your smartphone</li></ul>',
        status: 'published'
    }
];

const DEFAULT_SETTINGS = {
    siteName: 'Iqra Online Mart',
    tagline: 'Your premium online shopping destination',
    email: 'support@iqramart.com',
    phone: '+880 1234 567890',
    address: '123 Shopping Street, Dhaka, Bangladesh',
    currency: '$',
    freeShippingThreshold: 100,
    adminCredentials: { username: 'admin', password: 'admin123' }
};

const TRANSLATIONS = {
    en: {
        home: 'Home', products: 'Products', categories: 'Categories', about: 'About',
        contact: 'Contact', cart: 'Cart', search: 'Search', blog: 'Blog', admin: 'Admin',
        welcome: 'Welcome to the Future of',
        welcomeHighlight: 'Online Shopping',
        subtitle: 'Discover thousands of premium products across electronics, fashion, home, and more — all with fast delivery and secure checkout.',
        shopNow: 'Shop Now', explore: 'Explore Categories',
        heroBadge: 'New Collection 2026',
        stat1Value: '50K+', stat1Label: 'Happy Customers',
        stat2Value: '10K+', stat2Label: 'Products',
        stat3Value: '99%', stat3Label: 'Satisfaction',
        featuredProducts: 'Featured', featuredGradient: 'Products',
        featuredSubtitle: 'Hand-picked favorites from our curated collection',
        categoriesTag: 'Browse',
        categoriesTitle: 'Shop by', categoriesGradient: 'Category',
        categoriesSubtitle: 'Find exactly what you need from our diverse range of product categories',
        whyChooseUs: 'Why Choose', whyGradient: 'Us',
        whySubtitle: 'Experience the best in online shopping with our premium services',
        feature1Title: 'Free Shipping', feature1Desc: 'On orders over $100',
        feature2Title: 'Secure Payment', feature2Desc: '100% protected checkout',
        feature3Title: '24/7 Support', feature3Desc: 'Dedicated customer care',
        feature4Title: 'Easy Returns', feature4Desc: '30-day return policy',
        testimonialsTag: 'Testimonials',
        testimonialsTitle: 'What Our', testimonialsGradient: 'Customers Say',
        testimonialsSubtitle: 'Real feedback from our valued community',
        blogTag: 'Latest News',
        blogTitle: 'From Our', blogGradient: 'Blog',
        blogSubtitle: 'Stay updated with shopping tips, trends, and exclusive stories',
        newsletterTitle: 'Subscribe to Our', newsletterGradient: 'Newsletter',
        newsletterSubtitle: 'Get exclusive deals, new arrivals, and insider updates directly in your inbox.',
        newsletterPlaceholder: 'Enter your email address',
        newsletterBtn: 'Subscribe',
        readMore: 'Read More',
        viewAll: 'View All',
        addToCart: 'Add to Cart',
        viewDetails: 'View Details',
        total: 'Total', checkout: 'Checkout',
        emptyCart: 'Your cart is empty',
        emptyCartDesc: 'Start shopping and add items to your cart',
        quickLinks: 'Quick Links', contactUs: 'Contact Us',
        followUs: 'Follow Us', newsletter: 'Newsletter',
        copyright: '© 2026 Iqra Online Mart. All rights reserved.',
        privacy: 'Privacy Policy', terms: 'Terms of Service',
        searchPlaceholder: 'Search for products, categories, brands...',
        noResults: 'No products found',
        noResultsDesc: 'Try a different search term or browse our categories',
        addedToCart: 'Added to cart!',
        outOfStock: 'Out of stock',
        inStock: 'In stock',
        reviews: 'reviews',
        allCategories: 'All',
        sortDefault: 'Default', sortPriceLow: 'Price: Low to High',
        sortPriceHigh: 'Price: High to Low', sortRating: 'Top Rated', sortNewest: 'Newest'
    },
    ur: {
        home: 'گ�ر', products: 'مصنوعات', categories: 'زمرے', about: '�مارے بارے میں',
        contact: 'رابطہ', cart: 'کارٹ', search: 'تلاش', blog: 'بلاگ', admin: 'ایڈمن',
        welcome: 'مستقبل کا استقبال ہے', welcomeHighlight: 'آن لائن شاپنگ',
        subtitle: 'الیکٹرانکس، فیشن، گھریلو اور مزید بہت کچھ میں ہزاروں معیاری مصنوعات دریافت کریں۔',
        shopNow: 'ابھی خریدی�', explore: 'زمرے دیکھیں',
        heroBadge: 'نئی مجموعہ 2026',
        stat1Value: '50K+', stat1Label: 'خوش گاہک',
        stat2Value: '10K+', stat2Label: 'مصنوعات',
        stat3Value: '99%', stat3Label: 'اطمینان',
        featuredProducts: 'نمایاں', featuredGradient: 'مصنوعات',
        featuredSubtitle: 'ہمارے منتخب مجموعے سے پسندیدہ',
        categoriesTag: 'دیکھیں',
        categoriesTitle: 'خریدیں بذریعہ', categoriesGradient: 'زمرہ',
        categoriesSubtitle: 'ہمارے متنوع زمروں سے بالکل وہی تلاش کریں جو آپ کو چاہی�',
        whyChooseUs: 'ہمیں کیوں', whyGradient: 'چنیں',
        whySubtitle: 'ہماری اعلیٰ خدمات کے ساتھ بہترین آن لائن شاپنگ کا تجربہ',
        feature1Title: 'مفت ترسیل', feature1Desc: '$100 سے زیادہ ک� آرڈرز پر',
        feature2Title: 'محفوظ ادائیگی', feature2Desc: '100% محفوظ چیک آؤٹ',
        feature3Title: '24/7 معاونت', feature3Desc: 'وقف صارف کی دیکھ بھال',
        feature4Title: 'آسان واپسی', feature4Desc: '30 دن کی واپسی کی پالیسی',
        testimonialsTag: 'تعریفات',
        testimonialsTitle: 'ہمارے', testimonialsGradient: 'صارفین کیا کہتے ہیں',
        testimonialsSubtitle: 'ہماری قیمتی کمیونٹی سے اصل تاثرات',
        blogTag: 'تازہ ترین خبریں',
        blogTitle: 'ہمارے', blogGradient: 'بلاگ سے',
        blogSubtitle: 'شاپنگ تجاویز، رجحانات اور خصوصی کہانیوں سے اپ ڈیٹ رہیں',
        newsletterTitle: 'ہمارے', newsletterGradient: 'نیوز لیٹر کو سبسکرائب',
        newsletterSubtitle: 'خصوصی ڈیلز، نئی آمد، اور اندرونی اپ ڈی�س براہ راست اپنے ان باکس میں�',
        newsletterPlaceholder: 'اپنا ای میل ایڈریس درج کریں',
        newsletterBtn: 'سبسکرائب', readMore: 'مزید پڑھیں',
        viewAll: 'سب دیکھیں', addToCart: 'کارٹ میں شامل', viewDetails: 'تفصیلات',
        total: 'کل', checkout: 'چیک آؤٹ',
        emptyCart: 'آپ کا کارٹ خالی ہے',
        emptyCartDesc: 'شاپنگ شروع کریں اور کارٹ میں آئ�مز شامل کریں',
        quickLinks: 'فوری لنکس', contactUs: 'ہم سے رابطہ',
        followUs: 'ہمارا پیچھا کریں', newsletter: 'نیوز لیٹر',
        copyright: '© 2026 Iqra Online Mart. جملہ حقوق محفوظ ہیں.',
        privacy: 'رازداری کی پالیسی', terms: 'شرائط',
        searchPlaceholder: 'مصنوعات، زمرے، برانڈز تلاش کریں...',
        noResults: 'کوئی مصنوعات نہیں ملیں',
        noResultsDesc: 'مختلف تلاش کا لفظ آزمائیں',
        addedToCart: 'کارٹ میں شامل!',
        outOfStock: 'اسٹاک میں نہی�', inStock: 'اسٹاک میں',
        reviews: 'جائزے', allCategories: 'سب',
        sortDefault: 'ڈیفالٹ', sortPriceLow: 'قیمت: کم سے زیادہ',
        sortPriceHigh: 'قیمت: زیادہ سے کم', sortRating: 'بہترین', sortNewest: 'تازہ ترین'
    },
    ar: {
        home: 'الرئيسية', products: 'المنتجات', categories: 'الأقسام', about: 'من نحن',
        contact: 'اتصل بنا', cart: 'السلة', search: 'بحث', blog: 'المدونة', admin: 'المسؤول',
        welcome: 'مرحبا بكم في مستقبل', welcomeHighlight: 'التسوق عبر الإنترنت',
        subtitle: 'اكتشف آلاف المنتجات المتميزة في الإلكترونيات والأزياء والمنزل والمزيد.',
        shopNow: 'تسوق الآن', explore: 'استكشف الأقسام',
        heroBadge: 'مجموعة جديدة 2026',
        stat1Value: '50K+', stat1Label: 'عملاء سعداء',
        stat2Value: '10K+', stat2Label: 'منتجات',
        stat3Value: '99%', stat3Label: 'رضا',
        featuredProducts: 'منتجات', featuredGradient: 'مميزة',
        featuredSubtitle: 'مفضلات مختارة من مجموعتنا',
        categoriesTag: 'تصفح',
        categoriesTitle: 'تسوق حسب', categoriesGradient: 'القسم',
        categoriesSubtitle: 'اعثر بالضبط على ما تحتاجه',
        whyChooseUs: 'لماذا', whyGradient: 'تختارنا',
        whySubtitle: 'استمتع بأفضل تجربة تسوق',
        feature1Title: 'شحن مجاني', feature1Desc: 'للطلبات فوق $100',
        feature2Title: 'دفع آمن', feature2Desc: 'دفع محمي 100%',
        feature3Title: 'دعم 24/7', feature3Desc: 'رعاية عملاء مخصصة',
        feature4Title: 'إرجاع سهل', feature4Desc: 'سياسة إرجاع 30 يوم',
        testimonialsTag: 'شهادات',
        testimonialsTitle: 'ماذا يقول', testimonialsGradient: 'عملاؤنا',
        testimonialsSubtitle: 'تعليقات حقيقية من مجتمعنا',
        blogTag: 'آخر الأخبار',
        blogTitle: 'من', blogGradient: 'مدونتنا',
        blogSubtitle: 'ابق على اطلاع',
        newsletterTitle: 'اشترك في', newsletterGradient: 'النشرة الإخبارية',
        newsletterSubtitle: 'احصل على صفقات حصرية مباشرة في بريدك.',
        newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
        newsletterBtn: 'اشترك', readMore: 'اقرأ المزيد',
        viewAll: 'عرض الكل', addToCart: 'أضف للسلة', viewDetails: 'التفاصيل',
        total: 'الإجمالي', checkout: 'الدفع',
        emptyCart: 'سلة التسوق فارغة',
        emptyCartDesc: 'ابدأ التسوق وأضف عناصر',
        quickLinks: 'روابط سريعة', contactUs: 'اتصل بنا',
        followUs: 'تابعنا', newsletter: 'النشرة',
        copyright: '© 2026 Iqra Online Mart. جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية', terms: 'الشروط',
        searchPlaceholder: 'ابحث عن المنتجات...',
        noResults: 'لا توجد نتائج',
        noResultsDesc: 'جرب كلمة بحث مختلفة',
        addedToCart: 'تمت الإضافة!',
        outOfStock: 'غير متوفر', inStock: 'متوفر',
        reviews: 'مراجعة', allCategories: 'الكل',
        sortDefault: 'الافتراضي', sortPriceLow: 'السعر: الأقل',
        sortPriceHigh: 'السعر: الأعلى', sortRating: 'الأعلى تقييما', sortNewest: 'الأحدث'
    },
    es: {
        home: 'Inicio', products: 'Productos', categories: 'Categorías', about: 'Nosotros',
        contact: 'Contacto', cart: 'Carrito', search: 'Buscar', blog: 'Blog', admin: 'Admin',
        welcome: 'Bienvenido al futuro del', welcomeHighlight: 'Compras Online',
        subtitle: 'Descubre miles de productos premium en electrónica, moda, hogar y más.',
        shopNow: 'Comprar Ahora', explore: 'Explorar Categorías',
        heroBadge: 'Nueva Colección 2026',
        stat1Value: '50K+', stat1Label: 'Clientes Felices',
        stat2Value: '10K+', stat2Label: 'Productos',
        stat3Value: '99%', stat3Label: 'Satisfacción',
        featuredProducts: 'Productos', featuredGradient: 'Destacados',
        featuredSubtitle: 'Favoritos seleccionados de nuestra colección',
        categoriesTag: 'Explorar',
        categoriesTitle: 'Compra por', categoriesGradient: 'Categoría',
        categoriesSubtitle: 'Encuentra exactamente lo que necesitas',
        whyChooseUs: 'Por Qué', whyGradient: 'Elegirnos',
        whySubtitle: 'Experimenta lo mejor en compras online',
        feature1Title: 'Envío Gratis', feature1Desc: 'En pedidos sobre $100',
        feature2Title: 'Pago Seguro', feature2Desc: 'Checkout 100% protegido',
        feature3Title: 'Soporte 24/7', feature3Desc: 'Atención al cliente dedicada',
        feature4Title: 'Devoluciones Fáciles', feature4Desc: 'Política de 30 días',
        testimonialsTag: 'Testimonios',
        testimonialsTitle: 'Qué Dicen', testimonialsGradient: 'Nuestros Clientes',
        testimonialsSubtitle: 'Comentarios reales de nuestra comunidad',
        blogTag: 'Últimas Noticias',
        blogTitle: 'De Nuestro', blogGradient: 'Blog',
        blogSubtitle: 'Mantente actualizado',
        newsletterTitle: 'Suscríbete a Nuestro', newsletterGradient: 'Newsletter',
        newsletterSubtitle: 'Recibe ofertas exclusivas en tu correo.',
        newsletterPlaceholder: 'Ingresa tu correo',
        newsletterBtn: 'Suscribirse', readMore: 'Leer Más',
        viewAll: 'Ver Todo', addToCart: 'Añadir al Carrito', viewDetails: 'Ver Detalles',
        total: 'Total', checkout: 'Pagar',
        emptyCart: 'Tu carrito está vacío',
        emptyCartDesc: 'Empieza a comprar',
        quickLinks: 'Enlaces Rápidos', contactUs: 'Contáctanos',
        followUs: 'Síguenos', newsletter: 'Newsletter',
        copyright: '© 2026 Iqra Online Mart. Todos los derechos reservados.',
        privacy: 'Privacidad', terms: 'Términos',
        searchPlaceholder: 'Buscar productos...',
        noResults: 'Sin resultados',
        noResultsDesc: 'Prueba otro término',
        addedToCart: '¡Añadido!',
        outOfStock: 'Agotado', inStock: 'Disponible',
        reviews: 'reseñas', allCategories: 'Todos',
        sortDefault: 'Por defecto', sortPriceLow: 'Precio: Menor a Mayor',
        sortPriceHigh: 'Precio: Mayor a Menor', sortRating: 'Mejor Valorados', sortNewest: 'Más Nuevos'
    },
    bn: {
        home: 'হোম', products: 'পণ্য', categories: 'বিভাগ', about: 'আমাদের সম্পর্কে',
        contact: 'যোগাযোগ', cart: 'কার্ট', search: 'অনুসন্ধান', blog: 'ব্লগ', admin: '�্যাডমিন',
        welcome: 'ভবিষ্যতে স্বাগতম', welcomeHighlight: 'অনলাইন শপিং',
        subtitle: 'ইলেকট্রনিক্স, ফ্যাশন, ঘর এবং আরও অনেক কিছুতে হাজার হাজার প্রিমিয়াম পণ্য আবিষ্কার করুন।',
        shopNow: 'এখনই কিনুন', explore: 'বিভাগ অন্বেষণ',
        heroBadge: 'নতুন সংগ্রহ 2026',
        stat1Value: '50K+', stat1Label: 'খুশি গ্রাহক',
        stat2Value: '10K+', stat2Label: 'পণ্য',
        stat3Value: '99%', stat3Label: 'সন্তুষ্�ি',
        featuredProducts: 'বৈশিষ্ট্যযুক্ত', featuredGradient: 'পণ্য',
        featuredSubtitle: 'আমাদের সংগ্রহ থেকে নির্বাচিত প্রিয়',
        categoriesTag: 'ব্রাউজ',
        categoriesTitle: 'ক্যা�াগরি', categoriesGradient: 'দ্বারা কিনুন',
        categoriesSubtitle: 'আপনার প্রয়োজনীয় জিনিস খুঁজুন',
        whyChooseUs: 'কেন', whyGradient: 'আমাদের বেছে নিন',
        whySubtitle: 'সেরা অনলা�ন শপিং অভিজ্ঞতা',
        feature1Title: '�্রি শিপিং', feature1Desc: '$100 এর উপরে',
        feature2Title: 'নিরাপদ পেমেন্ট', feature2Desc: '100% সুরক্ষিত',
        feature3Title: '24/7 সাপোর্ট', feature3Desc: 'গ্রাহক সে�া',
        feature4Title: 'সহজ রিটার্ন', feature4Desc: '30 দিনের নীতি',
        testimonialsTag: 'প্রশংসাপত্র',
        testimonialsTitle: 'আমাদের', testimonialsGradient: 'গ্রাহকরা কী বলেন',
        testimonialsSubtitle: 'আমাদের সম্প্রদায় থেকে প্রকৃত মতামত',
        blogTag: 'সর্বশেষ সংবাদ',
        blogTitle: 'আমাদের', blogGradient: 'ব্লগ থেকে',
        blogSubtitle: 'আপডেট থাকুন',
        newsletterTitle: 'আমাদের', newsletterGradient: 'নিউজলেটার সাবস্ক্রাইব',
        newsletterSubtitle: 'এক্সক্লুসিভ ডিল পান।',
        newsletterPlaceholder: '�পনার ইমেল লিখুন',
        newsletterBtn: 'সাবস্ক্রাইব', readMore: 'আরও প�়ুন',
        viewAll: 'সব দেখুন', addToCart: 'কার্টে যোগ', viewDetails: 'বিস্তারিত',
        total: 'মোট', checkout: 'চেকআ�ট',
        emptyCart: 'আপনার কার্ট খালি',
        emptyCartDesc: 'শপিং শুরু করুন',
        quickLinks: 'দ্রুত লিঙ্ক', contactUs: '�োগাযোগ',
        followUs: 'আমাদের অনুসরণ', newsletter: 'নিউজলেটার',
        copyright: '© 2026 Iqra Online Mart. সর্বস্বত্ব সংরক্ষিত।',
        privacy: 'গোপনীয়তা', terms: 'শর্তাবলী',
        searchPlaceholder: 'পণ্য অনুসন্ধান...',
        noResults: 'কোন ফলাফল নে�',
        noResultsDesc: 'অন্য শব্দ চেষ্টা করুন',
        addedToCart: 'কার্টে যোগ!',
        outOfStock: 'স্টকে নেই', inStock: 'স্টকে আছে',
        reviews: 'পর্যালোচনা', allCategories: 'সব',
        sortDefault: 'ডিফল্�', sortPriceLow: 'মূল্য: কম থেকে বে�ি',
        sortPriceHigh: 'মূল্য: বেশি থেকে কম', sortRating: 'সেরা রেটিং', sortNewest: 'নতুন'
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================

const Store = {
    state: {
        products: [],
        categories: [],
        posts: [],
        settings: {},
        cart: [],
        currentLang: 'en',
        currentCategory: 'all',
        currentSort: 'default',
        isAdmin: false
    },

    init() {
        this.state.products = Storage.get('products', DEFAULT_PRODUCTS);
        this.state.categories = Storage.get('categories', DEFAULT_CATEGORIES);
        this.state.posts = Storage.get('posts', DEFAULT_BLOG_POSTS);
        const storedSettings = Storage.get('settings', null);
        this.state.settings = storedSettings ? { ...DEFAULT_SETTINGS, ...storedSettings, adminCredentials: { ...DEFAULT_SETTINGS.adminCredentials, ...(storedSettings.adminCredentials || {}) } } : { ...DEFAULT_SETTINGS };
        this.state.cart = Storage.get('cart', []);
        this.state.currentLang = Storage.get('lang', 'en');
        this.state.isAdmin = Storage.get('isAdmin', false);
        // Ensure data integrity
        if (!this.state.products.length) this.state.products = DEFAULT_PRODUCTS;
        if (!this.state.categories.length) this.state.categories = DEFAULT_CATEGORIES;
        if (!this.state.posts.length) this.state.posts = DEFAULT_BLOG_POSTS;
    },

    getPageContent(key) {
        const pages = Storage.get('pages', {});
        return pages[key] || null;
    },

    save() {
        Storage.set('products', this.state.products);
        Storage.set('categories', this.state.categories);
        Storage.set('posts', this.state.posts);
        Storage.set('settings', this.state.settings);
        Storage.set('cart', this.state.cart);
        Storage.set('lang', this.state.currentLang);
        Storage.set('isAdmin', this.state.isAdmin);
    },

    // Cart operations
    addToCart(productId, qty = 1) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product) return false;
        const existing = this.state.cart.find(i => i.id === productId);
        if (existing) {
            existing.quantity += qty;
        } else {
            this.state.cart.push({ ...product, quantity: qty });
        }
        this.save();
        return true;
    },

    updateCartItem(productId, qty) {
        const item = this.state.cart.find(i => i.id === productId);
        if (item) {
            if (qty <= 0) {
                this.removeCartItem(productId);
            } else {
                item.quantity = qty;
                this.save();
            }
        }
    },

    removeCartItem(productId) {
        this.state.cart = this.state.cart.filter(i => i.id !== productId);
        this.save();
    },

    clearCart() {
        this.state.cart = [];
        this.save();
    },

    cartTotal() {
        return this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    cartCount() {
        return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Product operations (CMS)
    addProduct(product) {
        const id = Math.max(0, ...this.state.products.map(p => p.id)) + 1;
        this.state.products.push({ ...product, id, createdAt: new Date().toISOString().split('T')[0], status: 'active' });
        this.save();
    },

    updateProduct(id, updates) {
        const idx = this.state.products.findIndex(p => p.id === id);
        if (idx >= 0) {
            this.state.products[idx] = { ...this.state.products[idx], ...updates };
            this.save();
        }
    },

    deleteProduct(id) {
        this.state.products = this.state.products.filter(p => p.id !== id);
        this.save();
    },

    // Blog operations (CMS)
    addPost(post) {
        const id = Math.max(0, ...this.state.posts.map(p => p.id)) + 1;
        this.state.posts.push({ ...post, id, date: new Date().toISOString().split('T')[0] });
        this.save();
    },

    updatePost(id, updates) {
        const idx = this.state.posts.findIndex(p => p.id === id);
        if (idx >= 0) {
            this.state.posts[idx] = { ...this.state.posts[idx], ...updates };
            this.save();
        }
    },

    deletePost(id) {
        this.state.posts = this.state.posts.filter(p => p.id !== id);
        this.save();
    },

    // Category operations
    addCategory(category) {
        this.state.categories.push({ ...category, id: category.id || category.name.toLowerCase().replace(/\s+/g, '-') });
        this.save();
    },

    updateCategory(id, updates) {
        const idx = this.state.categories.findIndex(c => c.id === id);
        if (idx >= 0) {
            this.state.categories[idx] = { ...this.state.categories[idx], ...updates };
            this.save();
        }
    },

    deleteCategory(id) {
        this.state.categories = this.state.categories.filter(c => c.id !== id);
        this.save();
    }
};

const Storage = {
    get(key, defaultVal) {
        try {
            const val = localStorage.getItem(`iqra_${key}`);
            return val ? JSON.parse(val) : defaultVal;
        } catch { return defaultVal; }
    },
    set(key, val) {
        try { localStorage.setItem(`iqra_${key}`, JSON.stringify(val)); } catch {}
    }
};

// ============================================
// UI / RENDERING
// ============================================

const UI = {
    t(key) {
        const lang = Store.state.currentLang;
        return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
    },

    renderStars(rating) {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
    },

    formatPrice(price) {
        return `${Store.state.settings.currency || '$'}${price.toFixed(2)}`;
    },

    showNotification(message, type = 'success', title = '') {
        document.querySelectorAll('.notification').forEach(n => n.remove());
        const n = document.createElement('div');
        n.className = `notification ${type}`;
        const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
        n.innerHTML = `
            <div class="notification-icon"><i class="fas ${icons[type] || icons.info}"></i></div>
            <div class="notification-content">
                ${title ? `<div class="notification-title">${title}</div>` : ''}
                <div class="notification-message">${message}</div>
            </div>
        `;
        document.body.appendChild(n);
        requestAnimationFrame(() => n.classList.add('show'));
        setTimeout(() => {
            n.classList.remove('show');
            setTimeout(() => n.remove(), 300);
        }, 3000);
    },

    renderCategories() {
        const grid = document.querySelector('#categoriesGrid');
        if (!grid) return;
        const products = Store.state.products;
        grid.innerHTML = Store.state.categories.map(cat => {
            const count = products.filter(p => p.category === cat.name).length;
            return `
                <a class="category-card scroll-reveal" data-category="${cat.name}">
                    <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                    <div class="count">${count} ${count === 1 ? 'item' : 'items'}</div>
                </a>
            `;
        }).join('');
        grid.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                Store.state.currentCategory = card.dataset.category;
                UI.renderProducts();
                const productsSection = document.querySelector('#products');
                if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    },

    renderProducts() {
        const grid = document.querySelector('#productsGrid');
        if (!grid) return;
        grid.innerHTML = '<div class="loading-state"><div class="loading-spinner"></div><p>Loading products...</p></div>';

        setTimeout(() => {
            let products = [...Store.state.products];
            // Filter by category
            if (Store.state.currentCategory !== 'all') {
                products = products.filter(p => p.category === Store.state.currentCategory);
            }
            // Sort
            switch (Store.state.currentSort) {
                case 'priceLow': products.sort((a, b) => a.price - b.price); break;
                case 'priceHigh': products.sort((a, b) => b.price - a.price); break;
                case 'rating': products.sort((a, b) => b.rating - a.rating); break;
                case 'newest': products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); break;
            }
            if (!products.length) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <i class="fas fa-box-open"></i>
                        <h3>${UI.t('noResults')}</h3>
                        <p>${UI.t('noResultsDesc')}</p>
                    </div>
                `;
                return;
            }
            grid.innerHTML = products.map((p, i) => `
                <div class="product-card" data-id="${p.id}" style="animation-delay: ${i * 0.05}s">
                    <div class="product-image">
                        ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge}</span>` : ''}
                        <i class="fas ${p.icon}"></i>
                        <div class="product-actions-overlay">
                            <button class="product-action-btn" data-action="wishlist" data-id="${p.id}" title="Add to Wishlist"><i class="far fa-heart"></i></button>
                            <button class="product-action-btn" data-action="view" data-id="${p.id}" title="View Details"><i class="far fa-eye"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${p.category}</div>
                        <h3 class="product-title">${p.name}</h3>
                        <div class="product-rating">
                            <span class="stars">${UI.renderStars(p.rating)}</span>
                            <span class="count">(${p.reviews} ${UI.t('reviews')})</span>
                        </div>
                        <div class="product-price-row">
                            <div>
                                <span class="product-price">${UI.formatPrice(p.price)}</span>
                                ${p.oldPrice ? `<span class="product-price-old">${UI.formatPrice(p.oldPrice)}</span>` : ''}
                            </div>
                        </div>
                        <button class="add-cart-btn" data-action="add" data-id="${p.id}">
                            <i class="fas fa-shopping-cart"></i> ${UI.t('addToCart')}
                        </button>
                    </div>
                </div>
            `).join('');

            grid.querySelectorAll('[data-action="add"]').forEach(btn => {
                btn.addEventListener('click', e => {
                    e.stopPropagation();
                    Store.addToCart(parseInt(btn.dataset.id));
                    UI.updateCartBadge();
                    UI.renderCartDrawer();
                    UI.showNotification(UI.t('addedToCart'), 'success', btn.closest('.product-card').querySelector('.product-title').textContent);
                });
            });
            grid.querySelectorAll('[data-action="view"]').forEach(btn => {
                btn.addEventListener('click', e => {
                    e.stopPropagation();
                    const id = btn.dataset.id;
                    window.location.href = `product.html?id=${id}`;
                });
            });
            grid.querySelectorAll('[data-action="wishlist"]').forEach(btn => {
                btn.addEventListener('click', e => {
                    e.stopPropagation();
                    btn.querySelector('i').classList.toggle('far');
                    btn.querySelector('i').classList.toggle('fas');
                    UI.showNotification(btn.querySelector('i').classList.contains('fas') ? 'Added to wishlist' : 'Removed from wishlist', 'info');
                });
            });
            grid.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('click', () => {
                    window.location.href = `product.html?id=${card.dataset.id}`;
                });
            });
            UI.setupFilterTabs();
        }, 300);
    },

    setupFilterTabs() {
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === Store.state.currentCategory);
            tab.onclick = () => {
                Store.state.currentCategory = tab.dataset.category;
                UI.renderProducts();
            };
        });
        const sortSelect = document.querySelector('.sort-select');
        if (sortSelect) {
            sortSelect.value = Store.state.currentSort;
            sortSelect.onchange = e => {
                Store.state.currentSort = e.target.value;
                UI.renderProducts();
            };
        }
    },

    renderFeatured() {
        const grid = document.querySelector('#featuredGrid');
        if (!grid) return;
        const featured = Store.state.products.filter(p => p.featured);
        grid.innerHTML = featured.slice(0, 8).map((p, i) => `
            <div class="product-card" data-id="${p.id}" style="animation-delay: ${i * 0.05}s">
                <div class="product-image">
                    ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge}</span>` : ''}
                    <i class="fas ${p.icon}"></i>
                </div>
                <div class="product-info">
                    <div class="product-category">${p.category}</div>
                    <h3 class="product-title">${p.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${UI.renderStars(p.rating)}</span>
                    </div>
                    <div class="product-price-row">
                        <span class="product-price">${UI.formatPrice(p.price)}</span>
                        ${p.oldPrice ? `<span class="product-price-old">${UI.formatPrice(p.oldPrice)}</span>` : ''}
                    </div>
                    <button class="add-cart-btn" data-id="${p.id}"><i class="fas fa-shopping-cart"></i> ${UI.t('addToCart')}</button>
                </div>
            </div>
        `).join('');
        grid.querySelectorAll('[data-id]').forEach(card => {
            const id = card.dataset.id;
            card.onclick = (e) => {
                if (e.target.closest('.add-cart-btn')) {
                    e.stopPropagation();
                    Store.addToCart(parseInt(id));
                    UI.updateCartBadge();
                    UI.renderCartDrawer();
                    UI.showNotification(UI.t('addedToCart'), 'success');
                    return;
                }
                window.location.href = `product.html?id=${id}`;
            };
        });
    },

    renderBlog() {
        const grid = document.querySelector('#blogGrid');
        if (!grid) return;
        const posts = Store.state.posts.filter(p => p.status === 'published').slice(0, 3);
        grid.innerHTML = posts.map(post => `
            <a class="blog-card scroll-reveal" href="blog.html#post-${post.id}">
                <div class="blog-image" style="background: var(--gradient-${['primary','accent','warm','cool'][post.id % 4]});">
                    <i class="fas ${post.icon}"></i>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-category">${post.category}</span>
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <span class="blog-link">${UI.t('readMore')} <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>
        `).join('');
    },

    renderTestimonials() {
        const grid = document.querySelector('#testimonialsGrid');
        if (!grid) return;
        const testimonials = Storage.get('testimonials', [
            { name: 'Sarah Johnson', role: 'Verified Buyer', text: 'Absolutely love the quality and fast shipping! Iqra Mart has become my go-to for online shopping.', rating: 5, initials: 'SJ' },
            { name: 'Ahmed Khan', role: 'Premium Customer', text: 'The customer service is exceptional. They resolved my issue within minutes. Highly recommended!', rating: 5, initials: 'AK' },
            { name: 'Maria Garcia', role: 'Loyal Customer', text: 'Best prices I have found online, plus the products always arrive in perfect condition.', rating: 5, initials: 'MG' }
        ]);
        grid.innerHTML = testimonials.map(t => `
            <div class="testimonial-card scroll-reveal">
                <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${t.initials}</div>
                    <div class="testimonial-info">
                        <strong>${t.name}</strong>
                        <small>${t.role}</small>
                    </div>
                </div>
            </div>
        `).join('');
    },

    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = Store.cartCount();
        badges.forEach(b => {
            b.textContent = count;
            b.style.display = count > 0 ? 'flex' : 'none';
        });
    },

    renderCartDrawer() {
        const container = document.querySelector('#cartDrawerBody');
        if (!container) return;
        if (!Store.state.cart.length) {
            container.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>${UI.t('emptyCart')}</h3>
                    <p>${UI.t('emptyCartDesc')}</p>
                </div>
            `;
            const totalEl = document.querySelector('#cartTotalValue');
            if (totalEl) totalEl.textContent = UI.formatPrice(0);
            return;
        }
        container.innerHTML = Store.state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image"><i class="fas ${item.icon}"></i></div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${UI.formatPrice(item.price)}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-action="remove" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
        container.querySelectorAll('[data-action="dec"]').forEach(b => b.onclick = () => {
            const item = Store.state.cart.find(i => i.id === parseInt(b.dataset.id));
            if (item) Store.updateCartItem(item.id, item.quantity - 1);
            UI.updateCartBadge();
            UI.renderCartDrawer();
        });
        container.querySelectorAll('[data-action="inc"]').forEach(b => b.onclick = () => {
            const item = Store.state.cart.find(i => i.id === parseInt(b.dataset.id));
            if (item) Store.updateCartItem(item.id, item.quantity + 1);
            UI.updateCartBadge();
            UI.renderCartDrawer();
        });
        container.querySelectorAll('[data-action="remove"]').forEach(b => b.onclick = () => {
            Store.removeCartItem(parseInt(b.dataset.id));
            UI.updateCartBadge();
            UI.renderCartDrawer();
            UI.showNotification('Item removed from cart', 'info');
        });
        const totalEl = document.querySelector('#cartTotalValue');
        if (totalEl) totalEl.textContent = UI.formatPrice(Store.cartTotal());
    },

    applyTranslations() {
        document.documentElement.lang = Store.state.currentLang;
        document.documentElement.dir = ['ar', 'ur'].includes(Store.state.currentLang) ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const val = UI.t(key);
            if (val && val !== key) {
                if (el.tagName === 'INPUT' && el.type !== 'submit') {
                    el.placeholder = val;
                } else {
                    el.innerHTML = val;
                }
            }
        });
    },

    setupScrollReveal() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    },

    setupHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    },

    openCartDrawer() {
        const drawer = document.querySelector('#cartDrawer');
        const overlay = document.querySelector('#cartDrawerOverlay');
        if (drawer) drawer.classList.add('active');
        if (overlay) overlay.classList.add('active');
        UI.renderCartDrawer();
    },

    closeCartDrawer() {
        const drawer = document.querySelector('#cartDrawer');
        const overlay = document.querySelector('#cartDrawerOverlay');
        if (drawer) drawer.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    },

    setupSearchModal() {
        const modal = document.querySelector('#searchModal');
        const open = document.querySelector('#searchBtn');
        const close = document.querySelector('#searchClose');
        const input = document.querySelector('#searchInput');
        const results = document.querySelector('#searchResults');
        if (!modal) return;
        if (open) open.onclick = () => { modal.classList.add('active'); if (input) input.focus(); };
        if (close) close.onclick = () => modal.classList.remove('active');
        modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
        if (input) {
            input.oninput = () => {
                const q = input.value.toLowerCase().trim();
                if (!q) { results.innerHTML = ''; return; }
                const matches = Store.state.products.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
                );
                if (!matches.length) {
                    results.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>${UI.t('noResults')}</h3><p>${UI.t('noResultsDesc')}</p></div>`;
                    return;
                }
                results.innerHTML = `<div class="search-results">${matches.slice(0, 6).map(p => `
                    <div class="search-result-item" data-id="${p.id}">
                        <div class="search-result-icon"><i class="fas ${p.icon}"></i></div>
                        <div class="search-result-info">
                            <h4>${p.name}</h4>
                            <small>${UI.formatPrice(p.price)}</small>
                        </div>
                    </div>
                `).join('')}</div>`;
                results.querySelectorAll('.search-result-item').forEach(r => {
                    r.onclick = () => { window.location.href = `product.html?id=${r.dataset.id}`; };
                });
            };
        }
    },

    setupThemeToggle() {
        const btn = document.querySelector('#themeToggle');
        if (!btn) return;
        const apply = (mode) => {
            document.body.classList.toggle('light-mode', mode === 'light');
            btn.innerHTML = mode === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        };
        const saved = Storage.get('theme', 'dark');
        apply(saved);
        btn.onclick = () => {
            const next = document.body.classList.contains('light-mode') ? 'dark' : 'light';
            apply(next);
            Storage.set('theme', next);
        };
    },

    setupLanguage() {
        const btn = document.querySelector('#langBtn');
        const dropdown = document.querySelector('#langDropdown');
        if (!btn || !dropdown) return;
        btn.onclick = e => { e.stopPropagation(); dropdown.classList.toggle('active'); };
        document.onclick = () => dropdown.classList.remove('active');
        dropdown.querySelectorAll('[data-lang]').forEach(opt => {
            opt.onclick = e => {
                e.stopPropagation();
                Store.state.currentLang = opt.dataset.lang;
                Store.save();
                dropdown.classList.remove('active');
                UI.applyTranslations();
                if (typeof renderProducts === 'function') renderProducts();
                UI.renderProducts();
                UI.renderFeatured();
                UI.renderBlog();
                UI.updateCartBadge();
                UI.showNotification(`Language: ${opt.textContent.trim()}`, 'info');
            };
        });
    },

    setupMobileMenu() {
        const btn = document.querySelector('#mobileMenuBtn');
        const nav = document.querySelector('.nav-links');
        if (!btn || !nav) return;
        btn.onclick = () => nav.classList.toggle('active');
    },

    setupCartUI() {
        const cartBtn = document.querySelector('#cartBtn');
        const cartClose = document.querySelector('#cartClose');
        const cartOverlay = document.querySelector('#cartDrawerOverlay');
        const checkoutBtn = document.querySelector('#checkoutBtn');
        if (cartBtn) cartBtn.onclick = UI.openCartDrawer;
        if (cartClose) cartClose.onclick = UI.closeCartDrawer;
        if (cartOverlay) cartOverlay.onclick = UI.closeCartDrawer;
        if (checkoutBtn) checkoutBtn.onclick = () => {
            if (!Store.state.cart.length) {
                UI.showNotification(UI.t('emptyCart'), 'warning');
                return;
            }
            window.location.href = 'checkout.html';
        };
    },

    setupNewsletter() {
        const form = document.querySelector('#newsletterForm');
        if (!form) return;
        form.onsubmit = e => {
            e.preventDefault();
            const email = form.querySelector('input').value.trim();
            if (!email) return;
            const subs = Storage.get('subscribers', []);
            if (!subs.includes(email)) {
                subs.push(email);
                Storage.set('subscribers', subs);
            }
            UI.showNotification('Thanks for subscribing!', 'success', 'Welcome!');
            form.reset();
        };
    },

    applyDynamicContent() {
        // Hero
        const hero = Store.getPageContent('hero');
        if (hero) {
            const badge = document.querySelector('[data-cms="hero-badge"]');
            const title = document.querySelector('[data-cms="hero-title"]');
            const highlight = document.querySelector('[data-cms="hero-highlight"]');
            const subtitle = document.querySelector('[data-cms="hero-subtitle"]');
            if (badge) badge.textContent = hero.badge;
            if (title) title.textContent = hero.title;
            if (highlight) highlight.textContent = hero.titleHighlight;
            if (subtitle) subtitle.textContent = hero.subtitle;
        }
        // Features
        const features = Store.getPageContent('features');
        if (features && Array.isArray(features)) {
            const grid = document.querySelector('#featuresGrid');
            if (grid) {
                grid.innerHTML = features.map(f => `
                    <div class="feature-card scroll-reveal">
                        <div class="feature-icon"><i class="fas ${f.icon}"></i></div>
                        <h3>${f.title}</h3>
                        <p>${f.desc}</p>
                    </div>
                `).join('');
            }
        }
        // About
        const about = Store.getPageContent('about');
        if (about) {
            const t = document.querySelector('[data-cms="about-title"]');
            const h = document.querySelector('[data-cms="about-highlight"]');
            const s = document.querySelector('[data-cms="about-subtitle"]');
            const p1 = document.querySelector('[data-cms="about-p1"]');
            const p2 = document.querySelector('[data-cms="about-p2"]');
            if (t) t.textContent = about.title;
            if (h) h.textContent = about.titleHighlight;
            if (s) s.textContent = about.subtitle;
            if (p1) p1.textContent = about.paragraph1;
            if (p2) p2.textContent = about.paragraph2;
        }
        // Settings → footer/contact
        const s = Store.state.settings;
        document.querySelectorAll('[data-cms="site-name"]').forEach(el => el.textContent = s.siteName || '');
        document.querySelectorAll('[data-cms="phone"]').forEach(el => el.textContent = s.phone || '');
        document.querySelectorAll('[data-cms="email"]').forEach(el => el.textContent = s.email || '');
        document.querySelectorAll('[data-cms="address"]').forEach(el => el.textContent = s.address || '');
        if (s.copyright) {
            document.querySelectorAll('[data-cms="copyright"]').forEach(el => el.textContent = s.copyright);
        }
        if (s.footerTagline) {
            document.querySelectorAll('[data-cms="footer-tagline"]').forEach(el => el.textContent = s.footerTagline);
        }
        // Social links
        document.querySelectorAll('[data-cms-link]').forEach(el => {
            const key = el.dataset.cmsLink;
            if (s[key]) el.href = s[key];
        });
    },

    initHomepage() {
        Store.init();
        UI.renderCategories();
        UI.renderProducts();
        UI.renderFeatured();
        UI.renderBlog();
        UI.renderTestimonials();
        UI.updateCartBadge();
        UI.renderCartDrawer();
        UI.applyTranslations();
        UI.applyDynamicContent();
        UI.setupScrollReveal();
        UI.setupHeaderScroll();
        UI.setupSearchModal();
        UI.setupThemeToggle();
        UI.setupLanguage();
        UI.setupMobileMenu();
        UI.setupCartUI();
        UI.setupNewsletter();
    }
};

// ============================================
// ADMIN PANEL
// ============================================

const Admin = {
    init() {
        Store.init();
        const isLoginPage = window.location.pathname.includes('admin-login');
        if (isLoginPage) {
            Admin.setupLogin();
        } else if (window.location.pathname.includes('admin')) {
            if (!Store.state.isAdmin) {
                window.location.href = 'admin-login.html';
                return;
            }
            Admin.setupDashboard();
        }
    },

    setupLogin() {
        const form = document.querySelector('#loginForm');
        if (!form) return;
        form.onsubmit = e => {
            e.preventDefault();
            const u = form.querySelector('[name=username]').value;
            const p = form.querySelector('[name=password]').value;
            const creds = Store.state.settings.adminCredentials || DEFAULT_SETTINGS.adminCredentials;
            if (u === creds.username && p === creds.password) {
                Store.state.isAdmin = true;
                Store.save();
                UI.showNotification('Welcome back, admin!', 'success');
                setTimeout(() => window.location.href = 'admin.html', 800);
            } else {
                UI.showNotification('Invalid credentials', 'error', 'Login Failed');
            }
        };
    },

    setupDashboard() {
        Admin.renderAll();
        Admin.setupNavigation();
        Admin.setupModals();
        UI.setupThemeToggle();
    },

    renderAll() {
        Admin.renderStats();
        Admin.renderProductsTable();
        Admin.renderPostsTable();
        Admin.renderCategoriesTable();
        Admin.renderOrdersTable();
        Admin.renderTestimonialsTable();
        Admin.renderSubscribersTable();
        Admin.renderMessagesTable();
        Admin.renderRecentOrders();
        Admin.renderTopProducts();
        Admin.loadSettingsForm();
    },

    switchSection(section) {
        document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
        document.querySelector(`[data-section="${section}"]`)?.classList.add('active');
        document.querySelectorAll('.admin-content-section').forEach(s => s.style.display = 'none');
        document.querySelector(`#section-${section}`).style.display = 'block';
    },

    renderRecentOrders() {
        const container = document.querySelector('#recentOrders');
        if (!container) return;
        const orders = Storage.get('orders', []);
        if (!orders.length) {
            container.innerHTML = '<p style="color:var(--text-tertiary);text-align:center;padding:2rem;">No orders yet. Orders will appear here when customers checkout.</p>';
            return;
        }
        container.innerHTML = orders.slice(-5).reverse().map(o => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.85rem 0;border-bottom:1px solid var(--border);">
                <div>
                    <strong>${o.id}</strong><br>
                    <small style="color:var(--text-tertiary)">${o.firstName} ${o.lastName} • ${new Date(o.date).toLocaleDateString()}</small>
                </div>
                <div style="text-align:right;">
                    <strong style="background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">${UI.formatPrice(o.total)}</strong><br>
                    <span class="status-badge ${o.status === 'completed' ? 'active' : 'draft'}">${o.status}</span>
                </div>
            </div>
        `).join('');
    },

    renderTopProducts() {
        const container = document.querySelector('#topProducts');
        if (!container) return;
        const top = Store.state.products.filter(p => p.featured).slice(0, 5);
        container.innerHTML = top.map(p => `
            <div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 0;border-bottom:1px solid var(--border);">
                <div class="table-img"><i class="fas ${p.icon}"></i></div>
                <div style="flex:1;min-width:0;">
                    <strong style="display:block;font-size:0.9rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.name}</strong>
                    <small style="color:var(--text-tertiary)">${p.category}</small>
                </div>
                <strong style="color:var(--primary-light);">${UI.formatPrice(p.price)}</strong>
            </div>
        `).join('');
    },

    renderOrdersTable() {
        const tbody = document.querySelector('#ordersTableBody');
        if (!tbody) return;
        const orders = Storage.get('orders', []);
        if (!orders.length) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-tertiary)">No orders yet</td></tr>';
            return;
        }
        tbody.innerHTML = orders.slice().reverse().map(o => `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.firstName} ${o.lastName}<br><small style="color:var(--text-tertiary)">${o.email}</small></td>
                <td>${new Date(o.date).toLocaleDateString()}</td>
                <td>${o.items.length} items</td>
                <td><strong>${UI.formatPrice(o.total)}</strong></td>
                <td><span class="status-badge ${o.status === 'completed' ? 'active' : 'draft'}">${o.status}</span></td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.viewOrder('${o.id}')"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.updateOrderStatus('${o.id}')"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deleteOrder('${o.id}')"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    },

    viewOrder(id) {
        const orders = Storage.get('orders', []);
        const order = orders.find(o => o.id === id);
        if (!order) return;
        const content = document.querySelector('#orderContent');
        content.innerHTML = `
            <div style="margin-bottom:1.5rem;">
                <strong>Order ID:</strong> ${order.id}<br>
                <strong>Date:</strong> ${new Date(order.date).toLocaleString()}<br>
                <strong>Status:</strong> <span class="status-badge ${order.status === 'completed' ? 'active' : 'draft'}">${order.status}</span>
            </div>
            <h4 style="margin-bottom:0.5rem;">Customer</h4>
            <p style="color:var(--text-secondary);margin-bottom:1rem;">
                ${order.firstName} ${order.lastName}<br>
                ${order.email}<br>
                ${order.phone}<br>
                ${order.address}, ${order.city} ${order.zip}
            </p>
            <h4 style="margin-bottom:0.5rem;">Items</h4>
            ${order.items.map(item => `
                <div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid var(--border);">
                    <span>${item.name} × ${item.quantity}</span>
                    <strong>${UI.formatPrice(item.price * item.quantity)}</strong>
                </div>
            `).join('')}
            <div style="display:flex;justify-content:space-between;padding:1rem 0;font-size:1.2rem;font-weight:700;">
                <span>Total</span>
                <span style="background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">${UI.formatPrice(order.total)}</span>
            </div>
            <h4 style="margin-bottom:0.5rem;">Payment Method</h4>
            <p style="color:var(--text-secondary);">${order.payment === 'cod' ? 'Cash on Delivery' : order.payment.toUpperCase()}</p>
        `;
        document.querySelector('#orderModal').classList.add('active');
    },

    updateOrderStatus(id) {
        const orders = Storage.get('orders', []);
        const order = orders.find(o => o.id === id);
        if (!order) return;
        const newStatus = prompt(`Update status for ${id}\nOptions: pending, processing, completed, cancelled`, order.status);
        if (!newStatus) return;
        order.status = newStatus;
        Storage.set('orders', orders);
        Admin.renderOrdersTable();
        Admin.renderRecentOrders();
        UI.showNotification('Order status updated', 'success');
    },

    deleteOrder(id) {
        if (!confirm('Delete this order?')) return;
        let orders = Storage.get('orders', []);
        orders = orders.filter(o => o.id !== id);
        Storage.set('orders', orders);
        Admin.renderOrdersTable();
        Admin.renderRecentOrders();
        UI.showNotification('Order deleted', 'success');
    },

    renderTestimonialsTable() {
        const tbody = document.querySelector('#testimonialsTableBody');
        if (!tbody) return;
        const testimonials = Storage.get('testimonials', [
            { name: 'Sarah Johnson', role: 'Verified Buyer', text: 'Absolutely love the quality and fast shipping! Iqra Mart has become my go-to for online shopping.', rating: 5, initials: 'SJ' },
            { name: 'Ahmed Khan', role: 'Premium Customer', text: 'The customer service is exceptional. They resolved my issue within minutes. Highly recommended!', rating: 5, initials: 'AK' },
            { name: 'Maria Garcia', role: 'Loyal Customer', text: 'Best prices I have found online, plus the products always arrive in perfect condition.', rating: 5, initials: 'MG' }
        ]);
        if (!testimonials.length) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-tertiary)">No testimonials yet</td></tr>';
            return;
        }
        tbody.innerHTML = testimonials.map((t, i) => `
            <tr>
                <td><strong>${t.name}</strong></td>
                <td>${t.role}</td>
                <td style="max-width:300px;color:var(--text-tertiary)">${t.text.substring(0, 80)}...</td>
                <td>${'★'.repeat(t.rating)}</td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.editTestimonial(${i})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deleteTestimonial(${i})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    },

    editTestimonial(index) {
        const testimonials = Storage.get('testimonials', []);
        const t = testimonials[index];
        if (!t) return;
        const form = document.querySelector('#testimonialForm');
        form.querySelector('[name=id]').value = index;
        form.querySelector('[name=name]').value = t.name;
        form.querySelector('[name=role]').value = t.role;
        form.querySelector('[name=text]').value = t.text;
        form.querySelector('[name=rating]').value = t.rating;
        form.querySelector('[name=initials]').value = t.initials;
        document.querySelector('#testimonialModalTitle').textContent = 'Edit Testimonial';
        document.querySelector('#testimonialModal').classList.add('active');
    },

    deleteTestimonial(index) {
        if (!confirm('Delete this testimonial?')) return;
        let testimonials = Storage.get('testimonials', []);
        testimonials.splice(index, 1);
        Storage.set('testimonials', testimonials);
        Admin.renderTestimonialsTable();
        UI.showNotification('Testimonial deleted', 'success');
    },

    renderSubscribersTable() {
        const tbody = document.querySelector('#subscribersTableBody');
        if (!tbody) return;
        const subs = Storage.get('subscribers', []);
        if (!subs.length) {
            tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;padding:2rem;color:var(--text-tertiary)">No subscribers yet</td></tr>';
            return;
        }
        tbody.innerHTML = subs.map((email, i) => `
            <tr>
                <td>${email}</td>
                <td>Recently subscribed</td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deleteSubscriber(${i})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    },

    deleteSubscriber(index) {
        if (!confirm('Remove this subscriber?')) return;
        let subs = Storage.get('subscribers', []);
        subs.splice(index, 1);
        Storage.set('subscribers', subs);
        Admin.renderSubscribersTable();
        UI.showNotification('Subscriber removed', 'success');
    },

    renderMessagesTable() {
        const tbody = document.querySelector('#messagesTableBody');
        if (!tbody) return;
        const messages = Storage.get('messages', []);
        if (!messages.length) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:2rem;color:var(--text-tertiary)">No messages yet</td></tr>';
            return;
        }
        const realIndex = (m) => messages.length - 1 - m;
        tbody.innerHTML = messages.slice().reverse().map((m, i) => {
            const actualIndex = messages.length - 1 - i;
            return `
            <tr>
                <td><strong>${m.firstName} ${m.lastName}</strong><br><small style="color:var(--text-tertiary)">${m.email}</small></td>
                <td>${m.subject}</td>
                <td>${new Date(m.date).toLocaleDateString()}</td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.viewMessage(${actualIndex})"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deleteMessage(${actualIndex})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;}).join('');
    },

    viewMessage(index) {
        const messages = Storage.get('messages', []);
        const m = messages[index];
        if (!m) return;
        const content = document.querySelector('#postContent');
        if (!content) {
            alert(`From: ${m.firstName} ${m.lastName} (${m.email})\nSubject: ${m.subject}\n\n${m.message}`);
            return;
        }
    },

    deleteMessage(index) {
        if (!confirm('Delete this message?')) return;
        let messages = Storage.get('messages', []);
        messages.splice(index, 1);
        Storage.set('messages', messages);
        Admin.renderMessagesTable();
        UI.showNotification('Message deleted', 'success');
    },

    loadSettingsForm() {
        const form = document.querySelector('#settingsForm');
        if (!form) return;
        const s = Store.state.settings;
        form.querySelector('[name=siteName]').value = s.siteName || '';
        form.querySelector('[name=tagline]').value = s.tagline || '';
        form.querySelector('[name=email]').value = s.email || '';
        form.querySelector('[name=phone]').value = s.phone || '';
        form.querySelector('[name=address]').value = s.address || '';
        form.querySelector('[name=currency]').value = s.currency || '$';
        form.querySelector('[name=freeShippingThreshold]').value = s.freeShippingThreshold || 100;
        form.querySelector('[name=adminUsername]').value = (s.adminCredentials && s.adminCredentials.username) || 'admin';
        form.querySelector('[name=facebook]').value = s.facebook || '';
        form.querySelector('[name=twitter]').value = s.twitter || '';
        form.querySelector('[name=instagram]').value = s.instagram || '';
        form.querySelector('[name=linkedin]').value = s.linkedin || '';
    },

    setupSettingsForm() {
        const form = document.querySelector('#settingsForm');
        if (!form) return;
        form.onsubmit = e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(form));
            Store.state.settings = {
                ...Store.state.settings,
                siteName: data.siteName,
                tagline: data.tagline,
                email: data.email,
                phone: data.phone,
                address: data.address,
                currency: data.currency,
                freeShippingThreshold: parseFloat(data.freeShippingThreshold),
                facebook: data.facebook,
                twitter: data.twitter,
                instagram: data.instagram,
                linkedin: data.linkedin,
                adminCredentials: {
                    username: data.adminUsername,
                    password: data.adminPassword || (Store.state.settings.adminCredentials?.password || 'admin123')
                }
            };
            Store.save();
            UI.showNotification('Settings saved successfully!', 'success');
        };
    },

    setupPagesForm() {
        const tabs = document.querySelectorAll('#pageTabs .tab');
        const pageContent = document.querySelector('#pageContent');
        const pages = {
            hero: () => {
                const pages = Storage.get('pages', {});
                const hero = pages.hero || { badge: 'New Collection 2026', title: 'Welcome to the Future of', titleHighlight: 'Online Shopping', subtitle: 'Discover thousands of premium products across electronics, fashion, home, and more.' };
                return `
                    <div class="form-group">
                        <label class="form-label">Hero Badge</label>
                        <input class="form-input" name="badge" value="${hero.badge}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Title (First Line)</label>
                        <input class="form-input" name="title" value="${hero.title}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Title (Gradient Highlight)</label>
                        <input class="form-input" name="titleHighlight" value="${hero.titleHighlight}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Subtitle</label>
                        <textarea class="form-textarea" name="subtitle">${hero.subtitle}</textarea>
                    </div>
                `;
            },
            features: () => {
                const pages = Storage.get('pages', {});
                const features = pages.features || [
                    { icon: 'fa-shipping-fast', title: 'Free Shipping', desc: 'On orders over $100' },
                    { icon: 'fa-shield-alt', title: 'Secure Payment', desc: '100% protected checkout' },
                    { icon: 'fa-headset', title: '24/7 Support', desc: 'Dedicated customer care' },
                    { icon: 'fa-undo', title: 'Easy Returns', desc: '30-day return policy' }
                ];
                return features.map((f, i) => `
                    <h4 style="margin:1rem 0 0.5rem;">Feature ${i + 1}</h4>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Icon</label>
                            <input class="form-input" name="feature_${i}_icon" value="${f.icon}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Title</label>
                            <input class="form-input" name="feature_${i}_title" value="${f.title}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <input class="form-input" name="feature_${i}_desc" value="${f.desc}">
                    </div>
                `).join('');
            },
            about: () => {
                const pages = Storage.get('pages', {});
                const about = pages.about || {
                    title: 'Crafting',
                    titleHighlight: 'Shopping Excellence',
                    subtitle: "We're on a mission to make online shopping delightful, secure, and accessible to everyone.",
                    paragraph1: "At Iqra Online Mart, we're committed to providing you with the best online shopping experience...",
                    paragraph2: "We believe that shopping should be enjoyable, convenient, and accessible to everyone."
                };
                return `
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Title (Plain)</label>
                            <input class="form-input" name="title" value="${about.title}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Title (Highlight)</label>
                            <input class="form-input" name="titleHighlight" value="${about.titleHighlight}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Subtitle</label>
                        <input class="form-input" name="subtitle" value="${about.subtitle}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Paragraph 1</label>
                        <textarea class="form-textarea" name="paragraph1">${about.paragraph1}</textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Paragraph 2</label>
                        <textarea class="form-textarea" name="paragraph2">${about.paragraph2}</textarea>
                    </div>
                `;
            },
            footer: () => {
                const s = Store.state.settings;
                return `
                    <div class="form-group">
                        <label class="form-label">Footer Tagline</label>
                        <textarea class="form-textarea" name="footerTagline">Your premium online shopping destination. Quality products, fast delivery, exceptional service.</textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Copyright Text</label>
                        <input class="form-input" name="copyright" value="© 2026 Iqra Online Mart. All rights reserved.">
                    </div>
                `;
            }
        };
        let currentPage = 'hero';
        const renderPage = () => {
            pageContent.innerHTML = `<input type="hidden" name="pageKey" value="${currentPage}">` + pages[currentPage]();
        };
        renderPage();
        tabs.forEach(tab => {
            tab.onclick = () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentPage = tab.dataset.page;
                renderPage();
            };
        });
        document.querySelector('#pagesForm').onsubmit = e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            const allPages = Storage.get('pages', {});
            if (currentPage === 'hero') {
                allPages.hero = { badge: data.badge, title: data.title, titleHighlight: data.titleHighlight, subtitle: data.subtitle };
            } else if (currentPage === 'features') {
                allPages.features = [0, 1, 2, 3].map(i => ({
                    icon: data[`feature_${i}_icon`],
                    title: data[`feature_${i}_title`],
                    desc: data[`feature_${i}_desc`]
                }));
            } else if (currentPage === 'about') {
                allPages.about = {
                    title: data.title,
                    titleHighlight: data.titleHighlight,
                    subtitle: data.subtitle,
                    paragraph1: data.paragraph1,
                    paragraph2: data.paragraph2
                };
            } else if (currentPage === 'footer') {
                Store.state.settings.footerTagline = data.footerTagline;
                Store.state.settings.copyright = data.copyright;
            }
            Storage.set('pages', allPages);
            Store.save();
            UI.showNotification('Page content saved!', 'success');
        };
    },

    setupSearchFilter() {
        const search = document.querySelector('#productSearch');
        if (!search) return;
        search.oninput = () => {
            const q = search.value.toLowerCase();
            const rows = document.querySelectorAll('#productsTableBody tr');
            rows.forEach(row => {
                row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
            });
        };
    },

    setupNavigation() {
        document.querySelectorAll('.admin-nav-item').forEach(item => {
            item.onclick = () => {
                document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const section = item.dataset.section;
                document.querySelectorAll('.admin-content-section').forEach(s => s.style.display = 'none');
                const target = document.querySelector(`#section-${section}`);
                if (target) target.style.display = 'block';
            };
        });
        const logout = document.querySelector('#adminLogout');
        if (logout) logout.onclick = () => {
            Store.state.isAdmin = false;
            Store.save();
            window.location.href = 'admin-login.html';
        };
    },

    renderStats() {
        const statsEl = document.querySelector('#adminStats');
        if (!statsEl) return;
        const products = Store.state.products;
        const posts = Store.state.posts;
        const orders = Storage.get('orders', []);
        const revenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
        statsEl.innerHTML = `
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Total Products</span>
                    <div class="stat-icon"><i class="fas fa-box"></i></div>
                </div>
                <div class="stat-value">${products.length}</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> ${products.filter(p => p.featured).length} featured</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Total Orders</span>
                    <div class="stat-icon"><i class="fas fa-shopping-bag"></i></div>
                </div>
                <div class="stat-value">${orders.length}</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> Recent activity</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Revenue</span>
                    <div class="stat-icon"><i class="fas fa-dollar-sign"></i></div>
                </div>
                <div class="stat-value">${UI.formatPrice(revenue)}</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> Total earnings</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">Blog Posts</span>
                    <div class="stat-icon"><i class="fas fa-blog"></i></div>
                </div>
                <div class="stat-value">${posts.length}</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> ${posts.filter(p => p.status === 'published').length} published</div>
            </div>
        `;
    },

    renderProductsTable() {
        const tbody = document.querySelector('#productsTableBody');
        if (!tbody) return;
        tbody.innerHTML = Store.state.products.map(p => `
            <tr>
                <td><div class="table-img"><i class="fas ${p.icon}"></i></div></td>
                <td><strong>${p.name}</strong><br><small style="color:var(--text-tertiary)">${p.id}</small></td>
                <td>${p.category}</td>
                <td>${UI.formatPrice(p.price)}</td>
                <td><span class="status-badge active">${p.status}</span></td>
                <td>${p.stock}</td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.editProduct(${p.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deleteProduct(${p.id})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    },

    editProduct(id) {
        const product = Store.state.products.find(p => p.id === id);
        if (!product) return;
        const modal = document.querySelector('#productModal');
        if (!modal) return;
        const form = modal.querySelector('form');
        // Populate category select first
        const catSelect = form.querySelector('[name=category]');
        catSelect.innerHTML = Store.state.categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
        form.querySelector('[name=id]').value = product.id;
        form.querySelector('[name=name]').value = product.name;
        form.querySelector('[name=price]').value = product.price;
        form.querySelector('[name=oldPrice]').value = product.oldPrice || '';
        form.querySelector('[name=category]').value = product.category;
        form.querySelector('[name=icon]').value = product.icon;
        form.querySelector('[name=description]').value = product.description;
        form.querySelector('[name=stock]').value = product.stock;
        form.querySelector('[name=rating]').value = product.rating;
        form.querySelector('[name=featured]').value = product.featured ? 'true' : 'false';
        form.querySelector('[name=badge]').value = product.badge || '';
        document.querySelector('#productModalTitle').textContent = 'Edit Product';
        modal.classList.add('active');
    },

    deleteProduct(id) {
        if (!confirm('Delete this product?')) return;
        Store.deleteProduct(id);
        Admin.renderProductsTable();
        Admin.renderStats();
        UI.showNotification('Product deleted', 'success');
    },

    renderPostsTable() {
        const tbody = document.querySelector('#postsTableBody');
        if (!tbody) return;
        tbody.innerHTML = Store.state.posts.map(p => `
            <tr>
                <td><div class="table-img"><i class="fas ${p.icon}"></i></div></td>
                <td><strong>${p.title}</strong><br><small style="color:var(--text-tertiary)">${p.excerpt.substring(0, 60)}...</small></td>
                <td>${p.category}</td>
                <td>${p.date}</td>
                <td><span class="status-badge ${p.status === 'published' ? 'active' : 'draft'}">${p.status}</span></td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.editPost(${p.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deletePost(${p.id})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    },

    editPost(id) {
        const post = Store.state.posts.find(p => p.id === id);
        if (!post) return;
        const modal = document.querySelector('#postModal');
        if (!modal) return;
        const form = modal.querySelector('form');
        form.querySelector('[name=id]').value = post.id;
        form.querySelector('[name=title]').value = post.title;
        form.querySelector('[name=excerpt]').value = post.excerpt;
        form.querySelector('[name=icon]').value = post.icon;
        form.querySelector('[name=category]').value = post.category;
        form.querySelector('[name=readTime]').value = post.readTime;
        form.querySelector('[name=content]').value = post.content;
        form.querySelector('[name=status]').value = post.status;
        modal.classList.add('active');
    },

    deletePost(id) {
        if (!confirm('Delete this post?')) return;
        Store.deletePost(id);
        Admin.renderPostsTable();
        Admin.renderStats();
        UI.showNotification('Post deleted', 'success');
    },

    renderCategoriesTable() {
        const tbody = document.querySelector('#categoriesTableBody');
        if (!tbody) return;
        tbody.innerHTML = Store.state.categories.map(c => `
            <tr>
                <td><div class="table-img"><i class="fas ${c.icon}"></i></div></td>
                <td><strong>${c.name}</strong></td>
                <td>${c.description}</td>
                <td>${Store.state.products.filter(p => p.category === c.name).length} products</td>
                <td class="actions">
                    <button class="btn btn-sm btn-ghost" onclick="Admin.editCategory('${c.id}')"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-ghost" onclick="Admin.deleteCategory('${c.id}')"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
    },

    editCategory(id) {
        const cat = Store.state.categories.find(c => c.id === id);
        if (!cat) return;
        const modal = document.querySelector('#categoryModal');
        if (!modal) return;
        const form = modal.querySelector('form');
        form.querySelector('[name=id]').value = cat.id;
        form.querySelector('[name=name]').value = cat.name;
        form.querySelector('[name=icon]').value = cat.icon;
        form.querySelector('[name=description]').value = cat.description;
        modal.classList.add('active');
    },

    deleteCategory(id) {
        if (!confirm('Delete this category?')) return;
        Store.deleteCategory(id);
        Admin.renderCategoriesTable();
        UI.showNotification('Category deleted', 'success');
    },

    setupModals() {
        // Product modal
        const productForm = document.querySelector('#productForm');
        if (productForm) {
            productForm.onsubmit = e => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(productForm));
                const productData = {
                    name: data.name,
                    price: parseFloat(data.price),
                    oldPrice: data.oldPrice ? parseFloat(data.oldPrice) : null,
                    category: data.category,
                    icon: data.icon,
                    description: data.description,
                    stock: parseInt(data.stock),
                    rating: parseFloat(data.rating),
                    featured: data.featured === 'true',
                    badge: data.badge || null,
                    reviews: 0
                };
                if (data.id) {
                    Store.updateProduct(parseInt(data.id), productData);
                    UI.showNotification('Product updated', 'success');
                } else {
                    Store.addProduct(productData);
                    UI.showNotification('Product created', 'success');
                }
                document.querySelector('#productModal').classList.remove('active');
                Admin.renderProductsTable();
                Admin.renderStats();
            };
        }
        // Testimonial form
        const testimonialForm = document.querySelector('#testimonialForm');
        if (testimonialForm) {
            testimonialForm.onsubmit = e => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(testimonialForm));
                const testimonials = Storage.get('testimonials', []);
                const newT = {
                    name: data.name,
                    role: data.role,
                    text: data.text,
                    rating: parseInt(data.rating),
                    initials: data.initials
                };
                if (data.id !== '' && data.id !== null && !isNaN(parseInt(data.id))) {
                    testimonials[parseInt(data.id)] = newT;
                    UI.showNotification('Testimonial updated', 'success');
                } else {
                    testimonials.push(newT);
                    UI.showNotification('Testimonial created', 'success');
                }
                Storage.set('testimonials', testimonials);
                document.querySelector('#testimonialModal').classList.remove('active');
                Admin.renderTestimonialsTable();
            };
        }
        // Post modal
        const postForm = document.querySelector('#postForm');
        if (postForm) {
            postForm.onsubmit = e => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(postForm));
                const postData = {
                    title: data.title,
                    excerpt: data.excerpt,
                    icon: data.icon,
                    category: data.category,
                    readTime: data.readTime,
                    content: data.content,
                    status: data.status
                };
                if (data.id) {
                    Store.updatePost(parseInt(data.id), postData);
                    UI.showNotification('Post updated', 'success');
                } else {
                    Store.addPost(postData);
                    UI.showNotification('Post created', 'success');
                }
                document.querySelector('#postModal').classList.remove('active');
                Admin.renderPostsTable();
                Admin.renderStats();
            };
        }
        // Category modal
        const categoryForm = document.querySelector('#categoryForm');
        if (categoryForm) {
            categoryForm.onsubmit = e => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(categoryForm));
                const catData = {
                    name: data.name,
                    icon: data.icon,
                    description: data.description,
                    id: data.id || data.name.toLowerCase().replace(/\s+/g, '-')
                };
                if (data.id) {
                    Store.updateCategory(data.id, catData);
                    UI.showNotification('Category updated', 'success');
                } else {
                    Store.addCategory(catData);
                    UI.showNotification('Category created', 'success');
                }
                document.querySelector('#categoryModal').classList.remove('active');
                Admin.renderCategoriesTable();
            };
        }
        // Modal openers
        document.querySelectorAll('[data-open-modal]').forEach(btn => {
            btn.onclick = () => {
                const modalId = btn.dataset.openModal;
                const modal = document.querySelector(`#${modalId}`);
                if (modal) {
                    const form = modal.querySelector('form');
                    if (form) form.reset();
                    if (modalId === 'productModal') {
                        const idField = form.querySelector('[name=id]');
                        if (idField) idField.value = '';
                        form.querySelector('[name=category]').innerHTML = Store.state.categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
                    }
                    modal.classList.add('active');
                }
            };
        });
        // Modal closers
        document.querySelectorAll('[data-close-modal]').forEach(btn => {
            btn.onclick = () => {
                const modal = btn.closest('.modal');
                if (modal) modal.classList.remove('active');
            };
        });
        document.querySelectorAll('.modal').forEach(modal => {
            modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
        });
    }
};

// ============================================
// PRODUCT DETAIL PAGE
// ============================================

const ProductDetail = {
    init() {
        Store.init();
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));
        const product = Store.state.products.find(p => p.id === id);
        if (!product) {
            document.querySelector('#productDetail').innerHTML = '<div class="empty-state"><i class="fas fa-box-open"></i><h3>Product not found</h3></div>';
            return;
        }
        ProductDetail.render(product);
        ProductDetail.renderRelated(product);
        UI.updateCartBadge();
        UI.renderCartDrawer();
        UI.setupSearchModal();
        UI.setupThemeToggle();
        UI.setupLanguage();
        UI.setupMobileMenu();
        UI.setupCartUI();
    },

    render(product) {
        const container = document.querySelector('#productDetail');
        if (!container) return;
        document.title = `${product.name} - Iqra Online Mart`;
        container.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    ${product.badge ? `<span class="product-badge ${product.badge}" style="position:absolute;top:1rem;left:1rem;">${product.badge}</span>` : ''}
                    <i class="fas ${product.icon}"></i>
                </div>
                <div class="product-detail-info">
                    <div class="category">${product.category}</div>
                    <h1>${product.name}</h1>
                    <div class="product-rating">
                        <span class="stars" style="color:var(--warning)">${UI.renderStars(product.rating)}</span>
                        <span style="color:var(--text-tertiary)">(${product.reviews} reviews)</span>
                    </div>
                    <div class="price">${UI.formatPrice(product.price)} ${product.oldPrice ? `<span class="product-price-old">${UI.formatPrice(product.oldPrice)}</span>` : ''}</div>
                    <p class="description">${product.description}</p>
                    <ul class="features">
                        <li><i class="fas fa-check-circle"></i> In stock - Ships within 24 hours</li>
                        <li><i class="fas fa-check-circle"></i> Free shipping on orders over $100</li>
                        <li><i class="fas fa-check-circle"></i> 30-day money-back guarantee</li>
                        <li><i class="fas fa-check-circle"></i> Secure checkout</li>
                    </ul>
                    <div class="qty-selector">
                        <button onclick="ProductDetail.changeQty(-1)">−</button>
                        <input type="number" id="qtyInput" value="1" min="1" max="${product.stock}">
                        <button onclick="ProductDetail.changeQty(1)">+</button>
                        <span style="color:var(--text-tertiary);font-size:0.9rem;margin-left:1rem;">${product.stock} available</span>
                    </div>
                    <div style="display:flex;gap:1rem;flex-wrap:wrap;">
                        <button class="btn btn-lg" onclick="ProductDetail.addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button class="btn btn-lg btn-outline" onclick="ProductDetail.buyNow(${product.id})"><i class="fas fa-bolt"></i> Buy Now</button>
                    </div>
                </div>
            </div>
        `;
    },

    changeQty(delta) {
        const input = document.querySelector('#qtyInput');
        if (!input) return;
        const newVal = Math.max(1, parseInt(input.value || 1) + delta);
        input.value = newVal;
    },

    addToCart(id) {
        const qty = parseInt(document.querySelector('#qtyInput').value || 1);
        Store.addToCart(id, qty);
        UI.updateCartBadge();
        UI.renderCartDrawer();
        UI.openCartDrawer();
        UI.showNotification(UI.t('addedToCart'), 'success');
    },

    buyNow(id) {
        const qty = parseInt(document.querySelector('#qtyInput').value || 1);
        Store.addToCart(id, qty);
        window.location.href = 'checkout.html';
    },

    renderRelated(current) {
        const container = document.querySelector('#relatedProducts');
        if (!container) return;
        const related = Store.state.products.filter(p => p.category === current.category && p.id !== current.id).slice(0, 4);
        container.innerHTML = related.map(p => `
            <div class="product-card" data-id="${p.id}">
                <div class="product-image"><i class="fas ${p.icon}"></i></div>
                <div class="product-info">
                    <div class="product-category">${p.category}</div>
                    <h3 class="product-title">${p.name}</h3>
                    <span class="product-price">${UI.formatPrice(p.price)}</span>
                </div>
            </div>
        `).join('');
        container.querySelectorAll('.product-card').forEach(c => {
            c.onclick = () => window.location.href = `product.html?id=${c.dataset.id}`;
        });
    }
};

// ============================================
// CHECKOUT
// ============================================

const Checkout = {
    init() {
        Store.init();
        Checkout.render();
        UI.setupThemeToggle();
        UI.setupLanguage();
        UI.setupMobileMenu();
    },

    render() {
        const formContainer = document.querySelector('#checkoutFormContainer');
        const summary = document.querySelector('#checkoutSummary');
        if (!formContainer || !summary) return;

        if (!Store.state.cart.length) {
            formContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>${UI.t('emptyCart')}</h3>
                    <p>${UI.t('emptyCartDesc')}</p>
                    <a href="index.html" class="btn" style="margin-top:1rem;"><i class="fas fa-shopping-bag"></i> Start Shopping</a>
                </div>
            `;
            summary.innerHTML = '';
            return;
        }

        formContainer.innerHTML = `
            <form class="checkout-form" id="checkoutForm">
                <h2 style="margin-bottom:1.5rem;">Shipping Information</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">First Name</label>
                        <input class="form-input" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Last Name</label>
                        <input class="form-input" name="lastName" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input class="form-input" name="email" type="email" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Phone</label>
                    <input class="form-input" name="phone" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Address</label>
                    <input class="form-input" name="address" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">City</label>
                        <input class="form-input" name="city" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Zip Code</label>
                        <input class="form-input" name="zip" required>
                    </div>
                </div>
                <h2 style="margin:2rem 0 1.5rem;">Payment Method</h2>
                <div class="form-group">
                    <select class="form-select" name="payment">
                        <option value="cod">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="bkash">bKash</option>
                        <option value="nagad">Nagad</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-lg" style="width:100%;margin-top:1rem;">
                    <i class="fas fa-lock"></i> Place Order
                </button>
            </form>
        `;

        summary.innerHTML = `
            <h3 style="margin-bottom:1.5rem;">Order Summary</h3>
            ${Store.state.cart.map(item => `
                <div class="summary-row">
                    <span>${item.name} × ${item.quantity}</span>
                    <span>${UI.formatPrice(item.price * item.quantity)}</span>
                </div>
            `).join('')}
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${UI.formatPrice(Store.cartTotal())}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${Store.cartTotal() >= (Store.state.settings.freeShippingThreshold || 100) ? 'Free' : UI.formatPrice(10)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span class="total-value">${UI.formatPrice(Store.cartTotal() + (Store.cartTotal() >= (Store.state.settings.freeShippingThreshold || 100) ? 0 : 10))}</span>
            </div>
        `;

        document.querySelector('#checkoutForm').onsubmit = e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            const order = {
                id: 'ORD-' + Date.now(),
                ...data,
                items: Store.state.cart,
                total: Store.cartTotal() + (Store.cartTotal() >= (Store.state.settings.freeShippingThreshold || 100) ? 0 : 10),
                date: new Date().toISOString(),
                status: 'pending'
            };
            const orders = Storage.get('orders', []);
            orders.push(order);
            Storage.set('orders', orders);
            Store.clearCart();
            UI.updateCartBadge();
            UI.showNotification('Order placed successfully!', 'success', 'Thank you!');
            setTimeout(() => window.location.href = 'index.html', 1500);
        };
    }
};

// ============================================
// BOOTSTRAP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('admin')) {
        Admin.init();
    } else if (path.includes('product.html')) {
        ProductDetail.init();
    } else if (path.includes('checkout.html')) {
        Checkout.init();
    } else {
        UI.initHomepage();
    }
});
