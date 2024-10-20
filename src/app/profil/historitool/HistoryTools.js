import React from "react";

function HistoryTools() {
  const historyItems = [
    { date: "12 January 2024", event: "Event Jakarta 1", score: "T-Score: 2 (Di atas rata-rata)" },
    { date: "12 January 2024", event: "Event Jakarta 2", score: "T-Score: 2 (Di atas rata-rata)" },
    { date: "12 January 2024", event: "Event Jakarta 3", score: "T-Score: 2 (Di atas rata-rata)" },
    { date: "12 January 2024", event: "Event Jakarta 4", score: "T-Score: 2 (Di atas rata-rata)" },
    { date: "12 January 2024", event: "Event Jakarta 5", score: "T-Score: 2 (Di atas rata-rata)" },
    { date: "12 January 2024", event: "Event Jakarta 6", score: "T-Score: 2 (Di atas rata-rata)" },
  ];

  return (
    <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-2xl font-bold text-sky-900">Histori Tools</h2>
      <div className="flex items-start self-start mt-10 text-sm leading-none text-center">
        <div className="gap-2.5 self-stretch px-5 py-3 font-semibold text-sky-900 border-b-4 border-sky-900">Bone Scan</div>
        <div className="gap-2.5 self-stretch px-5 py-3 font-medium border-b-2 border-stone-300 text-zinc-600">Kalkulator Kehamilan</div>
      </div>
      {historyItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-wrap gap-10 justify-center items-center mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-xs leading-none text-blue-400">{item.date}</div>
              <div className="mt-3 text-base font-semibold leading-none text-sky-900">{item.event}</div>
            </div>
            <div className="gap-2.5 self-stretch p-2 my-auto text-sm font-semibold text-blue-400 bg-blue-100 rounded-lg">{item.score}</div>
            <button className="flex gap-1 justify-center items-center self-stretch px-3 py-1.5 my-auto text-xs font-semibold bg-zinc-300 rounded-[60px] text-neutral-700">
              <span className="self-stretch my-auto">Unduh Laporan</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cda7664650e3938255f28dada32531c9c1cb9aa5fa4a4ba02dd89a5e062559d?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
              />
            </button>
          </div>
          {index < historyItems.length - 1 && <div className="shrink-0 mt-8 max-w-full h-px border border-solid bg-neutral-400 bg-opacity-20 border-neutral-400 border-opacity-20 w-[800px]" />}
        </React.Fragment>
      ))}
      <div className="flex flex-wrap gap-10 justify-center items-center mt-12 font-medium max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch my-auto text-sm tracking-normal text-gray-400">Showing data 1 to 8 of 16 entries</div>
        <div className="flex gap-3 self-stretch my-auto text-xs tracking-normal leading-none text-gray-700 whitespace-nowrap rounded min-w-[240px] w-[271px]">
          <button className="px-2.5 py-1.5 rounded border border-solid bg-neutral-100 border-zinc-100">&lt;</button>
          <button className="px-2.5 text-white bg-sky-900 rounded border border-sky-900 border-solid h-[25px] w-[25px]">1</button>
          <button className="px-2.5 rounded border border-solid bg-neutral-100 border-zinc-100 h-[25px] w-[25px]">2</button>
          <button className="px-2 w-6 h-6 rounded border border-solid bg-neutral-100 border-zinc-100">3</button>
          <button className="px-2.5 py-1.5 rounded border border-solid bg-neutral-100 border-zinc-100">4</button>
          <span className="my-auto text-black">...</span>
          <button className="px-1.5 py-1.5 rounded border border-solid bg-neutral-100 border-zinc-100">40</button>
          <button className="px-2.5 py-1.5 rounded border border-solid bg-neutral-100 border-zinc-100">&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default HistoryTools;
