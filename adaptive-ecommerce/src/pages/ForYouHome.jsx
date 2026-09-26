import products from "../data/products";

function ForYouHome({ navigate }) {
  const pickedForYou = products
    .filter((product) => product.rating >= 4.5)
    .slice(0, 4);

  const electronicsProducts = products
    .filter((product) => product.category === "electronics")
    .slice(0, 4);

  const fashionProducts = products
    .filter((product) => product.category === "fashion")
    .slice(0, 4);

  const trendingProducts = products
    .filter((product) => product.trending === true)
    .slice(0, 4);

  const quickPicks = products
    .filter((product) => product.rating >= 4.4)
    .slice(12, 16);

  const ProductCard = ({ product }) => {
    return (
      <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden bg-gray-50">
          
          {product.discount >= 20 && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white">
              {product.discount}% OFF
            </span>
          )}

          <button
            onClick={() => navigate("wishlist")}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-gray-600 shadow-sm hover:text-red-500"
          >
            ♡
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="truncate text-sm font-bold text-gray-900">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <span className="text-sm text-yellow-500">★</span>

            <span className="text-xs font-bold text-gray-700">
              {product.rating}
            </span>

            <span className="text-[10px] text-gray-400">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg font-black text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("productDetails", product)}
            className="mt-3 w-full rounded-xl bg-gray-900 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
          >
            View Product
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-3 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-100 via-white to-purple-100 px-6 py-12 sm:px-10">
          
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Personalized For You
          </p>

          <h1 className="mt-3 text-4xl font-black text-gray-900 sm:text-5xl">
            Made For You
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover products picked around your interests and shopping style.
          </p>

        </div>
      </section>

      {/* ================= PICKED FOR YOU ================= */}
      <section className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-10 lg:px-8">
        
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Picked For You
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Products selected based on your interests
            </p>
          </div>

          <button
            onClick={() => navigate("products")}
            className="text-sm font-bold text-blue-600"
          >
            See All →
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {pickedForYou.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* ================= ELECTRONICS ================= */}
      <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 lg:px-8">
        
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-black sm:text-3xl">
            Because You Like Electronics
          </h2>

          <button
            onClick={() =>
              navigate("products", {
                category: "electronics",
              })
            }
            className="text-sm font-bold text-blue-600"
          >
            See All →
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {electronicsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* ================= FASHION ================= */}
      <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 lg:px-8">
        
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-black sm:text-3xl">
            Because You Like Fashion
          </h2>

          <button
            onClick={() =>
              navigate("products", {
                category: "fashion",
              })
            }
            className="text-sm font-bold text-blue-600"
          >
            See All →
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {fashionProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* ================= TRENDING ================= */}
      <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 lg:px-8">
        
        <div>
          <h2 className="text-2xl font-black sm:text-3xl">
            Trending For You
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Popular products you might love
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* ================= INTERESTS ================= */}
      {/* ================= EXPLORE INTERESTS ================= */}
<section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
  <h2 className="text-2xl font-black">
    Explore Your Interests
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    Browse products from categories you may like
  </p>

  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

    <button
      onClick={() =>
        navigate("products", {
          category: "electronics",
        })
      }
      className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-20 items-center">
        <span className="text-lg font-bold text-gray-900">
          Electronics
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-500">
          Explore products
        </span>
        <span className="text-lg text-gray-700">
          →
        </span>
      </div>
    </button>

    <button
      onClick={() =>
        navigate("products", {
          category: "fashion",
        })
      }
      className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-20 items-center">
        <span className="text-lg font-bold text-gray-900">
          Fashion
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-500">
          Explore products
        </span>
        <span className="text-lg text-gray-700">
          →
        </span>
      </div>
    </button>

    <button
      onClick={() =>
        navigate("products", {
          category: "home",
        })
      }
      className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-20 items-center">
        <span className="text-lg font-bold text-gray-900">
          Home
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-500">
          Explore products
        </span>
        <span className="text-lg text-gray-700">
          →
        </span>
      </div>
    </button>

    <button
      onClick={() =>
        navigate("products", {
          category: "beauty",
        })
      }
      className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-20 items-center">
        <span className="text-lg font-bold text-gray-900">
          Beauty
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-500">
          Explore products
        </span>
        <span className="text-lg text-gray-700">
          →
        </span>
      </div>
    </button>

    <button
      onClick={() =>
        navigate("products", {
          category: "accessories",
        })
      }
      className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-20 items-center">
        <span className="text-lg font-bold text-gray-900">
          Accessories
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-500">
          Explore products
        </span>
        <span className="text-lg text-gray-700">
          →
        </span>
      </div>
    </button>

  </div>
</section>

      {/* ================= QUICK PICKS ================= */}
      <section className="mx-auto max-w-7xl px-3 pb-12 sm:px-6 lg:px-8">
        
        <div>
          <h2 className="text-2xl font-black sm:text-3xl">
            Quick Picks For You
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Handpicked items for your shopping experience
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {quickPicks.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default ForYouHome;