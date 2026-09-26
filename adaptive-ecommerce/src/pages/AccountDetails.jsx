import { useContext, useState } from "react";
import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { UserContext } from "../context/UserContext";

function AccountDetails({ navigate, data }) {
  const { user, updateUser } = useContext(UserContext);

  const profile = data || user;

  const [formData, setFormData] = useState({
    name: profile?.name || "",
    age: profile?.age || "",
    gender: profile?.gender || "",
    dateOfBirth: profile?.dateOfBirth || "",
    mobile: profile?.mobile || "",
    email: profile?.email || "",
    alternateMobile: profile?.alternateMobile || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!profile) {
      alert("No user profile found.");
      return;
    }

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const updatedUser = {
      ...profile,
      ...formData,
      age: formData.age ? Number(formData.age) : "",
    };

    updateUser(updatedUser);

    alert("Profile details saved successfully.");

    navigate("profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-3xl px-4 py-8">

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          {/* Back */}

          <button
            onClick={() => navigate("manageAccount")}
            className="mb-5 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Manage Account
          </button>

          {/* Title */}

          <h1 className="text-2xl font-bold">
            Account Details
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Update your personal information.
          </p>

          {/* Form */}

          <div className="mt-6 space-y-5">

            {/* Full Name */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Age */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Gender */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
              >
                <option value="">
                  Select Gender
                </option>

                <option value="female">
                  Female
                </option>

                <option value="male">
                  Male
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            {/* Date of Birth */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Date of Birth
              </label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Mobile */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Alternate Mobile */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Alternate Mobile Number
              </label>

              <input
                type="tel"
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleChange}
                placeholder="Enter alternate mobile number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Save */}

            <button
              type="button"
              onClick={handleSave}
                className="w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Save Details
            </button>

            {/* Delete */}

            <button
              type="button"
              onClick={() => alert("Delete account option selected")}
              className="w-full rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-600 hover:bg-red-50"
            >
              Delete Account
            </button>

          </div>
        </div>
      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default AccountDetails;