function CheckoutSuccess({
  address,
  paymentMethod,
  delivery,
  finalTotal,
  navigate,
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-black">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for your purchase.
        </p>

        <div className="mt-7 rounded-2xl bg-gray-50 p-5 text-left">

          <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
            Delivery Address
          </p>

          <p className="mt-2 font-bold">
            {address.name}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            {address.address}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            {address.city} - {address.pincode}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            {address.phone}
          </p>

          <div className="mt-5 border-t border-gray-200 pt-4">

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                Payment
              </span>

              <span className="text-sm font-bold">
                {paymentMethod}
              </span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-sm text-gray-500">
                Delivery
              </span>

              <span className="text-sm font-bold">
                {delivery}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="font-black">
                Total
              </span>

              <span className="text-xl font-black">
                ₹{finalTotal.toLocaleString("en-IN")}
              </span>
            </div>

          </div>

        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <button
            onClick={() => navigate("orders")}
            className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
          >
            View My Orders
          </button>

          <button
            onClick={() => navigate("home")}
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold hover:bg-gray-50"
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
}

export default CheckoutSuccess;