import React from "react";

function CouponExchange() {
  return (
    <div className="flex flex-wrap gap-2 justify-center p-4 mt-6 bg-white rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.08)] max-md:max-w-full">
      <div className="flex flex-col justify-center my-auto text-xs min-w-[240px] w-[291px]">
        <p className="flex gap-1 items-center w-full">
          <span className="self-stretch my-auto text-black">Total Kupon Anda saat ini: </span>
          <span className="self-stretch my-auto font-medium text-sky-900">8</span>
        </p>
        <p className="flex gap-1 items-center mt-2 w-full font-medium leading-snug text-sky-900 whitespace-nowrap">
          <span className="self-stretch my-auto">Tukar</span>
          <span className="self-stretch my-auto text-base font-semibold leading-none">0</span>
          <span className="self-stretch my-auto w-[73px]">KuponMOO</span>
        </p>
      </div>
      <div className="flex gap-2.5 justify-center h-full text-sm text-center whitespace-nowrap">
        <button className="gap-2 self-stretch px-3.5 py-2.5 h-full bg-white border border-solid border-zinc-600 rounded-[1000px] text-zinc-600 w-[98px]">Batalkan</button>
        <button className="gap-2 self-stretch px-3.5 py-1.5 h-full text-white bg-zinc-600 rounded-[1000px] w-[98px]">Tukar</button>
      </div>
    </div>
  );
}

export default CouponExchange;
