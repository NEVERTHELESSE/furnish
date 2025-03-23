import React from "react";

export default function FifthIntroduction() {
  const productProperty = [
    {
      id: "1",
      title: "Number of Buyer",
      number: 400,
    },
    {
      id: "2",
      title: "Guaranty",
      number: 36 + "months",
    },
    {
      id: "3",
      title: "Price",
      number: "$" + 23.3,
    },
  ];
  return (
    <section className="w-full h-[100vh] p-12 flex justify-between">
      <div className="bg-shadowColor rounded-2xl p-4 w-[50%]">
        <p className="text-3xl font-extrabold">Super Sales</p>
        <p className="text-2xl my-2">
          Lorem ipsum dolor sit amet consectetur elit. Assumenda, odit?
        </p>
        <div className="flex justify-around">
          {productProperty.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <p className="text-3xl font-extrabold">{product.number}</p>
              <p>{product.title}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          <img src="/chairs/chair6.png" alt="" className="size-full" />
        </div>
      </div>
      <div className="w-[45%] flex justify-between" id="cover">
        <div className="w-[48%] h-full bg-primaryColor rounded-2xl"></div>
        <div className="w-[48%] h-full bg-primaryColor rounded-2xl"></div>
      </div>
    </section>
  );
}
