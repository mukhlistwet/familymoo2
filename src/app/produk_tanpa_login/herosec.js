import React from "react";

function ImageComponent() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-blue-200">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/756b3f4ae02824bca4039fb47f887d78e1a1477674ab368d8f984dce50e0660a?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Decorative image"
        className="object-contain w-full aspect-[2.56]"
      />
      <div className="flex absolute z-0 flex-col justify-center max-w-full h-[216px] min-h-[216px] left-[200px] top-[143px] w-[686px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="text-7xl font-bold tracking-tighter text-white max-md:max-w-full max-md:text-4xl ">Produk MOO</h1>
          <p className="mt-3 text-xl text-sky-900 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Sit purus faucibus posuere ultricies cras risus. Orci lectus vitae faucibus elit sit. Odio fermentum et orci cursus sagittis eget. Elit faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageComponent;
