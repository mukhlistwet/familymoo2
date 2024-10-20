import React from "react";

function ProductDetails() {
  return (
    <div className="flex flex-col self-stretch p-6 my-auto bg-white rounded-xl min-w-[240px] w-[297px] max-md:px-5">
      <div className="flex flex-col max-w-full font-bold w-[249px]">
        <h2 className="text-2xl text-sky-900">Blender</h2>
        <p className="text-base text-green-700">36.500 Poin</p>
        <p className="text-xs text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="flex flex-col mt-4 max-w-full text-xs text-stone-900 w-[197px]">
        <h3 className="font-semibold">Syarat dan Ketentuan</h3>
        <ul className="mt-1 list-disc pl-5">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
