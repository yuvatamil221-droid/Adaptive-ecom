function CheckoutDelivery({
  delivery,
  setDelivery,
  subtotal,
}) {
  const standardCharge = subtotal >= 999 ? 0 : 49;

  return (
    <section className="mt-5 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
        2
      </p>

      <h2 className="mt-1 text-xl font-black">
        Delivery Method
      </h2>

      <div className="mt-5 space-y-3">

        <label className="flex cursor-pointer items-center justify-between border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="Standard Delivery"
              checked={delivery === "Standard Delivery"}
              onChange={(e) => setDelivery(e.target.value)}
            />

            <div>
              <p className="text-sm font-bold">
                Standard Delivery
              </p>

              <p className="mt-1 text-xs text-gray-500">
                3 - 5 business days
              </p>
            </div>
          </div>

          <span className="text-sm font-black">
            {standardCharge === 0
              ? "FREE"
              : `₹${standardCharge}`}
          </span>
        </label>

        <label className="flex cursor-pointer items-center justify-between border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              value="Express Delivery"
              checked={delivery === "Express Delivery"}
              onChange={(e) => setDelivery(e.target.value)}
            />

            <div>
              <p className="text-sm font-bold">
                Express Delivery
              </p>

              <p className="mt-1 text-xs text-gray-500">
                1 - 2 business days
              </p>
            </div>
          </div>

          <span className="text-sm font-black">
            ₹99
          </span>
        </label>

      </div>
    </section>
  );
}

export default CheckoutDelivery;