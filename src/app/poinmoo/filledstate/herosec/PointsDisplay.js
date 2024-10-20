import React from "react";

function PointsDisplay({ points }) {
  return (
    <div className="flex gap-2 items-center self-start mt-2 tracking-tight">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4044b5eef1113dc6dad19270c222fbdadf4412b47949b7eb31a3db5c2d73790c?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[60px] shadow-[0px_0px_1px_rgba(0,0,0,0.039)]"
      />
      <div className="self-stretch my-auto text-2xl font-bold text-lime-600">{points}</div>
      <div className="self-stretch my-auto text-xs font-semibold text-zinc-800">Poin MOO</div>
    </div>
  );
}

export default PointsDisplay;
