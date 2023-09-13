"use client";

type Params = {
  params: {};
};

export default function ProductPage({ params: { product } }: any) {
  //Coca-Cola   10.99   /Sodas/Coke.webp   20oz


  //GET PRODUCT INFORMATION
  const endingImgSrc = product[2].split("!");
  const ImgSrc = `${product[1]}/${endingImgSrc[0]}`;

  const product0Tmp = product[0].split("!");
  const productName = product0Tmp[1];

  const productPriceTmp = product0Tmp[3].split("%24");
  const productPrice = `$${productPriceTmp[1]}`;

  const productDetailsTmp1 = product[2].split("%");
  const productDetailsTmp2 = productDetailsTmp1[2].split("!");
  const productDetails = productDetailsTmp2[0];

  return (
    <>
      <h1>{productName}</h1>

      <h1>{productPrice}</h1>

      <h1>{ImgSrc}</h1>

      <h1>Product details: {productDetails}</h1>
    </>
  );
}
