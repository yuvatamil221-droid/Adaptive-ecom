import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Product from "../components/product";
import products from "../data/products";

function DealHome({ navigate }) {
  const { theme } = useContext(ThemeContext);

  // Flash Sale - maximum 10 products
  const flashSaleProducts = products
    .filter((product) => product.flashSale)
    .slice(0, 10);

  // All Deals - maximum 10 products
  const dealProducts = products
    .filter((product) => product.discount >= 20)
    .slice(0, 10);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* =========================
          DEAL HUNTER HERO
      ========================== */}

      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-red-700 shadow-xl">

          {/* Banner Image */}
          <img
            src={`${import.meta.env.BASE_URL}deal-banner.png`}
            alt="Exclusive Deals Collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Text */}
          <div className="relative z-10 flex min-h-[420px] items-center">
            <div className="max-w-xl px-6 py-14 sm:px-10 lg:px-16">

              <div className="mb-5 inline-flex rounded-full bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                🔥 Deal Hunter
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Exclusive Deals
                <br />
                Collection
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-white sm:text-lg">
                Save more on your favourite products with limited-time offers
                and top brands.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  ● Big Discounts
                </span>

                <span className="rounded-full bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  ● Limited Time Offers
                </span>

                <span className="rounded-full bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  ● Top Brands
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FLASH SALE
      ========================== */}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
              ⚡ LIMITED TIME
            </div>

            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Flash Sale
            </h2>

            <p
              className={`mt-2 ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              Grab the best deals before they are gone.
            </p>
          </div>

          <button
  onClick={() => {
    sessionStorage.setItem(
      "activeNavigation",
      "Flash Sale"
    );

    navigate("products", {
      flashSale: true,
    });
  }}
  className="shrink-0 text-sm font-bold text-red-600 hover:text-red-700"
>
  View All →
</button>
        </div>

        {flashSaleProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5">
            {flashSaleProducts.map((product) => (
              <Product
  key={product.id}
  product={product}
  navigate={navigate}
/>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
            <p className="text-gray-500">
              No flash sale products available.
            </p>
          </div>
        )}

      </section>

      {/* =========================
          ALL DEALS COLLECTION
      ========================== */}

      <section
        className={
          theme === "dark"
            ? "bg-gray-900"
            : "bg-white"
        }
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                💰 BEST SAVINGS
              </div>

              <h2 className="text-3xl font-extrabold sm:text-4xl">
                All Deals Collection
              </h2>

              <p
                className={`mt-2 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Discover products with great discounts across categories.
              </p>
            </div>

            <button
  onClick={() => {
    sessionStorage.setItem(
      "activeNavigation",
      "Deals"
    );

    navigate("products", {
      deal: true,
    });
  }}
  className="shrink-0 text-sm font-bold text-red-600 hover:text-red-700"
>
  View All →
</button>
          </div>

          {dealProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {dealProducts.map((product) => (
                <Product
  key={product.id}
  product={product}
  navigate={navigate}
/>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
              <p className="text-gray-500">
                No deals available.
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default DealHome;