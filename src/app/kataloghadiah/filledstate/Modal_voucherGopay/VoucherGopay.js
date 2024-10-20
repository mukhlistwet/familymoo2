import React from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import VoucherOption from "./VoucherOption";
import CouponExchange from "./CouponExchange";

function VoucherGopay() {
  const voucherOptions = [
    { amount: "10.000", coupons: 1, available: true },
    { amount: "50.000", coupons: 5, available: true },
    { amount: "100.000", coupons: 0, available: false },
  ];

  return (
    <main className="flex flex-col px-16 py-8 bg-blue-200 rounded-2xl max-w-[665px] max-md:px-5">
      <h1 className="text-2xl font-bold text-sky-900 max-md:max-w-full">Voucher Gopay</h1>
      <PhoneNumberInput />
      <section className="flex flex-col items-center mt-6 w-full max-w-[537px] max-md:max-w-full">
        <h2 className="text-base font-semibold leading-none text-sky-900 max-md:max-w-full">Pilih nominal voucher</h2>
        <div className="flex flex-wrap gap-2.5 justify-center items-center mt-4 w-full max-md:max-w-full">
          {voucherOptions.map((option, index) => (
            <VoucherOption key={index} {...option} />
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-sky-900">Syarat dan Ketentuan</p>
      </section>
      <CouponExchange />
    </main>
  );
}

export default VoucherGopay;
