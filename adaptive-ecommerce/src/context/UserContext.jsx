import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userProfile, setUserProfile] = useState("dealHunter");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(null);

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem("registeredUsers");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const userConfig = {
    dealHunter: {
      theme: "vibrant",
      navigation: [
        "home",
        "deals",
        "under999",
        "flashSale",
        "wishlist",
        "cart",
      ],
      homepage: [
        "hero",
        "flashSale",
        "wishlistOffers",
        "recommended",
      ],
      productCard: "deal",
      cta: "deal",
    },

    premiumShopper: {
      theme: "premium",
      navigation: [
        "home",
        "newArrivals",
        "brands",
        "collections",
        "wishlist",
        "cart",
      ],
      homepage: [
        "hero",
        "premiumCollection",
        "favoriteBrands",
        "recommended",
      ],
      productCard: "premium",
      cta: "premium",
    },

    frequentShopper: {
      theme: "minimal",
      navigation: [
        "home",
        "reorder",
        "forYou",
        "orders",
        "wishlist",
        "cart",
      ],
      homepage: [
        "hero",
        "recentlyPurchased",
        "recommended",
        "frequentlyBought",
      ],
      productCard: "reorder",
      cta: "reorder",
    },

    explorer: {
      theme: "minimal",
      navigation: [
        "home",
        "trending",
        "newArrivals",
        "categories",
        "wishlist",
        "cart",
      ],
      homepage: [
        "hero",
        "categories",
        "trending",
        "newArrivals",
        "recommended",
      ],
      productCard: "recommended",
      cta: "explore",
    },

    accessibility: {
      theme: "accessibility",
      navigation: [
        "home",
        "products",
        "categories",
        "wishlist",
        "cart",
      ],
      homepage: [
        "hero",
        "categories",
        "recommended",
      ],
      productCard: "default",
      cta: "default",
    },
  };

  // Register new user
  const registerUser = (userData) => {
    const newUsers = [...registeredUsers, userData];

    setRegisteredUsers(newUsers);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(newUsers)
    );
  };

  // Login existing user
  const login = (email, password) => {
    const existingUser = registeredUsers.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!existingUser) {
      return false;
    }

    setUser(existingUser);
    setIsLoggedIn(true);

    return true;
  };

  // Logout
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        setUserProfile,

        userConfig: userConfig[userProfile],

        isLoggedIn,
        user,

        registeredUsers,
        registerUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;