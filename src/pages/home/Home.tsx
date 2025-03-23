import React, { Suspense, lazy } from "react";
import FirstIntroduction from "./FirstIntroduction";
import FifthIntroduction from "./FifthIntroduction";
import BestSelling from "./BestSelling";
import UniqueFurniture from "./UniqueFurniture";
import Video from "./Video";

const SecondIntroduction = lazy(() => import("./SecondIntroduction"));
const ThirdIntroduction = lazy(() => import("./ThirdIntroduction"));
const FourthIntroduction = lazy(() => import("./FourthIntroduction"));
export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <FirstIntroduction />
      <Suspense fallback="loading">
        <SecondIntroduction />
        <ThirdIntroduction />
        <FourthIntroduction />
        <FifthIntroduction />
        <BestSelling />
        <UniqueFurniture />
        <Video />
      </Suspense>
    </div>
  );
}
