import Header from "../components/header";
import Navigation from "../components/navigation";
import ExperienceSwitcher from "../components/experienceSwitcher";
import Footer from "../components/footer";

import LoginComponent from "../components/login";

function Login({ navigate }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header navigate={navigate} />

      <ExperienceSwitcher navigate={navigate} />

      <Navigation navigate={navigate} />

      <main>
        <LoginComponent navigate={navigate} />
      </main>

      <Footer navigate={navigate} />

    </div>
  );
}

export default Login;