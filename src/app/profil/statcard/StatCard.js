import React from "react";

const InfoCard = ({ icon, value, label, additionalIcon }) => {
  return (
    <div className="flex flex-1 shrink gap-4 items-center self-stretch px-6 py-4 my-auto bg-white rounded-xl basis-0 max-md:px-5">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square shadow-[0px_0px_1px_rgba(0,0,0,0.039)]" />
      <div className="flex flex-col self-stretch my-auto">
        <div className="text-lg font-bold tracking-tight text-sky-900 max-sm:text-sm">{value}</div>
        <div className="text-sm leading-snug text-slate-400">{label}</div>
      </div>
      {additionalIcon && <img loading="lazy" src={additionalIcon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square" />}
    </div>
  );
};

export default InfoCard;
