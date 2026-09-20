import Product from "../components/product";
import Hero from "../components/hero";
import products from "../data/products";
import categories from "../data/categories";

function DealHome({ navigate }) {
  const dealProducts = products
    .filter((product) => product.discount >= 20)
    .slice(0, 8);

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* Hero */}
      <Hero />

      {/* Shop By Deals */}
      <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">

        <div className="flex items-end justify-between gap-3">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 sm:text-xs">
              Shop By Deals
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Find Your Best Deal
            </h2>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Explore products and save more on every purchase.
            </p>
          </div>

          {/* View All - Mobile + Desktop */}
          <button
            onClick={() => navigate("products", { deal: true })}
            className="shrink-0 text-xs font-bold text-red-500 sm:text-sm"
          >
            View All →
          </button>

        </div>

        {/* Deal Cards */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">

          {/* Flash Sale */}
          <button
            onClick={() =>
              navigate("products", { flashSale: true })
            }
            className="rounded-xl bg-white p-3 text-left shadow-sm transition hover:shadow-md sm:rounded-2xl sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              ⚡
            </div>

            <h3 className="mt-2 text-sm font-black sm:mt-4 sm:text-lg">
              Flash Sale
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:mt-2 sm:text-sm">
              Limited-time offers
            </p>

            <p className="mt-2 text-[11px] font-bold text-red-500 sm:mt-4 sm:text-sm">
              Shop Now →
            </p>
          </button>

          {/* Under ₹999 */}
          <button
            onClick={() =>
              navigate("products", { maxPrice: 999 })
            }
            className="rounded-xl bg-white p-3 text-left shadow-sm transition hover:shadow-md sm:rounded-2xl sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              ₹
            </div>

            <h3 className="mt-2 text-sm font-black sm:mt-4 sm:text-lg">
              Under ₹999
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:mt-2 sm:text-sm">
              Budget-friendly products
            </p>

            <p className="mt-2 text-[11px] font-bold text-red-500 sm:mt-4 sm:text-sm">
              Shop Now →
            </p>
          </button>

          {/* Fashion Deals */}
          <button
            onClick={() =>
              navigate("products", { category: "fashion" })
            }
            className="rounded-xl bg-white p-3 text-left shadow-sm transition hover:shadow-md sm:rounded-2xl sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              ✦
            </div>

            <h3 className="mt-2 text-sm font-black sm:mt-4 sm:text-lg">
              Fashion Deals
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:mt-2 sm:text-sm">
              Trending styles
            </p>

            <p className="mt-2 text-[11px] font-bold text-red-500 sm:mt-4 sm:text-sm">
              Shop Now →
            </p>
          </button>

          {/* Gadget Deals */}
          <button
            onClick={() =>
              navigate("products", { category: "electronics" })
            }
            className="rounded-xl bg-white p-3 text-left shadow-sm transition hover:shadow-md sm:rounded-2xl sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              ◈
            </div>

            <h3 className="mt-2 text-sm font-black sm:mt-4 sm:text-lg">
              Gadget Deals
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:mt-2 sm:text-sm">
              Smart gadgets & more
            </p>

            <p className="mt-2 text-[11px] font-bold text-red-500 sm:mt-4 sm:text-sm">
              Shop Now →
            </p>
          </button>

        </div>
      </section>

      {/* Top Deals */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8"
      >

        <div className="flex items-end justify-between gap-3">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 sm:text-xs">
              Top Deals
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Deals You Don't Want To Miss
            </h2>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Grab these offers before they are gone.
            </p>
          </div>

          {/* View All */}
          <button
            onClick={() =>
              navigate("products", { deal: true })
            }
            className="shrink-0 text-xs font-bold text-red-500 sm:text-sm"
          >
            View All →
          </button>

        </div>

        {/* Products */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {dealProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>

      {/* Shop By Category */}
      <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 sm:text-xs">
          Deal Spotlight
        </p>

        <h2 className="mt-2 text-2xl font-black sm:text-3xl">
          Shop By Category
        </h2>

        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          Find great offers across your favourite categories.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                navigate("products", {
                  category: category.id,
                })
              }
              className="group overflow-hidden rounded-xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:rounded-2xl"
            >

              <div className="h-24 overflow-hidden sm:h-40">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

              </div>

              <div className="p-3 sm:p-4">

                <h3 className="text-sm font-black sm:text-base">
                  {category.name}
                </h3>

                <p className="mt-1 text-[11px] font-medium text-red-500 sm:text-sm">
                  Explore Deals →
                </p>

              </div>

            </button>
          ))}

        </div>

      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-3 pb-7 sm:px-6 sm:pb-12 lg:px-8">

        <div className="rounded-2xl bg-gray-900 p-6 text-center text-white sm:rounded-3xl sm:p-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 sm:text-xs">
            Don't Miss Out
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-4xl">
            Great Deals Are Waiting
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
            Explore our collection and find products at great prices.
          </p>

          <button
            onClick={() =>
              navigate("products", { deal: true })
            }
            className="mt-5 rounded-xl bg-red-500 px-6 py-3 text-xs font-bold text-white hover:bg-red-600 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Explore All Deals →
          </button>

        </div>

      </section>

    </main>
  );
}

export default DealHome;