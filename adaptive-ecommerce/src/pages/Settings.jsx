import { useContext, useEffect } from "react";
import { UIConfigContext } from "../context/UIConfigContext";

function Settings({ navigate }) {
   
    const { darkMode, setDarkMode } = useContext(UIConfigContext);
  // Apply dark mode to the whole website
  useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);
  document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-5">

          <button
            onClick={() => navigate("profile")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl"
          >
            ←
          </button>

          <h1 className="text-2xl font-black">
            Settings
          </h1>

        </div>
      </div>


      {/* Main */}

      <main className="mx-auto max-w-3xl px-4 py-8">

        {/* Appearance */}

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

          <div className="border-b border-gray-100 px-5 py-4">

            <h2 className="text-lg font-black">
              Appearance
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Customize how the app looks
            </p>

          </div>


          {/* Dark Mode */}

          <div className="flex items-center gap-4 px-5 py-5">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-xl">
              {darkMode ? "🌙" : "☀️"}
            </div>


            <div className="flex-1">

              <h3 className="font-bold">
                Dark Mode
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Use a darker appearance throughout the app
              </p>

            </div>


            {/* Toggle */}

            <button
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              className={`relative h-7 w-12 rounded-full transition ${
                darkMode
                  ? "bg-purple-600"
                  : "bg-gray-300"
              }`}
            >

              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  darkMode
                    ? "left-6"
                    : "left-1"
                }`}
              />

            </button>

          </div>

        </section>


        {/* Other Settings */}

        <section className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white">

        
      
        </section>

      </main>

    </div>
  );
}

export default Settings;