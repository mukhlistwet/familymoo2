import React from "react";

function DateSelector() {
  return (
    <section className="flex self-stretch my-auto min-h-[40px] min-w-[240px]">
      <div className="flex h-full rounded-lg min-w-[240px]">
        <div className="flex gap-2.5 justify-center items-center px-3 w-10 h-10 bg-sky-900 rounded-lg border-t border-b border-l border-solid border-l-sky-900 border-y-sky-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3a1e50f9d88c8038d2796417fa606d29a7f767c3519fe54db3dbf62185d88?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
            alt=""
            className="object-contain self-stretch my-auto w-4 aspect-square"
          />
        </div>
        <div className="gap-2.5 self-stretch px-3 py-2 h-full text-sm leading-loose bg-white border-t border-b border-solid border-y-blue-400 min-w-[240px] text-neutral-500">30 hari terakhir (xx Bulan xx - xx Bulan xx)</div>
      </div>
      <div className="flex gap-2.5 justify-center items-center pr-0.5 pl-1 bg-white border-t border-b border-solid border-y-blue-400 w-[21px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/108a5cd029f2ef99927924133027daf6439ede8a029f4583b5ca9bcaf28025bc?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
        />
      </div>
      <div className="flex gap-2.5 justify-center items-center pr-2 pl-0.5 bg-white rounded-none border-t border-r border-b border-solid border-r-blue-400 border-y-blue-400 w-[25px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c44629b25b69ef24f7b762cae8db6250c6341e70cc5b83cd1f0b85a8ca131092?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
        />
      </div>
    </section>
  );
}

export default DateSelector;
