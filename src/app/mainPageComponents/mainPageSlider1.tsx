"use client";

//const res = await fetch("api/drinks", {
//  method: "GET",
//});
//const response = await res.json();
//console.log(response);

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

export default function MainPageSlider1({ productsArr }: any) {
  const [canShowLeftArrow, setCanShowLeftArrow] = useState<boolean>(false);
  const [canShowRightArrow, setCanShowRightArrow] = useState<boolean>(false);

  const [currArrowIdxs, setCurrArrowIdxs] = useState<number>(1);

  const [productsToDisplay, setProductsToDisplay] = useState<ProductsProps[]>([]);
  const products: ProductsProps[] = productsArr;

  useEffect(() => {
    const startingProducts: ProductsProps[] = products.slice(0, 5);
    setProductsToDisplay(startingProducts);
  }, []);

  async function moveProductsToLeft() {
    setCanShowRightArrow(false);

    setCurrArrowIdxs((prev) => prev - 1);
    let newEndingPoint = currArrowIdxs - 1;
    newEndingPoint = newEndingPoint * 5;
    const newStartingPoint = newEndingPoint - 5;

    const newProductsToDisplay = products.slice(newStartingPoint, newEndingPoint);

    setProductsToDisplay(newProductsToDisplay);

    if (!checkPrevProductsList(newStartingPoint, newEndingPoint)) {
      return;
    }
  }

  function moveProductsToRight() {
    setCanShowLeftArrow(true);
    setCurrArrowIdxs((prev) => prev + 1);
    const newStartingPoint: number = currArrowIdxs * 5;
    const newEndingPoint = newStartingPoint + 5;

    const newProductsToDisplay = products.slice(newStartingPoint, newEndingPoint);

    setProductsToDisplay(newProductsToDisplay);
    if (!checkNextProductsList(newStartingPoint, newEndingPoint)) {
      return;
    }
  }

  function checkNextProductsList(newStartingPoint: number, newEndingPoint: number) {
    const nextProductsList = products.slice(newStartingPoint + 5, newEndingPoint + 5);
    if (nextProductsList[4] === undefined) {
      setCanShowRightArrow(true);
      return false;
    }

    return true;
  }

  function checkPrevProductsList(newStartingPoint: number, newEndingPoint: number) {
    const nextProductsList = products.slice(newStartingPoint - 5, newEndingPoint - 5);

    if (nextProductsList[4] === undefined) {
      setCanShowLeftArrow(false);
      return false;
    }

    return true;
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

              {!canShowRightArrow && (
                <button className="arrowRight" onClick={() => moveProductsToRight()}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              )}
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
