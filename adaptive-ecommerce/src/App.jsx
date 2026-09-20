import { useContext, useState } from "react";
import { UIConfigContext } from "./context/UIConfigContext";

import Home from "./pages/home";
import Products from "./pages/Products";
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


function AppWrapper({ children }) {
  const {
    highContrast,
    largeText,
    largerButtons,
  } = useContext(UIConfigContext);

  return (
    <div
      className={`
        min-h-screen
        ${highContrast
          ? "bg-black text-white"
          : "bg-gray-50 text-gray-900"
        }
        ${largeText
          ? "[&_p]:text-base [&_span]:text-base [&_h1]:text-4xl [&_h2]:text-3xl"
          : ""
        }
        ${largerButtons
          ? "[&_button]:min-h-12 [&_button]:px-5"
          : ""
        }
      `}
    >
      {children}
    </div>
  );
}


function App() {
  const [page, setPage] = useState("home");
  const [data, setData] = useState(null);

  // Stores previous pages
  const [history, setHistory] = useState([]);


  // Navigate to another page
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


  // Go to the previous page
  const goBack = () => {
    if (history.length === 0) {
      setPage("home");
      setData(null);
      return;
    }

    const previousPage = history[history.length - 1];

    setHistory((currentHistory) =>
      currentHistory.slice(0, -1)
    );

    setPage(previousPage.page);
    setData(previousPage.data);
  };


  // PRODUCTS
  if (page === "products") {
    return (
      <AppWrapper>
        <Products
          navigate={navigate}
          filters={data}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // PRODUCT DETAILS
  if (page === "productDetails") {
    return (
      <AppWrapper>
        <ProductDetails
          product={data}
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // WISHLIST
  if (page === "wishlist") {
  return (
    <AppWrapper>
      <Wishlist
        navigate={navigate}
        data={data}
        goBack={goBack}
      />
    </AppWrapper>
  );
}

  // CART
  if (page === "cart") {
    return (
      <AppWrapper>
        <Cart
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // CHECKOUT
  if (page === "checkout") {
    return (
      <AppWrapper>
        <Checkout
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // ORDERS
  if (page === "orders") {
    return (
      <AppWrapper>
        <Orders
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // PROFILE
  if (page === "profile") {
    return (
      <AppWrapper>
        <Profile
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // CUSTOMIZE
  if (page === "customize") {
    return (
      <AppWrapper>
        <Customize
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // SEARCH
  if (page === "search") {
    return (
      <AppWrapper>
        <Search
          navigate={navigate}
          search={data}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // LOGIN
  if (page === "login") {
    return (
      <AppWrapper>
        <Login
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // REGISTER
  if (page === "register") {
    return (
      <AppWrapper>
        <Register
          navigate={navigate}
          goBack={goBack}
        />
      </AppWrapper>
    );
  }


  // HOME
  return (
    <AppWrapper>
      <Home
        navigate={navigate}
        goBack={goBack}
      />
    </AppWrapper>
  );
}


export default App;