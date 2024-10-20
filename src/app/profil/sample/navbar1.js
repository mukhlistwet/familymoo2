import { useState } from "react";
import NabTabs2 from "./navtab2";

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Upload Struk", "Penukaran Hadiah"];

  return (
    <div className="w-full mb-8">
      <p className="font-sans font-bold text-cyan-900 text-xl mb-2">Sample</p>
      <div className="flex border-b border-gray-300 w-96">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)} className={`px-4 py-2 font-medium font-sans text-lg ${activeTab === index ? "border-b-2 border-blue-500 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 0 && (
          <div className="font-sans font-semibold text-lg">
            <NabTabs2 />
          </div>
        )}
        {activeTab === 1 && (
          <div className="font-sans font-semibold text-lg">
            <NabTabs2 />
          </div>
        )}
      </div>
    </div>
  );
}
