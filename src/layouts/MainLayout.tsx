import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="px-[8rem] py-8">
      <Header />
      <Outlet />
    </div>
  );
}
