import React from "react";

function UserImage() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a33ea2c16da245b9b51075bfcaa30118e817f2464a1e0f2703ff8047873784ec?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        className="object-contain grow shrink-0 max-w-full aspect-[1.19] w-[200px]"
        alt="User profile"
      />
    </div>
  );
}

export default UserImage;
