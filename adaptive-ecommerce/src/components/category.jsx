import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import categories from "../data/categories";

function Category({ navigate }) {
  const { userProfile } = useContext(UserContext);

  const getLabel = () => {
    if (userProfile === "dealHunter") {
      return "DEALS";
    }

    if (userProfile === "premiumShopper") {
      return "CURATED";
    }

    if (userProfile === "frequentShopper") {
      return "FAVOURITES";
    }

    if (userProfile === "explorer") {
      return "DISCOVER";
    }

    return "EXPLORE";
  };

  const handleCategoryClick = (category) => {
    navigate("products", {
      category: category.id,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          className="group relative h-52 overflow-hidden rounded-2xl text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-60"
        >
          {/* Category Image */}
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Category Content */}
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
              {getLabel()}
            </p>

            <h3 className="mt-1 text-xl font-black">{category.name}</h3>

            <p className="mt-1 text-xs text-white/80">{category.description}</p>

            <span className="mt-3 inline-block text-xs font-bold transition group-hover:translate-x-1">
              Explore →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Category;
