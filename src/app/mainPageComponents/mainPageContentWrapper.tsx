import Footer from "../footerComponents/Footer";
import "./mainPageContentWrapper.css";
import MainPageSlider1 from "./mainPageSlider1";

const drinksArr = [
  { productType: "Soda", productName: "Coca-Cola", imgSrc: "./Coke.webp" },
  { productType: "Soda", productName: "Pepsi", imgSrc: "./Coke.webp" },
];
export default function MainPageContent() {
  return (
    <div className="mainPageContentContainer">
      <div className="imageSlider1"></div>
      <MainPageSlider1 drinksArr={...drinksArr} />

      <div className="mainPageContent2">
        <div className="productsContainer3"></div>
        <div className="productsContainer4"></div>
      </div>

      <div className="imageSlider2"></div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
