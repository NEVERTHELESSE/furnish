import React from "react";
import Search from "./Search";
import { FaHome } from "react-icons/fa";

export default function NavigationIcon() {
  return (
    <div className="flex items-center text-3xl w-[50%]">
      <div className="w-[50%] flex justify-around">
        <FaHome />
        <FaHome />
        <FaHome />
        <FaHome />
        <FaHome />
      </div>
      <Search />
    </div>
  );
}
