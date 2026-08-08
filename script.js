/* ============================================
   IQRA ONLINE MART - PROFESSIONAL APP
   CMS + Storefront + Admin Panel
   ============================================ */

// ============================================
// CMS / DATA LAYER (localStorage-based)
// ============================================

const DEFAULT_PRODUCTS = [
    { id: 1, name: 'Wireless Bluetooth Headphones', nameBn: '�য়্যারলেস ব্লুটুথ হেডফোন', price: 2499, oldPrice: 3499, category: 'Electronics', rating: 4.5, reviews: 128, badge: 'hot', icon: 'fa-headphones', description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life.', descriptionBn: 'উচ্চমানের ওয়্যারলেস হেডফোন, অ্যাক্টিভ নয়েজ ক্যান্সেলেশন এবং ৩০ ঘন্টা ব্যাটারি লাইফ।', stock: 45, featured: true, status: 'active', createdAt: '2026-01-15' },
    { id: 2, name: 'Smart Watch Series 5', nameBn: 'স্�ার্ট ওয়াচ সিরিজ ৫', price: 4999, oldPrice: 6999, category: 'Electronics', rating: 4.7, reviews: 89, badge: 'new', icon: 'fa-watch', description: 'Advanced smartwatch with health tracking, GPS, and water resistance.', descriptionBn: 'উন্নত স্মার্টওয়াচ, হেলথ ট্র্যাকিং, জিপিএস এবং ওয়াটার রেজিস্ট্যান্ট।', stock: 32, featured: true, status: 'active', createdAt: '2026-02-01' },
    { id: 3, name: 'Designer Cotton T-Shirt', nameBn: 'ডিজাইনার কটন টি-শার্ট', price: 599, oldPrice: null, category: 'Fashion', rating: 4.3, reviews: 234, badge: null, icon: 'fa-tshirt', description: 'Premium quality cotton t-shirt with modern design and comfortable fit.', descriptionBn: 'উচ্চমানের কটন �ি-শার্ট, আধুনিক ডিজাইন এবং আরামদায়ক।', stock: 120, featured: true, status: 'active', createdAt: '2026-02-10' },
    { id: 4, name: 'Leather Handbag Collection', nameBn: 'লেদার হ্যান্ডব্যাগ কালেকশন', price: 1899, oldPrice: 2999, category: 'Fashion', rating: 4.6, reviews: 156, badge: 'sale', icon: 'fa-handbag', description: 'Elegant leather handbags in various colors and styles.', descriptionBn: 'বিভিন্ন রঙ ও স্টাইলের মার্জিত চাম�়ার হাতব্যাগ।', stock: 67, featured: true, status: 'active', createdAt: '2026-01-20' },
    { id: 5, name: 'Modern Coffee Table', nameBn: 'মডার্ন ক�ি টেবিল', price: 3999, oldPrice: null, category: 'Home & Living', rating: 4.4, reviews: 45, badge: null, icon: 'fa-table', description: 'Contemporary design coffee table with tempered glass and wooden legs.', descriptionBn: 'টেম্পার্ড গ্লাস ও কাঠের পায়ার সাথে সমকালীন ডিজাইনের কফি টেবিল।', stock: 18, featured: true, status: 'active', createdAt: '2026-02-15' },
    { id: 6, name: 'Organic Bedding Set', nameBn: 'অর্গানিক বেডিং সেট', price: 2299, oldPrice: 3199, category: 'Home & Living', rating: 4.2, reviews: 78, badge: 'sale', icon: 'fa-bed', description: 'Luxury organic cotton bedding set for ultimate comfort.', descriptionBn: 'সর্বোচ্চ আরামের জন্য বিলাসবহুল অর্গানিক কটন বেডিং সেট।', stock: 54, featured: false, status: 'active', createdAt: '2026-01-25' },
    { id: 7, name: 'Python Programming Guide', nameBn: 'পাইথন প্রোগ্রামিং গাইড', price: 899, oldPrice: null, category: 'Books & Education', rating: 4.8, reviews: 312, badge: 'hot', icon: 'fa-book', description: 'Complete guide to Python programming from beginner to advanced levels.', descriptionBn: 'প্রাথমিক থেকে �ন্নত স্তর পর্যন্ত পাইথন প্রোগ্রামিংয়ের সম্পূর্ণ গাইড।', stock: 200, featured: true, status: 'active', createdAt: '2026-02-05' },
    { id: 8, name: 'Yoga Mat Premium', nameBn: 'যোগ ম্যাট প্রিমিয়াম', price: 799, oldPrice: 1199, category: 'Sports & Fitness', rating: 4.5, reviews: 167, badge: 'sale', icon: 'fa-person-praying', description: 'Non-slip yoga mat with alignment guides and carrying strap.', descriptionBn: 'নন-স্�িপ যোগ ম্যাট, অ্যালাইনমেন্� গাইড এবং ক্যারি স্ট্র্যাপ সহ।', stock: 89, featured: false, status: 'active', createdAt: '2026-02-12' },
    { id: 9, name: 'Premium Basmati Rice 5kg', nameBn: 'প্রিমিয়াম বাসমতি চাল ৫ কেজি', price: 650, oldPrice: 750, category: 'Groceries', rating: 4.7, reviews: 89, badge: 'hot', icon: 'fa-shopping-basket', description: 'Premium quality aged basmati rice, perfect for biryani and pulao.', descriptionBn: 'প্রিমিয়াম মানের পুরনো বাসমতি চাল, বিরিয়ানি ও পোলাওয়ের জন্য নিখুঁত।', stock: 200, featured: true, status: 'active', createdAt: '2026-03-10' },
    { id: 10, name: 'Organic Honey 500g', nameBn: 'অর্গানিক মধু ৫০০ গ্রাম', price: 450, oldPrice: null, category: 'Groceries', rating: 4.8, reviews: 145, badge: null, icon: 'fa-jar', description: 'Pure organic honey from Sundarbans. No added sugar.', descriptionBn: 'সুন্দরবনের খাঁটি অর্গানিক মধু। কোনো চিনি যোগ করা হয়নি।', stock: 150, featured: true, status: 'active', createdAt: '2026-03-12' },
    { id: 11, name: 'Vitamin C Serum', nameBn: 'ভিটামিন সি সিরাম', price: 599, oldPrice: 899, category: 'Beauty & Care', rating: 4.6, reviews: 234, badge: 'sale', icon: 'fa-spa', description: 'Brightening vitamin C serum for radiant and youthful skin.', descriptionBn: 'উজ্জ্বল ত্বকের জন্য ভিটামিন সি ব্রাইটেনিং সিরাম।', stock: 78, featured: true, status: 'active', createdAt: '2026-03-15' },
    { id: 12, name: 'Multivitamin Supplement', nameBn: 'মাল্টিভিটামিন সা�্লিমেন্ট', price: 350, oldPrice: 450, category: 'Pharmacy & Health', rating: 4.5, reviews: 178, badge: null, icon: 'fa-heartbeat', description: 'Daily multivitamin supplement with essential vitamins and minerals.', descriptionBn: 'প্রয়োজনীয় ভিটামিন ও মিনারেল সহ দৈনিক মাল্টিভিটামিন সা�্লিমেন্ট।', stock: 250, featured: false, status: 'active', createdAt: '2026-03-08' },
    { id: 13, name: 'Educational Toy Set', nameBn: 'শিক্ষামূলক খেলনা সেট', price: 1299, oldPrice: null, category: 'Kids & Baby', rating: 4.7, reviews: 92, badge: 'new', icon: 'fa-baby', description: 'Educational toy set for kids aged 3-8. Safe and non-toxic materials.', descriptionBn: '৩-৮ বছর বয়সী শিশুদের জন্য শিক্ষামূলক খেলনা সেট। নিরাপদ ও নন-টক্সিক।', stock: 60, featured: true, status: 'active', createdAt: '2026-03-18' },
    { id: 14, name: 'Mechanical Gaming Keyboard', nameBn: 'মেকানিক্যাল গেমিং কীবোর্ড', price: 3299, oldPrice: 4499, category: 'Electronics', rating: 4.8, reviews: 245, badge: 'new', icon: 'fa-keyboard', description: 'RGB mechanical gaming keyboard with hot-swappable switches.', descriptionBn: 'RGB মেকানিক্যাল গেমিং কীবোর্ড, হট-সোয়াপেবল সুইচ সহ।', stock: 41, featured: true, status: 'active', createdAt: '2026-03-01' },
    { id: 15, name: 'Running Shoes Pro', nameBn: 'রানিং শু প্রো', price: 2499, oldPrice: null, category: 'Sports & Fitness', rating: 4.6, reviews: 189, badge: 'hot', icon: 'fa-shoe-prints', description: 'Lightweight running shoes with responsive cushioning.', descriptionBn: 'হালকা ওজনের রানিং শু, প্রতিক্রিয়াশীল কুশনিং সহ।', stock: 95, featured: true, status: 'active', createdAt: '2026-02-20' },
    { id: 16, name: 'Premium Dog Food', nameBn: 'প্রিমিয়াম কুকুরের খাবার', price: 1199, oldPrice: null, category: 'Pet Supplies', rating: 4.6, reviews: 92, badge: null, icon: 'fa-dog', description: 'Nutritious dog food for all breeds and life stages.', descriptionBn: 'সব জাতের কুকুরের জন্য পুষ্টিকর খাবার।', stock: 76, featured: false, status: 'active', createdAt: '2026-01-30' }
];

const DEFAULT_CATEGORIES = [
    { id: 'electronics', name: 'Electronics', nameBn: 'ইলেকট্রনিক্স', icon: 'fa-laptop', description: 'Latest gadgets and tech accessories', descriptionBn: 'সর্বশেষ গ্যাজেট ও প্রযুক্তি পণ্য' },
    { id: 'fashion', name: 'Fashion', nameBn: 'ফ্যাশন', icon: 'fa-tshirt', description: 'Trendy clothing and accessories', descriptionBn: 'আধুনিক পোশাক ও এক্সেসরিজ' },
    { id: 'home', name: 'Home & Living', nameBn: 'ঘর � বসবাস', icon: 'fa-home', description: 'Furniture, decor & essentials', descriptionBn: 'আসবাবপত্র, সাজসজ্জা ও প্রয়োজনীয় জিনিস' },
    { id: 'groceries', name: 'Groceries', nameBn: 'মুদি�ানা', icon: 'fa-shopping-basket', description: 'Fresh food and daily essentials', descriptionBn: 'তাজা খাবার ও দৈনন্দিন প্রয়োজনীয় জিনিস' },
    { id: 'beauty', name: 'Beauty & Care', nameBn: 'সৌন্দর্য ও যত্ন', icon: 'fa-spa', description: 'Cosmetics, skincare and wellness', descriptionBn: 'প্রসাধনী, ত্বকের �ত্ন ও সুস্থতা' },
    { id: 'books', name: 'Books & Education', nameBn: 'বই ও শিক্�া', icon: 'fa-book', description: 'Knowledge and learning resources', descriptionBn: 'জ্�ান ও শিক্ষা সম্পদ' },
    { id: 'sports', name: 'Sports & Fitness', nameBn: 'খেলা ও ফিটনেস', icon: 'fa-dumbbell', description: 'Equipment for active lifestyles', descriptionBn: 'সক্রিয় জীবনযাপনের সর�্জাম' },
    { id: 'kids', name: 'Kids & Baby', nameBn: 'শিশু ও শিশু', icon: 'fa-baby', description: 'Toys, clothing and baby essentials', descriptionBn: 'খেলনা, পোশাক ও শিশু প্রয়োজনীয় জিনিস' },
    { id: 'pharmacy', name: 'Pharmacy & Health', nameBn: 'ফার্মেসি ও স্বাস্থ্য', icon: 'fa-heartbeat', description: 'Medicines and health products', descriptionBn: 'ওষুধ ও স্বাস্থ্য পণ্য' },
    { id: 'pets', name: 'Pet Supplies', nameBn: 'পোষা প্রাণী', icon: 'fa-paw', description: 'Everything for your furry friends', descriptionBn: 'আপনার পোষা প্রাণীদের জন্য সবকিছু' }
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
    motto: 'Quality Over Quantity',
    tagline: 'Your premium online shopping destination',
    email: 'iqrabintesobuj@gmail.com',
    phone: '01617040846',
    address: 'Savar, Dhaka, Bangladesh',
    currency: '৳',
    currencyCode: 'BDT',
    freeShippingThreshold: 1000,
    repoUrl: 'https://github.com/miahsobuj/iqraonlinemart',
    primaryLanguage: 'en',
    supportedLanguages: ['en', 'bn'],
    enableSound: true,
    enableTrail: true,
    paymentGateways: {
        cod: { enabled: true, label: 'Cash on Delivery', labelBn: 'ক্যাশ অন ডেলিভারি', icon: 'fa-money-bill-wave' },
        bkash: { enabled: true, label: 'bKash', number: '01617040846', type: 'personal', icon: 'fa-mobile-alt', color: '#E2136E', labelBn: 'বিকাশ' },
        nagad: { enabled: true, label: 'Nagad', number: '01617040846', type: 'personal', icon: 'fa-mobile-alt', color: '#F6921E', labelBn: 'নগদ' },
        rocket: { enabled: true, label: 'Rocket', number: '01617040846', type: 'personal', icon: 'fa-mobile-alt', color: '#8C3494', labelBn: 'রকেট' },
        card: { enabled: false, label: 'Credit/Debit Card', provider: 'stripe', icon: 'fa-credit-card', labelBn: 'কার্ড' }
    },
    adminCredentials: { username: 'admin', password: 'admin123' }
};

const TRANSLATIONS = {
    en: {
        home: 'Home', products: 'Products', categories: 'Categories', about: 'About',
        contact: 'Contact', cart: 'Cart', search: 'Search', blog: 'Blog', admin: 'Admin',
        welcome: 'Welcome to the Future of',
        welcomeHighlight: 'Online Shopping',
        subtitle: 'Quality products, fast delivery, secure checkout — Quality Over Quantity.',
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
        feature1Title: 'Free Shipping', feature1Desc: 'On orders over ৳1000',
        feature2Title: 'Secure Payment', feature2Desc: 'bKash, Nagad & COD supported',
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
        copyright: '© 2026 Iqra Online Mart. Quality Over Quantity. All rights reserved.',
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
        sortPriceHigh: 'Price: High to Low', sortRating: 'Top Rated', sortNewest: 'Newest',
        motto: 'Quality Over Quantity',
        productCount: 'products',
        shopCollection: 'Shop the Collection',
        learnMore: 'Learn More',
        submitOrder: 'Place Order',
        shipping: 'Shipping', subtotal: 'Subtotal', free: 'FREE',
        sendMessage: 'Send Message', contactFormTitle: 'Get in Touch',
        orderPlaced: 'Order placed successfully!', orderThanks: 'Thank you for shopping with us.',
        paymentMethod: 'Payment Method', shippingInfo: 'Shipping Information',
        firstName: 'First Name', lastName: 'Last Name', email: 'Email',
        phone: 'Phone', address: 'Address', city: 'City', zipCode: 'Zip Code',
        message: 'Message', subject: 'Subject',
        recentOrders: 'Recent Orders', topProducts: 'Top Products',
        viewSite: 'View Site', logout: 'Logout',
        dashboard: 'Dashboard', orders: 'Orders', subscribers: 'Subscribers',
        messages: 'Messages', settings: 'Settings', categories_admin: 'Categories',
        posts: 'Posts', testimonials: 'Testimonials',
        addProduct: 'Add Product', addCategory: 'Add Category',
        newPost: 'New Post', addTestimonial: 'Add Testimonial',
        welcomeBack: 'Welcome back!', signIn: 'Sign In',
        signInTitle: 'Welcome back!',
        signInPrompt: 'Sign in to view your orders, profile, and saved addresses.',
        register: 'Register',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        loginFailed: 'Login Failed',
        registerFailed: 'Registration Failed',
        registered: 'Welcome!',
        loggedOut: 'Logged out',
        profileUpdated: 'Profile updated',
        addressSaved: 'Address saved',
        passwordUpdated: 'Password updated',
        updateFailed: 'Update failed',
        myAccount: 'My Account',
        profile: 'Profile',
        addresses: 'Addresses',
        security: 'Security',
        changePassword: 'Change Password',
        defaultAddress: 'Default Address',
        saveAddress: 'Save Address',
        updatePassword: 'Update Password',
        saveChanges: 'Save Changes',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        noOrdersYet: 'You have no orders yet.',
        startShopping: 'Start Shopping',
        qty: 'Qty',
        source: 'Source',
        shippingNote: 'Free shipping over ৳1000',
        signedInAs: 'Signed in as',
        sendToNumber: 'Send payment to',
        transactionId: 'Transaction ID',
        trxIdPlaceholder: 'e.g., 8N7K6Q5R4T',
        cardNumber: 'Card Number',
        expiry: 'Expiry',
        cvv: 'CVV',
        orderSummary: 'Order Summary',
        orContinueGuest: 'or continue as guest',

        demoCredentials: 'Demo Credentials', backToSite: 'Back to site'
    },
    bn: {
        home: 'হোম', products: 'পণ্য', categories: 'বিভাগ', about: 'আমাদের সম্পর্কে',
        contact: 'যোগাযোগ', cart: 'কার্ট', search: 'অনুসন্ধান', blog: 'ব্লগ', admin: 'অ্যাডমিন',
        welcome: 'ভবিষ্যতে স্বাগতম', welcomeHighlight: 'অনলাইন শপিং',
        subtitle: 'মানসম্পন্ন পণ্য, দ্রুত ডেলিভারি, নিরাপদ পেমেন্ট — গুণগত মান আমাদের প্রথম পছন্দ।',
        shopNow: 'এখনই কিনুন', explore: 'বিভাগ দেখুন',
        heroBadge: 'নতুন সংগ্রহ ২০২৬',
        stat1Value: '৫০ হা.+', stat1Label: 'খুশি গ্রাহক',
        stat2Value: '১০ হা.+', stat2Label: 'পণ্য',
        stat3Value: '৯৯%', stat3Label: 'সন্তুষ্টি',
        featuredProducts: 'বিশেষ', featuredGradient: 'পণ্য',
        featuredSubtitle: 'আমাদের সংগ্রহ থেকে নির্বাচিত প্রিয় পণ্য',
        categoriesTag: 'ব্রাউজ',
        categoriesTitle: 'ক্যাটাগরি', categoriesGradient: 'অনুযায়ী কিনুন',
        categoriesSubtitle: 'আমাদের বিভিন্ন পণ্য বিভাগ থেকে আপনার প্রয়োজনীয় জিনিস খুঁজুন',
        whyChooseUs: 'কেন', whyGradient: 'আমাদের বেছে নিবেন',
        whySubtitle: 'আমাদের প্রিমিয়াম সেবার সাথে সেরা অনলাইন শপিং অভিজ্ঞতা',
        feature1Title: 'ফ্রি শিপিং', feature1Desc: '৳১০০০ এর উপরে',
        feature2Title: 'নিরাপদ পেমেন্ট', feature2Desc: 'বিকাশ, নগদ ও ক্যাশ অন ডেলিভারি',
        feature3Title: '২৪/৭ সাপোর্ট', feature3Desc: 'ডেডিকেটেড গ্রাহক সেবা',
        feature4Title: 'সহজ রিটার্ন', feature4Desc: '৩০ দিনের রিটার্ন নীতি',
        testimonialsTag: 'প্রশংসাপত্র',
        testimonialsTitle: 'আমাদের', testimonialsGradient: 'গ্রাহকরা যা বলেন',
        testimonialsSubtitle: 'আমাদের মূল্যবান কমিউনিটি থেকে প্রকৃত মতামত',
        blogTag: 'সর্বশেষ সংবাদ',
        blogTitle: 'আমাদের', blogGradient: 'ব্লগ থেকে',
        blogSubtitle: 'শপিং টিপস, ট্রেন্ড এবং বিশেষ গল্প সম্পর্কে আপডেট থাকুন',
        newsletterTitle: 'আমাদের', newsletterGradient: 'নিউজলেটার সাবস্ক্রাইব করুন',
        newsletterSubtitle: 'এক্সক্লুসিভ ডিল, নতুন পণ্য এবং ইনসাইডার আপডেট সরাসরি আপনার ইনবক্সে পান।',
        newsletterPlaceholder: 'আপনার ইমেইল ঠিকানা লিখুন',
        newsletterBtn: 'সাবস্ক্রাইব',
        readMore: 'আরও পড়ুন',
        viewAll: 'সব দেখুন',
        addToCart: 'কার্টে যোগ করুন',
        viewDetails: 'বিস্তারিত দেখুন',
        total: 'মোট', checkout: 'চেকআউট',
        emptyCart: 'আপনার কার্ট খালি',
        emptyCartDesc: 'শপিং শুরু করুন এবং আপনার কার্টে আইটেম যোগ করুন',
        quickLinks: 'দ্রুত লিঙ্ক', contactUs: 'যোগাযোগ করুন',
        followUs: 'আমাদের অনুসরণ করুন', newsletter: 'নিউজলেটার',
        copyright: '© ২০২৬ ইকরা অনলাইন মার্ট। গুণগত মান আমাদের প্রথম পছন্দ। সর্বস্বত্ব সংরক্ষিত।',
        privacy: 'গোপনীয়তা নীতি', terms: 'সেবার শর্তাবলী',
        searchPlaceholder: 'পণ্য, বিভাগ, ব্র্যান্ড খুঁজুন...',
        noResults: 'কোন পণ্য পাওয়া যায়নি',
        noResultsDesc: 'অন্য কিওয়ার্ড দিয়ে চেষ্টা করুন',
        addedToCart: 'কার্টে যোগ হয়েছে!',
        outOfStock: 'স্টকে নেই',
        inStock: 'স্টকে আছে',
        reviews: 'পর্যালোচনা',
        allCategories: 'সব',
        sortDefault: 'ডিফল্ট', sortPriceLow: 'মূল্য: কম থেকে বেশি',
        sortPriceHigh: 'মূল্য: বেশি থেকে কম', sortRating: 'সেরা রেটিং', sortNewest: 'নতুন',
        motto: 'গুণগত মান আমাদের প্রথম পছন্দ',
        productCount: 'পণ্য',
        shopCollection: 'সংগ্রহ দেখুন',
        learnMore: 'আরও জানুন',
        submitOrder: 'অর্ডার দিন',
        shipping: 'ডেলিভারি', subtotal: 'সাবটোটাল', free: 'ফ্রি',
        sendMessage: 'মেসেজ পাঠান', contactFormTitle: 'যোগাযোগ করুন',
        orderPlaced: 'অর্ডার সফলভাবে দেওয়া হয়েছে!', orderThanks: 'আমাদের সাথে কেনাকাটা করার জন্য ধন্যবাদ।',
        paymentMethod: 'পেমেন্ট পদ্ধতি', shippingInfo: 'ডেলিভারি তথ্য',
        firstName: 'প্রথম নাম', lastName: 'শেষ নাম', email: 'ইমেইল',
        phone: 'ফোন', address: 'ঠিকানা', city: 'শহর', zipCode: 'জিপ কোড',
        message: 'বার্তা', subject: 'বিষয়',
        recentOrders: 'সাম্প্রতিক অর্ডার', topProducts: 'শীর্ষ পণ্য',
        viewSite: 'সাইট দেখুন', logout: 'লগআউট',
        dashboard: 'ড্যাশবোর্ড', orders: 'অর্ডার', subscribers: 'সাবস্ক্রাইবার',
        messages: 'মেসেজ', settings: 'সেটিংস', categories_admin: 'বিভাগ',
        posts: 'পোস্ট', testimonials: 'প্রশংসাপত্র',
        addProduct: 'পণ্য যোগ', addCategory: 'বিভাগ যোগ',
        newPost: 'নতুন পোস্ট', addTestimonial: 'প্রশংসাপত্র যোগ',
        welcomeBack: 'স্বাগতম!', signIn: 'সাইন ইন',
        signInTitle: 'স্বাগতম!',
        signInPrompt: 'আপনার অর্ডার, প্রোফাইল ও ঠিকানা দেখতে সাইন ইন করুন।',
        register: 'রেজিস্টার',
        password: 'পাসওয়ার্ড',
        confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন',
        loginFailed: 'লগইন ব্যর্থ',
        registerFailed: 'রেজিস্ট্রেশন ব্যর্থ',
        registered: 'স্বাগতম!',
        loggedOut: 'লগআউট হয়েছে',
        profileUpdated: 'প্রোফাইল আপডেট হয়েছে',
        addressSaved: 'ঠিকানা সংরক্ষিত',
        passwordUpdated: 'পাসওয়ার্ড আপডেট হয়েছে',
        updateFailed: 'আপডেট ব্যর্থ',
        myAccount: 'আমার অ্যাকাউন্ট',
        profile: 'প্রোফাইল',
        addresses: 'ঠিকানা',
        security: 'নিরাপত্তা',
        changePassword: 'পাসওয়ার্ড পরিবর্তন',
        defaultAddress: 'ডিফল্ট ঠিকানা',
        saveAddress: 'ঠিকানা সংরক্ষণ',
        updatePassword: 'পাসওয়ার্ড আপডেট',
        saveChanges: 'পরিবর্তন সংরক্ষণ',
        currentPassword: 'বর্তমান পাসওয়ার্ড',
        newPassword: 'নতুন পাসওয়ার্ড',
        noOrdersYet: 'আপনার কোনো অর্ডার নেই।',
        startShopping: 'শপিং শুরু করুন',
        qty: 'সংখ্যা',
        source: 'সোর্স',
        shippingNote: '৳১০০০ এর উপরে ফ্রি শিপিং',
        signedInAs: 'সাইন ইন করা আছে',
        sendToNumber: 'পেমেন্ট পাঠান এই নম্বরে',
        transactionId: 'ট্রানজেকশন আইডি',
        trxIdPlaceholder: 'যেমন: 8N7K6Q5R4T',
        cardNumber: 'কার্ড নম্বর',
        expiry: 'মেয়াদ',
        cvv: 'সিভিভি',
        orderSummary: 'অর্ডার সারাংশ',
        orContinueGuest: 'অথবা গেস্ট হিসেবে চালিয়ে যান',

        demoCredentials: 'ডেমো ক্রেডেনশিয়াল', backToSite: 'সাইটে ফিরে যান'
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
// AUTH (Customer Authentication)
// ============================================
const Auth = {
    // Password "hashing" — simple SHA-256 via Web Crypto; localStorage demo only
    async hashPassword(pw) {
        const buf = new TextEncoder().encode(pw);
        const hash = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    },

    getUsers() {
        return Storage.get('users', []);
    },
    saveUsers(users) {
        Storage.set('users', users);
    },

    getSession() {
        return Storage.get('session', null);
    },
    setSession(userId) {
        Storage.set('session', { userId, loginAt: new Date().toISOString() });
    },
    clearSession() {
        localStorage.removeItem('iqra_session');
    },

    currentUser() {
        const sess = this.getSession();
        if (!sess) return null;
        const users = this.getUsers();
        return users.find(u => u.id === sess.userId) || null;
    },

    async register(data) {
        const users = this.getUsers();
        if (users.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
            return { ok: false, error: 'Email already registered' };
        }
        const user = {
            id: 'u_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            email: data.email.trim().toLowerCase(),
            phone: (data.phone || '').trim(),
            passwordHash: await this.hashPassword(data.password),
            address: { address: '', city: '', zip: '' },
            createdAt: new Date().toISOString()
        };
        users.push(user);
        this.saveUsers(users);
        this.setSession(user.id);
        return { ok: true, user };
    },

    async login(email, password) {
        const users = this.getUsers();
        const ph = await this.hashPassword(password);
        const user = users.find(u => u.email === email.trim().toLowerCase() && u.passwordHash === ph);
        if (!user) return { ok: false, error: 'Invalid email or password' };
        this.setSession(user.id);
        return { ok: true, user };
    },

    logout() {
        this.clearSession();
    },

    async updateProfile(data) {
        const user = this.currentUser();
        if (!user) return false;
        const users = this.getUsers();
        const idx = users.findIndex(u => u.id === user.id);
        if (idx < 0) return false;
        users[idx].firstName = data.firstName.trim();
        users[idx].lastName = data.lastName.trim();
        users[idx].email = data.email.trim().toLowerCase();
        users[idx].phone = (data.phone || '').trim();
        this.saveUsers(users);
        return true;
    },

    async updatePassword(currentPassword, newPassword) {
        const user = this.currentUser();
        if (!user) return { ok: false, error: 'Not logged in' };
        const ph = await this.hashPassword(currentPassword);
        if (ph !== user.passwordHash) return { ok: false, error: 'Current password is incorrect' };
        const users = this.getUsers();
        const idx = users.findIndex(u => u.id === user.id);
        if (idx < 0) return { ok: false, error: 'User not found' };
        users[idx].passwordHash = await this.hashPassword(newPassword);
        this.saveUsers(users);
        return { ok: true };
    },

    updateAddress(address) {
        const user = this.currentUser();
        if (!user) return false;
        const users = this.getUsers();
        const idx = users.findIndex(u => u.id === user.id);
        if (idx < 0) return false;
        users[idx].address = address;
        this.saveUsers(users);
        return true;
    },

    getUserOrders() {
        const user = this.currentUser();
        if (!user) return [];
        const allOrders = Storage.get('orders', []);
        return allOrders.filter(o => o.userId === user.id).sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    openAuthModal(tab) {
        const modal = document.querySelector('#authModal');
        if (!modal) return;
        UI.switchAuthTab(tab || 'login');
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    },

    closeAuthModal() {
        const modal = document.querySelector('#authModal');
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    },

    refreshAccountIcon() {
        const btn = document.querySelector('#accountBtn');
        if (!btn) return;
        const user = this.currentUser();
        if (user) {
            btn.innerHTML = `<i class="fas fa-user-check"></i>`;
            btn.title = `${user.firstName} ${user.lastName} — My Account`;
            btn.onclick = () => { window.location.href = 'account.html'; };
        } else {
            btn.innerHTML = `<i class="fas fa-user"></i>`;
            btn.title = 'Sign In / Register';
            btn.onclick = () => Auth.openAuthModal('login');
        }
    },

    renderAccountPage() {
        const user = this.currentUser();
        const loggedOut = document.querySelector('#accountLoggedOut');
        const loggedIn = document.querySelector('#accountLoggedIn');
        if (!loggedOut || !loggedIn) return;
        if (!user) {
            loggedOut.style.display = '';
            loggedIn.style.display = 'none';
            return;
        }
        loggedOut.style.display = 'none';
        loggedIn.style.display = '';
        const greeting = document.querySelector('#userGreeting');
        if (greeting) greeting.textContent = `${user.firstName} ${user.lastName}`;
        // Populate profile form
        const profileForm = document.querySelector('#profileForm');
        if (profileForm) {
            profileForm.firstName.value = user.firstName || '';
            profileForm.lastName.value = user.lastName || '';
            profileForm.email.value = user.email || '';
            profileForm.phone.value = user.phone || '';
        }
        // Populate address form
        const addressForm = document.querySelector('#addressForm');
        if (addressForm && user.address) {
            addressForm.address.value = user.address.address || '';
            addressForm.city.value = user.address.city || '';
            addressForm.zip.value = user.address.zip || '';
        }
        // Render orders
        Auth.renderUserOrders();
    },

    renderUserOrders() {
        const wrap = document.querySelector('#userOrders');
        if (!wrap) return;
        const orders = this.getUserOrders();
        if (!orders.length) {
            wrap.innerHTML = `<div style="text-align:center;padding:3rem 1rem;color:var(--text-tertiary);">
                <i class="fas fa-box-open" style="font-size:3rem;margin-bottom:1rem;display:block;opacity:0.5"></i>
                <p>${UI.t('noOrdersYet')}</p>
                <a href="index.html" class="btn" style="margin-top:1rem;"><i class="fas fa-shopping-bag"></i> ${UI.t('startShopping')}</a>
            </div>`;
            return;
        }
        const statusColors = { pending: 'warning', processing: 'accent', shipped: 'primary', delivered: 'success', cancelled: 'danger' };
        wrap.innerHTML = orders.map(o => `
            <div class="order-card">
                <div class="order-card-head">
                    <div>
                        <strong>#${o.id}</strong>
                        <span style="margin-left:0.75rem;color:var(--text-tertiary);font-size:0.9rem;">${new Date(o.date).toLocaleDateString()}</span>
                    </div>
                    <span class="status-pill status-${statusColors[o.status] || 'primary'}">${o.status}</span>
                </div>
                <div class="order-card-body">
                    ${o.items.map(i => `
                        <div class="order-item-row">
                            <i class="fas ${i.icon || 'fa-box'}" style="font-size:1.3rem;color:var(--accent-light)"></i>
                            <div style="flex:1">
                                <div>${i.name}</div>
                                <div style="color:var(--text-tertiary);font-size:0.85rem;">${UI.t('qty')}: ${i.qty}</div>
                            </div>
                            <div>${Store.state.settings.currency || '৳'}${i.price * i.qty}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-card-foot">
                    <span>${UI.t('total')}</span>
                    <strong>${Store.state.settings.currency || '৳'}${o.total}</strong>
                </div>
            </div>
        `).join('');
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
        // Dispatch event for SoundSystem to pick up
        try { document.dispatchEvent(new CustomEvent(`notify:${type}`)); } catch {}
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
                    try { document.dispatchEvent(new CustomEvent('cart:add')); } catch {}
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
                    try { document.dispatchEvent(new CustomEvent('cart:add')); } catch {}
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
        document.querySelectorAll('[data-cms="motto"]').forEach(el => el.textContent = s.motto || '');
        document.querySelectorAll('[data-cms="tagline"]').forEach(el => el.textContent = s.tagline || '');
        document.querySelectorAll('[data-cms="phone"]').forEach(el => el.textContent = s.phone || '');
        document.querySelectorAll('[data-cms="email"]').forEach(el => el.textContent = s.email || '');
        document.querySelectorAll('[data-cms="address"]').forEach(el => el.textContent = s.address || '');
        document.querySelectorAll('[data-cms="currency"]').forEach(el => el.textContent = s.currency || '৳');
        document.querySelectorAll('[data-cms="repo-link"]').forEach(el => {
            if (s.repoUrl) { el.href = s.repoUrl; el.style.display = ''; }
        });
        if (s.copyright) {
            document.querySelectorAll('[data-cms="copyright"]').forEach(el => el.textContent = s.copyright);
        }
        if (s.footerTagline) {
            document.querySelectorAll('[data-cms="footer-tagline"]').forEach(el => el.textContent = s.footerTagline);
        }
        // Title tag
        if (s.siteName) {
            const titleSuffix = ' — ' + s.siteName;
            if (!document.title.includes(titleSuffix)) document.title = document.title.split(' — ')[0] + titleSuffix;
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
        UI.setupHeroTypo();
    },

    setupHeroTypo() {
        const el = document.querySelector('#heroTypo');
        if (!el) return;
        const products = Store.state.products || [];
        if (!products.length) {
            el.textContent = 'Iqra Online Mart';
            return;
        }
        const productName = (p) => (Store.state.currentLang === 'bn' && p.nameBn) ? p.nameBn : p.name;
        let lastIdx = -1;
        const tick = () => {
            let idx;
            do { idx = Math.floor(Math.random() * products.length); } while (idx === lastIdx && products.length > 1);
            lastIdx = idx;
            el.textContent = productName(products[idx]);
        };
        tick();
        // Rotate every 4s
        if (UI._heroTypoTimer) clearInterval(UI._heroTypoTimer);
        UI._heroTypoTimer = setInterval(tick, 4000);
        // Re-render on language change (subscribe by listening to body event)
        const observer = new MutationObserver(() => {
            const lang = Store.state.currentLang;
            if (el.dataset.lang !== lang) {
                el.dataset.lang = lang;
                tick();
            }
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        el.dataset.lang = Store.state.currentLang;
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
        // Close mobile sidebar after navigation
        Admin.closeSidebar();
    },

    bindSidebarToggle() {
        const toggle = document.getElementById('adminSidebarToggle');
        const close = document.getElementById('adminSidebarClose');
        const overlay = document.getElementById('adminSidebarOverlay');
        const sidebar = document.querySelector('.admin-sidebar');
        if (!toggle || !sidebar) return;
        toggle.addEventListener('click', () => {
            sidebar.classList.add('is-open');
            overlay?.classList.add('is-open');
        });
        close?.addEventListener('click', () => Admin.closeSidebar());
        overlay?.addEventListener('click', () => Admin.closeSidebar());
    },

    closeSidebar() {
        document.querySelector('.admin-sidebar')?.classList.remove('is-open');
        document.getElementById('adminSidebarOverlay')?.classList.remove('is-open');
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
        form.querySelector('[name=motto]').value = s.motto || '';
        form.querySelector('[name=repoUrl]').value = s.repoUrl || '';
        form.querySelector('[name=email]').value = s.email || '';
        form.querySelector('[name=phone]').value = s.phone || '';
        form.querySelector('[name=address]').value = s.address || '';
        form.querySelector('[name=currency]').value = s.currency || '$';
        form.querySelector('[name=freeShippingThreshold]').value = s.freeShippingThreshold || 100;
        form.querySelector('[name=enableSound]').checked = s.enableSound !== false;
        form.querySelector('[name=enableTrail]').checked = s.enableTrail !== false;
        form.querySelector('[name=adminUsername]').value = (s.adminCredentials && s.adminCredentials.username) || 'admin';
        form.querySelector('[name=facebook]').value = s.facebook || '';
        form.querySelector('[name=twitter]').value = s.twitter || '';
        form.querySelector('[name=instagram]').value = s.instagram || '';
        form.querySelector('[name=linkedin]').value = s.linkedin || '';
        Admin.renderPaymentGatewaysEditor();
    },

    renderPaymentGatewaysEditor() {
        const wrap = document.querySelector('#paymentGatewaysEditor');
        if (!wrap) return;
        const gateways = Store.state.settings.paymentGateways || {};
        const defs = [
            { key: 'cod', label: 'Cash on Delivery', defaultLabelBn: 'ক্যাশ অন ডেলিভারি', hasNumber: false, icon: 'fa-money-bill-wave' },
            { key: 'bkash', label: 'bKash', defaultLabelBn: 'বিকাশ', hasNumber: true, icon: 'fa-mobile-alt', color: '#E2136E' },
            { key: 'nagad', label: 'Nagad', defaultLabelBn: 'নগদ', hasNumber: true, icon: 'fa-mobile-alt', color: '#F6921E' },
            { key: 'rocket', label: 'Rocket', defaultLabelBn: 'রকেট', hasNumber: true, icon: 'fa-mobile-alt', color: '#8C3494' },
            { key: 'card', label: 'Credit/Debit Card', defaultLabelBn: 'কার্ড', hasNumber: false, icon: 'fa-credit-card', color: '#7c3aed' }
        ];
        wrap.innerHTML = defs.map(d => {
            const g = gateways[d.key] || {};
            return `
                <div class="gateway-row" style="background:var(--bg-elevated);padding:1rem;border-radius:var(--radius-md);margin-bottom:0.75rem;border:1px solid var(--border-color);">
                    <div class="form-row" style="align-items:center;margin-bottom:0.5rem;">
                        <label style="display:flex;align-items:center;gap:0.5rem;flex:1;">
                            <input type="checkbox" name="pg_${d.key}_enabled" ${g.enabled ? 'checked' : ''} style="width:auto;">
                            <i class="fas ${d.icon}" style="color:${d.color || 'var(--text-tertiary)'}"></i>
                            <strong>${d.label}</strong>
                        </label>
                        ${g.color ? `<input type="color" name="pg_${d.key}_color" value="${g.color || d.color}" style="width:40px;height:30px;border:none;background:transparent;">` : ''}
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" style="font-size:0.85rem;">Label (EN)</label>
                            <input class="form-input" name="pg_${d.key}_label" value="${g.label || d.label}">
                        </div>
                        <div class="form-group">
                            <label class="form-label" style="font-size:0.85rem;">Label (BN)</label>
                            <input class="form-input" name="pg_${d.key}_labelBn" value="${g.labelBn || d.defaultLabelBn}">
                        </div>
                    </div>
                    ${d.hasNumber ? `
                        <div class="form-group" style="margin-bottom:0;">
                            <label class="form-label" style="font-size:0.85rem;">Merchant Number</label>
                            <input class="form-input" name="pg_${d.key}_number" value="${g.number || ''}" placeholder="01XXXXXXXXX">
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    },

    setupSettingsForm() {
        const form = document.querySelector('#settingsForm');
        if (!form) return;
        form.onsubmit = e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(form));
            // Payment gateways
            const pgKeys = ['cod','bkash','nagad','rocket','card'];
            const paymentGateways = { ...(Store.state.settings.paymentGateways || {}) };
            pgKeys.forEach(k => {
                paymentGateways[k] = {
                    ...(paymentGateways[k] || {}),
                    enabled: data[`pg_${k}_enabled`] === 'on',
                    label: data[`pg_${k}_label`] || paymentGateways[k]?.label,
                    labelBn: data[`pg_${k}_labelBn`] || paymentGateways[k]?.labelBn,
                    number: data[`pg_${k}_number`] || paymentGateways[k]?.number || '',
                    color: data[`pg_${k}_color`] || paymentGateways[k]?.color,
                    icon: paymentGateways[k]?.icon || (k === 'cod' ? 'fa-money-bill-wave' : k === 'card' ? 'fa-credit-card' : 'fa-mobile-alt')
                };
            });
            Store.state.settings = {
                ...Store.state.settings,
                siteName: data.siteName,
                tagline: data.tagline,
                motto: data.motto,
                repoUrl: data.repoUrl,
                email: data.email,
                phone: data.phone,
                address: data.address,
                currency: data.currency,
                freeShippingThreshold: parseFloat(data.freeShippingThreshold),
                enableSound: data.enableSound === 'on',
                enableTrail: data.enableTrail === 'on',
                paymentGateways,
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
        UI.setupCartUI();
    },

    getPaymentOptions() {
        const gateways = Store.state.settings.paymentGateways || {};
        const opts = [];
        if (gateways.cod?.enabled !== false) opts.push({ value: 'cod', label: gateways.cod?.label || 'Cash on Delivery', icon: gateways.cod?.icon || 'fa-money-bill-wave', color: '#10b981' });
        if (gateways.bkash?.enabled) opts.push({ value: 'bkash', label: gateways.bkash.label || 'bKash', icon: gateways.bkash.icon || 'fa-mobile-alt', color: gateways.bkash.color || '#E2136E', number: gateways.bkash.number });
        if (gateways.nagad?.enabled) opts.push({ value: 'nagad', label: gateways.nagad.label || 'Nagad', icon: gateways.nagad.icon || 'fa-mobile-alt', color: gateways.nagad.color || '#F6921E', number: gateways.nagad.number });
        if (gateways.rocket?.enabled) opts.push({ value: 'rocket', label: gateways.rocket.label || 'Rocket', icon: gateways.rocket.icon || 'fa-mobile-alt', color: gateways.rocket.color || '#8C3494', number: gateways.rocket.number });
        if (gateways.card?.enabled) opts.push({ value: 'card', label: gateways.card.label || 'Credit/Debit Card', icon: gateways.card.icon || 'fa-credit-card', color: '#7c3aed' });
        return opts;
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
                    <a href="index.html" class="btn" style="margin-top:1rem;"><i class="fas fa-shopping-bag"></i> ${UI.t('startShopping')}</a>
                </div>
            `;
            summary.innerHTML = '';
            return;
        }

        const user = Auth.currentUser();
        const paymentOptions = Checkout.getPaymentOptions();
        const u = user || {};
        const addr = u.address || {};

        formContainer.innerHTML = `
            ${user ? `<div class="checkout-banner"><i class="fas fa-user-check"></i> ${UI.t('signedInAs')} <strong>${u.firstName} ${u.lastName}</strong></div>` : ''}
            <form class="checkout-form" id="checkoutForm">
                <h2 style="margin-bottom:1.5rem;">${UI.t('shippingInfo')}</h2>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">${UI.t('firstName')}</label>
                        <input class="form-input" name="firstName" required value="${u.firstName || ''}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.t('lastName')}</label>
                        <input class="form-input" name="lastName" required value="${u.lastName || ''}">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">${UI.t('email')}</label>
                    <input class="form-input" name="email" type="email" required value="${u.email || ''}">
                </div>
                <div class="form-group">
                    <label class="form-label">${UI.t('phone')}</label>
                    <input class="form-input" name="phone" required value="${u.phone || ''}">
                </div>
                <div class="form-group">
                    <label class="form-label">${UI.t('address')}</label>
                    <input class="form-input" name="address" required value="${addr.address || ''}">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">${UI.t('city')}</label>
                        <input class="form-input" name="city" required value="${addr.city || ''}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.t('zipCode')}</label>
                        <input class="form-input" name="zip" required value="${addr.zip || ''}">
                    </div>
                </div>
                <h2 style="margin:2rem 0 1.5rem;">${UI.t('paymentMethod')}</h2>
                <div class="payment-options">
                    ${paymentOptions.map((p, i) => `
                        <label class="payment-option ${i === 0 ? 'selected' : ''}" style="--opt-color:${p.color}">
                            <input type="radio" name="payment" value="${p.value}" ${i === 0 ? 'checked' : ''}>
                            <div class="payment-option-icon" style="background:${p.color}22;color:${p.color}"><i class="fas ${p.icon}"></i></div>
                            <div class="payment-option-label">
                                <strong>${p.label}</strong>
                                ${p.number ? `<small>${p.number}</small>` : ''}
                            </div>
                        </label>
                    `).join('')}
                </div>
                <div id="paymentDetails"></div>
                <button type="submit" class="btn btn-lg" style="width:100%;margin-top:1.5rem;">
                    <i class="fas fa-lock"></i> ${UI.t('submitOrder')}
                </button>
                ${!user ? `<p style="text-align:center;margin-top:1rem;color:var(--text-tertiary);font-size:0.9rem;"><a href="account.html" style="color:var(--accent-light)">${UI.t('signIn')}</a> ${UI.t('orContinueGuest')}</p>` : ''}
            </form>
        `;

        // Payment option selection
        const paymentRadios = formContainer.querySelectorAll('input[name="payment"]');
        const updatePaymentDetails = () => {
            const selected = formContainer.querySelector('input[name="payment"]:checked')?.value;
            const opt = paymentOptions.find(p => p.value === selected);
            const details = formContainer.querySelector('#paymentDetails');
            if (opt && opt.value !== 'cod' && opt.value !== 'card') {
                details.innerHTML = `
                    <div class="payment-instructions">
                        <p><i class="fas fa-info-circle"></i> ${UI.t('sendToNumber')}: <strong style="color:${opt.color}">${opt.number || '—'}</strong></p>
                        <div class="form-group">
                            <label class="form-label">${UI.t('transactionId')}</label>
                            <input class="form-input" name="transactionId" placeholder="${UI.t('trxIdPlaceholder')}">
                        </div>
                    </div>
                `;
            } else if (opt && opt.value === 'card') {
                details.innerHTML = `
                    <div class="payment-instructions">
                        <div class="form-group">
                            <label class="form-label">${UI.t('cardNumber')}</label>
                            <input class="form-input" name="cardNumber" placeholder="•••• •••• •••• ••••">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">${UI.t('expiry')}</label>
                                <input class="form-input" name="cardExpiry" placeholder="MM/YY">
                            </div>
                            <div class="form-group">
                                <label class="form-label">${UI.t('cvv')}</label>
                                <input class="form-input" name="cardCvv" placeholder="•••">
                            </div>
                        </div>
                    </div>
                `;
            } else {
                details.innerHTML = '';
            }
        };
        paymentRadios.forEach(r => { r.onchange = () => {
            formContainer.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            r.closest('.payment-option').classList.add('selected');
            updatePaymentDetails();
        }; });
        updatePaymentDetails();

        const shippingCost = Store.cartTotal() >= (Store.state.settings.freeShippingThreshold || 1000) ? 0 : 60;
        const grandTotal = Store.cartTotal() + shippingCost;

        summary.innerHTML = `
            <h3 style="margin-bottom:1.5rem;">${UI.t('orderSummary')}</h3>
            ${Store.state.cart.map(item => `
                <div class="summary-row">
                    <span>${item.name} × ${item.quantity}</span>
                    <span>${UI.formatPrice(item.price * item.quantity)}</span>
                </div>
            `).join('')}
            <div class="summary-row">
                <span>${UI.t('subtotal')}</span>
                <span>${UI.formatPrice(Store.cartTotal())}</span>
            </div>
            <div class="summary-row">
                <span>${UI.t('shipping')}</span>
                <span>${shippingCost === 0 ? UI.t('free') : UI.formatPrice(shippingCost)}</span>
            </div>
            <div class="summary-row total">
                <span>${UI.t('total')}</span>
                <span class="total-value">${UI.formatPrice(grandTotal)}</span>
            </div>
        `;

        document.querySelector('#checkoutForm').onsubmit = e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            const order = {
                id: 'ORD-' + Date.now(),
                userId: user ? user.id : null,
                ...data,
                items: Store.state.cart,
                subtotal: Store.cartTotal(),
                shipping: shippingCost,
                total: grandTotal,
                date: new Date().toISOString(),
                status: 'pending'
            };
            const orders = Storage.get('orders', []);
            orders.push(order);
            Storage.set('orders', orders);
            // If logged in, save the address used
            if (user) {
                Auth.updateAddress({ address: data.address, city: data.city, zip: data.zip });
            }
            Store.clearCart();
            UI.updateCartBadge();
            UI.showNotification(UI.t('orderPlaced'), 'success', UI.t('orderThanks'));
            setTimeout(() => window.location.href = 'index.html', 1800);
        };
    }
};

// ============================================
// UI: AUTH (Login/Register/Account modal helpers)
// ============================================
UI.switchAuthTab = function(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const panes = document.querySelectorAll('.auth-form[data-pane]');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    panes.forEach(p => p.style.display = (p.dataset.pane === tab) ? '' : 'none');
};

UI.bindAuth = function() {
    // Tab buttons
    document.querySelectorAll('.auth-tab').forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            UI.switchAuthTab(btn.dataset.tab);
        };
    });
    // Switch links
    document.querySelectorAll('.auth-switch a[data-switch]').forEach(a => {
        a.onclick = e => {
            e.preventDefault();
            UI.switchAuthTab(a.dataset.switch);
        };
    });
    // Close button
    const closeBtn = document.querySelector('#authClose');
    if (closeBtn) closeBtn.onclick = () => Auth.closeAuthModal();
    const modal = document.querySelector('#authModal');
    if (modal) {
        modal.onclick = e => {
            if (e.target === modal) Auth.closeAuthModal();
        };
    }
    // Login form
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.onsubmit = async e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(loginForm));
            const result = await Auth.login(data.email, data.password);
            if (result.ok) {
                UI.showNotification(`${UI.t('welcomeBack')} ${result.user.firstName}!`, 'success');
                Auth.closeAuthModal();
                Auth.refreshAccountIcon();
                if (typeof Auth.renderAccountPage === 'function') Auth.renderAccountPage();
                loginForm.reset();
            } else {
                UI.showNotification(result.error, 'error', UI.t('loginFailed'));
            }
        };
    }
    // Register form
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
        registerForm.onsubmit = async e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(registerForm));
            if (data.password !== data.confirmPassword) {
                UI.showNotification('Passwords do not match', 'error', UI.t('registerFailed'));
                return;
            }
            const result = await Auth.register(data);
            if (result.ok) {
                UI.showNotification(`Welcome, ${result.user.firstName}!`, 'success', UI.t('registered'));
                Auth.closeAuthModal();
                Auth.refreshAccountIcon();
                if (typeof Auth.renderAccountPage === 'function') Auth.renderAccountPage();
                registerForm.reset();
            } else {
                UI.showNotification(result.error, 'error', UI.t('registerFailed'));
            }
        };
    }
    // Account page specific bindings
    const gotoRegister = document.querySelector('#gotoRegister');
    if (gotoRegister) {
        gotoRegister.onclick = e => {
            e.preventDefault();
            Auth.openAuthModal('register');
        };
    }
    const loginFormPage = document.querySelector('#loginFormPage');
    if (loginFormPage) {
        loginFormPage.onsubmit = async e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(loginFormPage));
            const result = await Auth.login(data.email, data.password);
            if (result.ok) {
                UI.showNotification(`${UI.t('welcomeBack')} ${result.user.firstName}!`, 'success');
                Auth.renderAccountPage();
            } else {
                UI.showNotification(result.error, 'error', UI.t('loginFailed'));
            }
        };
    }
    // Account tabs
    document.querySelectorAll('.account-tab').forEach(tab => {
        tab.onclick = () => {
            const pane = tab.dataset.pane;
            document.querySelectorAll('.account-tab').forEach(t => t.classList.toggle('active', t === tab));
            document.querySelectorAll('.account-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === pane));
        };
    });
    // Profile form
    const profileForm = document.querySelector('#profileForm');
    if (profileForm) {
        profileForm.onsubmit = async e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(profileForm));
            const ok = await Auth.updateProfile(data);
            UI.showNotification(ok ? UI.t('profileUpdated') : UI.t('updateFailed'), ok ? 'success' : 'error');
        };
    }
    // Address form
    const addressForm = document.querySelector('#addressForm');
    if (addressForm) {
        addressForm.onsubmit = e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(addressForm));
            const ok = Auth.updateAddress({ address: data.address, city: data.city, zip: data.zip });
            UI.showNotification(ok ? UI.t('addressSaved') : UI.t('updateFailed'), ok ? 'success' : 'error');
        };
    }
    // Password form
    const passwordForm = document.querySelector('#passwordForm');
    if (passwordForm) {
        passwordForm.onsubmit = async e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(passwordForm));
            if (data.newPassword !== data.confirmPassword) {
                UI.showNotification('Passwords do not match', 'error');
                return;
            }
            const result = await Auth.updatePassword(data.currentPassword, data.newPassword);
            if (result.ok) {
                UI.showNotification(UI.t('passwordUpdated'), 'success');
                passwordForm.reset();
            } else {
                UI.showNotification(result.error, 'error');
            }
        };
    }
    // Logout button
    const logoutBtn = document.querySelector('#logoutBtn');
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            Auth.logout();
            Auth.refreshAccountIcon();
            Auth.renderAccountPage();
            UI.showNotification(UI.t('loggedOut'), 'info');
        };
    }
};

// ============================================
// SOUND SYSTEM (minimal, opt-in)
// ============================================
const SoundSystem = {
    ctx: null,
    enabled: true,
    masterGain: 0.18, // keep it minimal

    _ensure() {
        if (!this.ctx) {
            try {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) { this.enabled = false; }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        return this.ctx;
    },

    _tone(freq, duration = 0.08, type = 'sine', volume = 1) {
        if (!this.enabled) return;
        const ctx = this._ensure();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.5), ctx.currentTime + duration);
        gain.gain.setValueAtTime(this.masterGain * volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    },

    click()    { this._tone(620, 0.06, 'sine', 0.7); },
    hover()    { this._tone(880, 0.04, 'sine', 0.35); },
    success()  { this._tone(660, 0.10, 'triangle', 0.7);
                 setTimeout(() => this._tone(990, 0.08, 'triangle', 0.7), 70); },
    notify()   { this._tone(740, 0.10, 'sine', 0.6); },
    addToCart(){ this._tone(523, 0.06, 'triangle', 0.7);
                 setTimeout(() => this._tone(784, 0.06, 'triangle', 0.7), 60); },
    error()    { this._tone(220, 0.14, 'sawtooth', 0.5); },

    bind() {
        // Resume audio context on first user interaction
        const unlock = () => {
            this._ensure();
            document.removeEventListener('pointerdown', unlock);
            document.removeEventListener('keydown', unlock);
        };
        document.addEventListener('pointerdown', unlock, { once: true });
        document.addEventListener('keydown', unlock, { once: true });

        // Click sounds on interactive elements
        document.addEventListener('click', e => {
            const t = e.target.closest('button, .btn, a.btn, .product-card, .blog-card, .category-card, .filter-tab, .payment-option, .account-tab, .auth-tab');
            if (!t) return;
            if (t.classList.contains('btn') || t.tagName === 'BUTTON') {
                if (t.classList.contains('btn-secondary')) this.error();
                else this.click();
            } else this.click();
        });
        // Hover sounds (throttled)
        let lastHover = 0;
        document.addEventListener('mouseover', e => {
            const t = e.target.closest('button, .btn, .product-card, .blog-card, .category-card, .payment-option, .account-tab');
            if (!t) return;
            const now = Date.now();
            if (now - lastHover < 180) return;
            lastHover = now;
            this.hover();
        });
        // Cart add — listen for a custom event fired by UI
        document.addEventListener('cart:add', () => this.addToCart());
        document.addEventListener('notify:success', () => this.success());
        document.addEventListener('notify:error', () => this.error());
        document.addEventListener('notify:info', () => this.notify());
    }
};

// ============================================
// TRAIL EFFECT (mouse + touch)
// ============================================
const TrailEffect = {
    enabled: true,
    lastSpawn: 0,
    throttle: 18, // ms between particles
    maxParticles: 60,

    init() {
        if (!this.enabled) return;
        // Skip on very small screens / touch-only when disabled
        const layer = document.createElement('div');
        layer.id = 'trailLayer';
        layer.className = 'trail-layer';
        document.body.appendChild(layer);
        this.layer = layer;
        let count = 0;

        const spawn = (x, y, color) => {
            if (count > this.maxParticles) return;
            count++;
            const p = document.createElement('div');
            p.className = 'trail-particle';
            p.style.left = x + 'px';
            p.style.top = y + 'px';
            p.style.background = color;
            const size = 8 + Math.random() * 10;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            this.layer.appendChild(p);
            // animate
            const dx = (Math.random() - 0.5) * 50;
            const dy = -20 - Math.random() * 30;
            p.animate([
                { transform: 'translate(0,0) scale(1)', opacity: 0.85 },
                { transform: `translate(${dx}px,${dy}px) scale(0.2)`, opacity: 0 }
            ], { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(0.4,0,0.2,1)' }).onfinish = () => {
                p.remove();
                count--;
            };
        };

        const colors = [
            'radial-gradient(circle, rgba(124,58,237,0.85), transparent 70%)',
            'radial-gradient(circle, rgba(236,72,153,0.85), transparent 70%)',
            'radial-gradient(circle, rgba(6,182,212,0.85), transparent 70%)',
            'radial-gradient(circle, rgba(168,85,247,0.85), transparent 70%)'
        ];

        const onMove = (x, y) => {
            const now = Date.now();
            if (now - this.lastSpawn < this.throttle) return;
            this.lastSpawn = now;
            const color = colors[Math.floor(Math.random() * colors.length)];
            spawn(x, y, color);
        };

        window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY), { passive: true });
        window.addEventListener('touchmove', e => {
            const t = e.touches[0];
            if (t) onMove(t.clientX, t.clientY);
        }, { passive: true });
        // Touch tap burst
        window.addEventListener('touchstart', e => {
            const t = e.touches[0];
            if (!t) return;
            for (let i = 0; i < 5; i++) {
                setTimeout(() => spawn(t.clientX + (Math.random()-0.5)*20, t.clientY + (Math.random()-0.5)*20, colors[i % colors.length]), i * 30);
            }
        }, { passive: true });
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
    // Auth bindings (after a short delay so DOM is fully wired)
    setTimeout(() => {
        if (window.UI && window.Auth) {
            UI.bindAuth();
            Auth.refreshAccountIcon();
        }
    }, 250);
    // Sound + Trail effects (storefront only)
    if (!path.includes('admin') && !path.includes('checkout.html')) {
        if (Store.state.settings.enableTrail !== false) TrailEffect.init();
        if (Store.state.settings.enableSound !== false) SoundSystem.bind();
    }
});
