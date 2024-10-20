"use client";
import React, { useState } from "react";
import NavBar1 from "./histori_transaksi/navbar1";
import NavBar2 from "./pesanan/navbar1";
import NavBar3 from "./review_kosong/konten";
import NavBar3A from "./review/konten";
import NavBar4 from "./historitool/HistoryTools";
import NavBar5 from "./sample/navbar1";
const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex">
      <aside id="default-sidebar" className=" w-64 h-auto transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li onClick={() => setActiveTab("home")} className={`block w-full text-left p-2 rounded ${activeTab === "home" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#08436A" width="24px" height="24px" viewBox="0 0 24 24">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
                  </g>
                </svg>
                <span className="ms-3">Histori Transaksi</span>
              </a>
            </li>
            <li onClick={() => setActiveTab("pesanan")} className={`block w-full text-left p-2 rounded ${activeTab === "pesanan" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500}`}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 4.5C0.5 3.39543 1.39543 2.5 2.5 2.5H15.5C16.6046 2.5 17.5 3.39543 17.5 4.5V20.5C17.5 21.6046 16.6046 22.5 15.5 22.5H2.5C1.39543 22.5 0.5 21.6046 0.5 20.5V4.5ZM15.5 4.5H2.5V20.5H15.5V4.5Z"
                    fill="#08436A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0.5C6.55228 0.5 7 0.947715 7 1.5V4.5C7 5.05228 6.55228 5.5 6 5.5C5.44772 5.5 5 5.05228 5 4.5V1.5C5 0.947715 5.44772 0.5 6 0.5ZM12 0.5C12.5523 0.5 13 0.947715 13 1.5V4.5C13 5.05228 12.5523 5.5 12 5.5C11.4477 5.5 11 5.05228 11 4.5V1.5C11 0.947715 11.4477 0.5 12 0.5ZM4 9C4 8.44772 4.44772 8 5 8H13C13.5523 8 14 8.44772 14 9C14 9.55229 13.5523 10 13 10H5C4.44772 10 4 9.55229 4 9ZM4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13ZM4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H5C4.44772 18 4 17.5523 4 17Z"
                    fill="#08436A"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Pesanan</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </a>
            </li>
            <li onClick={() => setActiveTab("review")} className={`block w-full text-left p-2 rounded ${activeTab === "review" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500}`}>
              <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path
                    d="M7 14.5H8.625C8.75833 14.5 8.88767 14.475 9.013 14.425C9.13833 14.375 9.25067 14.3 9.35 14.2L14.05 9.5C14.2 9.35 14.3127 9.179 14.388 8.987C14.4633 8.795 14.5007 8.60767 14.5 8.425C14.4993 8.24233 14.4577 8.06333 14.375 7.888C14.2923 7.71267 14.184 7.55 14.05 7.4L13.15 6.45C13 6.3 12.8333 6.18767 12.65 6.113C12.4667 6.03833 12.275 6.00067 12.075 6C11.8917 6 11.7043 6.03767 11.513 6.113C11.3217 6.18833 11.1507 6.30067 11 6.45L6.3 11.15C6.2 11.25 6.125 11.3627 6.075 11.488C6.025 11.6133 6 11.7423 6 11.875V13.5C6 13.7833 6.096 14.021 6.288 14.213C6.48 14.405 6.71733 14.5007 7 14.5ZM7.5 13V12.05L10.025 9.525L10.525 9.975L10.975 10.475L8.45 13H7.5ZM10.525 9.975L10.975 10.475L10.025 9.525L10.525 9.975ZM11.175 14.5H17C17.2833 14.5 17.521 14.404 17.713 14.212C17.905 14.02 18.0007 13.7827 18 13.5C17.9993 13.2173 17.9033 12.98 17.712 12.788C17.5207 12.596 17.2833 12.5 17 12.5H13.175L11.175 14.5ZM6 18.5L3.7 20.8C3.38334 21.1167 3.02067 21.1877 2.612 21.013C2.20333 20.8383 1.99933 20.5257 2 20.075V4.5C2 3.95 2.196 3.47933 2.588 3.088C2.98 2.69667 3.45067 2.50067 4 2.5H20C20.55 2.5 21.021 2.696 21.413 3.088C21.805 3.48 22.0007 3.95067 22 4.5V16.5C22 17.05 21.8043 17.521 21.413 17.913C21.0217 18.305 20.5507 18.5007 20 18.5H6ZM5.15 16.5H20V4.5H4V17.625L5.15 16.5Z"
                    fill="#08436A"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Review</span>
              </a>
            </li>
            <li onClick={() => setActiveTab("reviewb")} className={`block w-full text-left p-2 rounded ${activeTab === "review" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500}`}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path
                    d="M7 14.5H8.625C8.75833 14.5 8.88767 14.475 9.013 14.425C9.13833 14.375 9.25067 14.3 9.35 14.2L14.05 9.5C14.2 9.35 14.3127 9.179 14.388 8.987C14.4633 8.795 14.5007 8.60767 14.5 8.425C14.4993 8.24233 14.4577 8.06333 14.375 7.888C14.2923 7.71267 14.184 7.55 14.05 7.4L13.15 6.45C13 6.3 12.8333 6.18767 12.65 6.113C12.4667 6.03833 12.275 6.00067 12.075 6C11.8917 6 11.7043 6.03767 11.513 6.113C11.3217 6.18833 11.1507 6.30067 11 6.45L6.3 11.15C6.2 11.25 6.125 11.3627 6.075 11.488C6.025 11.6133 6 11.7423 6 11.875V13.5C6 13.7833 6.096 14.021 6.288 14.213C6.48 14.405 6.71733 14.5007 7 14.5ZM7.5 13V12.05L10.025 9.525L10.525 9.975L10.975 10.475L8.45 13H7.5ZM10.525 9.975L10.975 10.475L10.025 9.525L10.525 9.975ZM11.175 14.5H17C17.2833 14.5 17.521 14.404 17.713 14.212C17.905 14.02 18.0007 13.7827 18 13.5C17.9993 13.2173 17.9033 12.98 17.712 12.788C17.5207 12.596 17.2833 12.5 17 12.5H13.175L11.175 14.5ZM6 18.5L3.7 20.8C3.38334 21.1167 3.02067 21.1877 2.612 21.013C2.20333 20.8383 1.99933 20.5257 2 20.075V4.5C2 3.95 2.196 3.47933 2.588 3.088C2.98 2.69667 3.45067 2.50067 4 2.5H20C20.55 2.5 21.021 2.696 21.413 3.088C21.805 3.48 22.0007 3.95067 22 4.5V16.5C22 17.05 21.8043 17.521 21.413 17.913C21.0217 18.305 20.5507 18.5007 20 18.5H6ZM5.15 16.5H20V4.5H4V17.625L5.15 16.5Z"
                    fill="#08436A"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Review</span>
              </a>
            </li>
            <li onClick={() => setActiveTab("histori")} className={`block w-full text-left p-2 rounded ${activeTab === "histori" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500}`}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.25 2.5C11.25 2.30109 11.329 2.11032 11.4697 1.96967C11.6103 1.82902 11.8011 1.75 12 1.75C17.937 1.75 22.75 6.563 22.75 12.5C22.75 18.437 17.937 23.25 12 23.25C6.063 23.25 1.25 18.437 1.25 12.5C1.25 12.3011 1.32902 12.1103 1.46967 11.9697C1.61032 11.829 1.80109 11.75 2 11.75C2.19891 11.75 2.38968 11.829 2.53033 11.9697C2.67098 12.1103 2.75 12.3011 2.75 12.5C2.75 14.3295 3.2925 16.1179 4.30891 17.639C5.32531 19.1602 6.76996 20.3458 8.46018 21.0459C10.1504 21.746 12.0103 21.9292 13.8046 21.5723C15.5989 21.2154 17.2471 20.3344 18.5407 19.0407C19.8344 17.7471 20.7154 16.0989 21.0723 14.3046C21.4292 12.5103 21.246 10.6504 20.5459 8.96018C19.8458 7.26996 18.6602 5.82531 17.139 4.80891C15.6179 3.7925 13.8295 3.25 12 3.25C11.8011 3.25 11.6103 3.17098 11.4697 3.03033C11.329 2.88968 11.25 2.69891 11.25 2.5ZM12 8.75C12.1989 8.75 12.3897 8.82902 12.5303 8.96967C12.671 9.11032 12.75 9.30109 12.75 9.5V12.75H16C16.1989 12.75 16.3897 12.829 16.5303 12.9697C16.671 13.1103 16.75 13.3011 16.75 13.5C16.75 13.6989 16.671 13.8897 16.5303 14.0303C16.3897 14.171 16.1989 14.25 16 14.25H12C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V9.5C11.25 9.30109 11.329 9.11032 11.4697 8.96967C11.6103 8.82902 11.8011 8.75 12 8.75ZM9.1 2.898C9.13549 2.98992 9.15252 3.08794 9.15012 3.18644C9.14772 3.28495 9.12593 3.38202 9.08599 3.4721C9.04606 3.56218 8.98877 3.64351 8.91739 3.71144C8.84601 3.77937 8.76195 3.83257 8.67 3.868C8.5286 3.9222 8.38855 3.97988 8.25 4.041C8.15939 4.08553 8.06073 4.1113 7.95992 4.11678C7.85911 4.12226 7.75823 4.10733 7.66333 4.07289C7.56843 4.03844 7.48146 3.98519 7.40763 3.91633C7.3338 3.84746 7.27464 3.7644 7.23369 3.67212C7.19273 3.57984 7.17083 3.48024 7.1693 3.3793C7.16776 3.27835 7.18662 3.17813 7.22475 3.08465C7.26288 2.99117 7.31949 2.90634 7.39118 2.83527C7.46288 2.76419 7.54819 2.70832 7.642 2.671C7.802 2.599 7.965 2.531 8.13 2.468C8.22192 2.43251 8.31994 2.41548 8.41844 2.41788C8.51695 2.42028 8.61402 2.44207 8.7041 2.48201C8.79418 2.52194 8.87551 2.57923 8.94344 2.65061C9.01137 2.72199 9.06457 2.80605 9.1 2.898ZM5.648 4.74C5.78506 4.88404 5.85931 5.07661 5.85443 5.27538C5.84956 5.47415 5.76595 5.66285 5.622 5.8C5.51239 5.9047 5.40536 6.01207 5.301 6.122C5.16375 6.26615 4.97486 6.34986 4.77588 6.35474C4.57691 6.35962 4.38415 6.28525 4.24 6.148C4.09585 6.01075 4.01214 5.82186 4.00726 5.62288C4.00238 5.42391 4.07675 5.23115 4.214 5.087C4.336 4.96 4.46 4.836 4.587 4.714C4.73104 4.57694 4.92361 4.50269 5.12238 4.50757C5.32115 4.51244 5.51085 4.59605 5.648 4.74ZM3.16 7.761C3.25003 7.80098 3.3313 7.8583 3.39917 7.92969C3.46705 8.00108 3.52019 8.08515 3.55557 8.17708C3.59095 8.26901 3.60787 8.36701 3.60537 8.46549C3.60287 8.56396 3.581 8.66098 3.541 8.751C3.48 8.889 3.421 9.029 3.367 9.17C3.29225 9.35109 3.14961 9.49575 2.96958 9.57303C2.78955 9.65031 2.58643 9.65408 2.40366 9.58353C2.22089 9.51299 2.07298 9.37372 1.99156 9.19553C1.91015 9.01733 1.90169 8.81435 1.968 8.63C2.031 8.465 2.098 8.303 2.17 8.142C2.20998 8.05197 2.2673 7.9707 2.33869 7.90283C2.41008 7.83495 2.49415 7.78181 2.58608 7.74643C2.67801 7.71105 2.77601 7.69413 2.87449 7.69663C2.97296 7.69913 3.06998 7.721 3.16 7.761Z"
                    fill="#08436A"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">History Tools</span>
              </a>
            </li>
            <li onClick={() => setActiveTab("sample")} className={`block w-full text-left p-2 rounded ${activeTab === "sample" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500}`}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path
                    d="M20 14.4998C20.3852 14.5 20.7556 14.6484 21.0344 14.9142C21.3132 15.1801 21.479 15.543 21.4975 15.9277C21.516 16.3125 21.3858 16.6896 21.1338 16.981C20.8818 17.2724 20.5274 17.4556 20.144 17.4928L20 17.4998H7.62099L9.06099 18.9398C9.33376 19.2116 9.49156 19.5779 9.50172 19.9628C9.51189 20.3477 9.37364 20.7218 9.11559 21.0076C8.85755 21.2934 8.49948 21.469 8.11553 21.4981C7.73157 21.5272 7.35113 21.4075 7.05299 21.1638L6.93899 21.0608L3.10999 17.2308C2.13599 16.2568 2.76999 14.6138 4.10099 14.5058L4.24099 14.4998H20ZM14.94 3.93981C15.2024 3.67721 15.5528 3.52122 15.9235 3.50201C16.2942 3.4828 16.6589 3.60173 16.947 3.83581L17.061 3.93881L20.89 7.76881C21.864 8.74281 21.23 10.3858 19.899 10.4938L19.759 10.4998H3.99999C3.61477 10.4996 3.2444 10.3512 2.9656 10.0854C2.68681 9.81957 2.52098 9.45667 2.50247 9.0719C2.48395 8.68713 2.61418 8.30998 2.86617 8.01861C3.11815 7.72724 3.47257 7.54398 3.85599 7.50681L3.99999 7.49981H16.379L14.939 6.05981C14.6581 5.77856 14.5003 5.39731 14.5003 4.99981C14.5003 4.60231 14.6591 4.22106 14.94 3.93981Z"
                    fill="#08436A"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Minta Sample</span>
              </a>
            </li>
            <li onClick={() => setActiveTab("keluar")} className={`block w-full text-left p-2 rounded ${activeTab === "keluar" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500}`}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Page Content */}
        <main className="p-8">
          {activeTab === "home" && (
            <div>
              <NavBar1 />
            </div>
          )}
          {activeTab === "pesanan" && (
            <div>
              <NavBar2 />
            </div>
          )}
          {activeTab === "review" && (
            <div>
              <NavBar3 />
            </div>
          )}
          {activeTab === "reviewb" && (
            <div>
              <NavBar3A />
            </div>
          )}
          {activeTab === "histori" && (
            <div>
              <NavBar4 />
            </div>
          )}
          {activeTab === "sample" && (
            <div>
              <NavBar5 />
            </div>
          )}
          {activeTab === "keluar" && <div>Ini adalah halaman review</div>}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

// "use client";
// import React, { useState } from "react";
// import NavBar1 from "./histori_transaksi/navbar1";
// import NavBar2 from "./pesanan/navbar1";
// import NavBar3 from "./review_kosong/konten";
// import NavBar3A from "./review/konten";
// import NavBar4 from "./historitool/HistoryTools";
// import NavBar5 from "./sample/navbar1";

// const Layout = ({ children }) => {
//   const [activeTab, setActiveTab] = useState("home");

//   return (
//     <div classNameName="min-h-screen flex">
//       <aside id="default-sidebar" className="w-64 h-auto transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//           <ul className="flex flex-col space-y-2 font-medium max-sm:flex-row max-sm:flex-wrap max-sm:space-y-0">
//             <li onClick={() => setActiveTab("home")} className={`block w-1/2 sm:w-full text-left p-2 rounded ${activeTab === "home" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
//               <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="#08436A" width="24px" height="24px" viewBox="0 0 24 24">
//                   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                   <g id="SVGRepo_iconCarrier">
//                     <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
//                   </g>
//                 </svg>
//                 <span className="ms-3">Histori Transaksi</span>
//               </a>
//             </li>
//             <li onClick={() => setActiveTab("pesanan")} className={`block w-1/2 sm:w-full text-left p-2 rounded ${activeTab === "pesanan" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
//               <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M0.5 4.5C0.5 3.39543 1.39543 2.5 2.5 2.5H15.5C16.6046 2.5 17.5 3.39543 17.5 4.5V20.5C17.5 21.6046 16.6046 22.5 15.5 22.5H2.5C1.39543 22.5 0.5 21.6046 0.5 20.5V4.5ZM15.5 4.5H2.5V20.5H15.5V4.5Z"
//                     fill="#08436A"
//                   />
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M6 0.5C6.55228 0.5 7 0.947715 7 1.5V4.5C7 5.05228 6.55228 5.5 6 5.5C5.44772 5.5 5 5.05228 5 4.5V1.5C5 0.947715 5.44772 0.5 6 0.5ZM12 0.5C12.5523 0.5 13 0.947715 13 1.5V4.5C13 5.05228 12.5523 5.5 12 5.5C11.4477 5.5 11 5.05228 11 4.5V1.5C11 0.947715 11.4477 0.5 12 0.5ZM4 9C4 8.44772 4.44772 8 5 8H13C13.5523 8 14 8.44772 14 9C14 9.55229 13.5523 10 13 10H5C4.44772 10 4 9.55229 4 9ZM4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13ZM4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H5C4.44772 18 4 17.5523 4 17Z"
//                     fill="#08436A"
//                   />
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Pesanan</span>
//                 <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
//               </a>
//             </li>
//             <li onClick={() => setActiveTab("review")} className={`block w-1/2 sm:w-full text-left p-2 rounded ${activeTab === "review" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
//               <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//                   <path
//                     d="M7 14.5H8.625C8.75833 14.5 8.88767 14.475 9.013 14.425C9.13833 14.375 9.25067 14.3 9.35 14.2L14.05 9.5C14.2 9.35 14.3127 9.179 14.388 8.987C14.4633 8.795 14.5007 8.60767 14.5 8.425C14.4993 8.24233 14.4577 8.06333 14.375 7.888C14.2923 7.71267 14.184 7.55 14.05 7.4L13.15 6.45C13 6.3 12.8333 6.18767 12.65 6.113C12.4667 6.03833 12.275 6.00067 12.075 6C11.8917 6 11.7043 6.03767 11.513 6.113C11.3217 6.18833 11.1507 6.30067 11 6.45L6.3 11.15C6.2 11.25 6.125 11.3627 6.075 11.488C6.025 11.6133 6 11.7423 6 11.875C6 12.4373 6.43733 13 7 13H9.6L8.625 14.5H7ZM10.5 20C12.8438 20 15 17.8438 15 15.5C15 13.1562 12.8438 11 10.5 11C8.15625 11 6 13.1562 6 15.5C6 17.8438 8.15625 20 10.5 20Z"
//                     fill="#08436A"
//                   />
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Review</span>
//                 <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">2</span>
//               </a>
//             </li>
//             <li onClick={() => setActiveTab("history")} className={`block w-1/2 sm:w-full text-left p-2 rounded ${activeTab === "history" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
//               <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="#08436A" width="24px" height="24px" viewBox="0 0 24 24">
//                   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                   <g id="SVGRepo_iconCarrier">
//                     <path d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM4 4H20V20H4V4ZM15.5 5C15.5 5.27614 15.2761 5.5 15 5.5H9C8.72386 5.5 8.5 5.27614 8.5 5C8.5 4.72386 8.72386 4.5 9 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5ZM14 8H10C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10H14C14.5523 10 15 9.55228 15 9C15 8.44772 14.5523 8 14 8ZM14 12H10C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14H14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12Z"></path>
//                   </g>
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">History Tools</span>
//                 <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">1</span>
//               </a>
//             </li>
//             <li onClick={() => setActiveTab("sample")} className={`block w-1/2 sm:w-full text-left p-2 rounded ${activeTab === "sample" ? "bg-gray-300 text-cyan-800" : "text-gray-500"} hover:text-blue-500`}>
//               <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-700 group">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="#08436A" width="24px" height="24px" viewBox="0 0 24 24">
//                   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                   <g id="SVGRepo_iconCarrier">
//                     <path
//                       d="M12 2C11.4477 2 11 2.44772 11 3V6H10C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8H11V10H9.5C8.67157 10 8 10.6716 8 11.5C8 12.3284 8.67157 13 9.5 13H11V16H10C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H13V13H14.5C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10H13V8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H14V3C14 2.44772 13.5523 2 13 2H12Z"
//                       fill="#08436A"
//                     />
//                   </g>
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Sample</span>
//                 <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">5</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </aside>
//       <div className="flex-1 p-4">
//         {activeTab === "home" && <NavBar1 />}
//         {activeTab === "pesanan" && <NavBar2 />}
//         {activeTab === "review" && <NavBar3 />}
//         {activeTab === "history" && <NavBar4 />}
//         {activeTab === "sample" && <NavBar5 />}
//       </div>
//     </div>
//   );
// };

// export default Layout;
