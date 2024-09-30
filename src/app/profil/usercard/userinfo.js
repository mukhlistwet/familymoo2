import React from "react";

function UserInfo({ name, phone }) {
  return (
    <header className="flex flex-col self-start">
      <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
      <p className="text-xs">{phone}</p>
    </header>
  );
}

export default UserInfo;
