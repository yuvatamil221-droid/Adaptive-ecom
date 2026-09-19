import { useContext, useState } from "react";

import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";
import Product from "../components/product";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import products from "../data/products";

function ProductDetails({ product, navigate }) {
  const { addToCart } = useContext(CartContext);

  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header navigate={navigate} />

        <ExperienceSwitcher />

        <Navigation navigate={navigate} />

        <main className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-2xl font-black">
            Product not found
          </h1>

          <button
            onClick={() => navigate("products")}
            className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white"
          >
            Back to Products
          </button>
        </main>

        <Footer navigate={navigate} />
      </div>
    );
  }

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("checkout");
  };

  const handleBackToProducts = () => {
    navigate("products", {
      category: product.category,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <button
          onClick={handleBackToProducts}
          className="mb-8 text-sm font-bold text-gray-600 hover:text-gray-900"
        >
          ← Back to Products
        </button>

        <section className="grid grid-cols-1 gap-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">

          {/* PRODUCT IMAGE */}

          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>

          {/* PRODUCT DETAILS */}

          <div className="flex flex-col justify-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              {product.brand}
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              {product.name}
            </h1>

            {/* RATING */}

            <div className="mt-5 flex items-center gap-3">

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-bold">
                ★ {product.rating}
              </span>

              <span className="text-sm text-gray-500">
                {product.reviews} Reviews
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-6 flex items-center gap-3">

              <span className="text-3xl font-black">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}

              {product.discount && (
                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {product.discount}% OFF
                </span>
              )}

            </div>

            {/* DESCRIPTION */}

            <p className="mt-6 leading-7 text-gray-500">
              Enjoy this product with great quality, useful features,
              and a personalized shopping experience.
            </p>

            {/* QUANTITY */}

            <div className="mt-7">

              <p className="mb-3 text-sm font-bold">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white">

                <button
                  onClick={() =>
                    setQuantity(
                      quantity > 1 ? quantity - 1 : 1
                    )
                  }
                  className="px-5 py-3 text-lg font-bold hover:bg-gray-100"
                >
                  −
                </button>

                <span className="px-5 py-3 text-sm font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="px-5 py-3 text-lg font-bold hover:bg-gray-100"
                >
                  +
                </button>

              </div>

            </div>

            {/* CART + BUY */}

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <button
                onClick={handleAddToCart}
                className="rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-gray-700"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="rounded-xl bg-red-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-red-600"
              >
                Buy Now
              </button>

            </div>

            {/* WISHLIST */}

            <button
              onClick={handleWishlist}
              className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 hover:bg-gray-50"
            >
              {isWishlisted
                ? "♥ Added to Wishlist"
                : "♡ Add to Wishlist"}
            </button>

            {/* DELIVERY */}

            <div className="mt-8 rounded-2xl bg-gray-50 p-5">

              <h3 className="font-bold">
                Delivery Information
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Free delivery on eligible orders.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Easy returns available.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCT INFORMATION */}

        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">

          <h2 className="text-2xl font-black">
            Product Information
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">

            <div>
              <p className="text-xs font-bold uppercase text-gray-400">
                Brand
              </p>

              <p className="mt-2 font-bold">
                {product.brand}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase text-gray-400">
                Category
              </p>

              <p className="mt-2 font-bold capitalize">
                {product.category}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase text-gray-400">
                Rating
              </p>

              <p className="mt-2 font-bold">
                ★ {product.rating}
              </p>
            </div>

          </div>

        </section>

        {/* RELATED PRODUCTS */}

        {relatedProducts.length > 0 && (
          <section className="mt-12">

            <div className="mb-7">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                You May Also Like
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Related Products
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {relatedProducts.map((item) => (
                <Product
                  key={item.id}
                  product={item}
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

export default ProductDetails;