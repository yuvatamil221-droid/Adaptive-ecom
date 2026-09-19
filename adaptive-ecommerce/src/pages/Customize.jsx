import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";

import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { UIConfigContext } from "../context/UIConfigContext";

function Customize({ navigate }) {
  const { userProfile } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  // Global layout
  const {
    layout,
    setLayout,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
  } = useContext(UIConfigContext);

  const [largeText, setLargeText] = useState(false);

  const [largerButtons, setLargerButtons] = useState(false);

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

  const toggleClasses = (enabled) => (enabled ? "bg-gray-900" : "bg-gray-200");

  return (
    <div
      className={`min-h-screen ${
        highContrast ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header navigate={navigate} />

      <ExperienceSwitcher />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Page Header */}

        <div className="mb-8">
          <p
            className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${
              highContrast ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            Personalization
          </p>

          <h1
            className={`font-black tracking-tight ${
              largeText ? "text-4xl" : "text-3xl"
            }`}
          >
            Customize Your Experience
          </h1>

          <p
            className={`mt-2 max-w-2xl text-sm leading-6 ${
              highContrast ? "text-white/70" : "text-gray-500"
            }`}
          >
            Adjust your shopping experience with layout and accessibility
            preferences.
          </p>
        </div>

        {/* Current Experience */}

        <section
          className={`rounded-2xl border p-6 ${
            highContrast
              ? "border-white/30 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-wider ${
              highContrast ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            Current Experience
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black">
                {profileNames[userProfile]}
              </h2>

              <p
                className={`mt-1 text-sm ${
                  highContrast ? "text-white/60" : "text-gray-500"
                }`}
              >
                Theme: {theme?.name || "Personalized"}
              </p>
            </div>

            <button
              onClick={() => navigate("profile")}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                highContrast
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              Back to Profile
            </button>
          </div>
        </section>

        {/* Layout */}

        <section
          className={`mt-6 rounded-2xl border p-6 ${
            highContrast
              ? "border-white/30 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div>
            <h2 className="text-xl font-black">Layout</h2>

            <p
              className={`mt-1 text-sm ${
                highContrast ? "text-white/60" : "text-gray-500"
              }`}
            >
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
                      ? highContrast
                        ? "border-yellow-400 bg-yellow-400 text-black"
                        : "border-gray-900 bg-gray-900 text-white"
                      : highContrast
                        ? "border-white/30 bg-gray-800"
                        : "border-gray-200 bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-black">{item.title}</h3>

                    {selected && <span className="text-sm">✓</span>}
                  </div>

                  <p
                    className={`mt-2 text-xs leading-5 ${
                      selected
                        ? "opacity-80"
                        : highContrast
                          ? "text-white/60"
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

        {/* Accessibility */}

        <section
          className={`mt-6 rounded-2xl border p-6 ${
            highContrast
              ? "border-white/30 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div>
            <h2 className="text-xl font-black">Accessibility</h2>

            <p
              className={`mt-1 text-sm ${
                highContrast ? "text-white/60" : "text-gray-500"
              }`}
            >
              Make the interface easier to read and interact with.
            </p>
          </div>

          <div className="mt-5 divide-y divide-gray-200">
            {/* High Contrast */}

            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">High Contrast</h3>

                <p
                  className={`mt-1 text-sm ${
                    highContrast ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  Increase contrast between the interface and content.
                </p>
              </div>

              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  highContrast,
                )}`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    highContrast ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}

            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">Large Text</h3>

                <p
                  className={`mt-1 text-sm ${
                    highContrast ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  Increase important text sizes.
                </p>
              </div>

              <button
                onClick={() => setLargeText(!largeText)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  largeText,
                )}`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    largeText ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}

            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">Reduced Motion</h3>

                <p
                  className={`mt-1 text-sm ${
                    highContrast ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  Reduce animations and movement.
                </p>
              </div>

              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  reducedMotion,
                )}`}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    reducedMotion ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Larger Buttons */}

            <div className="flex items-center justify-between gap-5 py-5">
              <div>
                <h3 className="font-bold">Larger Buttons</h3>

                <p
                  className={`mt-1 text-sm ${
                    highContrast ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  Make buttons easier to identify and click.
                </p>
              </div>

              <button
                onClick={() => setLargerButtons(!largerButtons)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggleClasses(
                  largerButtons,
                )}`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    largerButtons ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Preview */}

        <section
          className={`mt-6 rounded-2xl border p-6 ${
            highContrast
              ? "border-white/30 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <h2 className="text-xl font-black">Preview</h2>

          <p
            className={`mt-1 text-sm ${
              highContrast ? "text-white/60" : "text-gray-500"
            }`}
          >
            Your selected preferences are applied immediately.
          </p>

          <div
            className={`mt-5 rounded-xl border p-5 ${
              highContrast
                ? "border-white/20 bg-black"
                : "border-gray-200 bg-gray-50"
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
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    highContrast ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
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
                className={`rounded-xl font-bold transition ${
                  largerButtons ? "px-7 py-4" : "px-5 py-3"
                } ${
                  highContrast
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-gray-900 text-white hover:bg-gray-700"
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
