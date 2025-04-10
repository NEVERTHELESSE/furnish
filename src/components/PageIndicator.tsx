import React from "react";

export default function PageIndicator({ title, description }) {
  return (
    <div className="w-[15%] font-bold my-4 flex justify-between">
      <span>{title}</span>
      <span>-</span>
      <span>{description}</span>
    </div>
  );
}
