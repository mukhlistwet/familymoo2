"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Tombol untuk men-toggle sidebar */}
      <button onClick={toggleSidebar} className="p-2 text-white bg-blue-500 sm:hidden">
        Toggle Sidebar
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:relative sm:block w-64`}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block py-2 hover:bg-gray-700">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-gray-700">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-gray-700">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Konten utama */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl">Konten Utama</h1>
        <p>Ini adalah konten utama yang akan ditampilkan di sebelah sidebar.</p>
      </main>
    </div>
  );
};

export default Sidebar;
