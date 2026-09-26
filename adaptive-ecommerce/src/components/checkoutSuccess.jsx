function CheckoutSuccess({ navigate, order }) {
  if (!order) return null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">

      <section className="bg-white p-8 text-center shadow-sm sm:p-12">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-black text-green-600">
          ✓
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
          Order Confirmed
        </p>

        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          Thank You!
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Your order has been placed successfully.
        </p>

        <div className="mt-6 border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Order ID
          </p>

          <p className="mt-1 text-sm font-black">
            {order.id}
          </p>
        </div>

        <button
          onClick={() => navigate("orders")}
          className="mt-6 w-full bg-black px-5 py-4 text-sm font-black text-white hover:bg-gray-800"
        >
          View My Orders
        </button>

      </section>

    </main>
  );
}

export default CheckoutSuccess;