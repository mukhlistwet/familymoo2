import { useState } from "react";

import Modal from "./Modal_Berhasil_tukar/Modal";

// Data produk sebagai contoh
const products = [
  {
    name: "Blender",
    poin: "36.000 Poin",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Rice Cooker",
    poin: "200.000 Poin",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 3",
    poin: "300.000 Poin",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 4",
    poin: "400.000 Poin",
    image: "/tukarpoin/wacth.png",
  },

  {
    name: "Produk 5",
    poin: "Rp 100.000",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Produk 6",
    poin: "Rp 200.000",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 7",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 8",
    poin: "Rp 400.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 9",
    poin: "Rp 100.000",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Produk 10",
    poin: "Rp 200.000",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 11",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 12",
    poin: "Rp 400.000",
    image: "/tukarpoin/wacth.png",
  },

  {
    name: "Produk 13",
    poin: "Rp 100.000",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Produk 14",
    poin: "Rp 200.000",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 15",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 16",
    poin: "Rp 400.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 17",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 18",
    poin: "Rp 400.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 19",
    poin: "Rp 100.000",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Produk 20",
    poin: "Rp 200.000",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 21",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 22",
    poin: "Rp 400.000",
    image: "/tukarpoin/wacth.png",
  },

  {
    name: "Produk 23",
    poin: "Rp 100.000",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Produk 24",
    poin: "Rp 200.000",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 15",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 16",
    poin: "Rp 400.000",
    image: "/tukarpoin/wacth.png",
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-5">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6 max-md:space-x-0 max-md:space-y-4 md:justify-start">
        {" "}
        {/* flex-wrap untuk responsif */}
        <button className={`px-4 py-2 rounded ${activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab(1)}>
          Semua
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab(2)}>
          Elektronik
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab(3)}>
          Alat Dapur
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 4 ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab(4)}>
          Olahraga
        </button>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className={`${activeTab === Math.ceil((index + 1) / 6) ? "block" : "hidden"}`}>
            <div className="border p-4 md:p-6 rounded-lg">
              <img src={product.image} alt={product.name} className="h-48 w-full object-contain object-center" />
              <h3 className="text-lg font-bold text-center text-cyan-800 font-sans">{product.name}</h3>
              <p className="text-gray-600 text-sm font-sans text-center">{product.poin}</p>
              {/* modal */}
              <div className="mt-5">
                <button onClick={openModal} className="mt-2 w-full bg-sky-900 text-white py-2 rounded hover:bg-blue-600">
                  Tukar Hadiah
                </button>
              </div>

              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
