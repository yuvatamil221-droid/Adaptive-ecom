import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import WishlistComponent from "../components/wishlist";
import Footer from "../components/footer";

function Wishlist({ navigate, goBack }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher />

      

      <main>
        <WishlistComponent
  navigate={navigate}
  goBack={goBack}
/>
      </main>

      
    </div>
  );
}

export default Wishlist;