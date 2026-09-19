import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Register({ navigate }) {
  const { registerUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    registerUser(newUser);

    alert("Account created successfully!");

    navigate("login");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-xl font-black text-white">
            A
          </div>

          <h1 className="mt-5 text-3xl font-black">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create an account to continue shopping
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="mb-2 block text-sm font-bold">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white hover:bg-gray-700"
          >
            Create Account →
          </button>

        </form>

        <div className="mt-7 text-center">

          <p className="text-sm text-gray-500">
            Already have an account?
          </p>

          <button
            onClick={() => navigate("login")}
            className="mt-2 text-sm font-bold text-red-500 hover:text-red-600"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Register;