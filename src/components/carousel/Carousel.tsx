import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel({ move, setMove, movement }) {
  const arrow = " mx-5  duration-700  rounded-2xl py-2 px-4";

  function moveProductLeft() {
    if (move <= 100) {
      setMove((prev: number) => prev + movement);
    }
  }
  function moveProductRight() {
    if (move > 0) {
      setMove((prev: number) => prev - movement);
    }
  }
  return (
    <div className="flex text-6xl my-7">
      <FaArrowLeft
        className={`${arrow} ${
          move <= 0
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-primaryColor cursor-pointer hover:bg-secondaryColor"
        }`}
        onClick={moveProductRight}
      />
      <FaArrowRight
        className={`${arrow} ${
          move >= 100
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-primaryColor cursor-pointer hover:bg-secondaryColor"
        }`}
        onClick={moveProductLeft}
      />
    </div>
  );
}
