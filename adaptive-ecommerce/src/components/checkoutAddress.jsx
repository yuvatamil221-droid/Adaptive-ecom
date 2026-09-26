import { useState } from "react";

function CheckoutAddress({
  address,
  handleAddressChange,
  addAddress,
}) {
  const [showForm, setShowForm] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    house: "",
    area: "",
    city: "",
    state: "",
    type: "Home",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveAddress = () => {
    if (
      !formData.fullName ||
      !formData.mobile ||
      !formData.pincode ||
      !formData.house ||
      !formData.area ||
      !formData.city ||
      !formData.state
    ) {
      alert("Please fill all address details.");
      return;
    }

    const completeAddress =
      `${formData.fullName}, ` +
      `${formData.house}, ` +
      `${formData.area}, ` +
      `${formData.city}, ` +
      `${formData.state} - ${formData.pincode}. ` +
      `Mobile: ${formData.mobile}`;

    handleAddressChange(completeAddress);
    addAddress(completeAddress);

    setShowForm(false);
  };

  const handleChangeAddress = () => {
    setShowForm(true);
  };

  return (
    <section className="bg-white p-5 shadow-sm sm:p-6">

      {/* HEADER */}

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Step 1
          </p>

          <h2 className="mt-2 text-xl font-black sm:text-2xl">
            Delivery Address
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Enter the address where you want your order delivered.
          </p>
        </div>

        {/* CHANGE BUTTON */}

        {!showForm && address && (
          <button
            onClick={handleChangeAddress}
            className="text-sm font-black text-red-500 hover:text-red-600"
          >
            Change
          </button>
        )}

      </div>

      {/* SAVED ADDRESS */}

      {!showForm && address && (
        <div className="mt-5 border border-gray-200 p-4">

          <div className="flex items-start gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gray-100 text-sm font-black">
              {formData.type === "Home" ? "⌂" : "▣"}
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center gap-2">

                <h3 className="text-sm font-black">
                  {formData.fullName}
                </h3>

                <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase">
                  {formData.type}
                </span>

              </div>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {formData.house}, {formData.area}
                <br />
                {formData.city}, {formData.state} -{" "}
                {formData.pincode}
              </p>

              <p className="mt-2 text-sm font-bold text-gray-700">
                Mobile: {formData.mobile}
              </p>

            </div>

          </div>

        </div>
      )}

      {/* ADDRESS FORM */}

      {showForm && (
        <div className="mt-6">

          {/* NAME + MOBILE */}

          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <label className="text-sm font-bold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                maxLength="10"
                className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

          </div>

          {/* PINCODE */}

          <div className="mt-4 sm:w-1/2">

            <label className="text-sm font-bold text-gray-700">
              PIN Code
            </label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter 6-digit PIN code"
              maxLength="6"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
            />

          </div>

          {/* HOUSE */}

          <div className="mt-4">

            <label className="text-sm font-bold text-gray-700">
              House / Flat / Building
            </label>

            <input
              type="text"
              name="house"
              value={formData.house}
              onChange={handleChange}
              placeholder="House number, flat number, building name"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
            />

          </div>

          {/* AREA */}

          <div className="mt-4">

            <label className="text-sm font-bold text-gray-700">
              Area / Street
            </label>

            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area, street, landmark"
              className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
            />

          </div>

          {/* CITY + STATE */}

          <div className="mt-4 grid gap-4 sm:grid-cols-2">

            <div>

              <label className="text-sm font-bold text-gray-700">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="text-sm font-bold text-gray-700">
                State
              </label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="mt-2 w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />

            </div>

          </div>

          {/* ADDRESS TYPE */}

          <div className="mt-5">

            <label className="text-sm font-bold text-gray-700">
              Address Type
            </label>

            <div className="mt-3 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    type: "Home",
                  })
                }
                className={`border px-6 py-3 text-sm font-bold ${
                  formData.type === "Home"
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                Home
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    type: "Work",
                  })
                }
                className={`border px-6 py-3 text-sm font-bold ${
                  formData.type === "Work"
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700"
                }`}
              >
                Work
              </button>

            </div>

          </div>

          {/* SAVE BUTTON */}

          <button
            onClick={handleSaveAddress}
            className="mt-6 bg-black px-6 py-3 text-sm font-black text-white hover:bg-gray-800"
          >
            Save & Continue
          </button>

        </div>
      )}

    </section>
  );
}

export default CheckoutAddress;