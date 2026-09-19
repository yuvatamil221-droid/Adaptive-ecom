import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Product from "../components/product";
import Footer from "../components/footer";
import products from "../data/products";
import { useState } from "react";

function Search({ navigate }) {
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) => {
    const search = searchText.toLowerCase().trim();

    if (!search) {
      return false;
    }

    return (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  });

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Discover
          </p>

          <h1 className="text-3xl font-black tracking-tight">
            Search Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Find products by name, brand or description.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative max-w-3xl">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
            🔍
          </span>

          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-5 text-sm font-medium outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            autoFocus
          />

          {searchText && (
            <button
              onClick={() => setSearchText("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 transition hover:text-gray-900"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Empty Initial State */}
        {!searchText && (
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <div className="text-4xl">🔎</div>

            <h2 className="mt-4 text-xl font-black">
              What are you looking for?
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Search for headphones, speakers, watches, fashion,
              beauty products and more.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              Browse All Products
            </button>
          </section>
        )}

        {/* Search Results */}
        {searchText && filteredProducts.length > 0 && (
          <section className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black">
                  Search Results
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""} found
                  for "{searchText}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  navigate={navigate}
                />
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {searchText && filteredProducts.length === 0 && (
          <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <div className="text-4xl">😕</div>

            <h2 className="mt-4 text-xl font-black">
              No products found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              We couldn't find any products matching "{searchText}".
              Try another product name or brand.
            </p>

            <button
              onClick={() => setSearchText("")}
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
            >
              Clear Search
            </button>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Search;