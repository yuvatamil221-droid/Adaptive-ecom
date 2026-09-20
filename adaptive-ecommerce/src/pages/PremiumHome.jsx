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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="grid overflow-hidden rounded-[24px] bg-[#171512] md:grid-cols-2">

          <div className="flex flex-col justify-center p-5 text-white sm:p-12 lg:p-16">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a96e] sm:text-xs sm:tracking-[0.3em]">
              The Premium Edit
            </p>

            <h1 className="mt-4 text-2xl font-light leading-tight sm:mt-5 sm:text-5xl">
              Designed for
              <br />
              <span className="font-serif italic">
                Exceptional Living.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-xs leading-6 text-stone-300 sm:mt-5 sm:text-base sm:leading-7">
              Discover carefully selected products, refined designs,
              and premium collections made for a sophisticated lifestyle.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-5 w-fit rounded-xl bg-[#c9a96e] px-5 py-3 text-xs font-bold text-black hover:bg-[#d8bb82] sm:mt-7 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Explore Collection →
            </button>

          </div>

          <div className="relative min-h-[230px] sm:min-h-[350px]">

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

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8874f] sm:text-xs sm:tracking-[0.25em]">
            Curated For You
          </p>

          <h2 className="mt-2 text-2xl font-light sm:text-4xl">
            Explore Premium Categories
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-5 text-stone-500 sm:mt-3 sm:text-sm sm:leading-6">
            A carefully selected range of products chosen for quality,
            design, and everyday luxury.
          </p>

        </div>


        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:gap-5 md:grid-cols-3">

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

              <div className="h-48 overflow-hidden sm:h-64">

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-4 sm:p-5">

                <h3 className="text-base font-bold sm:text-lg">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs leading-4 text-stone-500 sm:mt-2 sm:text-sm sm:leading-normal">
                  {category.description}
                </p>

                <span className="mt-2 block text-[10px] font-bold text-[#a8874f] sm:mt-4 sm:text-xs">
                  Discover →
                </span>

              </div>

            </button>
          ))}

        </div>

      </section>


      {/* Featured Brands */}

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">

        <div className="rounded-3xl bg-white p-5 sm:p-10">

          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8874f] sm:text-xs sm:tracking-[0.25em]">
              Featured Brands
            </p>

            <h2 className="mt-2 text-2xl font-light sm:text-3xl">
              Names Worth Knowing
            </h2>

          </div>


          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-4">

            <button
              onClick={() =>
                navigate("products", { brand: "Apple" })
              }
              className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 sm:p-6"
            >
              <p className="text-base font-bold sm:text-xl">
                Apple
              </p>
            </button>


            <button
              onClick={() =>
                navigate("products", { brand: "Sony" })
              }
              className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 sm:p-6"
            >
              <p className="text-base font-bold sm:text-xl">
                Sony
              </p>
            </button>


            <button
              onClick={() =>
                navigate("products", { brand: "Nike" })
              }
              className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 sm:p-6"
            >
              <p className="text-base font-bold sm:text-xl">
                Nike
              </p>
            </button>


            <button
              onClick={() =>
                navigate("products", { brand: "Samsung" })
              }
              className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 sm:p-6"
            >
              <p className="text-base font-bold sm:text-xl">
                Samsung
              </p>
            </button>

          </div>

        </div>

      </section>


      {/* Premium Products */}

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8874f] sm:text-xs sm:tracking-[0.25em]">
              Premium Selection
            </p>

            <h2 className="mt-2 text-2xl font-light sm:text-4xl">
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


        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

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

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-3 sm:px-6 sm:pb-12 sm:pt-4 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-[#171512] p-5 text-white sm:p-12">

          <div className="max-w-2xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a96e] sm:text-xs sm:tracking-[0.25em]">
              Exclusive Collection
            </p>

            <h2 className="mt-3 text-2xl font-light sm:mt-4 sm:text-4xl">
              Less Noise.
              <br />
              <span className="font-serif italic">
                More Elegance.
              </span>
            </h2>

            <p className="mt-3 text-xs leading-6 text-stone-300 sm:mt-4 sm:text-sm sm:leading-7">
              Explore products selected for customers who value
              quality, timeless design, and a refined shopping experience.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-5 rounded-xl border border-[#c9a96e] px-5 py-2.5 text-xs font-bold text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black sm:mt-7 sm:px-6 sm:py-3 sm:text-sm"
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