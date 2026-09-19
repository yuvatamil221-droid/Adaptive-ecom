import { useContext } from "react";

import Header from "../components/header";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import DealHome from "./DealHome";
import PremiumHome from "./PremiumHome";
import FrequentHome from "./FrequentHome";
import ExplorerHome from "./ExplorerHome";
import AccessibilityHome from "./AccessibilityHome";

import { UserContext } from "../context/UserContext";

function Home({ navigate }) {
  const { userProfile } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      {userProfile === "dealHunter" && (
        <DealHome navigate={navigate} />
      )}

      {userProfile === "premiumShopper" && (
        <PremiumHome navigate={navigate} />
      )}

      {userProfile === "frequentShopper" && (
        <FrequentHome navigate={navigate} />
      )}

      {userProfile === "explorer" && (
        <ExplorerHome navigate={navigate} />
      )}

      {userProfile === "accessibility" && (
        <AccessibilityHome navigate={navigate} />
      )}

      <Footer navigate={navigate} />

    </div>
  );
}

export default Home;