import { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { UIConfigContext } from "../context/UIConfigContext";

import navigation from "../config/navigation";

function Navigation({ navigate }) {
  const { userProfile } = useContext(UserContext);

  const {
    layout,
    highContrast,
    largeText,
  } = useContext(UIConfigContext);

  const currentNavigation =
    navigation[userProfile] || navigation.dealHunter;

  const handleClick = (item) => {
    navigate(item.page, item.filters || null);
  };

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
    layoutStyle[layout] || layoutStyle.comfortable;

  const textSize = largeText
    ? "text-base"
    : "text-sm";

  return (
    <nav
      className={`border-b ${
        highContrast
          ? "border-white bg-black"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div
          className={`flex overflow-x-auto ${style.container}`}
        >

          {currentNavigation.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`whitespace-nowrap rounded-xl font-bold transition ${
                highContrast
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              } ${style.button} ${textSize}`}
            >
              {item.label === "Home" ? "⌂ " : ""}
              {item.label}
            </button>
          ))}

        </div>

      </div>
    </nav>
  );
}

export default Navigation;