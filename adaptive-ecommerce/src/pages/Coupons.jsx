import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Coupons({ navigate }) {
  const coupons = [
    {
      code: "SAVE100",
      title: "₹100 OFF",
      description: "Get ₹100 off on orders above ₹999",
      color: "bg-pink-50",
      text: "text-pink-600",
    },
    {
      code: "SAVE200",
      title: "₹200 OFF",
      description: "Get ₹200 off on orders above ₹1,499",
      color: "bg-purple-50",
      text: "text-purple-600",
    },
    {
      code: "WELCOME10",
      title: "10% OFF",
      description: "Get 10% off on your first order",
      color: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      code: "DEAL15",
      title: "15% OFF",
      description: "Save 15% on selected products",
      color: "bg-green-50",
      text: "text-green-600",
    },
    {
      code: "SHOP500",
      title: "₹500 OFF",
      description: "Save ₹500 on orders above ₹4,999",
      color: "bg-orange-50",
      text: "text-orange-600",
    },
    {
      code: "FASHION20",
      title: "20% OFF",
      description: "Get 20% off on fashion products",
      color: "bg-rose-50",
      text: "text-rose-600",
    },
    {
      code: "TECH10",
      title: "10% OFF",
      description: "Save on selected electronics",
      color: "bg-cyan-50",
      text: "text-cyan-600",
    },
    {
      code: "NEWUSER",
      title: "₹150 OFF",
      description: "Special offer for new users",
      color: "bg-indigo-50",
      text: "text-indigo-600",
    },
    {
      code: "WEEKEND",
      title: "12% OFF",
      description: "Weekend special discount",
      color: "bg-yellow-50",
      text: "text-yellow-600",
    },
    {
      code: "FREESHIP",
      title: "Free Delivery",
      description: "Free delivery on eligible orders",
      color: "bg-teal-50",
      text: "text-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">

        <button
          onClick={() => navigate("profile")}
          className="mb-6 text-sm font-bold text-gray-600 hover:text-gray-900"
        >
          ← Back
        </button>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            Offers
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            My Coupons
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Save more with these available offers.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">

          {coupons.map((coupon) => (
            <div
              key={coupon.code}
              className={`p-5 ${coupon.color}`}
            >
              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className={`text-2xl font-black ${coupon.text}`}>
                    {coupon.title}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    {coupon.description}
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(coupon.code)
                  }
                  className={`shrink-0 px-4 py-2 text-xs font-black ${coupon.text} bg-white`}
                >
                  COPY
                </button>

              </div>

              <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">

                <span className="text-xs font-black tracking-wider text-gray-700">
                  {coupon.code}
                </span>

                <span className="text-xs text-gray-500">
                  Use at checkout
                </span>

              </div>
            </div>
          ))}

        </div>

      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default Coupons;