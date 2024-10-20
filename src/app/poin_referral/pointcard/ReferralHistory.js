import React from "react";
import ReferralBanner from "./ReferralBanner";
import ReferralHistoryItem from "./ReferralHistoryItem";

const referralHistoryData = [
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
  { date: "12 Januari 2024", userName: "Boegi", points: 10 },
];

function ReferralHistory() {
  return (
    <main className="flex flex-col">
      <h1 className="text-2xl font-bold text-sky-900">Riwayat Kupon MOO</h1>
      <ReferralBanner />
      <section className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
        {referralHistoryData.map((item, index) => (
          <React.Fragment key={index}>
            <ReferralHistoryItem date={item.date} userName={item.userName} points={item.points} />
            {index < referralHistoryData.length - 1 && <hr className="mt-8 w-full min-h-0 border border-solid bg-neutral-400 bg-opacity-20 border-neutral-400 border-opacity-20 max-md:max-w-full" />}
          </React.Fragment>
        ))}
      </section>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm mt-6 ">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default ReferralHistory;
