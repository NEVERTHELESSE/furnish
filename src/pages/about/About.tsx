import React from "react";
import Home from "/home/home6.jpg";

export default function About() {
  return (
    <section className=" px-12 h-[100vh] flex justify-around items-center">
      <div className="w-[45%] h-[30rem] overflow-hidden rounded-3xl">
        <img src={Home} alt="" />
      </div>
      <div className="w-[45%] rounded-3xl p-4 bg-blue-500 h-[30rem]">
        <p
          className="text-4xl text-center my-4
        "
        >
          About
        </p>
        <p
          className="text-5xl font-extrabold text-center
        "
        >
          Furnish
        </p>
        <p className="text-3xl my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          suscipit id, inventore saepe quam vel alias aspernatur atque sunt
          doloribus quia explicabo quo maxime minus officia quas odio quae
          autem. Illo ad labore tempore autem, quod laborum quam cumque a!
        </p>
      </div>
    </section>
  );
}
