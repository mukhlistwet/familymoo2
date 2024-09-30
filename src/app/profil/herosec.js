import React from "react";
import UserCard from "./usercard/usericard";
import Editbutton from "./editprofil/editprofbutton";

function ImageComponent() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-blue-200">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/756b3f4ae02824bca4039fb47f887d78e1a1477674ab368d8f984dce50e0660a?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Decorative image"
        className="object-contain w-full aspect-[2.56]"
      />
      <UserCard />
      <Editbutton />
    </section>
  );
}

export default ImageComponent;
