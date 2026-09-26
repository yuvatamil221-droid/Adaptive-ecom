import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UIConfigContext = createContext();

function UIConfigProvider({ children }) {
  const { isLoggedIn } = useContext(UserContext);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setDarkMode(false);
    }
  }, [isLoggedIn]);

  // -----------------------------
  // GLOBAL LAYOUT
  // -----------------------------
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "comfortable";
  });

  // -----------------------------
  // HIGH CONTRAST
  // -----------------------------
  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem("highContrast") === "true";
  });

  // -----------------------------
  // LARGE TEXT
  // -----------------------------
  const [largeText, setLargeText] = useState(() => {
    return localStorage.getItem("largeText") === "true";
  });

  // -----------------------------
  // REDUCED MOTION
  // -----------------------------
  const [reducedMotion, setReducedMotion] = useState(() => {
    return localStorage.getItem("reducedMotion") === "true";
  });

  // -----------------------------
  // LARGER BUTTONS
  // -----------------------------
  const [largerButtons, setLargerButtons] = useState(() => {
    return localStorage.getItem("largerButtons") === "true";
  });

  // -----------------------------
  // APPLY GLOBAL UI SETTINGS
  // -----------------------------
  useEffect(() => {
    // High Contrast
    document.body.classList.toggle(
      "high-contrast-mode",
      highContrast
    );

    // Large Text
    document.body.classList.toggle(
      "large-text",
      largeText
    );

    // Reduced Motion
    document.body.classList.toggle(
      "reduced-motion",
      reducedMotion
    );

    // Larger Buttons
    document.body.classList.toggle(
      "larger-buttons",
      largerButtons
    );

    // -----------------------------
    // LAYOUT
    // -----------------------------

    document.body.classList.remove(
      "layout-compact",
      "layout-comfortable",
      "layout-spacious"
    );

    document.body.classList.add(
      `layout-${layout}`
    );

    // -----------------------------
    // SAVE SETTINGS
    // -----------------------------

    localStorage.setItem(
      "layout",
      layout
    );

    localStorage.setItem(
      "highContrast",
      highContrast
    );

    localStorage.setItem(
      "largeText",
      largeText
    );

    localStorage.setItem(
      "reducedMotion",
      reducedMotion
    );

    localStorage.setItem(
      "largerButtons",
      largerButtons
    );
  }, [
    layout,
    highContrast,
    largeText,
    reducedMotion,
    largerButtons,
  ]);

  return (
    <UIConfigContext.Provider
      value={{
        // Dark Mode
        darkMode,
        setDarkMode,

        // Layout
        layout,
        setLayout,

        // Accessibility
        highContrast,
        setHighContrast,

        largeText,
        setLargeText,

        reducedMotion,
        setReducedMotion,

        largerButtons,
        setLargerButtons,
      }}
    >
      {children}
    </UIConfigContext.Provider>
  );
}

export default UIConfigProvider;