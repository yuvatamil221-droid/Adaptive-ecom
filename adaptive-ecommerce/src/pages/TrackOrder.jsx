import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function TrackOrder({ order, navigate, goBack }) {
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

  const status = order.status || "Processing";

  const steps = [
    {
      title: "Order Placed",
      description: "Your order has been placed successfully.",
      status: "Placed",
    },
    {
      title: "Packed",
      description: "Your order has been packed.",
      status: "Packed",
    },
    {
      title: "Shipped",
      description: "Your order is on the way.",
      status: "Shipped",
    },
    {
      title: "Out for Delivery",
      description: "Your order is out for delivery.",
      status: "Out for Delivery",
    },
    {
      title: "Delivered",
      description: "Your order has been delivered.",
      status: "Delivered",
    },
  ];

  const statusIndex = {
    Processing: 0,
    Placed: 0,
    Packed: 1,
    Shipped: 2,
    "Out for Delivery": 3,
    Delivered: 4,
  };

  const currentStep = statusIndex[status] ?? 0;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-4xl px-4 py-8">

        <button
          onClick={goBack}
          className="mb-6 text-sm font-bold text-gray-600"
        >
          ← Back to Order
        </button>

        {/* HEADER */}
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Tracking Order
          </p>

          <h1 className="mt-2 text-2xl font-black">
            {order.id}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Current status:{" "}
            <span className="font-bold text-gray-900">
              {status}
            </span>
          </p>

        </div>

        {/* TRACKING */}
        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-black">
            Delivery Progress
          </h2>

          <div className="mt-8">

            {steps.map((step, index) => {
              const completed = index <= currentStep;

              return (
                <div
                  key={step.title}
                  className="relative flex gap-4 pb-8 last:pb-0"
                >

                  {/* LINE */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute left-[15px] top-8 h-full w-0.5 ${
                        index < currentStep
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}

                  {/* CIRCLE */}
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      completed
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {completed ? "✓" : index + 1}
                  </div>

                  {/* TEXT */}
                  <div>

                    <h3
                      className={`font-bold ${
                        completed
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* ORDER SUMMARY */}
        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-black">
            Order Summary
          </h2>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Order Total
            </span>

            <span className="font-black">
              ₹
              {Number(order.total || 0).toLocaleString("en-IN")}
            </span>

          </div>

        </section>

      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default TrackOrder;