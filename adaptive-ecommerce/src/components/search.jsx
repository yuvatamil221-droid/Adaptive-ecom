import { useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 799,
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 999,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 699,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 499,
    },
  ];

  const results = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchText.toLowerCase().trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim() !== "") {
      setSearched(true);
    }
  };

  const handleSuggestion = (value) => {
    setSearchText(value);
    setSearched(true);
  };

  return (
    <section className="min-h-screen bg-[#faf9f7] px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-[10px] tracking-[0.2em] text-stone-400 font-bold">
            DISCOVER
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Search Products
          </h1>

          <p className="text-sm text-stone-500 mt-3">
            Find products, brands and categories you love.
          </p>

        </div>

        {/* Search Box */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mt-8"
        >
          <div className="flex items-center bg-white border border-stone-200 rounded-2xl p-2 shadow-sm focus-within:border-stone-400 transition">

            <span className="text-xl text-stone-400 px-3">
              ⌕
            </span>

            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setSearched(false);
              }}
              placeholder="Search products, brands..."
              className="flex-1 outline-none text-sm text-stone-800 py-3"
            />

            {searchText && (
              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                  setSearched(false);
                }}
                className="text-stone-400 hover:text-stone-800 px-3 text-lg"
              >
                ×
              </button>
            )}

            <button
              type="submit"
              className="bg-stone-900 hover:bg-stone-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
            >
              Search
            </button>

          </div>
        </form>

        {/* Suggestions */}
        {!searched && (
          <div className="max-w-2xl mx-auto mt-8">

            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Popular Searches
            </p>

            <div className="flex flex-wrap gap-2 mt-3">

              {[
                "Wireless Headphones",
                "Smart Watch",
                "Bluetooth Speaker",
                "Wireless Mouse",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSuggestion(item)}
                  className="bg-white border border-stone-200 hover:border-stone-400 px-4 py-2.5 rounded-xl text-sm text-stone-600 transition"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* Results */}
        {searched && (
          <div className="mt-10">

            <div className="flex items-center justify-between mb-5">

              <div>
                <p className="text-[10px] tracking-[0.2em] text-stone-400 font-bold">
                  SEARCH RESULTS
                </p>

                <h2 className="text-xl font-bold text-stone-900 mt-1">
                  {results.length}{" "}
                  {results.length === 1 ? "result" : "results"} for "
                  {searchText}"
                </h2>

              </div>

            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {results.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-stone-200 rounded-2xl p-5 hover:shadow-lg transition"
                  >

                    <div className="h-36 bg-stone-100 rounded-xl flex items-center justify-center text-4xl">
                      🛍️
                    </div>

                    <p className="text-[10px] tracking-wider text-stone-400 font-bold mt-5">
                      {product.category}
                    </p>

                    <h3 className="font-bold text-stone-900 mt-1">
                      {product.name}
                    </h3>

                    <p className="text-lg font-bold text-stone-900 mt-3">
                      ₹{product.price}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        console.log("Selected:", product.name)
                      }
                      className="w-full mt-4 bg-[#f4513a] hover:bg-[#df402b] text-white py-3 rounded-xl text-sm font-semibold transition"
                    >
                      View Product →
                    </button>

                  </div>
                ))}

              </div>
            ) : (
              <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center">

                <div className="text-4xl">
                  ⌕
                </div>

                <h2 className="text-xl font-bold text-stone-900 mt-4">
                  No products found
                </h2>

                <p className="text-sm text-stone-500 mt-2">
                  Try another product name or search term.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchText("");
                    setSearched(false);
                  }}
                  className="mt-6 bg-stone-900 hover:bg-stone-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
                >
                  Clear Search
                </button>

              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default Search;