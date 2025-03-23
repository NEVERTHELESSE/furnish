import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { allProducts } from "../../data/allProducts";
import ProductLoading from "../../components/loading/ProductLoading";
import ProductStuff from "./ProductStuff";
import { productType } from "../../types/cartTypes";

export default function Products({ products, limit }) {
  const [pro, setPro] = useState<any>([]);
  useEffect(() => {
    if (products) {
      setPro(products.slice(0, limit));
    } else {
      setPro(allProducts);
    }
  }, []);

  return (
    <section className="down my-4">
      {pro.length == 0 ? (
        <div className=" flex flex-wrap justify-around ">
          <ProductLoading />
        </div>
      ) : (
        <div className=" flex flex-wrap justify-around ">
          {pro.map((product: productType) => (
            <div
              className="w-[25rem] overflow-hidden bg-primaryColor rounded-3xl m-5"
              key={product.id}
            >
              <abbr
                title="Add to wishlist"
                className="rounded-2xl absolute text-3xl cursor-pointer bg-fadedColor hover:bg-shadowColor duration-700 p-2"
              >
                <FaHeart />
              </abbr>
              <a href={`/furnish?product?${product.id}`}>
                <div className="w-full h-[20rem]">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="size-full hover:scale-105 duration-700"
                  />
                </div>
              </a>
              <ProductStuff product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
