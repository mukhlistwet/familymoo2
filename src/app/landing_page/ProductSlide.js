import React from "react";
import Slider from "react-slick";
import "../globals.css";

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    { id: 1, name: "Product 1", image: "produk1.png" },
    { id: 2, name: "Product 2", image: "produk2.png" },
    { id: 3, name: "Product 3", image: "produk1.png" },
    { id: 4, name: "Product 4", image: "produk2.png" },
    { id: 5, name: "Product 5", image: "produk1.png" },
    { id: 6, name: "Product 1", image: "produk1.png" },
    { id: 7, name: "Product 2", image: "produk2.png" },
    { id: 8, name: "Product 3", image: "produk1.png" },
    { id: 9, name: "Product 4", image: "produk2.png" },
    { id: 10, name: "Product 5", image: "produk1.png" },
  ];

  return (
    <div className="container mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-medium text-gray-800">{product.name}</h3>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Lihat Semua Produk</button>
      </div>
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={`${className} absolute top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full cursor-pointer`} style={{ ...style, display: "block" }} onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={`${className} absolute top-1/2  transform -translate-y-1/2 bg-blue-500 rounded-full cursor-pointer`} style={{ ...style, display: "block" }} onClick={onClick} />;
};
export default ProductCarousel;
