import { useState } from "react";

function AddProfile({ navigate, addProfile }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.age ||
    !formData.gender ||
    !formData.dob
  ) {
    alert("Please fill all the details.");
    return;
  }

  const newProfile = {
    id: Date.now(),
    name: formData.name,
    age: Number(formData.age),
    gender: formData.gender,
    dob: formData.dob,
  };

  addProfile(newProfile);

  navigate("profile");
};

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-2xl px-5 py-5">

          <button
            onClick={() => navigate("profile")}
            className="mb-3 text-sm font-bold text-purple-600"
          >
            ← Back
          </button>

          <h1 className="text-2xl font-black text-gray-900">
            Add Profile
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Create a new shopping profile.
          </p>

        </div>
      </div>

      {/* Form */}
      <main className="mx-auto max-w-2xl px-5 py-6">

        <form
          onSubmit={handleSave}
          className="rounded-2xl bg-white p-5 shadow-sm"
        >

          {/* Full Name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              min="1"
              max="100"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => navigate("profile")}
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-purple-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-purple-600"
            >
              Save Profile
            </button>

          </div>

        </form>
      </main>
    </div>
  );
}

export default AddProfile;