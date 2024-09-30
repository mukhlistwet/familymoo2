// import React from "react";

// function EventPromoSection() {
//   return (
//     <main className="container mx-auto mt-2 mb-2 bg-slate-100">
//       <section className=" justify-center items-center ">
//         <h2 className="text-2xl font-bold leading-none text-stone-900">Event & Promo</h2>
//         <div className="flex relative flex-col justify-center items-center w-full text-sm font-medium leading-6 text-sky-900 whitespace-nowrap rounded-xl min-h-[542px] px-[582px] max-md:px-5 max-md:py-24">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a831dc7567408f463a5fcee773dd29f00f075bef222940a5ed80f17b7a55504b?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
//             alt=""
//             className="object-cover absolute inset-0 size-full"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }

// export default EventPromoSection;
// tesssss will

export default function Example() {
  return (
    <div className="container my-4 mx-auto max-w-7xl min-h-full flex items-center justify-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a831dc7567408f463a5fcee773dd29f00f075bef222940a5ed80f17b7a55504b?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
        alt="Centered Image"
        className="h-auto w-full max-w-full object-contain"
      />
    </div>
  );
}
