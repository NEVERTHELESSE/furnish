import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderUserStuff from "./HeaderUserStuff";
import Theme from "./Theme";
import NavigationIcon from "./NavigationIcon";

export default function Header() {
  const [isSearch, setIsSearch] = useState(false);

  function changeIsSearching() {
    setIsSearch((prev) => !prev);
  }

  return (
    <header>
      <header className="py-4 px-5 flex justify-between items-center fixed shadow-lg shadow-bgColor bg-bgColor w-full top-0 mb-6 z-10">
        <Logo />
        {isSearch ? <NavigationIcon /> : <Navigation />}
        <Theme />
        <HeaderUserStuff changeIsSearching={changeIsSearching} />
      </header>
      <div className="w-full h-[4rem]"></div>
    </header>
  );
}
