import React from "react";
import ActivityList from "./ActivityList";
import DataDisplay from "./pagination/DataDisplay";

function ActivityPage() {
  return (
    <main>
      <ActivityList />
      <DataDisplay />
    </main>
  );
}

export default ActivityPage;
