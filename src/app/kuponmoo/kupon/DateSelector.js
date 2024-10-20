import React from "react";

function DateSelector() {
  return (
    <section className="flex items-start self-stretch my-auto bg-white">
      <div className="flex gap-5 items-center px-3 py-2 text-base leading-none border-b-2 border-sky-900 text-slate-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2a233446edf2e59be59cf2548d62ac610af21ddbb016c3a4e9228d183fffaf1?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square"
        />
        <span className="self-stretch my-auto">Pilih Tanggal</span>
      </div>
      <div className="flex gap-2 items-start p-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b14c43a1af1f1a618a05af9a11a93e1497c569c2248774dd7fe9f052489bd8c?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd6492baf8f6eac7a699af572ee8f5f9466caae098bb700a2dbb98385df5666?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </div>
    </section>
  );
}

export default DateSelector;
