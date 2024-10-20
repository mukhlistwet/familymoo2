import React from "react";

const PaginationButton = ({ children, label, active, disabled }) => {
  const baseClasses = "px-2.5 py-1.5 rounded border border-solid";
  const activeClasses = "text-white bg-sky-900 border-sky-900";
  const inactiveClasses = "bg-neutral-100 border-zinc-100";

  return (
    <button className={`${baseClasses} ${active ? activeClasses : inactiveClasses} h-[25px] w-[25px]`} aria-label={label} aria-current={active ? "page" : undefined} disabled={disabled}>
      {children}
    </button>
  );
};

export default PaginationButton;
