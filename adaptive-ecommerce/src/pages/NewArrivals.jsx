import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Product from "../components/product";

import products from "../data/products";

function NewArrivals({ navigate, goBack }) {

  const newProducts = products.filter(
  (product) =>
    product.newArrival === true &&
    product.id >= 71 &&
    product.id <= 130
);

  const fashionProducts = newProducts
    .filter(
      (product) => product.category === "fashion"
    )
    .slice(0, 4);

  const electronicsProducts = newProducts
    .filter(
      (product) => product.category === "electronics"
    )
    .slice(0, 4);

  const featuredBrands = [
    "Apple",
    "Nike",
    "Samsung",
    "Milton",
    "boAt",
    "Fossil",
    "Canon",
    "Anker",
    "Logitech",
    "Sony",
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7] text-gray-900">

      {/* HEADER */}
      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8">

        {/* BACK */}
        <button
          onClick={goBack}
          className="mb-5 text-2xl font-bold text-gray-700 transition hover:text-black"
          aria-label="Go back"
        >
          ←
        </button>


        {/* =========================================
            HERO
        ========================================= */}

        <section className="relative overflow-hidden rounded-3xl bg-[#eee5d8]">

          <div className="grid min-h-[430px] lg:grid-cols-2">

            {/* LEFT */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-600 new-arrivals-label">
                New Arrivals
              </p>

              <h1 className="new-arrivals-description new-arrivals-title mt-5 max-w-xl font-serif text-5xl font-semibold leading-[0.95] text-[#17202d] sm:text-6xl">
                Discover
                <br />
                What's New
              </h1>

              <p className=" new-arrivals-description mt-6 max-w-lg text-base leading-7 text-gray-700">
                The latest premium products from top brands,
                curated for your modern lifestyle.
              </p>

              <button
                onClick={() => {
                  document
                    .getElementById("new-arrival-products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="new-arrivals-button mt-7 w-fit rounded-full bg-[#111b2b] px-6 py-3 text-sm font-bold text-white transition hover:bg-black"
              >
                Explore New Arrivals →
              </button>

            </div>


            {/* RIGHT VISUAL */}
            <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-[#cdb69b] via-[#dfc9ae] to-[#8c7158]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.45),transparent_35%)]" />

              {/* Decorative marble shapes */}
              <div className="absolute right-[-60px] top-[-50px] h-72 w-72 rounded-full border-[45px] border-[#f0e4d4]/80" />

              <div className="absolute bottom-[-80px] left-10 h-52 w-52 rounded-full bg-[#e8d7c0]/50" />


              {/* PRODUCT VISUALS */}

              <div className="absolute left-[12%] top-[38%] flex h-28 w-28 -rotate-6 items-center justify-center rounded-3xl bg-[#d8a45c] shadow-2xl sm:h-36 sm:w-36">
                <span className="text-5xl">⌚</span>
              </div>


              <div className="absolute left-[37%] top-[18%] flex h-56 w-40 items-center justify-center rounded-[2rem] bg-[#d8a477] shadow-2xl sm:h-64 sm:w-48">
                <div className="rounded-[1.5rem] bg-black p-3">
                  <div className="flex h-40 w-20 items-center justify-center rounded-xl bg-[#17202d] text-2xl text-white sm:h-48 sm:w-24">
                    
                  </div>
                </div>
              </div>


              <div className="absolute right-[22%] bottom-[12%] flex h-36 w-52 items-center justify-center rounded-[4rem] bg-[#f3eee5] shadow-2xl">
                <div className="h-20 w-32 rounded-full border-4 border-gray-300" />
              </div>


              <div className="absolute right-[5%] top-[28%] flex h-44 w-24 items-center justify-center rounded-xl bg-[#d6ad78] shadow-xl">
                <div className="h-28 w-16 rounded-lg bg-[#f1e8d9]" />
              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            FEATURED BRANDS
        ========================================= */}

       

        {/* =========================================
            EDITORIAL SECTIONS
        ========================================= */}

        <section className="mt-6 grid gap-5 lg:grid-cols-2">


          {/* FASHION */}
          


          {/* ELECTRONICS */}
          

        </section>


        {/* =========================================
            NEW ARRIVALS PRODUCTS
        ========================================= */}

        <section
          id="new-arrival-products"
          className="mt-10"
        >

          <div className="flex items-end justify-between">

            <div>

              <p className="new-arrivals-collection-label text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
  LATEST COLLECTION
</p>

<h2 className="new-arrivals-collection-title mt-2 font-serif text-4xl font-semibold text-[#17202d]">
  New Arrivals
</h2>

<p className="new-arrivals-collection-description mt-2 text-gray-500">
  Latest premium products, just for you.
</p>

            </div>


           

          </div>


          {/* PRODUCT GRID */}

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

            {newProducts
              .slice(0, 8)
              .map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  navigate={navigate}
                />
              ))}

          </div>

        </section>


        {/* =========================================
            FASHION PRODUCTS
        ========================================= */}

        {fashionProducts.length > 0 && (

          <section
            id="fashion-products"
            className="mt-12"
          >

            <div className="mb-5">

              <p className="new-season-label text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
  New Season
</p>

<h2 className="new-season-title mt-2 font-serif text-3xl font-semibold">
  Fashion Collection
</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

              {fashionProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  navigate={navigate}
                />
              ))}

            </div>

          </section>

        )}


        {/* =========================================
            ELECTRONICS PRODUCTS
        ========================================= */}

        {electronicsProducts.length > 0 && (

          <section className="mt-12">

            <div className="mb-5">

             <p className="premium-tech-label text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
  Premium Tech
</p>

<h2 className="premium-tech-title mt-2 font-serif text-3xl font-semibold">
  Electronics Collection
</h2>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

              {electronicsProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  navigate={navigate}
                />
              ))}

            </div>

          </section>

        )}

      </main>


      <Footer navigate={navigate} />

    </div>
  );
}

export default NewArrivals;