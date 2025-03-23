import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { productType } from "../../types/cartTypes";
import { useDispatch } from "react-redux";
import { update } from "../../redux/productSlice";

export default function ProductStuff({ product }: { product: productType }) {
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(update({ wishlist: ["hello"] }));
  }

  return (
    <div className="bg-fadedColor justify-between items-center flex  rounded-2xl p-4 text-2xl">
      <div>
        <p className=" capitalize">{product.title}</p>
        <p className="font-extrabold">${product.price}</p>
      </div>
      <abbr
        onClick={addToCart}
        title="Add to cart"
        className="bg-primaryColor cursor-pointer duration-700 hover:bg-shadowColor p-3 text-3xl rounded-full"
      >
        <FaShoppingCart />
      </abbr>
    </div>
  );
}
