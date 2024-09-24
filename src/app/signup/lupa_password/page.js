import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

export default function TanpaPassword() {
  return (
    <>
      <Navbar />
      <div class=" bgsignup bg-cover bg-center  md:min-h-screen   py-40">
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
            class="w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-xl
           xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-sans font-bold leading-tight tracking-tight text-cyan-700 md:text-3xl dark:text-white">Lupa Kata Sandi</h1>

              <form class="max-w-md mx-auto">
                <div class="mb-6">
                  <label Hrmlfor="email" class="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                    Nomor Ponsel (Terhubung Whatsapp)<a class="text-red-600">*</a>
                  </label>
                  <input
                    type="number"
                    id="Phone"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="contoh:0813xxx"
                  />
                </div>
                <div class="mb-6">
                  <label Hrmlfor="confirm_password large" class="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
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
                  <label Hrmlfor="large" class="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                    Jawaban<a class="text-red-600">*</a>
                  </label>
                  <input
                    type="text"
                    id="jawaban"
                    size="lg"
                    class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <p id="helper-text-explanation" class="text-center mt-2  text-gray-500 dark:text-gray-400">
                  {" "}
                  <a href="/signup/masukan_password" class="text-cyan-900 font-sans font-medium hover:text-blue-600 dark:text-blue-500">
                    Kembali
                  </a>
                </p>
                <button
                  type="button"
                  class=" w-full justify-center text-white bg-gradient-to-r font-sans from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 mt-4"
                >
                  Lanjut
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
