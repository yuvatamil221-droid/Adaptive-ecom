const navigation = {
  dealHunter: [
    { label: "Home", page: "home" },
    { label: "Deals", page: "products", filters: { deal: true } },
    { label: "Under ₹999", page: "products", filters: { maxPrice: 999 } },
    { label: "Flash Sale", page: "products", filters: { flashSale: true } },
    { label: "Wishlist", page: "wishlist" },
    { label: "Cart", page: "cart" },
  ],

  premiumShopper: [
    { label: "Home", page: "home" },
    { label: "New Arrivals", page: "products", filters: { newArrivals: true } },
    { label: "Brands", page: "products", filters: { brands: true } },
    { label: "Collections", page: "products", filters: { collections: true } },
    { label: "Wishlist", page: "wishlist" },
    { label: "Cart", page: "cart" },
  ],

  frequentShopper: [
    { label: "Home", page: "home" },
    { label: "For You", page: "products", filters: { trending: true } },
    { label: "Orders", page: "orders" },
    { label: "Wishlist", page: "wishlist" },
    { label: "Cart", page: "cart" },
  ],

  explorer: [
    { label: "Home", page: "home" },
    { label: "Trending", page: "products", filters: { trending: true } },
    { label: "New Arrivals", page: "products", filters: { newArrivals: true } },
    { label: "Categories", page: "products" },
    { label: "Wishlist", page: "wishlist" },
    { label: "Cart", page: "cart" },
  ],

  accessibility: [
    { label: "Home", page: "home" },
    { label: "Categories", page: "products" },
    { label: "Products", page: "products" },
    { label: "Wishlist", page: "wishlist" },
    { label: "Cart", page: "cart" },
    { label: "Profile", page: "profile" },
  ],
};

export default navigation;