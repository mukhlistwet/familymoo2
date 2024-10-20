import React from "react";

function ShareOption({ name, icon }) {
  return (
    <div className="flex flex-col items-center p-2 whitespace-nowrap">
      <img loading="lazy" src={icon} alt={`${name} icon`} className="object-contain w-16 aspect-square" />
      <div className="mt-1">{name}</div>
    </div>
  );
}

export default ShareOption;
