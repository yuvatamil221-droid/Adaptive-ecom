import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";

import { UIConfigContext } from "../context/UIConfigContext";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Customize({ navigate }) {
  const { userProfile } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

const {
  layout,
  setLayout,
  highContrast,
  setHighContrast,
  largeText,
  setLargeText,
  reducedMotion,
  setReducedMotion,
  largerButtons,
  setLargerButtons,
} = useContext(UIConfigContext);
  
  

  const profileNames = {
    dealHunter: "Deal Hunter",
    premiumShopper: "Premium Shopper",
    frequentShopper: "Frequent Shopper",
    explorer: "Explorer",
    accessibility: "Accessibility",
  };

  const layouts = [
    {
      id: "compact",
      title: "Compact",
      description: "More products with less spacing.",
    },
    {
      id: "comfortable",
      title: "Comfortable",
      description: "Balanced spacing for everyday shopping.",
    },
    {
      id: "spacious",
      title: "Spacious",
      description: "More space between sections and products.",
    },
  ];

  const toggleClasses = (enabled) =>
    enabled ? "bg-gray-900" : "bg-gray-200";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <Header navigate={navigate} />

      {/* EXPERIENCE SWITCHER */}
      <ExperienceSwitcher />

      {/* NAVIGATION */}
      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("profile")}
          className="mb-6 text-sm font-bold text-gray-600 hover:text-gray-900"
        >
          ← Back to Profile
        </button>

        {/* PAGE HEADER */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Personalization
          </p>

          <h1
            className={`font-black tracking-tight ${
              largeText ? "text-4xl" : "text-3xl"
            }`}
          >
            Customize Your Experience
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Adjust your shopping experience with layout and accessibility
            preferences.
          </p>
        </div>

        {/* CURRENT EXPERIENCE */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Current Experience
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black">
                {profileNames[userProfile]}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Theme: {theme?.name || "Personalized"}
              </p>
            </div>

            <button
              onClick={() => navigate("profile")}
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-700"
            >
              Back to Profile
            </button>
          </div>
        </section>

        {/* LAYOUT */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
          <div>
            <h2 className="text-xl font-black">
              Layout
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose how much spacing you want throughout the website.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {layouts.map((item) => {
              const selected = layout === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setLayout(item.id)}
                  className={`rounded-xl border p-5 text-left transition ${
                    selected
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-black">
                      {item.title}
                    </h3>

                    {selected && (
                      <span className="text-sm">
                        ✓
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-2 text-xs leading-5 ${
                      selected
                        ? "opacity-80"
                        : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
          <div>
            <h2 className="text-xl font-black">
              Accessibility
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Make the interface easier to read and interact with.
            </p>
          </div>

          <div className="mt-5 divide-y divide-gray-200">

            {/* HIGH CONTRAST */}
            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">
                  High Contrast Text
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Increase contrast between the interface and content.
                </p>
              </div>

              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  highContrast
                )}`}
                aria-label="Toggle high contrast"
                aria-pressed={highContrast}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    highContrast
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* LARGE TEXT */}
            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">
                  Large Text
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Increase important text sizes.
                </p>
              </div>

              <button
                onClick={() => setLargeText(!largeText)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  largeText
                )}`}
                aria-label="Toggle large text"
                aria-pressed={largeText}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    largeText
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* REDUCED MOTION */}
            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">
                  Reduced Motion
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Reduce animations and movement.
                </p>
              </div>

              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  reducedMotion
                )}`}
                aria-label="Toggle reduced motion"
                aria-pressed={reducedMotion}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    reducedMotion
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* LARGER BUTTONS */}
            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">
                  Larger Buttons
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Make buttons easier to identify and click.
                </p>
              </div>

              <button
                onClick={() => setLargerButtons(!largerButtons)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  largerButtons
                )}`}
                aria-label="Toggle larger buttons"
                aria-pressed={largerButtons}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    largerButtons
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

          </div>
        </section>

       {/* PREVIEW */}
<section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
  <h2 className="text-xl font-black">
    Preview
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    Your selected preferences are applied immediately.
  </p>

  <div
    className={`mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5 ${
      reducedMotion
        ? "transition-none"
        : "transition-all duration-500 hover:-translate-y-2"
    }`}
  >
    <div
      className={`flex flex-col ${
        layout === "spacious"
          ? "gap-8 py-5"
          : layout === "compact"
          ? "gap-2 py-1"
          : "gap-4 py-3"
      } sm:flex-row sm:items-center sm:justify-between`}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Preview Product
        </p>

        <h3
          className={`mt-2 font-black ${
            largeText ? "text-xl" : "text-lg"
          }`}
        >
          Your personalized shopping experience
        </h3>
      </div>

      <button
        onClick={() => navigate("products")}
        className={`rounded-xl bg-gray-900 font-bold text-white ${
          reducedMotion
            ? "transition-none"
            : "transition-all duration-300 hover:scale-110 hover:bg-gray-700"
        } ${
          largerButtons
            ? "px-7 py-4"
            : "px-5 py-3"
        }`}
      >
        Explore Products
      </button>
    </div>
  </div>
</section>

      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Customize;