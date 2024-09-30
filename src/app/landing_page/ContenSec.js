import React from "react";

function ContentSection() {
  return (
    <div className="container my-10 mx-auto max-w-7xl min-h-full flex items-center justify-center">
      <img
        src="konten.png" // ganti dengan path gambar Anda
        alt="Centered Image"
        className="h-auto w-full max-w-full object-contain"
      />
    </div>

    // <div className="container mx-auto  max-w-7xl px-6 lg:px-8 p-8 mt-2 mb-2 bg-violet-500">
    //   <header className="text-center my-8 mx-auto max-w-4xl">
    //     <h1 className="text-3xl font-bold text-white ">Dukung Sepanjang Perjalanan Mum dan Si Kecil Dengan Nutrisi Esensial dan Rasa Lezat Anmum</h1>
    //   </header>
    //   {/* <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-3xl font-medium tracking-tight text-white sm:text-4xl">Dukung Sepanjang Perjalanan Mum dan Si Kecil Dengan Nutrisi Esensial dan Rasa Lezat Anmum</p> */}
    //   <section className=" mx-auto max-w-4xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    //     {/* Content blocks */}
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h2 className="text-xl font-semibold text-gray-800">Item One</h2>
    //       <p className="mt-2 text-gray-600">Description for the first item.</p>
    //     </div>

    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h2 className="text-xl font-semibold text-gray-800">Item Two</h2>
    //       <p className="mt-2 text-gray-600">Description for the second item.</p>
    //     </div>

    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h2 className="text-xl font-semibold text-gray-800">Item Three</h2>
    //       <p className="mt-2 text-gray-600">Description for the third item.</p>
    //     </div>
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h2 className="text-xl font-semibold text-gray-800">Item Four</h2>
    //       <p className="mt-2 text-gray-600">Description for the third item.</p>
    //     </div>
    //   </section>
    // </div>
  );
}

export default ContentSection;
