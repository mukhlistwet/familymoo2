"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MasukPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <>
      <Header />
      <div class=" bgsignup bg-cover bg-center  min-h-0 md:min-h-full" style={{ height: "39rem" }}>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
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
          <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-20 sm:max-w-xl
           xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="mb-1 font-sans font-bold leading-tight tracking-tight text-cyan-700 md:text-3xl dark:text-white">Daftar/Masuk</h1>
              <a class="text-md font-sans font-bold text-grey-900">Masukan Password</a>
              <form class="max-w-md mx-auto">
                <div class="mb-6">
                  <label for="password" class="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                    Password
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
                <p id="helper-text-explanation" class="text-center mt-2  text-gray-500 dark:text-gray-400">
                  {" "}
                  <a href="#" class="text-cyan-900 font-sans font-medium hover:text-blue-600 dark:text-blue-500">
                    Kembali
                  </a>
                </p>
                <button
                  type="button"
                  class=" w-full justify-center text-white bg-gradient-to-r font-sans from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 mt-4"
                >
                  Lanjutkan
                </button>
                <p id="helper-text-explanation" class="text-end mt-2  text-gray-500 dark:text-gray-400">
                  {" "}
                  <a href="#" class=" text-red-600 text-sm font-sans font-medium underline hover:text-blue-600 dark:text-blue-500">
                    Lupa Password
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
