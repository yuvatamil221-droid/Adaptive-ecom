import { useContext} from "react";

import { UserContext } from "../context/UserContext";
import { UIConfigContext } from "../context/UIConfigContext";

import navigation from "../config/navigation";
function Navigation({ navigate, currentPage, currentData }) {
  const { userProfile } = useContext(UserContext);

  const {
  layout,
  highContrast,
  largeText,
  darkMode,
} = useContext(UIConfigContext);
  // --------------------------------
  // GET CURRENT NAVIGATION
  // --------------------------------

  const currentNavigation =
    navigation[userProfile] ||
    navigation.default ||
    navigation.dealHunter;

  // --------------------------------
  // ACTIVE NAVIGATION
  // --------------------------------

  

  // --------------------------------
  // HANDLE NAVIGATION
  // --------------------------------

const handleClick = (item) => {
  navigate(
    item.page,
    item.filters || null
  );
};

  // --------------------------------
  // LAYOUT
  // --------------------------------

  const layoutStyle = {
    compact: {
      container: "gap-1 py-2",
      button: "px-3 py-2",
    },

    comfortable: {
      container: "gap-2 py-3",
      button: "px-5 py-3",
    },

    spacious: {
      container: "gap-5 py-5",
      button: "px-7 py-4",
    },
  };

  const style =
    layoutStyle[layout] ||
    layoutStyle.comfortable;

  const textSize = largeText
    ? "text-base"
    : "text-sm";

  // --------------------------------
  // MOBILE NAVIGATION
  // --------------------------------

  const mobileNavigation =
    currentNavigation.slice(0, 5);

  return (
    <>
      {/* =================================
          DESKTOP NAVIGATION
          ================================= */}

      <nav
        className={`hidden md:block border-b ${
          highContrast
            ? "border-white bg-black"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className={`flex overflow-x-auto ${style.container}`}
          >

            {currentNavigation.map((item) => {
             const isActive =
  item.page === currentPage &&
  (
    !item.filters ||
    Object.keys(item.filters).every(
      (key) => item.filters[key] === currentData?.[key]
    )
  );
              return (
                <button
                  key={item.label}
                  onClick={() => handleClick(item)}
                  className={`
                    whitespace-nowrap
                    rounded-xl
                    font-bold
                    transition
                    flex
                    items-center
                    gap-2
                    border-b-2

                    ${style.button}
                    ${textSize}

                    ${
                      isActive
                        ? highContrast
                          ? "bg-white text-black border-white"
                          : "bg-gray-900 text-white border-gray-900"
                        : highContrast
                        ? "text-white border-transparent hover:bg-white hover:text-black"
                        : "text-gray-700 border-transparent hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <span>
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </button>
              );
            })}

          </div>

        </div>
      </nav>

      {/* =================================
          MOBILE BOTTOM NAVIGATION
          ================================= */}

      <nav
  className={`
    fixed
    bottom-0
    left-0
    right-0
    z-50
    md:hidden
    border-t
    backdrop-blur-md
    ${
      darkMode
        ? "border-gray-700 bg-gray-950"
        : highContrast
        ? "border-white bg-black"
        : "border-gray-200 bg-white/95"
    }
  `}
>

        <div className="flex items-center justify-around px-1 py-2">

          {mobileNavigation.map((item) => {
            const isActive =
  item.page === currentPage &&
  JSON.stringify(item.filters || null) ===
    JSON.stringify(currentData || null);

            return (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className={`
  flex
  min-w-0
  flex-1
  flex-col
  items-center
  justify-center
  gap-1
  rounded-xl
  px-1
  py-2
  text-xs
  font-semibold
  transition
  ${
    isActive
      ? "bg-gray-950 text-white"
      : "text-gray-300 hover:text-white hover:bg-gray-800"
  }
`}
              >

                <span className="text-lg leading-none">
                  {item.icon}
                </span>

                <span className="truncate max-w-full">
                  {item.label}
                </span>

              </button>
            );
          })}

        </div>

      </nav>
    </>
  );
}

export default Navigation;