import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile({ navigate }) {
  const { userProfile } = useContext(UserContext);

  const profileNames = {
    dealHunter: "Deal Hunter",
    premiumShopper: "Premium Shopper",
    frequentShopper: "Frequent Shopper",
    explorer: "Explorer",
    accessibility: "Accessibility",
  };

  const profileDescriptions = {
    dealHunter: "Discover discounts, offers and value-focused products.",
    premiumShopper: "Explore premium products, brands and collections.",
    frequentShopper: "Quickly access your orders and frequently purchased products.",
    explorer: "Discover trending products, categories and new arrivals.",
    accessibility: "A simpler shopping experience with accessibility-focused options.",
  };

  const shortcuts = [
    {
      title: "My Orders",
      description: "Track and view your previous orders.",
      icon: "📦",
      action: "orders",
    },
    {
      title: "Wishlist",
      description: "View products you have saved.",
      icon: "♡",
      action: "wishlist",
    },
    {
      title: "Customize Experience",
      description: "Change your shopping experience settings.",
      icon: "⚙️",
      action: "customize",
    },
    {
      title: "Shop Products",
      description: "Browse all available products.",
      icon: "🛍️",
      action: "products",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <section className="rounded-3xl bg-gray-900 p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-black text-gray-900">
                Y
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  My Account
                </p>

                <h1 className="mt-1 text-2xl font-black sm:text-3xl">
                  Welcome back
                </h1>

                <p className="mt-2 text-sm text-white/70">
                  {profileNames[userProfile]}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <p className="text-xs text-white/50">
                Current Experience
              </p>

              <p className="mt-1 font-bold">
                {profileNames[userProfile]}
              </p>
            </div>
          </div>
        </section>

        {/* Personalized Message */}
        <section className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Personalized for you
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Your shopping dashboard
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            {profileDescriptions[userProfile]}
          </p>
        </section>

        {/* Profile Shortcuts */}
        <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.action)}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl transition group-hover:bg-gray-900 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-5 font-black">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                {item.description}
              </p>

              <span className="mt-5 inline-block text-xs font-bold text-gray-800">
                Open →
              </span>
            </button>
          ))}
        </section>

        {/* Profile-specific information */}
        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-black">
            Your Experience
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Profile
              </p>

              <p className="mt-2 font-bold">
                {profileNames[userProfile]}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Personalized UI
              </p>

              <p className="mt-2 font-bold">
                Active
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Preferences
              </p>

              <button
                onClick={() => navigate("customize")}
                className="mt-2 font-bold underline underline-offset-4"
              >
                Customize
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;