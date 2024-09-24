"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { DatePicker } from "@nextui-org/date-picker";
export default function Daftar() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
      <Navbar />
      <div class="bg-hero bg-no-repeat  bg-cover bg-center h-full">
        <div class="flex flex-col items-center justify-center px-6 py-10 mx-auto ">
          {/* <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a> */}
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-6 mb-6 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-3xl font-bold leading-tight tracking-tight text-lg font-sans font-bold text-cyan-800 md:text-3xl dark:text-white text-center">Yuk Daftar Sekarang</h1>
              <p class="text-md font-sans font-bold text-grey-900 pl-3">Masuk/Daftar</p>
              {/* tes */}

              <form class="max-w-xl mx-auto">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label Hrmlfor="first_name" class="block mb-2 text-sm font-sans font-medium text-lime-900 dark:text-white">
                      Nama Depan<a class="text-red-600">*</a>
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label Hrmlfor="last_name" class="block mb-2 text-sm font-sans font-medium text-lime-900 dark:text-white">
                      Nama Belakang<a class="text-red-600">*</a>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label Hrmlfor="email" class="block mb-2 text-sm font-sans font-medium text-lime-900 dark:text-white">
                    Nomor Ponsel (Terhubung Whatsapp)<a class="text-red-600">*</a>
                  </label>
                  <input
                    type="number"
                    id="phone-input"
                    size="lg"
                    class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1234-5678-90"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label Hrmlfor="password" class="block mb-2  text-sm font-sans font-medium text-lime-900 dark:text-white">
                    Password<a class="text-red-600">*</a>
                  </label>
                  <div className="relative container mx-auto ">
                    <input
                      id="password"
                      size="lg"
                      type={isPasswordVisible ? "text" : "password"}
                      class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5 text-base  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                    />
                    <button className=" absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div class="mb-6">
                  <label Hrmlfor="confirm_password large" class="block mb-2  text-sm font-sans font-medium text-lime-900 dark:text-white">
                    Pertanyaan Keamanan<a class="text-red-600">*</a>
                  </label>
                  <select
                    id="large"
                    size="lg"
                    class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>- Pilih -</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <p class="text-xs italic font-sans font-normal text-cyan-700 dark:text-white">Digunakan apabila lupa password</p>
                </div>
                <div class="mb-6">
                  <label Hrmlfor="large" class="block mb-2  text-sm font-sans font-medium text-lime-900 dark:text-white">
                    Jawaban<a class="text-red-600">*</a>
                  </label>
                  <input
                    type="date"
                    id="date"
                    size="lg"
                    class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label Hrmlfor="first_name" class="block mb-2  text-sm font-sans font-medium text-lime-900 dark:text-white">
                      Isi jika ada Kode Referral
                    </label>
                    <select
                      id="large"
                      size="lg"
                      class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>- Pilih -</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label Hrmlfor="last_name" class="block mb-2  text-sm font-sans font-medium text-lime-900 dark:text-white">
                      -
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label Hrmlfor="remember" class="ms-2  text-sm font-sans font-medium text-cyan-900 dark:text-gray-300">
                    Saya Menyetujui Syarat dan Ketentuan Serta Kebijakan Privasi dari Fonterra Brands Indonesia. <br />
                    <a href="#" class="text-red-600 underline hover:text-blue-600 dark:text-blue-500">
                      Cek disini
                    </a>
                    &nbsp;Untuk info lebih lanjut
                  </label>
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label Hrmlfor="remember" class="ms-2  text-sm font-sans font-normal text-cyan-900 dark:text-gray-300">
                    Saya bersedia menerima segala penawaran, promosi, sample, dan komunikasi pemasaran terbaru lainnya dari Fonterra Brands Indonesia melalui email, SMS, Telepon, dan Whatsapp.
                  </label>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <button
                    type="back"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg  w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Kembali
                  </button>

                  <button
                    type="submit"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg  w-full sm:w-auto px-5 py-34text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lanjut
                  </button>
                </div>
              </form>

              {/* end tes */}
              {/* <form class="max-w-sm mx-auto">
                <label for="email" class="block mb-2  font-bold text-cyan-900 dark:text-white">
                  Masuk/Daftar
                </label>
                <input
                  type="email"
                  id="email"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh:0813xxx"
                />
                <button
                  type="button"
                  class=" w-full justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 mt-4"
                >
                  Lanjutkan
                </button>
                <p id="helper-text-explanation" class="text-center mt-2  text-gray-500 dark:text-gray-400">
                  {" "}
                  <a href="#" class="font-bold text-cyan-900 hover:underline dark:text-blue-500">
                    Masuk tanpa Password
                  </a>
                </p>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
