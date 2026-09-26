import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function OrderDetails({ order, navigate, goBack }) {
  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header navigate={navigate} />

        <main className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-2xl font-black">
            Order Not Found
          </h1>

          <button
            onClick={goBack}
            className="mt-5 font-bold text-gray-600"
          >
            ← Back
          </button>
        </main>

        <Footer navigate={navigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-5xl px-4 py-8">

        <button
          onClick={goBack}
          className="mb-6 text-sm font-bold text-gray-600"
        >
          ← Back to Orders
        </button>

        {/* HEADER */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Order
              </p>

              <h1 className="mt-1 text-2xl font-black">
                {order.id}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Ordered on {order.date || "Recently"}
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
              {order.status || "Processing"}
            </span>

          </div>
        </div>

        {/* PRODUCTS */}
        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-black">
            Order Items
          </h2>

          <div className="mt-5 divide-y divide-gray-100">

            {order.items?.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>

                  <p className="mt-1 font-bold">
                    ₹
                    {Number(item.price).toLocaleString("en-IN")}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-5 flex justify-between border-t pt-5">

            <span className="font-bold text-gray-500">
              Total
            </span>

            <span className="text-xl font-black">
              ₹
              {Number(order.total || 0).toLocaleString("en-IN")}
            </span>

          </div>

        </section>

        {/* DELIVERY */}
        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-black">
            Delivery Details
          </h2>

          <div className="mt-5 space-y-3 text-sm">

            <p>
              <span className="font-bold">
                Delivery:
              </span>{" "}
              {order.delivery || "Standard Delivery"}
            </p>

            {order.address && (
              <p>
                <span className="font-bold">
                  Address:
                </span>{" "}
                {typeof order.address === "string"
                  ? order.address
                  : `${order.address.address}, ${order.address.city} - ${order.address.pincode}`}
              </p>
            )}

            <p>
              <span className="font-bold">
                Payment:
              </span>{" "}
              {order.paymentMethod || "Cash on Delivery"}
            </p>

          </div>

        </section>

        {/* TRACK BUTTON */}
        <button
          onClick={() =>
            navigate("trackOrder", order)
          }
          className="mt-6 w-full rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white hover:bg-gray-700"
        >
          🚚 Track Order
        </button>

      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default OrderDetails;