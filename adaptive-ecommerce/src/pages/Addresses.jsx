import { useState } from "react";
import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Addresses({ navigate }) {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "My Address",
      mobile: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      isDefault: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddAddress = () => {
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all address details");
      return;
    }

    const newAddress = {
      id: Date.now(),
      ...formData,
      isDefault: addresses.length === 0,
    };

    setAddresses([...addresses, newAddress]);

    setFormData({
      name: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

    setShowForm(false);
  };

  const makeDefault = (id) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const removeAddress = (id) => {
    setAddresses(
      addresses.filter((address) => address.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          {/* Back */}
          <button
            onClick={() => navigate("manageAccount")}
            className="mb-5 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Manage Account
          </button>

          {/* Heading */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Addresses
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage your delivery addresses.
              </p>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              + Add New Address
            </button>
          </div>

          {/* Add Address Form */}
          {showForm && (
            <div className="mt-6 rounded-2xl border border-gray-200 p-5">
              <h2 className="text-lg font-semibold">
                Add New Address
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black sm:col-span-2"
                />

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleAddAddress}
                  className="rounded-xl bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800"
                >
                  Save Address
                </button>

                <button
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Default Address */}
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold">
              Default Address
            </h2>

            {addresses
              .filter((address) => address.isDefault)
              .map((address) => (
                <div
                  key={address.id}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          {address.name}
                        </p>

                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                          Default
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-600">
                        {address.address}
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        {address.city}, {address.state} -{" "}
                        {address.pincode}
                      </p>

                      <p className="mt-1 text-sm text-gray-600">
                        Mobile: {address.mobile}
                      </p>
                    </div>

                    <button
                      onClick={() => removeAddress(address.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Addresses */}
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold">
              Other Addresses
            </h2>

            <div className="space-y-3">
              {addresses
                .filter((address) => !address.isDefault)
                .map((address) => (
                  <div
                    key={address.id}
                    className="rounded-2xl border border-gray-200 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">
                          {address.name}
                        </p>

                        <p className="mt-2 text-sm text-gray-600">
                          {address.address}
                        </p>

                        <p className="mt-1 text-sm text-gray-600">
                          {address.city}, {address.state} -{" "}
                          {address.pincode}
                        </p>

                        <p className="mt-1 text-sm text-gray-600">
                          Mobile: {address.mobile}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            makeDefault(address.id)
                          }
                          className="text-sm font-medium text-blue-600 hover:text-blue-800"
                        >
                          Make Default
                        </button>

                        <button
                          onClick={() =>
                            removeAddress(address.id)
                          }
                          className="text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              {addresses.filter(
                (address) => !address.isDefault
              ).length === 0 && (
                <p className="rounded-2xl border border-dashed border-gray-300 p-5 text-center text-sm text-gray-500">
                  No other addresses added.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Addresses;