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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-gray-900">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"
            alt="Discover new products"
            className="h-[330px] w-full object-cover opacity-70 sm:h-[480px]"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center">

            <div className="max-w-xl px-5 text-white sm:px-12">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
                Discover Something New
              </p>

              <h1 className="mt-3 text-2xl font-black leading-tight sm:mt-4 sm:text-5xl">
                Explore.
                <br />
                Discover.
                <br />
                Find Your Style.
              </h1>

              <p className="mt-3 max-w-lg text-xs leading-5 text-white/80 sm:mt-5 sm:text-base sm:leading-7">
                Discover trending products, new arrivals, popular
                categories, and products you may have never seen before.
              </p>

              <button
                onClick={() => navigate("products")}
                className="mt-5 rounded-xl bg-white px-5 py-3 text-xs font-bold text-gray-900 hover:bg-gray-100 sm:mt-7 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Start Exploring →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Explore Categories */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 sm:text-xs sm:tracking-[0.2em]">
          Explore
        </p>

        <h2 className="mt-2 text-2xl font-black sm:text-3xl">
          Browse Categories
        </h2>

        <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
          Find something interesting across different categories.
        </p>


        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">

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

              <div className="h-28 overflow-hidden sm:h-40">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-3 sm:p-4">

                <h3 className="text-sm font-black sm:text-base">
                  {category.name}
                </h3>

                <p className="mt-1 text-[10px] text-gray-500 sm:mt-2 sm:text-xs">
                  Discover →
                </p>

              </div>

            </button>
          ))}

        </div>

      </section>


      {/* Trending Now */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 sm:text-xs sm:tracking-[0.2em]">
              Trending Now
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              What's Trending
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
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


        {/* Mobile: 2 columns | Desktop: 4 columns */}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="grid overflow-hidden rounded-3xl bg-purple-50 md:grid-cols-2">

          <div className="flex flex-col justify-center p-5 sm:p-10">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 sm:text-xs">
              Discover More
            </p>

            <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              There Is Always Something New
            </h2>

            <p className="mt-3 text-xs leading-5 text-gray-600 sm:mt-4 sm:text-sm sm:leading-7">
              Explore new styles, fresh products, and interesting
              finds selected from across our store.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-5 w-fit rounded-xl bg-purple-600 px-5 py-3 text-xs font-bold text-white hover:bg-purple-700 sm:mt-6 sm:px-6 sm:text-sm"
            >
              Explore Products →
            </button>

          </div>


          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
            alt="Shopping discovery"
            className="h-[220px] w-full object-cover md:h-full"
          />

        </div>

      </section>


      {/* New Arrivals */}

      <section className="mx-auto max-w-7xl px-4 py-6 pb-8 sm:px-6 sm:py-8 sm:pb-12 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 sm:text-xs sm:tracking-[0.2em]">
              Fresh Finds
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              New Arrivals
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
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


        {/* Mobile: 2 columns | Desktop: 4 columns */}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

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

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">

        <div className="rounded-3xl bg-gray-900 p-5 text-center text-white sm:p-12">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300 sm:text-xs sm:tracking-[0.25em]">
            Keep Exploring
          </p>

          <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-4xl">
            Your Next Favourite Product Is Waiting
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-400 sm:mt-3 sm:text-sm sm:leading-6">
            Browse our complete collection and discover products
            that match your interests.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-5 rounded-xl bg-white px-5 py-3 text-xs font-bold text-gray-900 hover:bg-gray-100 sm:mt-6 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Explore Everything →
          </button>

        </div>

      </section>

    </main>
  );
}

export default ExplorerHome;