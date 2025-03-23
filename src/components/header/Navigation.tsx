import React from "react";
import { navigates } from "./navigates";

export default function Navigation() {
  const userLocation = window.location.pathname;
  return (
    <section className="flex w-[50%] justify-around">
      {navigates.map((navigate) => (
        <a
          key={navigate.id}
          href={navigate.link}
          className={`uppercase rounded-lg hover:bg-fadedColor 
          ${navigate.link == userLocation && "bg-primaryColor"}
           py-2 px-5 `}
        >
          {navigate.title}
        </a>
      ))}
    </section>
  );
}
