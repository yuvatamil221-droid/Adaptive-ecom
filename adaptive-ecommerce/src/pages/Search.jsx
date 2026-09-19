import { useState } from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";
import Product from "../components/product";
import products from "../data/products";

function Search({ navigate, search }) {
  const [searchText, setSearchText] = useState(search?.search || "");

  const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigate={navigate} showSearch={false} />
      <ExperienceSwitcher navigate={navigate} />
      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-black">Search Products</h1>

        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search products..."
          className="mt-5 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none"
        />

        {results.length === 0 ? (
          <p className="mt-8 text-gray-500">No products found.</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((product) => (
              <Product key={product.id} product={product} navigate={navigate} />
            ))}
          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Search;
