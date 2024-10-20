import React from "react";
import DatePicker from "./DatePicker";
import StatCard from "./StatCard";

function Content() {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d1fb45c191c61dc48dca2a111c0a60794a267102a735b1434bafc8bfbae926e?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      title: "Referral",
      value: "0",
      isHighlighted: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c6f5d8382b1b6453d3e66f739d22fb66b610e0f7287049d9f480a619331d6e4?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      title: "Share Content",
      value: "0",
      isHighlighted: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e98bf964ef0594d1215996f8656cee91c20d18d94275346afc79acfb686ee7d3?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
      title: "Submit Review",
      value: "0",
      isHighlighted: false,
    },
  ];

  return (
    <main className="flex flex-wrap gap-10 items-center">
      <DatePicker />
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </main>
  );
}

export default Content;
