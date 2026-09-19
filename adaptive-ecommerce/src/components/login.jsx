import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login({ navigate }) {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const success = login(email, password);

    if (!success) {
      alert("Invalid email or password.");
      return;
    }

    alert("Login successful!");

    navigate("checkout");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-xl font-black text-white">
            A
          </div>

          <h1 className="mt-5 text-3xl font-black">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to continue shopping
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="mb-2 block text-sm font-bold">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white hover:bg-gray-700"
          >
            Login →
          </button>

        </form>

        <div className="mt-7 text-center">

          <p className="text-sm text-gray-500">
            Don't have an account?
          </p>

          <button
            onClick={() => navigate("register")}
            className="mt-2 text-sm font-bold text-red-500 hover:text-red-600"
          >
            Create an Account
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;