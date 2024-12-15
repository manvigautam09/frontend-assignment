import { Limits } from "@/app/constant";

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
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <select
        value={offSet}
        onChange={(e) => setOffSet(Number(e.target.value))}
      >
        {Limits.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}
