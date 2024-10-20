import React from "react";
import InfoCard from "./StatCard";

const Dashboard = () => {
  const cardData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e74864b35a99b1e1eccc2cf8348343e8f79d0a394a66103420f4bd084abbbf2?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      value: "Rp 1.050.000",
      label: "Belanja MOO",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b3c8714d4426bb6ae80f419162cdbbacfa4a9689abdc2f56b2dfdedbd3a8e60?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      value: "940",
      label: "Poin MOO",
      additionalIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8900c6b5cf0b205f99bd106d48bee86158d14206ef71e5fe19fd7f3f89ab9f58?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39e1c5e12e38da771fd917bf7003a4dd1e595765905d370c740cd232ce2573c7?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      value: "8",
      label: "KuponMOO",
      additionalIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d16b18d284b34c2efc2567d68c46dbc4fda5ffdcd08fccb6f59b28d18ccf8a15?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
    },
  ];

  return (
    <section className="absolute left-28 z-0 top-[330px] max-w-[679px] w-full flex flex-wrap gap-4 items-center max-sm:gap-2 max-sm:left-0">
      {cardData.map((card, index) => (
        <div key={index} className="w-full sm:w-auto max-sm:w-1/2 ">
          <InfoCard icon={card.icon} value={card.value} label={card.label} additionalIcon={card.additionalIcon} />
        </div>
      ))}
    </section>
  );
};

export default Dashboard;

// <main className="absolute left-28 z-0 top-[330px] flex flex-wrap gap-4 items-center max-w-[679px] shadow-[0px_18px_32px_rgba(0,0,0,0.15)] max-sm:flex max-sm:flex-row max-sm:self-stretch max-sm:w-full max-sm:left-">
//className="absolute left-28 z-0 top-[330px] grid grid-cols-1 gap-4 items-center max-w-[679px] shadow-[0px_18px_32px_rgba(0,0,0,0.15)] sm:grid-cols-2 sm:gap-4 max-sm:w-full max-sm:left-0">
//   {statData.map((stat, index) => (
//     <StatCard key={index} icon={stat.icon} title={stat.title} subtitle={stat.subtitle} hasArrow={stat.hasArrow} />
//   ))}
// </main>
