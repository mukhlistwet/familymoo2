
import React from "react";

function SearchBar() {
  return (
    <form className="flex flex-col self-stretch my-auto text-xs text-stone-300 w-[240px]">
      <div className="flex gap-2 items-center px-3.5 py-3 w-full bg-white rounded-xl border-solid border-[0.693px] border-slate-200">
        <label htmlFor="searchInput" className="sr-only">
          Cari artikel yang dibutuhkan
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="Cari artikel yang dibutuhkan"
          className="flex-grow bg-transparent border-none outline-none"
        />
        
      </div>
    </form>
  );
}

export default SearchBar;
