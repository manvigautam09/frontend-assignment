"use client";
import { useState } from "react";

import { DataItem } from "@/app/page";
import Pagination from "../Pagination";
import styles from "../../page.module.css";
import { Limits } from "@/app/constant";

export default function GithubUserTable({ data }: { data: DataItem[] }) {
  const [offSet, setOffSet] = useState(Limits[0]);
  const totalPages = Math.ceil(data.length / offSet);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Data Table</h1>
      <table className={styles.table} aria-label="Funding Data Table">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Percentage funded</th>
            <th scope="col">Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item["s.no"]}>
              <td>{item["s.no"]}</td>
              <td>{item["percentage.funded"]}</td>
              <td>{item["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setOffSet={setOffSet}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
}
