import { useState } from "react";
import { useContext } from "react";
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

function App() {
  const [page, setPage] = useState("home");
  const [data, setData] = useState(null);

  const navigate = (pageName, pageData = null) => {
    setPage(pageName);
    setData(pageData);
  };

  if (page === "products") {
    return <Products navigate={navigate} filters={data} />;
  }

  if (page === "productDetails") {
    return <ProductDetails product={data} navigate={navigate} />;
  }

  if (page === "wishlist") {
  return <Wishlist navigate={navigate} data={data} />;
}

  if (page === "cart") {
    return <Cart navigate={navigate} />;
  }

  if (page === "checkout") {
    return <Checkout navigate={navigate} />;
  }

  if (page === "orders") {
    return <Orders navigate={navigate} />;
  }

  if (page === "profile") {
    return <Profile navigate={navigate} />;
  }

  if (page === "customize") {
    return <Customize navigate={navigate} />;
  }

  if (page === "search") {
    return <Search navigate={navigate} search={data} />;
  }

  if (page === "login") {
    return <Login navigate={navigate} />;
  }

  if (page === "register") {
    return <Register navigate={navigate} />;
  }

  return <Home navigate={navigate} />;
}

export default App;