import React from "react";

function UploadStrukCard({ title, description, remainingUploads }) {
  return (
    <article className="flex overflow-hidden gap-2 justify-center items-center px-4 py-8 bg-amber-100 rounded-xl shadow-sm min-h-[137px] min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto min-h-[76px] min-w-[240px]">
        <h2 className="flex gap-2 items-center text-base font-bold text-lime-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/497ee5a1eb795e80cda001c919380850f29430ec93cf5fbd7563c06b280327e4?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[60px] shadow-[0px_0px_1px_rgba(0,0,0,0.039)]"
          />
          <span className="self-stretch my-auto">{title}</span>
        </h2>
        <div className="flex flex-col justify-center py-px mt-3 w-full max-w-[329px]">
          <div className="flex gap-5 justify-between items-start px-16 w-full bg-orange-200 rounded-md max-md:px-5">
            <div className="flex shrink-0 h-2.5 bg-white border border-white border-solid w-[3px]" />
            <div className="flex shrink-0 w-1 h-2.5 bg-white border border-white border-solid" />
            <div className="flex shrink-0 h-2.5 bg-white border border-white border-solid w-[3px]" />
            <div className="flex shrink-0 w-1 h-2.5 bg-white border border-white border-solid" />
          </div>
        </div>
        <p className="gap-1.5 mt-3 text-xs text-sky-950">{description}</p>
      </div>
      <span className="gap-1 self-stretch px-3 py-1.5 my-auto text-xs font-semibold text-sky-900 rounded-[60px]">{remainingUploads}</span>
    </article>
  );
}

export default UploadStrukCard;
