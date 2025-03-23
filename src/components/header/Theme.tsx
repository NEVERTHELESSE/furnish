import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Theme() {
  const [isLight, setIsLight] = useState(true);
  const style =
    "cursor-pointer hover:scale-105 border p-1 rounded-full  text-4xl";

  const toggleTheme = () => {
    const previousTheme = document.body.className;
    if (previousTheme == "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    setIsLight((prev) => !prev);
  };

  return (
    <>
      {isLight ? (
        <FiSun className={style} onClick={toggleTheme} />
      ) : (
        <FiMoon className={style} onClick={toggleTheme} />
      )}
    </>
  );
}
