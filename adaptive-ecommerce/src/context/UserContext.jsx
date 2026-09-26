import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  // =========================
  // CURRENT SHOPPING EXPERIENCE
  // =========================

  const [userProfile, setUserProfile] = useState("dealHunter");

  // =========================
  // LOGIN STATE
  // =========================
  // Starts logged out whenever the app is refreshed.

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Current logged-in user
  const [user, setUser] = useState(null);

  // =========================
  // REGISTERED USERS
  // =========================

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem("registeredUsers");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // =========================
  // EXPERIENCE CONFIGURATION
  // =========================

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

  // =========================
  // LOGIN
  // =========================

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  // =========================
  // REGISTER USER
  // =========================

  const registerUser = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now(),
    };

    const updatedUsers = [
      ...registeredUsers,
      newUser,
    ];

    setRegisteredUsers(updatedUsers);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedUsers)
    );

    // Automatically login the newly registered user
    setUser(newUser);
    setIsLoggedIn(true);
  };

  // =========================
  // LOGOUT
  // =========================

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // =========================
  // UPDATE CURRENT USER
  // =========================

  const updateUser = (updatedUser) => {
    // Update React state
    setUser(updatedUser);

    // Update registered users
    const updatedUsers = registeredUsers.map(
      (registeredUser) => {
        if (
          registeredUser.id &&
          updatedUser.id &&
          registeredUser.id === updatedUser.id
        ) {
          return updatedUser;
        }

        if (
          registeredUser.email &&
          user?.email &&
          registeredUser.email === user.email
        ) {
          return updatedUser;
        }

        return registeredUser;
      }
    );

    setRegisteredUsers(updatedUsers);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedUsers)
    );
  };

  // =========================
  // CONTEXT
  // =========================

  return (
    <UserContext.Provider
      value={{
        // Experience
        userProfile,
        setUserProfile,
        userConfig: userConfig[userProfile],

        // Login
        isLoggedIn,
        user,

        // Functions
        login,
        registerUser,
        logout,
        updateUser,

        // Registered users
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;