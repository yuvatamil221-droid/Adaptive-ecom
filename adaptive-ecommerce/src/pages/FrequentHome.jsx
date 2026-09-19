import Product from "../components/product";

import products from "../data/products";

function FrequentHome({ navigate }) {
  const recentProducts = products.slice(0, 4);

  const recommendedProducts = products
    .filter((product) => product.rating >= 4.5)
    .slice(4, 8);

  return (
    <main className="bg-gray-50">

      {/* Welcome Section */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 p-8 text-white sm:p-10">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            Welcome Back
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Shop Smarter. Shop Faster.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
            Quickly access your orders, wishlist, and favourite products.
            Everything you need is just a click away.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50"
          >
            Quick Shop →
          </button>

        </div>

      </section>


      {/* Quick Actions */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Quick Access
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Everything You Need
          </h2>
        </div>


        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

          <button
            onClick={() => navigate("orders")}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              📦
            </div>

            <h3 className="mt-4 font-black">
              My Orders
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Track your purchases
            </p>

            <span className="mt-4 block text-xs font-bold text-blue-600">
              View Orders →
            </span>
          </button>


          <button
            onClick={() => navigate("products")}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              🔄
            </div>

            <h3 className="mt-4 font-black">
              Buy Again
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Shop your favourites
            </p>

            <span className="mt-4 block text-xs font-bold text-blue-600">
              Shop Now →
            </span>
          </button>


          <button
            onClick={() => navigate("wishlist")}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              ♡
            </div>

            <h3 className="mt-4 font-black">
              Wishlist
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Your saved products
            </p>

            <span className="mt-4 block text-xs font-bold text-blue-600">
              View Wishlist →
            </span>
          </button>


          <button
            onClick={() => navigate("cart")}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl">
              🛍️
            </div>

            <h3 className="mt-4 font-black">
              My Cart
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Continue shopping
            </p>

            <span className="mt-4 block text-xs font-bold text-blue-600">
              Open Cart →
            </span>
          </button>

        </div>

      </section>


      {/* Recently Purchased */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Your Shopping
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Recently Purchased
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Products you may want to buy again.
            </p>

          </div>

          <button
            onClick={() => navigate("products")}
            className="hidden text-sm font-bold text-blue-600 sm:block"
          >
            Shop More →
          </button>

        </div>


        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {recentProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>


      {/* Personalized Shortcuts */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Made For You
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Personalized Shopping
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Discover products selected around your shopping interests.
            </p>

          </div>


          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">

            <button
              onClick={() =>
                navigate("products", {
                  category: "electronics",
                })
              }
              className="rounded-2xl bg-blue-50 p-6 text-left hover:bg-blue-100"
            >
              <span className="text-3xl">
                🎧
              </span>

              <h3 className="mt-4 font-black">
                Your Electronics
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Find useful gadgets and devices.
              </p>

              <span className="mt-4 block text-xs font-bold text-blue-600">
                Explore →
              </span>
            </button>


            <button
              onClick={() =>
                navigate("products", {
                  category: "fashion",
                })
              }
              className="rounded-2xl bg-blue-50 p-6 text-left hover:bg-blue-100"
            >
              <span className="text-3xl">
                👕
              </span>

              <h3 className="mt-4 font-black">
                Your Fashion
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Discover styles you may like.
              </p>

              <span className="mt-4 block text-xs font-bold text-blue-600">
                Explore →
              </span>
            </button>


            <button
              onClick={() =>
                navigate("products", {
                  category: "home",
                })
              }
              className="rounded-2xl bg-blue-50 p-6 text-left hover:bg-blue-100"
            >
              <span className="text-3xl">
                🏠
              </span>

              <h3 className="mt-4 font-black">
                Your Home
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Discover useful home products.
              </p>

              <span className="mt-4 block text-xs font-bold text-blue-600">
                Explore →
              </span>
            </button>

          </div>

        </div>

      </section>


      {/* Recommended */}

      <section className="mx-auto max-w-7xl px-4 py-8 pb-12 sm:px-6 lg:px-8">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Recommended
          </p>

          <h2 className="mt-2 text-3xl font-black">
            You May Also Like
          </h2>

        </div>


        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {recommendedProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default FrequentHome;