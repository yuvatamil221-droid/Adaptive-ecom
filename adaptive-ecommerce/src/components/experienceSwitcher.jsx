import { useContext } from "react";

import { UserContext } from "../context/UserContext";

function ExperienceSwitcher({ navigate }) {
  const { userProfile, setUserProfile } =
    useContext(UserContext);

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

  const handleChange = (experience) => {
    setUserProfile(experience.id);

    if (navigate) {
      navigate("home");
    }
  };

  const currentExperience =
    experiences.find(
      (experience) => experience.id === userProfile
    );

  return (
    <div className="bg-[#151515] text-white">

      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">

        {/* DEMO MODE */}

        <div className="hidden sm:block">

          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Demo Mode
          </p>

          <p className="text-sm font-bold">
            Experience Switcher
          </p>

        </div>

        {/* DROPDOWN */}

        <select
          value={userProfile}
          onChange={(event) => {
            const selectedExperience =
              experiences.find(
                (experience) =>
                  experience.id === event.target.value
              );

            handleChange(selectedExperience);
          }}
          className="rounded-lg border border-gray-600 bg-[#292929] px-4 py-2 text-sm font-medium text-white outline-none"
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

        {/* DESCRIPTION */}

        <p className="hidden text-xs text-gray-400 md:block">
          Theme • Navigation • Homepage • Cards • CTAs adapt instantly
        </p>

      </div>

    </div>
  );
}

export default ExperienceSwitcher;