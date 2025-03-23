import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="w-[50%] mr-3 relative flex items-center">
      <FiSearch className="absolute left-2 text-gray-600" />
      <input
        type="Search"
        placeholder="Search..."
        className="bg-shadowColor rounded-lg py-2 pl-[3rem] w-full text-2xl"
      />
    </div>
  );
}
