import React from "react";
import Slider from "react-slick";
import "../globals.css";

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: "image1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc: "image1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc: "image1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "#",
      imageSrc: "image1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      href: "#",
      imageSrc: "image1.png",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="container mx-auto py-8">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img alt={product.imageAlt} src={product.imageSrc} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <hr />
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
