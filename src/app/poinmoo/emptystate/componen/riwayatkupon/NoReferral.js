import React from "react";

function NoReferral() {
  return (
    <section className="flex overflow-hidden flex-col justify-center p-16 mx-auto text-center rounded-3xl border border-white border-solid shadow-2xl max-w-[590px] max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5300a5ee63e6dbdd81b966425f7309a8f631f6c90dffecf4018916e1d487d398?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Illustration representing no referrals"
        className="object-contain self-center w-60 max-w-full aspect-square"
      />
      <div className="flex flex-col items-start mt-6 w-full max-md:max-w-full">
        <h2 className="mx-auto text-3xl font-bold leading-snug text-black max-md:max-w-full">No Referral</h2>
        <p className="mt-2 text-lg font-medium text-black text-opacity-40 max-md:max-w-full">Looks like you don't have any referral here, you can start or continue your artwork here</p>
      </div>
    </section>
  );
}

export default NoReferral;
