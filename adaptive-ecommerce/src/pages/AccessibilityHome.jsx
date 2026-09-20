import { useContext } from "react";
import Product from "../components/product";
import products from "../data/products";
import { UIConfigContext } from "../context/UIConfigContext";

function AccessibilityHome({ navigate }) {
  const {
    highContrast,
    setHighContrast,
    largerButtons,
    setLargerButtons,
    layout,
    setLayout,
    largeText,
    setLargeText,
    reducedMotion,
    setReducedMotion,
  } = useContext(UIConfigContext);

  const accessibilityProducts = products.slice(0, 8);

  return (
    <main className="bg-white text-black">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="rounded-3xl border-4 border-black bg-yellow-300 p-5 sm:p-12">

          <p className="text-xs font-black uppercase tracking-[0.2em] sm:text-sm">
            Accessible Shopping
          </p>

          <h1 className="mt-3 text-2xl font-black leading-tight sm:mt-4 sm:text-5xl">
            Simple Shopping.
            <br />
            Clear Choices.
          </h1>

          <p className="mt-4 max-w-xl text-sm font-bold leading-6 sm:mt-5 sm:text-base sm:leading-7">
            Browse products with a clear layout, large controls,
            strong contrast, and simple interactions.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-5 rounded-xl border-4 border-black bg-black px-5 py-3 text-sm font-black text-white hover:bg-gray-800 sm:mt-7 sm:px-7 sm:py-4 sm:text-base"
          >
            Start Shopping →
          </button>

        </div>

      </section>


      {/* Quick Access */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <p className="text-xs font-black uppercase tracking-[0.2em] sm:text-sm">
          Quick Access
        </p>

        <h2 className="mt-2 text-2xl font-black sm:text-3xl">
          What Would You Like To Do?
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {/* Shop Products */}

          <button
            onClick={() => navigate("products")}
            className="min-h-28 rounded-2xl border-4 border-black bg-white p-4 text-left hover:bg-gray-100 sm:min-h-32 sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              🛍️
            </div>

            <h3 className="mt-3 text-base font-black sm:mt-4 sm:text-lg">
              Shop Products
            </h3>

            <p className="mt-1 text-xs font-medium sm:mt-2 sm:text-sm">
              Browse all products
            </p>
          </button>


          {/* Wishlist */}

          <button
            onClick={() => navigate("wishlist")}
            className="min-h-28 rounded-2xl border-4 border-black bg-white p-4 text-left hover:bg-gray-100 sm:min-h-32 sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              ♡
            </div>

            <h3 className="mt-3 text-base font-black sm:mt-4 sm:text-lg">
              Wishlist
            </h3>

            <p className="mt-1 text-xs font-medium sm:mt-2 sm:text-sm">
              View saved products
            </p>
          </button>


          {/* Cart */}

          <button
            onClick={() => navigate("cart")}
            className="min-h-28 rounded-2xl border-4 border-black bg-white p-4 text-left hover:bg-gray-100 sm:min-h-32 sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              🛒
            </div>

            <h3 className="mt-3 text-base font-black sm:mt-4 sm:text-lg">
              Cart
            </h3>

            <p className="mt-1 text-xs font-medium sm:mt-2 sm:text-sm">
              View your cart
            </p>
          </button>


          {/* Orders */}

          <button
            onClick={() => navigate("orders")}
            className="min-h-28 rounded-2xl border-4 border-black bg-white p-4 text-left hover:bg-gray-100 sm:min-h-32 sm:p-6"
          >
            <div className="text-2xl sm:text-3xl">
              📦
            </div>

            <h3 className="mt-3 text-base font-black sm:mt-4 sm:text-lg">
              Orders
            </h3>

            <p className="mt-1 text-xs font-medium sm:mt-2 sm:text-sm">
              Check your orders
            </p>
          </button>

        </div>

      </section>


      {/* Recommended Products */}

      <section className="mx-auto max-w-7xl px-4 py-6 pb-8 sm:px-6 sm:py-8 sm:pb-12 lg:px-8">

        <p className="text-xs font-black uppercase tracking-[0.2em] sm:text-sm">
          Recommended
        </p>

        <h2 className="mt-2 text-2xl font-black sm:text-3xl">
          Products For You
        </h2>

        <p className="mt-1 text-sm font-medium text-gray-700 sm:mt-2">
          Clear product information and easy-to-use actions.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {accessibilityProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>


      {/* Accessibility Settings */}

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">

        <div
          className={`rounded-3xl border-4 border-black p-5 sm:p-10 ${
            highContrast
              ? "bg-gray-100 text-black"
              : "bg-gray-100 text-black"
          }`}
        >

          <p className="text-xs font-black uppercase tracking-[0.2em] sm:text-sm">
            Accessibility
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Customize Your Experience
          </h2>

          <p className="mt-1 text-sm font-medium text-gray-700 sm:mt-2">
            Adjust the interface to make shopping easier and more comfortable.
          </p>


          <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:gap-5 md:grid-cols-2">

            {/* High Contrast */}

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`rounded-2xl border-2 border-black p-4 text-left sm:p-5 ${
                highContrast
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-base font-black sm:text-lg">
                High Contrast
              </h3>

              <p className="mt-1 text-sm font-medium sm:mt-2">
                {highContrast
                  ? "High contrast is ON."
                  : "Make important text and borders easier to see."}
              </p>

            </button>


            {/* Large Text */}

            <button
              onClick={() => setLargeText(!largeText)}
              className={`rounded-2xl border-2 border-black p-4 text-left sm:p-5 ${
                largeText
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-base font-black sm:text-lg">
                Large Text
              </h3>

              <p className="mt-1 text-sm font-medium sm:mt-2">
                {largeText
                  ? "Large text is ON."
                  : "Increase text size across the application."}
              </p>

            </button>


            {/* Larger Controls */}

            <button
              onClick={() => setLargerButtons(!largerButtons)}
              className={`rounded-2xl border-2 border-black p-4 text-left sm:p-5 ${
                largerButtons
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-base font-black sm:text-lg">
                Larger Controls
              </h3>

              <p className="mt-1 text-sm font-medium sm:mt-2">
                {largerButtons
                  ? "Larger controls are ON."
                  : "Make buttons and controls easier to select."}
              </p>

            </button>


            {/* Reduced Motion */}

            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`rounded-2xl border-2 border-black p-4 text-left sm:p-5 ${
                reducedMotion
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-base font-black sm:text-lg">
                Reduced Motion
              </h3>

              <p className="mt-1 text-sm font-medium sm:mt-2">
                {reducedMotion
                  ? "Reduced motion is ON."
                  : "Reduce animations and transitions."}
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
              className={`rounded-2xl border-2 border-black p-4 text-left sm:p-5 ${
                layout === "compact"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-base font-black sm:text-lg">
                Simple Layout
              </h3>

              <p className="mt-1 text-sm font-medium sm:mt-2">
                {layout === "compact"
                  ? "Simple layout is ON."
                  : "Use a comfortable layout with more spacing."}
              </p>

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default AccessibilityHome;