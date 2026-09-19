import { useContext } from "react";

import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";

import { CartContext } from "../context/CartContext";

function Orders({ navigate }) {
  const { orders } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-8">

          <button
            onClick={() => navigate("home")}
            className="mb-5 text-sm font-bold text-gray-500 hover:text-gray-900"
          >
            ← Back to Home
          </button>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            My Account
          </p>

          <h1 className="mt-2 text-3xl font-black">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View your recent purchases and order details.
          </p>

        </div>


        {/* EMPTY ORDERS */}

        {orders.length === 0 ? (

          <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">

            <div className="text-5xl">
              📦
            </div>

            <h2 className="mt-5 text-2xl font-black">
              No Orders Yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your placed orders will appear here.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
            >
              Start Shopping
            </button>

          </div>

        ) : (

          /* ORDERS */

          <div className="space-y-6">

            {orders.map((order) => (

              <section
                key={order.id}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                {/* ORDER HEADER */}

                <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Order ID
                    </p>

                    <p className="mt-1 font-black">
                      {order.id}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {order.date}
                    </p>

                  </div>


                  <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-700">
                    {order.status}
                  </span>

                </div>


                {/* PRODUCTS */}

                <div className="mt-6 space-y-4">

                  {order.products.map((product) => (

                    <div
                      key={product.id}
                      className="flex gap-4 rounded-2xl bg-gray-50 p-4"
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="flex-1">

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                          {product.brand}
                        </p>

                        <h3 className="mt-1 font-bold">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          Quantity: {product.quantity}
                        </p>

                      </div>


                      <div className="text-right">

                        <p className="font-black">
                          ₹{(
                            product.price *
                            product.quantity
                          ).toLocaleString("en-IN")}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>


                {/* ORDER DETAILS */}

                <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Payment
                    </p>

                    <p className="mt-2 text-sm font-bold">
                      {order.paymentMethod || "Not available"}
                    </p>

                  </div>


                  <div>

                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Delivery
                    </p>

                    <p className="mt-2 text-sm font-bold">
                      {order.delivery || "Standard Delivery"}
                    </p>

                  </div>


                  <div>

                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Total
                    </p>

                    <p className="mt-2 text-lg font-black">
                      ₹{order.total.toLocaleString("en-IN")}
                    </p>

                  </div>

                </div>


                {/* ADDRESS */}

                {order.address && (

                  <div className="mt-5 rounded-2xl bg-gray-50 p-5">

                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Delivered To
                    </p>

                    <p className="mt-2 font-bold">
                      {order.address.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {order.address.address}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {order.address.city} -{" "}
                      {order.address.pincode}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {order.address.phone}
                    </p>

                  </div>

                )}

              </section>

            ))}

          </div>

        )}

      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default Orders;