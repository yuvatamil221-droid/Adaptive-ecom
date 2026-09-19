import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import CheckoutComponent from "../components/checkout";
import Footer from "../components/footer";

function Checkout({ navigate }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header navigate={navigate} />

      <ExperienceSwitcher />

      <Navigation navigate={navigate} />

      <main>
        <CheckoutComponent navigate={navigate} />
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;