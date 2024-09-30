import React from "react";

function ReferralCode({ code }) {
  return (
    <div className="flex gap-1 items-start mt-4 text-base font-bold">
      <p>
        <span>Kode Referral:</span> <span className="font-semibold">{code}</span>
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f3402602d99be076036cb003ed92ff9633cad86ecff16910806994a87f7870?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        className="object-contain shrink-0 w-6 rounded aspect-square"
        alt=""
      />
    </div>
  );
}

export default ReferralCode;
