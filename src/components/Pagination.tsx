import React from "react";
import { usePagination } from "../hooks/usePagination";
const DOTS = "...";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  siblingCount: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  siblingCount,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const paginationRange = usePagination({
    totalPages: totalPages,
    currentPage,
    siblingCount,
  });

  return (
    <div className="flex flex-row justify-between items-center md:gap-4 mb-4 w-full flex-wrap">
      <div className="flex items-center gap-2 w-[40%] md:w-auto">
        {/* show the pagiantion
                  it consists of next and previous buttons
                  along with page numbers, in our case, 5 page
                  numbers at a time */}
        {/* previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:text-gray-200 hover:bg-[#171b5a] disabled:opacity-50 w-1/2 md:w-auto text-[2vw] md:text-base"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* show paginated button group */}
        <div className="hidden md:flex gap-2">
          {paginationRange?.map((item, index) => {
            if (item === DOTS) {
              return (
                <span key={index} className="px-3 py-2 text-gray-400">
                  ...
                </span>
              );
            }
            return (
              <button
                key={index}
                onClick={() => onPageChange(Number(item))}
                className={`px-4 py-2 rounded ${
                  currentPage === item
                    ? "bg-[#171b5a] text-white"
                    : "bg-blue-900 text-gray-200 hover:bg-[#171b5a]"
                }`}
              >
                {/* <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "> */}
                {item}
                {/* </span> */}
              </button>
            );
          })}
        </div>
        {/* next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:text-gray-200 hover:bg-[#171b5a] disabled:opacity-50 w-1/2 md:w-auto text-[2vw] md:text-base"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex items-center md:gap-2 w-[40%] md:w-[30%] flex-row-reverse">
        <div className="w-full md:w-auto text-right md:text-left">
          <label className="text-gray-600 text-[2vw] md:text-base">
            Rows Per Page:
            <select
              value={rowsPerPage}
              onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
              className="ml-2 p-2 border border-gray-300 rounded"
            >
              {[100, 200, 500, 1000].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="hidden lg:block">
          <span>{`Page ${currentPage} of ${totalPages} Pages`}</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
