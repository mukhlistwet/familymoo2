import { useState } from "react";

export default function Modal({ show, onClose }) {
  if (!show) return null; // Jika modal tidak aktif, tidak akan ditampilkan.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Tukar Point MOO</h2>
        <p className="mb-4">Untuk menukarkan poin masuk ke halaman hadiah</p>

        {/* Tombol Action */}
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Batal
          </button>
          <button onClick={() => alert("Data submitted!")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Tukar
          </button>
        </div>
      </div>
    </div>
  );
}
