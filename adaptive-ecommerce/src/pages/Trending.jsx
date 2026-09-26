import React, { useState } from "react";
import products from "../data/products";

function Trending({ navigate }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedSections, setExpandedSections] = useState({});

  const categories = [
    { name: "All", value: "all" },
    { name: "Electronics", value: "electronics" },
    { name: "Fashion", value: "fashion" },
    { name: "Home", value: "home" },
    { name: "Beauty", value: "beauty" },
    { name: "Accessories", value: "accessories" },
  ];

  // Only trending products
  const trendingProducts = products.filter(
    (product) => product.trending === true
  );

  // Category filter
  const filteredProducts =
    selectedCategory === "all"
      ? trendingProducts
      : trendingProducts.filter(
          (product) => product.category === selectedCategory
        );

  // Create sections
  const categorySections =
    selectedCategory === "all"
      ? categories
          .filter((category) => category.value !== "all")
          .map((category) => ({
            ...category,
            products: trendingProducts.filter(
              (product) => product.category === category.value
            ),
          }))
          .filter((section) => section.products.length > 0)
      : [
          {
            name: categories.find(
              (category) => category.value === selectedCategory
            )?.name,
            value: selectedCategory,
            products: filteredProducts,
          },
        ];

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">

       

        {/* ================= CATEGORY NAV ================= */}
        <div className="flex gap-3 overflow-x-auto pb-5">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setSelectedCategory(category.value);
                setExpandedSections({});
              }}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category.value
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* ================= TREND SECTIONS ================= */}
      {categorySections.map((section, sectionIndex) => {
        const isExpanded = expandedSections[section.value];

        const sectionProducts = isExpanded
          ? section.products
          : section.products.slice(0, 5);

        if (sectionProducts.length === 0) {
          return null;
        }

        const smallProducts = sectionProducts.slice(0, 4);
        const featuredProduct = sectionProducts[4];

        return (
          <section
            key={section.value}
            className={`mt-4 py-7 ${
              sectionIndex % 2 === 0
                ? "bg-[#fff4f1]"
                : "bg-[#f5f3ff]"
            }`}
          >
            <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">

              {/* ================= SECTION HEADING ================= */}
              <h2 className="mb-5 text-2xl font-black text-gray-900">
                {section.name} Trends
              </h2>

              {/* =====================================================
                  COLLAPSED VIEW
              ====================================================== */}
              {!isExpanded ? (
                <div className="grid grid-cols-3 gap-2 sm:gap-3">

                  {/* 4 SMALL PRODUCTS */}
                  <div className="col-span-2 grid grid-cols-2 gap-2 sm:gap-3">
                    {smallProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() =>
                          navigate("productDetails", product)
                        }
                        className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm sm:rounded-xl"
                      >
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Details */}
                        <div className="p-2">
                          <h3 className="line-clamp-1 text-[11px] font-semibold text-gray-800 sm:text-xs">
                            {product.name}
                          </h3>

                          <div className="mt-1 flex items-center gap-1">
                            <span className="text-xs font-bold text-gray-900 sm:text-sm">
                              ₹{product.price}
                            </span>

                            {product.originalPrice && (
                              <span className="text-[9px] text-gray-400 line-through sm:text-xs">
                                ₹{product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* LARGE FEATURED PRODUCT */}
                  {featuredProduct && (
                    <div
                      onClick={() =>
                        navigate(
                          "productDetails",
                          featuredProduct
                        )
                      }
                      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm sm:rounded-2xl"
                    >
                      <div className="relative h-full min-h-[220px] sm:min-h-[280px]">

                        <img
                          src={featuredProduct.image}
                          alt={featuredProduct.name}
                          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

                        {/* Product Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-2.5 text-white sm:p-5">

                          <p className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                            Trending Pick
                          </p>

                          <h3 className="mt-1 line-clamp-2 text-xs font-black sm:text-xl">
                            {featuredProduct.name}
                          </h3>

                          <div className="mt-1 flex items-center gap-1">
                            <span className="text-xs font-bold sm:text-base">
                              ₹{featuredProduct.price}
                            </span>

                            {featuredProduct.originalPrice && (
                              <span className="text-[9px] text-white/60 line-through sm:text-sm">
                                ₹{featuredProduct.originalPrice}
                              </span>
                            )}
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (

                /* =====================================================
                   EXPANDED VIEW
                ====================================================== */
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

                  {sectionProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() =>
                        navigate("productDetails", product)
                      }
                      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >

                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Details */}
                      <div className="p-3">

                        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
                          {product.name}
                        </h3>

                        <div className="mt-2 flex items-center gap-2">

                          <span className="text-sm font-bold text-gray-900">
                            ₹{product.price}
                          </span>

                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ₹{product.originalPrice}
                            </span>
                          )}

                        </div>

                        {product.rating && (
                          <p className="mt-1 text-xs text-gray-500">
                            ⭐ {product.rating}
                          </p>
                        )}

                      </div>
                    </div>
                  ))}

                </div>
              )}

              {/* ================= VIEW / SHOW LESS ================= */}
              {section.products.length > 5 && (
                <button
                  onClick={() =>
                    setExpandedSections((prev) => ({
                      ...prev,
                      [section.value]: !prev[section.value],
                    }))
                  }
                  className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#fffce9] py-3.5 text-sm font-black uppercase tracking-wide text-gray-900 transition hover:bg-[#fff8c7]"
                >
                  {isExpanded
                    ? "Show Less ↑"
                    : `View ${section.products.length} Products →`}
                </button>
              )}

            </div>
          </section>
        );
      })}

      {/* ================= EMPTY STATE ================= */}
      {categorySections.length === 0 && (
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">

          <h2 className="text-xl font-bold text-gray-900">
            No trending products found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Try another category.
          </p>

        </div>
      )}
    </div>
  );
}

export default Trending;