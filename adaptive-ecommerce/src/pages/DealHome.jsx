import Product from "../components/product";
import Hero from "../components/hero";

import products from "../data/products";
import categories from "../data/categories";

function DealHome({ navigate }) {
  const dealProducts = products
    .filter((product) => product.discount >= 20)
    .slice(0, 8);

  return (
    <main>

      {/* Hero */}

      <Hero />


      {/* Deal Categories */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Shop By Deals
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Find Your Best Deal
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Explore products and save more on every purchase.
          </p>
        </div>


        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

          <button
            onClick={() =>
              navigate("products", { flashSale: true })
            }
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              ⚡
            </div>

            <h3 className="mt-4 font-black">
              Flash Sale
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Limited-time offers
            </p>

            <span className="mt-4 block text-xs font-bold text-red-500">
              Shop Now →
            </span>
          </button>


          <button
            onClick={() =>
              navigate("products", { maxPrice: 999 })
            }
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              ₹
            </div>

            <h3 className="mt-4 font-black">
              Under ₹999
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Budget-friendly products
            </p>

            <span className="mt-4 block text-xs font-bold text-red-500">
              Shop Now →
            </span>
          </button>


          <button
            onClick={() =>
              navigate("products", {
                category: "fashion",
              })
            }
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              ✦
            </div>

            <h3 className="mt-4 font-black">
              Fashion Deals
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Trending styles
            </p>

            <span className="mt-4 block text-xs font-bold text-red-500">
              Shop Now →
            </span>
          </button>


          <button
            onClick={() =>
              navigate("products", {
                category: "electronics",
              })
            }
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              ◈
            </div>

            <h3 className="mt-4 font-black">
              Gadget Deals
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Smart gadgets & more
            </p>

            <span className="mt-4 block text-xs font-bold text-red-500">
              Shop Now →
            </span>
          </button>

        </div>

      </section>


      {/* Top Deals */}

      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >

        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Top Deals
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Deals You Don't Want To Miss
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Grab these offers before they are gone.
            </p>
          </div>


          <button
            onClick={() =>
              navigate("products", { deal: true })
            }
            className="hidden text-sm font-bold text-red-500 sm:block"
          >
            View All →
          </button>

        </div>


        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {dealProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>


        <button
          onClick={() =>
            navigate("products", { deal: true })
          }
          className="mt-6 w-full rounded-xl border border-gray-200 bg-white py-3 text-sm font-bold text-gray-800 hover:bg-gray-50 sm:hidden"
        >
          View All Deals →
        </button>

      </section>


      {/* Deal Spotlight */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-[#fff4ef] p-6 sm:p-8">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Deal Spotlight
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Shop By Category
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Find great offers across your favourite categories.
          </p>


          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  navigate("products", {
                    category: category.id,
                  })
                }
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="h-36 overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                </div>


                <div className="p-4">

                  <h3 className="font-black">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs text-red-500">
                    Explore Deals →
                  </p>

                </div>

              </button>
            ))}

          </div>

        </div>

      </section>


      {/* Savings Banner */}

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-gray-900 p-7 text-white sm:flex-row sm:items-center sm:p-10">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              Limited Time
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              More Savings. More Shopping.
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Don't miss today's best offers.
            </p>

          </div>


          <button
            onClick={() =>
              navigate("products", { deal: true })
            }
            className="rounded-xl bg-red-500 px-6 py-3 text-sm font-bold text-white hover:bg-red-600"
          >
            Explore All Deals →
          </button>

        </div>

      </section>

    </main>
  );
}

export default DealHome;