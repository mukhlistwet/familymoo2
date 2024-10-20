import React from "react";

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center self-stretch p-4 my-auto min-w-[240px] w-[360px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1db291f1d7cfbd737be16e81822fd5df0a6a2223c5fbb925f06d24d01ebbbaa2?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Payment success icon"
        className="object-contain max-w-full aspect-square w-[123px]"
      />
      <div className="flex flex-col items-center mt-8 w-full">
        <h1 className="text-2xl font-bold text-sky-900">Payment Successful</h1>
        <p className="mt-4 text-base text-center text-black">Your transaction has successfully been completed. Check more details of this transaction is your transaction history.</p>
      </div>
    </div>
  );
}

export default SuccessMessage;
