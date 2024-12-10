import { usePaginationRange, DOTS } from "../hooks/usePaginationRange";
type NextPrevCallback = () => void;
type ChangePageCallback = (page: number) => void;

const Pagination = ({
  totalPageCount,
  currentPage,
  changePage,
  goToNextPage,
  gotToPreviousPage,
}: {
  totalPageCount: number;
  currentPage: number;
  changePage: ChangePageCallback;
  goToNextPage: NextPrevCallback;
  gotToPreviousPage: NextPrevCallback;
}) => {
  const paginationRange = usePaginationRange({
    totalPageCount: totalPageCount,
    currentPage,
  });

  return (
    <div className="flex justify-center items-center w-full">
      {/* show the pagiantion
                  it consists of next and previous buttons
                  along with page numbers, in our case, 5 page
                  numbers at a time */}
      {/* previous button */}
      <button
        onClick={gotToPreviousPage}
        className={`border-2 border-blue-900 border-solid   flex-1 h-10 m-0 flex justify-end items-center  ${
          currentPage === 1
            ? "pointer-events-none border-none bg-gray-800 text-[#ccc]"
            : "bg-white text-blue-700 hover:bg-blue-900 hover:text-white "
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>

        <span className="hidden md:block m-auto">Previous</span>
      </button>
      {/* show paginated button group */}
      {paginationRange &&
        paginationRange.map((item, index) => {
          if (item === DOTS) {
            return (
              <div
                key={index}
                className="bg-white border-2 border-blue-900 border-solid px-2 py-4 round-md h-10 w-10 relative mx-0 my-1 flex-1 cursor-not-allowed "
              >
                <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                  &#8230;
                </span>
              </div>
            );
          }
          return (
            <button
              key={index}
              onClick={() => changePage(parseInt(item.toString()))}
              className={` border-2 border-blue-900 border-solid px-2 py-4 round-md h-10 w-16 relative mx-0 my-1 cursor-pointer flex-1 ${
                currentPage === item
                  ? "border-none bg-blue-900 text-white pointer-events-none"
                  : "bg-white hover:bg-blue-900 hover:text-white"
              }`}
            >
              <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                {item}
              </span>
            </button>
          );
        })}
      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`  border-2 border-blue-900 border-solid  flex flex-1 h-10 m-0 cursor-pointer justify-end items-center  ${
          currentPage === totalPageCount
            ? "pointer-events-none border-none bg-gray-800 text-[#ccc]"
            : "bg-white text-blue-700 hover:bg-blue-900 hover:text-white"
        }`}
      >
        <span className="hidden md:block m-auto">next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-8 w-8  "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
