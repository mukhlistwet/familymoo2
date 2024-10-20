"use client";
import { useState } from "react";
import TukarKupon from "./tukarkupon";
import TukarPoin from "./tukarpoin";
import KuponInfo from "./kuponinfo";
export default function NavTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tukar Poin", "Tukar Kupon"];

  return (
    <div className="w-full my-8">
      <div className="float-end max-md:float-none max-md:text-center">
        <KuponInfo count={8} type="KuponMOO" expiry="24 Juli 2024" />
      </div>
      <div className="flex border-b border-gray-300 w-72">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)} className={`px-4 py-2 font-bold font-sans text-lg ${activeTab === index ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"} hover:text-blue-500`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 0 && (
          <div className="font-sans font-semibold text-lg">
            <a className="pl-6">Klaim Reward</a>

            <TukarPoin />
          </div>
        )}
        {activeTab === 1 && (
          <div className="font-sans font-semibold text-lg">
            <a className="pl-6">Klaim Voucher</a>

            <TukarKupon />
          </div>
        )}
      </div>
    </div>
  );
}
