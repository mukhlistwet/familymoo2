import React from "react";

function ImageComponent() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-blue-200 h-[500px] flex flex-col max-sm:justify-end lg:h-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/756b3f4ae02824bca4039fb47f887d78e1a1477674ab368d8f984dce50e0660a?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Decorative image"
        className="object-contain w-full aspect-[2.56] max-sm:aspect-auto"
      />
      <div className="absolute z-0 flex flex-col justify-center w-[586px] max-w-full h-[316px] min-h-[216px] left-[200px] top-[143px] max-lg:left-[100px] max-md:left-[50px] max-sm:left-0 max-sm:top-[80px] max-sm:w-full max-sm:px-4 max-sm:h-auto">
        <div className="flex flex-col w-full max-md:max-w-full px-4">
          {" "}
          {/* Tambahkan padding di mobile */}
          <h2 className="text-5xl font-bold tracking-tighter text-white max-md:max-w-full max-md:text-xl">Kumpulkan Kupon MOO, Dapatkan Hadiahnya</h2>
          <p className="mt-3 text-xl text-sky-900 max-md:max-w-full max-md:text-justify max-md:text-base mb-2">
            Lorem ipsum dolor sit amet consectetur. Sit purus faucibus posuere ultricies cras risus. Orci lectus vitae faucibus elit sit. Odio fermentum et orci cursus sagittis eget. Elit faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageComponent;
