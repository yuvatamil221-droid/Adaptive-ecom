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
    profileStyle[userProfile] ||
    profileStyle.dealHunter;

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
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl">

      {/* IMAGE */}

      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 sm:aspect-square">

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
            className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] font-black sm:left-3 sm:top-3 sm:px-3 sm:text-[10px] ${style.badge}`}
          >
            {product.discount}% OFF
          </span>
        )}


        {/* WISHLIST */}

        <button
          onClick={handleWishlist}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm sm:right-3 sm:top-3 sm:h-9 sm:w-9 sm:text-xl"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>


      {/* PRODUCT DETAILS */}

      <div className="p-3 sm:p-4">

        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400 sm:text-[10px] sm:tracking-[0.15em]">
          {product.brand}
        </p>


        <button
          onClick={handleViewProduct}
          className="mt-1 block w-full text-left"
        >
          <h3 className="line-clamp-2 min-h-[32px] text-xs font-bold leading-4 text-gray-900 sm:min-h-[40px] sm:text-sm sm:leading-5">
            {product.name}
          </h3>
        </button>


        {/* RATING */}

        <div className="mt-2 flex items-center gap-1 sm:mt-3 sm:gap-2">

          <span className="text-xs font-bold sm:text-sm">
            ★ {product.rating}
          </span>

          <span className="text-[10px] text-gray-400 sm:text-xs">
            ({product.reviews})
          </span>

        </div>


        {/* PRICE */}

        <div className="mt-2 flex flex-wrap items-center gap-1 sm:mt-3 sm:gap-2">

          <span className="text-base font-black text-gray-900 sm:text-lg">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <span className="text-[10px] text-gray-400 line-through sm:text-xs">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}

        </div>


        {/* ADD TO CART */}

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-3 w-full rounded-lg px-3 py-2.5 text-[11px] font-bold transition hover:-translate-y-0.5 hover:shadow-md sm:mt-4 sm:rounded-xl sm:px-4 sm:py-3 sm:text-xs ${style.button}`}
        >
          {buttonText}
        </button>

      </div>

    </article>
  );
}

export default Product;