"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./mainPageSlider.css";

type ProductsProps = {
  productType?: string;
  productName: string;
  itemPrice: string;
  imgSrc: string;
  productDetails: string;
};

export default function MainPageSlider1({ drinksArr }: any) {
  const [canShowLeftArrow, setCanShowLeftArrow] = useState<boolean>(false);

  const [currRightArrowIdx, setCurrRightArrowIdx] = useState<number>(1);

  const [productsToDisplay, setProductsToDisplay] = useState<ProductsProps[]>([]);
  const drinks: ProductsProps[] = drinksArr;

  useEffect(() => {
    function getStartingDrinks() {
      const startingProducts: ProductsProps[] = drinks.slice(0, 5);
      setProductsToDisplay(startingProducts);
    }
    getStartingDrinks();
  }, []);

  async function moveProductsToLeft() {
    //const res = await fetch("api/drinks", {
    //  method: "GET",
    //});
    //const response = await res.json();
    //console.log(response);
  }

  function moveProductsToRight() {
    setCurrRightArrowIdx((prev) => prev + 1);
    const newStartingpoint = currRightArrowIdx * 5;
    const newEndingPoint = newStartingpoint + 5;
    const newProductsToDisplay = drinks.slice(newStartingpoint, newEndingPoint);
    console.log(newProductsToDisplay);
    setProductsToDisplay(newProductsToDisplay);
    // setProductsToDisplay();
  }

  function goToProduct() {}

  function addItemToCart() {}

  return (
    <div className="mainPageContent1">
      <div className="productsContainer1">
        <div className="productsTopContainer">
          <div className="productsTop">
            <div className="productsTopText">
              <h1>Shop all your favorite drinks!</h1>
            </div>
            <div className="productArrowsContainer">
              {canShowLeftArrow && (
                <button className="arrowLeft" onClick={() => moveProductsToLeft()}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              )}

              <button className="arrowRight" onClick={() => moveProductsToRight()}>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="productDetailsContainer">
          {productsToDisplay.map((item: ProductsProps, idx: number) => {
            return (
              <div key={idx} className="productDetails">
                <button className="productWrapperBtn" onClick={() => goToProduct()}></button>

                <div className="productDetailsTop">
                  <Image
                    className="productImg"
                    src={item.imgSrc}
                    alt="/"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="bottomOfProductContainer">
                  <div className="productDetailsText">
                    <p>
                      {item.productName} {item.productDetails}
                    </p>
                    <p>{item.itemPrice}</p>
                  </div>

                  <div className="addToCartBtnContainer">
                    <button onClick={() => addItemToCart()}>Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="productsContainer2"></div>
    </div>
  );
}
