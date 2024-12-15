"use client";
import { useState } from "react";

import { DataItem } from "@/app/page";
import Pagination from "../Pagination";
import { Limits } from "@/app/constant";
import DarkModeToggle from "../DarkModeToggle";

export default function GithubUserTable({ data }: { data: DataItem[] }) {
  const [offSet, setOffSet] = useState(Limits[2]);
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

  const changeLimit = (val: number) => {
    setOffSet(val);
    setCurrentPage(1);
  };

  return (
    <div className="page">
      <div className="heading">
        <h2>User content</h2>
        <DarkModeToggle />
      </div>
      <div className="table-outer">
        <div className="table-contain">
          <table className="table" aria-label="Funding Data Table">
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Percentage funded</th>
                <th scope="col">Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice(currentPage * offSet - offSet, currentPage * offSet)
                .map((item) => (
                  <tr key={item["s.no"]}>
                    <td>{item["s.no"]}</td>
                    <td>{item["percentage.funded"]}</td>
                    <td>{item["amt.pledged"]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setOffSet={changeLimit}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
}
