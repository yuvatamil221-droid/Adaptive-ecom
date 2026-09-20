import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Header({ navigate, showSearch = true }) {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, user } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchText.trim()) {
      navigate("search", {
        search: searchText.trim(),
      });
    } else {
      navigate("search");
    }
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* TOP HEADER */}

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-4 sm:px-6 lg:px-8">
        {/* LOGO */}

        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-xl font-black text-white">
            A
          </div>

          <span className="text-2xl font-black text-gray-900">adaptiva</span>
        </button>

        {/* DESKTOP SEARCH */}

        {showSearch && (
          <form
            onSubmit={handleSearch}
            className="ml-auto hidden w-full max-w-lg md:block"
          >
            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4">
              <span className="text-xl">🔍</span>

              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search products, brands..."
                className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              />
            </div>
          </form>
        )}

        {/* RIGHT SIDE BUTTONS */}

        <div className="ml-auto flex items-center gap-2">
          {/* WISHLIST */}

          <button
            onClick={() => navigate("wishlist")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-xl hover:bg-gray-100"
          >
            ♡
          </button>

          {/* CART */}

          <button
            onClick={() => navigate("cart")}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-xl hover:bg-gray-100"
          >
            🛍️
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* LOGIN */}

          {isLoggedIn ? (
  <button
    onClick={() => navigate("profile")}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white"
  >
   {user?.name?.charAt(0).toUpperCase()}
  </button>
) : (
  <button
    onClick={() => navigate("login")}
    className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white"
  >
    Login
  </button>
)}
        </div>
      </div>

      {/* MOBILE SEARCH */}

      {showSearch && (
        <div className="px-3 pb-4 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4">
              <span className="text-xl">🔍</span>

              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              />
            </div>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
