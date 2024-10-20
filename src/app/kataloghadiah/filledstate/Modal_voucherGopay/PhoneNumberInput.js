import React from "react";

function PhoneNumberInput() {
  return (
    <div className="flex flex-col mt-6 w-full text-sm leading-none">
      <label htmlFor="phoneNumber" className="font-semibold text-sky-900">
        Nomor <span className="text-base">Ponsel</span>
      </label>
      <div className="flex flex-col mt-2 w-full font-medium rounded-2xl text-neutral-700 text-opacity-50">
        <input type="tel" id="phoneNumber" className="px-9 py-5 bg-white rounded-2xl max-md:px-5 max-md:max-w-full" placeholder="Masukkan no ponsel" />
      </div>
    </div>
  );
}

export default PhoneNumberInput;
