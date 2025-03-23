import React, { useState } from "react";
import Sort from "./Sort";
import Products from "../products/Products";
import { allProducts } from "../../data/allProducts";

export default function FourthIntroduction() {
  const limit = 6;
  const products = allProducts.slice().sort(() => Math.random() - 0.5);
  const [category, setCategory] = useState("");
  const categoriesProduct = products.filter((product) =>
    product.category.includes(category)
  );

  return (
    <div className="w-full  p-12 bg-shadowColor">
      <Sort setCategory={setCategory} />
      <Products products={categoriesProduct} limit={limit} />
      <div className="flex justify-center items-center">
        <a
          href="/furnish?product"
          className="bg-primaryColor animate-pulse text-center text-3xl py-3 px-8 rounded-2xl"
        >
          Browse Furnish
        </a>
      </div>
    </div>
  );
}
