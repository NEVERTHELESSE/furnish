import React, { Suspense, lazy } from "react";
import { navigates } from "./navigate";
import { Link, useLocation } from "react-router-dom";
const UserAccount = lazy(() => import("./UserAccount"));
export default function Navigation() {
  const userLocation = useLocation().pathname;
  return (
    <main className="w-[45%] flex justify-between items-center">
      {navigates.map((navigate, index) => (
        <Link
          to={navigate.link}
          key={index}
          className={`text-2xl capitalize p-2 ${
            navigate.active == userLocation && "bg-primaryColor rounded-2xl"
          }`}
        >
          {navigate.title}
        </Link>
      ))}
      <Suspense>
        <UserAccount />
      </Suspense>
    </main>
  );
}
