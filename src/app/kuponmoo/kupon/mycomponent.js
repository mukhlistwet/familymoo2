import React from "react";
import CouponCard from "./CouponCard";
import UploadStrukCard from "./UploadStrukCard";
import DateSelector from "./DateSelector";

function MyComponent() {
  const couponData = {
    title: "0 Kupon MOO senilai",
    value: "0",
    expiry: "24 Juli 2024",
    buttonText: "Tukar",
  };

  const uploadStrukData = {
    title: "Menangkan Kupon senilai Rp10.000!",
    description: "Upload struk senilai 150rb dalam 3 bulan berturut-turut",
    remainingUploads: "3 Struk Lagi",
  };

  return (
    <main className="flex flex-wrap gap-10 items-center px-1 py-1 max-md:px-5">
      <section className="flex flex-wrap gap-6 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <CouponCard {...couponData} />
        <UploadStrukCard {...uploadStrukData} />
      </section>
      <DateSelector />
    </main>
  );
}

export default MyComponent;
