import React from "react";
import { FaCar, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { FaPlugCirclePlus } from "react-icons/fa6";

export default function Features() {
  const advantages = [
    {
      id: "1",
      title: "Easy for Shopping",
      Icon: <FaShoppingCart size={30} />,
    },
    {
      id: "2",
      title: "Fast & Free Shipping",
      Icon: <FaCar size={30} />,
    },
    {
      id: "3",
      title: "24/7 Support",
      Icon: <FaUserPlus size={30} />,
    },
    {
      id: "4",
      title: "4 Years Guarantee",
      Icon: <FaPlugCirclePlus size={30} />,
    },
  ];

  return (
    <section className="flex down justify-around my-12 text-fgColor">
      {advantages.map((advantage) => (
        <div
          className="shadow-md  p-4 px-8 flex flex-col items-center rounded-3xl shadow-black bg-shadowColor cursor-pointer hover:scale-105 duration-700"
          key={advantage.id}
        >
          {advantage.Icon}
          <p className="mt-4">{advantage.title}</p>
        </div>
      ))}
    </section>
  );
}
