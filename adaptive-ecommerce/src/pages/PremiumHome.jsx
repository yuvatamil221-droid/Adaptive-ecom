import Product from "../components/product";

import products from "../data/products";

function PremiumHome({ navigate }) {
  const premiumProducts = products
    .filter((product) => product.price >= 3000)
    .slice(0, 8);

  const premiumCategories = [
    {
      name: "Luxury Electronics",
      description: "Premium technology for your lifestyle",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      filter: "electronics",
    },
    {
      name: "Premium Fashion",
      description: "Refined styles and modern essentials",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      filter: "fashion",
    },
    {
      name: "Beauty Collection",
      description: "Elevated beauty and self-care",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
      filter: "beauty",
    },
  ];

  return (
    <main className="bg-[#f7f5f0] text-stone-900">

      {/* Premium Hero */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid overflow-hidden rounded-[28px] bg-[#171512] md:grid-cols-2">

          <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a96e]">
              The Premium Edit
            </p>

            <h1 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
              Designed for
              <br />
              <span className="font-serif italic">
                Exceptional Living.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-300 sm:text-base">
              Discover carefully selected products, refined designs,
              and premium collections made for a sophisticated lifestyle.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-7 w-fit rounded-xl bg-[#c9a96e] px-6 py-3.5 text-sm font-bold text-black hover:bg-[#d8bb82]"
            >
              Explore Collection →
            </button>

          </div>


          <div className="relative min-h-[350px]">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85"
              alt="Premium collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

          </div>

        </div>

      </section>


      {/* Premium Categories */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8874f]">
            Curated For You
          </p>

          <h2 className="mt-2 text-3xl font-light sm:text-4xl">
            Explore Premium Categories
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">
            A carefully selected range of products chosen for quality,
            design, and everyday luxury.
          </p>
        </div>


        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">

          {premiumCategories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                navigate("products", {
                  category: category.filter,
                })
              }
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-64 overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-stone-500">
                  {category.description}
                </p>

                <span className="mt-4 block text-xs font-bold text-[#a8874f]">
                  Discover →
                </span>

              </div>

            </button>
          ))}

        </div>

      </section>


      {/* Featured Brands */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-white p-7 sm:p-10">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8874f]">
              Featured Brands
            </p>

            <h2 className="mt-2 text-3xl font-light">
              Names Worth Knowing
            </h2>

          </div>


          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

            <button
              onClick={() =>
                navigate("products", { brand: "Apple" })
              }
              className="rounded-xl border border-stone-200 p-6 text-center hover:bg-stone-50"
            >
              <p className="text-xl font-bold">
                Apple
              </p>
            </button>


            <button
              onClick={() =>
                navigate("products", { brand: "Sony" })
              }
              className="rounded-xl border border-stone-200 p-6 text-center hover:bg-stone-50"
            >
              <p className="text-xl font-bold">
                Sony
              </p>
            </button>


            <button
              onClick={() =>
                navigate("products", { brand: "Nike" })
              }
              className="rounded-xl border border-stone-200 p-6 text-center hover:bg-stone-50"
            >
              <p className="text-xl font-bold">
                Nike
              </p>
            </button>


            <button
              onClick={() =>
                navigate("products", { brand: "Samsung" })
              }
              className="rounded-xl border border-stone-200 p-6 text-center hover:bg-stone-50"
            >
              <p className="text-xl font-bold">
                Samsung
              </p>
            </button>

          </div>

        </div>

      </section>


      {/* Premium Products */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a8874f]">
              Premium Selection
            </p>

            <h2 className="mt-2 text-3xl font-light sm:text-4xl">
              Featured Products
            </h2>

          </div>


          <button
            onClick={() => navigate("products")}
            className="hidden text-sm font-bold text-[#a8874f] sm:block"
          >
            View All →
          </button>

        </div>


        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {premiumProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}

        </div>

      </section>


      {/* Premium Collection Banner */}

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-[#171512] p-8 text-white sm:p-12">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a96e]">
              Exclusive Collection
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Less Noise.
              <br />
              <span className="font-serif italic">
                More Elegance.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-300">
              Explore products selected for customers who value
              quality, timeless design, and a refined shopping experience.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-7 rounded-xl border border-[#c9a96e] px-6 py-3 text-sm font-bold text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black"
            >
              Explore Products →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default PremiumHome;