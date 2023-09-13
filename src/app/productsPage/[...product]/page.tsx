"use client";
import Image from "next/image";
import "./productsPage.css";
import { useState, useEffect } from "react";

type Params = {
  params: {
    product: string;
  };
};

export default function ProductPage({ params: { product } }: Params) {
  //Coca-Cola   10.99   /Sodas/Coke.webp   20oz
  const [imgSrc, setImgSrc] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productDetails, setProductDetails] = useState<string>("");

  useEffect(() => {
    function getProductDetails() {
      if (product[1] === "Sodas") {
        //GET PRODUCT INFORMATION
        const endingImgSrc = product[2].split("!");
        const ImgSrc = `${product[1]}/${endingImgSrc[0]}`;
        setImgSrc(ImgSrc);

        const product0Tmp = product[0].split("!");
        const productName = product0Tmp[1];
        setProductName(productName);

        const productPriceTmp = product0Tmp[3].split("%24");
        const productPrice = `$${productPriceTmp[1]}`;
        setProductPrice(productPrice);

        const productDetailsTmp1 = product[2].split("%");
        const productDetailsTmp2 = productDetailsTmp1[2].split("!");
        const productDetails = productDetailsTmp2[0];
        setProductDetails(productDetails);
      } else {
        const endingImgSrc = product[2].split("!");
        const ImgSrc = `${product[1]}/${endingImgSrc[0]}`;
        setImgSrc(ImgSrc);

        const product0Tmp = product[0].split("!");
        const productName = product0Tmp[1];
        setProductName(productName);

        const productPriceTmp = product0Tmp[3].split("%24");
        const productPrice = `$${productPriceTmp[1]}`;
        setProductPrice(productPrice);
      }
    }
    getProductDetails();
  }, []);

  function addToCart() {}

  function returnHome() {
    window.location.href = "/";
  }

  return (
    <div className="productsPageMainContainer">
      <div className="productsPageMain">
        <div className="productsPage">
          <div className="productsPageImgContainer">
            <Image src={`/${imgSrc}`} alt="/" fill={true} />
          </div>
          <div className="productDetails">
            <p>
              {productName} {productPrice} {productDetails}
            </p>
          </div>
          <div className="productsPageAddToCartBtnContainer">
            <button onClick={() => addToCart()}>Add to cart</button>
          </div>
          <div className="returnHomeBtnContainer">
            <button onClick={() => returnHome()}>Return Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
