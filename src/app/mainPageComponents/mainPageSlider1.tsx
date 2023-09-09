"use client";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./mainPageSlider.css";

type ProductsProps = {
  productType?: string;
  productName: string;
  imgSrc: string;
};

export default function MainPageSlider1({ drinksArr }: any) {
  const mappableDrinksArr: ProductsProps[] = drinksArr;

  return (
    <div className="mainPageContent1">
      <div className="productsContainer1">
        <div className="productsTopContainer">
          <div className="productsTop">
            <div className="productsTopText">
              <h1>Shop all your favorite drinks!</h1>
            </div>
            <div className="productArrowsContainer">
              <FontAwesomeIcon icon={faAngleLeft} />
              <FontAwesomeIcon icon={faAngleRight} />
              <button>Right</button>
            </div>
          </div>
        </div>
        {mappableDrinksArr.map((item: any, idx: number) => {
          return <h1 key={idx}>{item.productName}</h1>;
        })}
      </div>
      <div className="productsContainer2"></div>
    </div>
  );
}
