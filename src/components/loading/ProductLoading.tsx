import React from "react";
function Loading() {
  return (
    <div className="w-[25rem] flex flex-col justify-end bg-gray-500 rounded-3xl relative overflow-hidden m-5 animate-pulse h-[27rem]">
      <div className="h-[6.3rem]   p-4 animate-pulse rounded-3xl bottom-0 bg-gray-600">
        <div className="flex flex-col justify-around h-full">
          <div className="w-[70%] h-[1rem] rounded-2xl bg-gray-300"></div>
          <div className="w-[60%] h-[1rem] rounded-2xl bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default function ProductLoading() {
  return Array(8).fill(<Loading />);
}
