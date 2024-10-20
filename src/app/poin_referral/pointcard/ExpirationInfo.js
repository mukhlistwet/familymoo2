import React from "react";

function ExpirationInfo({ points, expirationDate }) {
  return (
    <div className="flex gap-1 items-start mt-2 text-sm">
      <div className="font-medium text-sky-900">{points} Poin MOO</div>
      <div className="text-black">
        Kadaluwarsa pada <span className="font-medium">{expirationDate}</span>
      </div>
    </div>
  );
}

export default ExpirationInfo;
