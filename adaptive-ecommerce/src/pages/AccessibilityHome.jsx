import { useContext } from "react";
import Product from "../components/product";
import products from "../data/products";
import categories from "../data/categories";
import { UIConfigContext } from "../context/UIConfigContext";

function AccessibilityHome({ navigate }) {
  const {
    highContrast,
    setHighContrast,
    largerButtons,
    setLargerButtons,
    layout,
    setLayout,
  } = useContext(UIConfigContext);

  const accessibilityProducts = products.slice(0, 8);

  return (
    <main className="bg-white text-black">

      {/* Accessibility Hero */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="rounded-3xl border-4 border-black bg-yellow-300 p-8 sm:p-12">

          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Accessible Shopping
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Simple Shopping.
            <br />
            Clear Choices.
          </h1>

          <p className="mt-5 max-w-xl text-base font-bold leading-7">
            Browse products with a clear layout, large controls,
            strong contrast, and simple interactions.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-7 rounded-xl border-4 border-black bg-black px-7 py-4 text-base font-black text-white hover:bg-gray-800"
          >
            Start Shopping →
          </button>

        </div>

      </section>


      {/* Quick Actions */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <p className="text-sm font-black uppercase tracking-[0.2em]">
          Quick Access
        </p>

        <h2 className="mt-2 text-3xl font-black">
          What Would You Like To Do?
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <button
            onClick={() => navigate("products")}
            className="min-h-32 rounded-2xl border-4 border-black bg-white p-6 text-left hover:bg-gray-100"
          >
            <div className="text-3xl">
              🛍️
            </div>

            <h3 className="mt-4 text-lg font-black">
              Shop Products
            </h3>

            <p className="mt-2 font-medium">
              Browse all products
            </p>
          </button>


          <button
            onClick={() => navigate("wishlist")}
            className="min-h-32 rounded-2xl border-4 border-black bg-white p-6 text-left hover:bg-gray-100"
          >
            <div className="text-3xl">
              ♡
            </div>

            <h3 className="mt-4 text-lg font-black">
              Wishlist
            </h3>

            <p className="mt-2 font-medium">
              View saved products
            </p>
          </button>


          <button
            onClick={() => navigate("cart")}
            className="min-h-32 rounded-2xl border-4 border-black bg-white p-6 text-left hover:bg-gray-100"
          >
            <div className="text-3xl">
              🛒
            </div>

            <h3 className="mt-4 text-lg font-black">
              Cart
            </h3>

            <p className="mt-2 font-medium">
              View your cart
            </p>
          </button>


          <button
            onClick={() => navigate("orders")}
            className="min-h-32 rounded-2xl border-4 border-black bg-white p-6 text-left hover:bg-gray-100"
          >
            <div className="text-3xl">
              📦
            </div>

            <h3 className="mt-4 text-lg font-black">
              Orders
            </h3>

            <p className="mt-2 font-medium">
              Check your orders
            </p>
          </button>

        </div>

      </section>


      {/* Categories */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <p className="text-sm font-black uppercase tracking-[0.2em]">
          Categories
        </p>

        <h2 className="mt-2 text-3xl font-black">
          Explore Categories
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                navigate("products", {
                  category: category.id,
                })
              }
              className="overflow-hidden rounded-2xl border-4 border-black bg-white text-left hover:bg-gray-100"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">

                <h3 className="text-lg font-black">
                  {category.name}
                </h3>

                <p className="mt-2 font-bold">
                  Explore →
                </p>

              </div>

            </button>
          ))}

        </div>

      </section>


      {/* Products */}

      <section className="mx-auto max-w-7xl px-4 py-8 pb-12 sm:px-6 lg:px-8">

        <p className="text-sm font-black uppercase tracking-[0.2em]">
          Recommended
        </p>

        <h2 className="mt-2 text-3xl font-black">
          Products For You
        </h2>

        <p className="mt-2 font-medium text-gray-700">
          Clear product information and easy-to-use actions.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {accessibilityProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>


      {/* Accessibility Information */}

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

        <div
          className={`rounded-3xl border-4 border-black p-7 sm:p-10 ${
            highContrast
              ? "bg-black text-white"
              : "bg-gray-100 text-black"
          }`}
        >

          <h2 className="text-2xl font-black">
            Accessible Experience
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* High Contrast */}

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`rounded-2xl border-2 border-current p-5 text-left ${
                highContrast
                  ? "bg-white text-black"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                High Contrast
              </h3>

              <p className="mt-2 font-medium">
                {highContrast
                  ? "High contrast is ON."
                  : "Strong contrast makes important content easier to see."}
              </p>

            </button>


            {/* Larger Controls */}

            <button
              onClick={() => setLargerButtons(!largerButtons)}
              className={`rounded-2xl border-2 border-current p-5 text-left ${
                largerButtons
                  ? "bg-white text-black"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                Larger Controls
              </h3>

              <p className="mt-2 font-medium">
                {largerButtons
                  ? "Larger controls are ON."
                  : "Buttons and interactive areas are easy to select."}
              </p>

            </button>


            {/* Simple Layout */}

            <button
              onClick={() =>
                setLayout(
                  layout === "compact"
                    ? "comfortable"
                    : "compact"
                )
              }
              className={`rounded-2xl border-2 border-current p-5 text-left ${
                layout === "compact"
                  ? "bg-white text-black"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                Simple Layout
              </h3>

              <p className="mt-2 font-medium">
                {layout === "compact"
                  ? "Simple layout is ON."
                  : "Important actions and information are easy to find."}
              </p>

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default AccessibilityHome;