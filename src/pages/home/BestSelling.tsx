import React, { useState } from "react";
import Chair1 from "/chairs/chair1.png";
import { allProducts } from "../../data/allProducts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "../../components/carousel/Carousel";

export default function BestSelling() {
  const [move, setMove] = useState(0);
  const movement = 60;

  return (
    <section className="w-full h-[100vh] bg-shadowColor p-12">
      <p className="text-4xl font-extrabold capitalize my-12">
        our best selling product
      </p>
      <main
        className="flex duration-1000"
        style={{
          transform: `translateX(-${move}rem)`,
        }}
      >
        {allProducts.map((product) => (
          <div className="min-w-[20rem] border rounded-3xl overflow-hidden mx-3">
            <div className="w-full overflow-hidden h-[22rem] p-2 rounded-t-3xl bg-secondaryColor">
              <button className="bg-primaryColor hover:bg-fadedColor duration-700 p-2 rounded-2xl ">
                Buy Now
              </button>
              <a className="w-full" href={`/furnish?product?${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt=""
                  className="size-full hover:scale-110 duration-700 object-contain"
                />
              </a>
            </div>
            <div className="flex items-center justify-between p-2">
              <p className="text-2xl font-extrabold capitalize">one sitter</p>
              <p className="font-bold text-3xl">$23.34</p>
            </div>
          </div>
        ))}
      </main>
      <Carousel move={move} setMove={setMove} movement={movement} />
    </section>
  );
}
