import React from "react";

function ReferralCode({ code }) {
  return (
    <div className="flex gap-10 items-start self-stretch p-6 my-auto text-base font-bold text-sky-900 bg-white rounded-xl min-w-[240px] max-md:px-5">
      <div>
        <span>Kode Referral:</span> <span className="font-semibold">{code}</span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2661a07c041e129a265664629b42d4cfdb9d35e51adc5a8db58c6de3e5e98342?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        className="object-contain shrink-0 w-6 rounded aspect-square"
        alt=""
      />
    </div>
  );
}

export default ReferralCode;
