import Footer from "../footerComponents/Footer";
import "./mainPageContentWrapper.css";
import MainPageSliderWrapper from "./mainPageSliderWrapper";

export default function MainPageContent() {
  return (
    <div className="mainPageContentContainer">
      <div className="imageSlider1"></div>
      <MainPageSliderWrapper />

      <MainPageSliderWrapper />

      <div className="imageSlider2"></div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
