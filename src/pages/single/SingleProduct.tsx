import React from "react";
import { allProducts } from "../../data/allProducts";
import { useSearchParams } from "react-router-dom";

export default function SingleProduct() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId"); // ✅ This now works

  console.log(productId);
  const viewProduct = allProducts.find((product) => product.id == productId);
  const btn = "text-2xl py-2 px-4 m-2 rounded-2xl bg-fadedColor ";
  return (
    <div className="p-12 w-full h-[90vh] flex justify-around items-center">
      <div className="w-[40rem] h-full bg-fadedColor rounded-3xl p-4 ">
        <img src={viewProduct?.imageUrl} alt="" className="size-full" />
      </div>
      <div className="w-[35rem] h-full bg-primaryColor p-12 rounded-3xl">
        <p className="text-4xl font-extrabold capitalize">
          {viewProduct?.title}
        </p>
        <p className="text-2xl my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam
          harum alias itaque rem in, commodi ea fugiat, reiciendis maiores modi
          inventore sequi distinctio adipisci aliquid eum officia consectetur
          magnam!
        </p>
        <p className="text-4xl font-extrabold my-3">$ {viewProduct?.price}</p>
        <div className="flex flex-wrap">
          <button className={btn}>Buy Now</button>
          <button className={btn}>Add to Cart</button>
          <button className={btn}>Add to Wishlist</button>
          <button className={btn}>Request for product</button>
        </div>
      </div>
    </div>
  );
}
