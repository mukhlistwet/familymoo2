import React from "react";

const EditProfileButton = () => {
  return (
    <div className="flex absolute z-0 flex-col justify-center items-center px-10 py-7 bg-sky-900 rounded-r-lg h-[168px] left-[589px] shadow-[0px_18px_32px_rgba(0,0,0,0.25)] top-[151px] max-md:px-5 max-sm:left-60 max-sm:h-[140px]">
      <div className="flex gap-2.5 justify-center items-center px-3 bg-blue-100 h-[72px] rounded-[72px] w-[72px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e0afc88968ee4414103b199bb8e546f0a7968256eac271f2ac9e8df5858a2f3?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          className="object-contain self-stretch my-auto w-12 aspect-square"
          alt=""
        />
      </div>
      <button className="flex gap-2 items-center mt-4 text-lg font-medium tracking-tight text-white">
        <span className="self-stretch my-auto">Edit Profile</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71fcbd0faed35b53436a9cdb5ca1b78cffb76a1bcc759ead994bf2eee82e3441?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square"
          alt=""
        />
      </button>
    </div>
  );
};

export default EditProfileButton;
