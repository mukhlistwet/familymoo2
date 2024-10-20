import React from "react";

function StatCard({ icon, title, value, isHighlighted }) {
  return (
    <div
      className={`flex gap-2 items-center self-stretch p-4 my-auto tracking-tight ${
        isHighlighted ? "whitespace-nowrap bg-amber-100 rounded-xl border-b-8 border-solid shadow-sm border-b-sky-900" : "bg-amber-100 rounded-xl shadow-sm"
      } w-[236px] max-sm:mx-auto`}
    >
      <img loading="lazy" src={icon} className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
      <div className="flex flex-col self-stretch my-auto">
        <div className="flex gap-0.5 items-center text-base font-semibold text-zinc-800">
          <div className="self-stretch my-auto">{title}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99855b2df15c3ff741bab18b20027d7a93db148da01dd184097915c248a6466f?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt=""
          />
        </div>
        <div className="text-2xl font-bold text-lime-600">{value}</div>
      </div>
    </div>
  );
}

export default StatCard;
