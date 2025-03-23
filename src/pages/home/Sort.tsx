import React, { useState } from "react";

export default function Sort({ setCategory }) {
  const sorts = ["", "tables", "chairs", "beds", "light", "pillow"];
  const [selected, setSelected] = useState("");
  const changeSort = (select: string) => {
    setSelected(select);
    setCategory(select);
  };

  return (
    <div className="flex">
      {sorts.map((sort) => (
        <button
          onClick={() => changeSort(sort)}
          key={sort}
          className={`mx-2 capitalize bg-bgColor px-6 py-2 rounded-lg ${
            sort === selected && "bg-primaryColor font-extrabold"
          }`}
        >
          {sort != "" ? sort : "All"}
        </button>
      ))}
    </div>
  );
}
