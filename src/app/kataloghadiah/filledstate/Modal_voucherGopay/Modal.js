import React from "react";
import VoucherGopay from "./VoucherGopay";

export default function close({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-20 overflow-y-auto h-full w-full z-50 grid place-items-center">
      {/* < className="relative top-20 mx-auto p-5 border shadow-lg rounded-md bg-sky-100"> */}
      <div className="mt-2 flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm max-md:px-5">
        <div className="flex flex-wrap gap-6 items-center p-6 bg-blue-100 rounded-2xl max-md:px-5 max-md:max-w-full">
          <VoucherGopay />
        </div>
      </div>
    </div>
  );
}
