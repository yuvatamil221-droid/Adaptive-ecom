const navigation = {
  // --------------------------------
  // DEFAULT
  // --------------------------------
  default: [
    {
      label: "Home",
      page: "home",
      icon: "⌂",
    },
    {
      label: "Shop",
      page: "products",
      icon: "🛍",
    },
    {
      label: "Categories",
      page: "products",
      filters: { categories: true },
      icon: "▦",
    },
    {
      label: "Wishlist",
      page: "wishlist",
      icon: "♡",
    },
    {
      label: "Cart",
      page: "cart",
      icon: "🛒",
    },
    {
      label: "Profile",
      page: "profile",
      icon: "♙",
    },
  ],

  // --------------------------------
  // DEAL HUNTER
  // --------------------------------
  dealHunter: [
    {
      label: "Home",
      page: "home",
      icon: "⌂",
    },
    {
      label: "Deals",
      page: "products",
      filters: { deal: true },
      icon: "🏷",
    },
    {
      label: "Under ₹999",
      page: "products",
      filters: { maxPrice: 999 },
      icon: "₹",
    },
    {
      label: "Flash Sale",
      page: "products",
      filters: { flashSale: true },
      icon: "⚡",
    },
    {
      label: "Wishlist",
      page: "wishlist",
      icon: "♡",
    },
    {
      label: "Cart",
      page: "cart",
      icon: "🛒",
    },
  ],

  // --------------------------------
  // PREMIUM SHOPPER
  // --------------------------------
  premiumShopper: [
    {
      label: "Home",
      page: "home",
      icon: "⌂",
    },
    {
  label: "New Arrivals",
  page: "newArrivals",
  icon: "✦",
},
    {
      label: "Brands",
      page: "PremiumBrands",
      filters: { brands: true },
      icon: "◇",
    },
   
    {
      label: "Wishlist",
      page: "wishlist",
      icon: "♡",
    },
    {
      label: "Cart",
      page: "cart",
      icon: "🛒",
    },
  ],

  // --------------------------------
  // FREQUENT SHOPPER
  // --------------------------------
  frequentShopper: [
    {
      label: "Home",
      page: "home",
      icon: "⌂",
    },
    {
      label: "For You",
      page: "forYou",
      filters: { personalized: true },
      icon: "✦",
    },
    {
      label: "Orders",
      page: "orders",
      icon: "▤",
    },
    {
      label: "Wishlist",
      page: "wishlist",
      icon: "♡",
    },
    {
      label: "Cart",
      page: "cart",
      icon: "🛒",
    },
  ],

  // --------------------------------
  // EXISTING EXPLORER
  // --------------------------------
  explorer: [
    {
      label: "Home",
      page: "home",
      icon: "⌂",
    },
    {
      label: "Trending",
      page: "trending",
      filters: { trending: true },
      icon: "🔥",
    },
   
    {
      label: "Wishlist",
      page: "wishlist",
      icon: "♡",
    },
    {
      label: "Cart",
      page: "cart",
      icon: "🛒",
    },
  ],

  // --------------------------------
  // EXISTING ACCESSIBILITY
  // --------------------------------
  
};

export default navigation;