import { useContext, useState } from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";
import Product from "../components/product";

import products from "../data/products";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductDetails({ product, navigate }) {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  /* If no product is selected */
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header navigate={navigate} />

        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-2xl font-black text-gray-900">
            Product Not Found
          </h1>

          <button
            onClick={() => navigate("products")}
            className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white"
          >
            Back to Products
          </button>
        </div>

        <Footer navigate={navigate} />
      </div>
    );
  }

  /* Related products */
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <Header navigate={navigate} />

      {/* Experience Switcher */}
      <ExperienceSwitcher navigate={navigate} />

      {/* Navigation */}
      <Navigation navigate={navigate} />

      {/* Product Details */}
      <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

        {/* Back Button */}
        <button
          onClick={() => navigate("products")}
          className="mb-5 text-sm font-bold text-gray-600 hover:text-gray-900"
        >
          ← Back to Products
        </button>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">

          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Brand */}
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
              {product.brand}
            </p>

            {/* Product Name */}
            <h1 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-bold">
                ★ {product.rating}
              </span>

              <span className="text-sm text-gray-500">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-black sm:text-3xl">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through sm:text-base">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}

              {product.discount && (
                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-black">
                About this product
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                This product is a great choice for your everyday needs.
                Check the product details, price and available offers
                before adding it to your cart.
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-bold">
                Quantity
              </p>

              <div className="mt-2 flex w-fit items-center overflow-hidden rounded-xl border border-gray-300 bg-white">

                <button
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center text-lg font-bold hover:bg-gray-100"
                >
                  −
                </button>

                <span className="flex h-10 w-12 items-center justify-center border-x border-gray-300 text-sm font-bold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center text-lg font-bold hover:bg-gray-100"
                >
                  +
                </button>

              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={handleAddToCart}
                className="flex-1 rounded-xl bg-red-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"
              >
                {added ? "Added ✓" : "Add to Cart"}
              </button>

              <button
                onClick={handleWishlist}
                className="rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-bold hover:bg-gray-100"
              >
                {isWishlisted ? "♥ Wishlisted" : "♡ Wishlist"}
              </button>

            </div>

            {/* Buy Now */}
            <button
              onClick={() => {
                addToCart(product);
                navigate("cart");
              }}
              className="mt-3 w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white hover:bg-gray-800"
            >
              Buy Now
            </button>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 border-t border-gray-200 pt-10 sm:mt-16">

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
              You May Also Like
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Related Products
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
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

      {/* Footer */}
      <Footer navigate={navigate} />

    </div>
  );
}

export default ProductDetails;