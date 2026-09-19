import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart({ navigate, onCheckout }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal >= 1000 || subtotal === 0 ? 0 : 80;
  const total = subtotal + shipping;

  const freeShippingLimit = 1000;
  const remaining = Math.max(freeShippingLimit - subtotal, 0);
  const progress = Math.min((subtotal / freeShippingLimit) * 100, 100);

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
            🛒
          </div>

          <h1 className="mt-5 text-2xl font-black">Your cart is empty</h1>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            Looks like you haven't added anything to your cart yet. Discover
            something you like and add it here.
          </p>

          <button
            onClick={() => navigate && navigate("products")}
            className="mt-7 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
          >
            Start Shopping →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
          Shopping bag
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
          Your Cart
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {cart.reduce((total, item) => total + item.quantity, 0)} item
          {cart.reduce((total, item) => total + item.quantity, 0) !== 1
            ? "s"
            : ""}{" "}
          in your cart
        </p>
      </div>

      {/* Free Shipping Progress */}
      <div className="mb-7 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {remaining > 0 ? (
          <p className="text-sm font-semibold text-gray-700">
            Add{" "}
            <span className="font-black">
              ₹{remaining.toLocaleString("en-IN")}
            </span>{" "}
            more to unlock free shipping.
          </p>
        ) : (
          <p className="text-sm font-bold text-green-600">
            ✓ You unlocked free shipping!
          </p>
        )}

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gray-900 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Cart Layout */}
      <div className="grid gap-7 lg:grid-cols-[1fr_360px]">
        {/* Products */}
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <button
                  onClick={() => navigate && navigate("productDetails", item)}
                  className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </button>

                {/* Product Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        {item.brand}
                      </p>

                      <button
                        onClick={() =>
                          navigate && navigate("productDetails", item)
                        }
                        className="mt-1 text-left"
                      >
                        <h2 className="line-clamp-2 text-sm font-bold text-gray-900 hover:text-red-500">
                          {item.name}
                        </h2>
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="shrink-0 text-xs font-semibold text-gray-400 transition hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mt-3">
                    <span className="text-lg font-black">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-xl border border-gray-200">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center text-lg font-semibold transition hover:bg-gray-50"
                      >
                        −
                      </button>

                      <span className="flex h-9 min-w-9 items-center justify-center border-x border-gray-200 text-sm font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center text-lg font-semibold transition hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-black">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Order Summary */}
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <h2 className="text-lg font-black">Order Summary</h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>

              <span className="font-semibold">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>

              <span className="font-semibold">
                {shipping === 0
                  ? "FREE"
                  : `₹${shipping.toLocaleString("en-IN")}`}
              </span>
            </div>
          </div>

          <div className="my-6 border-t border-gray-100" />

          <div className="flex items-center justify-between">
            <span className="font-bold">Total</span>

            <span className="text-xl font-black">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Checkout */}
          <button
            onClick={onCheckout}
            className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg"
          >
            Proceed to Checkout →
          </button>

          {/* Continue Shopping */}
          <button
            onClick={() => navigate && navigate("products")}
            className="mt-3 w-full rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
          >
            Continue Shopping
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
