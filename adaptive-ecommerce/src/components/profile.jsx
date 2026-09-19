import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Profile({ navigate }) {
  const { userProfile } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+91 98765 43210",
  });

  const [form, setForm] = useState(user);

  const profileInfo = {
    dealHunter: {
      title: "Deal Hunter",
      description:
        "Your experience focuses on deals, discounts and saving more.",
    },

    premiumShopper: {
      title: "Premium Shopper",
      description:
        "Your experience focuses on premium products and curated collections.",
    },

    frequentShopper: {
      title: "Frequent Shopper",
      description:
        "Your experience focuses on quick shopping, reordering and your purchase history.",
    },

    explorer: {
      title: "Explorer",
      description:
        "Your experience focuses on discovering trending and new products.",
    },

    accessibility: {
      title: "Accessibility",
      description:
        "Your experience focuses on clear layouts, comfortable controls and easy interaction.",
    },
  };

  const current =
    profileInfo[userProfile] || profileInfo.dealHunter;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(form);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setForm(user);
    setIsEditing(false);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
          My account
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
          Profile
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your account and shopping preferences.
        </p>
      </div>


      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">

        {/* Profile Card */}
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-3xl text-white">
              👤
            </div>

            <h2 className="mt-4 text-xl font-black">
              {user.name}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {user.email}
            </p>

          </div>


          {/* Experience */}
          <div className="mt-6 rounded-2xl bg-gray-50 p-4">

            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
              Current experience
            </p>

            <h3 className="mt-2 text-sm font-black">
              {current.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              {current.description}
            </p>

          </div>


          <button
            onClick={() =>
              navigate && navigate("customize")
            }
            className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-3 text-xs font-bold text-gray-700 transition hover:bg-gray-50"
          >
            Customize Experience →
          </button>

        </aside>


        {/* Main Content */}
        <div className="space-y-6">

          {/* Personal Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

            <div className="flex items-center justify-between gap-4">

              <div>
                <h2 className="text-lg font-black">
                  Personal Information
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Keep your account details up to date.
                </p>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-bold transition hover:bg-gray-50"
                >
                  Edit
                </button>
              )}

            </div>


            {isEditing ? (
              <div className="mt-7 space-y-4">

                <Input
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                <Input
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <Input
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />


                <div className="grid grid-cols-2 gap-3 pt-2">

                  <button
                    onClick={handleCancel}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSave}
                    className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
                  >
                    Save Changes
                  </button>

                </div>

              </div>
            ) : (
              <div className="mt-7 grid gap-5 sm:grid-cols-3">

                <Info
                  label="Full Name"
                  value={user.name}
                />

                <Info
                  label="Email"
                  value={user.email}
                />

                <Info
                  label="Phone"
                  value={user.phone}
                />

              </div>
            )}

          </div>


          {/* Quick Actions */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

            <h2 className="text-lg font-black">
              Quick Actions
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              <ActionButton
                icon="📦"
                title="My Orders"
                description="View your orders"
                onClick={() =>
                  navigate && navigate("orders")
                }
              />

              <ActionButton
                icon="♡"
                title="Wishlist"
                description="View saved products"
                onClick={() =>
                  navigate && navigate("wishlist")
                }
              />

              <ActionButton
                icon="🛒"
                title="Cart"
                description="View your shopping cart"
                onClick={() =>
                  navigate && navigate("cart")
                }
              />

              <ActionButton
                icon="🔍"
                title="Browse Products"
                description="Discover products"
                onClick={() =>
                  navigate && navigate("products")
                }
              />

              <ActionButton
                icon="⚙️"
                title="Customize"
                description="Change your experience"
                onClick={() =>
                  navigate && navigate("customize")
                }
              />

              <ActionButton
                icon="🚚"
                title="Track Orders"
                description="Check delivery status"
                onClick={() =>
                  navigate && navigate("orders")
                }
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function Input({ label, name, value, onChange }) {
  return (
    <div>

      <label className="mb-2 block text-xs font-bold text-gray-600">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
      />

    </div>
  );
}


function Info({ label, value }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">

      <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-semibold text-gray-800">
        {value}
      </p>

    </div>
  );
}


function ActionButton({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4 text-left transition hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
    >

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          {description}
        </p>
      </div>

    </button>
  );
}

export default Profile;