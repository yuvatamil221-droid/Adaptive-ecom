import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import UserProvider from "./context/UserContext";
import ThemeProvider from "./context/ThemeContext";
import CartProvider from "./context/CartContext";
import UIConfigProvider from "./context/UIConfigContext";
import WishlistProvider from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <CartProvider>
          <WishlistProvider>
            <UIConfigProvider>
              <App />
            </UIConfigProvider>
          </WishlistProvider>
        </CartProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);