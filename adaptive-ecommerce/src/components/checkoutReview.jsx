function CheckoutReview({ cart, address, delivery, paymentMethod }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
          4
        </span>

        <div>
          <h2 className="text-xl font-black">
            Review Order
          </h2>

          <p className="text-sm text-gray-500">
            Check your details before placing the order.
          </p>
        </div>

      </div>


      {/* PRODUCTS */}

      <div className="mt-6">

        <h3 className="text-sm font-bold">
          Products
        </h3>

        <div className="mt-4 space-y-4">

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex gap-4 border-b border-gray-100 pb-4"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  {item.brand}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>

                <p className="mt-2 font-bold">
                  ₹{(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* DELIVERY DETAILS */}

      <div className="mt-6 rounded-2xl bg-gray-50 p-5">

        <h3 className="font-bold">
          Delivery Details
        </h3>

        <p className="mt-3 text-sm font-bold">
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

      </div>


      {/* DELIVERY + PAYMENT */}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <div className="rounded-2xl border border-gray-200 p-4">

          <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
            Delivery
          </p>

          <p className="mt-2 text-sm font-bold">
            {delivery}
          </p>

        </div>


        <div className="rounded-2xl border border-gray-200 p-4">

          <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
            Payment
          </p>

          <p className="mt-2 text-sm font-bold">
            {paymentMethod}
          </p>

        </div>

      </div>

    </section>
  );
}

export default CheckoutReview;