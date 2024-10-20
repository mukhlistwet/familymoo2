import React from "react";
import ReferralBanner from "./ReferralBanner";
import ReferralHistoryItem from "./ReferralHistoryItem";

const referralHistoryData = [
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
];

function ReferralHistory() {
  return (
    <main className="flex flex-col">
      <h1 className="text-2xl font-bold text-sky-900">Riwayat Kupon MOO</h1>
      <ReferralBanner />
      <section className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
        {referralHistoryData.map((item, index) => (
          <React.Fragment key={index}>
            <ReferralHistoryItem date={item.date} userName={item.userName} points={item.points} />
            {index < referralHistoryData.length - 1 && <hr className="mt-8 w-full min-h-0 border border-solid bg-neutral-400 bg-opacity-20 border-neutral-400 border-opacity-20 max-md:max-w-full" />}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}

export default ReferralHistory;
