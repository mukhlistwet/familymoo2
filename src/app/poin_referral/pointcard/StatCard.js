import React from "react";

function StatCard({ icon, title, value, borderBottom }) {
  return (
    <article className={`flex gap-2 items-center self-stretch p-4 my-auto tracking-tight whitespace-nowrap bg-amber-100 rounded-xl shadow-sm w-[236px] ${borderBottom ? "border-b-8 border-solid border-b-sky-900" : ""}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
      <div className="flex flex-col self-stretch my-auto">
        <div className="flex gap-0.5 items-center text-base font-semibold text-zinc-800">
          <h2 className="self-stretch my-auto">{title}</h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99855b2df15c3ff741bab18b20027d7a93db148da01dd184097915c248a6466f?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
          />
        </div>
        <p className="text-2xl font-bold text-lime-600">{value}</p>
      </div>
    </article>
  );
}

export default StatCard;
