import React from "react";
import Features from "./Features";
import { Link } from "react-router-dom";

export default function SecondIntroduction() {
  const style =
    "w-[35rem] h-[25rem] rounded-3xl overflow-hidden bg-shadowColor";
  return (
    <div className="w-full bg-shadowColor h-[100vh] px-[5rem]">
      <Features />
      <section className=" flex justify-between my-[6rem] ">
        <div className={`${style} left`}>
          <img src="/home/home2.jpg" alt="" className="size-full " />
        </div>
        <div className={`${style} right`}>
          <div className="p-4 text-center ">
            <h3 className="text-3xl font-extrabold capitalize px-2 py-4 rounded-full">
              Let your room look like pro
            </h3>
            <p className="my-3 text-2xl text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              voluptate quidem unde voluptas aut libero animi aliquid esse! Ab,
              modi? Sequi nostrum ex doloremque sint eius labore blanditiis
              ipsam ducimus deleniti optio adipisci doloribus repellendus
              nesciunt aperiam exercitationem culpa fugiat error ea maxime
              deserunt, delectus
            </p>
            <Link
              to="/products"
              className="bg-primaryColor px-8 py-3 rounded-full font-bold animate-bounce"
            >
              Shop Now
              <span className="font-extrabold ">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
