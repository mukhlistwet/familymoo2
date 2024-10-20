import React from "react";
import DateSelector from "./DateSelector";
import StatCard from "./StatCard";

function MyComponent() {
  const statCards = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44524fa143c4da0237b4b4c29237fbcfff4f637e31090fc3e12403dd099c6512?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      title: "Referral",
      value: "420",
      borderBottom: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ae6e48dd4df08aae881a9d2f814556c689abf569e710ac8fd199c85ae29b39c?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      title: "Share Content",
      value: "120",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/96b463996535bda468660d79a5dafdfbb6dbccf0245c2e2f70aeed0df2d02397?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      title: "Submit Review",
      value: "400",
    },
  ];

  return (
    <main className="flex flex-wrap gap-10 items-center">
      <DateSelector />
      {statCards.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </main>
  );
}

export default MyComponent;
