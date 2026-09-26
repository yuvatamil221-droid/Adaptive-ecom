import { useState } from "react";

import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";
import Product from "../components/product";

import products from "../data/products";

function Search({ navigate, data }) {
  const initialSearch = data?.search || "";

  const [searchText, setSearchText] = useState(initialSearch);

  const searchValue = searchText.trim().toLowerCase();

  const results = products.filter((product) => {
    const name = String(product.name || "").toLowerCase();
    const brand = String(product.brand || "").toLowerCase();
    const category = String(product.category || "").toLowerCase();

    return (
      name.includes(searchValue) ||
      brand.includes(searchValue) ||
      category.includes(searchValue)
    );
  });

  const handleSearch = (event) => {
    event.preventDefault();

    const value = searchText.trim();

    if (!value) {
      navigate("search");
      return;
    }

    navigate("search", {
      search: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigate={navigate} showSearch={false} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Discover
          </p>

          <h1 className="mt-2 text-3xl font-black text-gray-900">
            Search Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Search by product name, brand or category.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mt-6 flex max-w-3xl gap-3">
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search products, brands or categories..."
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
          >
            Search
          </button>
        </form>

        {searchValue && (
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              {results.length}{" "}
              {results.length === 1 ? "product" : "products"} found for{" "}
              <span className="font-bold text-gray-900">
                "{searchText}"
              </span>
            </p>
          </div>
        )}

        {results.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((product) => (
              <Product
                key={product.id}
                product={product}
                navigate={navigate}
              />
            ))}
          </div>
        ) : searchValue ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-12 text-center">
            <div className="text-4xl">🔍</div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try another product name, brand or category.
            </p>

            <button
              type="button"
              onClick={() => setSearchText("")}
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-12 text-center">
            <div className="text-4xl">🔍</div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Search for something
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter a product, brand or category to find what you're looking
              for.
            </p>
          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Search;