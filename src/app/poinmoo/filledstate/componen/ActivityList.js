import React from "react";
import ActivityItem from "./ActivityItem";

const activityData = [
  { date: "12 Januari 2024", title: "Regis User Baru", userName: "Boegi", points: "+10 Poin" },
  { date: "12 Januari 2024", title: "Regis User Baru", userName: "Boegi", points: "+10 Poin" },
  { date: "12 Januari 2024", title: "Regis User Baru", userName: "Boegi", points: "+10 Poin" },
  { date: "12 Januari 2024", title: "Regis User Baru", userName: "Boegi", points: "+10 Poin" },
  { date: "12 Januari 2024", title: "Regis User Baru", userName: "Boegi", points: "+10 Poin" },
  { date: "12 Januari 2024", title: "Regis User Baru", userName: "Boegi", points: "+10 Poin" },
];

function ActivityList() {
  return (
    <section className="flex flex-col px-2.5 pt-2.5 mb-2.5 max-sm:flex max-sm:flex-col max-sm:p-5 max-sm:mx-auto">
      {activityData.map((activity, index) => (
        <React.Fragment key={index}>
          <ActivityItem date={activity.date} title={activity.title} userName={activity.userName} points={activity.points} />
          {index === 0 && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bda1893312a2e1053314224112421466981fc31c58fb94566fff425ae758582?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
              alt=""
              className="object-contain mt-8 w-full stroke-[1px] stroke-neutral-400 stroke-opacity-20 max-md:max-w-full"
            />
          )}
          {index !== activityData.length - 1 && <div className="mt-8 w-full min-h-0 border border-solid bg-neutral-400 bg-opacity-20 border-neutral-400 border-opacity-20 max-md:max-w-full" />}
        </React.Fragment>
      ))}
    </section>
  );
}

export default ActivityList;
