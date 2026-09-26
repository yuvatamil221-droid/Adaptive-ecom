function CheckoutReview({
  products = [],
  address,
  delivery,
  paymentMethod,
  subtotal = 0,
  deliveryCharge = 0,
  couponDiscount = 0,
  finalTotal = 0,
  appliedCoupon,
}) {
  return (
    <section className="bg-white p-5 shadow-sm sm:p-6">

      {/* TITLE */}

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Final Review
        </p>

        <h2 className="mt-1 text-xl font-black">
          Review Your Order
        </h2>
      </div>

      {/* PRODUCTS */}

      <div className="mt-5 border-t border-gray-100 pt-5">

        <h3 className="text-sm font-black">
          Products
        </h3>

        <div className="mt-4 space-y-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 shrink-0 rounded-lg object-cover"
              />

              <div className="min-w-0 flex-1">

                <p className="line-clamp-2 text-sm font-bold">
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Quantity: {product.quantity}
                </p>

              </div>

              <p className="text-sm font-black">
                ₹
                {(
                  product.price * product.quantity
                ).toLocaleString("en-IN")}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* ADDRESS */}

      <div className="mt-6 border-t border-gray-100 pt-5">

        <h3 className="text-sm font-black">
          Delivery Address
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {address || "No address entered"}
        </p>

      </div>

      {/* DELIVERY */}

      <div className="mt-6 border-t border-gray-100 pt-5">

        <h3 className="text-sm font-black">
          Delivery Method
        </h3>

        <div className="mt-2 flex items-center justify-between">

          <p className="text-sm text-gray-600">
            {delivery}
          </p>

          <p className="text-sm font-bold">
            {deliveryCharge === 0
              ? "FREE"
              : `₹${deliveryCharge.toLocaleString("en-IN")}`}
          </p>

        </div>

      </div>

      {/* PAYMENT */}

      <div className="mt-6 border-t border-gray-100 pt-5">

        <h3 className="text-sm font-black">
          Payment Method
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {paymentMethod}
        </p>

      </div>

      {/* PRICE BREAKDOWN */}

      <div className="mt-6 border-t border-gray-100 pt-5">

        <h3 className="text-sm font-black">
          Price Details
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              Product Total
            </span>

            <span className="font-bold">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              Delivery
            </span>

            <span className="font-bold">
              {deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge.toLocaleString("en-IN")}`}
            </span>
          </div>

          {/* COUPON */}

          {appliedCoupon && couponDiscount > 0 && (
            <div className="flex justify-between text-sm">

              <span className="text-green-600">
                Coupon ({appliedCoupon.code})
              </span>

              <span className="font-bold text-green-600">
                -₹{couponDiscount.toLocaleString("en-IN")}
              </span>

            </div>
          )}

          {/* TOTAL */}

          <div className="flex justify-between border-t border-gray-200 pt-4">

            <span className="text-base font-black">
              Total
            </span>

            <span className="text-lg font-black">
              ₹{finalTotal.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CheckoutReview;