import { useContext, useEffect, useState } from "react";

import { UIConfigContext } from "./context/UIConfigContext";
import { UserContext } from "./context/UserContext";

// Pages
import Home from "./pages/home";
import Products from "./pages/Products";
import NewArrivals from "./pages/NewArrivals";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Customize from "./pages/Customize";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileDetails from "./pages/ProductDetails";
import Settings from "./pages/Settings";
import Coupons from "./pages/Coupons";
import ManageAccount from "./pages/ManageAccount";
import HelpCenter from "./pages/HelpCenter";
import Addresses from "./pages/Addresses";
import AccountDetails from "./pages/AccountDetails";
import AddProfile from "./pages/AddProfile";
import EditProfile from "./pages/EditProfile";
import OrderDetails from "./pages/OrderDetails";
import TrackOrder from "./pages/TrackOrder";
import ForYouHome from "./pages/ForYouHome";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Trending from "./pages/Trending";

import PremiumBrands from "./pages/PremiumBrands";



function App() {
  const { user, isLoggedIn } = useContext(UserContext);

  const [page, setPage] = useState("home");
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Profile states
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Page history
  const [history, setHistory] = useState([]);


  // --------------------------------
  // NAVIGATION
  // --------------------------------

  const navigate = (pageName, pageData = null) => {
    setHistory((currentHistory) => [
      ...currentHistory,
      {
        page,
        data,
      },
    ]);

    setPage(pageName);
    setData(pageData);
  };


  // --------------------------------
  // GO BACK
  // --------------------------------

  const goBack = () => {
    setHistory((currentHistory) => {
      if (currentHistory.length === 0) {
        return currentHistory;
      }

      const previousPage = currentHistory[currentHistory.length - 1];

      setPage(previousPage.page);
      setData(previousPage.data);

      return currentHistory.slice(0, -1);
    });
  };


  // --------------------------------
  // ADD PROFILE
  // --------------------------------

  const addProfile = (newProfile) => {
    setProfiles((currentProfiles) => [
      ...currentProfiles,
      newProfile,
    ]);

    // Newly added profile becomes selected
    setSelectedProfile(newProfile);
  };


  // --------------------------------
  // UPDATE PROFILE
  // --------------------------------

  const updateProfile = (updatedProfile) => {
    setProfiles((currentProfiles) =>
      currentProfiles.map((profile) =>
        profile.id === updatedProfile.id
          ? updatedProfile
          : profile
      )
    );

    // Update selected profile also
    setSelectedProfile((currentSelected) => {
      if (currentSelected?.id === updatedProfile.id) {
        return updatedProfile;
      }

      return currentSelected;
    });
  };


  // --------------------------------
  // DELETE PROFILE
  // --------------------------------

  const deleteProfile = (profileId) => {
    setProfiles((currentProfiles) => {
      const remainingProfiles = currentProfiles.filter(
        (profile) => profile.id !== profileId
      );

      // If deleted profile was selected
      setSelectedProfile((currentSelected) => {
        if (currentSelected?.id !== profileId) {
          return currentSelected;
        }

        // Select first remaining profile
        return remainingProfiles[0] || null;
      });

      return remainingProfiles;
    });
  };


  // --------------------------------
  // LOGIN USER → CREATE FIRST PROFILE
  // --------------------------------

  useEffect(() => {
    if (!isLoggedIn || !user) {
      return;
    }

    const loggedInProfile = {
      id: user.id || 1,
      name: user.name || "",
      age: user.age || "",
      gender: user.gender || "",
      dob: user.dob || "",
    };


    // Add logged-in user as first profile
    setProfiles((currentProfiles) => {
      const alreadyExists = currentProfiles.some(
        (profile) => profile.id === loggedInProfile.id
      );

      if (alreadyExists) {
        return currentProfiles;
      }

      return [
        loggedInProfile,
        ...currentProfiles,
      ];
    });


    // Select logged-in user automatically
    setSelectedProfile((currentSelected) => {
      if (currentSelected) {
        return currentSelected;
      }

      return loggedInProfile;
    });

  }, [isLoggedIn, user]);


  // --------------------------------
  // CLEAR PROFILES AFTER LOGOUT
  // --------------------------------

  useEffect(() => {
    if (!isLoggedIn) {
      setProfiles([]);
      setSelectedProfile(null);
    }
  }, [isLoggedIn]);


  // --------------------------------
  // PAGE ROUTING
  // --------------------------------

  if (page === "home") {
    return (
      <AppWrapper>
        <Home
  navigate={navigate}
  currentPage={page}
  currentData={data}
  selectedProfile={selectedProfile}
/>
      </AppWrapper>
    );
  }

 if (page === "forYou") {
  return (
    <AppWrapper>
      
      <Header navigate={navigate} />
      <Navigation navigate={navigate} />
      <ForYouHome
        navigate={navigate}
        goBack={goBack}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}


if (page === "products") {
  return (
    <AppWrapper>
     <Products
  navigate={navigate}
  goBack={goBack}
  filters={data}
  currentPage={page}
  currentData={data}
  selectedProfile={selectedProfile}
/>
    </AppWrapper>
  );
}


  if (page === "productDetails") {
  return (
    <AppWrapper>
      <ProductDetails
        navigate={navigate}
        product={data}
        goBack={goBack}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}


  if (page === "wishlist") {
  return (
    <AppWrapper>
      <Wishlist
        navigate={navigate}
        goBack={goBack}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}


  if (page === "cart") {
    return (
      <AppWrapper>
        <Cart
          navigate={navigate}
          selectedProfile={selectedProfile}
        />
      </AppWrapper>
    );
  }


  if (page === "checkout") {
    return (
      <AppWrapper>
        <Checkout
          navigate={navigate}
          data={data}
          selectedProfile={selectedProfile}
        />
      </AppWrapper>
    );
  }


  if (page === "orders") {
    return (
      <AppWrapper>
        <Orders
          navigate={navigate}
          selectedProfile={selectedProfile}
          goBack={goBack} 
        />
      </AppWrapper>
    );
  }
  if (page === "orderDetails") {
  return (
    <AppWrapper>
      <OrderDetails
        navigate={navigate}
        order={data}
        goBack={goBack}
      />
    </AppWrapper>
  );
}

if (page === "trackOrder") {
  return (
    <AppWrapper>
      <TrackOrder
        navigate={navigate}
        order={data}
        goBack={goBack}
      />
    </AppWrapper>
  );
}

if (page === "trending") {
  return (
    <AppWrapper>
      <Navigation navigate={navigate} />
      
      <Trending navigate={navigate} />
    </AppWrapper>
  );
}

  if (page === "profile") {
    return (
      <AppWrapper>
        <Profile
          navigate={navigate}
          goBack={goBack}
          profiles={profiles}
          selectedProfile={selectedProfile}
          setSelectedProfile={setSelectedProfile}
        />
      </AppWrapper>
    );
  }


  if (page === "customize") {
    return (
      <AppWrapper>
        <Customize
          navigate={navigate}
          selectedProfile={selectedProfile}
        />
      </AppWrapper>
    );
  }


  if (page === "search") {
    return (
      <AppWrapper>
        <Search
          navigate={navigate}
          data={data}
          selectedProfile={selectedProfile}
        />
      </AppWrapper>
    );
  }


  if (page === "login") {
    return (
      <AppWrapper>
        <Login
          navigate={navigate}
        />
      </AppWrapper>
    );
  }


  if (page === "register") {
    return (
      <AppWrapper>
        <Register
          navigate={navigate}
        />
      </AppWrapper>
    );
  }


  if (page === "profileDetails") {
    return (
      <AppWrapper>
        <ProfileDetails
          navigate={navigate}
          selectedProfile={selectedProfile}
        />
      </AppWrapper>
    );
  }


  if (page === "settings") {
  return (
    <AppWrapper>
      <Settings navigate={navigate} />
    </AppWrapper>
  );
}


  if (page === "coupons") {
    return (
      <AppWrapper>
        <Coupons
          navigate={navigate}
        />
      </AppWrapper>
    );
  }


  if (page === "manageAccount") {
    return (
      <AppWrapper>
        <ManageAccount
          navigate={navigate}
        />
      </AppWrapper>
    );
  }


  if (page === "help") {
    return (
      <AppWrapper>
        <HelpCenter
          navigate={navigate}
        />
      </AppWrapper>
    );
  }


  if (page === "addresses") {
    return (
      <AppWrapper>
        <Addresses
          navigate={navigate}
        />
      </AppWrapper>
    );
  }

  if (page === "PremiumBrands") {
  return (
    <AppWrapper>
      <PremiumBrands
        navigate={navigate}
        goBack={goBack}
        filters={data}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}

  if (page === "brands") {
  return (
    <AppWrapper>
      <PremiumBrands
        navigate={navigate}
        goBack={goBack}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}


  if (page === "accountDetails") {
    return (
      <AppWrapper>
        <AccountDetails
          navigate={navigate}
        />
      </AppWrapper>
    );
  }


  // --------------------------------
  // ADD PROFILE PAGE
  // --------------------------------

  if (page === "addProfile") {
    return (
      <AppWrapper>
        <AddProfile
          navigate={navigate}
          addProfile={addProfile}
        />
      </AppWrapper>
    );
  }


  // --------------------------------
  // EDIT PROFILE PAGE
  // --------------------------------

  if (page === "editProfile") {
    return (
      <AppWrapper>
        <EditProfile
          navigate={navigate}
          profile={data}
          updateProfile={updateProfile}
          deleteProfile={deleteProfile}
          profiles={profiles}
        />
      </AppWrapper>
    );
  }
 if (page === "newArrivals") {
  return (
    <AppWrapper>
      <NewArrivals
        navigate={navigate}
        goBack={goBack}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}


  // --------------------------------
  // DEFAULT
  // --------------------------------

  return (
    <AppWrapper>
      <Home
        navigate={navigate}
        selectedProfile={selectedProfile}
      />
    </AppWrapper>
  );
}


// --------------------------------
// UI CONFIG WRAPPER
// --------------------------------

function AppWrapper({ children }) {
  const { UIConfigProvider } = useContext(UIConfigContext);

  return children;
}


export default App;