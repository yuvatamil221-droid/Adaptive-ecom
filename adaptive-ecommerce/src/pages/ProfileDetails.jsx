import { useContext, useState } from "react";
import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { UserContext } from "../context/UserContext";

function ProfileDetails({ navigate }) {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [mobile, setMobile] = useState(user?.mobile || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [dob, setDob] = useState(user?.dob || "");
  const [alternateMobile, setAlternateMobile] = useState(
    user?.alternateMobile || ""
  );

  const handleSave = () => {
    setUser({
      ...user,
      name,
      email,
      mobile,
      gender,
      dob,
      alternateMobile,
    });

    alert("Profile details saved");

    navigate("profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      

      <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">

        <button
          onClick={() => navigate("profile")}
          className="mb-4 text-sm font-bold text-gray-600 hover:text-black"
        >
          ← Back to Profile
        </button>

        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                My Account
              </p>

              <h1 className="mt-1 text-xl font-black sm:text-2xl">
                Profile Details
              </h1>
            </div>

            
          </div>

          {/* Fields */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-600">
                Mobile Number
              </label>

              <input
                type="tel"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                placeholder="Enter mobile number"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-600">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-600">
                Gender
              </label>

              <select
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* DOB */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-600">
                Date of Birth
              </label>

              <input
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
              />
            </div>

            {/* Alternate Mobile */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-600">
                Alternate Mobile
              </label>

              <input
                type="tel"
                value={alternateMobile}
                onChange={(event) => setAlternateMobile(event.target.value)}
                placeholder="Optional"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex justify-end gap-2 border-t border-gray-200 pt-4">

            <button
              onClick={() => navigate("profile")}
              className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-bold text-white hover:bg-gray-700"
            >
              Save Changes
            </button>

          </div>
        </section>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default ProfileDetails;