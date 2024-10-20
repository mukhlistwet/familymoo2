"use client";
import { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide to next image
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // change the slide every 3 seconds

    return () => clearInterval(timer); // clean up interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full mx-auto mt-10">
      <div className="overflow-hidden">
        {/* Image */}
        <img src={slides[currentIndex].image} alt={slides[currentIndex].alt} className="w-full object-cover " />
      </div>

      {/* Left Arrow */}
      <button onClick={prevSlide} className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-md">
        &#10094;
      </button>

      {/* Right Arrow */}
      <button onClick={nextSlide} className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-md">
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
