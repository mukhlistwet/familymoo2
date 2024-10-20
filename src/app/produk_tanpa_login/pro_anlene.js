// const products = [
//   {
//     id: 1,
//     name: "Anlene",
//     href: "#",
//     imageSrc: "produk1.png",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "",
//   },
//   {
//     id: 2,
//     name: "Anlene",
//     href: "#",
//     imageSrc: "produk2.png",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "",
//   },
//   {
//     id: 3,
//     name: "Anlene",
//     href: "#",
//     imageSrc: "produk1.png",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "",
//   },
//   {
//     id: 4,
//     name: "Anlene",
//     href: "#",
//     imageSrc: "produk2.png",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "",
//   },
//   // More products...
// ];

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-lime-600">Anlene Product</h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-white shadow-lg lg:aspect-none group-hover:opacity-75 lg:h-auto py-4">
//                 <img alt={product.imageAlt} src={product.imageSrc} className="h-full w-full object-none object-center lg:h-full lg:w-full" />
//                 <h3 className="text-lg font-bold text-center text-lime-600 font-sans">{product.name}</h3>
//                 <p className="text-gray-600  text-sm font-sans text-center">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Menggunakan ikon dari react-icons

// Produk

const products = [
  { id: 1, name: "Product 1", price: "Rp 100.000", imageSrc: "produk1.png" },
  { id: 2, name: "Product 2", price: "Rp 200.000", imageSrc: "produk2.png" },
  { id: 3, name: "Product 3", price: "Rp 300.000", imageSrc: "produk1.png" },
  { id: 4, name: "Product 4", price: "Rp 400.000", imageSrc: "produk2.png" },
  { id: 5, name: "Product 5", price: "Rp 500.000", imageSrc: "produk1.png" },
  { id: 6, name: "Product 6", price: "Rp 600.000", imageSrc: "produk2.png" },
  { id: 7, name: "Product 1", price: "Rp 100.000", imageSrc: "produk1.png" },
  { id: 8, name: "Product 2", price: "Rp 200.000", imageSrc: "produk2.png" },
  { id: 9, name: "Product 3", price: "Rp 300.000", imageSrc: "produk1.png" },
  { id: 10, name: "Product 4", price: "Rp 400.000", imageSrc: "produk2.png" },
  { id: 11, name: "Product 5", price: "Rp 500.000", imageSrc: "produk1.png" },
  { id: 12, name: "Product 6", price: "Rp 600.000", imageSrc: "produk2.png" },
  // Tambahkan produk lainnya
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute right-20 z-0 flex items-center justify-center w-10 h-10 bg-gray-200 text-cyan-900 rounded-full cursor-pointer" style={{ top: "-60px" }} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-10 z-0 flex items-center justify-center w-10 h-10 bg-gray-200 text-cyan-900 rounded-full cursor-pointer" style={{ top: "-60px" }} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

// Carousel Component
export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Menampilkan 3 produk per baris
    slidesToScroll: 1,
    rows: 2, // Menampilkan 2 baris produk
    nextArrow: <NextArrow />, // Gunakan custom next arrow
    prevArrow: <PrevArrow />, // Gunakan custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-4 relative">
      <h2 className="text-2xl font-bold tracking-tight text-lime-600 py-6">Anlene Anlene</h2> {/* Tambahkan relative positioning */}
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg px-4 py-8">
              <img src={product.imageSrc} alt={product.name} className="w-full h-48 object-none rounded-md" />
              <h3 className="mt-4 text-lg font-bold text-center">{product.name}</h3>
              <p className="text-center text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
