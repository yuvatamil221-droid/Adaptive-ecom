import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Product from "../components/product";
import Footer from "../components/footer";
import products from "../data/products";
import { useState } from "react";

function Products({ navigate, filters }) {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("default");

  let filteredProducts = [...products];

  // Category filter
  if (filters?.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filters.category
    );
  }

  // Maximum price filter
  if (filters?.maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= filters.maxPrice
    );
  }

  // Deal filter
  if (filters?.deal) {
    filteredProducts = filteredProducts.filter(
      (product) => product.discount > 0
    );
  }

  // Flash sale filter
  if (filters?.flashSale) {
    filteredProducts = filteredProducts.filter(
      (product) => product.flashSale === true
    );
  }

  // New arrivals filter
  if (filters?.newArrivals) {
    filteredProducts = filteredProducts.filter(
      (product) => product.newArrival === true
    );
  }

  // Trending filter
  if (filters?.trending) {
    filteredProducts = filteredProducts.filter(
      (product) => product.trending === true
    );
  }

  // Search
  filteredProducts = filteredProducts.filter((product) => {
    const search = searchText.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search)
    );
  });

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Shop
          </p>

          <h1 className="text-3xl font-black">
  {filters?.category === "beauty"
    ? "Beauty Products"
    : "All Products"}
</h1>

          <p className="mt-2 text-sm text-gray-500">
            Explore products selected for your shopping experience.
          </p>
        </div>

        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold outline-none focus:border-gray-900"
          >
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Result Count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>

          {filters && (
            <button
              onClick={() => navigate("products")}
              className="text-xs font-bold text-gray-500 underline underline-offset-4 hover:text-gray-900"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                navigate={navigate}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <div className="text-4xl">🔎</div>

            <h2 className="mt-4 text-xl font-black">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try changing your search or filter.
            </p>

            <button
              onClick={() => {
                setSearchText("");
                navigate("products");
              }}
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              View All Products
            </button>
          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Products;