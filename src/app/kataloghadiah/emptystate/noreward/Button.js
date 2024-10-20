import React from "react";

function Button({ text }) {
  return <button className="flex-1 shrink gap-2 self-stretch px-6 mt-6 w-40 max-w-full text-xl font-medium leading-snug text-sky-900 bg-blue-200 min-h-[56px] min-w-[160px] rounded-[58px]">{text}</button>;
}

export default Button;
