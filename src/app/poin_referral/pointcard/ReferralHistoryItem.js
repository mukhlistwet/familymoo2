import React from "react";

function ReferralHistoryItem({ date, userName, points }) {
  return (
    <article className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto text-sky-900">
        <time className="text-xs leading-none text-blue-400">{date}</time>
        <h3 className="mt-2 text-lg font-semibold">Regis User Baru</h3>
        <p className="mt-2 text-sm leading-none">Nama User: {userName}</p>
      </div>
      <p className="self-stretch my-auto text-lg font-semibold leading-none text-right text-green-700">+{points} Poin</p>
    </article>
  );
}

export default ReferralHistoryItem;
