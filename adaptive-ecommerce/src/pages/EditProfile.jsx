import { useState } from "react";

function EditProfile({
  navigate,
  profile,
  updateProfile,
  deleteProfile,
}) {
  // --------------------------------
  // FORM DATA
  // --------------------------------

  const [formData, setFormData] = useState({
    name: profile?.name || "",
    age: profile?.age || "",
    gender: profile?.gender || "",
    dob: profile?.dob || "",
  });

  // --------------------------------
  // HANDLE INPUT
  // --------------------------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  // --------------------------------
  // SAVE PROFILE
  // --------------------------------

  const handleSave = (event) => {
    event.preventDefault();

    const updatedProfile = {
      ...profile,
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      dob: formData.dob,
    };

    updateProfile(updatedProfile);

    navigate("profile");
  };

  // --------------------------------
  // DELETE PROFILE
  // --------------------------------

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${
        profile?.name || "this profile"
      }?`
    );

    if (!confirmed) {
      return;
    }

    deleteProfile(profile.id);

    navigate("profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-lg">

        {/* -------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------- */}

        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => navigate("profile")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl transition hover:bg-gray-100"
          >
            ←
          </button>

          <h1 className="text-2xl font-black text-gray-900">
            Edit Profile
          </h1>
        </div>

        {/* -------------------------------- */}
        {/* FORM */}
        {/* -------------------------------- */}

        <form
          onSubmit={handleSave}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >

          {/* NAME */}

          <div className="mb-5">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400"
            />
          </div>

          {/* AGE */}

          <div className="mb-5">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400"
            />
          </div>

          {/* GENDER */}

          <div className="mb-5">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-purple-400"
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* DATE OF BIRTH */}

          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400"
            />
          </div>

          {/* -------------------------------- */}
          {/* SAVE BUTTON */}
          {/* -------------------------------- */}

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Save Changes
          </button>

          {/* -------------------------------- */}
          {/* DELETE BUTTON */}
          {/* -------------------------------- */}

          <button
            type="button"
            onClick={handleDelete}
            className="mt-3 w-full rounded-xl border border-red-200 bg-white px-5 py-3 font-bold text-red-500 transition hover:bg-red-50"
          >
            Delete Profile
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditProfile;    