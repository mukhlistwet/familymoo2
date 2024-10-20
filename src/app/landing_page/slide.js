import React from "react";

function ImageComponent() {
  return (
    <section className="w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/859b608293f0321234d2a905726bcb54e92f4764a89354ca5a23f566a8713933?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Decorative image"
        className="object-contain z-0 self-center max-w-full"
        loading="lazy"
      />
    </section>
  );
}

export default ImageComponent;
