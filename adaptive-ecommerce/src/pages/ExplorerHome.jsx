import Product from "../components/product";

import products from "../data/products";
import categories from "../data/categories";

function ExplorerHome({ navigate }) {
  const trendingProducts = products
    .filter((product) => product.trending)
    .slice(0, 8);

  const newProducts = products
    .filter((product) => product.newArrival)
    .slice(0, 8);

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* Explorer Hero */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-gray-900">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"
            alt="Discover new products"
            className="h-[420px] w-full object-cover opacity-70 sm:h-[480px]"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center">

            <div className="max-w-xl px-7 text-white sm:px-12">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Discover Something New
              </p>

              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Explore.
                <br />
                Discover.
                <br />
                Find Your Style.
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Discover trending products, new arrivals, popular
                categories, and products you may have never seen before.
              </p>

              <button
                onClick={() => navigate("products")}
                className="mt-7 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100"
              >
                Start Exploring →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Explore Categories */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
          Explore
        </p>

        <h2 className="mt-2 text-3xl font-black">
          Browse Categories
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Find something interesting across different categories.
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
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-40 overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-4">

                <h3 className="font-black">
                  {category.name}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  Discover →
                </p>

              </div>

            </button>
          ))}

        </div>

      </section>


      {/* Trending Now */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              Trending Now
            </p>

            <h2 className="mt-2 text-3xl font-black">
              What's Trending
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Popular products people are exploring right now.
            </p>

          </div>

          <button
            onClick={() =>
              navigate("products", { trending: true })
            }
            className="hidden text-sm font-bold text-purple-600 sm:block"
          >
            View All →
          </button>

        </div>


        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {trendingProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>


      {/* Discovery Banner */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid overflow-hidden rounded-3xl bg-purple-50 md:grid-cols-2">

          <div className="flex flex-col justify-center p-7 sm:p-10">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              Discover More
            </p>

            <h2 className="mt-3 text-3xl font-black">
              There Is Always Something New
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Explore new styles, fresh products, and interesting
              finds selected from across our store.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-6 w-fit rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-700"
            >
              Explore Products →
            </button>

          </div>


          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
            alt="Shopping discovery"
            className="h-[300px] w-full object-cover md:h-full"
          />

        </div>

      </section>


      {/* New Arrivals */}

      <section className="mx-auto max-w-7xl px-4 py-8 pb-12 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              Fresh Finds
            </p>

            <h2 className="mt-2 text-3xl font-black">
              New Arrivals
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Check out the latest additions to our store.
            </p>

          </div>

          <button
            onClick={() =>
              navigate("products", { newArrivals: true })
            }
            className="hidden text-sm font-bold text-purple-600 sm:block"
          >
            See All →
          </button>

        </div>


        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {newProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>


      {/* Final Discovery CTA */}

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-gray-900 p-8 text-center text-white sm:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
            Keep Exploring
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Your Next Favourite Product Is Waiting
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Browse our complete collection and discover products
            that match your interests.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-6 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100"
          >
            Explore Everything →
          </button>

        </div>

      </section>

    </main>
  );
}

export default ExplorerHome;