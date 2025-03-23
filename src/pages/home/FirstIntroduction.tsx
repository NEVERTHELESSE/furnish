import React, { useEffect, useState } from "react";

const HouseList = [
  {
    src: "/home/home1.jpg",
    title: "discover your perfect space",
    color: "black",
  },
  {
    src: "/home/home2.jpg",
    title: "let make your home look like pro",
    color: "red",
  },
  {
    src: "/home/home3.jpg",
    title: "unleash the power of our cool furniture",
    color: "blue ",
    anim: "down",
  },
  {
    src: "/home/home4.jpg",
    title: "let generate a beautiful home for you",
    color: "white",
    anim: "down",
  },
  {
    src: "/home/home5.webp",
    title: "discover your perfect space",
    color: "white",
    anim: "down",
  },
  {
    src: "/home/home6.jpg",
    title: "discover your perfect space",
    color: "white",
    anim: "down",
  },
];
export default function FirstIntroduction() {
  function generateRandomHome() {
    return HouseList[Math.floor(Math.random() * HouseList.length)];
  }
  const [House, setHouse] = useState(generateRandomHome());
  useEffect(() => {
    const changeHouse = setInterval(() => {
      setHouse(generateRandomHome());
    }, 2000);

    return () => {
      clearInterval(changeHouse);
    };
  }, []);

  return (
    <section className="w-full relative grid place-items-center px-[5rem] h-[100vh] ">
      <div
        className={`w-full rounded-[3rem] h-[calc(100vh-10rem)] overflow-hidden relative bg-shadowColor  shadow-lg down ${House.anim}`}
      >
        <img src={House.src} className="size-full object-cover" />

        <div className="w-[15rem] h-[13rem] bg-bgColor absolute right-[15rem] bottom-[-4rem] rounded-[4rem]"></div>
      </div>
      <div className="absolute text-[6rem] w-[70%] text-center contain p-12 text-bgColor font-extrabold">
        <h1 className="capitalize" style={{ color: House.color }}>
          {House.title}
        </h1>
      </div>
    </section>
  );
}
