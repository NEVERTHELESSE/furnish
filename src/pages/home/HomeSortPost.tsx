import React, { useState } from "react";

const options = [
  "",
  "web design",
  "developer",
  "nature",
  "databases",
  "cloud",
  "marketing",
  "accounting",
  "programming",
  "health",
  "physics",
  // "engineer",
  // "linux",
  // "student",
  // "updates",
];
export default function HomeSortPost() {
  const [selected, setSelected] = useState("");

  return (
    <main className="w-full p-4 box rounded-full my-4 sticky top-10 filter z-50">
      {options.map((option, index) => (
        <span
          key={index}
          className={`py-2 px-4 cursor-pointer capitalize duration-700 hover:bg-fadedColor rounded-full ${
            option == selected && "bg-primaryColor"
          }`}
          onClick={() => setSelected(option)}
        >
          {option == "" ? "all posts" : option}
        </span>
      ))}
    </main>
  );
}
