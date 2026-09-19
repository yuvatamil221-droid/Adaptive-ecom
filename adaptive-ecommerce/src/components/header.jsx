import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Header({ navigate }) {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, user } = useContext(UserContext);

  const [searchText, setSearchText] = useState("");

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-[76px] items-center gap-6">

          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="shrink-0 text-2xl font-black tracking-tight"
          >
            <span className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 text-white">
              A
            </span>
            adaptiva
          </button>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <button
              onClick={() => navigate("home")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </button>

            <button
              onClick={() => navigate("products", { deal: true })}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Deals
            </button>

            <button
              onClick={() => navigate("products", { maxPrice: 999 })}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Under ₹999
            </button>

            <button
              onClick={() => navigate("products", { flashSale: true })}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Flash Sale
            </button>

            <button
              onClick={() => navigate("wishlist")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Wishlist
            </button>

            <button
              onClick={() => navigate("cart")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cart
            </button>
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="ml-auto hidden w-full max-w-sm md:block"
          >
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                type="text"
                value={searchText}
                onChange={(event) =>
                  setSearchText(event.target.value)
                }
                placeholder="Search products, brands..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-gray-400"
              />
            </div>
          </form>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <button
              onClick={() => navigate("wishlist")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl hover:bg-gray-50"
              aria-label="Wishlist"
            >
              ♡
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate("cart")}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-lg hover:bg-gray-50"
              aria-label="Cart"
            >
              🛍️

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login / Profile */}
            {isLoggedIn ? (
              <button
                onClick={() => navigate("profile")}
                className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50"
              >
                {user?.name || "Profile"}
              </button>
            ) : (
              <button
                onClick={() => navigate("login")}
                className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-gray-700"
              >
                Login
              </button>
            )}

          </div>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="pb-4 md:hidden"
        >
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              value={searchText}
              onChange={(event) =>
                setSearchText(event.target.value)
              }
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none"
            />
          </div>
        </form>

      </div>
    </header>
  );
}

export default Header;