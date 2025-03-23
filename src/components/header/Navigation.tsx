import React from "react";
import { navigates } from "./navigates";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const userLocation = useLocation().pathname;
  // const userLocation = window.location.pathname;
  return (
    <section className="flex w-[50%] justify-around">
      {navigates.map((navigate) => (
        <Link
          key={navigate.id}
          to={navigate.link}
          className={`uppercase rounded-lg hover:bg-fadedColor 
          ${navigate.link == userLocation && "bg-primaryColor"}
           py-2 px-5 `}
        >
          {navigate.title}
        </Link>
      ))}
    </section>
  );
}
