import React from "react";

function VoucherOption({ amount, coupons, available }) {
  const baseClasses = "flex flex-1 shrink gap-3 self-stretch px-3 py-2 my-auto rounded-xl basis-0 min-h-[72px]";
  const availableClasses = "text-sky-900 bg-amber-100";
  const unavailableClasses = "bg-neutral-200";

  return (
    <div className={`${baseClasses} ${available ? availableClasses : unavailableClasses}`}>
      <div className="flex flex-col flex-1 shrink justify-center w-full basis-0">
        <div className={`text-base ${available ? "font-bold" : "font-semibold text-zinc-600"}`}>{amount}</div>
        <div className={`mt-1 text-xs font-medium leading-snug ${available ? "" : "text-red-600"}`}>{available ? `${coupons} Kupon` : "Stok habis"}</div>
      </div>
    </div>
  );
}

export default VoucherOption;
