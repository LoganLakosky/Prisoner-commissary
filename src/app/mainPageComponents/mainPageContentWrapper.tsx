import Footer from "../footerComponents/Footer";
import "./mainPageContentWrapper.css";
import MainPageSlider1 from "./mainPageSlider1";

const drinksArr = [
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Coca-Cola",
    itemPrice: "$10.99",
    imgSrc: "/Coke.webp",
  },

  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Sunkist",
    itemPrice: "$10.99",
    imgSrc: "/Sunkist.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Drpepper",
    itemPrice: "$2.99",
    imgSrc: "/Drpepper.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Fresca",
    itemPrice: "$11.99",
    imgSrc: "/Fresca.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Canned Fresca",
    itemPrice: "$4.99",
    imgSrc: "/FrescaCan.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Mtn Dew",
    itemPrice: "$15.99",
    imgSrc: "/MtnDew.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Orange Fanta",
    itemPrice: "$5.99",
    imgSrc: "/OrangeFanta.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Sprite",
    itemPrice: "$12.99",
    imgSrc: "/Sprite.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Starry",
    itemPrice: "$7.99",
    imgSrc: "/Starry.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Coca-Cola",
    itemPrice: "$10.99",
    imgSrc: "/Coke.webp",
  },
    {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Mtn Dew",
    itemPrice: "$15.99",
    imgSrc: "/MtnDew.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Orange Fanta",
    itemPrice: "$5.99",
    imgSrc: "/OrangeFanta.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Sprite",
    itemPrice: "$12.99",
    imgSrc: "/Sprite.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Starry",
    itemPrice: "$7.99",
    imgSrc: "/Starry.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Starry",
    itemPrice: "$7.99",
    imgSrc: "/Starry.webp",
  },
];

export default function MainPageContent() {
  return (
    <div className="mainPageContentContainer">
      <div className="imageSlider1"></div>
      <MainPageSlider1 productsArr={...drinksArr} />

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
