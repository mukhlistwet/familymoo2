import React from "react";

function Modal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null; // If modal is closed, don't render it.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Modal Title</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          <p className="text-sm text-gray-600">This is the content of the modal. Add your information here.</p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 space-x-2 border-t">
          <button onClick={onClose} className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded">
            Close
          </button>
          <button onClick={onSubmit} className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
