import { createContext, useContext, useState } from "react";

import { UserContext } from "./UserContext";

export const UIConfigContext = createContext();

function UIConfigProvider({ children }) {
  const { userConfig } = useContext(UserContext);

  // Layout
  const [layout, setLayout] = useState("comfortable");

  // Accessibility settings
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largerButtons, setLargerButtons] = useState(false);

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