import React from "react";

const DatePicker = () => {
  return (
    <div className="flex items-start bg-white">
      <div className="flex gap-5 items-center px-3 py-2 text-xs leading-none border-b-2 border-sky-900 text-slate-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a526eee4737f954f1149e1db721c801e49a7003e44d137ab8fc07ecbc610cf2?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square"
        />
        <span className="self-stretch my-auto">Pilih Tanggal</span>
      </div>
      <div className="flex gap-2 items-start p-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5f04d5ddf83b89f0158d68ba0e4a53ddd4c2edafe51c0bb54e5fd97b59128a?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f534fc5cb8d4448b6a3f0e5b57fe34cb6af6191ebffbf772de755b24e78b4f9?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </div>
    </div>
  );
};

export default DatePicker;
