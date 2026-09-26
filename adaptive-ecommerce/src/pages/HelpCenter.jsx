import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function HelpCenter({ navigate }) {
  const helpOptions = [
    {
      title: "Orders & Delivery",
      description: "Track orders, delivery status and delivery information.",
    },
    {
      title: "Payments",
      description: "Get help with payment methods and payment issues.",
    },
    {
      title: "Returns & Refunds",
      description: "Learn about returns, refunds and order cancellations.",
    },
    {
      title: "Account & Profile",
      description: "Manage your account and profile information.",
    },
    {
      title: "Wishlist & Cart",
      description: "Get help with saved products and shopping cart items.",
    },
    {
      title: "Contact Support",
      description: "Need more help? Contact our customer support team.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
     

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          {/* Back */}
          <button
            onClick={() => navigate("profile")}
            className="mb-5 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Profile
          </button>

          {/* Heading */}
          <h1 className="text-2xl font-bold">
            Help Center
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Find answers and get help with your shopping experience.
          </p>

          {/* Search */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search for help"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Help Options */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {helpOptions.map((option) => (
              <button
                key={option.title}
                className="rounded-2xl border border-gray-200 p-5 text-left transition hover:bg-gray-100"
              >
                <h2 className="font-semibold">
                  {option.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {option.description}
                </p>
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-6 rounded-2xl bg-gray-100 p-5">
            <h2 className="font-semibold">
              Still need help?
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Our support team is available to help you with
              your shopping experience.
            </p>

            <button
              onClick={() => alert("Customer support")}
              className="mt-4 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Contact Support
            </button>
          </div>
        </div>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default HelpCenter;