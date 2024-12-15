"use client";
import { useState } from "react";

import { DataItem } from "@/app/page";
import Pagination from "../Pagination";
import { Limits } from "@/app/constant";
import styles from "../../page.module.css";
import LightMode from "@/app/assets/LightMode";
import DarkMode from "@/app/assets/DarkMode";

export default function GithubUserTable({ data }: { data: DataItem[] }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

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

  const changeLimit = (val: number) => {
    setOffSet(val);
    setCurrentPage(1);
  };

  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1>User content</h1>
        {isDarkMode ? (
          <LightMode onClick={toggleTheme} />
        ) : (
          <DarkMode onClick={toggleTheme} />
        )}
      </div>

      <table className={styles.table} aria-label="Funding Data Table">
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
