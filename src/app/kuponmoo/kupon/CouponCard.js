import React from "react";

function CouponCard({ title, value, expiry, buttonText }) {
  return (
    <article className="flex overflow-hidden gap-8 justify-center items-center p-4 bg-amber-100 rounded-xl shadow-sm min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px]">
        <h2 className="flex gap-1 items-center self-start text-base font-semibold tracking-tight">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84e679151ae9c119b763cb148f107f5b7c2ef1fcacf4eb83a9d531a8ec63a43?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[60px] shadow-[0px_0px_1px_rgba(0,0,0,0.039)]"
          />
          <span className="self-stretch my-auto text-zinc-800">{value}</span>
          <span className="self-stretch my-auto text-zinc-800">{title}</span>
        </h2>
        <p className="mt-3 text-2xl font-bold tracking-tight text-lime-600">{value}</p>
        <p className="flex gap-1 items-start mt-3 text-sm">
          <span className="font-medium text-sky-900">{value} Kupon Moo</span>
          <span className="text-black">
            Kadaluwarsa pada <span className="font-medium">{expiry}</span>
          </span>
        </p>
      </div>
      <button className="gap-1 self-stretch px-3 py-1.5 my-auto text-xs font-medium text-white whitespace-nowrap bg-gray-700 rounded-lg">{buttonText}</button>
    </article>
  );
}

export default CouponCard;
