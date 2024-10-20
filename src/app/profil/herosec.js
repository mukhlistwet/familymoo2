import React from "react";

import Statcard from "./statcard/seccard";
import ProfileCard from "./componen/ProfileCard";
import EditProfileButton from "./componen/EditProfileButton";

function ImageComponent() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-200 h-[600px] flex flex-col max-sm:justify-end lg:h-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/756b3f4ae02824bca4039fb47f887d78e1a1477674ab368d8f984dce50e0660a?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Decorative image"
        className="object-contain w-full aspect-[2.56] max-sm:aspect-auto"
      />
      <ProfileCard name="Akmal Xavier" phone="+62 0812 3456 7890" referralCode="SRIXXX" />
      <EditProfileButton />
      <Statcard />
    </section>
  );
}

export default ImageComponent;
