import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

export default function Otp() {
  return (
    <>
      <Navbar />
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
              <h1 class="text-xl font-sans font-bold leading-tight tracking-tight text-cyan-700 md:text-3xl dark:text-white text-center">Masukan OTP</h1>

              <form class="max-w-xl mx-auto">
                <div class="grid gap-2 mb-6 md:grid-cols-6">
                  <div className="grid sm:grid-cols-2">
                    <input
                      type="number"
                      id="otp_1"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <input
                      type="number"
                      id="otp_1"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <input
                      type="number"
                      id="otp_1"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <input
                      type="number"
                      id="otp_1"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <input
                      type="number"
                      id="otp_1"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <input
                      type="number"
                      id="otp_1"
                      size="lg"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
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
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
