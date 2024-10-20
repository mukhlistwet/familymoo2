"use client";
import React, { useState } from "react";

function ImageComponent() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-200 h-[300px] flex flex-col max-sm:justify-end lg:h-auto">
      {/* Image Section */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/756b3f4ae02824bca4039fb47f887d78e1a1477674ab368d8f984dce50e0660a?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Decorative image"
        className="object-contain w-full aspect-[2.56] max-sm:aspect-auto" // Change max-sm:h-[200px] to max-sm:h-auto
      />

      {/* Text Content */}
      <div className="absolute z-10 flex flex-col justify-center w-[686px] max-w-full h-[316px] min-h-[216px] left-[200px] top-[143px] max-lg:left-[100px] max-md:left-[50px] max-sm:left-0 max-sm:top-[20px] max-sm:w-full max-sm:px-4 max-sm:h-auto">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="text-7xl font-bold tracking-tighter text-white max-lg:text-5xl max-md:text-4xl max-sm:text-2xl">
            {" "}
            {/* Adjusted for mobile */}
            Produk MOO
          </h1>
          <p className="mt-3 text-xl text-sky-900 max-lg:text-lg max-md:text-base max-sm:text-sm">
            {isReadMore ? (
              "Lorem ipsum dolor sit amet consectetur. Sit purus faucibus posuere ultricies cras risus. Orci lectus vitae faucibus elit sit. Odio fermentum et orci cursus sagittis eget. Elit faucibus."
            ) : (
              <span>Lorem ipsum dolor sit amet consectetur. Sit purus faucibus posuere ultricies...</span>
            )}
            {/* "Read More" link visible only on mobile */}
            <span onClick={toggleReadMore} className={`text-blue-500 cursor-pointer ${isReadMore ? "hidden" : "block"} max-sm:inline`}>
              Read More
            </span>
            {/* "Read Less" link visible only when full text is shown */}
            {isReadMore && (
              <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer max-sm:inline">
                Read Less
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageComponent;
