import { useState } from "react";
import ProdukAnlene from "./pro_anlene";
import ProdukAnlene1 from "./pro_anmum";
import EventPromo from "./EventPromo";
import Image from "next/image"; // Menggunakan Next.js Image component untuk gambar

export default function LogoNavTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto p-5">
      {/* Logo Navigation */}
      <div className="flex space-x-4 gap-32 mb-6 justify-center">
        <button onClick={() => setActiveTab(1)} className="focus:outline-none">
          <Image
            src="/logo/anlene.png"
            alt="Logo 1"
            width={150} // ukuran logo
            height={50}
            className={`rounded-lg ${activeTab === 1 ? "shadow-lg shadow-cyan-500/50" : ""}`}
          />
        </button>
        <button onClick={() => setActiveTab(2)} className="focus:outline-none">
          <Image src="/logo/anmum.png" alt="Logo 2" width={150} height={50} className={`rounded-lg ${activeTab === 2 ? "ring-2 ring-blue-500" : ""}`} />
        </button>
        <button onClick={() => setActiveTab(3)} className="focus:outline-none">
          <Image src="/logo/boneto.png" alt="Logo 3" width={150} height={50} className={`rounded-lg ${activeTab === 3 ? "ring-2 ring-blue-500" : ""}`} />
        </button>
        <button onClick={() => setActiveTab(4)} className="focus:outline-none">
          <Image src="/logo/anchor.png" alt="Logo 4" width={150} height={50} className={`rounded-lg ${activeTab === 4 ? "ring-2 ring-blue-500" : ""}`} />
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        {activeTab === 1 && (
          <div>
            <EventPromo />
            <ProdukAnlene />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div>
              <EventPromo />
              <ProdukAnlene1 />
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className="text-xl font-bold">Tab 3 Content</h2>
            <p>Konten untuk tab 3.</p>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <h2 className="text-xl font-bold">Tab 4 Content</h2>
            <p>Konten untuk tab 4.</p>
          </div>
        )}
      </div>
    </div>
  );
}
