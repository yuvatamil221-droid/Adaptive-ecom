import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { WishlistContext } from "../context/WishlistContext";
import cta from "../config/cta";

function Product({ product, navigate }) {
  const { addToCart } = useContext(CartContext);
  const { userProfile } = useContext(UserContext);
  const { wishlist, toggleWishlist } =
  useContext(WishlistContext);
  const [added, setAdded] = useState(false);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

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

  const style = profileStyle[userProfile] || profileStyle.dealHunter;

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
    navigate("productDetails", product);
  };

  const buttonText = added
    ? "Added ✓"
    : cta[userProfile]?.product || "Add to Cart";

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <button
          onClick={handleViewProduct}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </button>

        {/* DISCOUNT */}
        {product.discount && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black ${style.badge}`}
          >
            {product.discount}% OFF
          </span>
        )}

        {/* WISHLIST */}
        <button
  onClick={handleWishlist}
  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow-sm"
>
  {isWishlisted ? "♥" : "♡"}
</button>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          {product.brand}
        </p>

        <button
          onClick={handleViewProduct}
          className="mt-1 block w-full text-left"
        >
          <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 text-gray-900">
            {product.name}
          </h3>
        </button>

        {/* RATING */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-bold">★ {product.rating}</span>

          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* PRICE */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-black text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-4 w-full rounded-xl px-4 py-3 text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-md ${style.button}`}
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
}

export default Product;
