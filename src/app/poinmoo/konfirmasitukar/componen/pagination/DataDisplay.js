import React from "react";
import Pagination from "./Pagination";

const DataDisplay = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center ml-auto font-medium max-w-[813px] max-md:flex max-sm:flex max-sm:flex-row max-sm:mr-auto max-sm:max-w-[393px]">
      <p className="self-stretch my-auto text-sm tracking-normal text-gray-400">Showing data 1 to 8 of 16 entries</p>
      <Pagination />
    </section>
  );
};

export default DataDisplay;
