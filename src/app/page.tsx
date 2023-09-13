import "./homepage.css";
import MainPageContent from "./mainPageComponents/mainPageContentWrapper";
import NavBar from "./NavbarComponents/navBar";
export default function HomePage() {
  return (
    <div className="homePageMainContainer">
      <NavBar />
      <MainPageContent />
    </div>
  );
}
