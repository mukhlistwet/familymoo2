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

// export default function Example() {
//   return (
//     <div className="container my-4 mx-auto max-w-7xl min-h-full flex items-center justify-center">
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/a831dc7567408f463a5fcee773dd29f00f075bef222940a5ed80f17b7a55504b?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
//         alt="Centered Image"
//         className="h-auto w-full max-w-full object-contain"
//       />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/slide4.png", // Add your image path
    alt: "Image 1",
  },
  {
    src: "/slide1.png",
    alt: "Image 2",
  },
  {
    src: "/slide3.png",
    alt: "Image 3",
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-play: change the slide every 3 seconds
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(autoPlay); // Cleanup the interval on component unmount
  }, []);

  return (
    // <div className="container my-4 mx-auto max-w-7xl min-h-full flex items-center justify-center"></div>
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden min-h-full flex items-center justify-center">
      <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={900} // Define width and height based on your layout
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Optional navigation buttons */}
      {/* <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-4">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} className="text-white bg-gray-800 p-2 rounded-full">
          Prev
        </button>
        <button onClick={nextSlide} className="text-white bg-gray-800 p-2 rounded-full">
          Next
        </button>
      </div> */}

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div key={index} className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}
