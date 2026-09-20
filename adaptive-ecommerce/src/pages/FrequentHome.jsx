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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="rounded-3xl bg-blue-600 p-5 text-white sm:p-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-xs">
            Welcome Back
          </p>

          <h1 className="mt-2 text-2xl font-black sm:mt-3 sm:text-4xl">
            Shop Smarter. Shop Faster.
          </h1>

          <p className="mt-2 max-w-xl text-xs leading-5 text-blue-100 sm:mt-3 sm:text-sm sm:leading-6">
            Quickly access your orders, wishlist, and favourite products.
            Everything you need is just a click away.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-5 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-600 hover:bg-blue-50 sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
          >
            Quick Shop →
          </button>

        </div>

      </section>


      {/* Quick Actions */}

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
            Quick Access
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Everything You Need
          </h2>

        </div>


        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-4">

          {/* My Orders */}

          <button
            onClick={() => navigate("orders")}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              📦
            </div>

            <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
              My Orders
            </h3>

            <p className="mt-1 text-[10px] text-gray-500 sm:mt-2 sm:text-sm">
              Track your purchases
            </p>

            <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
              View Orders →
            </span>
          </button>


          {/* Buy Again */}

          <button
            onClick={() => navigate("products")}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              🔄
            </div>

            <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
              Buy Again
            </h3>

            <p className="mt-1 text-[10px] text-gray-500 sm:mt-2 sm:text-sm">
              Shop your favourites
            </p>

            <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
              Shop Now →
            </span>
          </button>


          {/* Wishlist */}

          <button
            onClick={() => navigate("wishlist")}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              ♡
            </div>

            <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
              Wishlist
            </h3>

            <p className="mt-1 text-[10px] text-gray-500 sm:mt-2 sm:text-sm">
              Your saved products
            </p>

            <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
              View Wishlist →
            </span>
          </button>


          {/* My Cart */}

          <button
            onClick={() => navigate("cart")}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              🛍️
            </div>

            <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
              My Cart
            </h3>

            <p className="mt-1 text-[10px] text-gray-500 sm:mt-2 sm:text-sm">
              Continue shopping
            </p>

            <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
              Open Cart →
            </span>
          </button>

        </div>

      </section>


      {/* Recently Purchased */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
              Your Shopping
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Recently Purchased
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
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


        {/* Mobile: 2 columns | Desktop: 4 columns */}

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-10">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
              Made For You
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Personalized Shopping
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
              Discover products selected around your shopping interests.
            </p>

          </div>


          <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:gap-4 md:grid-cols-3">

            {/* Electronics */}

            <button
              onClick={() =>
                navigate("products", {
                  category: "electronics",
                })
              }
              className="rounded-2xl bg-blue-50 p-4 text-left hover:bg-blue-100 sm:p-6"
            >
              <span className="text-2xl sm:text-3xl">
                🎧
              </span>

              <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
                Your Electronics
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                Find useful gadgets and devices.
              </p>

              <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
                Explore →
              </span>
            </button>


            {/* Fashion */}

            <button
              onClick={() =>
                navigate("products", {
                  category: "fashion",
                })
              }
              className="rounded-2xl bg-blue-50 p-4 text-left hover:bg-blue-100 sm:p-6"
            >
              <span className="text-2xl sm:text-3xl">
                👕
              </span>

              <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
                Your Fashion
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                Discover styles you may like.
              </p>

              <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
                Explore →
              </span>
            </button>


            {/* Home */}

            <button
              onClick={() =>
                navigate("products", {
                  category: "home",
                })
              }
              className="rounded-2xl bg-blue-50 p-4 text-left hover:bg-blue-100 sm:p-6"
            >
              <span className="text-2xl sm:text-3xl">
                🏠
              </span>

              <h3 className="mt-3 text-sm font-black sm:mt-4 sm:text-base">
                Your Home
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                Discover useful home products.
              </p>

              <span className="mt-3 block text-[10px] font-bold text-blue-600 sm:mt-4 sm:text-xs">
                Explore →
              </span>
            </button>

          </div>

        </div>

      </section>


      {/* Recommended */}

      <section className="mx-auto max-w-7xl px-4 py-6 pb-8 sm:px-6 sm:py-8 sm:pb-12 lg:px-8">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
            Recommended
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            You May Also Like
          </h2>

        </div>


        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

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