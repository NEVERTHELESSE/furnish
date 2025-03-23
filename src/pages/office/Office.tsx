import React from "react";
import { ourOffices } from "./ourOffice";

export default function Office() {
  return (
    <div className="p-12 ">
      <p className="text-4xl font-extrabold text-center my-5">Our Office</p>
      <div className="flex flex-wrap justify-around">
        {ourOffices.map((ourOffice) => (
          <div key={ourOffice.id}>
            <div className="w-[25rem] h-[25rem]">
              <img
                src={ourOffice.imageUrl}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <p className="text-2xl text-center my-2">{ourOffice.location}</p>
            <p className="text-2xl text-center my-2">
              <span className="text-3xl text-green-500">.</span>
              {ourOffice.activeDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
