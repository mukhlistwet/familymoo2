import React from "react";
import PointsDisplay from "./PointsDisplay";
import ExpirationInfo from "./ExpirationInfo";
import ExchangeButton from "./ExchangeButton";

function PointsCard() {
  return (
    <section className="flex overflow-hidden gap-6 justify-center items-center p-6 bg-amber-100 rounded-xl shadow-sm w-[486px] max-sm:w-full">
      <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px]">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-800">Poin MOO Aktif</h2>
        <PointsDisplay points={940} />
        <ExpirationInfo points={100} expirationDate="24 Juli 2024" />
      </div>
      <ExchangeButton />
    </section>
  );
}

export default PointsCard;
