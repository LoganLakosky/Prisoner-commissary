import "./homepage.css";
import MainPageContent from "./mainPageContent";
import NavBar from "./navBar";
export default function HomePage() {
  return (
    <div className="HomePageMainContainer">
      <NavBar />
      <MainPageContent />
    </div>
  );
}
