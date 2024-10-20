import { useState } from "react";

// Data produk sebagai contoh
const products = [
  {
    name: "Produk 1",
    poin: "Rp 100.000",
    image: "/tukarpoin/camera.png",
  },
  {
    name: "Produk 2",
    poin: "Rp 200.000",
    image: "/tukarpoin/iphone.png",
  },
  {
    name: "Produk 3",
    poin: "Rp 300.000",
    image: "/tukarpoin/wacth.png",
  },
  {
    name: "Produk 4",
    poin: "Rp 400.000",
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
  return (
    <div className="container mx-auto p-5">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap space-x-2 mb-6 max-sm:space-x-0 max-sm:space-y-2">
        <button className={`px-4 py-2 rounded ${activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-200"} max-sm:w-full`} onClick={() => setActiveTab(1)}>
          Semua
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-200"} max-sm:w-full`} onClick={() => setActiveTab(2)}>
          E-walet
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 3 ? "bg-blue-500 text-white" : "bg-gray-200"} max-sm:w-full`} onClick={() => setActiveTab(3)}>
          Belanja
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 4 ? "bg-blue-500 text-white" : "bg-gray-200"} max-sm:w-full`} onClick={() => setActiveTab(4)}>
          Kebutuhan Harian
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 5 ? "bg-blue-500 text-white" : "bg-gray-200"} max-sm:w-full`} onClick={() => setActiveTab(5)}>
          Hiburan
        </button>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className={`${activeTab === Math.ceil((index + 1) / 6) ? "block" : "hidden"}`}>
            <div className="border p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-auto sm:max-h-48 object-contain object-center" />
              <h3 className="text-lg sm:text-xl font-bold text-center text-cyan-800 font-sans mt-2">{product.name}</h3>
              <p className="text-gray-600 text-sm font-sans text-center">{product.poin}</p>
              <button className="mt-2 w-full bg-sky-900 text-white py-2 rounded hover:bg-blue-600">Tukar Hadiah</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
