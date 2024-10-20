import React from "react";

function ProfileNav() {
  return (
    <nav className="flex absolute z-0 items-center text-sm font-semibold text-white left-[99px] top-[111px]">
      <div className="gap-1 self-stretch px-3 py-2 my-auto whitespace-nowrap rounded-[34px]">Profil</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc5850eabd600ff23b932bb99683732efdc8709327abbfe339d2345f8c7b0d53?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="gap-1 self-stretch px-3 py-2 my-auto">Poin Moo</div>
    </nav>
  );
}

export default ProfileNav;
