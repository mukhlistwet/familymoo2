import { useState } from "react";
import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import Modal from "../Modal_Berhasil_tukar/Modal";

export default function close({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-20 overflow-y-auto h-full w-full z-50 grid place-items-center">
      {/* < className="relative top-20 mx-auto p-5 border shadow-lg rounded-md bg-sky-100"> */}
      <div className="mt-2 flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm max-md:px-5">
        <div className="flex flex-wrap gap-6 items-center p-6 bg-blue-100 rounded-2xl max-md:px-5 max-md:max-w-full">
          <ProductImage />
          <ProductDetails />
        </div>
        <div className="flex gap-6 items-start mt-8 text-base leading-none text-center whitespace-nowrap">
          <button onClick={onClose} className="gap-2 self-stretch p-4 text-sky-900 border border-sky-900 border-solid rounded-[61px] w-[162px]">
            Batalkan
          </button>
          <button conClick={openModal} className="gap-2 self-stretch p-4 text-white bg-sky-900 rounded-[61px] w-[162px]">
            Tukar
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
}
