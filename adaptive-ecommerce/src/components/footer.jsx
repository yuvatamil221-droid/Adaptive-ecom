function Footer({ navigate }) {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <button
              onClick={() => navigate("home")}
              className="text-left text-2xl font-black tracking-tight"
            >
              Adaptiva<span className="text-red-500">.</span>
            </button>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              An adaptive shopping experience that changes according
              to your preferences and shopping style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Shop
            </h3>

            <div className="mt-4 space-y-3">
              <button
                onClick={() => navigate("products")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                All Products
              </button>

              <button
                onClick={() => navigate("products", { category: "electronics" })}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Electronics
              </button>

              <button
                onClick={() => navigate("products", { category: "fashion" })}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Fashion
              </button>

              <button
                onClick={() => navigate("products", { category: "beauty" })}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Beauty
              </button>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Account
            </h3>

            <div className="mt-4 space-y-3">
              <button
                onClick={() => navigate("profile")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                My Profile
              </button>

              <button
                onClick={() => navigate("orders")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                My Orders
              </button>

              <button
                onClick={() => navigate("wishlist")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Wishlist
              </button>

              <button
                onClick={() => navigate("cart")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Cart
              </button>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Experience
            </h3>

            <div className="mt-4 space-y-3">
              <button
                onClick={() => navigate("customize")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Customize Experience
              </button>

              <button
                onClick={() => navigate("search")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Search
              </button>

              <button
                onClick={() => navigate("login")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("register")}
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Adaptiva. All rights reserved.</p>

          <p>
            Personalized shopping experience
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;