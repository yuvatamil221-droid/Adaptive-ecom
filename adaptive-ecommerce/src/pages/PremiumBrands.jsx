import Product from "../components/product";
import products from "../data/products";

function PremiumBrands({ navigate, goBack, filters }) {
  const brands = [
    {
      name: "Apple",
      logo: "https://cdn.simpleicons.org/apple/000000",
    },
    {
      name: "Samsung",
      logo: "https://cdn.simpleicons.org/samsung/1428A0",
    },
    {
      name: "Sony",
      logo: "https://cdn.simpleicons.org/sony/000000",
    },
    {
      name: "Nike",
      logo: "https://cdn.simpleicons.org/nike/000000",
    },
    {
      name: "Canon",
      logo: "https://cdn.simpleicons.org/canon/E60012",
    },
    {
      name: "boAt",
      logo: "https://cdn.simpleicons.org/boat/000000",
    },
    {
      name: "Fossil",
      logo: "https://cdn.simpleicons.org/fossil/000000",
    },
    {
      name: "Milton",
      logo: "https://cdn.simpleicons.org/milton/ED1C24",
    },
    {
      name: "Anker",
      logo: "https://cdn.simpleicons.org/anker/00AEEF",
    },
    {
      name: "Logitech",
      logo: "https://cdn.simpleicons.org/logitech/000000",
    },
  ];

  const selectedBrand = filters?.brand || "Apple";

  const selectedProducts = products.filter(
  (product) =>
    product.newArrival === true &&
    product.id >= 71 &&
    product.id <= 130 &&
    (!filters?.brand || product.brand === filters.brand)
);

  const selectedBrandData = brands.find(
    (brand) => brand.name === selectedBrand
  );

  return (
    <div className="min-h-screen bg-[#fafafa] text-stone-900">

      {/* =================================
          PAGE HEADER
      ================================= */}
      <section className="premium-brands-top-section mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8">

        <button
  onClick={goBack}
  className="premium-brands-back mb-7 text-2xl font-medium text-stone-700 transition hover:text-black"
>
  ←
</button>

<p className="premium-brands-label text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
  Curated Brands
</p>

<h1 className="premium-brands-title mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
  Featured Brands
</h1>

<p className="premium-brands-description mt-4 max-w-xl text-base text-stone-500">
  Explore premium products from the world's most loved brands.
</p>

      </section>

      {/* =================================
          BRAND FILTERS
      ================================= */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="flex gap-3 overflow-x-auto pb-5">

          <button
            onClick={() =>
              navigate("products", {
                brands: true,
              })
            }
            className={`shrink-0 rounded-full px-6 py-3 text-sm font-bold transition ${
              !filters?.brand
                ? "bg-stone-900 text-white"
                : "bg-white text-stone-700 border border-stone-200 hover:border-stone-400"
            }`}
          >
            All Brands
          </button>

          {brands.map((brand) => (
            <button
              key={brand.name}
              onClick={() =>
                navigate("PremiumBrands", {
  brands: true,
  brand: brand.name,
})
              }
              className={`shrink-0 rounded-full px-6 py-3 text-sm font-bold transition ${
                selectedBrand === brand.name
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-700 border border-stone-200 hover:border-stone-400"
              }`}
            >
              {brand.name}
            </button>
          ))}

        </div>

      </section>

      {/* =================================
          BRAND CARDS 
      ================================= */}
      

      {/* =================================
          SELECTED BRAND BANNER
      ================================= */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="grid overflow-hidden rounded-3xl bg-[#f2e8dc] lg:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
<div className="flex items-center gap-4">

  {selectedBrandData && (
    <img
      src={selectedBrandData.logo}
      alt={selectedBrand}
      className="h-10 w-20 object-contain"
    />
  )}

  <p className="premium-featured-label text-sm font-bold text-stone-500">
    Featured Brand
  </p>

</div>

<h2 className="premium-featured-title mt-5 font-serif text-5xl font-bold">
  {selectedBrand}
</h2>

<p className="premium-featured-description mt-4 max-w-lg text-sm leading-6 text-stone-600">
  Discover the latest products from {selectedBrand}, carefully
  selected for your premium shopping experience.
</p>
            <button
              onClick={() =>
                navigate("products", {
                  brands: true,
                  brand: selectedBrand,
                })
              }
              className="mt-7 w-fit rounded-full bg-stone-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
            >
              View All {selectedBrand} Products →
            </button>

          </div>

          {/* RIGHT */}
          <div className="h-72 lg:h-auto">

            {selectedProducts[0] && (
              <img
                src={selectedProducts[0].image}
                alt={selectedBrand}
                className="h-full w-full object-cover"
              />
            )}

          </div>

        </div>

      </section>

      {/* =================================
          SELECTED BRAND PRODUCTS
      ================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

           <p className="premium-products-label text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
  Premium Selection
</p>

          <h2 className="premium-products-title mt-2 font-serif text-4xl font-bold">
  Premium Products
</h2>

          </div>

          <p className="premium-products-count text-sm font-bold text-stone-500">
  {selectedProducts.length} products
</p>

        </div>

        {selectedProducts.length === 0 ? (

          <div className="py-20 text-center">

            <h3 className="text-xl font-bold">
              No products found
            </h3>

          </div>

        ) : (

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

            {selectedProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                navigate={navigate}
              />
            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default PremiumBrands;