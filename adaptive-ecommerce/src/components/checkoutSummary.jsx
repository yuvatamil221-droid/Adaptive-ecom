function CheckoutSummary({
  products = [],
  subtotal = 0,
  delivery = "Standard Delivery",
  deliveryCharge = 0,
  couponDiscount = 0,
  appliedCoupon,
  finalTotal = 0,
  paymentMethod = "Cash on Delivery",
  onPlaceOrder,
}) {
  return (
    <section className="bg-white p-5 shadow-sm sm:p-6">

      {/* TITLE */}

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
        Order Summary
      </p>

      <h2 className="mt-2 text-xl font-black">
        Your Order
      </h2>

      {/* PRODUCTS */}

      <div className="mt-5 space-y-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex gap-3"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-14 w-14 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">

              <p className="line-clamp-2 text-xs font-bold">
                {product.name}
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                Qty: {product.quantity}
              </p>

            </div>

            <p className="text-sm font-black">
              ₹
              ₹{(
  Number(product.price || 0) *
  Number(product.quantity || 1)
).toLocaleString("en-IN")}
            </p>

          </div>
        ))}

      </div>

      {/* PRICE DETAILS */}

      <div className="mt-6 border-t border-gray-200 pt-5">

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Product Total
          </span>

          <span className="font-bold">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
        </div>

        {/* DELIVERY */}

        <div className="mt-3 flex justify-between text-sm">

          <div>
            <p className="text-gray-500">
              Delivery
            </p>

            <p className="mt-1 text-[11px] text-gray-400">
              {delivery}
            </p>
          </div>

          <span className="font-bold">
            {deliveryCharge === 0
              ? "FREE"
              : `₹${deliveryCharge.toLocaleString("en-IN")}`}
          </span>

        </div>

        {/* COUPON */}

        {appliedCoupon && couponDiscount > 0 && (
          <div className="mt-3 flex justify-between text-sm">

            <span className="text-green-600">
              Coupon ({appliedCoupon.code})
            </span>

            <span className="font-bold text-green-600">
              -₹{couponDiscount.toLocaleString("en-IN")}
            </span>

          </div>
        )}

        {/* TOTAL */}

        <div className="mt-5 flex justify-between border-t border-gray-200 pt-5">

          <span className="text-base font-black">
            Total
          </span>

          <span className="text-xl font-black">
            ₹{finalTotal.toLocaleString("en-IN")}
          </span>

        </div>

      </div>

      {/* PAYMENT */}

      <div className="mt-5 border-t border-gray-100 pt-4">

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Payment
        </p>

        <p className="mt-1 text-sm font-bold">
          {paymentMethod}
        </p>

      </div>

      {/* PLACE ORDER */}

      <button
        onClick={onPlaceOrder}
        className="mt-6 w-full bg-black px-5 py-4 text-sm font-black text-white transition hover:bg-gray-800"
      >
        Place Order · ₹{finalTotal.toLocaleString("en-IN")}
      </button>

    </section>
  );
}

export default CheckoutSummary;