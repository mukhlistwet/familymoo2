import React from "react";
import PaginationButton from "./PaginationButton";

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4];

  return (
    <nav aria-label="Pagination">
      <ul className="flex gap-3 self-stretch my-auto text-xs tracking-normal leading-none text-gray-700 whitespace-nowrap rounded min-w-[240px] w-[271px]">
        <li>
          <PaginationButton label="Previous page" disabled>
            &lt;
          </PaginationButton>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PaginationButton label={`Page ${number}`} active={number === 1}>
              {number}
            </PaginationButton>
          </li>
        ))}
        <li className="my-auto text-black">...</li>
        <li>
          <PaginationButton label="Page 40">40</PaginationButton>
        </li>
        <li>
          <PaginationButton label="Next page">&gt;</PaginationButton>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
