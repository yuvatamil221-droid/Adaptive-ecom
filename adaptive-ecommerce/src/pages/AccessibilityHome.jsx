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


      {/* Quick Access */}

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


      {/* Recommended Products */}

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


      {/* Accessibility Settings */}

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

        <div
          className={`rounded-3xl border-4 border-black p-7 sm:p-10 ${
            highContrast
              ? "bg-gray-100 text-black"
              : "bg-gray-100 text-black"
          }`}
        >

          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Accessibility
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Customize Your Experience
          </h2>

          <p className="mt-2 font-medium text-gray-700">
            Adjust the interface to make shopping easier and more comfortable.
          </p>


          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">


            {/* High Contrast */}

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`rounded-2xl border-2 border-black p-5 text-left ${
                highContrast
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                High Contrast
              </h3>

              <p className="mt-2 font-medium">
                {highContrast
                  ? "High contrast is ON."
                  : "Make important text and borders easier to see."}
              </p>

            </button>


            {/* Large Text */}

            <button
              onClick={() => setLargeText(!largeText)}
              className={`rounded-2xl border-2 border-black p-5 text-left ${
                largeText
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                Large Text
              </h3>

              <p className="mt-2 font-medium">
                {largeText
                  ? "Large text is ON."
                  : "Increase text size across the application."}
              </p>

            </button>


            {/* Larger Controls */}

            <button
              onClick={() => setLargerButtons(!largerButtons)}
              className={`rounded-2xl border-2 border-black p-5 text-left ${
                largerButtons
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                Larger Controls
              </h3>

              <p className="mt-2 font-medium">
                {largerButtons
                  ? "Larger controls are ON."
                  : "Make buttons and controls easier to select."}
              </p>

            </button>


            {/* Reduced Motion */}

            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`rounded-2xl border-2 border-black p-5 text-left ${
                reducedMotion
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                Reduced Motion
              </h3>

              <p className="mt-2 font-medium">
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
              className={`rounded-2xl border-2 border-black p-5 text-left ${
                layout === "compact"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <h3 className="text-lg font-black">
                Simple Layout
              </h3>

              <p className="mt-2 font-medium">
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