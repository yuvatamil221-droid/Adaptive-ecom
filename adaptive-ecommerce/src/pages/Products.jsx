import { useState } from "react";

import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Product from "../components/product";

import products from "../data/products";

function Products({ navigate,  goBack, filters }) {
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const [category, setCategory] = useState(filters?.category || "all");

  const [maxPrice, setMaxPrice] = useState(filters?.maxPrice || 50000);

  const [minRating, setMinRating] = useState("all");

  /* --------------------------------
     FILTER PRODUCTS
  -------------------------------- */

  let filteredProducts = products.filter((product) => {
    /* Category */
    if (category !== "all" && product.category !== category) {
      return false;
    }

    /* Maximum price */
    if (product.price > Number(maxPrice)) {
      return false;
    }

    /* Minimum rating */
    if (minRating !== "all" && product.rating < Number(minRating)) {
      return false;
    }

    /* Under ₹999 */
    if (filters?.maxPrice && product.price > filters.maxPrice) {
      return false;
    }

    /* Deal products */
    if (filters?.deal && (!product.discount || product.discount < 20)) {
      return false;
    }

    /* Flash sale */
    if (filters?.flashSale && (!product.discount || product.discount < 30)) {
      return false;
    }

    return true;
  });
   
  if (filters?.newArrivals) {
  filteredProducts = products
    .filter((product) => product.newArrival === true)
    .slice(0, 8);
}

if (filters?.brands) {
  filteredProducts = products
    .filter(
      (product) =>
        product.newArrival === false &&
        (
          product.brand === "Logitech" ||
          product.brand === "Canon" ||
          product.brand === "Anker" ||
          product.brand === "Fossil" ||
          product.brand === "Nike" ||
          product.brand === "Milton"
        )
    )
    .slice(0, 8);
}

if (filters?.collections) {
  filteredProducts = products
    .filter(
      (product) =>
        product.category === "fashion" &&
        product.price >= 2000
    )
    .slice(0, 8);
}
  
  if (filters?.section) {
    filteredProducts = filteredProducts.filter(
      (product) => product.section === filters.section,
    );
  }

  /* --------------------------------
     SORT PRODUCTS
  -------------------------------- */

  if (sortBy === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "discount") {
    filteredProducts.sort((a, b) => b.discount - a.discount);
  }

  /* --------------------------------
     CLEAR FILTERS
  -------------------------------- */

  const clearFilters = () => {
    setCategory("all");
    setMaxPrice(50000);
    setMinRating("all");
    setSortBy("default");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
       
        {/* BACK BUTTON */}
  <button
    onClick={goBack}
    className="mb-5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100"
  >
    ← Back
  </button>
  
        {/* PAGE HEADING */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Shop
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
  Premium Shop
</p>

<h1 className="mt-2 text-3xl font-black sm:text-4xl">
  {filters?.newArrivals
    ? "New Arrivals"
    : filters?.brands
    ? "Featured Brands"
    : filters?.collections
    ? "Premium Collections"
    : filters?.deal
    ? "Best Deals"
    : filters?.maxPrice === 999
    ? "Under ₹999"
    : filters?.flashSale
    ? "Flash Sale"
    : "All Products"}
</h1>

<p className="mt-2 text-sm text-gray-500">
  {filters?.newArrivals
    ? "Discover the latest products selected for you."
    : filters?.brands
    ? "Explore products from popular brands."
    : filters?.collections
    ? "Explore our carefully selected premium collections."
    : filters?.deal
    ? "Grab amazing deals and save more."
    : filters?.maxPrice === 999
    ? "Shop smart with great products under ₹999."
    : filters?.flashSale
    ? "Limited-time offers are waiting for you."
    : "Explore products selected for your shopping experience."}
</p>
        </div>

        {/* PRODUCT COUNT + DESKTOP CONTROLS */}
        <div className="mt-7 flex items-center justify-between border-b border-gray-200 pb-4">
          <p className="text-sm font-bold text-gray-700">
            {filteredProducts.length} products
          </p>

          <div className="hidden items-center gap-3 sm:flex">
            {/* SORT */}
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold outline-none"
            >
              <option value="default">Sort</option>

              <option value="priceLow">Price: Low to High</option>

              <option value="priceHigh">Price: High to Low</option>

              <option value="rating">Rating</option>

              <option value="discount">Discount</option>
            </select>

            {/* FILTER */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold hover:bg-gray-100"
            >
              ⚙ Filter
            </button>
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold outline-none"
          >
            <option value="default">↕ Sort</option>

            <option value="priceLow">Price: Low to High</option>

            <option value="priceHigh">Price: High to Low</option>

            <option value="rating">Rating</option>

            <option value="discount">Discount</option>
          </select>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold"
          >
            ⚙ Filter
          </button>
        </div>

        {/* FILTER PANEL */}
        {showFilters && (
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black">Filters</h2>

              <button
                onClick={clearFilters}
                className="text-sm font-bold text-red-500"
              >
                Clear All
              </button>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {/* CATEGORY */}
              <div>
                <label className="text-sm font-bold">Category</label>

                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
                >
                  <option value="all">All Categories</option>

                  <option value="electronics">Electronics</option>

                  <option value="fashion">Fashion</option>

                  <option value="beauty">Beauty</option>

                  <option value="home">Home</option>

                  <option value="sports">Sports</option>
                </select>
              </div>

              {/* PRICE */}
              <div>
                <label className="text-sm font-bold">Maximum Price</label>

                <select
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
                >
                  <option value="50000">Any Price</option>

                  <option value="999">Under ₹999</option>

                  <option value="1999">Under ₹1,999</option>

                  <option value="4999">Under ₹4,999</option>

                  <option value="9999">Under ₹9,999</option>
                </select>
              </div>

              {/* RATING */}
              <div>
                <label className="text-sm font-bold">Minimum Rating</label>

                <select
                  value={minRating}
                  onChange={(event) => setMinRating(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
                >
                  <option value="all">Any Rating</option>

                  <option value="4">4★ & above</option>

                  <option value="4.5">4.5★ & above</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <div className="text-5xl">🔍</div>

            <h2 className="mt-4 text-xl font-black">No Products Found</h2>

            <p className="mt-2 text-sm text-gray-500">
              Try changing your filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} navigate={navigate} />
            ))}
          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Products;
