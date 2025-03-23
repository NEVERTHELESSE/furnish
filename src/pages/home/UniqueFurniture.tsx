import React, { useState } from "react";
import Chair5 from "/chairs/chair5.png";
import Home5 from "/home/home6.jpg";
import { chairsProducts } from "../../data/chairsProduct";
import Table1 from "/tables/table7.png";
import { productType } from "../../types/cartTypes";
import { FaGreaterThan, FaGreaterThanEqual, FaLessThan } from "react-icons/fa";
import Carousel from "../../components/carousel/Carousel";

export default function UniqueFurniture() {
  const [move, setMove] = useState(0);
  const movement = 25;
  return (
    <section className="w-full flex justify-center items-center h-[100vh] p-12">
      <div className="w-[40rem] bg-primaryColor rounded-3xl p-8">
        <p className="text-5xl font-extrabold">
          70+ unique furniture inspirations
        </p>
        <p className="text-3xl my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque omnis
          dolores vitae in unde molestias illo non, dolore, aliquam alias maxime
          corporis, minima quae delectus doloremque sequi. Quidem, nulla
          repudiandae.
        </p>
        <button className="bg-secondaryColor py-5 px-8 my-3 rounded-2xl">
          Browse Furniture &rarr;
        </button>
      </div>
      <div className="flex">
        <div className="mx-12">
          <p>Chairs</p>
          <div className="w-[25rem] h-[35rem] overflow-hidden">
            <div
              className="w-full h-full duration-700 flex"
              style={{
                transform: `translateX(-${move}rem)`,
              }}
            >
              {chairsProducts.map((product: productType) => (
                <div className="min-w-[25rem] h-[35rem] overflow-hidden rounded-3xl">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="size-full object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
          <Carousel move={move} setMove={setMove} movement={movement} />
        </div>
      </div>
    </section>
  );
}
