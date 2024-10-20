import { useState } from "react";
import Tes1 from "./konten";
import DatePicker from "./datepicker";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="container mx-auto p-5">
      {/* Navigation Buttons */}
      <div className="flex space-x-4 mb-6 gap-6">
        <button className={`px-4 py-2 rounded ${activeTab === 0 ? "bg-sky-900 text-white" : "border-solid border-2 border-gray-200"}`} onClick={() => setActiveTab(0)}>
          Semua
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 1 ? "bg-sky-900 text-white" : "border-solid border-2 border-gray-200"}`} onClick={() => setActiveTab(1)}>
          Valid
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 2 ? "bg-sky-900 text-white" : "border-solid border-2 border-gray-200"}`} onClick={() => setActiveTab(2)}>
          Dalam Prose
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === 3 ? "bg-sky-900 text-white" : "border-solid border-2 border-gray-200"}`} onClick={() => setActiveTab(3)}>
          Tidak Valid
        </button>
        <div className="justify-between">
          <DatePicker />
        </div>
      </div>

      {/* Content for each tab */}
      <div className="p-4">
        {activeTab === 0 && (
          <div>
            <Tes1 />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            Konten untuk Tab 2<Tes1 />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            Konten untuk Tab 3<Tes1 />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            Konten untuk Tab 4<Tes1 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
