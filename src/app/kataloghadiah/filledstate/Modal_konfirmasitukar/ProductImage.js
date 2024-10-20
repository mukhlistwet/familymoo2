import React from "react";

function ProductImage() {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[260px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58f9daab7bbe40cccb7e6145fc470717d5e5b63997fabb2ae92d915fb187dd46?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Product image"
        className="object-contain w-full aspect-[0.74]"
      />
    </div>
  );
}

export default ProductImage;
