import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import WishlistComponent from "../components/wishlist";
import Footer from "../components/footer";

function Wishlist({ navigate }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher />

      <Navigation navigate={navigate} />

      <main>
        <WishlistComponent navigate={navigate} />
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default Wishlist;