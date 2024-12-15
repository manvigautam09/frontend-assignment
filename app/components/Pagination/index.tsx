import { Limits } from "../../constant";

export default function Pagination({
  offSet,
  totalPages,
  currentPage,
  setOffSet,
  handleNextPage,
  handlePreviousPage,
}: {
  offSet: number;
  totalPages: number;
  currentPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  setOffSet: (val: number) => void;
}) {
  return (
    <div
      className="pagination"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <select
        value={offSet}
        onChange={(e) => setOffSet(Number(e.target.value))}
        aria-label="Items per page"
      >
        {Limits.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
}
