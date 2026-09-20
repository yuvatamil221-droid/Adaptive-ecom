import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist({ navigate }) {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
     <button
  onClick={() => navigate("home")}
  className="mb-5 text-sm font-bold text-gray-600 hover:text-gray-900"
>
  ← Back
</button>

      <h1 className="text-3xl font-black">My Wishlist</h1>

      <p className="mt-2 text-sm text-gray-500">
        Products you liked will appear here.
      </p>

      {wishlist.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-10 text-center">
          <div className="text-5xl">♡</div>

          <h2 className="mt-4 text-xl font-black">Your wishlist is empty</h2>

          <p className="mt-2 text-sm text-gray-500">
            Click the ♡ on a product to add it to your wishlist.
          </p>

          <button
            onClick={() => navigate("products")}
            className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => navigate("productDetails", product)}
                className="w-full"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />
              </button>

              <div className="p-4">
                <p className="text-xs font-bold text-gray-400">
                  {product.brand}
                </p>

                <button
                  onClick={() => navigate("productDetails", product)}
                  className="mt-1 text-left font-bold hover:underline"
                >
                  {product.name}
                </button>

                <p className="mt-3 text-lg font-black">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-bold text-white hover:bg-gray-700"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-2 w-full rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
