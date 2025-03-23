import React from "react";
import Video1 from "/videos/video1.mp4";
import Video2 from "/videos/video2.mp4";

export default function Video() {
  return (
    <div className="w-full  p-12 bg-shadowColor">
      <h3 className="text-6xl my-8 text-center font-extrabold capitalize ">
        our client creative home
      </h3>
      <div className="flex">
        <div className="m-3 w-[50%]">
          <video src={Video1} loop autoPlay></video>
        </div>
        <div className="w-[50%] flex-col flex justify-center ">
          <p className="text-4xl font-extrabold my-7">
            let generate a creative home for you
          </p>
          <p className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            numquam eaque corrupti inventore ea alias, aspernatur tenetur
            laborum accusantium sunt ducimus adipisci magnam nemo quis facere
            omnis vitae nesciunt saepe.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%] flex-col flex justify-center ">
          <p className="text-4xl font-extrabold my-7">
            let generate a creative home for you
          </p>
          <p className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            numquam eaque corrupti inventore ea alias, aspernatur tenetur
            laborum accusantium sunt ducimus adipisci magnam nemo quis facere
            omnis vitae nesciunt saepe.
          </p>
        </div>
        <div className="m-3 w-[50%]">
          <video src={Video2} loop autoPlay></video>
        </div>
      </div>
    </div>
  );
}
