import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UIConfigContext = createContext();

function UIConfigProvider({ children }) {
  const { userConfig } = useContext(UserContext);

  const [layout, setLayout] = useState("comfortable");
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largerButtons, setLargerButtons] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", highContrast);
    document.body.classList.toggle("large-text", largeText);
    document.body.classList.toggle("large-buttons", largerButtons);
    document.body.classList.toggle("reduced-motion", reducedMotion);
  }, [
    highContrast,
    largeText,
    largerButtons,
    reducedMotion,
  ]);

  const uiConfig = {
    theme: userConfig.theme,
    navigation: userConfig.navigation,
    homepage: userConfig.homepage,
    productCard: userConfig.productCard,
    cta: userConfig.cta,
    layout,
    highContrast,
    largeText,
    reducedMotion,
    largerButtons,
  };

  return (
    <UIConfigContext.Provider
      value={{
        uiConfig,
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
      }}
    >
      {children}
    </UIConfigContext.Provider>
  );
}

export default UIConfigProvider;