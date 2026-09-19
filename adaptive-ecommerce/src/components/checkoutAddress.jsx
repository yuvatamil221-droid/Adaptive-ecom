function CheckoutAddress({
  address,
  handleAddressChange,
  isReturningUser,
}) {
  return (
    <>
      {isReturningUser ? (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
              1
            </span>

            <div>
              <h2 className="text-xl font-black">
                Confirm Delivery Address
              </h2>

              <p className="text-sm text-gray-500">
                Your saved address
              </p>
            </div>

          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 p-5">

            <p className="font-bold">
              {address.name}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {address.address}
            </p>

            <p className="mt-1 text-sm text-gray-600">
              {address.city} - {address.pincode}
            </p>

            <p className="mt-1 text-sm text-gray-600">
              {address.phone}
            </p>

          </div>

        </section>
      ) : (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
              1
            </span>

            <div>
              <h2 className="text-xl font-black">
                Delivery Address
              </h2>

              <p className="text-sm text-gray-500">
                Where should we deliver your order?
              </p>
            </div>

          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleAddressChange}
              placeholder="Full Name"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />

            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleAddressChange}
              placeholder="Phone Number"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />

            <textarea
              name="address"
              value={address.address}
              onChange={handleAddressChange}
              placeholder="Full Address"
              rows="3"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500 sm:col-span-2"
            />

            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              placeholder="City"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />

            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleAddressChange}
              placeholder="Pincode"
              className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />

          </div>

        </section>
      )}
    </>
  );
}

export default CheckoutAddress;