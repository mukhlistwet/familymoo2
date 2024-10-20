import React from "react";
import ShareOption from "./ShareOption";
const shareOptions = [
  { name: "WhatsApp", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9bd1c89519c4f9d5d16d12e9b7ef3f1d6810467360e52d8283bedb3c25716313?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
  { name: "LINE", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3d2682d27230eb207691681248c2fca3f66fcdf8880711295dc7fe6481404ef?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
  { name: "Telegram", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bc6a0c02392dbc067be494c6a3a0522e9fe2b1117a890a64bcd1c0af28a78a6?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
  { name: "Twitter", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82b7e4e0cd43566238108b53500afe322e70d314853e608b49aa5d6dcdbb5241?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
  { name: "Facebook", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb04b266a6e538acc5e79c49551a39b64ba84e5d90a6ab2c94eef256343e4125?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
  { name: "E-Mail", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc50a04152e99e0a9e8a07053525da1e39580d2d1c8fb4c3ea0b358edc2d5d26?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
  { name: "Copy Link", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d656cf3f8e264bda02504a32d83d05cc62e8b48f6132b4b420bc0b1fe66eed0?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3" },
];

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg w-[90%] max-w-4xl p-6 max-sm:w-[95%] max-sm:p-4">
        {/* Exit Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <section className="flex flex-col px-16 py-8 mx-auto bg-white rounded-2xl shadow-sm max-md:px-5">
          <header className="flex flex-wrap gap-10 items-center text-2xl font-bold text-sky-900 max-md:max-w-full">
            <h1 className="self-stretch my-auto">Ajak Teman Join FamiyMoo!</h1>
          </header>
          <nav className="flex flex-wrap gap-4 items-start mt-6 text-base font-medium text-sky-900 max-md:max-w-full">
            {shareOptions.map((option) => (
              <ShareOption key={option.name} name={option.name} icon={option.icon} />
            ))}
          </nav>
        </section>
      </div>
    </div>
  );
}
