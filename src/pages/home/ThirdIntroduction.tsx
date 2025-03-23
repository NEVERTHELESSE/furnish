import React from "react";

import { beds, chairs, tables } from "./thirdIntroductionInfo";
export default function ThirdIntroduction() {
  return (
    <section className="w-full h-[100vh] justify-between flex p-[4rem] p">
      <div className="w-[60%]">
        <div className="w-full overflow-hidden rounded-3xl h-[20rem] bg-shadowColor flex left">
          <div className="h-full  w-[60%]">
            <img
              src="/home/home1.jpg"
              alt=""
              className="size-full"
              loading="lazy"
            />
          </div>
          <aside className="w-[40%] p-12">
            <h3 className="text-3xl font-extrabold">Chairs</h3>
            <ul>
              {chairs.map((chair) => (
                <li key={chair} className="text-2xl my-2 list-disc">
                  {chair}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="flex j h-[20rem] w-full justify-between mt-5">
          <div className="w-[60%] justify-around items-center flex rounded-3xl h-full bg-primaryColor down">
            <div className="p-4">
              <h3 className="text-3xl font-extrabold">Tables</h3>
              <ul>
                {tables.map((table) => (
                  <li
                    key={table}
                    className="text-2xl my-2 list-disc capitalize"
                  >
                    {table}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[60%] h-full">
              <img
                src="/tables/table1.png"
                className="size-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-[35%] rounded-3xl h-full gradient p-6 flex flex-col items-center justify-around up">
            <p className="bg-primaryColor py-4 px-8 rounded-full text-center font-bold text-2xl">
              New Year Promo
            </p>
            <h3 className="text-3xl my-2">30% OFFER</h3>
          </div>
        </div>
      </div>
      <div className="bg-fadedColor right w-[35%] rounded-2xl h-full flex flex-col">
        <main className=" p-7">
          <h3 className="text-3xl font-extrabold">Beds</h3>
          <ul>
            {beds.map((bed) => (
              <li key={bed} className="text-2xl my-2 list-disc capitalize">
                {bed}
              </li>
            ))}
          </ul>
        </main>
        <div className="w-full h-[70%]">
          <img src="/beds/bed1.png" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
