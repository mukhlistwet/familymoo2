import React from "react";

const KuponInfo = ({ count, type, expiry }) => {
  return (
    <section className="flex overflow-hidden gap-10 justify-center items-center self-stretch px-8 py-4 my-auto bg-amber-100 rounded-xl shadow-sm min-w-[240px] max-md:px-5">
      <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px]">
        <div className="flex gap-2 justify-center items-center self-start font-semibold tracking-tight whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bb0a506cbbc85902051509c04cd8e1cde29add8fbe015cdf7e9a97354ca2f9?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[60px] shadow-[0px_0px_1px_rgba(0,0,0,0.039)]"
          />
          <div className="self-stretch my-auto text-2xl text-lime-900">{count}</div>
          <div className="self-stretch my-auto text-base text-zinc-800">{type}</div>
        </div>
        <div className="flex gap-1 items-start mt-3 text-sm">
          <div className="font-medium text-sky-900">780KuponMOO</div>
          <div className="text-black">
            Kadaluwarsa pada <span className="font-medium">{expiry}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KuponInfo;
