import React from "react";

function DatePicker() {
  return (
    <div className="flex items-start self-stretch my-auto bg-white min-w-[240px]">
      <div className="flex gap-5 items-center px-3 py-2 text-xs leading-none border-b-2 border-sky-900 min-w-[240px] text-slate-800 w-[318px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a526eee4737f954f1149e1db721c801e49a7003e44d137ab8fc07ecbc610cf2?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square"
          alt=""
        />
        <div className="self-stretch my-auto">Pilih Tanggal</div>
      </div>
      <div className="flex gap-1 items-start p-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d937f87c3ccc3eb237eb2ff51b6a70ebffdcac55247e60fdd59762dc3a769868?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a05c03196cbcab03b6ca93da15bb3ae85bafb8baeef2fc0856dcab26f60bf72?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
      </div>
    </div>
  );
}

export default DatePicker;
