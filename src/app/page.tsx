import "./homepage.css";
import MainPageContent from "./mainPageComponents/mainPageContentWrapper";
import NavBar from "./NavbarCompoents/navBar";
export default function HomePage() {
  return (
    <div className="homePageMainContainer">
      <NavBar />
      <MainPageContent />
    </div>
  );
}
