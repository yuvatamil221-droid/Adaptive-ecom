import Header from "../components/header";
import Footer from "../components/footer";
import ProfileComponent from "../components/profile";

function Profile({
  navigate,
  goBack,
  profiles,
  selectedProfile,
  setSelectedProfile,
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header
        navigate={navigate}
        selectedProfile={selectedProfile}
      />

      <ProfileComponent
        navigate={navigate}
        goBack={goBack}
        profiles={profiles}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />

     

    </div>
  );
}

export default Profile;