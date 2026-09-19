import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function HomeSection() {
  const { userProfile } = useContext(UserContext);

  const content = {
    dealHunter: {
      label: "SAVE MORE",
      title: "More deals picked for you",
      description:
        "Discover offers and products that give you more value for your money.",
      items: [
        ["⚡", "Flash Sale", "Limited-time prices"],
        ["💰", "Under ₹999", "Budget-friendly picks"],
        ["🎁", "Special Offers", "Extra savings for you"],
      ],
      button: "Explore Deals",
    },

    premiumShopper: {
      label: "CURATED",
      title: "A collection worth discovering",
      description:
        "Explore carefully selected products for a more refined shopping experience.",
      items: [
        ["✦", "Premium Picks", "Selected quality products"],
        ["◈", "Top Brands", "Recognised brands"],
        ["◇", "New Collections", "Fresh arrivals"],
      ],
      button: "Explore Collection",
    },

    frequentShopper: {
      label: "SHOP AGAIN",
      title: "Everything you buy often",
      description:
        "Quickly find products you have purchased before and shop again.",
      items: [
        ["↻", "Reorder", "Buy your favourites again"],
        ["♡", "Wishlist", "Your saved products"],
        ["→", "Orders", "Check your previous orders"],
      ],
      button: "View Orders",
    },

    explorer: {
      label: "DISCOVER",
      title: "There is more to explore",
      description:
        "Find trending products, fresh arrivals and categories you may enjoy.",
      items: [
        ["🔥", "Trending", "What shoppers love now"],
        ["✦", "New Arrivals", "Fresh products"],
        ["⌕", "Discover", "Find something different"],
      ],
      button: "Start Exploring",
    },

    accessibility: {
      label: "EASY TO EXPLORE",
      title: "Shopping made comfortable",
      description:
        "Simple sections and clear actions help you find what you need easily.",
      items: [
        ["▣", "Categories", "Browse products easily"],
        ["★", "Recommended", "Selected products"],
        ["♡", "Wishlist", "Save for later"],
      ],
      button: "View Products",
    },
  };

  const current = content[userProfile] || content.dealHunter;

  const handleExplore = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">

      {/* Section Header */}
      <div className="flex flex-col gap-5 border-b border-gray-100 p-6 sm:p-8 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            {current.label}
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            {current.title}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            {current.description}
          </p>
        </div>

        <button
          onClick={handleExplore}
          className="w-fit rounded-xl bg-gray-900 px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-md"
        >
          {current.button}
          <span className="ml-2">→</span>
        </button>

      </div>


      {/* Adaptive Cards */}
      <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

        {current.items.map(([icon, title, description]) => (
          <button
            key={title}
            onClick={handleExplore}
            className="group flex items-center gap-4 p-6 text-left transition hover:bg-gray-50 sm:block sm:p-7"
          >

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xl transition group-hover:scale-105 group-hover:bg-gray-900 group-hover:text-white">
              {icon}
            </div>

            <div className="mt-0 sm:mt-5">

              <h3 className="font-bold text-gray-900">
                {title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                {description}
              </p>

              <span className="mt-3 inline-block text-xs font-bold text-gray-400 transition group-hover:text-gray-900">
                Explore →
              </span>

            </div>

          </button>
        ))}

      </div>

    </section>
  );
}

export default HomeSection;