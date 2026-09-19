function CheckoutDelivery({ delivery, setDelivery, productTotal }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
          2
        </span>

        <div>
          <h2 className="text-xl font-black">
            Delivery Method
          </h2>

          <p className="text-sm text-gray-500">
            Choose your delivery option.
          </p>
        </div>

      </div>


      <div className="mt-6 space-y-3">

        {/* STANDARD DELIVERY */}

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 p-4 hover:bg-gray-50">

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="delivery"
              value="Standard Delivery"
              checked={delivery === "Standard Delivery"}
              onChange={(event) =>
                setDelivery(event.target.value)
              }
            />

            <div>
              <p className="font-bold">
                Standard Delivery
              </p>

              <p className="text-xs text-gray-500">
                3 - 5 business days
              </p>
            </div>

          </div>


          <span className="text-sm font-bold">
            {productTotal >= 999 ? "FREE" : "₹49"}
          </span>

        </label>


        {/* EXPRESS DELIVERY */}

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 p-4 hover:bg-gray-50">

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="delivery"
              value="Express Delivery"
              checked={delivery === "Express Delivery"}
              onChange={(event) =>
                setDelivery(event.target.value)
              }
            />

            <div>
              <p className="font-bold">
                Express Delivery
              </p>

              <p className="text-xs text-gray-500">
                1 - 2 business days
              </p>
            </div>

          </div>


          <span className="text-sm font-bold">
            ₹99
          </span>

        </label>

      </div>

    </section>
  );
}

export default CheckoutDelivery;