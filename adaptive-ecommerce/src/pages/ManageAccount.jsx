import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function ManageAccount({ navigate }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          {/* Header */}
          <button
            onClick={() => navigate("profile")}
            className="mb-5 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Profile
          </button>

          <h1 className="text-2xl font-bold">
            Manage Account & Address
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your account information and saved addresses.
          </p>

          {/* Options */}
          <div className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            <button
              onClick={() => navigate("accountDetails")}
              className="flex w-full items-center justify-between px-5 py-5 text-left hover:bg-gray-100"
            >
              <div>
                <p className="font-semibold">
                  Account Details
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your personal information
                </p>
              </div>

              <span className="text-xl text-gray-400">
                →
              </span>
            </button>

            <button
              onClick={() => navigate("addresses")}
              className="flex w-full items-center justify-between px-5 py-5 text-left hover:bg-gray-100"
            >
              <div>
                <p className="font-semibold">
                  Addresses
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Manage your saved delivery addresses
                </p>
              </div>

              <span className="text-xl text-gray-400">
                →
              </span>
            </button>
          </div>
        </div>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default ManageAccount;