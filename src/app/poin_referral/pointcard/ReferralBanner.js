import React from "react";

function ReferralBanner() {
  return (
    <section className="flex flex-wrap gap-10 items-center p-8 mt-14 bg-amber-100 rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <h2 className="text-3xl font-bold text-lime-600 max-md:max-w-full">Ajak Teman, Dapat Poin MOO</h2>
        <p className="mt-3 text-base font-medium text-sky-900">Informasi skema komisi</p>
      </div>
      <div className="flex gap-10 items-start self-stretch p-6 my-auto text-base font-bold text-sky-900 bg-white rounded-xl min-w-[240px] max-md:px-5">
        <p>
          <span>Kode Referral:</span> <span className="font-semibold">SRIXXX</span>
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2661a07c041e129a265664629b42d4cfdb9d35e51adc5a8db58c6de3e5e98342?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain shrink-0 w-6 rounded aspect-square"
        />
      </div>
    </section>
  );
}

export default ReferralBanner;
