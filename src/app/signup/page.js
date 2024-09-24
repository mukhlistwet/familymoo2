
import Link from "next/link";
import "../globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar/>
      <div className=" bgsignup bg-cover bg-center md:min-h-screen   py-40" >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
          
          <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-20 sm:max-w-xl
           xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-sans font-bold leading-tight tracking-tight text-cyan-700 md:text-3xl dark:text-white text-center">Daftar/Masuk</h1>

              <form className="max-w-md mx-auto">
                <label htmlFor="email" className="block mb-2  text-sm font-sans font-bold text-lime-900 dark:text-white">
                  Nomor Ponsel (Terhubung Whatsapp)
                </label>
                <input
                  type="number"
                  id="Phone"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh:0813xxx"
                />
                <Link href="/signup/masukan_password">
                  <button
                    type="button"
                    className=" w-full justify-center text-white bg-gradient-to-r font-sans from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 mt-4"
                  >
                    Lanjutkan
                  </button>
                </Link>
                
                {/* <p id="helper-text-explanation" className="text-center mt-2  text-gray-500 dark:text-gray-400">
                 
                  <a href="#" className="text-red-600 font-sans font-medium underline hover:text-blue-600 dark:text-blue-500">
                    Masuk tanpa Password
                  </a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
