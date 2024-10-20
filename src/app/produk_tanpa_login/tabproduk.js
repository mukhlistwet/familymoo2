import { useState } from "react";
import ProdukAnlene from "./pro_anlene";
import ProdukAnmum from "./pro_anmum";
import ProdukBoneeto from "./pro_boneeto";
import ProdukAnchor from "./pro_anchor";
import EventPromo from "./EventPromo";
import Image from "next/image"; // Menggunakan Next.js Image component untuk gambar

export default function LogoNavTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto p-5">
      {/* Logo Navigation */}
      <div className="flex flex-wrap justify-center space-x-4 gap-4 sm:gap-20 mb-6">
        <button onClick={() => setActiveTab(1)} className="focus:outline-none">
          <Image
            src="/logo/anlene.png"
            alt="Logo 1"
            width={100} // Smaller logo on mobile
            height={40}
            className={`rounded-lg ${activeTab === 1 ? "shadow-lg shadow-lime-500/50" : ""}`}
          />
        </button>
        <button onClick={() => setActiveTab(2)} className="focus:outline-none">
          <Image src="/logo/anmum.png" alt="Logo 2" width={100} height={40} className={`rounded-lg ${activeTab === 2 ? "shadow-lg shadow-purple-500/50" : ""}`} />
        </button>
        <button onClick={() => setActiveTab(3)} className="focus:outline-none">
          <Image src="/logo/boneto.png" alt="Logo 3" width={100} height={40} className={`rounded-lg ${activeTab === 3 ? "shadow-lg shadow-cyan-500/50" : ""}`} />
        </button>
        <button onClick={() => setActiveTab(4)} className="focus:outline-none">
          <Image src="/logo/anchor.png" alt="Logo 4" width={100} height={40} className={`rounded-lg ${activeTab === 4 ? "shadow-lg shadow-red-500/50" : ""}`} />
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
            <EventPromo />
            <ProdukAnmum />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <EventPromo />
            <ProdukBoneeto />
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <EventPromo />
            <ProdukAnchor />
          </div>
        )}
      </div>
    </div>
  );
}
