import React from "react";

function IconButton({ iconSrc, iconAlt }) {
  return (
    <div className="flex gap-2.5 justify-center items-center px-3 bg-blue-100 h-[72px] rounded-[72px] w-[72px]">
      <img src={iconSrc} alt={iconAlt} className="object-contain self-stretch my-auto w-12 aspect-square" />
    </div>
  );
}

export default IconButton;
