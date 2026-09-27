import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

import cta from "../config/cta";

function Product({ product, navigate }) {
  const { addToCart } = useContext(CartContext);
  const { userProfile, userConfig } = useContext(UserContext);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  /* --------------------------------
     ADD TO CART
  -------------------------------- */

  const handleAddToCart = (event) => {
    event.stopPropagation();

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };


  /* --------------------------------
     WISHLIST
  -------------------------------- */

  const handleWishlist = (event) => {
    event.stopPropagation();

    setIsWishlisted(!isWishlisted);
  };


  /* --------------------------------
     MAIN PRODUCT CLICK
  -------------------------------- */

  const handleProductClick = () => {
    if (navigate) {
      navigate("productDetails", product);
    }
  };


  /* --------------------------------
     MAIN CTA
  -------------------------------- */

  const handleMainAction = (event) => {
    event.stopPropagation();

    if (userProfile === "frequentShopper") {
      addToCart(product);

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 1500);

      return;
    }

    handleProductClick();
  };


  /* --------------------------------
     CARD TYPE
  -------------------------------- */

  const cardType = userConfig?.productCard;


  const cardStyle =
    cardType === "premium"
      ? "rounded-3xl bg-stone-50 border-stone-200"
      : cardType === "deal"
      ? "rounded-2xl bg-white border-red-100"
      : cardType === "reorder"
      ? "rounded-2xl bg-white border-blue-100"
      : "rounded-2xl bg-white border-gray-200";


  /* --------------------------------
     BUTTON STYLE
  -------------------------------- */

  const buttonStyle =
    userProfile === "dealHunter"
      ? "bg-red-500 hover:bg-red-600"
      : userProfile === "premiumShopper"
      ? "bg-stone-800 hover:bg-stone-700"
      : userProfile === "accessibility"
      ? "bg-yellow-400 text-black hover:bg-yellow-300"
      : "bg-gray-900 hover:bg-gray-700";


  return (
    <article
      className={`group overflow-hidden border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${cardStyle}`}
    >

      {/* =================================
          PRODUCT IMAGE
      ================================= */}

      <div
        onClick={handleProductClick}
        className="relative aspect-square cursor-pointer overflow-hidden bg-gray-100"
      >

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />


        {/* DISCOUNT */}

        {product.discount && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {product.discount}% OFF
          </span>
        )}


        {/* WISHLIST */}

        <button
          onClick={handleWishlist}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110"
          aria-label="Wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>


      {/* =================================
          PRODUCT INFORMATION
      ================================= */}

      <div className="p-4">

        {/* PRODUCT NAME */}

        <div
          onClick={handleProductClick}
          className="cursor-pointer"
        >

          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {product.brand}
          </p>

          <h3 className="mt-1 line-clamp-2 text-sm font-black text-gray-900">
            {product.name}
          </h3>

        </div>


        {/* RATING */}

        <div className="mt-2 flex items-center gap-1">

          <span className="text-sm text-yellow-500">
            ★
          </span>

          <span className="text-xs font-bold text-gray-700">
            {product.rating}
          </span>

          {product.reviews && (
            <span className="text-xs text-gray-400">
              ({product.reviews})
            </span>
          )}

        </div>


        {/* PRICE */}

        <div
          onClick={handleProductClick}
          className="mt-3 cursor-pointer"
        >

          <div className="flex items-center gap-2">

            <span className="text-lg font-black text-gray-900">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}

          </div>

        </div>


        {/* =================================
            CTA
        ================================= */}

        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-bold text-white transition ${buttonStyle}`}
        >
          {added
            ? "✓ Added"
            : userProfile === "frequentShopper"
            ? "Buy Now"
            : cta?.[userProfile]?.primary || "Add to Cart"}
        </button>


        {/* MAIN ACTION */}

        {userProfile === "frequentShopper" && (
          <button
            onClick={handleMainAction}
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
          >
            View Product
          </button>
        )}

      </div>

    </article>
  );
}

export default Product;