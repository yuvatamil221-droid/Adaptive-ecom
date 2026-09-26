import { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Orders({ navigate, goBack }) {
  const { userProfile } = useContext(UserContext);
  const { orders } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-6xl px-4 py-8">
         
         <button
  onClick={goBack}
  className="mb-5 text-sm font-semibold text-gray-600 transition hover:text-blue-600"
>
  ← Go Back
</button>
        <p className="text-sm font-bold text-blue-600">
          {userProfile} experience
        </p>

        <h1 className="mt-1 text-3xl font-black">
          My Orders
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View your orders and track your deliveries.
        </p>

        {orders.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">📦</div>

            <h2 className="mt-4 text-xl font-bold">
              No Orders Yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your placed orders will appear here.
            </p>

            <button
              onClick={() => navigate("products")}
              className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-5">

            {orders.map((order) => {
              const firstItem = order.items?.[0];

              return (
                <div
                  key={order.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    {/* ORDER INFO */}
                    <div className="flex gap-4">

                      {firstItem?.image && (
                        <img
                          src={firstItem.image}
                          alt={firstItem.name}
                          className="h-20 w-20 rounded-xl object-cover"
                        />
                      )}

                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold">
                            {order.id}
                          </span>

                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                            {order.status || "Processing"}
                          </span>
                        </div>

                        <h2 className="mt-3 text-lg font-bold">
                          {firstItem?.name || "Order"}
                        </h2>

                        {order.items?.length > 1 && (
                          <p className="mt-1 text-xs text-gray-500">
                            + {order.items.length - 1} more item
                            {order.items.length - 1 > 1 ? "s" : ""}
                          </p>
                        )}

                        <p className="mt-1 text-sm text-gray-500">
                          Ordered on {order.date || "Recently"}
                        </p>
                      </div>
                    </div>

                    {/* PRICE + BUTTONS */}
                    <div className="flex flex-wrap items-center gap-2">

                      <p className="w-full text-xl font-black">
                        ₹{Number(order.total || 0).toLocaleString("en-IN")}
                      </p>

                      <button
                        onClick={() =>
                          navigate("orderDetails", order)
                        }
                        className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold hover:bg-gray-50"
                      >
                        View Order
                      </button>

                      <button
                        onClick={() =>
                          navigate("trackOrder", order)
                        }
                        className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-700"
                      >
                        Track Order
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Orders;