import { useContext, useState } from "react";

import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import CartComponent from "../components/cart";
import Footer from "../components/footer";

import { UserContext } from "../context/UserContext";

function Cart({ navigate }) {
  const { isLoggedIn } = useContext(UserContext);

  const [showLoginChoice, setShowLoginChoice] = useState(false);

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("checkout");
    } else {
      setShowLoginChoice(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main>
        <CartComponent
          navigate={navigate}
          onCheckout={handleCheckout}
        />
      </main>

      <Footer navigate={navigate} />

      {showLoginChoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                🔐
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Login to continue
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Please login or create an account before proceeding
                to checkout.
              </p>
            </div>

            <div className="mt-7 space-y-3">

              <button
                onClick={() => navigate("login")}
                className="w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-gray-700"
              >
                Login →
              </button>

              <button
                onClick={() => navigate("register")}
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-800 transition hover:bg-gray-50"
              >
                Create Account
              </button>

            </div>

            <button
              onClick={() => setShowLoginChoice(false)}
              className="mt-5 w-full text-sm font-semibold text-gray-400 hover:text-gray-700"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Cart;