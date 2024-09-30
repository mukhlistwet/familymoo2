// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const products = [
  { id: 1, name: "Product 1", image: "produk1.png", price: "$10" },
  { id: 2, name: "Product 2", image: "produk2.png", price: "$15" },
  { id: 3, name: "Product 3", image: "produk1.png", price: "$20" },
  { id: 4, name: "Product 4", image: "produk2.png", price: "$25" },
  { id: 5, name: "Product 5", image: "produk1.png", price: "$30" },
  { id: 6, name: "Product 6", image: "produk2.png", price: "$35" },
  // Tambahkan lebih banyak produk jika diperlukan
];
const ProductCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // Menghubungkan tombol kustom ke Swiper
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = document.querySelector(".swiper");
      swiper.swiper.params.navigation.prevEl = prevRef.current;
      swiper.swiper.params.navigation.nextEl = nextRef.current;
      swiper.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="container-md mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card mt-10">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Tombol Navigasi Kustom */}
      <button ref={prevRef} className="swiper-button-custom prev-button">
        &lt;
      </button>
      <button ref={nextRef} className="swiper-button-custom next-button">
        &gt;
      </button>
    </div>
  );
};
export default ProductCarousel;
