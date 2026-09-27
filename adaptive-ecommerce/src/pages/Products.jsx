import { useEffect, useState } from "react";

import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Product from "../components/product";
import PremiumBrands from "./PremiumBrands";

import products from "../data/products";

function Products({ navigate, goBack, filters, selectedProfile }) {
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
  hours: 2,
  minutes: 45,
  seconds: 18,
});

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((current) => {
      let { hours, minutes, seconds } = current;

      if (seconds > 0) {
        seconds -= 1;
      } else if (minutes > 0) {
        minutes -= 1;
        seconds = 59;
      } else if (hours > 0) {
        hours -= 1;
        minutes = 59;
        seconds = 59;
      }

      return { hours, minutes, seconds };
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
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
    /* Brand */
    if (filters?.brand && product.brand !== filters.brand) {
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
    if (
      filters?.deal &&
      (!product.discount || product.discount < 20 || product.inStock === false)
    ) {
      return false;
    }

    /* Flash Sale */
    if (filters?.flashSale && (!product.discount || product.discount < 30)) {
      return false;
    }

    return true;
  });

  /* New Arrivals */
  if (filters?.newArrivals) {
    filteredProducts = products
      .filter((product) => product.newArrival === true)
      .slice(0, 8);
  }

  /* Brands */
/* Brands */
if (filters?.brands) {
  if (filters?.brand) {
    // Specific brand clicked
    filteredProducts = products.filter(
      (product) => product.brand === filters.brand
    );
  } else {
    // View All Brands
    filteredProducts = products.filter(
      (product) =>
        product.brand === "Apple" ||
        product.brand === "Nike" ||
        product.brand === "Samsung" ||
        product.brand === "Milton" ||
        product.brand === "boAt" ||
        product.brand === "Fossil" ||
        product.brand === "Canon" ||
        product.brand === "Anker" ||
        product.brand === "Logitech" ||
        product.brand === "Sony"
    );
  }
}
  /* Collections */
  if (filters?.collections) {
    filteredProducts = products
      .filter(
        (product) => product.category === "fashion" && product.price >= 2000,
      )
      .slice(0, 8);
  }

  /* Section */
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
        {/* =================================
            DEALS PAGE
        ================================= */}

        {filters?.deal ? (
          <section className="mb-7">
            {/* BACK ARROW */}
            <button
              onClick={goBack}
              className="mb-4 text-2xl font-bold text-gray-700 transition hover:text-black"
              aria-label="Go back"
            >
              ←
            </button>

            {/* DEALS IMAGE */}
            <div className="mt-3 w-full overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}deals.png`}
                alt="Deals and Big Savings"
                className="block h-auto w-full scale-[1.03] rounded-none"
              />
            </div>
          </section>
        ) : filters?.maxPrice === 999 ? (
          /* =================================
             UNDER ₹999 PAGE TOP
          ================================= */

          <>
            {/* BACK */}
            <button
              onClick={goBack}
              className="mb-4 text-2xl font-bold text-gray-700 transition hover:text-black"
              aria-label="Go back"
            >
              ←
            </button>

            {/* UNDER ₹999 IMAGE */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}uder900.png`}
                alt="Smart Picks Under ₹999"
                className="block h-auto w-full"
              />
            </div>

            {/* CATEGORY SHORTCUTS */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {/* ELECTRONICS */}
              <button
                onClick={() => setCategory("electronics")}
                className="rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl">🎧</div>

                <p className="mt-1 text-sm font-black">Electronics</p>

                <p className="text-xs text-gray-500">Under ₹999</p>
              </button>

              {/* FASHION */}
              <button
                onClick={() => setCategory("fashion")}
                className="rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl">👕</div>

                <p className="mt-1 text-sm font-black">Fashion</p>

                <p className="text-xs text-gray-500">Under ₹999</p>
              </button>

              {/* HOME */}
              <button
                onClick={() => setCategory("home")}
                className="rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl">🏠</div>

                <p className="mt-1 text-sm font-black">Home</p>

                <p className="text-xs text-gray-500">Under ₹999</p>
              </button>

              {/* BEAUTY */}
              <button
                onClick={() => setCategory("beauty")}
                className="rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl">💄</div>

                <p className="mt-1 text-sm font-black">Beauty</p>

                <p className="text-xs text-gray-500">Under ₹999</p>
              </button>

              {/* SPORTS */}
              <button
                onClick={() => setCategory("sports")}
                className="rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl">🏋️</div>

                <p className="mt-1 text-sm font-black">Sports</p>

                <p className="text-xs text-gray-500">Under ₹999</p>
              </button>

              {/* ALL PICKS */}
              <button
                onClick={() => setCategory("all")}
                className="rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl">🛍️</div>

                <p className="mt-1 text-sm font-black">All Picks</p>

                <p className="text-xs text-gray-500">View All</p>
              </button>
            </div>

            {/* UNDER ₹999 TITLE */}
            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Smart Shopping
              </p>

              <h1 className="mt-1 text-3xl font-black">Under ₹999</h1>

              <p className="mt-1 text-sm text-gray-500">
                {filteredProducts.length} products
              </p>
            </div>
          </>
        ) : filters?.flashSale ? (
          /* =================================
             FLASH SALE PAGE
          ================================= */

          <>
            {/* BACK */}
            <button
              onClick={goBack}
              className="mb-4 text-2xl font-bold text-gray-700 transition hover:text-black"
              aria-label="Go back"
            >
              ←
            </button>

            {/* FLASH SALE HERO */}
            <section className="flash-sale-hero relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-red-50 p-6 shadow-sm sm:p-8">
              {/* Decorative shapes */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-100" />

              <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-orange-100" />

              <div className="relative">
                {/* FLASH SALE LABEL */}
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-black text-white">
                  ⚡ FLASH SALE
                </div>

                {/* TITLE */}
                <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                  Big Discounts.
                  <span className="block text-red-500">Limited Offers.</span>
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                  Grab your favourite products with special flash sale
                  discounts.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 px-5 py-4 shadow-lg">
  <div className="text-center">
    <p className="text-2xl font-black text-white">
      {String(timeLeft.hours).padStart(2, "0")}
    </p>
    <p className="text-[10px] font-bold uppercase text-gray-300">
      Hours
    </p>
  </div>

  <span className="text-2xl font-black text-white">:</span>

  <div className="text-center">
    <p className="text-2xl font-black text-white">
      {String(timeLeft.minutes).padStart(2, "0")}
    </p>
    <p className="text-[10px] font-bold uppercase text-gray-300">
      Min
    </p>
  </div>

  <span className="text-2xl font-black text-white">:</span>

  <div className="text-center">
    <p className="text-2xl font-black text-white">
      {String(timeLeft.seconds).padStart(2, "0")}
    </p>
    <p className="text-[10px] font-bold uppercase text-gray-300">
      Sec
    </p>
  </div>
</div>

                {/* DISCOUNT CARDS */}
                <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-red-500">40%</p>

                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                      OFF
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-red-500">36%</p>

                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                      OFF
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-red-500">32%</p>

                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                      OFF
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-red-500">30%</p>

                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                      OFF
                    </p>
                  </div>
                </div>

                {/* OFFER INFO */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm">
                    🔥 30%+ OFF
                  </div>

                  <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm">
                    ⚡ Special Prices
                  </div>

                  <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm">
                    🛍️ Limited Deals
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* =================================
             NORMAL PAGE HEADING
          ================================= */

          <>
            {/* BACK */}
            <button
              onClick={goBack}
              className="mb-5 text-2xl font-bold text-gray-700 transition hover:text-black"
              aria-label="Go back"
            >
              ←
            </button>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Shop
              </p>

              <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                {filters?.newArrivals
                  ? "New Arrivals"
                  : filters?.brands
                    ? "Featured Brands"
                    : filters?.collections
                      ? "Premium Collections"
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
                      : filters?.maxPrice === 999
                        ? "Shop smart with great products under ₹999."
                        : filters?.flashSale
                          ? "Limited-time offers are waiting for you."
                          : "Explore products selected for your shopping experience."}
              </p>
            </div>
          </>
        )}

        {/* =================================
            PRODUCT COUNT + DESKTOP CONTROLS
        ================================= */}

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

        {/* =================================
            MOBILE CONTROLS
        ================================= */}

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

        {/* =================================
            FILTER PANEL
        ================================= */}

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

        {/* =================================
            PRODUCTS
        ================================= */}

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
          <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
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
