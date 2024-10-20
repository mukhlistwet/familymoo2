import React from "react";
import Button from "./Button";

function NoRewards() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center p-16 mt-10 text-center rounded-3xl border border-white border-solid shadow-2xl max-w-[368px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb11848b36cc176fb9c8261ab68b08239119bd392801c8b3d2d6385bf6b6050?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="No rewards illustration"
        className="object-contain w-full aspect-square"
      />
      <div className="flex flex-col items-start self-stretch mt-6 w-full">
        <h2 className="text-3xl font-bold leading-snug text-black">No Rewards</h2>
        <p className="mt-2 text-lg font-medium leading-6 text-black text-opacity-40">When you have messages you'll see them here</p>
      </div>
      <Button text="Go Back" />
    </section>
  );
}

export default NoRewards;
