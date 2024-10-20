import React from "react";
import ReferralInfo from "./ReferralInfo";
import ReferralCode from "./ReferralCode";
import NoReferral from "./NoReferral";

function RiwayatKupon() {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-bold text-sky-900 max-sm:mx-auto">Riwayat Kupon MOO</h1>
      <div className="flex flex-wrap gap-10 items-center p-8 mt-14 bg-amber-100 rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full max-sm:rounded-xl">
        <ReferralInfo />
        <ReferralCode code="SRIXXX" />
      </div>
      <NoReferral />
    </section>
  );
}

export default RiwayatKupon;
