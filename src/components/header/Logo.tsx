import React from "react";
import ImageSrc from "/logo.webp";

export default function Logo() {
  return (
    <a className="flex items-center" href="/">
      <div className="size-[3rem]">
        <img src={ImageSrc} />
      </div>
      <h3 className="text-3xl">Furnish</h3>
    </a>
  );
}
