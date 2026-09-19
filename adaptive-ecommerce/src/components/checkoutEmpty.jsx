function CheckoutEmpty({ navigate }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
        <div className="text-5xl">🛒</div>

        <h1 className="mt-5 text-2xl font-black">Your Cart is Empty</h1>

        <p className="mt-2 text-gray-500">
          Add some products before proceeding to checkout.
        </p>

        <button
          onClick={() => navigate("products")}
          className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CheckoutEmpty;
