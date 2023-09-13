//const res = await fetch("api/drinks", {
//  method: "GET",
//});
//const response = await res.json();
//console.log(response);

import "./mainPageSliderWrapper.css";
import MainPageSlider from "./mainPageSlider";

const drinksArr: any = [
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Coca-Cola",
    itemPrice: "$10.99",
    imgSrc: "/Sodas/Coke.webp",
  },

  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Sunkist",
    itemPrice: "$10.99",
    imgSrc: "/Sodas/Sunkist.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Drpepper",
    itemPrice: "$2.99",
    imgSrc: "/Sodas/Drpepper.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Fresca",
    itemPrice: "$11.99",
    imgSrc: "/Sodas/Fresca.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Canned Fresca",
    itemPrice: "$4.99",
    imgSrc: "/Sodas/FrescaCan.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Mtn Dew",
    itemPrice: "$15.99",
    imgSrc: "/Sodas/MtnDew.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Orange Fanta",
    itemPrice: "$5.99",
    imgSrc: "/Sodas/OrangeFanta.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Sprite",
    itemPrice: "$12.99",
    imgSrc: "/Sodas/Sprite.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Starry",
    itemPrice: "$7.99",
    imgSrc: "/Sodas/Starry.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Coca-Cola",
    itemPrice: "$10.99",
    imgSrc: "/Sodas/Coke.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Mtn Dew",
    itemPrice: "$15.99",
    imgSrc: "/Sodas/MtnDew.webp",
  },
  {
    productType: "Soda",
    productDetails: "12 Oz",
    productName: "Orange Fanta",
    itemPrice: "$5.99",
    imgSrc: "/Sodas/OrangeFanta.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Sprite",
    itemPrice: "$12.99",
    imgSrc: "/Sodas/Sprite.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Starry",
    itemPrice: "$7.99",
    imgSrc: "/Sodas/Starry.webp",
  },
  {
    productType: "Soda",
    productDetails: "24 Oz",
    productName: "Starry",
    itemPrice: "$7.99",
    imgSrc: "/Sodas/Starry.webp",
  },
];

const snacksArr: any = [
  {
    productType: "Snacks",
    productName: "Almond Joy",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/AlmondJoy.webp",
  },
  {
    productType: "Snacks",
    productName: "Animal Crackers",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Animal Crackers.webp",
  },
  {
    productType: "Snacks",
    productName: "Chewy",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Chewy.webp",
  },
  {
    productType: "Snacks",
    productName: "Cookies",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Cookies.webp",
  },
  {
    productType: "Snacks",
    productName: "Fruit Bites",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Fruit Bites.webp",
  },
  {
    productType: "Snacks",
    productName: "Newtons",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Newtons.webp",
  },
  {
    productType: "Snacks",
    productName: "Nutella",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Nutella.webp",
  },
  {
    productType: "Snacks",
    productName: "Popcorn",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Popcorn.webp",
  },
  {
    productType: "Snacks",
    productName: "Takis",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Takis.webp",
  },
  {
    productType: "Snacks",
    productName: "Welch's",
    itemPrice: "$11.99",
    imgSrc: "/Snacks/Welch's.webp",
  },
];

const productsArr = [drinksArr, snacksArr];

export default function MainPageSliderWrapper() {
  return (
    <div className="mainPageContent">
      <div className="productsContainer1">
        <MainPageSlider productsArr={productsArr[0]} productCategory="Drinks!" />
      </div>
      <div className="productsContainer2">
        <MainPageSlider productsArr={productsArr[1]} productCategory="Snacks!" />
      </div>
    </div>
  );
}
