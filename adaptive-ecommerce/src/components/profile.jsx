import { useContext } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import { UserContext } from "../context/UserContext";


function Profile({
  navigate,
  goBack,
  profiles,
  selectedProfile,
  setSelectedProfile,
}) {
  const {
    user,
    isLoggedIn,
    logout,
  } = useContext(UserContext);


  // =========================
  // CURRENT PROFILE
  // =========================

  const currentProfile =
    selectedProfile ||
    profiles.find(
      (profile) => profile.id === user?.id
    ) ||
    profiles[0];


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    logout();

    // Clear selected profile
    setSelectedProfile(null);

    navigate("home");
  };


  // =========================
  // ADD PROFILE
  // =========================

  const handleAddProfile = () => {
    navigate("addProfile");
  };


  // =========================
  // MENU ITEMS
  // =========================

  const menuItems = [
    {
      icon: "⌁",
      title: "My Orders",
      description: "View your previous orders",
      page: "orders",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },

    {
      icon: "♡",
      title: "My Wishlist",
      description: "View your saved products",
      page: "wishlist",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
    },

    {
      icon: "%",
      title: "Coupons",
      description: "View your available coupons",
      page: "coupons",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },

    {
      icon: "✦",
      title: "Customize Your Experience",
      description: "Personalize your shopping experience",
      page: "customize",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },

    {
      icon: "○",
      title: "Manage Account & Address",
      description: "Manage account details and addresses",
      page: "manageAccount",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },

   

    {
      icon: "⚙",
      title: "Settings",
      description:
        "Manage your application settings",
      page: "settings",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 text-gray-900">

      {/* Navigation */}

      <Navigation navigate={navigate} />


      <main className="mx-auto max-w-5xl px-4 py-6 pb-28 sm:px-6 sm:py-10 sm:pb-10">

        {/* =========================
            PROFILE HEADER
        ========================= */}

        <div className="mb-6 text-center">

          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-300 bg-white text-lg text-purple-500">
            ✦
          </div>

          <h1 className="mt-2 text-xl font-black text-gray-900">
            {currentProfile?.name || ""}
          </h1>

        </div>


        {/* =========================
            PROFILE SELECTOR
        ========================= */}

        {isLoggedIn && (

          <section className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

            <div className="flex items-center">

              {/* PROFILES */}

              <div className="flex flex-1 items-center gap-6 overflow-x-auto">

                {(profiles || []).map((profile) => (

                  <div
                    key={profile.id}
                    className="flex shrink-0 flex-col items-center"
                  >

                    {/* Avatar + Name */}

                    <button
                      onClick={() =>
                        setSelectedProfile(profile)
                      }
                      className="flex flex-col items-center"
                    >

                      {/* Avatar */}

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-black ${
                          currentProfile?.id === profile.id
                            ? "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-md"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {profile.name
                          ? profile.name
                              .charAt(0)
                              .toUpperCase()
                          : ""}
                      </div>


                      {/* Name */}

                      <p className="mt-1 text-sm font-black text-gray-800">
                        {profile.name || ""}
                      </p>

                    </button>


                    {/* EDIT PROFILE */}

                    {currentProfile?.id === profile.id && (

                      <button
                        onClick={() =>
                          navigate(
                            "editProfile",
                            profile
                          )
                        }
                        className="mt-1 flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-purple-600"
                      >

                        <span className="text-sm">
                          ⚙
                        </span>

                        <span>
                          Edit Profile
                        </span>

                      </button>

                    )}

                  </div>

                ))}

              </div>


              {/* DIVIDER */}

              <div className="mx-5 h-14 w-px bg-gray-200" />


              {/* ADD PROFILE */}

              <button
                onClick={handleAddProfile}
                className="flex shrink-0 flex-col items-center"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-purple-300 bg-white text-3xl font-light text-purple-500 transition hover:bg-purple-50">
                  +
                </div>

                <span className="mt-1 text-xs font-black text-gray-600">
                  Add
                </span>

              </button>

            </div>

          </section>
        )}


        {/* =========================
            PROFILE OPTIONS
        ========================= */}

        <section className="mt-5 overflow-hidden rounded-2xl bg-white shadow-sm">

          {menuItems.map((item, index) => (

            <button
              key={item.title}
              onClick={() =>
                navigate(item.page)
              }
              className={`flex w-full items-center gap-4 px-4 py-5 text-left transition hover:bg-gray-50 sm:px-6 ${
                index !== menuItems.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >

              {/* ICON */}

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} text-xl`}
              >
                {item.icon}
              </div>


              {/* TEXT */}

              <div className="min-w-0 flex-1">

                <h2 className="text-sm font-black text-gray-900 sm:text-base">
                  {item.title}
                </h2>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {item.description}
                </p>

              </div>


              {/* ARROW */}

              <span className="text-xl font-bold text-gray-400">
                →
              </span>

            </button>

          ))}

        </section>


        {/* =========================
            RECENTLY VIEWED
        ========================= */}


        {/* =========================
            LOGOUT
        ========================= */}

        {isLoggedIn && (

          <button
            onClick={handleLogout}
            className="mt-6 w-full rounded-2xl border-2 border-pink-300 bg-white px-5 py-4 text-sm font-black text-pink-500 transition hover:bg-pink-50"
          >
            Logout
          </button>

        )}

      </main>


     

    

    </div>
  );
}


export default Profile;