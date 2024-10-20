import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TanpaPassword() {
  return (
    <>
      <Navbar />
      <div className=" bgsignup bg-cover bg-center  min-h-0 md:min-h-full" style={{ height: "39rem" }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          {/* <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a> */}
          <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-xl
           xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-sans font-bold leading-tight tracking-tight text-cyan-700 md:text-3xl dark:text-white">Masuk Tanpa Password</h1>

              <form className="max-w-md mx-auto">
                <div className="mb-6">
                  <label Hrmlfor="email" className="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                    Nomor Ponsel (Terhubung Whatsapp)<a className="text-red-600">*</a>
                  </label>
                  <input
                    type="number"
                    id="Phone"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="contoh:0813xxx"
                  />
                </div>
                <div className="mb-6">
                  <label Hrmlfor="confirm_password large" className="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                    Pertanyaan Keamanan<a className="text-red-600">*</a>
                  </label>
                  <select
                    id="large"
                    size="lg"
                    className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>- Pilih -</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <p className="text-xs italic font-sans font-normal text-cyan-700 dark:text-white">Digunakan apabila lupa password</p>
                </div>
                <div className="mb-6">
                  <label Hrmlfor="large" className="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                    Jawaban<a className="text-red-600">*</a>
                  </label>
                  <input
                    type="date"
                    id="date"
                    size="lg"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <p id="helper-text-explanation" className="text-center mt-2  text-gray-500 dark:text-gray-400">
                  {" "}
                  <a href="#" className="text-cyan-900 font-sans font-medium hover:text-blue-600 dark:text-blue-500">
                    Kembali
                  </a>
                </p>
                <button
                  type="button"
                  className=" w-full justify-center text-white bg-gradient-to-r font-sans from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 mt-4"
                >
                  Kirim OTP
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
