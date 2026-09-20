import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ExperienceSwitcher({ navigate }) {
  const { userProfile, setUserProfile } = useContext(UserContext);

  const experiences = [
    {
      id: "dealHunter",
      name: "Deal Hunter",
    },
    {
      id: "premiumShopper",
      name: "Premium Shopper",
    },
    {
      id: "frequentShopper",
      name: "Frequent Shopper",
    },
    {
      id: "explorer",
      name: "Explorer",
    },
    {
      id: "accessibility",
      name: "Accessibility",
    },
  ];

  const handleChange = (event) => {
    const selectedExperience = event.target.value;

    setUserProfile(selectedExperience);

    if (navigate) {
      navigate("home");
    }
  };

  return (
    <section className="bg-[#151515] text-white">

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">

        <div className="flex items-center gap-4">

          {/* Demo Mode */}
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Demo Mode
            </p>

            <p className="text-sm font-black">
              Experience Switcher
            </p>
          </div>

          {/* Mobile Label */}
          <div className="sm:hidden">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
              Demo Mode
            </p>

            <p className="text-xs font-black">
              Experience Switcher
            </p>
          </div>

          {/* Experience Dropdown */}
          <select
            value={userProfile}
            onChange={handleChange}
            className="min-w-0 flex-1 rounded-xl border border-gray-600 bg-[#252525] px-4 py-3 text-sm font-bold text-white outline-none focus:border-gray-400 sm:max-w-[220px]"
          >
            {experiences.map((experience) => (
              <option
                key={experience.id}
                value={experience.id}
              >
                {experience.name}
              </option>
            ))}
          </select>

          

        </div>

      </div>

    </section>
  );
}

export default ExperienceSwitcher;