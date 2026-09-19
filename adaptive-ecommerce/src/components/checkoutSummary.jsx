function CheckoutSummary({
  cart,
  productTotal,
  shipping,
  finalTotal,
  paymentMethod,
  handlePlaceOrder,
}) {
    console.log("SUMMARY FINAL TOTAL:", finalTotal);
  return (
    <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">

      <h2 className="text-xl font-black">
        Order Summary
      </h2>


      {/* PRODUCTS */}

      <div className="mt-6 space-y-4">

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between gap-3"
          >

            <div className="flex items-center gap-3">

              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-xl object-cover"
              />

              <div>

                <p className="text-sm font-bold">
                  {item.name}
                </p>

                <p className="text-xs text-gray-500">
                  ₹{item.price.toLocaleString("en-IN")} ×{" "}
                  {item.quantity}
                </p>

              </div>

            </div>


            <p className="text-sm font-bold">
              ₹{(
                item.price * item.quantity
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
            ₹{productTotal.toLocaleString("en-IN")}
          </span>

        </div>


        <div className="mt-4 flex justify-between text-sm">

          <span className="text-gray-500">
            Delivery
          </span>

          <span className="font-bold">

            {shipping === 0
              ? "FREE"
              : `₹${shipping}`}

          </span>

        </div>


        {/* TOTAL */}

        <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">

          <span className="text-base font-black">
            Total
          </span>

          <span className="text-2xl font-black">
            ₹{finalTotal.toLocaleString("en-IN")}
          </span>

        </div>

      </div>


      {/* PAYMENT METHOD */}

      <div className="mt-6 rounded-2xl bg-gray-50 p-4">

        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
          Payment Method
        </p>

        <p className="mt-2 text-sm font-bold">
          {paymentMethod || "Select a payment method"}
        </p>

      </div>


      {/* PLACE ORDER */}

      <button
        onClick={handlePlaceOrder}
        disabled={!paymentMethod}
        className={`mt-6 w-full rounded-xl px-6 py-4 text-sm font-black transition ${
          paymentMethod
            ? "bg-red-500 text-white hover:bg-red-600"
            : "cursor-not-allowed bg-gray-200 text-gray-400"
        }`}
      >
        Place Order →
      </button>


      <p className="mt-4 text-center text-xs text-gray-400">
        Frontend payment demonstration.
        No real payment is processed.
      </p>

    </aside>
  );
}

export default CheckoutSummary;