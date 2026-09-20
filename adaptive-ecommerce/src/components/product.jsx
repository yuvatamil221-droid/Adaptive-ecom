import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { WishlistContext } from "../context/WishlistContext";
import cta from "../config/cta";

function Product({ product, navigate }) {
  const { addToCart } = useContext(CartContext);
  const { userProfile } = useContext(UserContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const [added, setAdded] = useState(false);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const profileStyle = {
    dealHunter: {
      badge: "bg-red-500 text-white",
      button: "bg-red-500 text-white hover:bg-red-600",
    },
    premiumShopper: {
      badge: "bg-stone-800 text-white",
      button: "bg-stone-800 text-white hover:bg-stone-700",
    },
    frequentShopper: {
      badge: "bg-blue-600 text-white",
      button: "bg-blue-600 text-white hover:bg-blue-700",
    },
    explorer: {
      badge: "bg-purple-600 text-white",
      button: "bg-purple-600 text-white hover:bg-purple-700",
    },
    accessibility: {
      badge: "bg-yellow-400 text-black",
      button: "bg-yellow-400 text-black hover:bg-yellow-300",
    },
  };

  const style =
    profileStyle[userProfile] || profileStyle.dealHunter;

  const handleAddToCart = (event) => {
    event.stopPropagation();

    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const handleWishlist = (event) => {
    event.stopPropagation();
    toggleWishlist(product);
  };

  const handleViewProduct = () => {
  if (navigate) {
    navigate("productDetails", product);
  }
};
  const buttonText = added
    ? "Added ✓"
    : cta[userProfile]?.product || "Add to Cart";

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl">

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">

        <button
  type="button"
  onClick={handleViewProduct}
  className="absolute inset-0 h-full w-full"
>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </button>

        {/* Discount */}
        {product.discount && (
          <span
            className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] font-black sm:left-3 sm:top-3 sm:px-3 sm:text-[10px] ${style.badge}`}
          >
            {product.discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm sm:right-3 sm:top-3 sm:h-9 sm:w-9"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      {/* Product Information */}
      <div className="p-2.5 sm:p-4">

        {/* Brand */}
        <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 sm:text-[10px]">
          {product.brand}
        </p>

        {/* Product Name */}
        <button
          onClick={handleViewProduct}
          className="mt-1 block w-full text-left"
        >
          <h3 className="line-clamp-2 min-h-[30px] text-[11px] font-bold leading-4 text-gray-900 sm:min-h-[40px] sm:text-sm sm:leading-5">
            {product.name}
          </h3>
        </button>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1 sm:mt-3 sm:gap-2">
          <span className="text-[10px] font-bold sm:text-sm">
            ★ {product.rating}
          </span>

          <span className="text-[9px] text-gray-400 sm:text-xs">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-1.5 flex flex-wrap items-center gap-1 sm:mt-3 sm:gap-2">
          <span className="text-sm font-black text-gray-900 sm:text-lg">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <span className="text-[9px] text-gray-400 line-through sm:text-xs">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-2.5 w-full rounded-lg px-2 py-2 text-[10px] font-bold transition sm:mt-4 sm:rounded-xl sm:px-4 sm:py-3 sm:text-xs ${style.button}`}
        >
          {buttonText}
        </button>

      </div>
    </article>
  );
}

export default Product;