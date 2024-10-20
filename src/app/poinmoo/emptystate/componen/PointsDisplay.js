import React from "react";
import ExchangeButton from "./ExchangeButton";

function PointsDisplay() {
  return (
    <div className="flex overflow-hidden absolute left-48 z-0 gap-6 justify-center items-center p-6 bg-amber-100 rounded-xl shadow-sm bottom-[120px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px]">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-800">Poin MOO Aktif</h2>
        <div className="flex gap-2 items-center self-start mt-2 tracking-tight">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e80100dc5952e37e6e186c7126fc441bcec4eabb11a61bc0536b659e96195bca?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[60px] shadow-[0px_0px_1px_rgba(0,0,0,0.039)]"
          />
          <div className="self-stretch my-auto text-2xl font-bold text-lime-600">0</div>
          <div className="self-stretch my-auto text-xs font-semibold text-zinc-800">Poin MOO</div>
        </div>
        <div className="flex gap-1 items-start mt-2 text-sm">
          <div className="font-medium text-sky-900">0 Poin MOO</div>
          <div className="text-black">
            Kadaluwarsa pada <span className="font-medium">24 Juli 2024</span>
          </div>
        </div>
      </div>
      <ExchangeButton />
    </div>
  );
}

export default PointsDisplay;
